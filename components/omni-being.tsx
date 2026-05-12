"use client"

import { Calendar, HeartPulse, Sparkles, Brain, Clock, CreditCard, Leaf } from "lucide-react"

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
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-stretch">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-accent/10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500 flex flex-col">
            <div className="w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden shadow-inner">
              <img src="/omni-meditation-art.png" alt="Yogic Meditation and Chakras" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="font-serif-heading text-2xl text-primary mb-4 flex items-center gap-3">
              <Sparkles className="text-accent" /> Prana & Pranayama
            </h3>
            <p className="text-muted-foreground mb-4">
              <strong>Prana</strong> is the universal life force that distinguishes the living from the dead. It permeates the universe and flows through all living beings through channels called <em>Nadi</em> and centers called <em>Chakras</em>.
            </p>
            <p className="text-muted-foreground flex-grow">
              Through <strong>Pranayama</strong> (regulated breathing involving Puraka, Kumbaka, and Rechaka), we can enhance this flow. This practice rapidly calms the mind, releases stress, and profoundly improves mental clarity and physical health.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-accent/10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500 flex flex-col">
            <div className="w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden shadow-inner bg-[#FAF5EF] flex items-center justify-center">
              <img src="/omni-diet-art.png" alt="Healthy Ayurvedic Diet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="font-serif-heading text-2xl text-primary mb-4 flex items-center gap-3">
              <Leaf className="text-accent" /> Way of Life & Diet
            </h3>
            <p className="text-muted-foreground mb-4">
              "We are what we eat." Food directly influences the mind and body. Apart from caloric value, each food has specific characteristics (<em>Gunas</em>) that enhance daily life—some keep us calm, while others may make us dull or active.
            </p>
            <p className="text-muted-foreground flex-grow">
              Ignorance in eating habits leads to immunological and metabolic disorders. Wisdom about the food we consume is the foundation of maintaining oneself in exceptional health.
            </p>
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
                href="#get-in-touch" 
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
