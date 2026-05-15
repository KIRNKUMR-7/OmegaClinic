 "use client"

import { Phone, Mail, MapPin } from "lucide-react"

// WhatsApp brand icon
const WhatsAppIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Reach out to us through any of these channels. We're here to help.
          </p>
        </div>

        {/* Contact options grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Phone */}
          <a
            href="tel:+917200460004"
            className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-primary-foreground/15 transition group"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
              <Phone className="text-accent" size={28} />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Phone</h3>
            <p className="text-primary-foreground/80 text-center mb-2" style={{ fontSize: '14px', lineHeight: '1.5', fontFamily: 'monospace', letterSpacing: '0.05em' }}>97918 44184</p>
            <p className="text-primary-foreground/80 text-center mb-2" style={{ fontSize: '14px', lineHeight: '1.5', fontFamily: 'monospace', letterSpacing: '0.05em' }}>72004 60004</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919791844184"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-primary-foreground/15 transition group"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
              <WhatsAppIcon size={28} className="text-accent" />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">WhatsApp</h3>
            <p className="text-primary-foreground/80 text-center text-sm mb-2">97918 44184</p>
            <p className="text-xs text-accent">Quick messaging</p>
          </a>

          {/* Email */}
          <a
            href="mailto:omegaclinicslm@gmail.com"
            className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-primary-foreground/15 transition group"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
              <Mail className="text-accent" size={28} />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Email</h3>
            <p className="text-primary-foreground/80 text-center text-sm mb-2">omegaclinicslm@gmail.com</p>
            <p className="text-xs text-accent">24h response</p>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwiglvLov6uUAxUAAAAAHQAAAAAQBg..i&rlz=1C1JJTC_enIN1145IN1145&sca_esv=067074848bac68ed&pvq=Cg0vZy8xMWo3ZHFxdGtkIhIKDG9tZWdhIGNsaW5pYxACGAM&lqi=CgxvbWVnYSBjbGluaWNIrMyty52wgIAIWhYQABABGAAYASIMb21lZ2EgY2xpbmljkgEIaG9zcGl0YWw&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3babf1a9bd64dc35:0xa85c75a93746509e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-primary-foreground/15 transition group"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
              <MapPin className="text-accent" size={28} />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Location</h3>
            <p className="text-primary-foreground/80 text-center text-sm mb-2">View on Maps</p>
            <p className="text-xs text-accent">Get directions</p>
          </a>
        </div>
      </div>
    </section>
  )
}
