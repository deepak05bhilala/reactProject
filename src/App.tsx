// src/App.tsx
import { useState, useRef } from "react";
import GameBox from "./components/Game";
import WatcherImage from "./components/WatcherImage";
import PopupText from "./components/PopupText";

const popupMessages = ["I love you"];

function App() {
  const [popup, setPopup] = useState<{
    text: string;
    position: { x: number; y: number };
  } | null>(null);
  const gameBoxRef = useRef<HTMLDivElement>(null);

  const handleHit = () => {
    const message =
      popupMessages[Math.floor(Math.random() * popupMessages.length)];

    if (!gameBoxRef.current) return;

    const rect = gameBoxRef.current.getBoundingClientRect();

    const side = Math.floor(Math.random() * 4); // 0=top,1=right,2=bottom,3=left
    let x = 0;
    let y = 0;

    const padding = 20; // closer distance from the box
    const { innerWidth, innerHeight } = window;

    switch (side) {
      case 0: // top
        x = rect.left + Math.random() * rect.width;
        y = Math.max(rect.top - padding, padding);
        break;
      case 1: // right
        x = Math.min(rect.right + padding, innerWidth - padding);
        y = rect.top + Math.random() * rect.height;
        break;
      case 2: // bottom
        x = rect.left + Math.random() * rect.width;
        y = Math.min(rect.bottom + padding, innerHeight - padding);
        break;
      case 3: // left
        x = Math.max(rect.left - padding, padding);
        y = rect.top + Math.random() * rect.height;
        break;
    }

    setPopup({ text: message, position: { x, y } });
    setTimeout(() => setPopup(null), 3000);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding:
          "env(safe-area-inset-top, 10px) env(safe-area-inset-right, 10px) env(safe-area-inset-bottom, 10px) env(safe-area-inset-left, 10px)",
        backgroundColor: "#fff0f5",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <WatcherImage />
      {popup && <PopupText text={popup.text} position={popup.position} />}
      <GameBox onHit={handleHit} ref={gameBoxRef} />
    </div>
  );
}

export default App;
