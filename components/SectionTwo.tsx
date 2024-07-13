import Image from "next/image";
import React from "react";
import rafopportunities from "@/assets/rafopportunities.svg"
import appleanalysis from "@/assets/appleanalysis.svg"
import rafanalysis from "@/assets/rafanalysis.svg"
import creditscore from "@/assets/creditscore.svg"

export default function SectionTwo() {
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-20">
      <div className="bg-[#F1F5F9] rounded-2xl py-10 px-20 flex items-center justify-between">
        <div>
            <div>
                <Image src={rafopportunities} alt="asset-ab"/>
            </div>
            <div className="mt-10">
                <Image src={appleanalysis} alt="asset-apple"/>
            </div>
        </div>
        <div></div>
        <div>
            <div>
                <Image src={rafanalysis} alt="asset-ab"/>
            </div>
            <div className="mt-10">
                <Image src={creditscore} alt="asset-apple"/>
            </div>
        </div>
      </div>
    </div>
  );
}
