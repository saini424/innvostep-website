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
    <section className="relative overflow-hidden bg-[#f8f8f6] min-h-screen pt-20 md:pt-24 lg:pt-28 xl:pt-32">

      {/* Premium Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full" />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-black/10 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#8a8a8a] font-semibold">
            MODERN STARTUP EDUCATION
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="leading-[0.92] font-black tracking-[-0.05em] mb-8"
        >

          {/* BLACK */}
          <span className="block text-black text-[42px] sm:text-[58px] md:text-[78px] lg:text-[96px] xl:text-[108px]">
            Build Your
          </span>

          {/* GREEN */}
          <span className="block text-[#19c37d] text-[40px] sm:text-[56px] md:text-[74px] lg:text-[92px] xl:text-[102px]">
            Startup
          </span>

          {/* DARK RED */}
          <span className="block text-[#7a1f1f] text-[38px] sm:text-[52px] md:text-[70px] lg:text-[86px] xl:text-[96px]">
            Journey
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed text-[#5f6368] font-medium mb-10"
        >
          Learn entrepreneurship, startup execution, business strategy,
          marketing, and real-world startup skills with Innvostep.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >

          <Button className="bg-black hover:bg-[#1a1a1a] text-white rounded-full px-9 py-6 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-[1.03]">
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-9 py-6 text-base border border-black/10 bg-white/70 backdrop-blur-md hover:bg-white text-black shadow-lg"
          >
            Explore Innvostep
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {[
            { value: "10K+", label: "Startup Learners" },
            { value: "100+", label: "Business Lessons" },
            { value: "50+", label: "Startup Frameworks" },
            { value: "24/7", label: "Learning Access" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black tracking-tight text-black">
                {stat.value}
              </div>

              <div className="text-sm md:text-base text-[#7a7a7a] mt-3 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8f8f6] to-transparent" />
    </section>
  )
}