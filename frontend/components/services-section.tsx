"use client"

import { useState } from "react"
import { Truck, Warehouse, ShieldCheck, Monitor, Lightbulb } from "lucide-react"

const categories = [
  { id: "transport", label: "Transport", icon: Truck },
  { id: "store", label: "Store", icon: Warehouse },
  { id: "protect", label: "Clear & Protect", icon: ShieldCheck },
  { id: "management", label: "Logistics Management", icon: Monitor },
  { id: "solutions", label: "Solutions", icon: Lightbulb },
]

const servicesByCategory: Record<
  string,
  Array<{
    title: string
    description: string
    image: string
  }>
> = {
  transport: [
    {
      title: "WFL Spot",
      description: "Get fixed prices and guaranteed loading when booking your customers'...",
      image: "/flat-vector-illustration-truck-delivering-cargo-lo.jpg",
    },
    {
      title: "Ocean Contract",
      description: "Transport your goods with stable rates, choice of allocation and assured space.",
      image: "/flat-vector-illustration-container-ship-ocean-frei.jpg",
    },
    {
      title: "Ocean Quote Request",
      description: "Get a freight quote for standard, oversized, and LCL shipments.",
      image: "/flat-vector-illustration-person-working-laptop-shi.jpg",
    },
    {
      title: "WFL Go",
      description: "Book and manage your own deliveries from door to door with a simple online...",
      image: "/flat-vector-illustration-delivery-driver-packages-.jpg",
    },
    {
      title: "Intermodal Prices",
      description: "Find online rates for Inland Transportation via Truck, Barge, or Rail.",
      image: "/flat-vector-illustration-intermodal-transport-trai.jpg",
    },
  ],
  store: [
    {
      title: "Warehousing",
      description: "Strategic storage solutions across global locations with real-time inventory.",
      image: "/flat-vector-illustration-warehouse-storage-boxes-f.jpg",
    },
    {
      title: "Distribution",
      description: "Efficient distribution networks optimized for your supply chain needs.",
      image: "/flat-vector-illustration-distribution-center-truck.jpg",
    },
    {
      title: "Fulfillment",
      description: "End-to-end fulfillment services for e-commerce and retail operations.",
      image: "/flat-vector-illustration-ecommerce-fulfillment-pac.jpg",
    },
  ],
  protect: [
    {
      title: "Customs Clearance",
      description: "Expert customs brokerage services ensuring compliant cross-border movement.",
      image: "/flat-vector-illustration-customs-clearance-documen.jpg",
    },
    {
      title: "Cargo Insurance",
      description: "Comprehensive coverage protecting your shipments against loss and damage.",
      image: "/flat-vector-illustration-cargo-insurance-protectio.jpg",
    },
  ],
  management: [
    {
      title: "Control Tower",
      description: "Real-time visibility and control across your entire supply chain.",
      image: "/flat-vector-illustration-control-tower-dashboard-a.jpg",
    },
    {
      title: "Supply Chain Analytics",
      description: "Data-driven insights to optimize your logistics operations.",
      image: "/flat-vector-illustration-analytics-charts-graphs-l.jpg",
    },
  ],
  solutions: [
    {
      title: "Cold Chain",
      description: "Temperature-controlled logistics for perishables and pharmaceuticals.",
      image: "/flat-vector-illustration-cold-chain-refrigerated-t.jpg",
    },
    {
      title: "Project Cargo",
      description: "Specialized solutions for oversized and heavy-lift cargo requirements.",
      image: "/flat-vector-illustration-heavy-lift-cargo-crane-lo.jpg",
    },
  ],
}

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("transport")

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-border mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeCategory === category.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <category.icon className="h-4 w-4" />
              {category.label}
              {activeCategory === category.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {servicesByCategory[activeCategory]?.map((service) => (
            <div key={service.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-secondary mb-4">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
