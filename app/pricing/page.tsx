import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { PricingPlans } from "@/components/site/pricing-plans";
import { BundlesSection } from "@/components/site/bundles-section";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { SolutionsCta } from "@/components/solutions/solutions-cta";

export const metadata: Metadata = {
  title: "Pricing — TechVision",
  description:
    "Transparent pricing for TechVision products. Choose Starter, Growth, Education Suite, or Enterprise Suite — or buy products individually.",
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <PageHeader
        eyebrow="Pricing"
        title="Pricing that scales with your organization"
        description="Buy individual products or save with a bundled suite. Every plan includes cloud hosting, mobile access, and local Ethiopian support."
      />
      <PricingPlans showHeader={false} />
      <BundlesSection />
      <PricingFaq />
      
      <SolutionsCta/>
      <SiteFooter />
    </main>
  );
}
