"use client"

import { useState } from "react"

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          service: "",
          message: "",
        })
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <section id="book-appointment" className="bg-card py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Book Your <span className="text-accent">Appointment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get in touch within 24 hours to confirm your booking.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground"
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-foreground mb-2">Preferred Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground"
              />
            </div>

            {/* Type of Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">Type of Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground"
              >
                <option value="">Select a service</option>
                <option value="Direct Consultant">1. Direct Consultant (fee collected after appointment)</option>
                <option value="Online Consultant (Rs.199)">2. Online Consultant — Rs. 199 (fee collected after appointment)</option>
                <option value="Omni Being Online Class (Per Session Rs.499)">3. Omni Being Online Class — Rs. 499/session (fee collected after appointment)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your concerns..."
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {status === "loading" ? "Sending..." : "Send Enquiry"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-center text-green-600 text-sm font-medium">
                ✓ Thank you! We'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600 text-sm font-medium">
                ✗ Error sending message. Please try again or call directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
