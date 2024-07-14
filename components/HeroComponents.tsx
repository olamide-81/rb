import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { RiShieldFlashLine } from "react-icons/ri";
import community from "@/assets/community.svg"
import Image from "next/image";

export default function HeroComponents() {
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-10">
      <div>
        <h1 className="text-[49px] font-[500] font-switzer text-[#262626]">
          Turn Your Financial
        </h1>
        <h1 className="text-[49px] font-[500] font-switzer text-[#262626] -mt-6">
          Dreams Into Reality
        </h1>
        <p className="font-switzer font-[400] mt-4 w-[50%] text-[#595959]">
          Take control of your finances like never before. Combine powerful
          saving tools, educational resources, and exclusive investment
          opportunities to help you build and grow your wealth
        </p>

        <div className="flex items-center space-x-4 mt-10">
          <div className="bg-[#3C76E1] cursor-pointer px-4 py-3 rounded-lg flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <FaApple color="#fff" />
              <h1 className="text-white font-[200]">|</h1>
              <BiLogoPlayStore color="#fff" />
            </div>
            <h1 className="text-white font-switzer font-[500]">Download app</h1>
          </div>
          <div className="border-[#3C76E1] cursor-pointer border px-4 py-3 rounded-lg">
            <h1 className="text-[#3C76E1] font-switzer font-[500]">
              Join community
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-between mt-20">
          <div className="flex items-center space-x-2">
            <RiShieldFlashLine size={28} />
            <h1 className="font-switzer font-[400] text-[14px]">
              Backed by NDIC
            </h1>
          </div>
          <div>
            <Image src={community} alt="community" className="w-[50%]"/>
            <h1 className="text-[14px] text-[#595959] font-switzer font-[500]">1k+ Community members</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
