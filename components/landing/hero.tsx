"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const particles = [
  { left: "12%", top: "18%", duration: 4 },
  { left: "22%", top: "72%", duration: 5 },
  { left: "38%", top: "30%", duration: 6 },
  { left: "48%", top: "80%", duration: 5 },
  { left: "60%", top: "22%", duration: 4 },
  { left: "72%", top: "60%", duration: 6 },
  { left: "84%", top: "34%", duration: 5 },
  { left: "92%", top: "78%", duration: 4 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f7f7f5]">

      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Soft Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-500/40 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-black leading-tight"
        >
          <span className="block">Build Your</span>

          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Startup Journey
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Learn entrepreneurship, startup execution, business strategy,
          marketing, and real-world startup skills with Innvostep.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-6 text-lg rounded-xl font-semibold shadow-lg">
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="border-black/10 bg-white/70 hover:bg-white text-black px-8 py-6 text-lg rounded-xl backdrop-blur-md"
          >
            Explore Innvostep
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10K+", label: "Startup Learners" },
            { value: "100+", label: "Business Lessons" },
            { value: "50+", label: "Startup Frameworks" },
            { value: "24/7", label: "Learning Access" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600">
                {stat.value}
              </div>

              <div className="text-sm text-gray-500 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f7f7f5] to-transparent" />
    </section>
  )
}