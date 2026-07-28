'use client';

import { useState } from 'react';

const apologyLines = [
  'Hi Pragya,',
  'I know my words hurt you deep. Please give me a chance to fix things.',
  'I regret what I said. I have some unhealed parts in myself as well — I realise that now.',
  "That day, I wasn't okay inside, but that doesn't make what I did okay. You didn't deserve to be spoken to that way.",
  "I'm not asking you to forgive me right away. I just want you to know I'm sorry, and I want to make things right.",
  'Take your time. 💜',
];

export default function SorryGreeting() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sorry-card-wrapper">
      {!isOpen ? (
        <div className="sorry-card sorry-card-closed">
          <div className="sorry-envelope-seal">💜</div>
          <h1 className="sorry-card-title">For Pragya</h1>
          <p className="sorry-card-subtitle">A message for you</p>
          <button
            type="button"
            className="sorry-open-btn"
            onClick={() => setIsOpen(true)}
          >
            Open card
          </button>
        </div>
      ) : (
        <div className="sorry-card sorry-card-open">
          <h1 className="sorry-letter-heading">I&apos;m Sorry</h1>
          <div className="sorry-letter-body">
            {apologyLines.map((line, i) => (
              <p
                key={i}
                className="sorry-text-line"
                style={{ animationDelay: `${0.4 + i * 0.55}s` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
