import Image from "next/image";
import React from "react";
import FinancialGoalsPhone from "@/assets/FinancialGoalsPhone.svg";
import BirthDay from "@/assets/BirthdayPresent.svg";
import RAFvault from "@/assets/RAFvault.svg";
import SavingPartner from "@/assets/Savingpartner.svg";

export default function FinancialGoals() {
  return (
    <div className="max-w-screen-xl bg-[#F9FAFB] px-10 mx-auto w-full pt-20">
      <div className="flex bg-[#F0F2F5] rounded-[40px] p-[50px] justify-between md:items-start items-center md:flex-row flex-col-reverse">
        <div className="md:w-[50%] w-[80%] md:pt-0 pt-6">
          <h1 className="text-[31px] md:text-start text-center font-[500] font-switzer">
            Ready To Turn Your Financial
          </h1>
          <h1 className="text-[31px] md:text-start text-center font-[500] font-switzer">
            Goals Into Reality?
          </h1>
          <div className="md:text-start text-center text-[14px] pt-3 text-[#52525B] font-[400] font-switzer">
            <p className="">
              Sign Up Now and Choose Your First RAF Plan. Your Future Self Will
            </p>
            <p>Thank You!"</p>
          </div>
        </div>
        <div className="relative">
          <Image src={FinancialGoalsPhone} alt="raf-plan" width={300} />
          <Image
            className="absolute top-[140px] left-[-145px]"
            src={BirthDay}
            alt="raf-plan"
            width={200}
          />
          <Image
            className="absolute top-[260px] left-[-145px]"
            src={RAFvault}
            alt="raf-plan"
            width={200}
          />
          <Image
            className="absolute left-[52px] bottom-[-30px]"
            src={SavingPartner}
            alt="raf-plan"
            width={200}
          />
        </div>
      </div>
    </div>
  );
}
