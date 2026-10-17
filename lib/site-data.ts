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
    monthly: "10,000",
    annual: "96,000",
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
    monthly: 13000,
    annual: 124000,
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
    monthly: 18000,
    annual: 172800,
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
    monthly: 24000,
    annual: 230400,
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

export const bundles = [
  {
    name: "Education Suite",
    products: ["LMS", "Education ERP"],
    description: "Everything an institution needs to teach and operate.",
    save: "Save 25%",
  },
  {
    name: "Business Suite",
    products: ["ERP", "HR Management"],
    description: "Run finance, operations, and people from one platform.",
    save: "Save 25%",
  },
  {
    name: "Enterprise Suite",
    products: ["LMS", "Education ERP", "ERP", "HR Management"],
    description: "The complete TechVision platform, fully integrated.",
    save: "Save 35%",
  },
];
