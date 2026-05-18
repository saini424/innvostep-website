"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,211,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Floating particles FIXED */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Introducing Innvostep
          </span>
          <ArrowRight className="w-4 h-4 text-primary" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-balance">
            Build your startup journey with
          </span>

          <span className="block text-gradient glow-text">
            Innvostep
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
        >
          Learn entrepreneurship, startup execution, business strategy,
          and real-world skills from scratch.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan px-8 py-6 text-lg"
          >
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass border-border hover:bg-secondary/50 px-8 py-6 text-lg"
          >
            Explore Innvostep
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10K+", label: "Future Entrepreneurs" },
            { value: "100+", label: "Startup Lessons" },
            { value: "50+", label: "Business Strategies" },
            { value: "24/7", label: "Learning Access" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {stat.value}
              </div>

              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}