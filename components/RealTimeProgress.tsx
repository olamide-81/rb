import Image from "next/image";
import React from "react";
import HomeDownPay from "@/assets/Homedownpay.svg";

export default function RealTimeProgress() {
  return (
    <div className="max-w-screen-xl bg-[#F9FAFB] mx-auto px-10 w-full pt-20">
      <div className="flex justify-between md:items-start items-center md:flex-row flex-col-reverse">
        <div className="md:w-[50%] w-[80%] md:pt-0 pt-6">
          <h1 className="text-[31px] md:text-start text-center font-[500] font-switzer pb-6">
            Stay On Track With Real-Time Progress Updates
          </h1>
          <div className="md:text-start text-center">
            <p className="text-[14px] text-[#52525B] font-[400] font-switzer">
              Monitor your savings journey effortlessly. Our intuitive app keeps
              you informed with real-time updates, so you always know how close
              you are to achieving your goals.
            </p>
          </div>
        </div>
        <div>
          <Image src={HomeDownPay} alt="raf-plan" width={300} />
        </div>
      </div>
    </div>
  );
}
