import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Ship, Plane, Truck, Train, Snowflake, Package, Warehouse, Shield, FileCheck, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description:
      "Full container load (FCL) and less than container load (LCL) shipping services across all major trade routes.",
    href: "/services/ocean-freight",
    image: "/flat-vector-illustration-container-ship-ocean-frei.jpg",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
    href: "/services/air-freight",
    image: "/flat-vector-illustration-air-cargo-airplane-loading-.jpg",
  },
  {
    icon: Truck,
    title: "Road Transport",
    description: "Comprehensive road freight solutions including FTL, LTL, and cross-border trucking.",
    href: "/services/road-rail",
    image: "/flat-vector-illustration-truck-delivering-cargo-lo.jpg",
  },
  {
    icon: Train,
    title: "Rail Freight",
    description: "Cost-effective rail transportation for overland cargo movement.",
    href: "/services/road-rail",
    image: "/flat-vector-illustration-intermodal-transport-trai.jpg",
  },
  {
    icon: Snowflake,
    title: "Cold Chain",
    description: "Temperature-controlled logistics for perishables, pharmaceuticals, and sensitive goods.",
    href: "/services/cold-chain",
    image: "/flat-vector-illustration-cold-chain-refrigerated-t.jpg",
  },
  {
    icon: Package,
    title: "E-commerce Logistics",
    description: "End-to-end fulfillment solutions for online retailers and marketplaces.",
    href: "/services/ecommerce",
    image: "/flat-vector-illustration-ecommerce-fulfillment-pac.jpg",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Strategic storage facilities with inventory management and distribution services.",
    href: "/services/warehousing",
    image: "/flat-vector-illustration-warehouse-storage-boxes-f.jpg",
  },
  {
    icon: FileCheck,
    title: "Customs Services",
    description: "Expert customs brokerage ensuring smooth cross-border clearance.",
    href: "/services/customs",
    image: "/flat-vector-illustration-customs-clearance-documen.jpg",
  },
  {
    icon: Shield,
    title: "Cargo Protection",
    description: "Comprehensive insurance coverage protecting your shipments from risk.",
    href: "/services/cargo-protection",
    image: "/flat-vector-illustration-cargo-insurance-protectio.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Our Services"
          description="Comprehensive logistics solutions to meet all your supply chain needs."
          breadcrumbs={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group border border-border bg-card transition-all hover:shadow-lg hover:border-accent"
                >
                  <div className="aspect-video overflow-hidden bg-secondary">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground">
                        <service.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
