"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Innvostep?",
    answer:
      "Innvostep is a startup education platform focused on helping students learn entrepreneurship, startup execution, business strategy, branding, and modern business skills in a practical way.",
  },
  {
    question: "Who is Innvostep for?",
    answer:
      "Innvostep is designed for school students, college students, aspiring entrepreneurs, creators, and anyone interested in startups, innovation, and business building.",
  },
  {
    question: "Do I need business experience to start?",
    answer:
      "No. Innvostep is beginner-friendly and teaches startup concepts from scratch using simple explanations, practical examples, and real-world business thinking.",
  },
  {
    question: "What will I learn through Innvostep?",
    answer:
      "You’ll learn startup fundamentals, idea validation, branding, marketing, execution strategies, AI tools for startups, business models, and entrepreneurial thinking.",
  },
  {
    question: "Is Innvostep free?",
    answer:
      "Yes. Innvostep currently shares free educational content through social platforms and its website to make startup learning accessible for students.",
  },
  {
    question: "Why was Innvostep created?",
    answer:
      "Innvostep was created to bridge the gap between traditional education and real-world entrepreneurship by making startup education practical, modern, and accessible.",
  },
]

function FAQItem({
  faq,
  index,
  isOpen,
  onClick,
}: {
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onClick: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border/50"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-medium pr-8 group-hover:text-primary transition-colors">
          {faq.question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Everything you need to know about Innvostep.
          </p>
        </motion.div>

        <div className="rounded-3xl glass gradient-border p-2 md:p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}