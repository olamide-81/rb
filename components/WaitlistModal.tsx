import React, { useState } from 'react'
import { SpinnerCircular } from 'spinners-react'

export default function WaitlistModal() {
  const [email, setemail] = useState('')
  const [isloading, setisloading] = useState(false)

  const handlewaitlist = async () => {
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
    }, 6000)
  }

  return (
    <div>
      <div>
        <h1 className="font-switzer text-[20px] text-black font-[500] text-center">
          Be the First to Know When
        </h1>
        <h1 className="font-switzer text-[20px] text-black font-[500] -mt-2 text-center">
          We Launch!
        </h1>

        <h1 className="font-switzer text-[14px] text-[#71717A] font-[400] text-center mt-2">
          Join Our Exclusive Waitlist
        </h1>

        <div className="flex items-center space-x-4 mt-6 mx-6">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter email"
            type="email"
            className="border border-[#A1A1AA] rounded-xl py-3 px-3 bg-transparent font-switzer text-[14px] w-[200px] text-white outline-none"
          />
          <div
            onClick={handlewaitlist}
            className="text-[14px] w-[120px] text-white rounded-xl bg-[#3C76E1] items-center font-[500] cursor-pointer justify-center flex py-3"
          >
            {isloading ? (
              <SpinnerCircular color="#ffffff" size={20} />
            ) : (
              'Join waitlist'
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
