"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Lightbulb,
  Users,
  Rocket,
  TrendingUp,
  Briefcase,
  Target,
} from "lucide-react"

export function BentoGrid() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
            Startup Learning Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Learn startups through{" "}
            <span className="text-gradient">
              real execution
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical startup education designed for ambitious students,
            future founders, creators, and builders.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px]">

          {/* Large Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 lg:row-span-2 rounded-3xl glass gradient-border p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Startup Execution Roadmap
              </h3>

              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Learn how real startups are built — from idea validation
                to branding, marketing, customer acquisition, sales,
                execution, and scaling.
              </p>
            </div>

            {/* Roadmap */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                {[
                  "Idea",
                  "Validation",
                  "Branding",
                  "Marketing",
                  "Sales",
                  "Scale",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.1,
                    }}
                    className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm"
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl glass gradient-border p-6 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Startup Ideas
              </h3>

              <p className="text-muted-foreground text-sm">
                Discover how successful startups identify opportunities
                and solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl glass gradient-border p-6 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Business Growth
              </h3>

              <p className="text-muted-foreground text-sm">
                Learn branding, content, marketing, sales, and startup
                growth strategies.
              </p>
            </div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl glass gradient-border p-6 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Practical Skills
              </h3>

              <p className="text-muted-foreground text-sm">
                Build communication, leadership, sales, and execution
                skills for the real world.
              </p>
            </div>
          </motion.div>

          {/* Bottom Right Wide */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 rounded-3xl glass gradient-border p-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-accent" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-1">
                  Founder Community
                </h3>

                <p className="text-muted-foreground text-sm">
                  Connect with ambitious students, creators, and future
                  entrepreneurs building together.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex gap-2">
              {["Build", "Learn", "Grow"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}