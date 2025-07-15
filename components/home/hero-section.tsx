"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, Target, Rocket, Code, Palette, Globe, Cpu, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(() => typeof window === "undefined" ? true : false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const techStack = [
    { icon: Code, label: "Development", color: "from-blue-400 to-blue-600", delay: "0ms" },
    { icon: Palette, label: "Design", color: "from-purple-400 to-purple-600", delay: "200ms" },
    { icon: Globe, label: "Web Solutions", color: "from-green-400 to-green-600", delay: "400ms" },
    { icon: Cpu, label: "AI & ML", color: "from-red-400 to-red-600", delay: "600ms" },
    { icon: Database, label: "Data Systems", color: "from-yellow-400 to-yellow-600", delay: "800ms" },
    { icon: Shield, label: "Security", color: "from-indigo-400 to-indigo-600", delay: "1000ms" },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Blobs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-br from-orange-200/40 to-amber-300/40 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            bottom: "20%",
            right: "15%",
          }}
        />

        {/* Interactive Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(${mousePosition.x * (0.01 + Math.random() * 0.02)}px, ${mousePosition.y * (0.01 + Math.random() * 0.02)}px)`,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-12 gap-8 min-h-screen items-center">
          {/* Left Side - Creative Typography */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Creative Typography Layout */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-6xl md:text-8xl font-black leading-none">
                  <div
                    className={`transform transition-all duration-1000 delay-200 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
                  >
                    <span className="block text-amber-900 relative">
                      INNOVATE
                      <div className="absolute -top-2 -right-8 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-12 opacity-20" />
                    </span>
                  </div>

                  <div
                    className={`transform transition-all duration-1000 delay-400 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
                  >
                    <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent relative ml-8">
                      WITH
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30" />
                    </span>
                  </div>

                  <div
                    className={`transform transition-all duration-1000 delay-600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  >
                    <span className="block text-amber-900 relative">
                      TRIONEX
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg -rotate-12 opacity-40" />
                    </span>
                  </div>
                </h1>

                {/* Decorative Elements */}
                <div className="absolute -top-8 left-1/2 w-2 h-16 bg-gradient-to-b from-amber-400 to-transparent rounded-full opacity-60" />
                <div className="absolute -bottom-4 right-1/4 w-24 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full" />
              </div>

              {/* Subtitle with Creative Layout */}
              <div
                className={`max-w-2xl transform transition-all duration-1000 delay-800 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <p className="text-xl md:text-2xl text-amber-800 leading-relaxed font-medium">
                  <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-lg mr-2">Transform</span>
                  your business with cutting-edge technology solutions that
                  <span className="bg-gradient-to-r from-amber-200 to-orange-200 px-3 py-1 rounded-lg mx-2">
                    drive growth
                  </span>
                  and innovation.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-2xl"
                >
                  <Target className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-amber-400 text-amber-700 hover:bg-amber-50 bg-white/80 backdrop-blur-sm shadow-lg"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className={`flex items-center space-x-8 pt-8 transform transition-all duration-1000 delay-1200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {[
                { number: "100+", label: "Projects" },
                { number: "50+", label: "Clients" },
                { number: "5★", label: "Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-amber-900">{stat.number}</div>
                  <div className="text-amber-700 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Tech Stack */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative h-96 lg:h-[600px]">
              {/* Central Element */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-500 ${isLoaded ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl relative">
                  <Rocket className="w-16 h-16 text-white" />
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl blur-xl" />
                </div>
              </div>

              {/* Interactive Tech Cards */}
              {techStack.map((tech, index) => {
                const angle = index * 60 * (Math.PI / 180)
                const radius = 140
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={index}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000`}
                    style={{
                      transform: `translate(${x + (mousePosition.x - 50) * 0.1}px, ${y + (mousePosition.y - 50) * 0.1}px)`,
                      transitionDelay: tech.delay,
                      opacity: isLoaded ? 1 : 0,
                    }}
                  >
                    <div className="group cursor-pointer">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110`}
                      >
                        <tech.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-bold text-amber-800 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                          {tech.label}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {techStack.map((_, index) => {
                  const angle = index * 60 * (Math.PI / 180)
                  const radius = 140
                  const x = Math.cos(angle) * radius + 200
                  const y = Math.sin(angle) * radius + 200

                  return (
                    <line
                      key={index}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 200}ms` }}
                    />
                  )
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-8 h-12 border-2 border-amber-400 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/50 to-transparent" />
          </div>
          <span className="text-amber-700 text-xs font-medium">Discover More</span>
        </div>
      </div>
    </section>
  )
}
