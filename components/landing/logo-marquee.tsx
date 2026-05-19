"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import {
  Lightbulb,
  Megaphone,
  Brain,
  Rocket,
  Users,
  PenTool,
  Bot,
  Target,
} from "lucide-react"

const skills = [
  {
    name: "Founder Mindset",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Networking",
    icon: Users,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Startup Execution",
    icon: Target,
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "Startup Skills",
    icon: Rocket,
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Business Thinking",
    icon: Brain,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Content Creation",
    icon: PenTool,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "AI Tools",
    icon: Bot,
    color: "from-emerald-500 to-green-600",
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
      className="py-24 md:py-32 bg-[#f8f9fb] overflow-hidden border-t border-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Top label */}
        <div className="flex justify-center mb-6">
          <div className="text-[13px] tracking-[0.35em] uppercase text-cyan-600 font-semibold">
          </div>
        </div>

        {/* Heading */}
        <h2
          className="
            text-center
            text-5xl
            md:text-7xl
            font-black
            tracking-tight
            text-black
            leading-[1]
            max-w-5xl
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
            text-lg
            md:text-2xl
            text-gray-500
            max-w-4xl
            mx-auto
            mt-8
            leading-relaxed
            font-medium
          "
        >
          Learn entrepreneurship, AI tools, branding, execution,
          growth strategy and founder mindset with practical learning.
        </p>

        {/* Premium moving cards */}
        <div className="relative mt-20 overflow-hidden">

          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10" />

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10" />

          <div className="flex gap-5 animate-marquee whitespace-nowrap">

            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon

              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.2 }}
                  className="
                    shrink-0
                    flex
                    items-center
                    gap-3
                    px-7
                    py-5
                    rounded-2xl
                    bg-white/90
                    backdrop-blur-xl
                    border
                    border-gray-200
                    shadow-[0_4px_30px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    transition-all
                  "
                >
                  <Icon
                    className={`
                      w-4 h-4
                      bg-gradient-to-r ${skill.color}
                      bg-clip-text
                      text-transparent
                      stroke-[2.4]
                    `}
                  />

                  <span
                    className="
                      text-[15px]
                      md:text-[16px]
                      font-semibold
                      tracking-tight
                      text-[#111111]
                    "
                  >
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}