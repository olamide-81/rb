import { IoIosArrowDown } from "react-icons/io";
import Logo from "../public/assets/img/logo.png";
import Image from "next/image";
const AssetManagememt = () => {
  return (
    <div className="">
      <div>
        <div className="bg-[#0D0D0D] flex items-center py-[100px] w-full bg-hero text-white justify-center">
          <div>
            <div className="w-full max-w-[1440px] text-center">
              <h1 className="text-[#D5E3A1] pb-3 font-semibold">
                Asset management - Coming soon
              </h1>
              <h1 className="text-[39px] font-semibold pb-3 text-center">
                Your Financial Future, Reimagined
              </h1>
              <div className="px-[27%] pb-[60px] text-[#CBD5E1] ">
                <p>
                  Tailored Strategies, Expert Guidance, and Optimized Growth –
                  All in One Powerful Service
                </p>
              </div>
              <div className="mb-8">
                <div className="border-[1.5px] bg-[#1A1A1A] bg-opacity-45 border-[#262626] rounded-[16px] py-[18px] px-[12px] gap-2 text-[18px] inline-flex items-center justify-between mr-8">
                  <h1 className="font-medium">Your Financial Blueprint</h1>
                  <IoIosArrowDown size={24} />
                </div>
                <div className="border-[1.5px] bg-[#1A1A1A] bg-opacity-45 border-[#262626] rounded-[16px] py-[18px] px-[12px] gap-2 text-[18px] inline-flex items-center justify-between mr-8">
                  <h1 className="font-medium">Smart Diversification</h1>
                  <IoIosArrowDown size={24} />
                </div>
                <div className="border-[1.5px] bg-[#1A1A1A] bg-opacity-45 border-[#262626] rounded-[16px] py-[18px] px-[12px] gap-2 text-[18px] inline-flex items-center justify-between mr-8">
                  <h1 className="font-medium">Adaptive Portfolio Management</h1>
                  <IoIosArrowDown size={24} />
                </div>
              </div>
              <div className="mb-[100px]">
                <div className="border-[1.5px] bg-[#1A1A1A] bg-opacity-45 border-[#262626] rounded-[16px] py-[18px] px-[12px] gap-2 text-[18px] inline-flex items-center justify-between mr-8">
                  <h1 className="font-medium">Your Personal Finance Expert</h1>
                  <IoIosArrowDown size={24} />
                </div>
                <div className="border-[1.5px] bg-[#1A1A1A] bg-opacity-45 border-[#262626] rounded-[16px] py-[18px] px-[12px] gap-2 text-[18px] inline-flex items-center justify-between mr-8">
                  <h1 className="font-medium">
                    Crystal-Clear Performance Insights
                  </h1>
                  <IoIosArrowDown size={24} />
                </div>
              </div>
              <div>
                <h1 className="font-medium text-[20px] pb-6">
                  Be the First to Know – Join Our Exclusive Waitlist
                </h1>
                <div>
                  <input
                    type="text"
                    className="py-[13px] max-w-[293px] text-[13px] w-full px-[12px] outline-none rounded-[11px] bg-transparent border-[1.5px] mr-[10px] border-[#262626] placeholder:text-white"
                    placeholder="Enter email address"
                  />
                  <button className="py-[10px] px-[16px] border-[1.5px] border-[#2D6CE1] text-[#3C76E1] font-semibold rounded-[8px]">
                    Join waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="py-[80px] bg-[#F8FAFC] px-[7%] flex justify-center">
          <div className="w-full max-w-[1440px]">
            <Image src={Logo} alt="logo" />
            <div className="pt-[80px] flex justify-between font-medium text-[#262626]">
              <div>
                <h1 className="">SERVICES</h1>
                <div className="text-[#595959] pt-4">
                  <h1 className="pb-3">Investment</h1>
                  <h1 className="pb-3">Assets Management</h1>
                  <h1 className="pb-3">Savings</h1>
                  <h1 className="pb-3">Community</h1>
                </div>
              </div>
              <div>
                <h1 className="">COMPANY</h1>
                <div className="text-[#595959] pt-4">
                  <h1 className="pb-3">About Us</h1>
                  <h1 className="pb-3">Blog</h1>
                  <h1 className="pb-3">Event</h1>
                  <h1 className="pb-3">Partners</h1>
                </div>
              </div>
              <div>
                <h1 className="">SUPPORT</h1>
                <div className="text-[#595959] pt-4">
                  <h1 className="pb-3">Help Centre</h1>
                  <h1 className="pb-3">FAQ</h1>
                </div>
              </div>
              <div>
                <h1 className="">LEGAL</h1>
                <div className="text-[#595959] pt-4">
                  <h1 className="pb-3">Privacy Policy</h1>
                  <h1 className="pb-3">Terms of Service</h1>
                </div>
              </div>
              <div>
                <h1 className="">CONTACT</h1>
                <div className="text-[#595959] pt-4">
                  <h1 className="pb-3">X (Twitter)</h1>
                  <h1 className="pb-3">Instagram</h1>
                  <h1 className="pb-3">LinkedIn</h1>
                  <h1 className="pb-3">Facebook</h1>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AssetManagememt;
