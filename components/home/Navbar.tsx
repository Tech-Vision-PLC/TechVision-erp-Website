'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Courses', href: 'https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'FAQ', href: '/#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050B08]/75 backdrop-blur-xl border-b border-[#00C853]/25 shadow-[0_4px_40px_rgba(0,200,83,0.12)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00C853] blur-[12px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
            <Image src="/logo.svg" alt="TechVision" width={34} height={34} priority className="relative z-10" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight hidden sm:block">TechVision</span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#9FB3A8] hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00C853] to-[#B2FF59] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3.5">
          <Link
            href="https://learn.techvision.edu.et/login"
            className="text-sm font-medium text-[#DDE7E1] hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
          >
            Login
          </Link>
          <Link
            href="https://learn.techvision.edu.et/batch-application"
            className="text-sm font-bold bg-gradient-to-r from-[#00C853] to-[#00A844] text-black px-5 py-2 rounded-xl shadow-[0_0_24px_rgba(0,200,83,0.25)] hover:shadow-[0_0_36px_rgba(0,200,83,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#9FB3A8] hover:text-white transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#08110D]/95 backdrop-blur-3xl border-t border-[#00C853]/15 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#DDE7E1] py-3.5 text-sm font-medium border-b border-white/5 last:border-0 hover:text-[#00C853] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-5">
                <Link
                  href="https://learn.techvision.edu.et/login"
                  className="text-center text-sm font-medium text-[#DDE7E1] py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="https://learn.techvision.edu.et/batch-application"
                  className="text-center text-sm font-bold bg-gradient-to-r from-[#00C853] to-[#00A844] text-black py-3 rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.2)]"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
