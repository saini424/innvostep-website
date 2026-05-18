"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Lightbulb,
  Rocket,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react"

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            Innvostep Platform
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Learn startups with{" "}
            <span className="text-gradient">
              practical execution
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to understand entrepreneurship,
            startup building, branding, execution, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
          {/* Main Large Card */}
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

              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Startup Learning Roadmap
              </h3>

              <p className="text-muted-foreground max-w-md leading-relaxed">
                Learn idea validation, branding, marketing,
                execution, sales, growth, and startup scaling
                step-by-step through practical guidance.
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-secondary/30 p-4 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              <div className="flex gap-2 flex-wrap">
                {[
                  "Ideas",
                  "Execution",
                  "Marketing",
                  "Growth",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small Cards */}
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
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-accent" />
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Startup Ideas
              </h3>

              <p className="text-sm text-muted-foreground">
                Learn idea generation and validation
              </p>
            </div>
          </motion.div>

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
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Founder Community
              </h3>

              <p className="text-sm text-muted-foreground">
                Connect with ambitious entrepreneurs
              </p>
            </div>
          </motion.div>

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
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Business Growth
              </h3>

              <p className="text-sm text-muted-foreground">
                Learn branding, marketing, and scaling
              </p>
            </div>
          </motion.div>

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
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold mb-1">
                  Global Startup Mindset
                </h3>

                <p className="text-sm text-muted-foreground">
                  Learn modern startup thinking and execution
                </p>
              </div>
            </div>

            <div className="hidden sm:flex gap-2">
              {["Ideas", "Build", "Grow"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs"
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