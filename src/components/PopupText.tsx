'use client';

import { useEffect, useState } from 'react';

interface PopupTextProps {
  text: string;
  position: { x: number; y: number };
}

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function PopupText({ text, position }: PopupTextProps) {
const [clampedPos, setClampedPos] = useState(position);
  const windowWidth = useWindowWidth();

  const fontSize =
    windowWidth < 480 ? '18px' :
    windowWidth < 768 ? '22px' :
    windowWidth < 1024 ? '26px' :
    '30px';

  const popupWidth = Math.min(windowWidth * 0.8, 320);

  useEffect(() => {
    const margin = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(vw * 0.8, 320);

    const maxX = Math.max(margin, vw - width - margin);
    const x = Math.min(Math.max(margin, position.x), maxX);
    const y = Math.min(Math.max(60, position.y), vh - 60);

    setClampedPos({ x, y });
  }, [position]);

  return (
    <div
      className="love-popup"
      style={{
        position: 'fixed',
        top: clampedPos.y,
        left: clampedPos.x,
        transform: 'translate(0%, -50%)',
        fontSize: fontSize,
        lineHeight: 1.3,
        padding: '0.7rem 1.2rem',
        borderRadius: '18px',
        maxWidth: `${popupWidth}px`,
        textAlign: 'center',
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      ❤️ {text}
    </div>
  );
}
