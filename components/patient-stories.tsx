"use client"

import { useState, useEffect, useRef } from "react"
import { Quote, Star, CheckCircle } from "lucide-react"

// Patient stories with photos and detailed testimonials
const patientStories = [
    {
        id: 1,
        name: "Mr. Manivel",
        occupation: "Carpenter, Suramangalam",
        image: "/patient1.png",
        condition: "Severe Back Pain",
        story: "I've been working as a carpenter for 25 years. The severe back pain made it impossible to sit, stand, or even work properly. I couldn't straighten my back, and the constant pain disrupted my sleep. Multiple doctors recommended spinal surgery as the only option.",
        outcome: "After meeting Dr. M. Mohan and following his treatment plan, I now sleep peacefully and have returned to my regular work. No surgery was needed!",
        rating: 5
    },
    {
        id: 2,
        name: "Mr. Elavarasan",
        occupation: "Age 33, Dalmia Colony",
        image: "/patient2.jpg",
        condition: "Stroke - Left Hemiplegia",
        story: "I suffered a stroke attack and struggled for over a year with left-side paralysis. A friend recommended Omega Clinic. The team here provides comprehensive 4-hour exercise sessions tailored to my recovery needs.",
        outcome: "I'm now feeling much better - I can walk again and my hand movements have significantly improved. The dedicated rehabilitation program has truly changed my life!",
        rating: 5
    },
    {
        id: 3,
        name: "Mr. Lokesh Raj",
        occupation: "Age 28, Ammapalayam",
        image: "/patient3.png",
        condition: "Muscular Dystrophy",
        story: "I have been affected by muscular dystrophy, a progressive muscle-weakening condition. For the past 5 years, I've been receiving specialized treatment at Omega Clinic. They provide dedicated care for long-term conditions like muscular dystrophy.",
        outcome: "The specialized treatments have been incredibly helpful in maintaining my mobility and keeping me active. The continuous care and support have made a significant difference in my quality of life!",
        rating: 5
    },
    {
        id: 4,
        name: "Mr. Manikavasagam",
        occupation: "Veteran Athlete, Age 80, Peramanur",
        image: "/patient4.png",
        condition: "Severe Knee Pain",
        story: "I am a veteran athlete. Two years ago, I developed severe knee pain and doctors told me I could never run again. I underwent physiotherapy treatment and continuous exercises, staying away from competitions for two years.",
        outcome: "In 2025, I won GOLD MEDALS in both 5000m and 1900m races at the State-Level Senior Athletics Competition! The physiotherapy and training made this incredible comeback possible! 🥇",
        rating: 5
    },
    {
        id: 5,
        name: "Mr. Devottham",
        occupation: "Gymnastics Coach, Chinnapudur",
        image: "/patient5.png",
        condition: "Sports Rehabilitation",
        story: "I had a very good experience at this physiotherapy clinic. The therapist is knowledgeable, professional, friendly, and truly focused on getting results. The treatment was effective and well explained, which helped in faster recovery.",
        outcome: "What I appreciate most is the quality care provided at a very affordable cost. Highly recommended for anyone looking for honest and effective physiotherapy!",
        rating: 5
    },
    {
        id: 6,
        name: "Mr. Hariharasudan",
        occupation: "Ammapalayam, Salem Junction",
        image: "/patient6.jpg",
        condition: "Congenital Limb Disorder",
        story: "I have an unidentified congenital limb disorder. During childhood, I underwent multiple surgeries for hand and leg correction and had some physiotherapy treatment, but it wasn't continuous. I still needed support to walk.",
        outcome: "After coming to Omega Clinic for the past few months, I've seen remarkable improvement in my mobility. The consistent treatment approach has made a real difference in my daily life!",
        rating: 5
    },
    {
        id: 7,
        name: "Mrs. Visalatchi",
        occupation: "Retired, TN Transport Dept, Age 68, Kollappatti",
        image: "/patient7.jpg",
        condition: "Stroke - Left Side Paralysis",
        story: "I retired from Tamil Nadu Transport Department. Last year, I was affected by stroke - my left hand and left leg stopped functioning. I have been receiving treatment at the clinic regularly.",
        outcome: "Now I can walk without anyone's support! Only hand movement is still recovering, but with continued treatment, I am confident of full recovery. Thank you!",
        rating: 5
    },
    {
        id: 8,
        name: "Mrs. Mohanapriya",
        occupation: "Age 39, New Bus Stand",
        image: "/patient8.png",
        imagePosition: "center",
        condition: "Stroke - Brain Blood Vessel Blockage",
        story: "8 months ago, due to brain blood vessel blockage, my right hand and leg stopped functioning. I needed someone's help just to walk.",
        outcome: "After physiotherapy training, I am now seeing good improvement. The consistent treatment has helped me regain mobility!",
        rating: 5
    },
    {
        id: 9,
        name: "Arun, Srihariharan & Mohammed Ibrahim",
        occupation: "Children with DMD",
        image: "/patient9.jpg",
        condition: "Duchenne Muscular Dystrophy",
        story: "These three young patients are affected by Duchenne Muscular Dystrophy (DMD), a progressive genetic disorder that weakens muscles over time. They require continuous physiotherapy treatment to maintain mobility.",
        outcome: "With regular treatment sessions at Omega Clinic, they are receiving specialized care to manage their condition and maintain their quality of life!",
        rating: 5
    },
    {
        id: 10,
        name: "Mrs. Sameem Fathima",
        occupation: "Azad Nagar",
        image: "/patient10.png",
        imagePosition: "center",
        condition: "Leg Pain",
        story: "I was suffering from severe leg pain. After taking treatment at the clinic, my pain has reduced significantly. I feel much better now with no leg pain.",
        outcome: "They take excellent care of our health without needing tablets! The treatment here has been very effective and I'm truly grateful.",
        rating: 5
    }
]

function PatientCard({ patient }: { patient: typeof patientStories[0] }) {
    return (
        <div className="relative bg-card rounded-2xl border border-border p-6 min-w-[400px] max-w-[400px] flex-shrink-0 hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
            {/* Patient Photo */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-5">
                <img
                    src={patient.image}
                    alt={patient.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${patient.imagePosition === 'center' ? 'object-center' : 'object-top'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex gap-1">
                        {[...Array(patient.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Condition Badge */}
            <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <span>{patient.condition}</span>
            </div>

            {/* Name & Occupation */}
            <h3 className="font-semibold text-primary text-lg mb-1">{patient.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{patient.occupation}</p>

            {/* Story - Full content, no truncation */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {patient.story}
            </p>

            {/* Outcome - Full content */}
            <div className="bg-green-500/10 rounded-lg p-4">
                <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-600 dark:text-green-400 leading-relaxed">
                        {patient.outcome}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function PatientStories() {
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

    // Duplicate for seamless scroll
    const duplicatedStories = [...patientStories, ...patientStories]

    return (
        <>
            {/* Inline keyframes style */}
            <style jsx global>{`
                @keyframes scroll-patients {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .patients-track {
                    animation: scroll-patients 40s linear infinite;
                }
                .patients-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <section
                ref={sectionRef}
                id="patient-stories"
                className="bg-gradient-to-b from-background via-accent/5 to-background py-16 md:py-20 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            <CheckCircle className="w-4 h-4" />
                            <span>Real Patient Stories</span>
                        </div>
                        <h2 className="font-serif-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-3">
                            Patient <span className="text-accent">Testimonials</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Real recovery journeys from our patients
                        </p>
                    </div>
                </div>

                {/* Scrolling Patient Cards */}
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
                        className="patients-track flex gap-6"
                        style={{
                            width: 'max-content',
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    >
                        {duplicatedStories.map((patient, index) => (
                            <PatientCard key={index} patient={patient} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
