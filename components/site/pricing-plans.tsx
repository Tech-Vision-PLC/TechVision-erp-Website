"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/lib/site-data";

export function PricingPlans({ showHeader = true }: { showHeader?: boolean }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {showHeader && (
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
              Simple, transparent pricing
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Buy a single product or save with a bundled suite. Every plan is cloud-based and
              includes local support.
            </p>
          </div>
        )}

        <div className="mt-10 flex items-center gap-4">
          <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-muted rounded-full p-1 transition-colors hover:bg-accent"
            aria-label="Toggle annual pricing"
          >
            <div
              className={`w-5 h-5 bg-primary rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual
          </span>
          {isAnnual && (
            <span className="ml-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-foreground">
              Save up to 20%
            </span>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col   bg-card p-7 border border-[#111827] bg-[#FCF8FA] shadow-[-8px_5px_0_-1px_#FCF8FA,-8px_5px_0_0_#111827] ${
                plan.popular
                  ? "border-primary "
                  : "border-[#111827]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-7  bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl tracking-tight">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-4xl tracking-tight">
                  ${isAnnual ? plan.annual : plan.monthly}
                </span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>

             

              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
               <Link
                href="/contact"
                className={`mt-6 inline-flex items-center justify-center gap-2  px-5 py-3 text-sm font-medium transition-colors group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-accent"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a custom plan?{" "}
          <Link href="/contact" className="text-foreground underline underline-offset-4 hover:text-primary">
            Talk to our team
          </Link>
        </p>
      </div>
    </section>
  );
}
