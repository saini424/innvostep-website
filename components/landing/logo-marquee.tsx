"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    name: "Founder Mindset",
    color: "text-black",
  },
  {
    name: "Networking",
    color: "text-[#991b1b]",
  },
  {
    name: "Startup Execution",
    color: "text-black",
  },
  {
    name: "Startup Skills",
    color: "text-[#166534]",
  },
  {
    name: "Business Thinking",
    color: "text-black",
  },
  {
    name: "Marketing",
    color: "text-[#991b1b]",
  },
  {
    name: "Content Creation",
    color: "text-black",
  },
  {
    name: "AI Tools",
    color: "text-[#166534]",
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
      className="relative overflow-hidden bg-[#f8f9fb] py-28 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <span className="uppercase tracking-[0.45em] text-[12px] font-bold text-[#166534]">
            WHAT YOU should MASTER
          </span>
        </motion.div>

        {/* Premium Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="
            text-center
            font-black
            tracking-[-0.05em]
            leading-[0.95]
            text-[44px]
            md:text-[82px]
            text-black
            max-w-5xl
            mx-auto
          "
        >
          Build real startup
          <br />

          <span className="text-[#991b1b]">
            skills
          </span>

          {" "}for the{" "}

          <span className="text-[#166534]">
            modern
          </span>

          {" "}world
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="
            text-center
            text-[18px]
            md:text-[24px]
            leading-relaxed
            text-[#6b7280]
            font-medium
            max-w-4xl
            mx-auto
            mt-8
          "
        >
          Learn entrepreneurship, AI tools, branding,
          execution, growth strategy and founder mindset
          through practical startup-focused education.
        </motion.p>

        {/* Moving Skill Row */}
        <div className="relative mt-24 overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10" />

          {/* Marquee */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="flex gap-16 whitespace-nowrap w-max"
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{
                  y: -3,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 shrink-0"
              >
                {/* Premium Small Dot */}
                <div
                  className={`
                    w-2.5
                    h-2.5
                    rounded-full
                    ${skill.color}
                    bg-current
                    opacity-80
                  `}
                />

                {/* Skill Text */}
                <span
                  className={`
                    ${skill.color}
                    text-[22px]
                    md:text-[28px]
                    font-bold
                    tracking-[-0.03em]
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