import React, { forwardRef, useState, useEffect, useRef } from "react";
import Image from "next/image";

interface GameBoxProps {
  onHit: () => void;
}

const GameBox = forwardRef<HTMLDivElement, GameBoxProps>(({ onHit }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showHammer, setShowHammer] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!boxRef.current) return;

      const boxRect = boxRef.current.getBoundingClientRect();
      const boxWidth = boxRect.width;
      const boxHeight = boxRect.height;

      const imageSize = 80;

      const x = Math.random() * (boxWidth - imageSize);
      const y = Math.random() * (boxHeight - imageSize);

      setPosition({ x, y });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleHit = () => {
    onHit();
    setShowHammer(true);
    setTimeout(() => setShowHammer(false), 1000);
  };

  return (
    <div
      ref={(node) => {
        boxRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      style={{
        width: "90vw",
        height: "70vw",
        maxWidth: "450px",
        maxHeight: "450px",
        border: "6px solid pink",
        borderRadius: "15px",
        margin: "30px auto",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* Moving Image */}
      <div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: "80px",
          height: "80px",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <Image
          src="/reactProject/my-image.jpg" // ✅ Adjusted for GitHub Pages
          alt="My Moving"
          width={80}
          height={80}
          style={{
            cursor: "pointer",
            userSelect: "none",
            pointerEvents: "auto",
            zIndex: 10,
          }}
          onClick={handleHit}
          draggable={false}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            width: "100%",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ff0066",
            textShadow: "1px 1px 3px white",
            zIndex: 11,
          }}
        >
          HIT ME!
        </div>
      </div>

      {/* Hammer Image */}
      {showHammer && (
        <Image
          src="/reactProject/hammer.jpg" // ✅ Adjusted for GitHub Pages
          alt="Hammer Hit"
          width={80}
          height={80}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            pointerEvents: "none",
            userSelect: "none",
            opacity: 1,
            zIndex: 20,
          }}
          draggable={false}
        />
      )}
    </div>
  );
});

GameBox.displayName = "GameBox";
export default GameBox;
