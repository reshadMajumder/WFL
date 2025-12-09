import { ServicePageLayout } from "@/components/service-page-layout"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Road Freight Services | World Famous Logistics",
  description:
    "Inland haulage and trucking services with door-to-door delivery. Heavy covered trucks, trailers, and containerized cargo transport.",
}

const roadFreightData = {
  title: "Road Freight",
  subtitle: "Inland Haulage & Trucking",
  heroImage: "/freight-truck-highway-sunset-logistics-professiona.jpg",
  description:
    "World Famous Logistics operates with high-quality truck carriers to ensure your shipments are picked up and delivered on time. We operate from all cities and inland points with special handling and rush service capabilities. Our inland transport division is equipped with trailers, power movers, and heavy covered trucks offering 24-hour service to meet your shipping deadlines. We specialize in carrying containerized cargo to any location.",
  services: [
    "Full Truck Load (FTL)",
    "Less than Truck Load (LTL)",
    "Container Haulage",
    "Door to Door Delivery",
    "Express & Rush Services",
    "Heavy Lift & Project Cargo",
    "Cross-Border Transportation",
    "Temperature-Controlled Transport",
    "Hazardous Materials (with permits)",
    "Last Mile Delivery",
    "Warehouse to Warehouse",
    "Factory Pickup Services",
  ],
  features: [
    {
      title: "24/7 Operations",
      description: "Round-the-clock service to meet urgent shipping deadlines and time-critical deliveries.",
    },
    {
      title: "Diverse Fleet",
      description: "Trailers, covered trucks, flatbeds, and specialized vehicles for all cargo types.",
    },
    {
      title: "GPS Tracking",
      description: "Real-time location tracking and ETA updates for complete shipment visibility.",
    },
    {
      title: "Nationwide Coverage",
      description: "Extensive network covering all major cities, ports, and industrial zones.",
    },
  ],
  advantages: [
    "Reliable carrier network",
    "24-hour delivery options",
    "Real-time GPS tracking",
    "Competitive per-km rates",
    "Experienced drivers",
    "Cargo insurance included",
  ],
  icon: "Truck",
}

export default function RoadFreightPage() {
  return (
    <>
      <Header />
      <ServicePageLayout {...roadFreightData} />
      <Footer />
    </>
  )
}
