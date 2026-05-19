"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 bg-[#f8f8f6]">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#19c37d]/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7a1f1f]/10 rounded-full blur-[120px]" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-black/10 rounded-full"
          style={{
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-black/5 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#19c37d]" />

          <span className="text-sm text-[#666] font-medium">
            Modern Startup Learning Platform
          </span>

          <ArrowRight className="w-4 h-4 text-[#19c37d]" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="leading-[1.05] sm:leading-[0.95] font-black tracking-[-0.05em] mb-8 px-2"
        >

          {/* BLACK */}
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="block text-black text-[42px] sm:text-[72px] md:text-[95px] lg:text-[120px]"
          >
            Build Your
          </motion.span>

          {/* GREEN */}
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="block text-[#19c37d] text-[40px] sm:text-[68px] md:text-[92px] lg:text-[115px]"
          >
            Startup
          </motion.span>

          {/* DARK RED */}
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="block text-[#7a1f1f] text-[38px] sm:text-[64px] md:text-[88px] lg:text-[110px]"
          >
            Journey
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[17px] md:text-[24px] text-[#5f6368] max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Learn entrepreneurship, startup execution, business strategy,
          and real-world skills from scratch.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="bg-black hover:bg-[#111] text-white px-10 py-7 text-lg rounded-full shadow-xl">
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="bg-white/70 backdrop-blur-md border border-black/10 hover:bg-white text-black px-10 py-7 text-lg rounded-full shadow-lg"
          >
            Explore Innvostep
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10K+", label: "Future Entrepreneurs" },
            { value: "100+", label: "Startup Lessons" },
            { value: "50+", label: "Business Strategies" },
            { value: "24/7", label: "Learning Access" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1 + index * 0.1,
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black tracking-tight text-black">
                {stat.value}
              </div>

              <div className="text-sm md:text-base text-[#777] mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f8f6] to-transparent" />
    </section>
  )
}