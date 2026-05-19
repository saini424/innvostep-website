"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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

export function LogoMarquee() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-white border-y border-black/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-14 px-6">
          <p className="text-[12px] tracking-[0.35em] uppercase text-cyan-600 font-semibold mb-5">
            WHAT YOU WILL LEARN
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Everything needed to build
            <br />
            your startup journey
          </h2>

          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Learn real startup skills, modern business thinking,
            marketing, AI tools, execution frameworks and founder mindset.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mt-16">

          {/* Left blur */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Right blur */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 w-max"
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill}-${index}`}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  px-8 py-5
                  rounded-2xl
                  bg-[#fafafa]
                  border border-black/6
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  hover:border-cyan-200
                  transition-all duration-300
                  whitespace-nowrap
                "
              >
                <div className="flex items-center gap-3">

                  {/* Small dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-125 transition-transform" />

                  <span className="text-lg font-semibold text-gray-800 tracking-tight">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}