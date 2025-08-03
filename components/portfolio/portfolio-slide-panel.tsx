"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ExternalLink, Github, Lock, Package, Gift, Clock, CheckCircle, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InquiryForm } from "@/components/portfolio/inquiry-form"
import type { Portfolio } from "@/lib/types"

interface PortfolioSlidePanelProps {
  portfolio: Portfolio | null
  isOpen: boolean
  onClose: () => void
  currentPage?: number
}

// Timer component for the first page
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime
        
        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              hours = 23
              if (days > 0) {
                days--
              } else {
                // Reset to 7 days when timer reaches 0
                days = 7
                hours = 0
                minutes = 0
                seconds = 0
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-3 mb-4">
      <div className="flex items-center justify-center space-x-1 mb-2">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-semibold">🔥 LIMITED TIME SALE - ENDS IN:</span>
      </div>
      <div className="flex justify-center space-x-2 text-center">
        <div className="bg-white/20 rounded-lg p-2 min-w-[50px]">
          <div className="text-lg font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="text-xs">Days</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 min-w-[50px]">
          <div className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs">Hours</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 min-w-[50px]">
          <div className="text-lg font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs">Mins</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 min-w-[50px]">
          <div className="text-lg font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs">Secs</div>
        </div>
      </div>
    </div>
  )
}

export function PortfolioSlidePanel({ portfolio, isOpen, onClose, currentPage = 1 }: PortfolioSlidePanelProps) {
  const [isCodeLockedOpen, setIsCodeLockedOpen] = useState(false)
  const [isBuyFormOpen, setIsBuyFormOpen] = useState(false)

  // Calculate pricing based on page
  const getPricing = () => {
    if (currentPage === 1) {
      return {
        currentPrice: 49,
        originalPrice: 129,
        discount: Math.round(((129 - 49) / 129) * 100)
      }
    } else {
      return {
        currentPrice: 39,
        originalPrice: 119,
        discount: Math.round(((119 - 39) / 119) * 100)
      }
    }
  }

  const pricing = getPricing()

  const packageIncludes = [
    { item: "Complete Source Code", icon: "📁" },
    { item: "Documentation", icon: "📚" },
    { item: "Setup Instructions", icon: "⚙️" },
    { item: "Lifetime Updates", icon: "🔄" },
    { item: "Email Support", icon: "📧" },
    { item: "Commercial License", icon: "📄" }
  ]

  const portfolioFeatures = [
    "Complete source code with documentation",
    "Responsive design for all devices",
    "Modern UI/UX components",
    "SEO optimized structure",
    "Easy customization guide",
    "Free updates for 6 months",
    "Email support included",
    "Commercial license included",
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!portfolio) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Portfolio Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Timer for all pages */}
            <CountdownTimer />

            {/* Portfolio Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={portfolio.image || "/placeholder.svg"}
                alt={portfolio.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Portfolio Info */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{portfolio.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Package className="w-4 h-4" />
                    <span>Complete Package</span>
                  </div>
                </div>
              </div>

              <p className="text-amber-800 leading-relaxed">{portfolio.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-green-800">${pricing.currentPrice}</div>
                  <div className="text-green-600 text-sm">One-time purchase</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600 line-through">${pricing.originalPrice}</div>
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">{pricing.discount}% OFF</div>
                </div>
              </div>
              <div className="text-green-700 text-sm">
                ✨ Limited time offer - Save ${pricing.originalPrice - pricing.currentPrice}!
                🔥 FLASH SALE - 7 DAYS ONLY!
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {portfolio.liveUrl && !isCodeLockedOpen && !isBuyFormOpen && (
                <a href={portfolio.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full h-12 flex items-center justify-center bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Preview
                  </Button>
                </a>
              )}
              {!isCodeLockedOpen && !isBuyFormOpen && portfolio.githubUrl && (
                <Button
                  variant="outline"
                  className="flex-1 w-full h-12 flex items-center justify-center bg-transparent"
                  onClick={() => setIsCodeLockedOpen(true)}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
              {/* Show code-locked panel only if code-locked is open and buy form is not open */}
              {isCodeLockedOpen && !isBuyFormOpen && (
                <div className="flex-1 w-full h-32 relative rounded-xl overflow-hidden flex items-center justify-center p-4">
                  {/* Background visual effect */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-md">
                    <Image
                      src="/a1.jpg"
                      alt="Locked background"
                      fill
                      className="object-cover object-center opacity-40 blur-sm select-none pointer-events-none"
                      style={{ zIndex: 0 }}
                    />
                  </div>
                  {/* Overlay content */}
                  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <Lock className="w-8 h-8 text-amber-600 mb-2 drop-shadow" />
                    <span className="text-amber-800 font-semibold text-base text-center drop-shadow mb-2">
                      Code is locked. Purchase the portfolio to unlock the project.
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="w-20" onClick={() => setIsCodeLockedOpen(false)}>
                        Back
                      </Button>
                      <Button size="sm" variant="primary" className="w-28" onClick={() => setIsBuyFormOpen(true)}>
                        Buy Portfolio
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {/* Show buy form only if buy form is open */}
              {isBuyFormOpen && (
                <div className="flex-1 w-full relative rounded-xl overflow-hidden flex flex-col items-center justify-center p-4 bg-white/90 border border-orange-200">
                  <div className="w-full flex justify-end mb-2">
                    <Button size="sm" variant="outline" onClick={() => { setIsBuyFormOpen(false); setIsCodeLockedOpen(true); }}>
                      Close
                    </Button>
                  </div>
                  <InquiryForm 
                    portfolioTitle={portfolio.title} 
                    showButton={false} 
                    onClose={() => { setIsBuyFormOpen(false); setIsCodeLockedOpen(true); }}
                  />
                </div>
              )}
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-amber-900 flex items-center">
                <Gift className="w-5 h-5 mr-2" />
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {packageIncludes.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 px-4 py-3 rounded-xl flex items-center space-x-3"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-amber-800 font-medium text-sm">{item.item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-amber-900 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Portfolio Features
              </h3>
              <div className="space-y-3">
                {portfolioFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-amber-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-amber-900">Ready to get started?</h4>
                  <p className="text-amber-800 text-sm">Download instantly after purchase</p>
                </div>
              </div>
              <InquiryForm portfolioTitle={portfolio.title} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

