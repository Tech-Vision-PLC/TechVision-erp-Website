"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { PageLoader } from "@/components/site/page-loader";
import { ThemeToggle } from "@/components/site/theme-toggle";
import Image from "next/image";

export function SiteNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === pathname) return;
    e.preventDefault();
    
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      router.push(href);
    }, 200);
  };

  useEffect(() => {
  setIsLoading(false);
}, [pathname]);

  return (
  <>
    {isLoading && <PageLoader />}

    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="mx-auto  bg-background border border-border ">
        <div className="flex h-20 items-center justify-between px-5 lg:px-8">
          <Link
          href="/"
          onClick={(e) => handleNavigation(e, "/")}
          className="flex items-center">
             <Image
             src="/brand/techvision-blue.jpg"
             alt="Tech Vision"
             width={180}
             height={40}
             priority
             className="h-10 w-auto dark:hidden"/>
             
             <Image
             src="/brand/techvision-green.svg"
             alt="Tech Vision"
             width={180}
             height={40}
             priority
             className="hidden h-10 w-auto dark:block"/>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className={`text-sm transition-colors duration-300 relative group ${
                    active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
  <ThemeToggle />
{/**
  <Button
    asChild
    variant="ghost"
    size="sm"
    className="inline-flex items-center justify-center rounded-[3px] border border-[#111827] bg-[#111827] px-5 py-2 font-mono text-[12px] text-white shadow-[-4px_4px_0_0_#00D38D] hover:bg-[#111827] hover:text-white"
  >
    <Link href="/contact">Sign in</Link>
  </Button>
 */}
  <Button
    asChild
    size="sm"
    className="inline-flex items-center justify-center rounded-[3px] border border-[#111827] bg-[#FBF8F8] px-5 py-2 font-mono text-[12px] text-[#111827] shadow-[-4px_4px_0_0_#FCF8FA,-4px_4px_0_1px_#111827] hover:bg-[#FBF8F8] hover:text-[#111827]"
  >
    <Link href="https://erp.techvision.et/lead-form/new">Request Demo</Link>
  </Button>
</div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className={`text-4xl font-display text-foreground transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 pt-8 border-t border-border">
            <Button asChild variant="outline" className="flex-1 rounded-full h-14 text-base">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Sign in
              </Link>
            </Button>
            <Button asChild className="flex-1 bg-primary text-primary-foreground rounded-full h-14 text-base">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  </>
  );
}
