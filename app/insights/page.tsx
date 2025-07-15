import Image from "next/image"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Insights & Blog - TechCorp",
  description: "Latest insights, trends, and thought leadership in technology and digital transformation.",
}

const insights = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Banti M",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Microservices Architecture",
    excerpt: "Best practices for designing and implementing microservices that can handle enterprise-scale workloads.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Manideep Reddy Sripathi",
    date: "2024-01-10",
    category: "Architecture",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 3,
    title: "UX Design Trends That Will Shape 2024",
    excerpt: "From immersive experiences to accessibility-first design, discover the trends defining modern UX.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Emily Rodriguez",
    date: "2024-01-08",
    category: "Design",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Cloud Security Best Practices for Startups",
    excerpt: "Essential security measures every startup should implement when moving to the cloud.",
    image: "/placeholder.svg?height=300&width=500",
    author: "David Kim",
    date: "2024-01-05",
    category: "Security",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of Low-Code Development Platforms",
    excerpt: "How low-code platforms are democratizing software development and accelerating digital transformation.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Lisa Wang",
    date: "2024-01-03",
    category: "Development",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain Beyond Cryptocurrency",
    excerpt: "Real-world applications of blockchain technology in supply chain, healthcare, and finance.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Robert Brown",
    date: "2024-01-01",
    category: "Blockchain",
    readTime: "9 min read",
    featured: false,
  },
]

const categories = ["All", "AI & Machine Learning", "Architecture", "Design", "Security", "Development", "Blockchain"]

export default function InsightsPage() {
  const featuredPost = insights.find((post) => post.featured)
  const regularPosts = insights.filter((post) => !post.featured)

  return (
    <div className="pt-28 morphing-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest trends, insights, and best practices in technology and digital innovation
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-amber-600 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-amber-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-amber-700 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-800 font-medium">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 text-amber-600 ml-4" />
                      <span className="text-amber-700 text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-amber-700 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-amber-600">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>{post.readTime}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">Get the latest insights and trends delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
