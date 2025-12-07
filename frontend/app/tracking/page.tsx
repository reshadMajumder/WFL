"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Package, Truck, MapPin, CheckCircle, Clock } from "lucide-react"

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState("")
  const [trackingResult, setTrackingResult] = useState<null | "found" | "not-found">(null)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingId.trim()) {
      // Demo: show found if ID starts with "WFL", otherwise not found
      setTrackingResult(trackingId.toUpperCase().startsWith("WFL") ? "found" : "not-found")
    }
  }

  const demoTracking = {
    id: "WFL-2024-001234",
    status: "In Transit",
    origin: "Dhaka, Bangladesh",
    destination: "Singapore",
    estimatedDelivery: "Dec 15, 2024",
    timeline: [
      { status: "Order Placed", date: "Dec 5, 2024", time: "09:00 AM", completed: true },
      { status: "Picked Up", date: "Dec 6, 2024", time: "02:30 PM", completed: true },
      { status: "In Transit", date: "Dec 8, 2024", time: "10:15 AM", completed: true, current: true },
      { status: "Customs Clearance", date: "Dec 12, 2024", time: "—", completed: false },
      { status: "Out for Delivery", date: "Dec 14, 2024", time: "—", completed: false },
      { status: "Delivered", date: "Dec 15, 2024", time: "—", completed: false },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Track Your Shipment"
          description="Enter your consignment number to get real-time tracking updates."
          breadcrumbs={[{ label: "Tracking", href: "/tracking" }]}
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Search Form */}
            <div className="mx-auto max-w-2xl">
              <form onSubmit={handleTrack} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter tracking number (e.g., WFL-2024-001234)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Track
                </Button>
              </form>
              <p className="mt-2 text-sm text-muted-foreground">
                Try demo: Enter any ID starting with "WFL" to see tracking results
              </p>
            </div>

            {/* Tracking Result */}
            {trackingResult === "found" && (
              <div className="mx-auto mt-12 max-w-4xl">
                <div className="border border-border bg-card p-6">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Tracking Number</p>
                      <p className="text-xl font-semibold">{demoTracking.id}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 text-accent">
                      <Truck className="h-5 w-5" />
                      <span className="font-semibold">{demoTracking.status}</span>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Origin</p>
                        <p className="font-medium">{demoTracking.origin}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">Destination</p>
                        <p className="font-medium">{demoTracking.destination}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                        <p className="font-medium">{demoTracking.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mt-10">
                    <h3 className="mb-6 font-semibold">Shipment Timeline</h3>
                    <div className="relative">
                      {demoTracking.timeline.map((item, index) => (
                        <div key={index} className="flex gap-4 pb-8 last:pb-0">
                          <div className="relative flex flex-col items-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center ${
                                item.completed ? "bg-accent text-white" : "bg-secondary text-muted-foreground"
                              }`}
                            >
                              {item.completed ? <CheckCircle className="h-5 w-5" /> : <Package className="h-4 w-4" />}
                            </div>
                            {index < demoTracking.timeline.length - 1 && (
                              <div
                                className={`absolute top-8 h-full w-0.5 ${item.completed ? "bg-accent" : "bg-border"}`}
                              />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <p className={`font-medium ${item.current ? "text-accent" : ""}`}>{item.status}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.date} • {item.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {trackingResult === "not-found" && (
              <div className="mx-auto mt-12 max-w-2xl text-center">
                <div className="border border-border bg-card p-8">
                  <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">Shipment Not Found</h3>
                  <p className="mt-2 text-muted-foreground">
                    We couldn't find a shipment with that tracking number. Please check the number and try again.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
