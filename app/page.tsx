"use client"

import Link from "next/link"
import { ArrowRight, Zap, Shield, Users, Star, Award, Target, Sparkles } from "lucide-react"
import { HeroSection } from "@/components/home/hero-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { ProcessSection } from "@/components/home/process-section"
import { PortfolioCard } from "@/components/portfolio/portfolio-card"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const featuredPortfolios = portfolioData.filter((p) => p.featured).slice(0, 3)

  return (
    <div className="morphing-bg">
      <HeroSection />

      {/* Mission & Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-orange-100 to-amber-200 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="w-8 h-8 text-amber-500" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Why Choose Quadrelix Forge?
              </h2>
              <Star className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results that exceed
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "We deliver high-performance solutions optimized for speed and efficiency.",
                gradient: "from-blue-400 to-blue-600",
                delay: "0ms",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Security-first approach with robust architecture and best practices.",
                gradient: "from-emerald-400 to-emerald-600",
                delay: "200ms",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced professionals dedicated to your project's success.",
                gradient: "from-purple-400 to-purple-600",
                delay: "400ms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group floating-card glass-effect rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: feature.delay }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 organic-shape`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-amber-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-amber-500" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <Target className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Discover our most innovative work and see how we've helped businesses achieve extraordinary results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPortfolios.map((portfolio, index) => (
              <div key={portfolio.id} style={{ animationDelay: `${index * 200}ms` }} className="floating-card">
                <PortfolioCard portfolio={portfolio} onClick={() => {}} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" variant="warm" className="group">
                <Award className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 opacity-90"></div>
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <Sparkles className="w-10 h-10 text-white" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Start Your Project?</h2>
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to bring your vision to life with our expertise, innovation, and passion for excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 shadow-2xl group">
                  <Target className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent shadow-2xl group"
                >
                  <Award className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Explore Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
