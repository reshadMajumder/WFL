import { Globe, Clock, Package, Headphones } from "lucide-react"

const stats = [
  { value: "150+", label: "Countries Covered", icon: Globe },
  { value: "98.5%", label: "On-Time Delivery", icon: Clock },
  { value: "50K+", label: "Shipments Annually", icon: Package },
  { value: "24/7", label: "Support Available", icon: Headphones },
]

export function StatsSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
