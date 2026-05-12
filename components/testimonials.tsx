"use client"

import { useState, useEffect, useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Mani Prabu",
        rating: 5,
        title: "Excellent recovery for diabetic neuropathy",
        review: "I underwent treatment for diabetic neuropathy with severe muscle weakness in my hands and legs. After the therapy, I experienced significant recovery."
    },
    {
        name: "Dr. Ahmed Hussain",
        rating: 5,
        title: "Outstanding work as a physiotherapist",
        review: "After just one session, I feel very much satisfied and better. Your extraordinary approach to patient care is truly remarkable. I will definitely recommend your clinic to my patients."
    },
    {
        name: "Moufi Moufi",
        rating: 5,
        title: "Pain relief when medicines failed",
        review: "This clinic provided relief when medications could not. The treatment approach is highly effective and professional."
    },
    {
        name: "Vijaya Bhaskara Reddy",
        rating: 5,
        title: "Excellent treatment and very kind doctor",
        review: "Very good doctor and excellent treatment. I got cured my upper back pain within two sittings. He is very kind and treated with patience. He told me the reason behind the pain."
    },
    {
        name: "Manickam Kumar",
        rating: 5,
        title: "Expert diagnosis and personalized treatment",
        review: "The doctor performs a detailed diagnosis before starting treatment. The therapy is effective and patient-focused."
    }
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="relative bg-card rounded-2xl border border-border p-6 min-w-[300px] max-w-[300px] md:min-w-[350px] md:max-w-[350px] flex-shrink-0 hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent" />
            </div>
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
            </div>
            <h3 className="font-semibold text-primary mb-3 text-lg leading-tight">
                &quot;{testimonial.title}&quot;
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                {testimonial.review}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/40 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                </div>
                <div>
                    <p className="font-medium text-primary text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Patient</p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    const [headerVisible, setHeaderVisible] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setHeaderVisible(true)
                })
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials]

    return (
        <>
            {/* Inline keyframes style */}
            <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track {
          animation: scroll-left 30s linear infinite;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      `}</style>

            <section
                ref={sectionRef}
                id="testimonials"
                className="bg-gradient-to-b from-accent/5 via-background to-background py-16 md:py-24 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            <Star className="w-4 h-4 fill-accent" />
                            <span>Patient Stories</span>
                        </div>
                        <h2 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
                            Real Stories. <span className="text-accent">Real Recovery.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Trusted by 10000+ Happy Patients
                        </p>
                    </div>
                </div>

                {/* Scrolling testimonials */}
                <div
                    className="relative py-4"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    {/* Marquee track */}
                    <div
                        className="testimonials-track flex gap-6"
                        style={{
                            width: 'max-content',
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>

                {/* Trust badge */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mt-12 transition-all duration-700 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-6 py-3 rounded-full">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                ))}
                            </div>
                            <span className="font-medium text-sm">Rated 5.0/5 based on 10000+ Google Reviews</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
