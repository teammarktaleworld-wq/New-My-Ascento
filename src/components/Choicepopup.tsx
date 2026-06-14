"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ascento-choice-popup-dismissed";

export default function ChoicePopup() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Don't show again if user already dismissed/chose in this session
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
    setTimeout(() => setShow(false), 250);
  };

  const handleChoice = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  if (!show) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

        @keyframes acp-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes acp-fade-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes acp-pop-in {
          from { opacity: 0; transform: translateY(24px) scale(.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes acp-pop-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(24px) scale(.94); }
        }
        @keyframes acp-bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }

        .acp-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(26,26,46,0.55);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          font-family: 'Nunito', sans-serif;
          animation: acp-fade-in .3s ease both;
        }
        .acp-overlay.closing { animation: acp-fade-out .25s ease both; }

        .acp-card {
          background: #FFFDF7;
          border-radius: 32px;
          max-width: 560px;
          width: 100%;
          padding: 40px 36px;
          position: relative;
          box-shadow: 0 30px 80px rgba(0,0,0,.25);
          border: 4px solid #FFF0E8;
          text-align: center;
          animation: acp-pop-in .4s cubic-bezier(.34,1.56,.64,1) both;
        }
        .acp-card.closing { animation: acp-pop-out .25s ease both; }

        .acp-close {
          position: absolute; top: 16px; right: 16px;
          width: 36px; height: 36px; border-radius: 50%;
          background: #FFF0F0; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; color: #FF6B6B; font-weight: 900;
          transition: background .2s, transform .2s;
        }
        .acp-close:hover { background: #FFE0E0; transform: rotate(90deg); }

        .acp-emoji {
          font-size: 48px;
          margin-bottom: 12px;
          display: inline-block;
          animation: acp-bounce 2s ease-in-out infinite;
        }

        .acp-title {
          font-family: 'Fredoka One', cursive;
          font-size: clamp(22px, 4vw, 30px);
          color: #1A1A2E;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .acp-subtitle {
          font-size: 14px;
          color: #777;
          font-weight: 700;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .acp-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .acp-option {
          display: flex; flex-direction: column; align-items: center;
          gap: 8px;
          padding: 24px 18px;
          border-radius: 22px;
          text-decoration: none;
          font-family: inherit;
          transition: transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s;
          border: 3px solid transparent;
        }
        .acp-option:hover {
          transform: translateY(-4px) scale(1.03);
        }

        .acp-option-playschool {
          background: linear-gradient(135deg, rgba(167,139,250,0.12), rgba(255,107,107,0.08));
          border-color: rgba(167,139,250,0.3);
        }
        .acp-option-playschool:hover {
          border-color: #A78BFA;
          box-shadow: 0 14px 32px rgba(167,139,250,.25);
        }

        .acp-option-abacus {
          background: linear-gradient(135deg, rgba(255,107,107,0.12), rgba(255,179,71,0.08));
          border-color: rgba(255,107,107,0.3);
        }
        .acp-option-abacus:hover {
          border-color: #FF6B6B;
          box-shadow: 0 14px 32px rgba(255,107,107,.25);
        }

        .acp-option-emoji { font-size: 40px; }
        .acp-option-title {
          font-family: 'Fredoka One', cursive;
          font-size: 17px;
          color: #1A1A2E;
        }
        .acp-option-desc {
          font-size: 12px;
          color: #888;
          font-weight: 700;
          line-height: 1.5;
        }
        .acp-option-cta {
          margin-top: 6px;
          font-size: 12px;
          font-weight: 900;
          padding: 6px 16px;
          border-radius: 50px;
          color: white;
        }
        .acp-option-playschool .acp-option-cta { background: #A78BFA; }
        .acp-option-abacus .acp-option-cta { background: #FF6B6B; }

        @media (max-width: 480px) {
          .acp-card { padding: 32px 20px; border-radius: 26px; }
          .acp-options { grid-template-columns: 1fr; gap: 12px; }
          .acp-option { padding: 20px 16px; }
        }
      `}</style>

      <div className={`acp-overlay${closing ? " closing" : ""}`} onClick={handleClose}>
        <div
          className={`acp-card${closing ? " closing" : ""}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Choose what you're looking for"
        >
          <button className="acp-close" onClick={handleClose} aria-label="Close">✕</button>

          <div className="acp-emoji">👋</div>
          <h2 className="acp-title">What are you looking for today?</h2>
          <p className="acp-subtitle">
            We have two amazing programmes for your child! Pick one to explore — or close this and browse freely. 😊
          </p>

          <div className="acp-options">
            <Link href="/playschool" className="acp-option acp-option-playschool" onClick={handleChoice}>
              <span className="acp-option-emoji">🧒</span>
              <span className="acp-option-title">Playschool</span>
              <span className="acp-option-desc">A fun, nurturing early years programme for little learners.</span>
              <span className="acp-option-cta">Explore Playschool →</span>
            </Link>

            <Link href="/" className="acp-option acp-option-abacus" onClick={handleChoice}>
              <span className="acp-option-emoji">🧮</span>
              <span className="acp-option-title">Ascento Abacus</span>
              <span className="acp-option-desc">Abacus, Vedic Maths & Brain Development programmes.</span>
              <span className="acp-option-cta">Explore Abacus →</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}