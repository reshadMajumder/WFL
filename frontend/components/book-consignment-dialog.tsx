"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Package, MapPin, Truck } from "lucide-react"

interface BookConsignmentDialogProps {
  children: React.ReactNode
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BookConsignmentDialog({ children }: BookConsignmentDialogProps) {
  const [pickupDate, setPickupDate] = useState<Date>()
  const [step, setStep] = useState(1)

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Package className="h-5 w-5 text-accent" />
            Book Consignment
          </DialogTitle>
          <DialogDescription>Schedule your shipment pickup and delivery with World Famous Logistics.</DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          {[
            { num: 1, label: "Shipment Details" },
            { num: 2, label: "Pickup Info" },
            { num: 3, label: "Confirm" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center text-sm font-semibold ${
                  step >= s.num ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {s.num}
              </div>
              <span className={`text-sm ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>
                {s.label}
              </span>
              {i < 2 && <div className="ml-2 h-px w-8 bg-border" />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="shipmentType">Shipment Type</Label>
                <Select>
                  <SelectTrigger id="shipmentType">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fcl">Full Container Load (FCL)</SelectItem>
                    <SelectItem value="lcl">Less than Container Load (LCL)</SelectItem>
                    <SelectItem value="air">Air Freight</SelectItem>
                    <SelectItem value="road">Road Freight</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cargoType">Cargo Type</Label>
                <Select>
                  <SelectTrigger id="cargoType">
                    <SelectValue placeholder="Select cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Cargo</SelectItem>
                    <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                    <SelectItem value="perishable">Perishable Goods</SelectItem>
                    <SelectItem value="fragile">Fragile Items</SelectItem>
                    <SelectItem value="oversized">Oversized Cargo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume">Volume (CBM)</Label>
                <Input id="volume" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pieces">No. of Pieces</Label>
                <Input id="pieces" type="number" placeholder="0" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Cargo Description</Label>
              <Textarea id="description" placeholder="Describe your cargo..." className="min-h-[80px]" />
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={() => setStep(2)} className="bg-accent text-white hover:bg-accent/90">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Origin
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="originCountry">Country</Label>
                  <Select>
                    <SelectTrigger id="originCountry">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="uae">UAE</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originCity">City / Port</Label>
                  <Input id="originCity" placeholder="Enter city or port" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupAddress">Pickup Address</Label>
                <Textarea id="pickupAddress" placeholder="Complete pickup address..." className="min-h-[60px]" />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Truck className="h-4 w-4 text-accent" />
                Destination
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="destCountry">Country</Label>
                  <Select>
                    <SelectTrigger id="destCountry">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="uae">UAE</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destCity">City / Port</Label>
                  <Input id="destCity" placeholder="Enter city or port" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryAddress">Delivery Address</Label>
                <Textarea id="deliveryAddress" placeholder="Complete delivery address..." className="min-h-[60px]" />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Label>Preferred Pickup Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {pickupDate ? formatDate(pickupDate) : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => setStep(3)} className="bg-accent text-white hover:bg-accent/90">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Company name" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Label htmlFor="notes">Special Instructions (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any special handling requirements or notes..."
                className="min-h-[80px]"
              />
            </div>

            <div className="border border-border bg-muted/50 p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                By submitting this booking request, you agree to our Terms of Service and Privacy Policy. Our team will
                contact you within 24 hours to confirm your consignment details.
              </p>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button className="bg-accent text-white hover:bg-accent/90">Submit Booking Request</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
