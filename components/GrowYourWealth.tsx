import React from "react";
import one from "@/assets/one.svg";
import two from "@/assets/two.svg";
import three from "@/assets/three.svg";
import four from "@/assets/four.svg";
import Image from "next/image";

export default function GrowYourWealth() {
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-32">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[28px] text-[#262626] capitalize font-[500] font-switzer text-center">
          Grow your wealth without the hassle.
        </h1>
        <h1 className="text-[28px] text-[#3C76E1] capitalize font-[500] font-switzer text-center -mt-2">
          We invest you relax.
        </h1>
        <div className="flex items-center justify-center space-x-10 mt-10">
          <div className="w-[40%]">
            <Image src={one} alt="One" />
          </div>
          <div className="w-[40%]">
            <Image src={two} alt="two" />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-10 mt-10">
          <div className="w-[40%]">
            <Image src={three} alt="three" />
          </div>
          <div className="w-[40%]">
            <Image src={four} alt="four" />
          </div>
        </div>
      </div>
    </div>
  );
}
