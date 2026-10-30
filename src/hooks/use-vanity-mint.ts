"use client";
/**
 * React hook around the vanity worker. Owns the worker lifecycle, exposes
 * progress, and keeps the found keypair in component memory only.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { Keypair } from "@solana/web3.js";
import {
  estimateDifficulty,
  isValidVanityPattern,
  type VanityPattern,
} from "@/lib/vanity/vanity-core";
import type { WorkerRequest, WorkerResponse } from "@/workers/vanity-worker";

export interface VanityStatus {
  state: "idle" | "running" | "paused" | "found" | "exhausted" | "cancelled" | "failed";
  attempts: number;
  elapsedMs: number;
  difficulty: { expectedAttempts: number; label: string; secondsEstimate: number } | null;
  error: string | null;
}

export interface VanityHandle extends VanityStatus {
  /** The generated keypair — in-memory only. Null unless state === "found". */
  keypair: Keypair | null;
  publicKey: string | null;
  /** The pattern currently associated with this search (for resume). */
  lastPattern: VanityPattern | null;
  start(pattern: VanityPattern, base?: { attempts: number; elapsedMs: number }): void;
  /** Stop the worker but keep the honest cumulative attempt count. */
  pause(): void;
  /** Continue the paused search — cumulative attempts are preserved. */
  resume(): void;
  cancel(): void;
  /** Forget the keypair (e.g. on unmount or when the user discards it). */
  discard(): void;
}

export function useVanityMint(): VanityHandle {
  const workerRef = useRef<Worker | null>(null);
  const tokenRef = useRef(0);
  const keypairRef = useRef<Keypair | null>(null);
  const baseRef = useRef<{ attempts: number; elapsedMs: number }>({ attempts: 0, elapsedMs: 0 });
  const patternRef = useRef<VanityPattern | null>(null);
  const [lastPattern, setLastPattern] = useState<VanityPattern | null>(null);
  const [status, setStatus] = useState<VanityStatus>({
    state: "idle",
    attempts: 0,
    elapsedMs: 0,
    difficulty: null,
    error: null,
  });
  const [publicKey, setPublicKey] = useState<string | null>(null);
  // Mirror of status for callbacks that need the latest counters (resume).
  const statusRef = useRef(status);
  statusRef.current = status;

  const terminateWorker = useCallback(() => {
    workerRef.current?.terminate();
    workerRef.current = null;
  }, []);

  useEffect(() => {
    // Fresh worker per session; killed on unmount so no search leaks.
    return () => {
      terminateWorker();
      // Drop any residual key material from memory.
      keypairRef.current = null;
    };
  }, [terminateWorker]);

  const start = useCallback(
    (pattern: VanityPattern, base?: { attempts: number; elapsedMs: number }) => {
      if (!isValidVanityPattern(pattern.value)) {
        setStatus((s) => ({
          ...s,
          state: "idle",
          error: "Invalid pattern: use 1–8 Base58 characters (no 0, O, I, l).",
        }));
        return;
      }
      terminateWorker();
      keypairRef.current = null;
      setPublicKey(null);
      baseRef.current = { attempts: base?.attempts ?? 0, elapsedMs: base?.elapsedMs ?? 0 };
      patternRef.current = pattern;
      setLastPattern(pattern);
      const token = ++tokenRef.current;
      const baseAttempts = baseRef.current.attempts;
      const baseElapsed = baseRef.current.elapsedMs;
      setStatus((s) => ({
        state: "running",
        attempts: baseAttempts,
        elapsedMs: baseElapsed,
        difficulty: s.difficulty ?? estimateDifficulty(pattern.value),
        error: null,
      }));

      const worker = new Worker(
        new URL("../workers/vanity-worker.ts", import.meta.url),
      );
      workerRef.current = worker;
      worker.onmessage = (ev: MessageEvent<WorkerResponse>) => {
        const msg = ev.data;
        if (msg.token !== tokenRef.current) return;
        switch (msg.type) {
          case "progress":
            setStatus((s) =>
              s.state === "running"
                ? {
                    ...s,
                    attempts: baseAttempts + msg.attempts,
                    elapsedMs: baseElapsed + msg.elapsedMs,
                  }
                : s,
            );
            break;
          case "found": {
            // Reconstruct the Keypair client-side; the transferred buffer means
            // the worker no longer holds the secret.
            const kpBase = baseAttempts;
            const elapsedBase = baseElapsed;
            void import("@solana/web3.js").then(({ Keypair: KP }) => {
              const kp = KP.fromSecretKey(msg.secretKey);
              if (kp.publicKey.toBase58() !== msg.publicKey) {
                setStatus((s) => ({
                  ...s,
                  state: "failed",
                  error: "Vanity verification failed — discarding candidate.",
                }));
                return;
              }
              keypairRef.current = kp;
              setPublicKey(msg.publicKey);
              setStatus((s) => ({
                ...s,
                state: "found",
                attempts: kpBase + msg.attempts,
                elapsedMs: elapsedBase + msg.elapsedMs,
              }));
            });
            break;
          }
          case "exhausted":
            setStatus((s) => ({
              ...s,
              state: "exhausted",
              attempts: baseAttempts + msg.attempts,
            }));
            break;
          case "cancelled":
            setStatus((s) => ({
              ...s,
              state: "cancelled",
              attempts: baseAttempts + msg.attempts,
            }));
            break;
        }
      };
      const req: WorkerRequest = { type: "start", pattern, maxAttempts: 20_000_000, token };
      worker.postMessage(req);
    },
    [terminateWorker],
  );

  /** Stop the worker immediately; keep the cumulative counters for resume. */
  const pause = useCallback(() => {
    if (workerRef.current) {
      terminateWorker();
      tokenRef.current++; // invalidate any in-flight worker messages
      setStatus((s) => (s.state === "running" ? { ...s, state: "paused" } : s));
    }
  }, [terminateWorker]);

  /** Continue the paused search with honest cumulative attempts. */
  const resume = useCallback(() => {
    const s = statusRef.current;
    if (s.state !== "paused" || !patternRef.current) return;
    start(patternRef.current, { attempts: s.attempts, elapsedMs: s.elapsedMs });
  }, [start]);

  const cancel = useCallback(() => {
    terminateWorker();
    tokenRef.current++;
    setStatus((s) =>
      s.state === "running" || s.state === "paused" ? { ...s, state: "cancelled" } : s,
    );
  }, [terminateWorker]);

  const discard = useCallback(() => {
    terminateWorker();
    tokenRef.current++;
    keypairRef.current = null;
    baseRef.current = { attempts: 0, elapsedMs: 0 };
    patternRef.current = null;
    setLastPattern(null);
    setPublicKey(null);
    setStatus({
      state: "idle",
      attempts: 0,
      elapsedMs: 0,
      difficulty: null,
      error: null,
    });
  }, [terminateWorker]);

  return {
    ...status,
    keypair: keypairRef.current,
    publicKey,
    lastPattern,
    start,
    pause,
    resume,
    cancel,
    discard,
  };
}
