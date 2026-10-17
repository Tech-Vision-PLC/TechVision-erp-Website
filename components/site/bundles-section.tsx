import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { bundles } from "@/lib/site-data";

export function BundlesSection() {
  return (
    <section className="relative pt-4 pb-16 lg:pt-6 lg:pb-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
              Bundles
            </h2>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-foreground">
              Save more with bundled suites
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Combine products into a single suite and unlock deeper integration
              plus bundle pricing.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {bundles.map((bundle, idx) => {
            const featured = idx === 2;

            return (
              <div key={bundle.name} className="relative">
                {/* Offset layer behind the card */}
                <div
                  className={`absolute -left-1 top-1 h-full w-full border-l-4 border-b-4 ${
                    featured ? "border-[#00D38D]" : "border-[#002333]"
                  }`}
                />

                {/* Actual card */}
                <div
                  className={`relative z-10 flex h-full flex-col border border-[#002333] p-7 transition-colors hover:bg-accent/40 ${
                    featured ? "bg-[#00D38D]/5" : "bg-background"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl tracking-tight">
                      {bundle.name}
                    </h3>

                    <span className="border border-[#002333] bg-[#00D38D]/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground">
                      {bundle.save}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {bundle.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {bundle.products.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 text-[#00D38D]" />
                        <span className="text-sm text-foreground/90">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#pricing"
                    className="group mt-auto inline-flex items-center gap-2 pt-7 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                  >
                    View bundle pricing
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}