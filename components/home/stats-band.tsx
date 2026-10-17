"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 500, suffix: "+", decimals: 0, label: "Organizations served" },
  { end: 1, suffix: "M+", decimals: 0, label: "Active learners & users" },
  { end: 99.9, suffix: "%", decimals: 1, label: "Platform uptime" },
  { end: 24, suffix: "/7", decimals: 0, label: "Local support" },
];

function AnimatedNumber({
  end,
  suffix = "",
  decimals = 0,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = end * progress;

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <div ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </div>
  );
}
export function StatsBand() {
  return (
    <section className="relative bg-background pt-6 pb-10 lg:pt-8 lg:pb-12">
      <div className="mx-auto mb-8 h-px w-64 bg-primary/50" />
      <div className="max-w-[1320px] mx-auto px-10 lg:px-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                <AnimatedNumber
                end={stat.end}
                suffix={stat.suffix}
                decimals={stat.decimals}/>
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
