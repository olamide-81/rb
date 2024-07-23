import Image from 'next/image'
import React from 'react'
import Safe from '@/assets/safe.svg'
import Link from 'next/link'

export default function SecureFuture() {
  return (
    <div className="bg-black w-screen bg-assetmanagementcombg bg-cover relative py-20 px-10 flex justify-center">
      <div className="flex max-w-screen-xl md:flex-row flex-col items-center justify-between">
        <div>
          <h1 className="text-[31px] text-white md:text-start text-center capitalize font-[500] font-switzer">
            Secure Your Future
          </h1>
          <h1 className="text-[31px] text-white md:text-start text-center capitalize font-[500] font-switzer">
            With RAF Vaults
          </h1>
          <div className="md:text-start text-center md:block flex justify-center">
            <p className="text-white leading-[25px] font-[400] text-[13px] font-switzer mt-4 md:w-[50%] sm:w-[60%] w-[80%]">
              RAF Vault is a specialized savings tool that allows you to lock
              away your funds for a predetermined period, earning substantial
              returns in the process. Think of it as a high-powered savings
              account that rewards your commitment to financial growth with
              impressive interest rates.
            </p>
          </div>
          <Link href="/rafvault">
            <div className="bg-white cursor-pointer border inline-block mt-4 px-6 py-3 rounded-lg">
              <h1 className="text-[#262626] font-switzer font-[500] text-[14px]">
                Learn more
              </h1>
            </div>
          </Link>
        </div>
        <div className="mt-16 items-center justify-center flex">
          <Image src={Safe} alt="sectors" className="w-[80%]" />
        </div>
      </div>
    </div>
  )
}
