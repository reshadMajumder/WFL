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
        <section className="relative bg-primary py-30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">Get in Touch</h1>
              <p className="mt-4 text-lg text-white/80">
                Have questions about our freight services? We're here to help you find the best shipping solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
              {/* Contact Form - Takes more space */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="mt-6 md:mt-8 border border-accent bg-accent/5 p-8 md:p-10 text-center">
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
                  <form onSubmit={handleSubmit} className="mt-6 md:mt-8 space-y-4 md:space-y-5">
                    <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Full Name *</label>
                        <Input required placeholder="Your name" className="h-11 md:h-12" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Company</label>
                        <Input placeholder="Company name" className="h-11 md:h-12" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Email *</label>
                        <Input required type="email" placeholder="you@company.com" className="h-11 md:h-12" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Phone</label>
                        <Input placeholder="+880 1XXX XXXXXX" className="h-11 md:h-12" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Subject *</label>
                      <Input required placeholder="How can we help you?" className="h-11 md:h-12" />
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

              <div className="lg:col-span-1">
                <div className="bg-muted/50 p-6 md:p-8 h-full">
                  <h2 className="text-xl md:text-2xl font-bold">Contact Information</h2>

                  <div className="mt-6 md:mt-8 space-y-6">
                    {/* Head Office */}
                    <div className="flex gap-3 md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm md:text-base">Head Office</h3>
                        <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
                          1st Floor (1st Staircase)<br />
                          1837 Abdus Sattar By Lane<br />
                          Sk. Mujib Road, Agrabad<br />
                          Chattogram-4100, Bangladesh
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-3 md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm md:text-base">Phone</h3>
                        <div className="mt-1 text-xs md:text-sm text-muted-foreground space-y-1">
                          <p className="font-medium">Office:</p>
                          <p>+880-02334419246</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-3 md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0 break-words">
                        <h3 className="font-semibold text-sm md:text-base">Email</h3>
                        <div className="mt-1 text-xs md:text-sm text-muted-foreground space-y-1">
                          <p className="break-all">nafi@worldfamouslogistics.com</p>
                          <p className="break-all">a.hossain@worldfamouslogistics.com</p>
                          <p className="break-all">nazmul.haque@worldfamouslogistics.com</p>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex gap-3 md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10">
                        <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm md:text-base">Business Hours</h3>
                        <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                          Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                          Friday - Saturday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Contacts */}
                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                    <h3 className="font-semibold text-sm md:text-base mb-4">Key Contacts</h3>
                    <div className="space-y-4 text-xs md:text-sm">
                      <div className="pb-3 border-b border-border last:border-0 last:pb-0">
                        <p className="font-semibold">Shadman Shahriyar Nafi</p>
                        <p className="text-accent mt-0.5">Director</p>
                        <p className="text-muted-foreground mt-1">+880 1765 407019</p>
                      </div>
                      <div className="pb-3 border-b border-border last:border-0 last:pb-0">
                        <p className="font-semibold">MD. Abul Hossain</p>
                        <p className="text-accent mt-0.5">Chairman</p>
                        <p className="text-muted-foreground mt-1">+880 1711 825233</p>
                      </div>
                      <div className="pb-3 border-b border-border last:border-0 last:pb-0">
                        <p className="font-semibold">Md. Nazmul Haque</p>
                        <p className="text-accent mt-0.5">Managing Director</p>
                        <p className="text-muted-foreground mt-1">+880 1713 063486</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-8 md:mt-12 lg:mt-16">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Find Us on Map</h2>
              <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] border border-border overflow-hidden rounded-lg shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2405.0017116504414!2d91.81005330853522!3d22.328937503525104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE5JzQ0LjIiTiA5McKwNDgnNDIuMiJF!5e1!3m2!1sen!2sbd!4v1771323875171!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="World Famous Logistics Office Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
