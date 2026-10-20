import Link from "next/link";
import {
  ArrowRight,
  Check,
  Headphones,
} from "lucide-react";
import { services } from "@/lib/site-data";




export function BundlesSection() {
  return (
    <section
      id="pricing"
      className="relative py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#008F65]">
            TechVision Services
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Solutions for your
            <br />
            <span className="text-[#008F65]">
              digital growth.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            From business automation to professional website development,
            TechVision helps Ethiopian businesses simplify operations,
            strengthen their online presence, and grow with technology.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.name}
                className="relative flex h-full flex-col"
              >
                {/* Offset border */}
                <div
                  className={`absolute -left-1 top-1 h-full w-full border-b-4 border-l-4 ${
                    service.featured
                      ? "border-[#00D38D]"
                      : "border-[#002333]"
                  }`}
                />

                {/* Card */}
                <div
                  className={`relative z-10 flex h-full flex-col border border-[#002333] p-7 ${
                    service.featured
                      ? "bg-[#00D38D]/5"
                      : "bg-background"
                  }`}
                >
                  {/* Icon and badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#002333]/10 bg-[#00D38D]/10">
                      <Icon className="h-6 w-6 text-[#008F65]" />
                    </div>

                    <span
                      className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                        service.comingSoon
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-700"
                          : "border-[#002333]/15 text-muted-foreground"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Service title */}
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {service.category}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {service.name}
                  </h3>

                  <p className="mt-3 min-h-[96px] text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mt-6 border-y border-[#002333]/10 py-5">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span
                        className={`font-display font-semibold tracking-tight ${
                          service.comingSoon
                            ? "text-3xl"
                            : "text-4xl"
                        }`}
                      >
                        {service.price}
                      </span>

                      {service.currency && (
                        <span className="text-sm font-medium text-muted-foreground">
                          {service.currency}
                        </span>
                      )}

                      <span className="text-sm text-muted-foreground">
                        {service.period}
                      </span>
                    </div>

                    {service.name === "Website Development" }
                  </div>

                  {/* Features */}
                  <div className="mt-6">
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      What's included
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#008F65]" />

                          <span className="text-sm leading-5 text-foreground/85">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <Link
                      href={service.href}
                      className={`group flex w-full items-center justify-center gap-2 border px-4 py-3.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                        service.featured
                          ? "border-[#002333] bg-[#002333] text-white hover:bg-[#003D50]"
                          : "border-[#002333] text-foreground hover:bg-[#002333] hover:text-white"
                      }`}
                    >
                      {service.cta}

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <p className="mt-3 text-xs leading-5 text-muted-foreground">
                      {service.note}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Support and custom services */}
        <div className="mt-12 flex flex-col gap-6 border border-[#002333]/15 bg-muted/30 p-6 md:flex-row md:items-center md:justify-between lg:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#002333]/10 bg-background">
              <Headphones className="h-5 w-5 text-[#008F65]" />
            </div>

            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                Need a custom digital solution?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us about your business. We can help with custom
                software, ERP, HR management, education systems, and
                integrations tailored to your needs.
              </p>
            </div>
          </div>

          <Link
            href="/contact?service=custom-software"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#00D38D] px-5 py-3.5 font-mono text-xs uppercase tracking-wider text-[#002333] transition-colors hover:bg-[#00BD7E]"
          >
            Discuss Your Project

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}