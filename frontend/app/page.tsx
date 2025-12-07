import { HeroSection } from "@/components/hero-section"
import { CoreServices } from "@/components/core-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TrackingBooking } from "@/components/tracking-booking"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <CoreServices />
        <WhyChooseUs />
        <TrackingBooking />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
