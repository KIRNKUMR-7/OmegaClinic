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

          {/* Diet Row */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-accent/10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-serif-heading text-3xl text-primary mb-6 flex items-center gap-3">
                  <Leaf className="text-accent" /> Way of Life & Diet
                </h3>
                <ul className="text-muted-foreground space-y-4 list-none pl-1">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>You Are What You Eat:</strong> Food is pure energy that directly influences your Mind and Body.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>Food Gunas:</strong> Beyond calories, foods carry specific energetic characteristics that can keep you calm, dull, or active.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>Disease Prevention:</strong> Ignorance in eating habits is the root of immunological and metabolic disorders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <span className="text-lg"><strong>Dietary Wisdom:</strong> Gain clarity on the perfect nutritional balance for exceptional lifelong health.</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-inner bg-[#FAF5EF] flex items-center justify-center p-4">
                <img src="/omni-diet-art.png" alt="Healthy Ayurvedic Diet" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
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
