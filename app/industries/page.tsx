import { Building2, Heart, ShoppingCart, GraduationCap, Car, Plane } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Industries We Serve - TechCorp",
  description:
    "Specialized technology solutions across healthcare, fintech, e-commerce, education, automotive, and travel industries.",
}

const industries = [
  {
    name: "Healthcare",
    icon: Heart,
    description: "Digital transformation for healthcare providers and medical technology companies",
    image: "/a7.jpg",
    solutions: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Medical Device Integration",
      "HIPAA Compliance",
    ],
    caseStudy: "Reduced patient wait times by 40% with our digital appointment system",
  },
  {
    name: "Financial Services",
    icon: Building2,
    description: "Secure and scalable solutions for banks, fintech startups, and financial institutions",
    image: "/a8.jpg",
    solutions: ["Digital Banking", "Payment Processing", "Risk Management", "Regulatory Compliance"],
    caseStudy: "Processed $1B+ in transactions with 99.99% uptime",
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    description: "End-to-end e-commerce platforms and marketplace solutions",
    image: "/a9.jpg",
    solutions: ["Online Marketplaces", "Inventory Management", "Payment Integration", "Analytics Dashboard"],
    caseStudy: "Increased conversion rates by 65% with optimized checkout flow",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "EdTech solutions and learning management systems",
    image: "/a10.jpg",
    solutions: ["Learning Management Systems", "Virtual Classrooms", "Student Portals", "Assessment Tools"],
    caseStudy: "Enabled remote learning for 50,000+ students during pandemic",
  },
  {
    name: "Automotive",
    icon: Car,
    description: "Connected car solutions and automotive software development",
    image: "/a12.jpg",
    solutions: ["Connected Car Platforms", "Fleet Management", "Predictive Maintenance", "IoT Integration"],
    caseStudy: "Reduced maintenance costs by 30% with predictive analytics",
  },
  {
    name: "Travel & Hospitality",
    icon: Plane,
    description: "Booking platforms and travel management solutions",
    image: "/a13.jpg",
    solutions: ["Booking Systems", "Property Management", "Customer Experience", "Revenue Optimization"],
    caseStudy: "Increased bookings by 45% with personalized recommendations",
  },
]

export default function IndustriesPage() {
  return (
    <div className="pt-28 morphing-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Delivering specialized technology solutions across diverse industries with deep domain expertise
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="glass-effect rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-64">
                  <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                      <p className="text-white/90">{industry.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-amber-900 mb-4">Our Solutions:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {industry.solutions.map((solution, idx) => (
                        <div key={idx} className="bg-amber-50 text-amber-800 px-3 py-2 rounded-lg text-sm font-medium">
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-6">
                    <h5 className="font-bold text-green-800 mb-2">Success Story</h5>
                    <p className="text-green-700 text-sm">{industry.caseStudy}</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                    Learn More About {industry.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
