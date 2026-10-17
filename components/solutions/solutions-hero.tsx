import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-border">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="flex max-w-4xl flex-col gap-4">
          <span className="font-mono text-[14px] uppercase tracking-widest text-muted-foreground">
            Enterprise Solutions
          </span>

          <h1 className="font-display text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[1.1] tracking-tight text-foreground">
            Powerful products for learning, operations, and people
          </h1>

          <p className="max-w-[640px] text-lg text-muted-foreground">
            Each TechVision product is a complete, cloud-based system on its own
            - and even more powerful together. Buy what you need, scale when
            you&apos;re ready.
          </p>
{/** 
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-foreground bg-foreground px-8 py-3 font-mono text-[14px] text-background shadow-[-5px_5px_0_0_#00D38D]"
            >
              <Link href="#lms">
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="inline-flex items-center justify-center rounded-[3px] border border-foreground bg-background px-8 py-3 font-mono text-[14px] text-foreground shadow-[-5px_5px_0_0_#00D38D]"
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>*/}
        </div>
      </div>
      
    </section>
  );
}
