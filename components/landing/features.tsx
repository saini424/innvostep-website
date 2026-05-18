"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Lightbulb,
  Rocket,
  TrendingUp,
  Users,
  Briefcase,
  Target,
} from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Idea Validation",
    description:
      "Learn how to identify market gaps, validate startup ideas, and solve real-world problems.",
  },
  {
    icon: Rocket,
    title: "Startup Execution",
    description:
      "Step-by-step guidance to turn your business idea into an actual startup from scratch.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategies",
    description:
      "Master branding, marketing, customer acquisition, and scaling strategies used by startups.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description:
      "Connect with ambitious students, creators, and future entrepreneurs building together.",
  },
  {
    icon: Briefcase,
    title: "Business Skills",
    description:
      "Develop real-world entrepreneurial skills including sales, pitching, finance, and leadership.",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description:
      "No boring theory — learn through startup case studies, execution frameworks, and real examples.",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative p-6 rounded-2xl glass gradient-border cursor-pointer"
    >
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-500">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
          {feature.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Features() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, {
    once: true,
    margin: "-100px",
  })

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
            Why Innvostep
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything you need to build your{" "}
            <span className="text-gradient">
              startup journey
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn entrepreneurship, execution, marketing, and business strategy
            through practical startup-focused education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}