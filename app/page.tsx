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

      {/* Omega Trifold Brochure — 3508×1365px, ratio 2.57:1 */}
      <section className="w-full overflow-hidden relative mb-12">
        {/* Mobile: fixed tall height zoomed center. Desktop: natural ratio */}
        <div className="w-full h-[280px] sm:h-[360px] md:h-auto">
          <img
            src="/omega-trifold.png"
            alt="Omega Clinic Trifold Brochure"
            className="w-full h-full md:h-auto object-cover md:object-contain object-center block"
            style={{ aspectRatio: "3508 / 1365" }}
          />
        </div>
        {/* Invisible clickable overlay on "REGISTER NOW >>" — bottom-right of image */}
        <a
          href="#book-appointment"
          aria-label="Register Now - Book Appointment"
          className="absolute cursor-pointer"
          style={{
            bottom: "8%",
            right: "2%",
            width: "16%",
            height: "18%",
            borderRadius: "4px",
          }}
        />
      </section>

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
