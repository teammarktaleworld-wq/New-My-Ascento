"use client";

export default function WhatsAppButton() {
  const phone = "919810366417";
  const message = encodeURIComponent(
    "Hello! I'm interested in learning more about Ascento Abacus & Playschool programs. Could you please share details?"
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ascento Abacus on WhatsApp"
        className="whatsapp-fab"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.651 4.903 1.889 7.043L2 30l7.148-1.874A14.003 14.003 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.5a11.44 11.44 0 0 1-5.84-1.605l-.418-.25-4.244 1.113 1.132-4.134-.274-.435A11.476 11.476 0 0 1 4.5 16.003C4.5 9.659 9.659 4.5 16.003 4.5c6.342 0 11.497 5.159 11.497 11.503S22.345 27.5 16.003 27.5zm6.312-8.618c-.346-.173-2.046-1.01-2.363-1.126-.317-.115-.548-.173-.778.174-.23.346-.893 1.126-1.095 1.356-.201.23-.403.26-.748.086-.346-.173-1.46-.537-2.782-1.717-1.029-.918-1.724-2.05-1.926-2.396-.201-.346-.021-.533.151-.705.155-.154.346-.403.519-.605.173-.201.23-.346.346-.577.115-.23.058-.432-.029-.605-.086-.173-.778-1.876-1.066-2.568-.28-.674-.564-.583-.778-.594l-.663-.011c-.23 0-.605.086-.922.432-.317.346-1.21 1.183-1.21 2.884 0 1.701 1.24 3.344 1.412 3.575.173.23 2.44 3.727 5.913 5.228.826.356 1.47.569 1.972.728.828.263 1.582.226 2.177.137.664-.1 2.046-.835 2.334-1.642.288-.806.288-1.497.201-1.642-.086-.144-.317-.23-.663-.403z" />
        </svg>
        <span className="whatsapp-tooltip">
          Chat for Enquiry
        </span>
      </a>

      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 9999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .whatsapp-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 22px rgba(37, 211, 102, 0.5);
        }
        .whatsapp-fab:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .whatsapp-tooltip {
          position: absolute;
          left: 64px;
          bottom: 50%;
          transform: translateY(50%) translateY(4px);
          background: #1a1a2e;
          color: #fff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          padding: 6px 12px;
          border-radius: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .whatsapp-tooltip::before {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-right-color: #1a1a2e;
        }

        /* Pulse ring */
        .whatsapp-fab::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #25D366;
          opacity: 0;
          animation: wa-pulse 2.5s ease-out infinite;
        }
        @keyframes wa-pulse {
          0%   { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0;   transform: scale(1.5); }
        }
      `}</style>
    </>
  );
}