"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Search, ArrowRight } from "lucide-react"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"
import { useRouter } from "next/navigation"

export function TrackingBooking() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const router = useRouter()

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      router.push(`/tracking?id=${encodeURIComponent(trackingNumber)}`)
    }
  }

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Track Shipment */}
          <div className="border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent">
                <Search className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Track Shipment</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Enter your tracking number or Bill of Lading to get real-time status updates.
            </p>
            <form onSubmit={handleTrack} className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter tracking number or B/L"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90">
                Track
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Book Consignment */}
          <div className="border border-accent bg-accent/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent">
                <Package className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Book Consignment</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Ready to ship? Book your freight in minutes. No account required.
            </p>
            <BookConsignmentDialog>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </BookConsignmentDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
