export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user"
}

export interface Portfolio {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  category: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  slug: string
  technologies: string[]
  featured: boolean
  createdAt: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  price?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
  status: "new" | "read" | "replied"
}

export interface DashboardStats {
  totalPortfolios: number
  totalMessages: number
  totalViews: number
  totalInquiries: number
}
