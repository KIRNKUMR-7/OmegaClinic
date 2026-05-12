"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Award, Heart, Shield, Stethoscope, Clock } from "lucide-react"

const teamMembers = [
    {
        name: "Dr. C. Babuprasad P.T.",
        role: "Physiotherapist & Manual Therapist",
        title: "Founder & Chief Physiotherapist",
        image: "/WhatsApp Image 2025-11-11 at 18.55.51_6642944f.jpg",
        description: "With extensive experience in locomotion rehabilitation and manual therapy, Dr. Babuprasad leads our team with a deep commitment to evidence-based treatment approaches. Specialized in pain management and movement restoration.",
        specializations: ["Locomotion Rehabilitation", "Manual Therapy", "Pain Management", "Neuro Rehabilitation"]
    },
    {
        name: "Mr. Ajay DSM.",
        role: "Asst. Physiotherapist",
        title: "Locomotion Rehabilitator & Acupuncture Therapist",
        image: "/ajay.png",
        description: "Mr. Ajay brings specialized expertise in locomotion rehabilitation and acupuncture therapy. His dedicated approach to patient care and comprehensive understanding of movement science helps patients achieve optimal recovery outcomes.",
        specializations: ["Locomotion Rehabilitation", "Acupuncture Therapy", "Movement Therapy", "Patient Care"]
    }
]

const clinicHighlights = [
    {
        icon: Stethoscope,
        title: "Advanced Equipment",
        description: "State-of-the-art rehabilitation machines and diagnostic tools"
    },
    {
        icon: Heart,
        title: "Patient-Centered Care",
        description: "Personalized treatment plans tailored to individual needs"
    },
    {
        icon: Shield,
        title: "Safe Environment",
        description: "Hygienic and comfortable clinical setting for all patients"
    },
    {
        icon: Clock,
        title: "Flexible Scheduling",
        description: "Convenient appointment times to fit your schedule"
    }
]

export default function Team() {
    const [headerVisible, setHeaderVisible] = useState(false)
    const [cardsVisible, setCardsVisible] = useState<Set<number>>(new Set())
    const sectionRef = useRef<HTMLElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true)
                }
            })
        }, observerOptions)

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
                    if (index !== -1) {
                        setTimeout(() => {
                            setCardsVisible((prev) => new Set([...prev, index]))
                        }, index * 150)
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

    return (
        <section
            ref={sectionRef}
            id="team"
            className="bg-gradient-to-b from-background via-accent/5 to-background py-16 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        <Users className="w-4 h-4" />
                        <span>Expert Care</span>
                    </div>
                    <h2 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
                        Meet Our <span className="text-accent relative">
                            Physiotherapy Team
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0,8 Q25,0 50,8 T100,8" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Our dedicated team of healthcare professionals combines expertise, compassion, and advanced techniques to help you achieve your recovery goals.
                    </p>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardRefs.current[index] = el }}
                            className={`bg-card rounded-2xl border border-border p-6 md:p-8 
                hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5
                transition-all duration-500 group
                ${cardsVisible.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
                            style={{ transitionDelay: cardsVisible.has(index) ? '0ms' : `${index * 150}ms` }}
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                {/* Circular Image */}
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300 flex-shrink-0 shadow-lg">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="font-serif-heading text-2xl md:text-3xl text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
                                        {member.title}
                                    </p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {member.description}
                                    </p>

                                    {/* Specializations */}
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        {member.specializations.map((spec, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Clinical Environment Section */}
                <div className={`transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="text-center mb-10">
                        <h3 className="font-serif-heading text-3xl md:text-4xl text-primary mb-4">
                            Our <span className="text-accent">Clinical Environment</span>
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Experience world-class care in a modern, comfortable, and fully-equipped rehabilitation facility.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clinicHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl border border-border p-6 text-center hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                                    <highlight.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                    {highlight.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {highlight.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Badges */}
                <div className={`mt-12 pt-12 border-t border-border/50 transition-all duration-700 delay-500 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                <Award className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">Certified Professionals</p>
                                <p className="text-xs text-muted-foreground">Licensed & Qualified Team</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">10000+ Happy Patients</p>
                                <p className="text-xs text-muted-foreground">Trusted by the Community</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">Since 2005</p>
                                <p className="text-xs text-muted-foreground">Years of Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
