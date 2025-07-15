"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, Heart, ShoppingCart, GraduationCap, Car, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "Digital transformation for healthcare providers and medical technology companies",
    image: "/a7.jpg",
    stats: { projects: "50+", clients: "25+", satisfaction: "98%" },
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "fintech",
    name: "Financial Services",
    icon: Building2,
    description: "Secure and scalable solutions for banks, fintech startups, and financial institutions",
    image: "/a8.jpg",
    stats: { projects: "75+", clients: "40+", satisfaction: "99%" },
    color: "from-green-400 to-green-600",
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingCart,
    description: "End-to-end e-commerce platforms and marketplace solutions",
    image: "/a9.jpg",
    stats: { projects: "100+", clients: "60+", satisfaction: "97%" },
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "EdTech solutions and learning management systems",
    image: "/a10.jpg",
    stats: { projects: "30+", clients: "20+", satisfaction: "96%" },
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    description: "Connected car solutions and automotive software development",
    image: "/a12.jpg",
    stats: { projects: "25+", clients: "15+", satisfaction: "95%" },
    color: "from-red-400 to-red-600",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: Plane,
    description: "Booking platforms and travel management solutions",
    image: "/a13.jpg",
    stats: { projects: "40+", clients: "30+", satisfaction: "98%" },
    color: "from-cyan-400 to-cyan-600",
  },
]

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Delivering specialized solutions across diverse industries with deep domain expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Industry Selector */}
          <div className="space-y-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeIndustry.id === industry.id
                    ? "bg-white shadow-xl border-2 border-amber-200"
                    : "bg-white/60 hover:bg-white/80 border border-amber-100"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center`}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{industry.name}</h3>
                    <p className="text-amber-700 text-sm">{industry.description}</p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      activeIndustry.id === industry.id ? "text-amber-600 translate-x-1" : "text-amber-400"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Industry Details */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-64">
              <Image
                src={activeIndustry.image || "/placeholder.svg"}
                alt={activeIndustry.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white mb-2">{activeIndustry.name}</h3>
                <p className="text-white/90">{activeIndustry.description}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{activeIndustry.stats.projects}</div>
                  <div className="text-amber-700 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{activeIndustry.stats.clients}</div>
                  <div className="text-amber-700 text-sm">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">{activeIndustry.stats.satisfaction}</div>
                  <div className="text-amber-700 text-sm">Satisfaction</div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                View {activeIndustry.name} Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
