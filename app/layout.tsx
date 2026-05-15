import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Montserrat, Playfair_Display, Great_Vibes, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist"
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-montserrat"
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair"
})
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes"
})
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron"
})
export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "Omega Clinic - Homoeopathy & Alternative Medicine",
    template: "%s | Omega Clinic"
  },
  description: "Expert Homoeopathy & Alternative Medicine by Dr. M. Mohan, B.H.M.S., M.D(AM). Book your appointment today!",

  // Keywords for search engines
  keywords: [
    "homoeopathy",
    "alternative medicine",
    "clinic",
    "Dr M Mohan",
    "consultant",
    "India",
    "Tamil Nadu"
  ],

  // Author and generator
  authors: [{ name: "Dr. M. Mohan, B.H.M.S., M.D(AM)." }],
  creator: "Omega Clinic",
  publisher: "Omega Clinic",
  generator: "Next.js",

  // Robots directive
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph for social sharing (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omegaclinic.com",
    siteName: "Omega Clinic",
    title: "Omega Clinic - Homoeopathy & Alternative Medicine",
    description: "Expert Homoeopathy & Alternative Medicine by Dr. M. Mohan, B.H.M.S., M.D(AM).",
    images: [
      {
        url: "/omega-logo.png",
        width: 1200,
        height: 630,
        alt: "Omega Clinic",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Omega Clinic - Homoeopathy & Alternative Medicine",
    description: "Expert Homoeopathy & Alternative Medicine by Dr. M. Mohan, B.H.M.S., M.D(AM). Book your appointment today!",
    images: ["/omega-logo.png"],
  },

  // Verification tags
  verification: {
    // google: "your-google-verification-code",
  },

  // Category
  category: "Healthcare",

  // Other metadata
  applicationName: "Omega Clinic",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Alternate languages
  alternates: {
    canonical: "https://omegaclinic.com",
    languages: {
      "en-IN": "https://omegaclinic.com",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${montserrat.variable} ${playfair.variable} ${greatVibes.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
