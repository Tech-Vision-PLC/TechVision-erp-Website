import Link from "next/link";
import { Button } from "../ui/button";

export function SolutionsCta() {
  return (
    <section className="mx-auto max-w-[1216px] border-t border-border px-6 pt-10 pb-24 lg:px-8 lg:pt-12 lg:pb-24">
      <div className="flex flex-col gap-8 border border-border bg-background p-8 shadow-[-5px_5px_0_0_var(--border)] lg:flex-row lg:items-center lg:justify-between lg:p-12">
        <div className="max-w-[600px]">
          <h2 className="font-display text-[48px] font-semibold leading-[56px] align-middle tracking-[-0.48px] text-foreground lg:text-[48px] lg:leading-[56px]">
            Ready to transform your organization?
          </h2>

          <p className="mt-4 text-[18px] leading-[28px] tracking-[0px] align-middle text-muted-foreground">
            Book a personalized demo and see how TechVision can streamline
            learning, operations, and people management — all in one place.
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="inline-flex shrink-0 items-center justify-center self-start rounded-[2px] border border-foreground bg-background px-[32px] py-[16px] font-mono text-xs uppercase leading-[20px] tracking-[0.7px] text-foreground shadow-[-4px_4px_0_0_var(--border)] lg:self-auto"
        >
          <Link href="/contact">
            Schedule a consultation
          </Link>
        </Button>
      </div>
    </section>
  );
}