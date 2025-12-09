"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  GraduationCap,
  Coffee,
  CheckCircle,
  ChevronDown,
  Send,
} from "lucide-react"

const benefits = [
  { icon: TrendingUp, title: "Career Growth", description: "Clear paths for advancement and professional development" },
  {
    icon: GraduationCap,
    title: "Learning & Training",
    description: "Regular training programs and skill development workshops",
  },
  { icon: Heart, title: "Health Benefits", description: "Comprehensive health insurance for you and your family" },
  { icon: Users, title: "Great Team", description: "Work with passionate professionals in a supportive environment" },
  { icon: Coffee, title: "Work-Life Balance", description: "Flexible working arrangements and paid time off" },
  {
    icon: Briefcase,
    title: "Competitive Salary",
    description: "Market-competitive compensation with performance bonuses",
  },
]

const openPositions = [
  {
    id: 1,
    title: "Operations Executive",
    department: "Operations",
    location: "Dhaka",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Manage day-to-day freight operations including booking coordination, documentation, and customer communication.",
    requirements: [
      "Bachelor's degree in Business, Logistics, or related field",
      "2-4 years experience in freight forwarding or logistics",
      "Strong knowledge of import/export procedures",
      "Excellent communication skills in English and Bengali",
      "Proficiency in MS Office and logistics software",
    ],
  },
  {
    id: 2,
    title: "Customs Documentation Officer",
    department: "Customs",
    location: "Chittagong",
    type: "Full-time",
    experience: "1-3 years",
    description: "Handle customs clearance documentation and ensure compliance with import/export regulations.",
    requirements: [
      "Diploma or degree in relevant field",
      "1-3 years experience in customs clearance",
      "Knowledge of HS codes and customs procedures",
      "Familiarity with Bangladesh Customs regulations",
      "Attention to detail and accuracy",
    ],
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Sales",
    location: "Dhaka",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive business growth by acquiring new clients and maintaining relationships with key accounts.",
    requirements: [
      "Bachelor's degree in Business or Marketing",
      "5+ years experience in B2B sales, preferably in logistics",
      "Proven track record of meeting sales targets",
      "Strong networking and negotiation skills",
      "Valid driving license",
    ],
  },
  {
    id: 4,
    title: "Customer Service Representative",
    department: "Customer Service",
    location: "Dhaka",
    type: "Full-time",
    experience: "1-2 years",
    description: "Provide excellent customer support, handle inquiries, and assist with booking and tracking.",
    requirements: [
      "Bachelor's degree preferred",
      "1-2 years customer service experience",
      "Excellent verbal and written communication",
      "Problem-solving abilities",
      "Basic computer skills",
    ],
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedJob, setSelectedJob] = useState("")
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle)
    setShowApplicationForm(true)
    setApplicationSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setApplicationSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Careers at WFL"
          description="Join our team and build a rewarding career in global logistics."
          breadcrumbs={[{ label: "Careers", href: "/careers" }]}
        />

        {/* Intro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold">Why Work With Us?</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  At World Famous Logistics, we believe our people are our greatest asset. We're always looking for
                  talented individuals who are passionate about logistics and customer service to join our growing team.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Whether you're an experienced professional or just starting your career, we offer opportunities to
                  learn, grow, and make a real impact in the world of international trade and shipping.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-accent">
                    <Users className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">200+</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-secondary overflow-hidden">
                <img src="/diverse-office-team-meeting-professional-logistics.jpg" alt="WFL Team" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center">Benefits & Perks</h2>
            <p className="mt-2 text-center text-muted-foreground">
              We take care of our team so they can take care of our customers
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 border border-border bg-card p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-foreground">
                    <benefit.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center">Open Positions</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Explore current opportunities and find your perfect role
            </p>
            <div className="mt-10 space-y-4 max-w-4xl mx-auto">
              {openPositions.map((job) => (
                <div key={job.id} className="border border-border bg-card">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedJob === job.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-border pt-4">
                      <p className="text-muted-foreground">{job.description}</p>
                      <div className="mt-4">
                        <p className="font-medium mb-2">Experience Required: {job.experience}</p>
                        <p className="font-medium mb-2">Requirements:</p>
                        <ul className="space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        className="mt-6 bg-accent text-white hover:bg-accent/90"
                        onClick={() => handleApply(job.title)}
                      >
                        Apply for this Position
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Modal/Section */}
        {showApplicationForm && (
          <section className="py-16 bg-primary">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto bg-card p-8 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Apply for {selectedJob}</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowApplicationForm(false)}>
                    Close
                  </Button>
                </div>

                {applicationSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center border-2 border-accent">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Application Submitted!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for your interest in joining WFL. Our HR team will review your application and contact
                      you if your qualifications match our requirements.
                    </p>
                    <Button
                      className="mt-6 bg-transparent"
                      variant="outline"
                      onClick={() => setShowApplicationForm(false)}
                    >
                      Browse More Positions
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Full Name *</label>
                        <Input required placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Email *</label>
                        <Input required type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Phone *</label>
                        <Input required placeholder="+880 1XXX XXXXXX" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Years of Experience *</label>
                        <Input required placeholder="e.g., 3 years" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Current/Previous Company</label>
                      <Input placeholder="Company name" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">LinkedIn Profile (Optional)</label>
                      <Input placeholder="https://linkedin.com/in/yourprofile" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Cover Letter *</label>
                      <Textarea
                        required
                        rows={5}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Resume/CV *</label>
                      <Input type="file" accept=".pdf,.doc,.docx" required />
                      <p className="mt-1 text-xs text-muted-foreground">PDF, DOC, or DOCX (Max 5MB)</p>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent text-white hover:bg-accent/90">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Application
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}

        {/* General Application CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold">Don't See a Perfect Match?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in
              mind for future opportunities.
            </p>
            <Button
              className="mt-6 bg-accent text-white hover:bg-accent/90"
              onClick={() => handleApply("General Application")}
            >
              Submit General Application
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
