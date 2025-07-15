"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  FolderOpen,
  MessageSquare,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Star,
  Sparkles,
  Zap,
  Target,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Modal } from "@/components/ui/modal"
import { useToast } from "@/components/ui/toast"
import { portfolioData, dashboardStats, mockMessages } from "@/lib/data"
import type { Portfolio } from "@/lib/types"
import Image from "next/image"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [portfolios, setPortfolios] = useState(portfolioData)
  const { showToast } = useToast()

  const [newPortfolio, setNewPortfolio] = useState({
    title: "",
    description: "",
    shortDescription: "",
    category: "",
    tags: "",
    liveUrl: "",
    githubUrl: "",
    technologies: "",
  })

  const handleAddPortfolio = () => {
    const portfolio: Portfolio = {
      id: Date.now().toString(),
      title: newPortfolio.title,
      description: newPortfolio.description,
      shortDescription: newPortfolio.shortDescription,
      image: "/placeholder.svg?height=400&width=600",
      category: newPortfolio.category,
      tags: newPortfolio.tags.split(",").map((tag) => tag.trim()),
      liveUrl: newPortfolio.liveUrl,
      githubUrl: newPortfolio.githubUrl,
      slug: newPortfolio.title.toLowerCase().replace(/\s+/g, "-"),
      technologies: newPortfolio.technologies.split(",").map((tech) => tech.trim()),
      featured: false,
      createdAt: new Date().toISOString(),
    }

    setPortfolios([...portfolios, portfolio])
    setIsAddModalOpen(false)
    setNewPortfolio({
      title: "",
      description: "",
      shortDescription: "",
      category: "",
      tags: "",
      liveUrl: "",
      githubUrl: "",
      technologies: "",
    })
    showToast("success", "Portfolio Added", "New portfolio item has been added successfully!")
  }

  const handleDeletePortfolio = (id: string) => {
    setPortfolios(portfolios.filter((p) => p.id !== id))
    showToast("success", "Portfolio Deleted", "Portfolio item has been removed.")
  }

  const StatCard = ({ icon: Icon, title, value, change, gradient, delay }: any) => (
    <div
      className={`glass-effect rounded-3xl p-8 floating-card group cursor-pointer transition-all duration-500`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <p className="text-amber-700 text-sm font-semibold uppercase tracking-wider">{title}</p>
          <p className="text-4xl font-bold text-amber-900">{value}</p>
          {change && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-emerald-100 rounded-full px-3 py-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700 text-xs font-bold">{change}</span>
              </div>
            </div>
          )}
        </div>
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${gradient} group-hover:scale-110 transition-transform duration-300 organic-shape`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen morphing-bg pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-8 h-8 text-amber-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Creative Dashboard
            </h1>
            <Sparkles className="w-8 h-8 text-amber-500" />
          </div>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Manage your creative portfolio and track your business growth with style
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="glass-effect rounded-3xl p-2 inline-flex shadow-2xl">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "portfolios", label: "Portfolios", icon: FolderOpen },
              { id: "messages", label: "Messages", icon: MessageSquare },
            ].map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-lg transform scale-105"
                    : "text-amber-700 hover:text-amber-900 hover:bg-amber-50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard
                icon={FolderOpen}
                title="Total Portfolios"
                value={dashboardStats.totalPortfolios}
                change="+12% this month"
                gradient="bg-gradient-to-br from-blue-400 to-blue-600"
                delay={0}
              />
              <StatCard
                icon={MessageSquare}
                title="Messages"
                value={dashboardStats.totalMessages}
                change="+5 new"
                gradient="bg-gradient-to-br from-emerald-400 to-emerald-600"
                delay={100}
              />
              <StatCard
                icon={Eye}
                title="Total Views"
                value={dashboardStats.totalViews.toLocaleString()}
                change="+23% this week"
                gradient="bg-gradient-to-br from-purple-400 to-purple-600"
                delay={200}
              />
              <StatCard
                icon={Users}
                title="Inquiries"
                value={dashboardStats.totalInquiries}
                change="+8 this week"
                gradient="bg-gradient-to-br from-orange-400 to-orange-600"
                delay={300}
              />
            </div>

            {/* Activity Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="glass-effect rounded-3xl p-8 shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">Recent Activity</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      action: "New portfolio added",
                      item: "E-Commerce Platform",
                      time: "2 hours ago",
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      action: "Message received",
                      item: "Project inquiry",
                      time: "4 hours ago",
                      color: "bg-green-100 text-green-600",
                    },
                    {
                      action: "Portfolio updated",
                      item: "AI Analytics Dashboard",
                      time: "1 day ago",
                      color: "bg-purple-100 text-purple-600",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${activity.color.split(" ")[0]}`}></div>
                        <div>
                          <p className="text-amber-900 font-semibold text-sm">{activity.action}</p>
                          <p className="text-amber-700 text-xs">{activity.item}</p>
                        </div>
                      </div>
                      <span className="text-amber-600 text-xs font-medium">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-3xl p-8 shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">Quick Actions</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Add Portfolio", icon: Plus, color: "from-blue-400 to-blue-600" },
                    { label: "View Analytics", icon: BarChart3, color: "from-green-400 to-green-600" },
                    { label: "Check Messages", icon: MessageSquare, color: "from-purple-400 to-purple-600" },
                    { label: "Export Data", icon: Award, color: "from-orange-400 to-orange-600" },
                  ].map((action, index) => (
                    <button
                      key={index}
                      className={`p-4 bg-gradient-to-br ${action.color} rounded-2xl text-white font-semibold text-sm hover:scale-105 transition-transform duration-300 flex flex-col items-center space-y-2`}
                    >
                      <action.icon className="w-6 h-6" />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Portfolios Tab */}
        {activeTab === "portfolios" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-amber-900">Manage Portfolios</h2>
              <Button onClick={() => setIsAddModalOpen(true)} variant="warm" size="lg" className="rounded-2xl">
                <Plus className="w-5 h-5 mr-2" />
                Add Portfolio
              </Button>
            </div>

            <div className="glass-effect rounded-3xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-amber-100 to-orange-100">
                    <tr>
                      <th className="px-8 py-4 text-left text-sm font-bold text-amber-800 uppercase tracking-wider">
                        Project
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-amber-800 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-amber-800 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-amber-800 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    {portfolios.map((portfolio, index) => (
                      <tr key={portfolio.id} className="hover:bg-amber-50 transition-colors">
                        <td className="px-8 py-6 whitespace-nowrap">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={portfolio.image || "/placeholder.svg"}
                              alt={portfolio.title}
                              width={50}
                              height={50}
                              className="rounded-2xl"
                            />
                            <div>
                              <div className="text-base font-bold text-amber-900">{portfolio.title}</div>
                              <div className="text-sm text-amber-700">{portfolio.shortDescription}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <span className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-amber-200 to-orange-200 text-amber-800 rounded-full">
                            {portfolio.category}
                          </span>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {portfolio.featured && <Star className="w-4 h-4 text-yellow-500" />}
                            <span className="text-sm font-semibold text-amber-900">
                              {portfolio.featured ? "Featured" : "Active"}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-3">
                            <Button variant="ghost" size="sm" className="rounded-xl">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeletePortfolio(portfolio.id)}
                              className="text-red-600 hover:text-red-700 rounded-xl"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-amber-900">Messages & Inquiries</h2>

            <div className="glass-effect rounded-3xl shadow-xl p-8">
              <div className="space-y-6">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-amber-900 text-lg">{message.name}</h4>
                        <p className="text-amber-700">{message.email}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-3 py-1 text-xs font-bold rounded-full ${
                            message.status === "new"
                              ? "bg-gradient-to-r from-green-400 to-emerald-400 text-white"
                              : "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700"
                          }`}
                        >
                          {message.status}
                        </span>
                        <span className="text-sm text-amber-600 font-medium">
                          {new Date(message.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-amber-800 leading-relaxed">{message.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Add Portfolio Modal */}
        <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Portfolio">
          <div className="space-y-4">
            <Input
              label="Title"
              value={newPortfolio.title}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, title: e.target.value })}
              placeholder="Project title"
            />
            <Input
              label="Category"
              value={newPortfolio.category}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, category: e.target.value })}
              placeholder="e.g., Web Development"
            />
            <Textarea
              label="Short Description"
              value={newPortfolio.shortDescription}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, shortDescription: e.target.value })}
              placeholder="Brief description for cards"
              rows={2}
            />
            <Textarea
              label="Full Description"
              value={newPortfolio.description}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, description: e.target.value })}
              placeholder="Detailed project description"
              rows={4}
            />
            <Input
              label="Tags (comma-separated)"
              value={newPortfolio.tags}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, tags: e.target.value })}
              placeholder="React, Node.js, MongoDB"
            />
            <Input
              label="Technologies (comma-separated)"
              value={newPortfolio.technologies}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, technologies: e.target.value })}
              placeholder="React, TypeScript, Tailwind CSS"
            />
            <Input
              label="Live URL (optional)"
              value={newPortfolio.liveUrl}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, liveUrl: e.target.value })}
              placeholder="https://example.com"
            />
            <Input
              label="GitHub URL (optional)"
              value={newPortfolio.githubUrl}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, githubUrl: e.target.value })}
              placeholder="https://github.com/username/repo"
            />

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)} className="flex-1 rounded-xl">
                Cancel
              </Button>
              <Button onClick={handleAddPortfolio} variant="warm" className="flex-1 rounded-xl">
                Add Portfolio
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
