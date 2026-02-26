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
import { CalendarIcon, Package, MapPin, Truck, Loader2, CheckCircle2, XCircle } from "lucide-react"

interface BookConsignmentDialogProps {
  children: React.ReactNode
}

interface FormData {
  shipment_type: string
  Cargo_type: string
  weight: string
  volume: string
  no_of_pieces: string
  description: string
  origine_country: string
  city_or_port_origine: string
  pickup_address: string
  destination_country: string
  city_or_port_destination: string
  deluvery_address: string
  date: string
  name: string
  company_name: string
  email: string
  phone: string
  message: string
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatDateForAPI(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function BookConsignmentDialog({ children }: BookConsignmentDialogProps) {
  const [pickupDate, setPickupDate] = useState<Date>()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultMessage, setResultMessage] = useState({ type: "", title: "", message: "" })
  const [formData, setFormData] = useState<FormData>({
    shipment_type: "",
    Cargo_type: "",
    weight: "",
    volume: "",
    no_of_pieces: "",
    description: "",
    origine_country: "",
    city_or_port_origine: "",
    pickup_address: "",
    destination_country: "",
    city_or_port_destination: "",
    deluvery_address: "",
    date: "",
    name: "",
    company_name: "",
    email: "",
    phone: "",
    message: "",
  })

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const submitData = {
        ...formData,
        weight: parseFloat(formData.weight) || 0,
        volume: parseFloat(formData.volume) || 0,
        no_of_pieces: parseInt(formData.no_of_pieces) || 0,
        date: pickupDate ? formatDateForAPI(pickupDate) : formData.date,
      }

      const response = await fetch("http://127.0.0.1:8000/api/contact/book-consignment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })

      const result = await response.json()

      if (!response.ok) {
        // Extract error messages from backend response
        const errorMessages = Object.entries(result)
          .map(([field, errors]) => {
            if (Array.isArray(errors)) {
              return `${field}: ${errors.join(", ")}`
            }
            return `${field}: ${errors}`
          })
          .join("\n")
        
        console.error("Backend validation errors:", result)
        setResultMessage({
          type: "error",
          title: "Submission Failed",
          message: errorMessages || "Please check your form and try again.",
        })
        setShowResult(true)
        return
      }

      console.log("Booking submitted successfully:", result)
      setResultMessage({
        type: "success",
        title: "Booking Submitted Successfully!",
        message: "Our team will contact you within 24 hours to confirm your consignment details.",
      })
      setShowResult(true)
      
      // Reset form and close dialog
      setFormData({
        shipment_type: "",
        Cargo_type: "",
        weight: "",
        volume: "",
        no_of_pieces: "",
        description: "",
        origine_country: "",
        city_or_port_origine: "",
        pickup_address: "",
        destination_country: "",
        city_or_port_destination: "",
        deluvery_address: "",
        date: "",
        name: "",
        company_name: "",
        email: "",
        phone: "",
        message: "",
      })
      setPickupDate(undefined)
      setStep(1)
      setOpen(false)
    } catch (error) {
      console.error("Error submitting booking:", error)
      setResultMessage({
        type: "error",
        title: "Connection Error",
        message: "Failed to submit booking. Please check your network connection and try again.",
      })
      setShowResult(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto px-4 sm:px-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Package className="h-5 w-5 text-accent" />
            Book Consignment
          </DialogTitle>
          <DialogDescription className="text-sm">Schedule your shipment pickup and delivery with World Famous Logistics.</DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between border-b border-border pb-4 overflow-x-auto">
          {[
            { num: 1, label: "Shipment Details" },
            { num: 2, label: "Pickup Info" },
            { num: 3, label: "Confirm" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center gap-1 sm:gap-2 min-w-fit">
              <div
                className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center text-xs sm:text-sm font-semibold rounded-md ${
                  step >= s.num ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {s.num}
              </div>
              <span className={`text-xs sm:text-sm whitespace-nowrap ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>
                {s.label}
              </span>
              {i < 2 && <div className="ml-1 sm:ml-2 h-px w-4 sm:w-8 bg-border flex-shrink-0" />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="shipmentType" className="text-sm">Shipment Type</Label>
                <Select value={formData.shipment_type} onValueChange={(value) => updateFormData("shipment_type", value)}>
                  <SelectTrigger id="shipmentType">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full Container Load (FCL)">Full Container Load (FCL)</SelectItem>
                    <SelectItem value="Less than Container Load (LCL)">Less than Container Load (LCL)</SelectItem>
                    <SelectItem value="Air Freight">Air Freight</SelectItem>
                    <SelectItem value="Road Freight">Road Freight</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cargoType" className="text-sm">Cargo Type</Label>
                <Select value={formData.Cargo_type} onValueChange={(value) => updateFormData("Cargo_type", value)}>
                  <SelectTrigger id="cargoType">
                    <SelectValue placeholder="Select cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Cargo">General Cargo</SelectItem>
                    <SelectItem value="Hazardous Materials">Hazardous Materials</SelectItem>
                    <SelectItem value="Perishable Goods">Perishable Goods</SelectItem>
                    <SelectItem value="Fragile Items">Fragile Items</SelectItem>
                    <SelectItem value="Oversized Cargo">Oversized Cargo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-sm">Weight (kg)</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  placeholder="0" 
                  value={formData.weight}
                  onChange={(e) => updateFormData("weight", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume" className="text-sm">Volume (CBM)</Label>
                <Input 
                  id="volume" 
                  type="number" 
                  placeholder="0" 
                  value={formData.volume}
                  onChange={(e) => updateFormData("volume", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pieces" className="text-sm">No. of Pieces</Label>
                <Input 
                  id="pieces" 
                  type="number" 
                  placeholder="0" 
                  value={formData.no_of_pieces}
                  onChange={(e) => updateFormData("no_of_pieces", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm">Cargo Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your cargo..." 
                className="min-h-[80px]" 
                value={formData.description}
                onChange={(e) => updateFormData("description", e.target.value)}
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={() => setStep(2)} className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto">
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
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="originCountry" className="text-sm">Country</Label>
                  <Select value={formData.origine_country} onValueChange={(value) => updateFormData("origine_country", value)}>
                    <SelectTrigger id="originCountry">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="UAE">UAE</SelectItem>
                      <SelectItem value="China">China</SelectItem>
                      <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originCity" className="text-sm">City / Port</Label>
                  <Input 
                    id="originCity" 
                    placeholder="Enter city or port" 
                    value={formData.city_or_port_origine}
                    onChange={(e) => updateFormData("city_or_port_origine", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupAddress" className="text-sm">Pickup Address</Label>
                <Textarea 
                  id="pickupAddress" 
                  placeholder="Complete pickup address..." 
                  className="min-h-[60px]" 
                  value={formData.pickup_address}
                  onChange={(e) => updateFormData("pickup_address", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Truck className="h-4 w-4 text-accent" />
                Destination
              </div>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="destCountry" className="text-sm">Country</Label>
                  <Select value={formData.destination_country} onValueChange={(value) => updateFormData("destination_country", value)}>
                    <SelectTrigger id="destCountry">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="UAE">UAE</SelectItem>
                      <SelectItem value="China">China</SelectItem>
                      <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destCity" className="text-sm">City / Port</Label>
                  <Input 
                    id="destCity" 
                    placeholder="Enter city or port" 
                    value={formData.city_or_port_destination}
                    onChange={(e) => updateFormData("city_or_port_destination", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryAddress" className="text-sm">Delivery Address</Label>
                <Textarea 
                  id="deliveryAddress" 
                  placeholder="Complete delivery address..." 
                  className="min-h-[60px]" 
                  value={formData.deluvery_address}
                  onChange={(e) => updateFormData("deluvery_address", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Label className="text-sm">Preferred Pickup Date</Label>
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

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(1)} className="w-full sm:w-auto">
                Back
              </Button>
              <Button onClick={() => setStep(3)} className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base sm:text-lg">Contact Information</h3>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Company name" 
                    value={formData.company_name}
                    onChange={(e) => updateFormData("company_name", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@company.com" 
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 234 567 8900" 
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Label htmlFor="notes" className="text-sm">Special Instructions</Label>
              <Textarea
                id="notes"
                placeholder="Any special handling requirements or notes..."
                className="min-h-[80px]"
                value={formData.message}
                onChange={(e) => updateFormData("message", e.target.value)}
              />
            </div>

            <div className="border border-border bg-muted/50 p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                By submitting this booking request, you agree to our Terms of Service and Privacy Policy. Our team will
                contact you within 24 hours to confirm your consignment details.
              </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(2)} disabled={isSubmitting} className="w-full sm:w-auto">
                Back
              </Button>
              <Button 
                onClick={handleSubmit} 
                className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>

    {/* Result Dialog */}
    <Dialog open={showResult} onOpenChange={setShowResult}>
      <DialogContent className="max-w-[90vw] sm:max-w-md px-4 sm:px-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
            {resultMessage.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
            )}
            {resultMessage.title}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground whitespace-pre-line">{resultMessage.message}</p>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => setShowResult(false)} className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
