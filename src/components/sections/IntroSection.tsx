import React from "react";
import Image from "next/image";
import { sajuData } from "../../data/sajuData";

const CHAPTER_LABEL = "제 1장";
const TITLE_TEXT = "나의 사주 팔자";
const ALT = {
  background: "Background",
  divider: "Divider line",
  character: "Character",
  bubble: "Speech bubble",
} as const;

const IntroSection = () => {
  const firstName = sajuData.name.slice(1);

  return (
    <div className="relative">
      <div className="relative w-full h-[652px]">
        \
        <div className="absolute inset-0">
          <Image
            src="/bg-top.svg"
            alt={ALT.background}
            fill
            className="object-cover"
          />
        </div>
        \
        <div className="absolute inset-x-0 top-[84px] z-10 flex flex-col items-center">
          <h1 className="text-[20px] text-white font-bold">{CHAPTER_LABEL}</h1>
          <div className="mt-[12px]">
            <Image
              src="/divider-line.svg"
              alt={ALT.divider}
              width={157}
              height={20}
            />
          </div>
          <h2 className="mt-[12px] text-[20px] text-white font-bold">
            {TITLE_TEXT}
          </h2>
        </div>
        \
        <div className="absolute right-0 top-[210px] z-10">
          <div className="h-[442px] overflow-hidden fade-bottom">
            <Image
              src="/intro-character.svg"
              alt={ALT.character}
              width={298}
              height={521}
            />
          </div>
        </div>
        <div className="absolute top-[613px] left-6 z-20">
          <div className="relative">
            <Image
              src="/bubble-up.svg"
              alt={ALT.bubble}
              width={215}
              height={139}
            />
            <div className="absolute inset-x-0 top-[45px] bottom-[22px] flex items-center justify-center px-10">
              <p className="text-text-black text-bodySm whitespace-pre-line text-center">
                {"이제 본격적으로\n" +
                  firstName +
                  "님의 사주팔자를\n분석해볼 차례네요."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

