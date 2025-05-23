'use client';

import { useEffect, useState } from 'react';

interface PopupTextProps {
  text: string;
  position: { x: number; y: number };
}

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function PopupText({ text, position }: PopupTextProps) {
const [clampedPos, setClampedPos] = useState(position);
  const windowWidth = useWindowWidth();

  const fontSize =
    windowWidth < 480 ? '10px' :
    windowWidth < 768 ? '12px' :
    windowWidth < 1024 ? '14px' :
    '16px';

  useEffect(() => {
    const margin = 0; // buffer space from edges
    // const x = Math.max(margin, Math.min(window.innerWidth - margin, position.x));
    // const y = Math.max(margin, Math.min(window.innerHeight - margin, position.y));

        const x = Math.random() * 100 ;
    const y = Math.max(margin, Math.min(window.innerHeight - margin, position.y));

    setClampedPos({ x, y });
  }, [position]);

  return (
    <div
      style={{
        position: 'fixed',
        top: clampedPos.y,
        left: clampedPos.x,
        transform: 'translate(0%, -50%)',
        fontSize: fontSize,
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
