import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Loading
        </span>
        <Spinner className="size-6 text-foreground/80" />
      </div>
    </div>
  );
}
