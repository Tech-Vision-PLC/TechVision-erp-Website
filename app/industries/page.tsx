import type { Metadata } from "next"; 
import Link from "next/link"; 
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  HeartHandshake, 
  Landmark, 
  Radio, 
  ArrowRight, 
} from "lucide-react"; 
import { SiteNav } from "@/components/site/site-nav"; 
import { SiteFooter } from "@/components/site/site-footer"; 
import { PageHeader } from "@/components/site/page-header"; 
 
export const metadata: Metadata = { 
  title: "Industries — TechVision", 
  description: 
    "TechVision powers schools, universities, training centers, NGOs, government, telecom, and businesses with tailored digital solutions.", 
}; 
 
const industryDetails = [ 
  { 
    name: "Schools", 
    icon: School, 
    description: "Digitize K–12 administration, simplify student record management, and enhance classroom technology infrastructure.", 
    linkLabel: "Explore K-12 Solutions",
  }, 
  { 
    name: "Universities", 
    icon: GraduationCap, 
    description: "Manage multiple faculties, campuses, admissions, and research at national scale.", 
    linkLabel: "Higher Ed Tech",
  }, 
  { 
    name: "Training Centers", 
    icon: BookOpen, 
    description: "Run cohorts, sell courses, issue certificates, and track learner outcomes.", 
    linkLabel: "LMS",
  }, 
  { 
    name: "NGOs", 
    icon: HeartHandshake, 
    description: "Track programs, beneficiaries, staff, and impact reporting transparently.", 
    linkLabel: "ERP & HR",
  }, 
  { 
    name: "Government", 
    icon: Landmark, 
    description: "Secure, compliant systems for public institutions and workforce management.", 
    linkLabel: "ERP & HR",
  }, 
  { 
    name: "Telecom", 
    icon: Radio, 
    description: "Coordinate distributed teams, operations, and finance across regions.", 
    linkLabel: "ERP & HR",
  }, 
]; 
 
export default function IndustriesPage() { 
  return ( 
    <main className="relative min-h-screen overflow-x-hidden"> 
      <SiteNav /> 

      <PageHeader 
        eyebrow="Industries" 
        title="Made for the way you work" 
        description="Discover how TechVision's infrastructure solutions empower organizations across diverse sectors to achieve engineered excellence and reliable performance." 
      /> 
 
      <section className="relative pb-20 lg:pb-24"> 
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12"> 
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
            {industryDetails.map((industry) => { 
              const Icon = industry.icon; 

              return ( 
                <div
                key={industry.name}
                className="relative transition-transform duration-300 hover:scale-[1.02] hover:z-10">
                  <div className="absolute -left-3 top-3 h-full w-full border border-primary bg-primary/10" />
                  <div className="relative z-10 flex min-h-[300px] h-full flex-col border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary"> 
                    <Icon className="h-6 w-6" /> 
                  </span> 

                  <h3 className="mt-5 font-display text-2xl tracking-tight">
                    {industry.name}
                  </h3> 

                  <p className="mt-2 text-muted-foreground leading-relaxed"> 
                    {industry.description} 
                  </p> 

                  <Link 
                    href="/contact" 
                    className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group" 
                  > 
                    {industry.linkLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /> 
                  </Link> 
                </div> 
              </div>
              ); 
            })} 
          </div> 
        </div> 
      </section> 

      <section className="border-t border-border px-6 py-24 text-center lg:px-12 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Don't see your sector?
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our engineering teams design bespoke infrastructure solutions
            adaptable to any complex operational environment. Let's discuss
            your unique requirements.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Contact Engineering
            </Link>

            
          </div>
        </div>
      </section>
 
      <SiteFooter /> 
    </main> 
  ); 
}