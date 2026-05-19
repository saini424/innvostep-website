"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import {
  Rocket,
  Brain,
  Megaphone,
  SearchCheck,
  PenSquare,
  Sparkles,
  UserCircle2,
  Lightbulb,
  Users,
  Target,
} from "lucide-react"

const skills = [
  {
    name: "Startup Skills",
    icon: Rocket,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Business Thinking",
    icon: Brain,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Idea Validation",
    icon: SearchCheck,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Content Creation",
    icon: PenSquare,
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "AI Tools",
    icon: Sparkles,
    color: "from-cyan-400 to-sky-500",
  },
  {
    name: "Personal Branding",
    icon: UserCircle2,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Founder Mindset",
    icon: Lightbulb,
    color: "from-amber-400 to-yellow-500",
  },
  {
    name: "Networking",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Startup Execution",
    icon: Target,
    color: "from-teal-400 to-cyan-500",
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
      className="relative py-28 overflow-hidden bg-[#fafafa] border-y border-black/5"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/5 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Top label */}
        <div className="text-center px-6">
          <p className="text-[12px] tracking-[0.35em] uppercase text-cyan-600 font-bold mb-6">
            WHAT YOU WILL MASTER
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-[1.05] max-w-5xl mx-auto">
            Build real startup skills
            <br />
            for the modern world
          </h2>

          {/* Description */}
          <p className="mt-8 text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Learn entrepreneurship, AI tools, branding, execution,
            growth strategy and founder mindset with practical learning.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mt-20">

          {/* Fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#fafafa] to-transparent z-20" />

          {/* Fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#fafafa] to-transparent z-20" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon

              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    px-8
                    py-6
                    rounded-3xl
                    bg-white/90
                    backdrop-blur-xl
                    border border-black/5
                    shadow-[0_8px_40px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    transition-all duration-300
                    whitespace-nowrap
                  "
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${skill.color} transition-opacity duration-300`}
                  />

                  <div className="relative flex items-center gap-4">

                    {/* Icon */}
                    <div
                      className={`
                        w-12 h-12 rounded-2xl
                        flex items-center justify-center
                        bg-gradient-to-br ${skill.color}
                        shadow-lg
                      `}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-[17px] font-bold tracking-tight text-gray-900">
                        {skill.name}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Learn & execute
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}