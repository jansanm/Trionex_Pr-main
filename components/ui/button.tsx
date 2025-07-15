import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "warm" | "creme"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105"

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-400 to-orange-400 text-white hover:from-amber-500 hover:to-orange-500 shadow-lg hover:shadow-xl focus:ring-amber-500",
    secondary:
      "bg-gradient-to-r from-stone-400 to-stone-500 text-white hover:from-stone-500 hover:to-stone-600 shadow-lg hover:shadow-xl focus:ring-stone-500",
    outline: "border-2 border-amber-300 bg-transparent text-amber-700 hover:bg-amber-50 hover:border-amber-400",
    ghost: "bg-transparent text-amber-700 hover:bg-amber-50",
    warm: "bg-gradient-to-r from-orange-300 to-amber-300 text-amber-900 hover:from-orange-400 hover:to-amber-400 shadow-lg hover:shadow-xl",
    creme:
      "bg-gradient-to-r from-stone-200 to-amber-200 text-stone-800 hover:from-stone-300 hover:to-amber-300 shadow-lg hover:shadow-xl",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
