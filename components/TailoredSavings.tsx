import React from "react";
import rafsect from "@/assets/rafsect.svg"
import Image from "next/image";

export default function TailoredSavings() {
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-32">
      <div className="flex flex-col items-center text-center justify-center">
        <h1 className="text-[31px] text-[#262626] capitalize font-[500] font-switzer">
          Tailored savings strategies
        </h1>
        <h1 className="text-[31px] text-[#262626] capitalize font-[500] font-switzer -mt-4">
         for your unique goals
        </h1>
        <p className="text-[#595959] font-[400] text-[13px] font-switzer mt-4 w-[50%]">
          Customize multiple savings plans for different objectives, whether
          it's for rent, education, or emergencies. Set personalized targets,
          track your progress, and automate your savings to reach your financial
          milestones effortlessly
        </p>

        <div className="mt-16 items-center justify-center flex">
            <Image src={rafsect} alt="sectors" className="w-[70%]"/>
        </div>
      </div>
    </div>
  );
}
