"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"
import { CheckCircle } from "lucide-react"

const carouselImages = [
  {
    url: "/cargo-container-ship-in-ocean-port-professional-lo.jpg",
    alt: "Cargo container ship at port",
  },
  {
    url: "/air-freight-cargo-plane-loading-packages-logistics.jpg",
    alt: "Air freight cargo plane",
  },
  {
    url: "/warehouse-logistics-workers-with-forklifts-profess.jpg",
    alt: "Warehouse logistics operations",
  },
  {
    url: "/freight-train-cargo-containers-railway-logistics.jpg",
    alt: "Freight train with cargo containers",
  },
]

const valuePoints = ["Competitive Freight Rates", "Real-Time Tracking", "24/7 Support", "Global Network"]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Header />

      {/* Background Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.url || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 pt-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
            Ship Cargo Worldwide <span className="block">With transparent pricing</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/90">
            Your shipment, handled with care. We manage logistics so you can focus on your business.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {valuePoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <BookConsignmentDialog>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Now
              </Button>
            </BookConsignmentDialog>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <a href="/tracking">Track Shipment</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
