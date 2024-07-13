import React from "react";
import videosimage from "@/assets/videosimage.svg";
import Image from "next/image";

export default function EmpoweringKnowledge() {
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-32">
      <div className="flex flex-col items-center text-center justify-center">
        <h1 className="text-[31px] text-[#262626] capitalize font-[500] font-switzer">
          Empowering Knowledge For
        </h1>
        <h1 className="text-[31px] text-[#262626] capitalize font-[500] font-switzer -mt-4">
          Confident Financial Decisions
        </h1>
        <p className="text-[#595959] font-[400] text-[13px] font-switzer mt-4 w-[50%]">
          Access a wealth of financial wisdom through our educational resources.
          From webinars to articles, gain insights on budgeting, investing, and
          more. Equip yourself with the knowledge to make informed financial
          choices.
        </p>

        <div className="mt-16 items-center justify-center flex">
          <Image src={videosimage} alt="sectors" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
}
