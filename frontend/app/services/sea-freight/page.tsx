import { ServicePageLayout } from "@/components/service-page-layout"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Sea Freight Services | World Famous Logistics",
  description:
    "Full container load (FCL) and less than container load (LCL) ocean shipping services with competitive rates on major trade lanes.",
}

const seaFreightData = {
  title: "Sea Freight",
  subtitle: "Ocean Freight Solutions",
  heroImage: "/container-ship-ocean-port-cargo-professional-logis.jpg",
  description:
    "Whether you need to ship a less than container load (LCL) or a full container load (FCL) or project cargo, World Famous Logistics is ready to ship on time and deliver on schedule. Our sea freight division is well equipped with experienced staff having vast expertise in liner services and NVOCC operations. We offer comprehensive ocean freight solutions connecting major ports across Asia, Europe, Americas, and beyond.",
  services: [
    "Full Container Load (FCL)",
    "Less than Container Load (LCL)",
    "NVOCC Services",
    "Import Break Bulk",
    "Door to Door Service",
    "Transshipment & Distribution",
    "Inland Forwarding & Transportation",
    "Project Logistics",
    "Charter Services",
    "Multi-Modal Transportation",
    "Reefer Container Services",
    "Out of Gauge (OOG) Cargo",
  ],
  features: [
    {
      title: "Global Port Coverage",
      description: "Direct connections to major ports worldwide with reliable sailing schedules.",
    },
    {
      title: "Flexible Container Options",
      description: "20ft, 40ft, 40ft HC, reefer, and specialized containers for all cargo types.",
    },
    {
      title: "Competitive Rates",
      description: "Volume contracts with leading shipping lines ensuring best-in-market pricing.",
    },
    {
      title: "End-to-End Service",
      description: "From factory pickup to final delivery, we handle every step of the journey.",
    },
  ],
  advantages: [
    "Partnerships with major shipping lines",
    "FCL & LCL consolidation services",
    "Real-time vessel tracking",
    "Customs clearance support",
    "Competitive freight rates",
    "Dedicated account management",
  ],
  icon: "Ship",
}

export default function SeaFreightPage() {
  return (
    <>
      <Header />
      <ServicePageLayout {...seaFreightData} />
      <Footer />
    </>
  )
}
