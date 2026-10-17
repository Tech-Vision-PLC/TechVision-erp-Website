// Solutions page product data aligned with TechVision's actual offerings.

import type { LucideIcon } from "lucide-react";

import {
  BookOpen,
  Building2,
  GraduationCap,
  ShieldCheck,
  Users,
  Wallet,
  Banknote,
  TrendingUp,
  Workflow,
  Globe,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  icon: LucideIcon;
  name: string;
  lead?: string;
  cardStyle?: "offset" | "plain";
  description: string;
  image: string;
  features?: string[];
  cards?: FeatureCard[];
  startingPrice?: number;
};

export const solutionsProducts: Product[] = [
  // 1. Cloud-Based ERP
  {
    slug: "erp",
    icon: Building2,
    name: "Cloud-Based ERP",
    lead: "Run your entire business from one connected platform.",
    description:
      "Simplify business operations with a cloud-based ERP system that connects finance, accounting, inventory, purchasing, sales, and reporting. Access your business information from anywhere while improving visibility, efficiency, and decision-making.",
    image: "/dashboards/erp-dashboard.png",
    features: [
      "Finance and accounting management",
      "Inventory and stock management",
      "Sales and purchasing workflows",
      "Business reporting and analytics",
      "Cloud access for your team",
      "Customizable business processes",
    ],
    cards: [
      {
        icon: Wallet,
        title: "Financial Management",
        description:
          "Organize accounts, transactions, expenses, and financial reporting.",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Business Intelligence",
        description:
          "Monitor operations and make informed decisions with business reports.",
      },
    ],
    startingPrice: 10000,
  },

  // 2. HR Management System
  {
    slug: "hr",
    icon: Users,
    name: "HR Management System",
    lead: "Manage your workforce with less paperwork.",
    cardStyle: "plain",
    description:
      "Manage the employee lifecycle with a centralized HR system for employee records, recruitment, attendance, leave, payroll, and performance. Streamline administrative work and help your HR team focus on building a productive workforce.",
    image: "/dashboards/hr-dashboard.png",
    features: [
      "Employee records and organization structure",
      "Attendance and shift management",
      "Leave applications and approvals",
      "Payroll and salary processing",
      "Recruitment and onboarding",
      "Employee performance tracking",
    ],
    cards: [
      {
        icon: Banknote,
        title: "Payroll Management",
        description:
          "Organize salary processing and payroll workflows.",
      },
      {
        icon: TrendingUp,
        title: "Workforce Insights",
        description:
          "Track attendance, employee information, and HR performance.",
      },
    ],
    startingPrice: 10000,
  },

  // 3. Education ERP
  {
    slug: "education-erp",
    icon: GraduationCap,
    name: "Education ERP",
    lead: "Connect school administration, students, and teachers.",
    description:
      "Bring school and university operations together in one platform. Manage student admissions, academic records, fee management, timetables, examinations, and communication to improve administrative efficiency and support better educational experiences.",
    image: "/dashboards/education-erp-dashboard.png",
    features: [
      "Student admissions and records",
      "Fee management and payment tracking",
      "Class, timetable, and academic management",
      "Examination and result management",
      "Teacher and staff administration",
      "Student progress and academic reporting",
    ],
    cards: [
      {
        icon: ShieldCheck,
        title: "School Administration",
        description:
          "Centralize academic records and everyday school operations.",
      },
      {
        icon: Wallet,
        title: "Fee Management",
        description:
          "Organize student fees, billing, and payment records.",
      },
    ],
    startingPrice: 10000,
  },

  // 4. Self-Hosted n8n Automation
  {
    slug: "self-hosted-n8n",
    icon: Workflow,
    name: "Self-Hosted n8n",
    lead: "Automate repetitive work while keeping control of your infrastructure.",
    description:
      "Get help deploying and managing n8n on your own server. Connect business applications, automate repetitive tasks, and build workflows for notifications, lead management, data synchronization, and internal operations while maintaining control over your hosting environment.",
    image: "/dashboards/n8n-dashboard.png",
    features: [
      "Self-hosted n8n deployment",
      "Application and API integrations",
      "Automated business workflows",
      "Lead and customer data automation",
      "Scheduled tasks and notifications",
      "Deployment and maintenance support",
    ],
    cards: [
      {
        icon: Workflow,
        title: "Workflow Automation",
        description:
          "Connect applications and reduce repetitive manual tasks.",
      },
      {
        icon: Settings,
        title: "Infrastructure Control",
        description:
          "Run automation on your own server with configurable access and deployment.",
      },
    ],
    startingPrice: 3900,
  },

  // 5. Website Development
  {
    slug: "website-development",
    icon: Globe,
    name: "Website Development",
    lead: "Build a professional online presence for your organization.",
    description:
      "Design and develop modern, responsive websites for businesses, schools, and organizations. From company websites to service pages and custom web applications, TechVision builds digital experiences tailored to your goals and audience.",
    image: "/dashboards/website-developmentdashboard.avif",
    features: [
      "Business and company websites",
      "Responsive mobile-friendly design",
      "SEO-friendly website structure",
      "Contact forms and lead generation",
      "Content management integration",
      "Website deployment and support",
    ],
    cards: [
      {
        icon: Globe,
        title: "Professional Web Design",
        description:
          "Present your brand with a modern website across desktop and mobile devices.",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Business Growth",
        description:
          "Help potential customers discover your services and contact your team.",
      },
    ],
    startingPrice: 15000,
  },
];