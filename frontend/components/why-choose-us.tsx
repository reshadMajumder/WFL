import { Zap, Globe, Clock, Headphones, DollarSign, MapPin } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "Get quotes within hours, not days. Quick turnaround on all inquiries.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Best-in-market pricing with transparent breakdown. No hidden fees.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Trusted agents in 150+ countries for seamless international shipping.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Real humans available round-the-clock for booking and tracking queries.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your cargo at every milestone from pickup to delivery.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98.5% on-time delivery rate across all shipping modes.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">Why Choose WFL</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Straightforward logistics with a focus on reliability, speed, and service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-primary-foreground/20 bg-transparent p-6 transition-all hover:bg-primary-foreground/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent mb-4">
                <feature.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
