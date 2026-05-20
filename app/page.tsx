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
    <main className="min-h-screen overflow-x-hidden bg-[#f8f8f6]">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Spacer For Fixed Navbar */}
      <div className="h-24 md:h-28 lg:h-32" />

      {/* Hero Section */}
      <Hero />

      {/* Remaining Sections */}
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