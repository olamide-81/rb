import { IoIosArrowDown } from "react-icons/io";
import Logo from "../public/assets/img/logo.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[#F8FAFC] text-[#262626] flex justify-center px-[7%] py-[80px]">
      <div className="w-full max-w-[1440px]">
        {/* FAQ */}
        <div className="flex justify-between">
          <div className="w-[40%]">
            <h1 className="font-semibold text-[31px] pb-4">
              Frequently Asked Questions
            </h1>
            <div className="pb-3">
              <p className="text-[#595959] leading-6">
                We've Compiled Answers To The Most Common Questions About Rich
                Aunty Finance. Can't Find What You're Looking For? Our Team is
                Always Here To Help.
              </p>
            </div>
            <button className="bg-[#3C76E1] text-white py-[10px] px-[16px] rounded-[8px] font-semibold">
              Contact us
            </button>
          </div>
          <div className="w-[50%]">
            <div className="text-[#3C76E1] flex justify-between items-center pb-3">
              <p className="leading-6 w-[80%]">
                How Does Rich Aunty Finance Keep My Money and Personal
                Information Secure?
              </p>
              <IoIosArrowDown size={20} />
            </div>
            <div className="bg-[#F1F5F9] p-4 rounded-[20px] mb-5">
              <p className="text-[#262626] leading-7">
                Rich Aunty Finance safeguards your money and data with
                bank-level encryption, two-factor authentication, continuous
                monitoring, and FDIC insurance, partnering with reputable
                institutions and maintaining strict internal controls to ensure
                your financial assets and personal information remain secure.
              </p>
            </div>
            <div className="text-[#595959]">
              <div className="flex justify-between items-center py-4">
                <h1>
                  What's the minimum amount I need to start investing with RAF?
                </h1>
                <IoIosArrowDown size={20} />
              </div>
              <div className="flex justify-between items-center py-4">
                <h1>Can I withdraw my money at any time?</h1>
                <IoIosArrowDown size={20} />
              </div>
              <div className="flex justify-between items-center py-4">
                <h1>How are the investment portfolios created and managed?</h1>
                <IoIosArrowDown size={20} />
              </div>
              <div className="flex justify-between items-center py-4">
                <h1>What fees does RAF charge for its services?</h1>
                <IoIosArrowDown size={20} />
              </div>
              <div className="flex justify-between items-center py-4">
                <h1>How do I get started with Rich Aunty Finance?</h1>
                <IoIosArrowDown size={20} />
              </div>
              <div className="flex justify-between items-center py-4">
                <h1>
                  What makes RAF different from traditional banks or other
                  fintech apps?
                </h1>
                <IoIosArrowDown size={20} />
              </div>
              <div className="flex justify-between items-center py-4">
                <h1>
                  Can I speak to a financial advisor directly if I have specific
                  questions?
                </h1>
                <IoIosArrowDown size={20} />
              </div>
              <div className="flex justify-between items-center py-4">
                <h1>How does RAF's asset management feature work?</h1>
                <IoIosArrowDown size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <footer className="py-[80px]">
          <Image src={Logo} alt="logo" />
          <div className="pt-[80px] flex justify-between font-medium">
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
        </footer>
      </div>
    </div>
  );
}
