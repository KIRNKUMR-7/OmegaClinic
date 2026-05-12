 "use client"

import { Phone, Mail, MessageSquare, MapPin } from "lucide-react"

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
            href="tel:9791844184"
            className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-primary-foreground/15 transition group"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
              <Phone className="text-accent" size={28} />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Phone</h3>
            <p className="text-primary-foreground/80 text-center text-sm mb-2">97918 44184</p>
            <p className="text-xs text-accent">Mon–Sat: 9:30 AM – 7:30 PM</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919791844184"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-primary-foreground/15 transition group"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
              <MessageSquare className="text-accent" size={28} />
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
