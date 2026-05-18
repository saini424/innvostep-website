"use client"

import { motion } from "framer-motion"
import {
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react"

const socials = [
  {
    name: "Instagram",
    description:
      "Daily startup reels, mindset content & business insights.",
    button: "Follow on Instagram",
    icon: Instagram,
    bg: "from-pink-500 via-red-500 to-yellow-500",
    iconColor: "text-pink-500",
    buttonColor:
      "bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 text-white",
  },
  {
    name: "YouTube",
    description:
      "Learn entrepreneurship, startup execution & business growth.",
    button: "Subscribe on YouTube",
    icon: Youtube,
    bg: "from-red-500 to-red-600",
    iconColor: "text-red-500",
    buttonColor:
      "bg-red-500 hover:bg-red-600 text-white",
  },
  {
    name: "LinkedIn",
    description:
      "Professional startup content, founder journey & updates.",
    button: "Connect on LinkedIn",
    icon: Linkedin,
    bg: "from-blue-500 to-blue-700",
    iconColor: "text-blue-600",
    buttonColor:
      "bg-blue-600 hover:bg-blue-700 text-white",
  },
]

export function SocialSection() {
  return (
    <section className="py-24 px-6 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full bg-white border border-gray-200 text-sm mb-6">
            Join Innvostep
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
            Learn. Build.{" "}
            <span className="text-green-500">
              Grow.
            </span>
          </h2>

          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Follow Innvostep across platforms and start your entrepreneurial journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {socials.map((social, index) => {
            const Icon = social.icon

            return (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white border border-gray-200 p-10 hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${social.bg} flex items-center justify-center mb-8 shadow-lg`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-black mb-4">
                  {social.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {social.description}
                </p>

                {/* Button */}
                <button
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${social.buttonColor}`}
                >
                  {social.button}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}