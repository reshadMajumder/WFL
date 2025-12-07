import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: { label: string; href: string }[]
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-32 pb-16">
      <div className="container mx-auto px-4">
        {breadcrumbs && (
          <nav className="mb-4 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary-foreground">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-accent transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">{description}</p>}
      </div>
    </section>
  )
}
