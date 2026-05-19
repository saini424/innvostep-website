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
      className="relative py-28 md:py-36 overflow-hidden bg-[#f8f9fb]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Small Label */}
        <div className="flex justify-center mb-6">
          <span className="uppercase tracking-[0.35em] text-cyan-600 text-[12px] font-semibold">
            What You Will Master
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="
            text-center
            text-[52px]
            md:text-[88px]
            leading-[0.95]
            tracking-[-0.05em]
            font-black
            text-black
            max-w-6xl
            mx-auto
          "
        >
          Build real startup skills
          <br />
          for the modern world
        </h2>

        {/* Subheading */}
        <p
          className="
            text-center
            text-[20px]
            md:text-[28px]
            leading-relaxed
            text-[#6b7280]
            max-w-4xl
            mx-auto
            mt-8
            font-medium
          "
        >
          Learn entrepreneurship, AI tools, branding, execution,
          growth strategy and founder mindset with practical learning.
        </p>

        {/* Moving Skill Row */}
        <div className="relative mt-24 overflow-hidden">

          {/* Fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10" />

          {/* Fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10" />

          <div className="flex gap-16 animate-marquee whitespace-nowrap">

            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                transition={{ duration: 0.2 }}
                className="
                  flex
                  items-center
                  gap-3
                  shrink-0
                  cursor-default
                "
              >
                {/* Colored dot */}
                <div
                  className={`
                    w-2.5
                    h-2.5
                    rounded-full
                    ${skill.color}
                    bg-current
                    shadow-lg
                  `}
                />

                {/* Text */}
                <span
                  className="
                    text-[20px]
                    md:text-[28px]
                    font-semibold
                    tracking-[-0.03em]
                    text-[#111111]
                  "
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}