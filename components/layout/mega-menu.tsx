"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ChevronRight,
  ArrowRight,
  Smartphone,
  Globe,
  Cloud,
  Cpu,
  Shield,
  Palette,
  Code,
  Database,
  Zap,
} from "lucide-react"

const servicesData = {
  Development: [
    {
      name: "Web Development",
      href: "/services#web-development",
      icon: Globe,
      description: "Custom websites and web applications",
    },
    {
      name: "Mobile App Development",
      href: "/services#mobile-development",
      icon: Smartphone,
      description: "iOS and Android mobile applications",
    },
    {
      name: "Software Engineering",
      href: "/services#software-engineering",
      icon: Code,
      description: "Enterprise software solutions",
    },
    {
      name: "API Development",
      href: "/services#api-development",
      icon: Database,
      description: "RESTful and GraphQL APIs",
    },
  ],
  "Design & UX": [
    {
      name: "UI/UX Design",
      href: "/services#ui-ux-design",
      icon: Palette,
      description: "User interface and experience design",
    },
    {
      name: "Product Design",
      href: "/services#product-design",
      icon: Palette,
      description: "End-to-end product design",
    },
    {
      name: "Brand Identity",
      href: "/services#brand-identity",
      icon: Palette,
      description: "Logo and brand design",
    },
    {
      name: "Design Systems",
      href: "/services#design-systems",
      icon: Palette,
      description: "Scalable design frameworks",
    },
  ],
  "Cloud & DevOps": [
    {
      name: "Cloud Migration",
      href: "/services#cloud-migration",
      icon: Cloud,
      description: "Move to cloud infrastructure",
    },
    {
      name: "DevOps Services",
      href: "/services#devops-services",
      icon: Cloud,
      description: "CI/CD and automation",
    },
    {
      name: "Infrastructure Management",
      href: "/services#infrastructure",
      icon: Cloud,
      description: "Scalable cloud infrastructure",
    },
    {
      name: "Security Solutions",
      href: "/services#security",
      icon: Shield,
      description: "Cybersecurity and compliance",
    },
  ],
  "Emerging Tech": [
    {
      name: "AI & Machine Learning",
      href: "/services#ai-ml",
      icon: Cpu,
      description: "Intelligent automation solutions",
    },
    {
      name: "Data Analytics",
      href: "/services#data-analytics",
      icon: Database,
      description: "Business intelligence and insights",
    },
    {
      name: "IoT Solutions",
      href: "/services#iot",
      icon: Zap,
      description: "Connected device ecosystems",
    },
    {
      name: "Blockchain Development",
      href: "/services#blockchain",
      icon: Shield,
      description: "Decentralized applications",
    },
  ],
}

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Development")
  const router = useRouter()

  const handleServiceClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    // Close the menu immediately
    onClose()

    if (href.includes("#")) {
      const [path, hash] = href.split("#")

      // If we're already on the services page, just scroll
      if (window.location.pathname === "/services") {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      } else {
        // Navigate to services page first, then scroll
        router.push(path)
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 300)
      }
    } else {
      router.push(href)
    }
  }

  const handleViewAllServices = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    onClose()
    router.push("/services")
  }

  if (!isOpen) return null

  return (
    <div className="absolute top-2 left-0 right-0 z-40">
      <div className="bg-white/95 backdrop-blur-lg border border-amber-200 rounded-3xl shadow-2xl mx-4">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-amber-900 mb-4">Service Categories</h3>
              {Object.keys(servicesData).map((category) => (
                <button
                  key={category}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 font-semibold"
                      : "text-amber-700 hover:bg-amber-50"
                  }`}
                >
                  <span>{category}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${activeCategory === category ? "rotate-90" : ""}`}
                  />
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-amber-900">{activeCategory}</h4>
                  <button
                    onClick={handleViewAllServices}
                    className="text-amber-600 hover:text-orange-600 text-sm font-medium flex items-center transition-colors"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicesData[activeCategory as keyof typeof servicesData].map((service, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleServiceClick(service.href, e)}
                      className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 hover:border-amber-200 text-left w-full"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-6 h-6 text-amber-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-amber-900 group-hover:text-orange-600 transition-colors text-sm">
                            {service.name}
                          </h5>
                          <p className="text-amber-700 text-xs mt-1 line-clamp-2">{service.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
