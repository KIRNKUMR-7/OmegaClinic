import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-card py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor's Profile Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Doctor's Image */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden border-[6px] border-background shadow-2xl ring-4 ring-accent/20 bg-gradient-to-b from-accent/5 to-accent/20">
            <Image
              src="/dr-mohan.webp"
              alt="Dr. M. Mohan – Homoeopathy & Alternative Medicine Consultant"
              width={600}
              height={600}
              priority
              className="w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-105"
              style={{
                objectPosition: 'center center',
              }}
            />
          </div>
          <h1 className="dr-name mt-6 text-3xl md:text-4xl text-primary text-center" style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700, textTransform: 'uppercase' }}>
            Dr. M. MOHAN<br />
            <span className="pt-suffix" style={{ fontSize: '0.6em', fontWeight: 500 }}>B.H.M.S., M.D<span style={{ fontSize: '0.7em', verticalAlign: 'middle' }}>(AM)</span>.</span>
          </h1>
          <p className="dr-title mt-4 text-xs sm:text-sm md:text-base text-center" style={{
            fontFamily: "var(--font-playfair), serif",
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#A33333',
            lineHeight: '1.3',
            padding: '0 8px'
          }}>
            HOMOEOPATHY &amp; ALTERNATIVE MEDICINE CONSULTANT
          </p>
          <p className="mt-2 text-center text-[11px] opacity-70" style={{ letterSpacing: '0.15em', fontWeight: 600 }}>Reg No : 2742</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif-heading text-4xl md:text-5xl text-primary">
                About <span className="text-accent">Omega Clinic</span>
              </h2>
              <div className="mt-2 inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-sm font-semibold tracking-widest text-accent uppercase">Established Since 2009</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome. I am <strong className="text-primary">Dr. M. Mohan</strong>, and my mission is to guide you on a journey toward optimal health using the most effective tools nature and science have to offer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a world of 'quick fixes,' I take the time to listen to your unique story. Whether you are navigating chronic challenges or simply looking to enhance your daily wellbeing, I provide expert guidance in <strong className="text-primary">Homoeopathy, Alternative Medicine &amp; Positive Pshycology</strong> to help you regain your natural balance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's work together to build a foundation for a healthier, more vibrant life.
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
              <h3 className="font-serif-heading text-2xl text-primary mb-3">Expertise</h3>
              <ol className="text-muted-foreground space-y-1 list-none">
                <li className="flex gap-2"><span className="text-accent font-semibold">1.</span> Homoeopathy &amp; Alternative Medicine</li>
                <li className="flex gap-2"><span className="text-accent font-semibold">2.</span> Meditation Initiations</li>
              </ol>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-serif-heading text-2xl text-primary mb-2">Patient Focus</h3>
              <p className="text-muted-foreground">
                Individual assessment and customized treatment plans for optimal results
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border hover:border-accent transition">
              <h3 className="font-serif-heading text-2xl text-primary mb-2">Integrated Medicine Practitioner</h3>
              <p className="text-muted-foreground">
                Treating the whole person — mind, body & spirit — by blending conventional medicine with complementary therapies like yoga and nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
