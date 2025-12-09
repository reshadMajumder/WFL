"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

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
        <section className="relative bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">Get in Touch</h1>
              <p className="mt-4 text-lg text-white/80">
                Have questions about our freight services? We're here to help you find the best shipping solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 lg:grid-cols-5">
              {/* Contact Form - Takes more space */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="mt-8 border border-accent bg-accent/5 p-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center bg-accent/10">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">Message Sent Successfully</h3>
                    <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                      Thank you for contacting us. Our team will review your inquiry and respond within 24 business
                      hours.
                    </p>
                    <Button className="mt-6 bg-transparent" variant="outline" onClick={() => setFormSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Full Name *</label>
                        <Input required placeholder="Your name" className="h-12" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Company</label>
                        <Input placeholder="Company name" className="h-12" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Email *</label>
                        <Input required type="email" placeholder="you@company.com" className="h-12" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Phone</label>
                        <Input placeholder="+880 1XXX XXXXXX" className="h-12" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Subject *</label>
                      <Input required placeholder="How can we help you?" className="h-12" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Message *</label>
                      <Textarea
                        required
                        rows={6}
                        placeholder="Tell us about your shipping needs..."
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto px-10 bg-accent text-white hover:bg-accent/90"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-2">
                <div className="bg-muted/50 p-8">
                  <h2 className="text-xl font-bold">Contact Information</h2>

                  <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium">Head Office</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          123 Logistics Tower
                          <br />
                          Motijheel, Dhaka 1000
                          <br />
                          Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          +880 2 1234 5678
                          <br />
                          +880 1700 000000
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          info@wflogistics.com
                          <br />
                          booking@wflogistics.com
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Sun - Thu: 9:00 AM - 6:00 PM
                          <br />
                          Fri - Sat: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border">
                    <h3 className="font-semibold">Other Locations</h3>
                    <div className="mt-4 space-y-4 text-sm">
                      <div>
                        <p className="font-medium">Chittagong</p>
                        <p className="text-muted-foreground">+880 31 123 4567</p>
                      </div>
                      <div>
                        <p className="font-medium">Mongla Port</p>
                        <p className="text-muted-foreground">+880 468 123456</p>
                      </div>
                    </div>
                  </div>
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
