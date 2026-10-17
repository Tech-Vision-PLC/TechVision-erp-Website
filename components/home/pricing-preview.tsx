import Link from "next/link";
import { Rocket, TrendingUp, Layers, ArrowRight } from "lucide-react";

const pricingPreview = [
  {
    name: "Starter",
    description: "For small teams getting started",
    price: "$49",
    suffix: "/mo",
    icon: Rocket,
  },
  {
    name: "Growth",
    description: "For growing organizations",
    price: "$79",
    suffix: "/mo",
    icon: TrendingUp,
  },
  {
    name: "Suites",
    description: "Bundle products and save as you scale",
    price: "Custom",
    suffix: "",
    icon: Layers,
  },
];

export function PricingPreview() {
  return (
    <section className="relative py-10 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            Pricing
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Flexible plans that grow with you
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Start with what you need today and scale as your organization grows.
          </p>
        </div>

        {/* Preview cards */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {pricingPreview.map((plan) => {
            const Icon = plan.icon;

            return (
              <Link
                key={plan.name}
                href="/pricing"
                className="group relative"
              >
                {/* Green offset */}
                <div className="absolute -left-1 top-1 h-full w-full border border-primary bg-primary/10" />

                {/* Card */}
                <div className="relative z-10 flex min-h-[190px] h-full flex-col border border-border bg-background p-6 transition-transform duration-300 group-hover:-translate-y-1">

                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>

                    <ArrowRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                    {plan.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <span className="font-display text-2xl font-medium text-foreground">
                      {plan.price}
                    </span>

                    {plan.suffix && (
                      <span className="ml-1 text-xs text-muted-foreground">
                        {plan.suffix}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pricing page link */}
        <div className="mt-7 flex justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-primary"
          >
            Explore all pricing
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}