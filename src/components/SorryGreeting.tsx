'use client';

import { useState } from 'react';

const apologyLines = [
  'I know my words hurt you deep, please give me a chance to fix things.',
  'I regret what I said. I have something unhealed in myself as well, I realise that day...',
  "I can't afford to lose you....",
];

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
          Take your time
        </p>
        <span className="sorry-closing-heart sorry-text-line" style={{ animationDelay: '0.9s' }}>
          💜
        </span>
      </div>
    </div>
  );
}
