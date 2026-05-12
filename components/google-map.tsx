export default function GoogleMap() {
  return (
    <section className="bg-background py-12 md:py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2">Visit Us</h3>
          <p className="text-muted-foreground">Find us on the map and get directions</p>
        </div>

        <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4721342670155!2d78.14771617489612!3d11.660914488546826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1a9bd64dc35%3A0xa85c75a93746509e!2sOMEGA%20CLINIC%20Dr.Mohan%2CBHMS.%2CMD(AM).%2C%20Homoeopathy%20%26%20Alternative%20Medicine%20Consultant.!5e0!3m2!1sen!2sin!4v1778305756170!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Omega Clinic Location"
          />
        </div>
      </div>
    </section>
  )
}
