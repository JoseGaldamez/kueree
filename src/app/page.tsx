import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { FeaturesCarousel } from "@/components/features-carousel"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ProblemAndSoluctionSection } from "@/components/problem-end-solution"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />

      <ProblemAndSoluctionSection />

      <FeaturesCarousel />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
