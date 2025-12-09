"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle2, ArrowRight, Plane, Ship, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"

interface ServiceFeature {
  title: string
  description: string
}

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  heroImage: string
  description: string
  services: string[]
  features: ServiceFeature[]
  advantages: string[]
  icon: string
}

const iconMap = {
  Plane,
  Ship,
  Truck,
}

export function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  description,
  services,
  features,
  advantages,
  icon,
}: ServicePageLayoutProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Ship
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-primary-foreground/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/services" className="hover:text-accent transition-colors">
                Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary-foreground">{title}</span>
            </nav>

            {/* Title Block */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm px-4 py-2 mb-4">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <span className="text-accent font-medium">{subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Description & Services List */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
              </div>

              {/* Our Services */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our {title} Services</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="border border-border p-5 bg-card">
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Book Now Card */}
              <div className="border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ready to Ship?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Get started with your {title.toLowerCase()} shipment today. Our team is ready to assist you.
                </p>
                <BookConsignmentDialog>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-none">
                    Book Consignment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </BookConsignmentDialog>
              </div>

              {/* Why Choose Us */}
              <div className="border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose WFL?</h3>
                <ul className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm text-muted-foreground">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="border border-accent bg-accent/5 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Need Assistance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our logistics experts are available 24/7 to help with your shipment needs.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full rounded-none border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Start Shipping with World Famous Logistics
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience reliable {title.toLowerCase()} services with real-time tracking and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookConsignmentDialog>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none px-8">
                Book Now
              </Button>
            </BookConsignmentDialog>
            <Link href="/tracking">
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
              >
                Track Shipment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
