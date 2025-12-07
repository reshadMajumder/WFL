import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { BookConsignmentDialog } from "@/components/book-consignment-dialog"

export function CTASection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Get started with a personalized quote or speak with our logistics experts today.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <BookConsignmentDialog>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Book Consignment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </BookConsignmentDialog>
            <Button size="lg" variant="outline">
              Talk to an Expert
            </Button>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-4 text-sm font-medium text-muted-foreground">Subscribe to our monthly insights</p>
            <form className="mx-auto flex max-w-md gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-card" />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
