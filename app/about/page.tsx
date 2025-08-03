import Image from "next/image"
import { CheckCircle, Award, Users, Lightbulb } from "lucide-react"
import { teamData } from "@/lib/data"

export const metadata = {
  title: "About Us - Quadrelix Forge",
  description: "Learn about Quadrelix Forge's mission, values, and the expert team behind our innovative technology solutions.",
}

export default function AboutPage() {
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Quadrelix Forge</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate technologists dedicated to building innovative solutions that drive business
            growth and create meaningful impact.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
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
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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


    </div>
  )
}
