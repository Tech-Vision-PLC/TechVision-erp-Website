import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-16">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden border border-border bg-background px-8 py-12 lg:px-12 lg:py-14">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-[20px] md:text-[36px] lg:text-[42px] font-medium leading-[1.1] tracking-tight text-balance">
              Ready to transform your organization?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Book a personalized demo and see how TechVision can streamline
              learning, operations, and people management — all in one place.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
  <Button
    asChild
    variant="ghost"
    size="lg"
    className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-foreground bg-background px-8 py-3 font-mono text-[14px] text-foreground shadow-[-5px_5px_0_0_#00D38D]"
  >
    <Link href="/contact">
      Request Demo
      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
    </Link>
  </Button>

  <Button
    asChild
    size="lg"
    className="inline-flex items-center justify-center rounded-[3px] border border-foreground bg-foreground px-8 py-3 font-mono text-[14px] text-background shadow-[-5px_5px_0_0_#00D38D]"
  >
    <Link href="/pricing">View Pricing</Link>
  </Button>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
