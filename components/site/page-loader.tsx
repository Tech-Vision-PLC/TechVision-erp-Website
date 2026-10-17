"use client";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display text-xl">
          T
        </div>

        <p className="font-display text-lg tracking-tight">
          TechVision
        </p>

        <div className="h-[2px] w-36 overflow-hidden bg-border">
          <div className="h-full w-1/2 bg-primary animate-[loading-slide_0.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}