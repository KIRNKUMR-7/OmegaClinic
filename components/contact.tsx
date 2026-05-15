"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    appointmentDate: "",
    appointmentTime: ""
  })

  // Generate time slots based on selected day
  const generateTimeSlots = (selectedDate: string) => {
    const slots = [];
    if (!selectedDate) return [];

    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay(); // 0 is Sunday, 6 is Saturday

    // Clinic hours:
    // Monday-Saturday: 9:30 AM - 2:30 PM
    // Sunday: Closed

    // Return empty array for Sundays
    if (dayOfWeek === 0) return [];

    const startTime = 9.5; // 9:30 AM in decimal hours
    const endTime = 14.5; // 2:30 PM in 24-hour format (decimal)

    // Generate time slots in 30-minute intervals
    let currentTime = startTime;

    while (currentTime <= endTime) {
      const hours = Math.floor(currentTime);
      const minutes = (currentTime % 1) * 60;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

      // Format the time (e.g., "9:30 AM" or "2:00 PM")
      const timeString = `${displayHours}:${minutes === 0 ? '00' : '30'} ${ampm}`;
      slots.push(timeString);

      // Move to next 30-minute slot
      currentTime += 0.5;

      // Stop at 2:30 PM
      if (currentTime > 14.5) {
        break;
      }
    }

    return slots;
  };

  // Get time slots for the selected date (or empty array if no date selected)
  const timeSlots = generateTimeSlots(formData.appointmentDate);

  // Get dates for the next 14 days with proper day handling
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();

      // Skip Sundays (0 is Sunday)
      if (dayOfWeek === 0) continue;

      const isSaturday = dayOfWeek === 6;
      // Format date as 'Day, Month Date' (e.g., 'Mon, Nov 10')
      const dayLabel = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      }).replace(/,/g, ''); // Remove any commas

      // Add time range to the label
      const timeRange = '9:30 AM - 2:30 PM';

      // Format for the dropdown option
      const displayText = `${dayLabel} (${timeRange})`;

      dates.push({
        value: date.toISOString().split('T')[0],
        label: displayText,
        isWeekend: isSaturday
      });
    }

    return dates;
  }
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.appointmentDate || !formData.appointmentTime) {
      alert('Please select both date and time for your appointment');
      return;
    }
    setStatus("loading")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Appointment Booking - ${formData.name}`,
          message: `Appointment Details:\nDate: ${formData.appointmentDate}\nTime: ${formData.appointmentTime}\n\nMessage: ${formData.message}`
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          appointmentDate: "",
          appointmentTime: ""
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
    <>
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and start your rehabilitation journey with expert care.
          </p>
          <button
            onClick={() => document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition inline-block"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <section id="enquiry-form" className="bg-card py-16 md:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif-heading text-4xl md:text-5xl text-primary mb-4">
              Book Your <span className="text-accent">Appointment</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get in touch within 24 hours to confirm your booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+917200460004"
                className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">72004 60004</p>
                  <p className="text-sm text-muted-foreground">97918 44184</p>
                  <p className="text-sm text-accent mt-1">Mon–Sat: 9:30 AM – 2:30 PM</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919791844184"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition">
                  <MessageSquare className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">97918 44184</p>
                  <p className="text-sm text-accent mt-1">Quick messaging available</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:omegaclinicslm@gmail.com"
                className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">omegaclinicslm@gmail.com</p>
                  <p className="text-sm text-accent mt-1">Response within 24 hours</p>
                </div>
              </a>

              {/* Map */}
              <a
                href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwiglvLov6uUAxUAAAAAHQAAAAAQBg..i&rlz=1C1JJTC_enIN1145IN1145&sca_esv=067074848bac68ed&pvq=Cg0vZy8xMWo3ZHFxdGtkIhIKDG9tZWdhIGNsaW5pYxACGAM&lqi=CgxvbWVnYSBjbGluaWNIrMyty52wgIAIWhYQABABGAAYASIMb21lZ2EgY2xpbmljkgEIaG9zcGl0YWw&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3babf1a9bd64dc35:0xa85c75a93746509e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">View on Google Maps</p>
                  <p className="text-sm text-accent mt-1">Get directions</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="mb-4">
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-foreground mb-2">
                      Select Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="appointmentDate"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition pr-10 appearance-none"
                      >
                        <option value="">Choose a date...</option>
                        {getAvailableDates().map((date) => (
                          <option key={date.value} value={date.value}>
                            {date.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {formData.appointmentDate && (
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Available Time Slots
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.length > 0 ? (
                          timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setFormData({ ...formData, appointmentTime: time })}
                              className={`px-4 py-2.5 text-sm font-medium rounded-lg border transition-all ${formData.appointmentTime === time
                                  ? 'bg-accent text-white border-accent shadow-sm'
                                  : 'bg-background border-border hover:border-accent/50 hover:bg-accent/5'
                                }`}
                            >
                              {time}
                            </button>
                          ))
                        ) : (
                          <div className="col-span-3 text-center py-4 text-muted-foreground">
                            No available time slots for the selected date
                          </div>
                        )}
                      </div>
                      {formData.appointmentTime && (
                        <div className="mt-3 text-sm text-muted-foreground">
                          Selected: <span className="font-medium text-foreground">{formData.appointmentTime}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground placeholder:text-muted-foreground"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 bg-background text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell us about your concerns..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
              </button>

              {status === "success" && (
                <p className="text-center text-green-600 text-sm font-medium">✓ Thank you! We'll be in touch soon.</p>
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
    </>
  )
}
