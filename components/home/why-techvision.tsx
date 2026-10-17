import { whyTechVision } from "@/lib/site-data";
import { Cloud, ShieldCheck, TrendingUp, Smartphone, Plug, Headphones } from "lucide-react";

const icons = [Cloud, ShieldCheck, TrendingUp, Smartphone, Plug, Headphones];

export function WhyTechVision() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/40 border-y border-border">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">Why TechVision</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
            Built to be reliable, secure, and scalable
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyTechVision.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-7 hover-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl tracking-tight">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
