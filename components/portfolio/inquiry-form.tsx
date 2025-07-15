"use client"

import type React from "react"
import { useState } from "react"
import { ShoppingCart, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Modal } from "@/components/ui/modal"
import { useToast } from "@/components/ui/toast"

interface InquiryFormProps {
  portfolioTitle: string
  showButton?: boolean
  onClose?: () => void
}

export function InquiryForm({ portfolioTitle, showButton = true, onClose }: InquiryFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      showToast("success", "Inquiry Sent!", "We'll contact you within 24 hours.")
      if (!showButton && onClose) {
        onClose()
      } else {
        setIsModalOpen(false)
      }
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      showToast("error", "Error", "Failed to send inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {showButton && (
        <Button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-white text-green-600 hover:bg-gray-50 font-semibold shadow-lg"
          size="lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Buy Portfolio
        </Button>
      )}
      {(showButton ? isModalOpen : true) && (
        <Modal isOpen={showButton ? isModalOpen : true} onClose={showButton ? () => setIsModalOpen(false) : (onClose || (() => {}))} title={`Buy Portfolio: ${portfolioTitle}`}>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Ready to purchase this portfolio?</h4>
            <p className="text-gray-600 text-sm">Fill out the form below and we'll contact you within 24 hours.</p>
            <div className="mt-3 text-xs text-gray-500">Contact: smjh5096@gmail.com | +1 (909) 090-9090</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Your Name" name="name" value={formData.name} onChange={handleInputChange} required />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <Textarea
              label="Project Requirements"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project requirements, timeline, and budget..."
              rows={4}
              required
            />

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={showButton ? () => setIsModalOpen(false) : (onClose || (() => {}))} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-blue-600 hover:bg-blue-700">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  )
}
