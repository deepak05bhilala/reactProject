'use client';

import { useState } from 'react';

const apologyLines = [
  'Hi Pragya,',
  "I'm truly sorry for how I spoke to you. I was rude and disrespectful, and that wasn't okay.",
  "You didn't deserve to be treated that way. I see that now, and I regret it.",
  "I'm not asking you to forgive me right away — I just wanted you to know I'm sorry, and I'm trying to be better.",
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
