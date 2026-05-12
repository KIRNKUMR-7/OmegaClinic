export default function WhatsAppFloatButton() {
  return (
    <>
      <a
        href="https://wa.me/919791844184?text=Hello%20Dr.%20M.%20Mohan%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Omega%20Clinic.%20Please%20share%20the%20available%20slots.%20Thank%20you."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with Omega Clinic"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          width: 64px;
          height: 64px;
          bottom: 25px;
          right: 25px;
          background-color: #25d366;
          color: #fff;
          border-radius: 50%;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .whatsapp-float:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 28px rgba(0,0,0,0.3);
        }
        .whatsapp-icon {
          width: 38px;
          height: 38px;
        }
        @media (max-width: 480px) {
          .whatsapp-float {
            width: 56px;
            height: 56px;
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-icon {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </>
  )
}
