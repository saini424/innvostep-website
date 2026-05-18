import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import SocialSection from "@/components/landing/social-section"
import { LogoMarquee } from "@/components/landing/logo-marquee"
import { Features } from "@/components/landing/features"
import { BentoGrid } from "@/components/landing/bento-grid"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialSection />
      <LogoMarquee />
      <Features />
      <BentoGrid />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}