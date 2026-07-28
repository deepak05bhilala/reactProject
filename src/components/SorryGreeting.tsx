'use client';

import { useState } from 'react';

const pages = [
  {
    lines: [
      'Hi Pragya,',
      "I know my words hurt you deeply, and I'm truly sorry. Please give me a chance to make things right.",
      "I regret what I said. Looking back, I realise I have some unhealed parts of myself that I need to work on. I wasn't okay that day, but that's not an excuse. You didn't deserve to be spoken to the way I spoke to you.",
    ],
  },
  {
    lines: [
      "I didn't realise immediately how much I had hurt you, but I understand now what I messed up, and I genuinely regret it.",
      "I'm not asking you to forgive me immediately. I just want you to know that I'm truly sorry, and I'm willing to put in the effort to rebuild the trust I've broken.",
    ],
  },
  {
    lines: [
      "I can't afford to lose you, Pragya. You mean a lot to me, and I sincerely hope you'll understand where I'm coming from. More importantly, I hope you'll give me the chance to show you through my actions that I can do better.",
      "Take all the time you need. I'll respect your space.",
    ],
    closing: true,
  },
];

type Step = 'closed' | 1 | 2 | 3;

export default function SorryGreeting() {
  const [step, setStep] = useState<Step>('closed');

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
            onClick={() => setStep(1)}
          >
            Open card
          </button>
        </div>
      </div>
    );
  }

  const pageIndex = step - 1;
  const page = pages[pageIndex];
  const isLastPage = step === 3;

  return (
    <div className="sorry-card-wrapper">
      <div className={`sorry-card sorry-card-open${isLastPage ? ' sorry-card-closing' : ''}`}>
        {step === 1 && (
          <div className="sorry-page-photo-wrap sorry-text-line" style={{ animationDelay: '0.1s' }}>
            <img
              src="/pragya-photo.png"
              alt="Pragya"
              className="sorry-page-photo"
            />
          </div>
        )}

        {!isLastPage && <h1 className="sorry-letter-heading">I&apos;m Sorry</h1>}

        <div className="sorry-letter-body">
          {page.lines.map((line, i) => (
            <p
              key={i}
              className={`sorry-text-line${isLastPage && i === page.lines.length - 1 ? ' sorry-closing-text' : ''}${i === 0 && pageIndex === 0 ? ' sorry-text-line-static' : ''}`}
              style={{ animationDelay: `${0.3 + i * 0.45}s` }}
            >
              {line}
            </p>
          ))}
        </div>

        {isLastPage && (
          <span className="sorry-closing-heart sorry-text-line" style={{ animationDelay: '1s' }}>
            💜
          </span>
        )}

        <div className="sorry-page-dots" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span key={n} className={`sorry-page-dot${step === n ? ' sorry-page-dot-active' : ''}`} />
          ))}
        </div>

        {!isLastPage && (
          <button
            type="button"
            className="sorry-open-btn sorry-next-btn"
            onClick={() => setStep((step + 1) as Step)}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
