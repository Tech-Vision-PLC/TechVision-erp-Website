import { Workflow, Globe, Mail } from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  startingPrice: number;
};

export const products: Product[] = [
  {
    slug: "lms",
    name: "Learning Management System",
    short: "LMS",
    tagline: "Deliver world-class digital learning",
    description:
      "A complete LMS to create courses, track learner progress, run assessments, and deliver engaging blended learning at any scale.",
    image: "/dashboards/lms-dashboard.png",
    features: [
      "Course authoring & video lessons",
      "Automated grading & quizzes",
      "Learner progress analytics",
      "Certificates & gamification",
      "Live classes & discussion forums",
      "Mobile learning app",
    ],
    startingPrice: 49,
  },
  {
    slug: "education-erp",
    name: "Education ERP",
    short: "Education ERP",
    tagline: "Run your entire institution from one place",
    description:
      "Manage admissions, fees, timetables, exams, and parent communication in a single platform built for schools and universities.",
    image: "/dashboards/education-erp-dashboard.png",
    features: [
      "Admissions & enrollment",
      "Fee collection & invoicing",
      "Timetable & scheduling",
      "Exam & report cards",
      "Attendance tracking",
      "Parent–teacher portal",
    ],
    startingPrice: 79,
  },
  {
    slug: "erp",
    name: "ERP System",
    short: "ERP",
    tagline: "One system to run your whole business",
    description:
      "Unify finance, inventory, sales, and supply chain with a modular ERP that gives leadership real-time visibility across operations.",
    image: "/dashboards/erp-dashboard.png",
    features: [
      "Finance & accounting",
      "Inventory & warehousing",
      "Sales & CRM",
      "Procurement & supply chain",
      "Real-time dashboards",
      "Multi-branch support",
    ],
    startingPrice: 99,
  },
  {
    slug: "hr",
    name: "HR Management System",
    short: "HR Management",
    tagline: "Empower your people operations",
    description:
      "Streamline hiring, payroll, attendance, and performance so your HR team can focus on people instead of paperwork.",
    image: "/dashboards/hr-dashboard.png",
    features: [
      "Employee directory & records",
      "Payroll & compliance",
      "Attendance & leave",
      "Recruitment & onboarding",
      "Performance reviews",
      "Self-service portal",
    ],
    startingPrice: 59,
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const whyTechVision = [
  {
    title: "Cloud-Based",
    description: "Access everything securely from anywhere, on any device, with zero infrastructure to manage.",
  },
  {
    title: "Secure",
    description: "Bank-grade encryption, role-based access, and regular audits keep your data protected.",
  },
  {
    title: "Scalable",
    description: "From a single classroom to a national enterprise, TechVision grows with you.",
  },
  {
    title: "Mobile Friendly",
    description: "Fully responsive apps so your team and learners stay productive on the go.",
  },
  {
    title: "Easy Integration",
    description: "Connect with the tools you already use through open APIs and ready integrations.",
  },
  {
    title: "Local Ethiopian Support",
    description: "Dedicated onboarding and support from a team that understands your context.",
  },
];

export const industries = [
  { name: "Schools", description: "Digitize K–12 administration and classroom learning." },
  { name: "Universities", description: "Manage faculties, campuses, and research at scale." },
  { name: "Training Centers", description: "Run cohorts, certifications, and paid courses." },
  { name: "NGOs", description: "Track programs, beneficiaries, and impact reporting." },
  { name: "Government", description: "Secure, compliant systems for public institutions." },
  { name: "Telecom", description: "Manage workforce and operations across regions." },
  { name: "Businesses", description: "Unify finance, people, and operations in one place." },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting started",
    monthly: "50",
    annual: "40",
    features: [
      "1 product module",
      "Up to 100 users",
      "Cloud hosting",
      "Email support",
      "Mobile access",
      "Limited support"
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing organizations",
    monthly:65,
    annual: 52,
    features: [
      "Up to 2 product modules",
      "Up to 250 users",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom branding",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Education Suite",
    description: "LMS + Education ERP bundle",
    monthly: 90,
    annual: 72,
    features: [
      "LMS + Education ERP",
      "Unlimited students",
      "Parent–teacher portal",
      "Exam & fee management",
      "Dedicated onboarding",
      "Local Ethiopian support",
    ],
    cta: "Talk to sales",
    popular: true,
  },
  {
    name: "Enterprise Suite",
    description: "All products, fully managed",
   
    features: [
      "All four products",
      "Unlimited users",
      "Custom integrations",
      "SLA & security audit",
      "24/7 dedicated support",
      "On-premise option",
    ],
    cta: "Talk to sales",
    popular: true,
  },
];

export const services = [
  {
    name: "n8n Hosting",
    category: "Business Automation",
    description:
      "Automate repetitive tasks and connect your favorite business applications with your own hosted n8n instance.",
    price: "3,900",
    currency: "ETB",
    period: "/ month",
    icon: Workflow,
    badge: "Monthly Subscription",
    features: [
      "Dedicated n8n instance",
      "Secure server deployment",
      "Workflow automation",
      "Connect APIs and business apps",
      "Ongoing hosting",
    ],
    note: "Custom integrations and advanced support may cost extra.",
    cta: "Get Started",
    href: "/contact?service=n8n-hosting",
    featured: true,
    comingSoon: false,
  },
  {
    name: "Website Development",
    category: "Web Design & Development",
    description:
      "Get a professional website tailored to your business, from a simple company profile to a comprehensive digital platform.",
    price: "Custom",
    currency: "",
    period: " pricing",
    icon: Globe,
    badge: "Based on Page Count",
    features: [
      "Modern, responsive design",
      "Pricing based on page count",
      "Mobile-friendly experience",
      "SEO-friendly website structure",
      "Deployment and launch support",
    ],
    note: "Final pricing depends on page count, features, and integrations.",
    cta: "Request a Product",
    href: "/contact?service=website-development",
    featured: false,
    comingSoon: false,
  },
  {
    name: "Business Email",
    category: "Professional Communication",
    description:
      "Give your business a professional identity with email addresses using your own domain name.",
    price: "Coming",
    currency: "",
    period: " soon",
    icon: Mail,
    badge: "Coming Soon",
    features: [
      "Custom-domain email addresses",
      "Professional business communication",
      "Centralized email management",
      "Business-focused email infrastructure",
      "Pricing to be announced",
    ],
    note: "Our business email service is currently in development.",
    cta: "Contact Us",
    href: "/contact?service=business-email",
    featured: false,
    comingSoon: true,
  },
];