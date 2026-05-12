"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Omni Being", href: "#omni-being" },
    { label: "Contact", href: "#get-in-touch" },
    { label: "Book Appointment", href: "#book-appointment" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="md:hidden text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center gap-1 sm:gap-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center p-1">
                <img
                  src="/omega-logo.png"
                  alt="Omega Clinic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-muted-foreground mx-1">🔗</span>
              <div className="flex w-20 h-10 sm:w-24 sm:h-12 items-center justify-center p-1">
                <img
                  src="/dwe.png"
                  alt="Omni Being Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition scroll-smooth flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              key={navLinks[navLinks.length - 1].href}
              href={navLinks[navLinks.length - 1].href}
              className="px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md text-center font-medium transition-colors flex items-center h-[40px]"
            >
              {navLinks[navLinks.length - 1].label}
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              key={navLinks[navLinks.length - 1].href}
              href={navLinks[navLinks.length - 1].href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md text-center font-medium transition-colors mt-4"
            >
              {navLinks[navLinks.length - 1].label}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
