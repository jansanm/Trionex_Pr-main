import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, ShoppingCart } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { InquiryForm } from "@/components/portfolio/inquiry-form"

interface PortfolioDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return portfolioData.map((portfolio) => ({
    slug: portfolio.slug,
  }))
}

export async function generateMetadata({ params }: PortfolioDetailPageProps) {
  const portfolio = portfolioData.find((p) => p.slug === params.slug)

  if (!portfolio) {
    return {
      title: "Portfolio Not Found - TechCorp",
    }
  }

  return {
    title: `${portfolio.title} - TechCorp Portfolio`,
    description: portfolio.shortDescription,
    openGraph: {
      title: portfolio.title,
      description: portfolio.shortDescription,
      images: [portfolio.image],
    },
  }
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const portfolio = portfolioData.find((p) => p.slug === params.slug)

  if (!portfolio) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      {/* Back Button */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/portfolio">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {portfolio.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(portfolio.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{portfolio.title}</h1>

                <p className="text-xl text-gray-600 leading-relaxed">{portfolio.shortDescription}</p>

                <div className="flex flex-wrap gap-3">
                  {portfolio.liveUrl && (
                    <a href={portfolio.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live Site
                      </Button>
                    </a>
                  )}

                  {portfolio.githubUrl && (
                    <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg">
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </Button>
                    </a>
                  )}
                </div>

                {/* Buy Button - Prominent */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Interested in this project?</h3>
                  <p className="mb-4 opacity-90">Get a similar solution for your business</p>
                  <InquiryForm portfolioTitle={portfolio.title} />
                </div>
              </div>

              <div className="relative">
                <Image
                  src={portfolio.image || "/placeholder.svg"}
                  alt={portfolio.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">{portfolio.description}</p>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {portfolio.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 px-4 py-3 rounded-lg text-gray-800 font-medium text-center hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">Category</dt>
                    <dd className="text-gray-900 font-semibold">{portfolio.category}</dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">Date</dt>
                    <dd className="text-gray-900 font-semibold">
                      {new Date(portfolio.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-2">Tags</dt>
                    <dd className="flex flex-wrap gap-2">
                      {portfolio.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <Tag className="w-3 h-3 inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h4 className="text-lg font-bold mb-2">Want Something Similar?</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Let's discuss how we can create a custom solution for your needs.
                  </p>
                  <InquiryForm portfolioTitle={portfolio.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData
                .filter((p) => p.id !== portfolio.id && p.category === portfolio.category)
                .slice(0, 3)
                .map((relatedPortfolio) => (
                  <Link key={relatedPortfolio.id} href={`/portfolio/${relatedPortfolio.slug}`}>
                    <div className="group bg-white/50 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <Image
                        src={relatedPortfolio.image || "/placeholder.svg"}
                        alt={relatedPortfolio.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {relatedPortfolio.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{relatedPortfolio.shortDescription}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
