"use client"

import { useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"

import GetInTouch from "@/components/get-in-touch"
import BookAppointment from "@/components/book-appointment"
import GoogleMap from "@/components/google-map"
import Footer from "@/components/footer"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import StructuredData from "@/components/structured-data"

export default function Home() {
  const appointmentRef = useRef<HTMLDivElement>(null)

  const scrollToAppointment = () => {
    appointmentRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main>
      {/* Structured Data for SEO and AI Crawlers */}
      <StructuredData />

      <Navbar />
      <Hero onBookAppointment={scrollToAppointment} />
      <About />
      <Services />

      <GetInTouch />
      <div ref={appointmentRef}>
        <BookAppointment />
        <GoogleMap />
      </div>
      
      
      <WhatsAppFloatButton />
      <Footer />
    </main>
  )
}
