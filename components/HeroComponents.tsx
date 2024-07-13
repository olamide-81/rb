import React from "react";

export default function HeroComponents() {
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div>
        <h1 className="text-[40px] font-mc font-medium">
          Turn Your Financial <br /> Dreams Into Reality
        </h1>
        <p className="font-mc font-normal mt-4 w-[50%]">
          Take control of your finances like never before. Combine powerful
          saving tools, educational resources, and exclusive investment
          opportunities to help you build and grow your wealth
        </p>

        <div className="flex items-center space-x-10">
          <div className="bg-[#3C76E1] px-4 py-3">
            <h1 className="text-white">Download app</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
