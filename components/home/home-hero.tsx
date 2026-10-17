"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative bg-background\">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-12 lg:pb-14">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground">
            IT Infrastructure Solutions
          </p>

          <h1 className="mt-6 max-w-5xl font-display text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-tight">
            Transform your Organization with Smart digital Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            LMS, Education ERP, ERP, and HR Management — one cloud platform to
            run your school, university, or business smarter. Built for scale,
            backed by local Ethiopian support.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
  asChild
  variant="ghost"
  size="lg"
  className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-[#111827] bg-[#111827] px-6 py-2 font-mono text-[12px] text-white shadow-[-4px_4px_0_0_#00D38D] hover:bg-[#111827] hover:text-white"
>
  <Link href="/contact">
    REQUEST DEMO
    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
  </Link>
</Button>
           <Button
  asChild
  size="lg"
  className="inline-flex items-center justify-center rounded-[3px] border border-[#111827] bg-[#FBF8F8] px-6 py-2 font-mono text-[12px] text-[#111827] shadow-[-4px_4px_0_0_#FCF8FA,-4px_4px_0_1px_#111827] hover:bg-[#FBF8F8] hover:text-[#111827]"
>
  <Link href="/solutions">VIEW SERVICES</Link>
</Button>
          </div>

          <div className="mt-10 w-full border-t border-border pt-5 grid grid-cols-1 sm:grid-cols-3 font-mono text-xs text-muted-foreground">
            {[
              "No credit card required",
              "14-day free trial",
              "Local support",
            ].map((item) => (
              <span key={item} className="text-center">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
