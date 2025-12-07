import { Package, MapPin, FileText, Headphones, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    icon: Package,
    title: "Easy Consignment Booking",
    description: "Book your shipments quickly with our streamlined booking process for all cargo types.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your consignments in real-time with milestone updates and delivery notifications.",
  },
  {
    icon: FileText,
    title: "Shipment Documentation",
    description: "Access and download all your shipping documents, receipts, and delivery proofs.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Get assistance anytime with our dedicated support team for booking and tracking queries.",
  },
]

export function DigitalProducts() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Services</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Simple Booking & Tracking
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We make logistics simple. Book your consignments and track them in real-time — no account needed, just
              seamless shipping from start to finish.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <div key={product.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border">
                    <product.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-foreground text-background hover:bg-foreground/90">
              Book Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border-2 border-accent" />
              <img
                src="/flat-vector-illustration-logistics-dashboard-analy.jpg"
                alt="Digital platform dashboard"
                className="relative border border-border bg-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
