"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Logistics Tower", "Motijheel Commercial Area", "Dhaka 1000, Bangladesh"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+880 2 1234 5678", "+880 1700 000000"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@wflogistics.com", "support@wflogistics.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sunday - Thursday: 9AM - 6PM", "Friday - Saturday: Closed"],
  },
]

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Contact Us"
          description="Have questions? We're here to help. Get in touch with our team."
          breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="mt-8 border border-accent bg-accent/10 p-6 text-center">
                    <h3 className="text-lg font-semibold text-accent">Thank you!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">First Name</label>
                        <Input required placeholder="John" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Last Name</label>
                        <Input required placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Email</label>
                      <Input required type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Phone</label>
                      <Input placeholder="+880 1XXX XXXXXX" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Subject</label>
                      <Input required placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Message</label>
                      <Textarea required rows={5} placeholder="Tell us more about your inquiry..." />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent text-white hover:bg-accent/90">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">Reach out to us through any of these channels.</p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-foreground">
                        <info.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 aspect-video bg-secondary">
                  <img
                    src="/map-dhaka-bangladesh-location.jpg"
                    alt="Office Location Map"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
