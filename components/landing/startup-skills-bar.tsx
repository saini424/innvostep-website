"use client"

import { motion } from "framer-motion"

const skills = [
  "Startup Skills",
  "Business Thinking",
  "Marketing",
  "Idea Validation",
  "Content Creation",
  "AI Tools",
  "Personal Branding",
  "Founder Mindset",
  "Networking",
  "Startup Execution",
]

export function StartupSkillsBar() {
  return (
    <section className="relative overflow-hidden py-16 bg-[#f7f7f5] border-y border-black/5">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-orange-500/5" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-[0.25em] text-gray-500 mb-10"
        >
          Everything You Need To Build Your Startup Journey
        </motion.p>

        {/* Skills Row */}
        <div className="relative overflow-hidden">
          
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="
                  px-6 py-4 rounded-2xl
                  bg-white/80 backdrop-blur-xl
                  border border-black/5
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  text-gray-800
                  font-semibold
                  whitespace-nowrap
                  hover:border-cyan-400/40
                  transition-all duration-300
                "
              >
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}