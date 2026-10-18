"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Code2,
  Globe2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Building2,
  Users,
  XCircle,
} from "lucide-react";

import { SiteNav } from "@/components/site/site-nav";

const services = [
  "ERP Implementation",
  "HR Management System",
  "Custom Software Development",
  "Website Development",
  "N8n self-hosted automation",
  "Business Email",
  "Other",
];

const serviceCards = [
  {
    title: "ERP Solutions",
    description:
      "Manage business operations, finance, inventory, and workflows in one integrated system.",
    icon: Building2,
  },
  {
    title: "HR Management",
    description:
      "Simplify employee records, attendance, leave management, and HR processes.",
    icon: Users,
  },
  {
    title: "Custom Software",
    description:
      "Build software tailored to your organization's specific needs and workflows.",
    icon: Code2,
  },
  {
    title: "Website Development",
    description:
      "Create modern, responsive websites that strengthen your organization's online presence.",
    icon: Globe2,
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      full_name: String(formData.get("full_name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus({
          success: false,
          message:
            result.message ||
            "We couldn't submit your request. Please try again.",
        });

        return;
      }

      setStatus({
        success: true,
        message:
          result.message ||
          "Thank you for contacting TechVision. Our team will get back to you soon.",
      });

      form.reset();
    } catch {
      setStatus({
        success: false,
        message:
          "Unable to connect right now. Please check your internet connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10";

  const labelClasses = "text-sm font-medium text-foreground";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero and contact form */}
      <section className="relative isolate overflow-hidden border-b border-border">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />

        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-24">
          {/* Left: Contact information */}
          <div>
            <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Let&apos;s build something great
            </div>

            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s discuss your{" "}
              <span className="text-primary">
                next digital solution.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Looking for ERP, HR management, custom software, or a
              professional website? Tell us about your organization and
              requirements. We&apos;ll help you find the right solution.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-foreground">
                    Email our team
                  </p>

                  <a
                    href="mailto:techvision9772@gmail.com"
                    className="mt-1 inline-block break-all text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
                  >
                    techvision9772@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Call our team
                  </p>

                  <a
                    href="tel:+251936977299"
                    className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
                  >
                    +251 936 977299
                  </a>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Ethiopia
                  </p>
                </div>
              </div>

              {/* Consultation */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-primary/10 text-primary">
                  <Clock3 className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Personalized consultation
                  </p>

                  <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
                    Discuss your requirements with our team and explore
                    the right approach for your organization.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    TechVision PLC
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Semay Tower, 9th Floor
                    <br />
                    Bole, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting message */}
            <div className="mt-10 flex items-start gap-3 border-l-2 border-primary bg-primary/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <p className="text-sm leading-6 text-muted-foreground">
                Tell us what you want to achieve. We&apos;ll discuss your
                requirements and help you identify a practical digital
                solution.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            id="contact-form"
            className="border border-border bg-card p-5 shadow-xl shadow-black/5 sm:p-8 lg:p-9"
          >
            <div className="mb-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                Contact TechVision
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Tell us about your project
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Share a few details, and our team will contact you to
                discuss your needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot spam protection */}
              <div
                aria-hidden="true"
                className="absolute -left-[10000px] h-px w-px overflow-hidden"
              >
                <label htmlFor="website">
                  Leave this field empty
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Full name */}
              <div>
                <label htmlFor="full_name" className={labelClasses}>
                  Full name <span className="text-red-500">*</span>
                </label>

                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  minLength={2}
                  maxLength={140}
                  className={inputClasses}
                />
              </div>

              {/* Email and phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="email" className={labelClasses}>
                    Email address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    maxLength={254}
                    className={inputClasses}
                  />
                </div>

                <div className="min-w-0">
                  <label htmlFor="phone" className={labelClasses}>
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+251 ..."
                    maxLength={50}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company or organization
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company or institution"
                  maxLength={140}
                  className={inputClasses}
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className={labelClasses}>
                  What service are you interested in?{" "}
                  <span className="text-red-500">*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={`${inputClasses} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project requirements */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Tell us about your requirements
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={5000}
                  placeholder="What challenges are you trying to solve? What features or services do you need?"
                  className={`${inputClasses} resize-y`}
                />

                <p className="mt-2 text-xs text-muted-foreground">
                  Include any important requirements, goals, or questions.
                </p>
              </div>

              {/* Submission feedback */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 border p-4 text-sm leading-6 ${
                    status.success
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.success ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  )}

                  <p>{status.message}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 border border-primary bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending your request...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send inquiry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-muted-foreground">
                Your information will be used by TechVision to respond
                to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-12 lg:py-20">


        {/* CTA */}
        <div className="mt-16 border border-border bg-card p-6 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                Ready to get started?
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Let&apos;s turn your ideas into solutions.
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Contact TechVision to discuss your project and explore
                how technology can support your organization.
              </p>
            </div>

            <a
              href="#contact-form"
              className="inline-flex shrink-0 items-center justify-center gap-2 border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Contact our team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div>
            <p className="font-display text-lg font-semibold text-primary">
              TechVision
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Smart digital solutions for modern organizations.
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechVision. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}