"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,211,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[200px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] glass-strong gradient-border p-12 md:p-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          >
            Start building your{" "}
            <span className="text-gradient">future today.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Learn entrepreneurship, startup execution, branding, innovation,
            and real-world business skills designed for ambitious students and
            future founders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan px-8 py-6 text-lg"
            >
              Join Innvostep
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass border-border hover:bg-secondary/50 px-8 py-6 text-lg"
            >
              Explore Content
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Startup education · Free learning resources · Built for students
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}