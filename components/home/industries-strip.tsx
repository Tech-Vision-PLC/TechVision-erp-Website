import Link from "next/link";
import {
  School,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Landmark,
  Radio,
  ArrowRight,
} from "lucide-react";

const homeIndustries = [
  {
    name: "Schools",
    icon: School,
  },
  {
    name: "Universities",
    icon: GraduationCap,
  },
  {
    name: "Training Centers",
    icon: BookOpen,
  },
  {
    name: "NGOs",
    icon: HeartHandshake,
  },
  {
    name: "Government",
    icon: Landmark,
  },
  {
    name: "Telecom",
    icon: Radio,
  },
];

export function IndustriesStrip() {
  return (
    <section className="relative py-10 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">

        {/* Section heading */}
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            Industries
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Built for the organizations shaping our communities
          </h2>
        </div>

        {/* Industry preview cards */}
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {homeIndustries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.name}
                href="/industries"
                className="group relative"
              >
                {/* Offset layer */}
                <div className="absolute -left-1 top-1 h-full w-full border border-primary bg-primary/10" />

                {/* Card */}
                <div className="relative z-10 flex min-h-[130px] h-full flex-col items-center justify-center border border-border bg-background px-4 py-6 text-center transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>

                  <h3 className="mt-4 font-display text-base font-medium text-foreground">
                    {industry.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Link to full Industries page */}
        <div className="mt-7 flex justify-center">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-primary"
          >
            Explore all industries

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}