"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  Sparkles,
} from "lucide-react";
import { pricingPlans } from "@/lib/site-data";

type Currency = "USD" | "ETB";
type BillingPeriod = "monthly" | "annual";

// Configure this rate from your pricing settings or backend.
// This is an example rate, not a live exchange rate.
// Update it before using ETB conversion in production.
const USD_TO_ETB_RATE = 190;

const currencyConfig: Record<
  Currency,
  { symbol: string; label: string; locale: string; code: string }
> = {
  USD: {
    symbol: "$",
    label: "US Dollar",
    locale: "en-US",
    code: "USD",
  },
  ETB: {
    symbol: "Br",
    label: "Ethiopian Birr",
    locale: "en-ET",
    code: "ETB",
  },
};

function formatPrice(amount: number, currency: Currency) {
  const convertedAmount =
    currency === "ETB" ? amount * USD_TO_ETB_RATE : amount;

  const formatted = new Intl.NumberFormat(
    currencyConfig[currency].locale,
    {
      maximumFractionDigits: currency === "ETB" ? 0 : 2,
      minimumFractionDigits: 0,
    }
  ).format(convertedAmount);

  return currency === "USD"
    ? `$${formatted}`
    : `${formatted} Br`;
}

export function PricingPlans({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("monthly");

  const [currency, setCurrency] = useState<Currency>("ETB");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {showHeader && (
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Simple, transparent pricing
            </div>

            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              The right tools.
              <span className="block text-primary">
                The right investment.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Choose the TechVision solution that fits your organization.
              Get cloud-based business software, reliable support, and
              flexible plans designed to help you grow.
            </p>
          </div>
        )}

        {/* Pricing controls */}
        <div className="mt-10 flex flex-col items-center gap-5">
          {/* Billing period */}
          <div className="inline-flex items-center rounded-2xl border border-border bg-card p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              aria-pressed={billingPeriod === "monthly"}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                billingPeriod === "monthly"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingPeriod("annual")}
              aria-pressed={billingPeriod === "annual"}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                billingPeriod === "annual"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annually
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  billingPeriod === "annual"
                    ? "bg-white/15 text-white"
                    : "bg-emerald-500/10 text-emerald-600"
                }`}
              >
                SAVE 20%
              </span>
            </button>
          </div>

          {/* Currency selector */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe2 className="h-4 w-4" />
              Display prices in
            </span>

            <div className="relative">
              <select
                value={currency}
                onChange={(event) =>
                  setCurrency(event.target.value as Currency)
                }
                aria-label="Choose pricing currency"
                className="h-10 appearance-none rounded-xl border border-border bg-card py-2 pl-4 pr-10 text-sm font-medium text-foreground shadow-sm outline-none transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <option value="USD">USD ($)</option>
                <option value="ETB">ETB (Birr)</option>
              </select>

              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
            </div>
          </div>

          {currency === "ETB" && (
            <p className="max-w-lg text-center text-xs leading-5 text-muted-foreground">
              ETB amounts are estimates converted at a configured display
              rate of {USD_TO_ETB_RATE} ETB per USD. Final pricing is
              confirmed by the TechVision team.
            </p>
          )}
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {pricingPlans.map((plan) => {
            const monthlyPrice = Number(plan.monthly);
            const annualMonthlyPrice = Number(plan.annual);

            const displayedPrice =
              billingPeriod === "annual"
                ? annualMonthlyPrice
                : monthlyPrice;

            const monthlyEquivalent = displayedPrice;

            const annualTotal =
              billingPeriod === "annual"
                ? annualMonthlyPrice * 12
                : monthlyPrice * 12;

            const hasValidPrices =
              Number.isFinite(monthlyPrice) &&
              Number.isFinite(annualMonthlyPrice) &&
              monthlyPrice >= 0 &&
              annualMonthlyPrice >= 0;

            // Derive the actual discount from the supplied prices.
            // This avoids advertising a 20% discount if the data differs.
            const discount =
              monthlyPrice > 0 && annualMonthlyPrice < monthlyPrice
                ? Math.round(
                    (1 - annualMonthlyPrice / monthlyPrice) * 100
                  )
                : 0;

            return (
              <article
                key={plan.name}
                className={`group relative flex flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-7 ${
                  plan.popular
                    ? "border-primary/60 bg-card shadow-xl shadow-primary/[0.08] ring-1 ring-primary/20 lg:-translate-y-2"
                    : "border-border/80 bg-card/80 shadow-sm hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-black/[0.04]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-md shadow-primary/20">
                    Most popular
                  </div>
                )}

                {/* Plan details */}
                <div className="mt-2">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {plan.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-7 border-b border-border pb-6">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span
                      className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
                      aria-live="polite"
                    >
                      {hasValidPrices
                        ? formatPrice(displayedPrice, currency)
                        : "Contact us"}
                    </span>

                    {hasValidPrices && (
                      <span className="text-sm text-muted-foreground">
                        / month
                      </span>
                    )}
                  </div>

                  {hasValidPrices && (
                    <div className="mt-3 space-y-2">
                      {billingPeriod === "annual" ? (
                        <>
                          <p className="text-sm text-muted-foreground">
                            {formatPrice(annualTotal, currency)} billed
                            annually
                          </p>

                          {discount > 0 && (
                            <p className="inline-flex items-center rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                              Save {discount}% vs. monthly billing
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Billed monthly. Cancel according to your plan
                          agreement.
                        </p>
                      )}
                    </div>
                  )}

                  {!hasValidPrices && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Contact our team for a tailored quotation.
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-primary"
                        />
                      </span>

                      <span className="text-sm leading-6 text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`group/button mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                      : "border border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/[0.04]"
                  }`}
                >
                  {plan.cta}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:mt-14">
          <p className="text-sm text-muted-foreground">
            Need something tailored to your organization?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="mt-2 max-w-xl text-xs leading-5 text-muted-foreground">
            Prices and billing terms depend on the selected plan.
            Contact TechVision to confirm your final quotation and
            applicable payment terms.
          </p>
        </div>
      </div>
    </section>
  );
}