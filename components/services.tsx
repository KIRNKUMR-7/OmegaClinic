"use client"

import { Calendar, HeartPulse, Sparkles, Brain, Clock, CreditCard, Leaf, CheckCircle2 } from "lucide-react"

export default function Services() {
  const omniBeing = [
    {
      title: "Mindfulness",
      icon: <Brain size={24} />,
      desc: "Elevate your consciousness and focus",
      points: ["Diet", "Exercise", "Sleep"]
    },
    {
      title: "Meditation",
      icon: <Sparkles size={24} />,
      desc: "Ancient practices for inner peace and clarity",
      points: ["Om Meditation", "Chakra Meditation"]
    }
  ]

  return (
    <section id="services" className="bg-gradient-to-b from-background via-background to-accent/5 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Expert Care</span>
          </div>
          <h2 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
            Our <span className="text-accent relative">
              Services
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,8 Q25,0 50,8 T100,8" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Two dedicated services to heal your Body, Mind & Soul
          </p>
        </div>

        <div className="flex flex-col gap-16">

          {/* â”€â”€ SERVICE 1: Direct Consultant â”€â”€ */}
          <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">

              {/* Image */}
              <div className="w-full h-72 md:h-auto overflow-hidden bg-accent/5">
                <img
                  src="/direct-consultant.png"
                  alt="Direct Consultation with Dr. M. Mohan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                  Service 1
                </div>
                <h3 className="font-serif-heading text-3xl md:text-4xl text-primary mb-2">Direct & Online Consultant</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  In-person or online consultation You'll be connect with Dr. M. Mohan personalized in homoeopathy &amp; alternative medicine treatment. Ask your health doubts directly and receive a tailored treatment plan.
                </p>
                <ul className="space-y-3">
                  {[
                    "Chronic & Acute health condition assessment",
                    "Homoeopathic & Ayurvedic medicine prescription",
                    "Personalized diet & lifestyle guidance",
                    "Direct Q&A with the doctor"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* â”€â”€ SERVICE 2: Omni Being â”€â”€ */}
          <div id="omni-being">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-6 ml-1 w-fit">
              Service 2
            </div>

            <section className="py-0 bg-gradient-to-b from-background to-[#FAF5EF] rounded-3xl border border-border overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Omni Being Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="flex justify-center mb-6">
                    <div className="w-96 h-48 sm:w-[36rem] sm:h-72 relative">
                      <img src="/omnibeing-logo.png" alt="Omni Being Logo" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <h2 className="font-serif-heading text-4xl md:text-5xl text-primary mb-4">
                    Welcome to <span className="text-accent">The Yogic Cult</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    An exclusive online class dedicated to harmonizing your Body, Mind, and Soul.
                    Discover the profound ancient sciences of life energy and holistic living.
                  </p>
                </div>

                {/* Two Class Boxes */}
                <div className="flex flex-col gap-12 mb-20">

                  {/* Box 1 - Class 1: Mindfulness */}
                  <div className="bg-white rounded-3xl shadow-xl border border-accent/10 overflow-hidden group hover:border-accent/30 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-center gap-0">

                      {/* Left - Square image container, fully visible */}
                      <div className="md:w-1/2 flex-shrink-0">
                        <div className="aspect-square w-full overflow-hidden rounded-none bg-[#f5f0eb]">
                          <img
                            src="/class1-mindfulness.jpg"
                            alt="Mindfulness - Best Version of Our Self"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      {/* Right - Mindfulness Content */}
                      <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
                        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                          Class 1
                        </div>

                        {/* Mindfulness heading */}
                        <h3 className="font-serif-heading text-4xl md:text-5xl text-primary leading-tight">
                          Mindfulness:
                        </h3>

                        {/* Subtitle - Reprogramming Protocol */}
                        <p className="text-accent italic text-sm mb-6 mt-1">
                          Reprogramming Protocol of Mind & Body
                        </p>

                        {/* 3 Pillars - Diet, Exercise, Sleep */}
                        <div className="flex flex-col gap-4">
                          {[
                            { title: 'Diet :', sub: 'We are, What We Eat' },
                            { title: 'Exercise :', sub: 'How you Circulate Your Inner Rivers is Your Physical Adaptability' },
                            { title: 'Sleep :', sub: 'Proper Sleep Pattern Determines Your Energy Levels' }
                          ].map((pillar, i) => (
                            <div key={i} className="flex gap-3 items-start">
                              <div className="w-0.5 bg-accent/40 rounded-full flex-shrink-0 self-stretch" />
                              <div>
                                <p className="font-serif-heading text-base font-semibold text-primary leading-tight">
                                  {pillar.title}
                                </p>
                                <p className="text-sm text-muted-foreground leading-snug mt-0.5">
                                  {pillar.sub}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Box 2 â€” Class 2: Meditation & Chakra Tuning */}
                  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-accent/10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                      <div className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                          Class 2
                        </div>
                        <h3 className="font-serif-heading text-3xl text-primary mb-5 flex items-center gap-3">
                          <Brain className="text-accent" /> Meditation &amp; Chakra Tuning
                        </h3>
                        <ul className="text-muted-foreground space-y-4 list-none pl-1">
                          <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">✦</span><span className="text-base"><strong>1. Om Meditation:</strong> Sacred sound vibration practice to quiet the mind, expand awareness, and align with universal consciousness.</span></li>
                          <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">✦</span><span className="text-base"><strong>2. Chakra Meditation:</strong> Targeted energy center activation to balance the body's seven chakras, unlocking vitality and inner harmony.</span></li>
                        </ul>
                      </div>
                      {/* Image — buddha image */}
                      <div className="order-1 md:order-2 w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-inner bg-[#FAF5EF] flex items-center justify-center p-4">
                        <img src="/buddha-from-pdf.png" alt="Meditation and Chakra" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Offerings Grid */}
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22/%3E%3C/svg%3E')", backgroundSize: '100px 100px' }}></div>
                  <div className="relative z-10">
                    <div className="text-center mb-12">
                      <h3 className="font-serif-heading text-3xl md:text-4xl mb-4">Online Consulting Services</h3>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-primary-foreground/90 font-medium">
                        <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Clock size={18} /> Every Sunday @ 07.30AM - 09.30AM</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      {omniBeing.map((service, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition duration-300">
                          <div className="text-accent mb-4 bg-white/10 inline-block p-3 rounded-lg">{service.icon}</div>
                          <h4 className="text-xl font-semibold mb-1">{service.title}</h4>
                          <p className="text-primary-foreground/70 text-sm mb-3">{service.desc}</p>
                          <ul className="flex flex-col gap-1">
                            {service.points.map((pt, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                {pt}
                              </li>
                            ))}
                          </ul>
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
          </div>

        </div>
      </div>
    </section>
  )
}
