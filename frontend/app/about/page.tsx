import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Globe, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "1M+", label: "Shipments Delivered" },
]

const values = [
  {
    title: "Reliability",
    description:
      "We deliver on our promises. Every shipment, every time. Our commitment to reliability has made us a trusted partner for businesses worldwide.",
  },
  {
    title: "Innovation",
    description:
      "We continuously invest in technology and processes to provide smarter, faster, and more efficient logistics solutions.",
  },
  {
    title: "Customer Focus",
    description:
      "Your success is our priority. We work closely with each client to understand their unique needs and deliver tailored solutions.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to reducing our environmental impact through green logistics practices and sustainable operations.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="About World Famous Logistics"
          description="Your trusted partner in global supply chain solutions since 2009."
          breadcrumbs={[{ label: "About Us", href: "/about" }]}
        />

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Founded in 2009, World Famous Logistics began with a simple mission: to make global trade accessible
                  and efficient for businesses of all sizes. What started as a small freight forwarding company in Dhaka
                  has grown into a comprehensive logistics provider serving customers across 50+ countries.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Today, we offer end-to-end supply chain solutions including ocean freight, air freight, road and rail
                  transport, warehousing, and customs services. Our team of experienced logistics professionals is
                  dedicated to delivering exceptional service and value to every customer.
                </p>
              </div>
              <div className="aspect-video bg-secondary">
                <img src="/modern-logistics-office-professional-team.jpg" alt="WFL Team" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center border-2 border-accent">
                    <stat.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-4xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="mt-1 text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold">Our Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              These core values guide everything we do and define who we are as a company.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="border border-border bg-card p-6">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
