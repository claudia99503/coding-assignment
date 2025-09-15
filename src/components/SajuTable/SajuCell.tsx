import React from "react";

interface SajuCellProps {
  topText: string;
  middleText: string;
  bottomText: string;
  backgroundColor: "#2F2F2F" | "#C23030" | "#18868C" | "#FFFFFF";
  textColor: "#FFFFFF" | "#000000";
  left: string;
  top: string;
}

const SajuCell = ({
  topText,
  middleText,
  bottomText,
  backgroundColor,
  textColor,
  left,
  top,
}: SajuCellProps) => {
  const isWhite = backgroundColor === "#FFFFFF";
  const borderStyle = isWhite ? "1px solid #000000" : "none";

  return (
    <div
      className="absolute z-10"
      style={{
        left,
        top,
        width: "55.45px",
        height: "55.45px",
        backgroundColor,
        borderRadius: "12.55px",
        border: borderStyle,
      }}
    >
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: "24.25px",
          top: "4.18px",
          width: "7px",
          height: "8px",
        }}
      >
        <span style={{ fontSize: "7.6px", color: textColor }}>{topText}</span>
      </div>

      <div
        className="absolute flex items-center justify-center"
        style={{
          left: "0px",
          top: "0px",
          width: "55.45px",
          height: "55.45px",
        }}
      >
        <span style={{ fontSize: "25.11px", color: textColor }}>
          {middleText}
        </span>
      </div>

      <div
        className="absolute flex items-center justify-center"
        style={{
          left: "20.34px",
          bottom: "4.27px",
          width: "17px",
          height: "12px",
        }}
      >
        <span style={{ fontSize: "8.37px", color: textColor }}>
          {bottomText}
        </span>
      </div>
    </div>
  );
};

export default SajuCell;

