export default function About() {
  return (
    <section id="about" className="bg-card py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor's Profile Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Doctor's Image */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden border-[6px] border-background shadow-2xl ring-4 ring-accent/20 bg-gradient-to-b from-accent/5 to-accent/20">
            <img 
              src="/dr-mohan.png" 
              alt="Dr. M. Mohan" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.45]"
              style={{ 
                objectPosition: 'center 15%',
                transform: 'scale(1.35)'
              }}
            />
          </div>
          <h1 className="dr-name mt-6 text-3xl md:text-4xl text-primary text-center" style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700, textTransform: 'uppercase' }}>
            Dr. M. MOHAN<br />
            <span className="pt-suffix" style={{ fontSize: '0.6em', fontWeight: 500 }}>B.H.M.S., M.D(AM).</span><br />
            <span className="text-[10px] opacity-70" style={{ letterSpacing: '0.15em', fontWeight: 600 }}>REGISTER NO : 2742</span>
          </h1>
          <p className="dr-title mt-4 text-xs sm:text-sm md:text-base text-center" style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#A33333',
            lineHeight: '1.3',
            padding: '0 8px'
          }}>
            HOMOEOPATHY & ALTERNATIVE MEDICINE CONSULTANT
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif-heading text-4xl md:text-5xl text-primary">
                About <span className="text-accent">Omega Clinic</span>
              </h2>
              <div className="mt-2 inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-sm font-semibold tracking-widest text-accent uppercase">Established Since 2008</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "Wholistic Healing in Body, Mind & Soul. Helps in Construct your Life in a Healthy Way by realizing the Truth of Reality. Also, Elevate your consciousness to Higher Dimension."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Omega Clinic. We specialize in science-based homoeopathy and alternative medicine.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi this is Dr. M. Mohan, B.H.M.S., M.D(AM)., a highly trained Homoeopathy & Alternative Medicine Consultant, leads our center with a deep
              commitment to helping patients restore their health and well-being through evidence-based treatments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide personalized, compassionate care tailored to your unique needs, focusing on natural and holistic healing.
            </p>
          </div>

          {/* Right - Info cards */}
          <div className="space-y-4">
            <div className="bg-background p-6 rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-serif-heading text-2xl text-primary mb-2">Experience</h3>
              <p className="text-muted-foreground">
                Specialized in homoeopathy and alternative medicine treatment approaches
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-serif-heading text-2xl text-primary mb-2">Expertise</h3>
              <p className="text-muted-foreground">
                Holistic care combined with modern alternative medicine techniques
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-serif-heading text-2xl text-primary mb-2">Patient Focus</h3>
              <p className="text-muted-foreground">
                Individual assessment and customized treatment plans for optimal results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
