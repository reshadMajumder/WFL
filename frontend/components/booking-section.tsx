"use client"

import { Button } from "@/components/ui/button"
import { Package, ArrowRight, Clock, Shield, Headphones } from "lucide-react"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"

export function BookingSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Book Consignment Card */}
          <div className="border border-accent bg-accent/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent">
                <Package className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Book Your Shipment</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Ready to ship? Book your freight in minutes. Get competitive rates for air, sea, and road freight. No
              account required.
            </p>
            <BookConsignmentDialog>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </BookConsignmentDialog>
          </div>

          {/* Why Book With Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Why Book With Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Fast Response</h4>
                  <p className="text-sm text-muted-foreground">Get quotes within hours, not days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <Shield className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Secure Handling</h4>
                  <p className="text-sm text-muted-foreground">Your cargo is protected every step of the way</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <Headphones className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Human support whenever you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
