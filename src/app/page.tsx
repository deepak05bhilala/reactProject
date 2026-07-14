'use client';
import { useState, useRef, useEffect } from 'react';
import GameBox from '../components/Game';
import WatcherImage from '../components/WatcherImage';
import PopupText from '../components/PopupText';
import BackgroundMusic from '../components/BackgroundMusic';

const popupMessages = [
    'Welcome Pragya  💜 ',
    'Ouch !! it hurts 🤕',
    'Nice Aim 🎯',
    'you got me ',
  'You are so Beautiful 👸',
  'Every time you smile, my heart skips a beat 💝',
  'Your smile is the prettiest 👩😊',
  'Your eyes hold a world where I want to get lost 🌍',
  'sometimes I crave to hold your hand 🤝🏻',
  'I love being around you 😃',
  'I think you should give me a chance 🫱🫲 ',
  'My eyes brighten up whenever I see you 🤩',
  'sachhii, line nhi maar raha 🥺',

  'will you come on a beach side dosa date with me? 👧 🌹 👦 ',
];

const floatingHearts = [
  { left: '6%', emoji: '💖', size: 22, duration: 11, delay: 0 },
  { left: '16%', emoji: '💕', size: 28, duration: 14, delay: 2 },
  { left: '27%', emoji: '💗', size: 18, duration: 9, delay: 4 },
  { left: '38%', emoji: '🩷', size: 26, duration: 13, delay: 1 },
  { left: '49%', emoji: '💘', size: 20, duration: 10, delay: 5 },
  { left: '60%', emoji: '💞', size: 30, duration: 15, delay: 3 },
  { left: '71%', emoji: '💓', size: 22, duration: 12, delay: 6 },
  { left: '82%', emoji: '💜', size: 24, duration: 11, delay: 2.5 },
  { left: '91%', emoji: '💝', size: 18, duration: 9.5, delay: 4.5 },
];

export default function Home() {
  const [popup, setPopup] = useState<{ text: string; position: { x: number; y: number } } | null>(null);
  const [mounted, setMounted] = useState(false);
  const messageIndexRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    setTimeout(() => setPopup(null), 1500);
  };

  return (
    <div
      className="romantic-bg"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {mounted && (
        <>
          <BackgroundMusic />
          <div className="hearts-layer" aria-hidden="true">
            {floatingHearts.map((h, i) => (
              <span
                key={i}
                className="floating-heart"
                style={{
                  left: h.left,
                  fontSize: `${h.size}px`,
                  animationDuration: `${h.duration}s`,
                  animationDelay: `${h.delay}s`,
                }}
              >
                {h.emoji}
              </span>
            ))}
          </div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <WatcherImage />
            {popup && <PopupText text={popup.text} position={popup.position} />}
            <GameBox onHit={handleHit} />
          </div>
        </>
      )}
    </div>
  );
}
