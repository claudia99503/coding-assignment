import React from "react";
import Image from "next/image";
import { sajuData } from "../../data/sajuData";

const ALT = {
  bubble: "Speech bubble",
  character: "Character",
} as const;

const TableSection = () => {
  const firstName = sajuData.name.slice(1);

  return (
    <div className="relative w-full h-[306px] bg-background-base bg-[#F3F2EF]">
      <div className="absolute left-6 top-[-100px] z-20">
        <div className="relative">
          <Image
            src="/bubble-down.svg"
            alt={ALT.bubble}
            width={239}
            height={138.78}
          />
          <div className="absolute inset-x-0 top-[34px] bottom-[56.78px] flex items-center justify-center px-[34px]">
            <p className="text-text-black text-bodySm whitespace-pre-line text-center">
              {"제가 " + firstName + "님의 사주를\n보기 쉽게 표로 정리했어요"}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-[306px] z-10">
        <div className="relative w-full h-full overflow-hidden fade-bottom">
          <Image
            src="/record-character.svg"
            alt={ALT.character}
            fill
            className="object-cover"
            sizes="448px"
          />
        </div>
      </div>
    </div>
  );
};

export default TableSection;

