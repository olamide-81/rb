import Image from "next/image";
import React from "react";
import Deposit from "@/assets/jamesdeposit.svg";

export default function AchieveMore() {
  return (
    <div className="max-w-screen-xl bg-[#F9FAFB] mx-auto w-full py-20">
      <div className="flex justify-between md:items-start items-center px-10 md:flex-row flex-col-reverse">
        <div className="md:w-[50%] w-[80%] md:pt-0 pt-6">
          <h1 className="text-[31px] md:text-start text-center font-[500] font-switzer pb-6">
            Achieve More Together With Shared Savings
          </h1>
          <div className="md:text-start text-center">
            <p className="text-[14px] text-[#52525B] font-[400] font-switzer">
              Achieve your goals faster by teaming up with friends and family.
              With Shared Plans, you can collaborate, save, and grow your money
              together, making your dreams a reality sooner.
            </p>
          </div>
        </div>
        <div>
          <Image src={Deposit} alt="raf-plan" width={300} />
        </div>
      </div>
    </div>
  );
}
