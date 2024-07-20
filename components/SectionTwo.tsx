import Image from "next/image";
import RafPlan from "@/assets/RafPlan.svg";
import React from "react";

export default function SectionTwo() {
  return (
    <div className="max-w-[1280px] bg-[#F9FAFB] mx-auto px-10 w-full pt-20">
      <div className="flex justify-between md:items-start items-center md:flex-row flex-col-reverse">
        <div className="md:w-[50%] w-[80%] md:pt-0 pt-6">
          <h1 className="text-[31px] md:text-start text-center font-[500] font-switzer pb-6">
            Save Smarter, Earn Returns, and Watch Your Dreams Become Reality
          </h1>
          <div className="md:text-start text-center">
            <p className="text-[14px] text-[#52525B] font-[400] font-switzer">
              RAF Plans are goal-oriented saving solutions that help you reach
              your financial targets while earning attractive returns. Whether
              it's a dream vacation, education fund, or a new home, we've got a
              plan for you.
            </p>
          </div>
        </div>
        <div>
          <Image src={RafPlan} alt="raf-plan" width={300} />
        </div>
      </div>
    </div>
  );
}
