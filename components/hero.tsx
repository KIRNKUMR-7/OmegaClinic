"use client"

interface HeroProps {
  onBookAppointment: () => void
}

export default function Hero({ onBookAppointment }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-6 sm:pt-8 pb-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22%3E%3Crect fill=%22%23f5f1ed%22 width=%221200%22 height=%22800%22/%3E%3Ccircle cx=%221000%22 cy=%22100%22 r=%22250%22 fill=%22%23c69a6b%22 opacity=%220.15%22/%3E%3Ccircle cx=%22200%22 cy=%22600%22 r=%22300%22 fill=%22%23c69a6b%22 opacity=%220.12%22/%3E%3Cpath d=%22M0 400 Q300 200 600 400 T1200 400%22 stroke=%22%23c69a6b%22 strokeWidth=%222%22 fill=%22none%22 opacity=%220.15%22/%3E%3C/svg%3E')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-5 sm:space-y-6">
          {/* Logos */}
          <div className="flex flex-row justify-center items-center max-w-3xl mx-auto mb-0 gap-4 sm:gap-8 px-2">
            <div className="relative w-24 sm:w-48 md:w-56 flex items-center justify-center">
              <img
                src="/omega-logo.png"
                alt="Omega Clinic Logo"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '12rem' }}
              />
            </div>

            {/* Vertical Divider */}
            <div className="h-16 sm:h-24 w-px bg-primary/30 mx-1 sm:mx-2 shrink-0"></div>

            <div className="relative w-72 sm:w-[28rem] md:w-[36rem] flex items-center justify-center">
              <img
                src="/omnibeing-logo.png"
                alt="Omni Being Logo"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '18rem' }}
              />
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3 mt-12 sm:mt-14">
            <p className="text-lg sm:text-xl md:text-2xl tracking-wide" style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontWeight: 700,
              letterSpacing: '0.1em',
              lineHeight: '1.4',
              color: '#7B4F2E'
            }}>
              Dr. M. MOHAN <span style={{ fontWeight: 600 }}>B.H.M.S., M.D<span style={{ fontSize: '0.6em', verticalAlign: 'middle' }}>(AM)</span>.,</span>
              <br />
              <span className="text-[10px] sm:text-xs mt-1 block" style={{ letterSpacing: '0.18em', fontWeight: 500, color: '#7B4F2E' }}>HOMOEOPATHY &amp; ALTERNATIVE MEDICINE<br />CONSULTANT</span>
            </p>
          </div>

          {/* Main heading */}
          <h2 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-balance px-2" style={{ color: '#C9A94B' }}>
            Holistic Health Center
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
            <button
              onClick={onBookAppointment}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-sm sm:text-base"
            >
              Book Appointment
            </button>
            <a
              href="tel:9791844184"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-lg font-semibold transition text-sm sm:text-base"
            >
              Call Now
            </a>
          </div>

          {/* Info pills */}
          <div className="relative -top-4 flex flex-col sm:flex-row gap-3 justify-center px-4 text-xs sm:text-sm flex-wrap">
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-card/80 border border-border rounded-full">
              <span className="text-accent">📍</span>
              <span className="text-foreground">Professional Care</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-card/80 border border-border rounded-full">
              <span className="text-accent">✓</span>
              <span className="text-foreground">Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
