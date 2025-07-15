"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MegaMenu } from "./mega-menu"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setServicesMenuOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setServicesMenuOpen(true)
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false)
    }, 150)
  }

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="glass-effect rounded-3xl shadow-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
                  <Image
                    src="/images/logo-jm-black.png"
                    alt="JM Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Trionex
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                            isActive(item.href)
                              ? "bg-gradient-to-r from-amber-200 to-orange-200 text-amber-800 shadow-md"
                              : "text-amber-700 hover:bg-amber-50 hover:text-amber-900"
                          }`}
                        >
                          {item.name}
                        </button>

                        {servicesMenuOpen && (
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-1">
                            <ChevronDown className="w-4 h-4 text-amber-600 animate-bounce" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-amber-200 to-orange-200 text-amber-800 shadow-md"
                            : "text-amber-700 hover:bg-amber-50 hover:text-amber-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-amber-200 pt-4 pb-6">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-amber-200 to-orange-200 text-amber-800"
                        : "text-amber-700 hover:bg-amber-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Services Mega Menu */}
        <div onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave} className="relative">
          <MegaMenu isOpen={servicesMenuOpen} onClose={() => setServicesMenuOpen(false)} />
        </div>
      </nav>
    </header>
  )
}
