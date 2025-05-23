'use client';
import { useState, useRef } from 'react';
import GameBox from '../components/Game';
import WatcherImage from '../components/WatcherImage';
import PopupText from '../components/PopupText';

const popupMessages = [
    'Ouch',
    'Nice Aim',
    'you got me',
  'You are so Beautiful',
  'Will you come on Date with me ?',
  'I will buy you IceCream',
  'I cant stop thinking about you',

];

export default function Home() {
  const [popup, setPopup] = useState<{ text: string; position: { x: number; y: number } } | null>(null);
  const messageIndexRef = useRef(0);

  const handleHit = () => {
    const message = popupMessages[messageIndexRef.current];
    messageIndexRef.current = (messageIndexRef.current + 1) % popupMessages.length;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const boxCenterX = screenWidth / 2;
    const boxCenterY = screenHeight / 2;
    const boxWidth = 400;
    const boxHeight = 400;

    const herImageZone = { x: 0, y: 0, width: 120, height: 100 };

    let x = 0;
    let y = 0;

    do {
      x = Math.floor(Math.random() * screenWidth);
      y = Math.floor(Math.random() * screenHeight);
    } while (
      (x > boxCenterX - boxWidth / 2 &&
        x < boxCenterX + boxWidth / 2 &&
        y > boxCenterY - boxHeight / 2 &&
        y < boxCenterY + boxHeight / 2) ||
      (x > herImageZone.x &&
        x < herImageZone.x + herImageZone.width &&
        y > herImageZone.y &&
        y < herImageZone.y + herImageZone.height)
    );

    setPopup({ text: message, position: { x, y } });
    setTimeout(() => setPopup(null), 1200);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#fff0f5',
      }}
    >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <WatcherImage />
        {popup && <PopupText text={popup.text} position={popup.position} />}
        <GameBox onHit={handleHit} />
      </div>
    </div>
  );
}
