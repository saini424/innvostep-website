"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const logos = [
  { name: "Vercel", icon: "▲" },
  { name: "Stripe", icon: "◈" },
  { name: "Linear", icon: "◯" },
  { name: "Notion", icon: "▣" },
  { name: "Figma", icon: "◇" },
  { name: "Slack", icon: "◆" },
  { name: "Discord", icon: "◎" },
  { name: "GitHub", icon: "◐" },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden border-t border-b border-border/30">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-muted-foreground text-sm mb-10">
          Trusted by innovative founders worldwide
        </p>

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee */}
          <div className="flex gap-12 animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center gap-3 shrink-0"
              >
                <span className="text-2xl text-muted-foreground/50">{logo.icon}</span>
                <span className="text-lg font-medium text-muted-foreground/50 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
