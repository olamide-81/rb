import React from "react";
import tiltedlogo from "@/assets/tiltedlogo.svg";

export default function AssetManagement() {
  return (
    <div className="bg-assetmanagementbg bg-cover w-[100%] mt-24 relative py-24 px-32">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto w-full">
        <div className="w-[30%]">
          <h1 className="text-[14px] font-switzer font-[500] text-[#D5E3A1]">
            Coming soon
          </h1>
          <h1 className="text-[31px] text-[#fff] capitalize font-[500] font-switzer">
            Personalized
          </h1>
          <h1 className="text-[31px] text-[#fff] capitalize font-[500] font-switzer -mt-3">
            asset management
          </h1>
          <p className="text-[14px] font-switzer font-[400] text-white mt-2">
            Creates a tailored financial system that balances investments,
            savings, and growth opportunities based on your unique goals and
            risk tolerance
          </p>
        </div>
        <div className="w-[70%]"></div>
      </div>
    </div>
  );
}
