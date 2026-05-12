export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            // Organization/Business Schema
            {
                "@type": "MedicalBusiness",
                "@id": "https://omegaclinic.com/#organization",
                "name": "Omega Clinic",
                "alternateName": "Omega Clinic",
                "description": "Wholistic Healing in Body, Mind & Soul. Helps in Construct your Life in a Healthy Way by realizing the Truth of Reality. Also, Elevate your consciousness to Higher Dimension.",
                "url": "https://omegaclinic.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://omegaclinic.com/omega-logo.png"
                },
                "image": "https://omegaclinic.com/omega-logo.png",
                "telephone": "+91-9791844184",
                "email": "omegaclinicslm@gmail.com",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Tamil Nadu",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "",
                    "longitude": ""
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "09:30",
                        "closes": "14:30"
                    }
                ],
                "sameAs": [
                    "https://wa.me/919791844184",
                    "https://www.instagram.com/omegaomnibeing?igsh=MTg5eXZidXJ0MDN4ZQ==",
                    "https://www.youtube.com/@omnibeingom"
                ],
                "medicalSpecialty": [
                    "Homoeopathy",
                    "Physical Therapy",
                    "Rehabilitation Medicine"
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Homoeopathy Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Locomotion Rehabilitation",
                                "description": "Advanced gait training and movement pattern restoration"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Manual Therapy & Mobilization",
                                "description": "Hands-on techniques for joint and soft tissue treatment"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Neuro Rehabilitation",
                                "description": "Specialized care for neurological conditions and recovery"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Sports Injury Rehabilitation",
                                "description": "Performance-focused recovery for athletic injuries"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Post Operative Rehabilitation",
                                "description": "Guided recovery following surgical procedures"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Geriatric Mobility Training",
                                "description": "Specialized programs for senior mobility and independence"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Back & Neck Pain Management",
                                "description": "Evidence-based treatment for spinal pain conditions"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Balance & Gait Training",
                                "description": "Fall prevention and stability improvement programs"
                            }
                        }
                    ]
                }
            },
            // Person Schema for the Doctor
            {
                "@type": "Person",
                "@id": "https://omegaclinic.com/#doctor",
                "name": "Dr. M. Mohan",
                "jobTitle": "Homoeopathy & Alternative Medicine Consultant",
                "description": "Dr. M. Mohan (Register No: 2742), a highly trained Homoeopathy & Alternative Medicine Consultant committed to Wholistic Healing in Body, Mind & Soul.",
                "worksFor": {
                    "@id": "https://omegaclinic.com/#organization"
                },
                "medicalSpecialty": [
                    "Homoeopathy",
                    "Manual Therapy",
                    "Locomotion Rehabilitation"
                ]
            },
            // Website Schema
            {
                "@type": "WebSite",
                "@id": "https://omegaclinic.com/#website",
                "url": "https://omegaclinic.com",
                "name": "Omega Clinic",
                "description": "Wholistic Healing in Body, Mind & Soul",
                "publisher": {
                    "@id": "https://omegaclinic.com/#organization"
                },
                "inLanguage": "en-IN"
            },
            // WebPage Schema
            {
                "@type": "WebPage",
                "@id": "https://omegaclinic.com/#webpage",
                "url": "https://omegaclinic.com",
                "name": "Omega Clinic - Wholistic Healing in Body, Mind & Soul",
                "isPartOf": {
                    "@id": "https://omegaclinic.com/#website"
                },
                "about": {
                    "@id": "https://omegaclinic.com/#organization"
                },
                "description": "Expert Wholistic Healing by Dr. M. Mohan (Reg No: 2742). Helps in Construct your Life in a Healthy Way by realizing the Truth of Reality.",
                "inLanguage": "en-IN"
            },
            // FAQ Schema (for common questions)
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What services does Omega Clinic offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We offer Locomotion Rehabilitation, Manual Therapy & Mobilization, Neuro Rehabilitation, Sports Injury Rehab, Post Operative Rehab, Geriatric Mobility Training, Back & Neck Pain Management, and Balance & Gait Training."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the clinic hours?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Monday to Saturday: 9:30 AM – 2:30 PM, Sunday: Closed"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I book an appointment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can book an appointment by calling 9791844184, messaging on WhatsApp, or filling out the appointment form on our website."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
