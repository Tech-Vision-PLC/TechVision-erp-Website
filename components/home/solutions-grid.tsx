import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";

const homeSolutions = [
  {
    name: "Learning Management System",
    short: "LMS",
    icon: BookOpen,
    href: "/solutions#lms",
  },
  {
    name: "Education ERP",
    short: "Education ERP",
    icon: GraduationCap,
    href: "/solutions#education-erp",
  },
  {
    name: "ERP System",
    short: "ERP",
    icon: Building2,
    href: "/solutions#erp",
  },
  {
    name: "HR Management",
    short: "HR",
    icon: Users,
    href: "/solutions#hr",
  },
];

export function SolutionsGrid() {
  return (
    <section id="solutions" className="relative py-10 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">

        {/* Section heading */}
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            Solutions
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything you need to work smarter
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Four connected products built to simplify learning, operations,
            finance, and workforce management.
          </p>
        </div>

        {/* Solution preview cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeSolutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <Link
                key={solution.name}
                href={solution.href}
                className="group relative"
              >
                {/* Offset layer */}
                <div className="absolute -left-1 top-1 h-full w-full border border-primary bg-primary/10" />

                {/* Main card */}
                <div className="relative z-10 flex min-h-[180px] h-full flex-col border border-border bg-background p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>

                    <ArrowRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                  </div>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    {solution.short}
                  </p>

                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-foreground">
                    {solution.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Full Solutions page */}
        <div className="mt-7 flex justify-center">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-primary"
          >
            Explore all solutions

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}