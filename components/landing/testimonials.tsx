"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, GraduationCap, Globe2 } from "lucide-react"

const missionCards = [
  {
    icon: Rocket,
    title: "Break The Rat Race",
    description:
      "Encouraging students to think beyond traditional career paths and explore entrepreneurship, innovation, and self-employment.",
  },
  {
    icon: GraduationCap,
    title: "Practical Startup Education",
    description:
      "Teaching real-world startup concepts like branding, execution, market validation, AI tools, and business building.",
  },
  {
    icon: Globe2,
    title: "Empowering Tier 2 & 3 Students",
    description:
      "Helping ambitious students from smaller cities access modern startup knowledge and opportunities.",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
            Why Innvostep Exists
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            The education system teaches students how to get jobs.
            <br />
            <span className="text-gradient">
              We teach them how to build.
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Millions of students have ideas, creativity, and ambition — but no
            exposure to startups, innovation, execution, or entrepreneurship.
            <br />
            <br />
            Innvostep exists to bridge that gap by making startup education
            practical, modern, and accessible for every student.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {missionCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl glass gradient-border p-8 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-cyan">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {card.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}