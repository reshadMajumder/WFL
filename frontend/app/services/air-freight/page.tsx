import { ServicePageLayout } from "@/components/service-page-layout"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Air Freight Services | World Famous Logistics",
  description:
    "Express air cargo services for time-sensitive shipments with global airport coverage. Door-to-door delivery, consolidation, and chartering services.",
}

const airFreightData = {
  title: "Air Freight",
  subtitle: "Express Air Cargo Solutions",
  heroImage: "/cargo-airplane-airport-freight-loading-professiona.jpg",
  description:
    "World Famous Logistics is a leader in global air freight forwarding. With partnerships across major airlines and cargo carriers worldwide, we ensure your time-sensitive shipments reach their destination safely and on schedule. Our dedicated air freight team handles everything from documentation to customs clearance, providing end-to-end visibility throughout the journey.",
  services: [
    "Break Bulk Cargo",
    "Consolidation Services",
    "Door to Door Delivery",
    "GOH (Garments on Hanger) Handling",
    "Air-Sea Combination Shipments",
    "Transshipment Services",
    "Charter Services",
    "Express & Priority Shipping",
    "Temperature-Controlled Cargo",
    "Dangerous Goods Handling",
    "Perishable Goods Transport",
    "Project Cargo & Heavy Lift",
  ],
  features: [
    {
      title: "Global Network",
      description:
        "Access to all major airports worldwide with established carrier partnerships for competitive rates.",
    },
    {
      title: "Express Delivery",
      description: "Time-critical shipments with priority handling and expedited customs clearance.",
    },
    {
      title: "Real-Time Tracking",
      description: "Complete visibility of your cargo from pickup to final delivery with instant updates.",
    },
    {
      title: "Customs Expertise",
      description: "Licensed customs brokers ensuring smooth clearance and compliance with regulations.",
    },
  ],
  advantages: [
    "Competitive rates with major airlines",
    "24/7 customer support",
    "Real-time shipment tracking",
    "Expert customs clearance",
    "Flexible scheduling options",
    "Insurance coverage available",
  ],
  icon: "Plane",
}

export default function AirFreightPage() {
  return (
    <>
      <Header />
      <ServicePageLayout {...airFreightData} />
      <Footer />
    </>
  )
}
