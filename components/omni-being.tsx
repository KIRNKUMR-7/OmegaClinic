"use client"

import { Calendar, HeartPulse, Sparkles, Brain, Clock, CreditCard, Leaf } from "lucide-react"
import Image from "next/image"

export default function OmniBeing() {
  const services = [
    { title: "Mindfulness", icon: <Brain size={24} />, desc: "Elevate your consciousness and focus" },
    { title: "Om Meditation", icon: <Sparkles size={24} />, desc: "Deep relaxation & spiritual connection" },
    { title: "Yoga Lifetime Scheduler", icon: <Calendar size={24} />, desc: "Personalized long-term practice routines" },
    { title: "Diet & Exercise", icon: <HeartPulse size={24} />, desc: "Nutritional guidance & physical wellness" },
    { title: "Mind Relief", icon: <Leaf size={24} />, desc: "Stress reduction & mental clarity" }
  ]

  return (
    <section id="omni-being" className="py-20 bg-gradient-to-b from-background to-[#FAF5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-16 sm:w-48 sm:h-24 relative">
              <img 
                src="/omnibeing-logo.png" 
                alt="Omni Being Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="font-serif-heading text-4xl md:text-5xl text-primary mb-6">
            Welcome to <span className="text-accent">The Yogic Cult</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An exclusive online consulting service dedicated to harmonizing your Body, Mind, and Soul. 
            Discover the profound ancient sciences of life energy and holistic nutrition.
          </p>
        </div>

        {/* Philosophy / PDF Content Section */}
        <div className="flex flex-col gap-12 mb-20">
          
          {/* Prana Row */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-accent/10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-inner bg-[#FAF5EF] flex items-center justify-center p-4">
                <img src="/buddha-from-pdf.png" alt="Yogi Breath and Buddha" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = "/omni-meditation-art.png" }} />
              </div>
              <div>
                <h3 className="font-serif-heading text-3xl text-primary mb-6 flex items-center gap-3">
                  <Sparkles className="text-accent" /> Prana & Yogi Breath
                </h3>
                <ul className="text-muted-foreground space-y-4 list-none pl-1">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>Prana (Life Energy):</strong> The universal vital force flowing through energy channels (<em>Nadi</em>) and centers (<em>Chakras</em>).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>Pranayama (Yogi Breath):</strong> The ancient science of controlled breathing to unlock energy blocks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>The 3 Stages of Breath:</strong> Master <em>Puraka</em> (Inhale), <em>Kumbaka</em> (Hold), and <em>Rechaka</em> (Exhale).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>Instant Stress Relief:</strong> Rapidly calms the nervous system, drastically improves mental clarity, and enhances physical vitality.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reprogramming Protocol — Way of Life */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-accent/10 relative group">
            <div className="grid md:grid-cols-2 min-h-[520px]">

              {/* Left — Hero Poster Image */}
              <div className="relative w-full min-h-[360px] md:min-h-[520px] overflow-hidden">
                <img
                  src="/omni-diet-art.png"
                  alt="Reprogramming Protocol — Best Version of Yourself"
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
                {/* Bottom text overlay like the poster */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="text-white/70 uppercase tracking-widest text-xs mb-1">Reprogramming Protocol of</p>
                  <p className="text-white font-bold text-lg uppercase tracking-wide leading-snug">Mind and Body</p>
                  <p className="text-white/60 italic text-sm mt-1">To Become the Best Version of Yourself</p>
                </div>
              </div>

              {/* Right — Eat Topic with 4 Pillars */}
              <div
                className="relative flex flex-col justify-center px-10 py-12"
                style={{
                  background: "linear-gradient(135deg, #1a0a1e 0%, #2d1040 40%, #1a0a2e 70%, #0a0515 100%)"
                }}
              >
                {/* Subtle cloud/nebula texture overlay */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(ellipse at 30% 20%, rgba(180,60,120,0.5) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(120,40,160,0.4) 0%, transparent 50%)"
                  }}
                />

                <div className="relative z-10">
                  {/* Topic heading with colon */}
                  <h3
                    className="mb-8"
                    style={{
                      fontFamily: "var(--font-great-vibes), cursive",
                      fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                      color: "#ffffff",
                      textShadow: "0 2px 16px rgba(200,100,200,0.5)",
                      letterSpacing: "0.01em",
                      lineHeight: 1.1
                    }}
                  >
                    Eat:
                  </h3>

                  {/* 4 Pillars — mystical italic style, same as the banner */}
                  <div className="flex flex-col gap-7">
                    {[
                      { title: "Diet", sub: "We are, What We Eat" },
                      { title: "Exercise", sub: "How you Circulate Your Inner Rivers is Your Physical Adaptability" },
                      { title: "Mindfulness", sub: "The Art of Living in the Present Moment" },
                      { title: "Sleep", sub: "Proper Sleep Pattern Determines Your Energy Levels" }
                    ].map((pillar, i) => (
                      <div key={i}>
                        <p
                          style={{
                            fontFamily: "var(--font-great-vibes), cursive",
                            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                            color: "#ffffff",
                            textShadow: "0 1px 12px rgba(200,120,220,0.6)",
                            lineHeight: 1.1,
                            marginBottom: "0.25rem"
                          }}
                        >
                          {pillar.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-great-vibes), cursive",
                            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                            color: "rgba(255,255,255,0.75)",
                            textShadow: "0 1px 8px rgba(180,80,200,0.4)",
                            lineHeight: 1.4
                          }}
                        >
                          {pillar.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Services & Offerings */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22/%3E%3C/svg%3E')", backgroundSize: '100px 100px' }}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="font-serif-heading text-3xl md:text-4xl mb-4">Online Consulting Services</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-primary-foreground/90 font-medium">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Clock size={18} /> Every Sunday @ 10:30 AM</span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><CreditCard size={18} /> Starts at ₹199</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition duration-300">
                  <div className="text-accent mb-4 bg-white/10 inline-block p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-primary-foreground/80 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://chat.whatsapp.com/HdHqGU9VBA0I1xwKtP9VrE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg shadow-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300"
              >
                Join the Program Today
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
