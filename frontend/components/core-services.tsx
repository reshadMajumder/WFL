import Link from "next/link"
import { Plane, Ship, Truck, FileCheck, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express air cargo for time-sensitive shipments with global airport coverage.",
    href: "/services#air-freight",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "FCL and LCL ocean shipping with competitive rates on major trade lanes.",
    href: "/services#sea-freight",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description: "Door-to-door trucking and cross-border land transportation services.",
    href: "/services#road-freight",
  },
  {
    icon: FileCheck,
    title: "Customs & Documentation",
    description: "Expert customs clearance and complete documentation support.",
    href: "/services#customs",
  },
]

export function CoreServices() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Our Core Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            End-to-end freight forwarding solutions across air, sea, and land.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent mb-4">
                <service.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
