"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { ChevronDown, CheckCircle2, Shield, Sparkles } from "lucide-react"

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function Services() {
  // Changed to Set to allow multiple cards to be expanded at once
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [headerVisible, setHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    // Observer for header
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      })
    }, observerOptions)

    // Observer for cards
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]))
            }, index * 100) // Staggered delay
          }
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      headerObserver.observe(sectionRef.current)
    }

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card)
    })

    return () => {
      headerObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  const services = [
    {
      title: "Locomotion Rehabilitation",
      description: "Advanced gait training and movement pattern restoration",
      image: "/WhatsApp Image 2025-11-08 at 19.29.52_196798db.jpg",
      symptoms: [
        "Walking difficulty & gait imbalance",
        "Lower-limb weakness"
      ],
      prevents: [
        "Falls & improper movement patterns"
      ]
    },
    {
      title: "Manual Therapy & Mobilization",
      description: "Hands-on techniques for joint and soft tissue treatment",
      image: "/WhatsApp Image 2025-11-08 at 19.33.37_837d439f.jpg",
      imgClass: "object-bottom",
      symptoms: [
        "Joint stiffness & muscle tightness",
        "Restricted movement"
      ],
      prevents: [
        "Chronic joint pain & mobility loss"
      ]
    },
    {
      title: "Neuro Rehabilitation",
      description: "Specialized care for neurological conditions and recovery",
      image: "/WhatsApp Image 2025-11-08 at 19.36.13_3ec11ea7.jpg",
      symptoms: [
        "Weakness after stroke or nerve injury",
        "Poor coordination & balance"
      ],
      prevents: [
        "Functional decline & dependency"
      ]
    },
    {
      title: "Sports Injury Rehab",
      description: "Performance-focused recovery for athletic injuries",
      image: "/WhatsApp Image 2025-11-08 at 19.57.17_6d29cc4c.jpg",
      imgClass: "object-top",
      symptoms: [
        "Muscle, ligament & tendon injuries",
        "Pain affecting performance"
      ],
      prevents: [
        "Re-injury & delayed recovery"
      ]
    },
    {
      title: "Post Operative Rehab",
      description: "Guided recovery following surgical procedures",
      image: "/WhatsApp Image 2025-11-08 at 20.30.05_dbee565d.jpg",
      symptoms: [
        "Post-surgical pain & stiffness",
        "Reduced strength & motion"
      ],
      prevents: [
        "Complications & slow healing"
      ]
    },
    {
      title: "Geriatric Mobility Training",
      description: "Specialized programs for senior mobility and independence",
      image: "/WhatsApp Image 2025-11-08 at 20.33.57_02294c59.jpg",
      symptoms: [
        "Age-related weakness & instability",
        "Difficulty walking"
      ],
      prevents: [
        "Falls & loss of independence"
      ]
    },
    {
      title: "Back & Neck Pain Management",
      description: "Evidence-based treatment for spinal pain conditions",
      image: "/WhatsApp Image 2025-11-08 at 20.51.50_1ad6e455.jpg",
      imgClass: "object-bottom",
      symptoms: [
        "Spine pain & muscle spasms",
        "Posture-related discomfort"
      ],
      prevents: [
        "Recurring pain & degeneration"
      ]
    },
    {
      title: "Balance & Gait Training",
      description: "Fall prevention and stability improvement programs",
      image: "/WhatsApp Image 2025-11-08 at 20.54.13_6ec1ac2b.jpg",
      symptoms: [
        "Poor balance & unsteady walking",
        "Fear of falling"
      ],
      prevents: [
        "Fall-related injuries"
      ]
    }
  ]

  // Shuffle services on each page load
  const [shuffledServices, setShuffledServices] = useState(services)

  // Shuffle services only on client-side to avoid hydration mismatch
  useEffect(() => {
    setShuffledServices(shuffleArray(services))
  }, [])

  // Toggle card expansion - allows multiple cards to be expanded
  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  // Check if a card is expanded
  const isExpanded = (index: number) => expandedCards.has(index)

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-gradient-to-b from-background via-background to-accent/5 py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
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
            Comprehensive rehabilitation solutions tailored to your specific needs
          </p>
        </div>

        {/* Services grid with staggered animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {shuffledServices.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el }}
              className={`
                service-card relative bg-card rounded-2xl border border-border 
                hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5
                transition-all duration-500 group overflow-hidden flex flex-col
                ${visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{
                transitionDelay: visibleCards.has(index) ? '0ms' : `${index * 100}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image section with enhanced hover */}
              {service.image ? (
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover ${service.imgClass || 'object-center'} group-hover:scale-110 transition-transform duration-700 ease-out`}
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ) : (
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <span className="text-accent font-bold text-xl">{index + 1}</span>
                  </div>
                </div>
              )}

              {/* Content section */}
              <div className="p-5 md:p-6 flex-1 flex flex-col relative z-10">
                <h3 className="font-serif-heading text-lg md:text-xl text-primary mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Expandable button with ripple effect */}
                <button
                  onClick={() => toggleCard(index)}
                  className="btn-animate flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-accent/5 hover:bg-accent/15 active:scale-[0.98] transition-all duration-300 text-sm font-medium text-accent mt-auto border border-transparent hover:border-accent/20"
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-accent ${isExpanded(index) ? 'animate-pulse' : ''}`} />
                    {isExpanded(index) ? 'Hide Details' : 'View Details'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded(index) ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Expandable content with slide animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded(index) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                >
                  {/* Symptoms section */}
                  <div className={`mb-4 transition-all duration-300 ${isExpanded(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`} style={{ transitionDelay: isExpanded(index) ? '100ms' : '0ms' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-accent/10 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Addresses</span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      {service.symptoms.map((symptom, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-3 group/item"
                          style={{
                            animationDelay: isExpanded(index) ? `${150 + i * 50}ms` : '0ms'
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                          <span className="group-hover/item:text-primary transition-colors">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention section */}
                  <div className={`pt-4 border-t border-border/50 transition-all duration-300 ${isExpanded(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`} style={{ transitionDelay: isExpanded(index) ? '200ms' : '0ms' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                        <Shield className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Prevents</span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      {service.prevents.map((prevention, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-3 group/item"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                          <span className="group-hover/item:text-primary transition-colors">{prevention}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
