"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, Search, HelpCircle, MessageSquare } from "lucide-react"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"

const services = [
  {
    title: "Ocean Freight",
    href: "/services/ocean-freight",
    description: "FCL/LCL, premium schedules, guaranteed space",
  },
  { title: "Air Freight", href: "/services/air-freight", description: "Time-definite options, charter solutions" },
  { title: "Road & Rail", href: "/services/road-rail", description: "Cross-border trucking and rail corridors" },
  {
    title: "E-commerce Logistics",
    href: "/services/ecommerce",
    description: "D2C fulfilment, marketplace integrations",
  },
  { title: "Cold Chain", href: "/services/cold-chain", description: "GDP-compliant storage, reefer monitoring" },
  {
    title: "Project Logistics",
    href: "/services/project-logistics",
    description: "Heavy-lift, OOG, breakbulk coordination",
  },
]

const solutions = [
  { title: "Warehousing", href: "/services/warehousing", description: "Ambient, temperature-controlled facilities" },
  { title: "Customs Services", href: "/services/customs", description: "Multi-country brokerage, duty optimisation" },
  { title: "Cargo Protection", href: "/services/cargo-protection", description: "All-risk coverage, expedited claims" },
]

const companyLinks = [
  { title: "About Us", href: "/about", description: "Our story, mission, and global presence" },
  { title: "Contact Us", href: "/contact", description: "Get in touch with our team" },
  { title: "Careers", href: "/careers", description: "Join our growing team" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
              <span className="text-lg font-bold leading-none tracking-tight text-white">WORLD FAMOUS</span>
              <span className="text-[10px] font-medium tracking-widest text-white/70">LOGISTICS</span>
            </div>
          </Link>

          {/* Top right utilities - updated with links */}
          <div className="hidden items-center gap-6 lg:flex">
            <button className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors">
              <Globe className="h-4 w-4" />
              EN
            </button>
            <Link
              href="/tracking"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
            >
              <Search className="h-4 w-4" />
              Track
            </Link>
            <Link
              href="/support"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
            >
              <HelpCircle className="h-4 w-4" />
              Support
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <Link
                  href="/prices"
                  className="flex h-14 items-center px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10"
                >
                  Prices
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-14 bg-transparent text-white/90 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-1 p-4 md:grid-cols-2 bg-card">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-semibold leading-none">{service.title}</div>
                            <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/schedules"
                  className="flex h-14 items-center px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10"
                >
                  Schedules
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/tracking"
                  className="flex h-14 items-center px-4 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10"
                >
                  Tracking
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-14 bg-transparent text-white/90 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4 bg-card">
                    {solutions.map((solution) => (
                      <li key={solution.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={solution.href}
                            className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-semibold leading-none">{solution.title}</div>
                            <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {solution.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-14 bg-transparent text-white/90 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4 bg-card">
                    {companyLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-semibold leading-none">{link.title}</div>
                            <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-3 lg:flex">
            <BookConsignmentDialog>
              <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                Book Now
              </Button>
            </BookConsignmentDialog>
          </div>

          {/* Mobile Navigation - updated with links */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 pt-8">
                <Link href="/prices" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Prices
                </Link>
                <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/schedules" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Schedules
                </Link>
                <Link href="/tracking" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Tracking
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <Link href="/support" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Support
                </Link>
                <div className="mt-4 flex flex-col gap-2">
                  <BookConsignmentDialog>
                    <Button className="w-full bg-accent text-accent-foreground">Book Now</Button>
                  </BookConsignmentDialog>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
