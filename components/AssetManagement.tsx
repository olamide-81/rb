import Image from "next/image";
import React from "react";
import tiltedlogo from "@/assets/raf.svg";
import customizedfinancial from "@/assets/customizedfinancial.svg";
import financialmanager from "@/assets/financialmanager.svg";
import roi from "@/assets/roiforecasting.svg";
import smartsavings from "@/assets/smartsavings.svg";

export default function AssetManagement() {
  return (
    <div className="bg-assetmanagementbg bg-cover w-full relative py-32 px-10">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 items-center justify-center">
        <Image src={tiltedlogo} alt="RAF" />
      </div>
      <div className="flex md:flex-row flex-col items-start justify-between max-w-screen-xl mx-auto w-full">
        <div className="md:w-[30%] w-full">
          <h1 className="text-[14px] font-switzer font-[500] text-[#D5E3A1]">
            Coming soon
          </h1>
          <h1 className="text-[31px] text-white capitalize font-[500] font-switzer">
            Personalized
          </h1>
          <h1 className="text-[31px] text-white capitalize font-[500] font-switzer -mt-3">
            asset management
          </h1>
          <p className="text-[14px] font-switzer font-[400] text-white mt-2">
            Creates a tailored financial system that balances investments,
            savings, and growth opportunities based on your unique goals and
            risk tolerance
          </p>
        </div>
        <div className="md:w-[70%] w-full md:px-24 md:pt-0 pt-7">
          <div className="flex items-center space-x-4">
            <div>
              <Image src={customizedfinancial} alt="Asset" />
            </div>
            <div>
              <Image src={financialmanager} alt="Asset" />
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-8">
            <div>
              <Image src={roi} alt="Asset" />
            </div>
            <div>
              <Image src={smartsavings} alt="Asset" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
