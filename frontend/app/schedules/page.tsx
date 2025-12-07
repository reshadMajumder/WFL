"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ship, Plane, Calendar, Clock, ArrowRight } from "lucide-react"

const demoSchedules = [
  {
    type: "ocean",
    route: "Dhaka → Singapore",
    vessel: "WFL Ocean Star",
    departure: "Dec 10, 2024",
    arrival: "Dec 18, 2024",
    transitTime: "8 days",
  },
  {
    type: "ocean",
    route: "Dhaka → Rotterdam",
    vessel: "WFL Atlantic",
    departure: "Dec 12, 2024",
    arrival: "Dec 30, 2024",
    transitTime: "18 days",
  },
  {
    type: "air",
    route: "Dhaka → Dubai",
    vessel: "Flight WFL-234",
    departure: "Dec 9, 2024",
    arrival: "Dec 9, 2024",
    transitTime: "6 hours",
  },
  {
    type: "air",
    route: "Dhaka → London",
    vessel: "Flight WFL-567",
    departure: "Dec 11, 2024",
    arrival: "Dec 11, 2024",
    transitTime: "10 hours",
  },
  {
    type: "ocean",
    route: "Chittagong → Shanghai",
    vessel: "WFL Pacific",
    departure: "Dec 15, 2024",
    arrival: "Dec 25, 2024",
    transitTime: "10 days",
  },
]

export default function SchedulesPage() {
  const [transportType, setTransportType] = useState<string>("all")

  const filteredSchedules = demoSchedules.filter((s) => transportType === "all" || s.type === transportType)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Sailing & Flight Schedules"
          description="View upcoming departures and plan your shipments with our comprehensive schedules."
          breadcrumbs={[{ label: "Schedules", href: "/schedules" }]}
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium">Origin</label>
                <Input placeholder="Enter origin port/city" />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium">Destination</label>
                <Input placeholder="Enter destination port/city" />
              </div>
              <div className="w-full md:w-48">
                <label className="mb-2 block text-sm font-medium">Transport Type</label>
                <Select value={transportType} onValueChange={setTransportType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="ocean">Ocean Freight</SelectItem>
                    <SelectItem value="air">Air Freight</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-accent text-white hover:bg-accent/90">Search</Button>
            </div>

            {/* Schedule List */}
            <div className="space-y-4">
              {filteredSchedules.map((schedule, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-secondary">
                      {schedule.type === "ocean" ? (
                        <Ship className="h-6 w-6 text-accent" />
                      ) : (
                        <Plane className="h-6 w-6 text-accent" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{schedule.route}</p>
                      <p className="text-sm text-muted-foreground">{schedule.vessel}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Departure</p>
                        <p className="text-sm font-medium">{schedule.departure}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Arrival</p>
                        <p className="text-sm font-medium">{schedule.arrival}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Transit Time</p>
                        <p className="text-sm font-medium">{schedule.transitTime}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="shrink-0 bg-transparent">
                    Book This Route
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
