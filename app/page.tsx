import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { HomeHero } from "@/components/home/home-hero";
import { StatsBand } from "@/components/home/stats-band";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { IndustriesStrip } from "@/components/home/industries-strip";
import { PricingPreview } from "@/components/home/pricing-preview";
import { CtaBanner } from "@/components/site/cta-banner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <HomeHero />
      <StatsBand />
      <SolutionsGrid />
      <IndustriesStrip />
      <PricingPreview />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}
