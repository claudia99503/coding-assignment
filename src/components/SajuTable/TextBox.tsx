import React from "react";

interface TextBoxProps {
  left: string;
  top: string;
  width: string;
  height: string;
  text: string;
  fontSize: string;
  bold?: boolean;
  style?: React.CSSProperties;
}

function TextBox({
  left,
  top,
  width,
  height,
  text,
  fontSize,
  bold = false,
  style,
}: TextBoxProps) {
  return (
    <div
      className="absolute z-10 flex items-center justify-center"
      style={{ left, top, width, height, ...style }}
    >
      <span className={`${fontSize} leading-none ${bold ? "font-bold" : ""}`}>
        {text}
      </span>
    </div>
  );
}

export default TextBox;

