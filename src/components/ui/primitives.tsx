"use client";

import { ReactNode } from "react";

/* DotPad design-system primitives. Deep forest surfaces, emerald accents. */

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-night-700/70 bg-night-900/70 p-5 transition-colors duration-200 hover:border-mint-700/70 ${className}`}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  "aria-label"?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-50";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  } as const;
  const variants = {
    primary:
      "border border-mint-400/40 bg-mint-500 text-white shadow-glow-mint hover:border-mint-300/70 hover:bg-mint-400 hover:shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:bg-mint-500 disabled:hover:border-mint-400/40",
    secondary:
      "border border-ice-600/40 bg-ice-600/10 text-ice-300 hover:border-ice-500/50 hover:bg-ice-600/20 disabled:hover:bg-ice-600/10 disabled:hover:border-ice-600/40",
    ghost:
      "text-night-400 hover:bg-night-800 hover:text-white disabled:hover:bg-transparent disabled:hover:text-night-400",
    danger: "border border-red-400/30 bg-down text-white hover:bg-red-400/90",
  } as const;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "mint" | "ice" | "warn" | "danger" | "success";
}) {
  const tones = {
    neutral: "border-night-700 bg-night-800 text-night-400",
    mint: "border-mint-700/50 bg-mint-700/10 text-mint-300",
    ice: "border-ice-600/50 bg-ice-600/10 text-ice-300",
    warn: "border-amber-500/40 bg-amber-500/10 text-amber-300",
    danger: "border-red-500/40 bg-red-500/10 text-red-300",
    success: "border-mint-500/40 bg-mint-500/10 text-mint-300",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Input({
  label,
  hint,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white">{label}</span>
      <input
        {...props}
        aria-invalid={error ? true : undefined}
        className={`w-full rounded-xl border bg-night-850 px-3.5 py-2.5 text-sm text-white placeholder:text-night-500 focus:border-mint-400 focus:outline-none ${
          error ? "border-red-500/60" : "border-night-700"
        }`}
      />
      {hint && !error && <span className="mt-1 block text-xs text-night-500">{hint}</span>}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

export function TextArea({
  label,
  hint,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  hint?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white">{label}</span>
      <textarea
        {...props}
        aria-invalid={error ? true : undefined}
        className={`w-full rounded-xl border bg-night-850 px-3.5 py-2.5 text-sm text-white placeholder:text-night-500 focus:border-mint-400 focus:outline-none ${
          error ? "border-red-500/60" : "border-night-700"
        }`}
      />
      {hint && !error && <span className="mt-1 block text-xs text-night-500">{hint}</span>}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

export function Spinner({ label }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-night-500" role="status">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-night-700 border-t-mint-400" />
      {label}
    </span>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-night-600 px-6 py-14 text-center">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 max-w-md text-sm text-night-500">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function ErrorBanner({
  title,
  message,
  onRetry,
}: {
  title: string;
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-red-500/40 bg-red-500/10 p-4"
    >
      <p className="font-medium text-red-300">{title}</p>
      <p className="mt-1 break-words text-sm text-red-200/80">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 rounded-lg border border-red-500/40 px-3 py-1.5 text-sm text-red-200 hover:bg-red-500/20"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export function CopyChip({ value, label }: { value: string; label: string }) {
  return (
    <button
      onClick={() => void navigator.clipboard?.writeText(value)}
      title={`Copy ${label}`}
      className="inline-flex max-w-full items-center gap-2 rounded-lg border border-night-700 bg-night-850 px-2.5 py-1 font-mono text-xs text-mint-300 transition-colors duration-200 hover:border-mint-500"
    >
      <span className="truncate">{value}</span>
      <span aria-hidden>⧉</span>
    </button>
  );
}
