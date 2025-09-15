import React from "react";
import Image from "next/image";

const ALT = {
  brush: "Brush",
  seukSeuk: "Seuk Seuk",
  curveLine: "Curve line",
} as const;

const RecordSection = () => {
  return (
    <div className="relative w-full h-[445px] bg-background-base bg-[#F3F2EF]">
      <div className="absolute right-6 top-[120px] z-10">
        <Image src="/brush.svg" alt={ALT.brush} width={120} height={285} />
      </div>

      <div className="absolute right-[115px] top-[140px] z-10">
        <Image src="/seuk-seuk.svg" alt={ALT.seukSeuk} width={70} height={50} />
      </div>

      <div className="absolute left-0 bottom-[78px] z-10">
        <Image
          src="/curve-line.svg"
          alt={ALT.curveLine}
          width={153}
          height={20}
        />
      </div>
    </div>
  );
};

export default RecordSection;

