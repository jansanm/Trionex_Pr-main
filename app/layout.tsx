import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { ToastProvider } from "@/components/ui/toast"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechCorp - Building the Future of Technology",
  description:
    "We create innovative digital solutions that transform businesses and empower growth. From cutting-edge web applications to AI-powered platforms.",
  keywords: "web development, mobile apps, AI, machine learning, technology solutions",
  authors: [{ name: "TechCorp" }],
  openGraph: {
    title: "TechCorp - Building the Future of Technology",
    description: "We create innovative digital solutions that transform businesses and empower growth.",
    url: "https://techcorp.com",
    siteName: "TechCorp",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "TechCorp - Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCorp - Building the Future of Technology",
    description: "We create innovative digital solutions that transform businesses and empower growth.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ToastProvider>
            <div className="min-h-screen bg-gray-50 transition-colors">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
