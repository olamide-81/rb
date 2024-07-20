import DownloadButton from "./buttons/download";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import phone_half from "@/assets/Walletbal.svg";
import MemberOne from "@/assets/member1.svg";
import MemberTwo from "@/assets/member2.svg";
import MemberThree from "@/assets/member3.svg";

const FinancialFuture = () => {
  return (
    <div className="w-full px-10 bg-[#F9FAFB] mt-32 mx-auto">
      <div className="max-w-[600px] w-full mx-auto">
        <h2 className="font-switzer font-[500] text-center text-[30px] text-[#262626] leading-[35px] mb-6">
          Your Financial Future is just <br /> a download away
        </h2>
        <div className="flex items-center mb-[100px] justify-center">
          <DownloadButton />
        </div>
        <Image src={phone_half} alt="your phone" className="mx-auto" />
        <div className="pt-[50px] text-center">
          <h1 className="text-[31px] font-[500] font-switzer">
            Join 50,000+ Members Already Saving
          </h1>
          <h1 className="text-[31px] font-[500] font-switzer">
            Smarter With RAF Plans
          </h1>
        </div>
        <div className="flex justify-center pt-6">
          <div className="text-[#3C76E1] bg-white cursor-pointer inline-flex border items-center gap-1 px-4 py-3 rounded-lg">
            <h1 className="font-switzer font-[500]">Join community</h1>
            <FiArrowUpRight />
          </div>
        </div>
        <div className="flex relative pt-[80px]">
          <div className="relative z-10">
            <Image
              src={MemberOne}
              alt="member-1"
              width={180}
              className="relative left-[65px]"
            />
          </div>
          <div className="relative z-20">
            <Image src={MemberTwo} alt="member-2" width={200} />
          </div>
          <div className="relative z-10">
            <Image
              src={MemberThree}
              alt="member-3"
              width={180}
              className="relative right-[85px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialFuture;
