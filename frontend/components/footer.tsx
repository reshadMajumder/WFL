import Link from "next/link"
import { Globe, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"

const footerLinks = {
  services: [
    { label: "Ocean Freight", href: "/services/ocean-freight" },
    { label: "Air Freight", href: "/services/air-freight" },
    { label: "Road & Rail", href: "/services/road-rail" },
    { label: "E-commerce Logistics", href: "/services/ecommerce" },
    { label: "Cold Chain", href: "/services/cold-chain" },
    { label: "Warehousing", href: "/services/warehousing" },
  ],
  solutions: [
    { label: "Customs Services", href: "/services/customs" },
    { label: "Cargo Protection", href: "/services/cargo-protection" },
    { label: "Project Logistics", href: "/services/project-logistics" },
  ],
  resources: [
    { label: "Book Consignment", href: "#" },
    { label: "Track Shipment", href: "/tracking" },
    { label: "Schedules", href: "/schedules" },
    { label: "Prices", href: "/prices" },
    { label: "Getting Started", href: "/getting-started" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "/support" },
    { label: "Careers", href: "/careers" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center bg-accent">
                <Globe className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none tracking-tight">WORLD FAMOUS</span>
                <span className="text-xs font-medium tracking-widest text-primary-foreground/70">LOGISTICS</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Integrated container logistics and supply chain partner providing end-to-end services worldwide.
            </p>
            <BookConsignmentDialog>
              <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">Book Now</Button>
            </BookConsignmentDialog>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-primary-foreground/70 transition-colors hover:text-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 transition-colors hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 transition-colors hover:text-accent">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-primary-foreground/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contact@wflogistics.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70">
            <Link href="#" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent">
              Cookie Settings
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} World Famous Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
