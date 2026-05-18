"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Beginner Founder",
    price: "Free",
    description: "Perfect for students starting their entrepreneurship journey",
    features: [
      "Startup basics",
      "Business mindset",
      "Idea generation",
      "Market gap understanding",
      "Beginner community access",
    ],
    cta: "Start Learning",
    popular: false,
  },
  {
    name: "Startup Builder",
    price: "Coming Soon",
    description: "For students serious about building startups and brands",
    features: [
      "Startup execution frameworks",
      "Marketing & branding",
      "AI tools & MVP building",
      "Customer validation",
      "Business model learning",
      "Community networking",
      "Practical startup guidance",
    ],
    cta: "Join Waitlist",
    popular: true,
  },
  {
    name: "Growth Accelerator",
    price: "Future Plan",
    description: "Advanced startup growth and scaling knowledge",
    features: [
      "Funding & pitching",
      "Growth strategies",
      "Advanced branding",
      "Team building",
      "Founder mindset",
      "Startup case studies",
      "Exclusive mentorship access",
    ],
    cta: "Coming Soon",
    popular: false,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,211,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,211,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
            Learning Paths
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Choose your <span className="text-gradient">startup journey</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn entrepreneurship, startup execution, branding, and modern business skills step-by-step.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? "glass-strong glow-cyan border-primary/30"
                  : "glass gradient-border"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}