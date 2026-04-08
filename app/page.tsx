import { GradientBackground } from "@/components/gradient-background"
import { PortfolioSection } from "@/components/portfolio-section"

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-start justify-center overflow-hidden py-20 px-6">
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <PortfolioSection />
    </main>
  )
}
