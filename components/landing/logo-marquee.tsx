"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    name: "Founder Mindset",
    color: "text-yellow-500",
  },
  {
    name: "Networking",
    color: "text-violet-500",
  },
  {
    name: "Startup Execution",
    color: "text-cyan-500",
  },
  {
    name: "Startup Skills",
    color: "text-blue-500",
  },
  {
    name: "Business Thinking",
    color: "text-orange-500",
  },
  {
    name: "Marketing",
    color: "text-pink-500",
  },
  {
    name: "Content Creation",
    color: "text-fuchsia-500",
  },
  {
    name: "AI Tools",
    color: "text-emerald-500",
  },
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
      className="relative overflow-hidden bg-[#f8f9fb] py-32 md:py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <span className="uppercase tracking-[0.45em] text-[12px] font-bold text-cyan-600">
            WHAT YOU should MASTER
          </span>
        </motion.div>

        {/* premium heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="
            text-center
            font-black
            tracking-[-0.06em]
            leading-[0.9]
            text-[58px]
            md:text-[110px]
            text-black
            max-w-6xl
            mx-auto
          "
        >
          Build real startup
          <br />

          <span className="text-[#00bfff]">
            skills
          </span>

          {" "}for the{" "}

          <span className="text-[#8b5cf6]">
            modern
          </span>

          {" "}world
        </motion.h2>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="
            text-center
            text-[20px]
            md:text-[30px]
            leading-relaxed
            text-[#6b7280]
            font-medium
            max-w-5xl
            mx-auto
            mt-10
          "
        >
          Learn entrepreneurship, AI tools, branding,
          execution, growth strategy and founder mindset
          through practical startup-focused education.
        </motion.p>

        {/* moving premium row */}
        <div className="relative mt-28 overflow-hidden">

          {/* fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10" />

          {/* fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10" />

          {/* marquee */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="flex gap-20 whitespace-nowrap w-max"
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 shrink-0"
              >
                {/* premium glow dot */}
                <div
                  className={`
                    w-3
                    h-3
                    rounded-full
                    ${skill.color}
                    bg-current
                    shadow-[0_0_20px_currentColor]
                  `}
                />

                {/* premium text */}
                <span
                  className={`
                    ${skill.color}
                    text-[28px]
                    md:text-[36px]
                    font-black
                    tracking-[-0.05em]
                  `}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}