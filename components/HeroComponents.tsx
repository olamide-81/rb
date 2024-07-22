import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import Phone from "@/assets/phone-hero.svg";

export default function HeroComponents() {
  return (
    <div className="max-w-screen-xl px-10 w-full mt-10">
      <div className="px-10 text-center text-white">
        <h1 className="sm:text-[49px] md:text-[40px] text-[30px] font-[500] font-switzer">
          Turn Your Financial
        </h1>
        <h1 className="sm:text-[49px] md:text-[40px] text-[30px] sm:pt-0 pt-4 font-[500] font-switzer -mt-6">
          Dreams Into Reality
        </h1>
        <div className="flex justify-center">
          <p className="font-switzer font-[400] md:mt-4 mt-2 md:w-[50%] md:text-[14px] text-[13px] sm:w-[70%] w-[100%]">
            Take control of your finances like never before. Combine powerful
            saving tools, educational resources, and exclusive investment
            opportunities to help you build and grow your wealth.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="md:flex items-center md:space-x-4 md:space-y-0 space-y-4 mt-10">
            <div className="bg-[#3C76E1] cursor-pointer px-4 py-3 rounded-lg flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <FaApple color="#fff" />
                <h1 className="text-white font-[200]">|</h1>
                <BiLogoPlayStore color="#fff" />
              </div>
              <h1 className="text-white font-switzer font-[500]">
                Download app
              </h1>
            </div>
            <div className="bg-white cursor-pointer border px-4 py-3 rounded-lg">
              <h1 className="text-[#262626] font-switzer font-[500]">
                Join community
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Image src={Phone} width={300} alt="phone" />
        </div>
      </div>
    </div>
  );
}
