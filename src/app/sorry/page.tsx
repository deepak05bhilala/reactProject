'use client';

import { useEffect, useState } from 'react';
import SorryGreeting from '../../components/SorryGreeting';
import BackgroundMusic from '../../components/BackgroundMusic';

export default function SorryPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="sorry-bg">
      <SorryGreeting />
      {mounted && (
        <BackgroundMusic volume={0.25} src="/sorry-music.mp3" />
      )}
    </div>
  );
}
