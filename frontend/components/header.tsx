"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Globe,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  Plane,
  Ship,
  Truck,
  FileText,
  Package,
  Warehouse,
  Shield,
  Building,
  Phone,
  X,
  Home,
  Briefcase,
} from "lucide-react"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"

const services = [
  { title: "Air Freight", href: "/services/air-freight", icon: Plane, description: "Fast global air cargo solutions" },
  { title: "Sea Freight", href: "/services/sea-freight", icon: Ship, description: "FCL/LCL ocean shipping" },
  { title: "Road Freight", href: "/services/road-freight", icon: Truck, description: "Cross-border trucking" },
  { title: "Customs Services", href: "/services", icon: FileText, description: "Clearance & documentation" },
]

const solutions = [
  { title: "Warehousing", href: "/services", icon: Warehouse, description: "Storage & distribution" },
  { title: "Cargo Protection", href: "/services", icon: Shield, description: "Insurance & claims" },
  { title: "Project Logistics", href: "/services", icon: Package, description: "Heavy-lift & breakbulk" },
]

const companyLinks = [
  { title: "About Us", href: "/about", icon: Building, description: "Our story and mission" },
  { title: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch" },
  { title: "Careers", href: "/careers", icon: Briefcase, description: "Join our team" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto flex h-12 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-accent">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold leading-none tracking-tight text-white">
                WORLD FAMOUS
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-widest text-white/70">LOGISTICS</span>
            </div>
          </Link>

          {/* Top right utilities */}
          <div className="hidden items-center gap-4 md:gap-6 md:flex">
            <button className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors">
              <Globe className="h-4 w-4" />
              <span className="hidden lg:inline">EN</span>
            </button>
            <Link
              href="/support"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
            >
              <HelpCircle className="h-4 w-4" />
              <span className="hidden lg:inline">Support</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden lg:inline">Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] p-0 bg-background">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-bold text-lg">Menu</span>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-1">
                    <Link
                      href="/"
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Home className="h-4 w-4 text-accent" />
                      Home
                    </Link>

                    <Link
                      href="/prices"
                      className="flex items-center px-4 py-3 text-base font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Prices
                    </Link>

                    {/* Services dropdown */}
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-muted transition-colors"
                        onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
                      >
                        Services
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileSubmenu === "services" ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileSubmenu === "services" && (
                        <div className="pl-4 py-2 space-y-1 bg-muted/50">
                          {services.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <item.icon className="h-4 w-4 text-accent" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Solutions dropdown */}
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-muted transition-colors"
                        onClick={() => setMobileSubmenu(mobileSubmenu === "solutions" ? null : "solutions")}
                      >
                        Solutions
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileSubmenu === "solutions" ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileSubmenu === "solutions" && (
                        <div className="pl-4 py-2 space-y-1 bg-muted/50">
                          {solutions.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <item.icon className="h-4 w-4 text-accent" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/schedules"
                      className="flex items-center px-4 py-3 text-base font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Schedules
                    </Link>

                    {/* Company dropdown */}
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-muted transition-colors"
                        onClick={() => setMobileSubmenu(mobileSubmenu === "company" ? null : "company")}
                      >
                        Company
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileSubmenu === "company" ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileSubmenu === "company" && (
                        <div className="pl-4 py-2 space-y-1 bg-muted/50">
                          {companyLinks.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <item.icon className="h-4 w-4 text-accent" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/support"
                      className="flex items-center px-4 py-3 text-base font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Support
                    </Link>
                  </div>
                </nav>

                <div className="p-4 border-t">
                  <BookConsignmentDialog>
                    <Button className="w-full bg-accent text-white hover:bg-accent/90">Book Now</Button>
                  </BookConsignmentDialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main navigation - Desktop & Tablet */}
      <div className="hidden md:block border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <nav className="flex items-center">
            <Link
              href="/"
              className="flex h-14 items-center px-3 lg:px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10"
            >
              Home
            </Link>

            <Link
              href="/prices"
              className="flex h-14 items-center px-3 lg:px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10"
            >
              Prices
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex h-14 items-center gap-1 px-3 lg:px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-14 left-0 w-72 bg-card border border-border shadow-lg">
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-accent" />
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/schedules"
              className="flex h-14 items-center px-3 lg:px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10"
            >
              Schedules
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex h-14 items-center gap-1 px-3 lg:px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-14 left-0 w-72 bg-card border border-border shadow-lg">
                  {solutions.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-accent" />
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex h-14 items-center gap-1 px-3 lg:px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10">
                Company
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "company" && (
                <div className="absolute top-14 left-0 w-72 bg-card border border-border shadow-lg">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-accent" />
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <BookConsignmentDialog>
              <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                Book Now
              </Button>
            </BookConsignmentDialog>
          </div>
        </div>
      </div>
    </header>
  )
}
