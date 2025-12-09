import { HeroSection } from "@/components/hero-section"
import { CoreServices } from "@/components/core-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { BookingSection } from "@/components/booking-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <CoreServices />
        <WhyChooseUs />
        <BookingSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
