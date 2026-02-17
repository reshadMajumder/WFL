import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"
import { Ship, Plane, Truck, Train, Check } from "lucide-react"

const pricingPlans = [
    {
    icon: Plane,
    title: "Air Freight",
    description: "Fast delivery for time-sensitive cargo",
    features: [
      "Express delivery options",
      "Temperature-controlled cargo",
      "Dangerous goods handling",
      "Airport-to-airport service",
      "Priority customs clearance",
    ],
    cta: "Get Air Quote",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective for large shipments",
    features: [
      "Full Container Load (FCL)",
      "Less than Container Load (LCL)",
      "Door-to-door delivery",
      "Real-time tracking",
      "Customs clearance support",
    ],
    cta: "Get Ocean Quote",
    popular: true,

  },

  {
    icon: Truck,
    title: "Road Transport",
    description: "Flexible ground transportation",
    features: [
      "Full truckload (FTL)",
      "Less than truckload (LTL)",
      "Cross-border trucking",
      "Last-mile delivery",
      "GPS tracking",
    ],
    cta: "Get Road Quote",
  },
  {
    icon: Train,
    title: "Rail Freight",
    description: "Eco-friendly overland transport",
    features: [
      "Container rail services",
      "Intermodal solutions",
      "Block train services",
      "Cross-continental routes",
      "Competitive pricing",
    ],
    cta: "Get Rail Quote",
  },
]

export default function PricesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Competitive Pricing"
          description="Transparent pricing for all your logistics needs. Get instant quotes for your shipments."
          breadcrumbs={[{ label: "Prices", href: "/prices" }]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.title}
                  className={`relative border bg-card p-6 ${plan.popular ? "border-accent" : "border-border"}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-4 bg-accent px-3 py-1 text-xs font-semibold text-white">
                      MOST POPULAR
                    </span>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-foreground">
                    <plan.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{plan.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <BookConsignmentDialog>
                    <Button
                      className={`mt-6 w-full ${
                        plan.popular
                          ? "bg-accent text-white hover:bg-accent/90"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </BookConsignmentDialog>
                </div>
              ))}
            </div>

            <div className="mt-16 border border-border bg-secondary p-8 text-center">
              <h3 className="text-2xl font-semibold">Need a Custom Quote?</h3>
              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                For large volume shipments, specialized cargo, or custom logistics solutions, our team will provide a
                tailored quote.
              </p>
              <BookConsignmentDialog>
                <Button size="lg" className="mt-6 bg-accent text-white hover:bg-accent/90">
                  Request Custom Quote
                </Button>
              </BookConsignmentDialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
