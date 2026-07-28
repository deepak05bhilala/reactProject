'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic({
  volume = 0.4,
  src = '/radwimps-feat-official-lyric-video_KhBVeNla.mp3',
}: {
  volume?: number;
  src?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    // Browsers block audio autoplay until the user interacts with the page,
    // so we wait for the first tap/click instead of calling play() on mount
    // (which would throw a NotAllowedError on first load).
    const startOnInteraction = () => {
      const p = audio.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };
    window.addEventListener('pointerdown', startOnInteraction, { once: true });

    return () => window.removeEventListener('pointerdown', startOnInteraction);
  }, [volume]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      const p = audio.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 2000,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          background: 'rgba(255, 255, 255, 0.85)',
          boxShadow: '0 4px 14px rgba(180, 100, 140, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
        }}
      >
        {playing ? '🔊' : '🔇'}
      </button>
    </>
  );
}
