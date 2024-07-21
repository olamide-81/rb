import Image from "next/image";
import React from "react";
import Safe from "@/assets/safe.svg";

export default function SecureFuture() {
  return (
    <div className="bg-black mx-auto w-screen py-20 max-w-screen-xl">
      <div className="flex flex-col max-w-screen-xl items-center text-center justify-center">
        <h1 className="text-[31px] text-white capitalize font-[500] font-switzer text-center">
          Secure Your Future
        </h1>
        <h1 className="text-[31px] text-white capitalize font-[500] font-switzer -mt-4 text-center">
          With RAF Vaults
        </h1>
        <p className="text-white font-[400] text-[14px] font-switzer mt-4 sm:w-[50%] w-[80%] text-center">
          Access a wealth of financial wisdom through our educational resources.
          From webinars to articles, gain insights on budgeting, investing, and
          more. Equip yourself with the knowledge to make informed financial
          choices.
        </p>
        <div className="mt-16 items-center justify-center flex">
          <Image src={Safe} alt="sectors" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
}
