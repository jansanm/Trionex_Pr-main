"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Search, Filter, Sparkles, Grid3X3, List } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { PortfolioCard } from "@/components/portfolio/portfolio-card"
import { PortfolioSlidePanel } from "@/components/portfolio/portfolio-slide-panel"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Portfolio } from "@/lib/types"

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const itemsPerPage = 15

  const categories = ["All", ...Array.from(new Set(portfolioData.map((p) => p.category)))]

  const filteredPortfolios = useMemo(() => {
    return portfolioData.filter((portfolio) => {
      const matchesSearch =
        portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || portfolio.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const totalPages = Math.ceil(filteredPortfolios.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPortfolios = filteredPortfolios.slice(startIndex, startIndex + itemsPerPage)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handlePortfolioClick = (portfolio: Portfolio) => {
    setSelectedPortfolio(portfolio)
    setIsPanelOpen(true)
  }

  const handleClosePanel = () => {
    setIsPanelOpen(false)
    setTimeout(() => setSelectedPortfolio(null), 500)
  }

  return (
    <div className="min-h-screen morphing-bg pt-28">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Portfolio
              </h1>
              <Sparkles className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of innovative projects that showcase creativity, technology, and exceptional
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-3xl p-6 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-12 rounded-2xl border-amber-200 focus:border-amber-400 bg-white/70"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "warm" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className="rounded-xl"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-amber-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid" ? "bg-white shadow-md text-amber-600" : "text-amber-500"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list" ? "bg-white shadow-md text-amber-600" : "text-amber-500"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-amber-700 text-sm">
              Showing {filteredPortfolios.length} of {portfolioData.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedPortfolios.length > 0 ? (
            <>
              <div className="grid gap-8 mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPortfolios.map((portfolio) => (
                  <PortfolioCard
                    key={portfolio.id}
                    portfolio={portfolio}
                    onClick={() => handlePortfolioClick(portfolio)}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="rounded-xl"
                  >
                    Previous
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "warm" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className="w-12 h-12 rounded-xl"
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="rounded-xl"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="glass-effect rounded-3xl p-12 max-w-md mx-auto">
                <Filter className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">No projects found</h3>
                <p className="text-amber-700">Try adjusting your search terms or filters.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Slide Panel */}
      <PortfolioSlidePanel portfolio={selectedPortfolio} isOpen={isPanelOpen} onClose={handleClosePanel} />
    </div>
  )
}
