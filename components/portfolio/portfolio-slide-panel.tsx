import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Package,
  ShoppingCart,
  Sparkles,
  CheckCircle,
  Star,
  Gift,
  Lock,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { InquiryForm } from "./inquiry-form"
import type { Portfolio } from "@/lib/types"
import { useState } from "react"

interface PortfolioSlidePanelProps {
  portfolio: Portfolio | null
  isOpen: boolean
  onClose: () => void
}

export function PortfolioSlidePanel({ portfolio, isOpen, onClose }: PortfolioSlidePanelProps) {
  if (!portfolio) return null

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

  const packageIncludes = [
    { item: "HTML/CSS/JS Files", icon: "📁" },
    { item: "Design Assets (PSD/Figma)", icon: "🎨" },
    { item: "Documentation", icon: "📚" },
    { item: "Setup Instructions", icon: "⚙️" },
    { item: "Font Files", icon: "🔤" },
    { item: "Image Assets", icon: "🖼️" },
  ]

  const [isCodeLockedOpen, setIsCodeLockedOpen] = useState(false)
  const [isBuyFormOpen, setIsBuyFormOpen] = useState(false)

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide Panel */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-1/2 z-50 slide-panel ${isOpen ? "open" : ""}`}>
        <div className="h-full warm-glass border-l border-amber-200 shadow-2xl overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 warm-glass border-b border-amber-200 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <h2 className="text-xl font-bold text-amber-900">Portfolio Details</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={portfolio.image || "/placeholder.svg"}
                alt={portfolio.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {portfolio.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-gray-800">4.9</span>
                </div>
              </div>
            </div>

            {/* Title and Meta */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-amber-900">{portfolio.title}</h1>

              <div className="flex items-center space-x-4 text-sm text-amber-700">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(portfolio.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Package className="w-4 h-4" />
                  <span>Complete Package</span>
                </div>
              </div>

              <p className="text-amber-800 leading-relaxed">{portfolio.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-green-800">$299</div>
                  <div className="text-green-600 text-sm">One-time purchase</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600 line-through">$499</div>
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">40% OFF</div>
                </div>
              </div>
              <div className="text-green-700 text-sm">✨ Limited time offer - Save $200!</div>
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

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-blue-900">30-Day Money Back Guarantee</div>
                  <div className="text-blue-700 text-sm">Not satisfied? Get a full refund, no questions asked.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
