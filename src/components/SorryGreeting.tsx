'use client';

import { useState } from 'react';

const apologyLines = [
  "I know my words hurt you deeply, and I'm truly sorry. Please give me a chance to make things right.",
  "I regret what I said. Looking back, I realise I have some unhealed parts of myself that I need to work on. I wasn't okay that day, but that's not an excuse. You didn't deserve to be spoken to the way I spoke to you.",
  "I didn't realise immediately how much I had hurt you, but I understand now what I messed up, and I genuinely regret it.",
  "I'm not asking you to forgive me immediately. I just want you to know that I'm truly sorry, and I'm willing to put in the effort to rebuild the trust I've broken.",
  "I can't afford to lose you, Pragya. You mean a lot to me, and I sincerely hope you'll understand where I'm coming from. More importantly, I hope you'll give me the chance to show you through my actions that I can do better.",
];

const closingLine = "Take all the time you need. I'll respect your space.";

export default function SorryGreeting() {
  const [step, setStep] = useState<'closed' | 'message' | 'closing'>('closed');

  if (step === 'closed') {
    return (
      <div className="sorry-card-wrapper">
        <div className="sorry-card sorry-card-closed">
          <div className="sorry-envelope-seal">💜</div>
          <h1 className="sorry-card-title">For Pragya</h1>
          <p className="sorry-card-subtitle">A message for you</p>
          <button
            type="button"
            className="sorry-open-btn"
            onClick={() => setStep('message')}
          >
            Open card
          </button>
        </div>
      </div>
    );
  }

  if (step === 'message') {
    return (
      <div className="sorry-card-wrapper">
        <div className="sorry-card sorry-card-open">
          <h1 className="sorry-letter-heading">I&apos;m Sorry</h1>
          <p className="sorry-text-line sorry-text-line-static" style={{ animationDelay: '0.2s' }}>
            Hi Pragya,
          </p>
          <div className="sorry-letter-body">
            {apologyLines.map((line, i) => (
              <p
                key={i}
                className="sorry-text-line"
                style={{ animationDelay: `${0.5 + i * 0.55}s` }}
              >
                {line}
              </p>
            ))}
          </div>
          <button
            type="button"
            className="sorry-open-btn sorry-next-btn"
            onClick={() => setStep('closing')}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sorry-card-wrapper">
      <div className="sorry-card sorry-card-open sorry-card-closing">
        <p className="sorry-closing-text sorry-text-line" style={{ animationDelay: '0.3s' }}>
          {closingLine}
        </p>
        <span className="sorry-closing-heart sorry-text-line" style={{ animationDelay: '0.9s' }}>
          💜
        </span>
      </div>
    </div>
  );
}
