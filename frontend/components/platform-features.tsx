import { Zap, Eye, Shield, Leaf, Building2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Smart Onboarding",
    description:
      "Interactive step-by-step guides tailored by industry with automatic document and compliance checklists.",
  },
  {
    icon: Eye,
    title: "Multi-Carrier Control Tower",
    description: "Aggregate third-party carriers for one-pane visibility with predictive exception management.",
  },
  {
    icon: Shield,
    title: "Dynamic Rebooking",
    description: "One-click rerouting across modes with preserved commercial terms when disruptions occur.",
  },
  {
    icon: Leaf,
    title: "Net-Zero Pathways",
    description: "Mode-shift advisory, supplier scoring, and audited book-and-claim with quarterly assurance.",
  },
  {
    icon: Building2,
    title: "Sector Blueprints",
    description: "Industry-specific templates including SOPs, KPIs, and compliance packs for your vertical.",
  },
]

export function PlatformFeatures() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Platform Advantage</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Beyond Standard Logistics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Our digital platform delivers capabilities that set new industry standards.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-primary-foreground/20 bg-transparent p-6 transition-all hover:bg-primary-foreground/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent">
                <feature.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
          <div className="flex items-center justify-center border border-accent bg-accent/10 p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">40%</div>
              <p className="mt-2 text-sm text-primary-foreground/80">Average Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
