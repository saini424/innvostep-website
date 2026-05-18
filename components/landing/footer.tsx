"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  platform: [
    { label: "Programs", href: "#features" },
    { label: "Startup Guide", href: "#pricing" },
    { label: "Community", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],

  company: [
    { label: "About Innvostep", href: "#" },
    { label: "Founder Journey", href: "#" },
    { label: "Mission", href: "#" },
    { label: "Contact", href: "#" },
  ],

  resources: [
    { label: "Entrepreneurship", href: "#" },
    { label: "Startup Basics", href: "#" },
    { label: "Business Strategy", href: "#" },
    { label: "Brand Building", href: "#" },
  ],
}

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/innvostep/",
    label: "Instagram",
  },

  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/innvostep/",
    label: "LinkedIn",
  },

  {
    icon: Youtube,
    href: "https://www.youtube.com/@Innvostep",
    label: "YouTube",
  },
]

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">I</span>
              </div>

              <span className="font-bold text-xl tracking-tight">
                Innvostep
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Empowering students with practical startup education,
              entrepreneurship knowledge, business strategy, and execution
              skills for the modern world.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">
              Platform
            </h4>

            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">
              Company
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">
              Resources
            </h4>

            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Innvostep. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-muted-foreground">
              Building the next generation of entrepreneurs
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}