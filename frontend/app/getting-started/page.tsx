import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"
import { Package, Search, FileText, Truck, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Book Your Consignment",
    description:
      "Click the 'Book Now' button and fill in your shipment details including origin, destination, cargo type, and weight. Our team will review and provide a quote.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Prepare Documentation",
    description:
      "Gather required documents such as commercial invoice, packing list, and any special permits. Our customs team can help guide you through this process.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Pickup & Transit",
    description:
      "Once booking is confirmed, we'll arrange pickup from your location. Your cargo will be transported via the most efficient route to its destination.",
  },
  {
    number: "04",
    icon: Search,
    title: "Track Your Shipment",
    description:
      "Use your consignment number to track your shipment in real-time. Get updates on location, estimated arrival, and delivery status.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Delivery Complete",
    description:
      "Your cargo arrives at the destination. Receive proof of delivery and any relevant documentation for your records.",
  },
]

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="How to Get Started"
          description="A simple guide to booking and tracking your shipments with World Famous Logistics."
          breadcrumbs={[{ label: "Getting Started", href: "/getting-started" }]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Connector line */}
                  {index < steps.length - 1 && <div className="absolute left-6 top-16 h-full w-0.5 bg-border" />}
                  {/* Step number */}
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-white font-bold">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="flex-1 border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      <step.icon className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold">Ready to ship?</h2>
              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                Start your first booking now or contact us if you have any questions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <BookConsignmentDialog>
                  <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                    Book Your First Consignment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </BookConsignmentDialog>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Talk to Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
