import Image from "next/image";
import Founder from "@/assets/founder.svg";
import Peace from "@/assets/peace.svg";
import WEF from "@/assets/wef.svg";
import Africa from "@/assets/africa.svg";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
const StartYourJourney = () => {
  return (
    <div className="py-[50px] flex justify-center text-[#262626]">
      <div className="font-switzer max-w-[750px]">
        <h1 className="text-[27px] font-[500]">
          Ready to start your journey towards financial empowerment? Join
          thousands of satisfied users who are already saving smarter and
          achieving their goals with Rich Aunty Finance
        </h1>
        <div className="flex items-center space-x-4 mt-10">
          <div className="bg-[#3C76E1] cursor-pointer px-4 py-3 rounded-lg flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <FaApple color="#fff" />
              <h1 className="text-white font-[200]">|</h1>
              <BiLogoPlayStore color="#fff" />
            </div>
            <h1 className="text-white font-switzer font-[500]">Download app</h1>
          </div>
          <div className="text-[#3C76E1] bg-white cursor-pointer inline-flex border items-center gap-1 px-4 py-3 rounded-lg">
            <h1 className="font-switzer font-[500]">Join community</h1>
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartYourJourney;
