import React from "react";
import Image from "next/image";

interface SpeechBubbleProps {
  type: "up" | "down";
  text: string;
  position: {
    top: number;
    left: number;
  };
}

const ALT = {
  bubble: "Speech bubble",
} as const;

const SpeechBubble = ({ type, text, position }: SpeechBubbleProps) => {
  const bubbleSrc = type === "up" ? "/bubble-up.svg" : "/bubble-down.svg";
  const dimensions =
    type === "up"
      ? { width: 215, height: 116 }
      : { width: 239, height: 138.78 };

  return (
    <div
      className="absolute z-20"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <Image
        src={bubbleSrc}
        alt={ALT.bubble}
        width={dimensions.width}
        height={dimensions.height}
      />
      <div className="absolute top-4 left-4 text-text-black text-bodySm max-w-[160px]">
        {text}
      </div>
    </div>
  );
};

export default SpeechBubble;

