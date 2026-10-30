import { Spinner } from "@/components/ui/primitives";

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-24">
      <Spinner label="Loading RelayPad…" />
    </div>
  );
}
