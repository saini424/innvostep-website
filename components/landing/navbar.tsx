"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { label: "Programs", href: "#features" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Community", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f8f8f6]/90 backdrop-blur-xl border-b border-black/5 py-3"
            : "bg-[#f8f8f6]/70 backdrop-blur-md py-3 md:py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 min-w-0">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 md:gap-3 cursor-pointer"
              >

                {/* Floating Logo */}
                <motion.div
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="relative shrink-0"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full scale-125" />

                  <Image
                    src="/logo.png"
                    alt="Innvostep Logo"
                    width={42}
                    height={42}
                    className="relative object-contain w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[48px] md:h-[48px]"
                    priority
                  />
                </motion.div>

                {/* Brand Name */}
                <div className="leading-none">
                  <span className="text-base sm:text-lg md:text-2xl font-black tracking-tight text-black whitespace-nowrap">
                    Innvo
                    <span className="text-orange-500">
                      step
                    </span>
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-semibold whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-5">
              Start Learning
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-black shrink-0 ml-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f8f8f6]/95 backdrop-blur-xl pt-28 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">

              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-black hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="flex flex-col gap-4 mt-8">

                <Button
                  variant="outline"
                  className="w-full py-6 rounded-xl border-black/10"
                >
                  Join Free
                </Button>

                <Button className="w-full py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                  Get Started
                </Button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}