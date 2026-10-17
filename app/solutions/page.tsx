import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SolutionsHero } from "@/components/solutions/solutions-hero";
import { ProductSections } from "@/components/solutions/product-sections";
import { SolutionsCta } from "@/components/solutions/solutions-cta";
export const metadata: Metadata = {
  title: "Solutions — TechVision",
  description:
    "Explore TechVision's LMS, Education ERP, ERP, and HR Management System. Buy individually or bundle them into a suite.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <SolutionsHero />
      <ProductSections />
      <SolutionsCta />
      <SiteFooter />
    </main>
  );
}
