import Link from "next/link"
import { LifeBuoy, Package, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"

const actions = [
  {
    icon: LifeBuoy,
    title: "How to get started",
    description:
      "Whether you need to find prices, place a booking, submit documents, or track your cargo, our step-by-step guides will help you find your way around.",
    cta: "Get started",
    href: "/getting-started",
    isBooking: false,
  },
  {
    icon: Package,
    title: "Ready to ship?",
    description:
      "Book your consignment online, track shipments in real-time, and access our network of logistics services designed to simplify your supply chain.",
    cta: "Book Now",
    isBooking: true,
  },
  {
    icon: Award,
    title: "Become a logistics expert",
    description:
      "Discover insights, introductory videos, explanatory articles and gain the confidence you need to optimise your supply chain.",
    cta: "View all explainers",
    href: "/support",
    isBooking: false,
  },
]

export function QuickActions() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {actions.map((action) => (
            <div key={action.title} className="border border-border bg-card p-6 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-foreground">
                  <action.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{action.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">{action.description}</p>
              {action.isBooking ? (
                <BookConsignmentDialog>
                  <Button className="bg-foreground text-background hover:bg-foreground/90">{action.cta}</Button>
                </BookConsignmentDialog>
              ) : (
                <Link href={action.href || "#"}>
                  <Button className="bg-foreground text-background hover:bg-foreground/90">{action.cta}</Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
