"use client"

import Image from "next/image"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import type { Portfolio } from "@/lib/types"

interface PortfolioCardProps {
  portfolio: Portfolio
  onClick: () => void
}

export function PortfolioCard({ portfolio, onClick }: PortfolioCardProps) {
  return (
    <button
      onClick={onClick}
      className="group floating-card glass-effect rounded-3xl overflow-hidden w-full text-left transform transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
          <Image
            src={portfolio.image || "/placeholder.svg"}
            alt={portfolio.title}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Floating category badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {portfolio.category}
          </span>
        </div>

        {/* Sparkle effect */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-amber-900 group-hover:text-orange-600 transition-colors duration-300">
            {portfolio.title}
          </h3>
          <p className="text-amber-700 text-sm leading-relaxed line-clamp-2">{portfolio.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {portfolio.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {portfolio.tags.length > 3 && (
            <span className="text-amber-600 text-xs font-medium">+{portfolio.tags.length - 3} more</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-amber-600 font-semibold text-sm group-hover:text-orange-600 transition-colors">
            View Details →
          </span>

          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {portfolio.liveUrl && (
              <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center">
                <ExternalLink className="w-3 h-3 text-amber-700" />
              </div>
            )}
            {portfolio.githubUrl && (
              <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center">
                <Github className="w-3 h-3 text-amber-700" />
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
