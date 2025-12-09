import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Ship, Plane, Truck, FileCheck, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Express air cargo services for time-sensitive shipments. Door-to-door delivery, consolidation, GOH handling, and charter services.",
    href: "/services/air-freight",
    image: "/cargo-airplane-airport-freight-loading-professiona.jpg",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Full container load (FCL) and less than container load (LCL) ocean shipping with competitive rates on major trade lanes.",
    href: "/services/sea-freight",
    image: "/container-ship-ocean-port-cargo-professional-logis.jpg",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description:
      "Inland haulage and trucking services with 24-hour operations. Container haulage, FTL, LTL, and door-to-door delivery.",
    href: "/services/road-freight",
    image: "/freight-truck-highway-sunset-logistics-professiona.jpg",
  },
  {
    icon: FileCheck,
    title: "Customs & Documentation",
    description:
      "Expert customs brokerage and documentation support ensuring smooth cross-border clearance and regulatory compliance.",
    href: "/services#customs",
    image: "/customs-clearance-documents-professional.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Our Services"
          description="End-to-end freight forwarding solutions across air, sea, and land."
          breadcrumbs={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
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
                      <div className="flex h-10 w-10 items-center justify-center border-2 border-accent">
                        <service.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <section id="customs" className="mt-16 pt-16 border-t border-border">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Customs & Documentation Services</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our experienced customs team ensures your shipments clear customs smoothly and efficiently. We
                    handle all documentation requirements and regulatory compliance so you can focus on your business.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Import & Export Customs Clearance",
                      "Bill of Lading Preparation",
                      "Certificate of Origin",
                      "Letter of Credit Documentation",
                      "Cargo Insurance Certificates",
                      "Packing Lists & Commercial Invoices",
                      "Regulatory Compliance Support",
                      "Duty & Tax Consultation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 border border-border p-8">
                  <FileCheck className="h-12 w-12 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Need Documentation Help?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our documentation specialists are ready to assist you with all your paperwork requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-accent text-white px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
                  >
                    Contact Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
