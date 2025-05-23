import React, { forwardRef, useState, useEffect, useRef } from "react";

interface GameBoxProps {
  onHit: () => void;
}

const GameBox = forwardRef<HTMLDivElement, GameBoxProps>(({ onHit }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showHammer, setShowHammer] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFrozen || !boxRef.current) return;
  
      const boxWidth = boxRef.current.clientWidth;
      const boxHeight = boxRef.current.clientHeight;
  
      const imageSize = 80;
  
      const x = Math.floor(Math.random() * (boxWidth - imageSize));
      const y = Math.floor(Math.random() * (boxHeight - imageSize));
  
      setPosition({ x, y });
    }, 600);
  
    return () => clearInterval(interval);
  }, [isFrozen]);
  
  const handleHit = () => {
    onHit();
    setIsFrozen(true);
    setShowHammer(true);

    setTimeout(() => {
      setShowHammer(false);
      setIsFrozen(false);
    }, 2000);
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
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: "80px",
    textAlign: "center",
    pointerEvents: "none",
    transition: "left 0.3s ease, top 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    userSelect: "none",
  }}
>
  <img
    src="/my-image.jpg"
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
      marginTop: "4px",
      fontSize: "14px",
      fontWeight: "bold",
      color: "green",
      textShadow: "1px 1px 3px white",
      zIndex: 11,
    }}
  >
    HIT ME!
  </div>
</div>

      {/* Hammer Image */}
      {showHammer && (
        <div>
        <img
          src="/hammer.jpg"
          alt="Hammer Hit"
          width={80}
          height={80}
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: "none",
            userSelect: "none",
            opacity: 1,
            zIndex: 20,
            transition: "left 0.3s ease, top 0.3s ease",
          }}
          draggable={false}
        />

        </div>
      )}
    </div>
  );
});

GameBox.displayName = "GameBox";
export default GameBox;
