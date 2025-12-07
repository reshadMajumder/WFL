import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { HelpCircle, Phone, MessageSquare, Package, Ship, Truck, FileCheck } from "lucide-react"

const faqs = [
  {
    question: "How do I book a consignment?",
    answer:
      "Click the 'Book Now' button on our website to open the booking form. Fill in your shipment details, pickup and delivery information, and submit your request. Our team will contact you with a quote.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Visit our Tracking page and enter your consignment number (starting with WFL-). You'll see real-time updates on your shipment's status and location.",
  },
  {
    question: "What documents do I need for international shipping?",
    answer:
      "Required documents typically include commercial invoice, packing list, bill of lading, and customs declaration. Our team will guide you through the documentation process.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We accept bank transfers, credit cards, and cash payments. Payment terms vary based on the service and customer agreement. Contact us for specific details.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes, we provide comprehensive customs brokerage services to ensure smooth clearance of your goods at origin and destination ports.",
  },
]

const supportCategories = [
  { icon: Package, title: "Booking Support", description: "Help with placing new bookings", href: "/contact" },
  { icon: Ship, title: "Shipment Queries", description: "Questions about existing shipments", href: "/tracking" },
  { icon: FileCheck, title: "Documentation", description: "Help with shipping documents", href: "/contact" },
  { icon: Truck, title: "Delivery Issues", description: "Report delivery problems", href: "/contact" },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Support Center"
          description="Find answers to common questions or get in touch with our support team."
          breadcrumbs={[{ label: "Support", href: "/support" }]}
        />

        {/* Quick Actions */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {supportCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="flex items-start gap-4 border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-foreground">
                    <category.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
              <p className="mt-2 text-center text-muted-foreground">Quick answers to common questions</p>

              <div className="mt-10 space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-border bg-card p-6">
                    <h3 className="flex items-start gap-3 font-semibold">
                      <HelpCircle className="h-5 w-5 shrink-0 text-accent" />
                      {faq.question}
                    </h3>
                    <p className="mt-3 pl-8 text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground">Still need help?</h2>
            <p className="mx-auto mt-2 max-w-xl text-primary-foreground/80">
              Our support team is ready to assist you with any questions or concerns.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Phone className="mr-2 h-4 w-4" />
                +880 2 1234 5678
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
