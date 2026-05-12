import Link from "next/link"
import { Phone, Mail, MessageSquare, MapPin, Youtube } from "lucide-react"

// Custom Facebook Icon
const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

// Custom Instagram Icon
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-1">
                <img
                  src="/omega-logo.png"
                  alt="Omega Clinic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif-heading text-base sm:text-lg font-semibold">Omega Clinic</div>
                <p className="text-xs text-primary-foreground/70"></p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-2">Wholistic Healing in Body, Mind & Soul</p>
            <p className="text-xs text-primary-foreground/60">Elevate your consciousness to Higher Dimension.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent transition inline-block py-1">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition inline-block py-1">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-accent transition inline-block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Homoeopathy</li>
              <li>Alternative Medicine</li>
              <li>Holistic Care</li>
              <li>Wellness Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Connect</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:9791844184" className="flex items-center gap-2 hover:text-accent transition justify-center sm:justify-start py-1">
                <Phone size={16} /> 97918 44184
              </a>
              <a href="https://wa.me/919791844184" className="flex items-center gap-2 hover:text-accent transition justify-center sm:justify-start py-1">
                <MessageSquare size={16} /> WhatsApp
              </a>
              <a href="mailto:omegaclinicslm@gmail.com" className="flex items-center gap-2 hover:text-accent transition justify-center sm:justify-start py-1 break-all">
                <Mail size={16} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm">omegaclinicslm@gmail.com</span>
              </a>
               <a
                href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwiglvLov6uUAxUAAAAAHQAAAAAQBg..i&rlz=1C1JJTC_enIN1145IN1145&sca_esv=067074848bac68ed&pvq=Cg0vZy8xMWo3ZHFxdGtkIhIKDG9tZWdhIGNsaW5pYxACGAM&lqi=CgxvbWVnYSBjbGluaWNIrMyty52wgIAIWhYQABABGAAYASIMb21lZ2EgY2xpbmljkgEIaG9zcGl0YWw&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3babf1a9bd64dc35:0xa85c75a93746509e"
                className="flex items-center gap-2 hover:text-accent transition justify-center sm:justify-start py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} /> Location
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-3">Follow Us</h4>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a
                  href="https://www.facebook.com/share/1ECG9xeJP4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/omegaomnibeing?igsh=MTg5eXZidXJ0MDN4ZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@omnibeingom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-[#FF0000] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8">
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center text-xs sm:text-sm text-primary-foreground/70 text-center">
            <p>&copy; 2025 Omega Clinic. All rights reserved.</p>
            <p>Providing Excellence in Alternative Medicine</p>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-6 md:mt-8 text-center text-xs sm:text-sm text-primary-foreground/70">
          <p>Mon–Sat: 9:30 AM – 2:30 PM | Sunday: Closed</p>
        </div>
      </div>
    </footer>
  )
}
