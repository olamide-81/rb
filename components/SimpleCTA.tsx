import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

export default function SimpleCTA() {
  return (
    <div className="bg-assetmanagementbg bg-cover w-[100%] mt-20">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col items-center justify-center py-20 px-20">
        <h1 className="text-[28px] text-[#fff] capitalize font-[500] font-switzer w-[60%] text-center">
          It's that simple. Let Rich Aunty Finance turn your money into more
          money
        </h1>
        <div className="bg-[#3C76E1] border border-[#fff] cursor-pointer px-4 mt-10 py-3 rounded-lg flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <FaApple color="#fff" />
              <h1 className="text-white font-[200]">|</h1>
              <BiLogoPlayStore color="#fff" />
            </div>
            <h1 className="text-white font-switzer font-[500]">Download app</h1>
          </div>
      </div>
    </div>
  )
}
