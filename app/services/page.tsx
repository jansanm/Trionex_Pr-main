import Image from "next/image"
import {
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  Lightbulb,
  Globe,
  Smartphone,
  Code,
  Palette,
  Cloud,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { teamData } from "@/lib/data"
import Link from "next/link"

export const metadata = {
  title: "Our Services & About Us - Quadrelix Forge",
  description:
    "Learn about Quadrelix Forge and explore our comprehensive range of technology services including web development, mobile apps, AI solutions, and more.",
}

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Globe,
    description: "Custom websites and web applications built with modern technologies and best practices.",
    price: "Starting at $5,000",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Implementation"],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    price: "Starting at $8,000",
    features: ["Native iOS/Android", "Cross-platform", "App Store Deployment", "Maintenance & Updates"],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    icon: Code,
    description: "Enterprise-grade software solutions with scalable architecture and clean code.",
    price: "Starting at $12,000",
    features: ["System Architecture", "Code Review", "Testing & QA", "Documentation"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
    price: "Starting at $4,000",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    id: "cloud-migration",
    title: "Cloud Services",
    icon: Cloud,
    description: "Cloud infrastructure automation, CI/CD pipelines, and scalable deployment solutions.",
    price: "Starting at $6,000",
    features: ["Cloud Migration", "DevOps Setup", "Monitoring", "Scaling Solutions"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Cpu,
    description: "Advanced data analysis, machine learning models, and predictive analytics solutions.",
    price: "Starting at $15,000",
    features: ["Data Analysis", "ML Models", "Predictive Analytics", "AI Integration"],
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses and startups",
    features: [
      "Responsive Website Design",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "3 Months Support",
      "Mobile Optimization",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$7,999",
    description: "Ideal for growing businesses",
    features: [
      "Custom Web Application",
      "Database Integration",
      "User Authentication",
      "Admin Dashboard",
      "6 Months Support",
      "Performance Optimization",
      "Third-party Integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Scalable Architecture",
      "Advanced Security",
      "Custom Integrations",
      "Dedicated Team",
      "12 Months Support",
      "Performance Monitoring",
      "Priority Support",
      "Training & Documentation",
    ],
    popular: false,
  },
]

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Quadrelix Forge was established with a vision to transform businesses through technology.",
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Successfully delivered our first enterprise-level project, setting the foundation for growth.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 15+ experts across development, design, and project management.",
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Launched our AI and machine learning division, offering cutting-edge solutions.",
  },
  {
    year: "2023",
    title: "100+ Projects",
    description: "Reached the milestone of 100 completed projects with 98% client satisfaction.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations internationally, serving clients across multiple continents.",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and close collaboration with our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality deliverables.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Our clients trust us to deliver on time and exceed expectations consistently.",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16 morphing-bg">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate technologists dedicated to building innovative solutions that drive business
            growth and create meaningful impact.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Quadrelix Forge, we believe technology should empower businesses to achieve their full potential. Our mission
                is to create innovative, scalable, and user-centric solutions that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We combine technical expertise with creative thinking to deliver solutions that not only meet current
                needs but also prepare our clients for future challenges and opportunities.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/a2.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                {service.price && (
                  <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">{service.price}</div>
                )}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From a small startup to a growing technology company, here's how we've evolved over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience and a passion for innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="text-center bg-white dark:bg-gray-900 rounded-3xl shadow-md overflow-hidden"
              >
                <div className="mx-auto flex items-center justify-center w-[220px] h-[220px] bg-white rounded-2xl mt-6 mb-4 border border-gray-200 shadow-sm overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={220}
                    height={220}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your project requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 ${plan.popular ? "ring-2 ring-blue-600 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
