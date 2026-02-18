import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Users, Award, TrendingUp, Target, Handshake, Clock, Shield, ArrowRight, Phone, Mail } from "lucide-react"

const stats = [
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "1M+", label: "Shipments Delivered" },
]

const values = [
  {
    icon: Target,
    title: "Reliability",
    description:
      "We deliver on our promises. Every shipment, every time. Our commitment to reliability has made us a trusted partner for businesses worldwide.",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description:
      "Your success is our priority. We work closely with each client to understand their unique needs and deliver tailored solutions.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description:
      "We understand that time is money in logistics. Our operations are optimized for speed without compromising on safety or quality.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty. Our clients trust us with their cargo because we've earned that trust through consistent ethical practices.",
  },
]

const milestones = [
  {
    year: "2009",
    title: "Company Founded",
    description: "Started as a small freight forwarding company in Dhaka with just 5 employees.",
  },
  {
    year: "2012",
    title: "Regional Expansion",
    description: "Expanded operations to cover all major ports and airports in Bangladesh.",
  },
  {
    year: "2015",
    title: "International Network",
    description: "Established partnerships with agents in over 30 countries across Asia and Europe.",
  },
  {
    year: "2018",
    title: "Technology Integration",
    description: "Launched digital booking and shipment management systems for customers.",
  },
  {
    year: "2021",
    title: "Award Recognition",
    description: "Received 'Best Freight Forwarder' award from the Bangladesh Freight Forwarders Association.",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Now serving 50+ countries with a team of 200+ logistics professionals.",
  },
]

const leadership = [
  {
    name: "Shadman Shahriyar Nafi",
    role: "Director",
    description: "Leading strategic initiatives and business development",
    mobile: "+880 1765 407019",
    email: "nafi@worldfamouslogistics.com",
  },
  {
    name: "MD. Abul Hossain",
    role: "Chairman",
    description: "Visionary leadership and corporate governance",
    mobile: "+880 1711 825233",
    email: "a.hossain@worldfamouslogistics.com",
  },
  {
    name: "Md. Nazmul Haque",
    role: "Managing Director",
    description: "Operational excellence and strategic management",
    mobile: "+880 1713 063486",
    email: "nazmul.haque@worldfamouslogistics.com",
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
                  Today, we offer end-to-end supply chain solutions including ocean freight, air freight, road
                  transport, and customs clearance services. Our team of experienced logistics professionals is
                  dedicated to delivering exceptional service and value to every customer.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We take pride in being more than just a freight forwarder—we are your strategic logistics partner.
                  Whether you're shipping a single container or managing complex multi-modal supply chains, we have the
                  expertise and network to deliver.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/services">
                    <Button className="bg-accent text-white hover:bg-accent/90">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-secondary overflow-hidden">
                  <img src="/modern-logistics-office-team-working-professional.jpg" alt="WFL Team at Work" className="h-full w-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    <img
                      src="/cargo-ship-container-port-logistics.jpg"
                      alt="Container Port Operations"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-secondary overflow-hidden">
                    <img
                      src="/cargo-airplane-freight-loading-airport.jpg"
                      alt="Air Freight Operations"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
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

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-accent mb-4">
                  <Target className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To provide reliable, efficient, and cost-effective freight forwarding solutions that empower
                  businesses to compete in the global marketplace. We are committed to simplifying international
                  logistics through personalized service, industry expertise, and a worldwide network of trusted
                  partners.
                </p>
              </div>
              <div className="border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-accent mb-4">
                  <Globe className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To be the most trusted freight forwarding partner in South Asia, recognized for our unwavering
                  commitment to customer success, operational excellence, and ethical business practices. We aim to set
                  the standard for quality and reliability in the logistics industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              These principles guide everything we do and define who we are as a company.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="border border-border bg-card p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border-2 border-foreground">
                    <value.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold">Our Journey</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Key milestones in our growth from a small startup to a leading freight forwarder.
            </p>
            <div className="mt-12 relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      <div
                        className={`border border-border bg-card p-6 ${index % 2 === 0 ? "" : "md:ml-auto"} md:max-w-md`}
                      >
                        <span className="text-sm font-bold text-accent">{milestone.year}</span>
                        <h3 className="mt-1 text-lg font-semibold">{milestone.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="h-4 w-4 bg-accent" />
                    </div>
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold">Leadership Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Meet the experienced professionals leading World Famous Logistics.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {leadership.map((person) => (
                <div key={person.name} className="border border-border bg-card p-6">
                  <div className="mx-auto h-24 w-24 bg-muted flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-lg">{person.name}</h3>
                  <p className="text-sm text-accent font-medium mt-1">{person.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{person.description}</p>
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <a href={`tel:${person.mobile}`} className="text-xs text-muted-foreground hover:text-accent transition-colors">
                        {person.mobile}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <a href={`mailto:${person.email}`} className="text-xs text-muted-foreground hover:text-accent transition-colors break-all">
                        {person.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">Ready to Work With Us?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
              Join thousands of businesses who trust World Famous Logistics for their freight forwarding needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
