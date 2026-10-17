import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  X,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  Learn: [
    {
      label: "Free Courses",
      href: "https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login",
    },
    {
      label: "Online Bootcamp",
      href: "https://learn.techvision.edu.et/batch-application",
    },
    {
      label: "In-Person Bootcamp",
      href: "https://learn.techvision.edu.et/batch-application",
    },
    {
      label: "Curriculum",
      href: "#",
    },
  ],

  Company: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Success Stories",
      href: "/success-stories",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "Contact",
      href: "mailto:info@techvision.edu.et",
    },
  ],

  Legal: [
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Terms of Service",
      href: "#",
    },
  ],
};

const socialLinks = [
  {
    icon: X,
    href: "#",
    label: "X",
  },
 
  {
    icon: Send,
    href: "#",
    label: "Telegram",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020705] border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#00C853]/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#00C853]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* CTA Section */}
        <div className="py-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-[#00C853]/20 bg-[#00C853]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#00C853]">
                  Join TechVision
                </span>

                <h2 className="mt-4 max-w-2xl text-3xl font-black text-white md:text-4xl">
                  Start your software engineering journey today.
                </h2>

                <p className="mt-4 max-w-2xl text-[#9FB3A8]">
                  Learn from industry mentors, build real-world projects,
                  and prepare for high-paying tech careers.
                </p>
              </div>

              <Link
                href="https://learn.techvision.edu.et/batch-application"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C853] px-6 py-4 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,200,83,0.35)]"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-14 border-t border-white/10 py-16 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:border-[#00C853]/50 group-hover:bg-[#00C853]/10">
                <Image
                  src="/logo.svg"
                  alt="TechVision"
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-white">
                  TechVision
                </h3>
                <p className="text-xs text-[#00C853]">
                  Frontend Engineering Bootcamp
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-relaxed text-[#9FB3A8]">
              Ethiopia's leading frontend engineering bootcamp helping
              students build real-world skills, create portfolio projects,
              and launch successful careers in technology.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3 text-[#9FB3A8]">
                <MapPin
                  size={18}
                  className="mt-0.5 text-[#00C853]"
                />
                <span>
                  Addis Ababa, Ethiopia
                  <br />
                  In-Person & Online Learning
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#9FB3A8]">
                <Phone
                  size={18}
                  className="text-[#00C853]"
                />
                <a
                  href="tel:+251900000000"
                  className="hover:text-white"
                >
                  +251 90 000 0000
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#9FB3A8]">
                <Mail
                  size={18}
                  className="text-[#00C853]"
                />
                <a
                  href="mailto:info@techvision.edu.et"
                  className="hover:text-white"
                >
                  info@techvision.edu.et
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                {category}
              </h4>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={
                        link.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      className="group inline-flex items-center text-sm text-[#9FB3A8] transition-colors hover:text-white"
                    >
                      <span className="transition-transform group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#9FB3A8] transition-all duration-300 hover:-translate-y-1 hover:border-[#00C853]/40 hover:bg-[#00C853]/10 hover:text-[#00C853]"
                >
                  <Icon
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-2 text-center text-xs text-[#9FB3A8] md:flex-row md:gap-5">
            <span>
              © {new Date().getFullYear()} TechVision. All rights reserved.
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 md:block" />

            <span>
              Crafted with 💚 for Ethiopia's next generation of developers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}