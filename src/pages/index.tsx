import React from "react";
import IntroSection from "../components/sections/IntroSection";
import RecordSection from "../components/sections/RecordSection";
import TableSection from "../components/sections/TableSection";
import WritingSection from "../components/sections/WritingSection";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="w-[448px]">
        <IntroSection />
        <RecordSection />
        <TableSection />
        <WritingSection />
      </div>
    </div>
  );
}

