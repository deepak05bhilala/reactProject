'use client';

import { useEffect, useState } from 'react';

interface PopupTextProps {
  text: string;
  position: { x: number; y: number };
}

export default function PopupText({ text, position }: PopupTextProps) {
  const [clampedPos, setClampedPos] = useState(position);

  useEffect(() => {
    const margin = 80; // buffer space from edges
    const x = Math.max(margin, Math.min(window.innerWidth - margin, position.x));
    const y = Math.max(margin, Math.min(window.innerHeight - margin, position.y));

    setClampedPos({ x, y });
  }, [position]);

  return (
    <div
      style={{
        position: 'fixed',
        top: clampedPos.y,
        left: clampedPos.x,
        transform: 'translate(-50%, -50%)',
        fontSize: '2rem',
        padding: '1rem 1.5rem',
        background: 'pink',
        color: 'white',
        borderRadius: '50% 50% 40% 40%',
        boxShadow: '0 0 10px rgba(255, 0, 100, 0.4)',
        pointerEvents: 'none',
        zIndex: 1000,
        whiteSpace: 'nowrap',
      }}
    >
      ❤️ {text}
    </div>
  );
}
