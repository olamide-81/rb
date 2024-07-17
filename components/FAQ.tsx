"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleOpenDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const sections = [
    {
      title:
        "How Does Rich Aunty Finance Keep My Money and Personal Information Secure?",
      description:
        "Rich Aunty Finance safeguards your money and data with bank-level encryption, two-factor authentication, continuous monitoring, and FDIC insurance, partnering with reputable institutions and maintaining strict internal controls to ensure your financial assets and personal information remain secure.",
    },
    {
      title: "What's the minimum amount I need to start investing with RAF?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title: "Can I withdraw my money at any time?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title: "How are the investment portfolios created and managed?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title: "What fees does RAF charge for its services?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title: "How do I get started with Rich Aunty Finance?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title:
        "What makes RAF different from traditional banks or other fintech apps?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title:
        "Can I speak to a financial advisor directly if I have specific questions?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title: "How does RAF's asset management feature work?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col justify-between font-switzer">
      <div className="md:w-[40%] w-full">
        <h1 className="font-[600] text-[31px] pb-4">
          Frequently Asked Questions
        </h1>
        <div className="pb-3">
          <p className="text-[#595959] font-[400] font-switzer leading-6">
            We've Compiled Answers To The Most Common Questions About Rich Aunty
            Finance. Can't Find What You're Looking For? Our Team is Always Here
            To Help.
          </p>
        </div>
        <button className="bg-[#3C76E1] text-white py-[10px] px-[16px] rounded-[8px] font-[600] font-switzer">
          Contact us
        </button>
      </div>
      <div className="md:w-[50%] w-full md:pt-0 pt-10">
        {sections.map((item, index) => (
          <div key={index}>
            <div
              className={`flex justify-between items-center pb-3 ${
                index === 0 ? "text-[#3C76E1]" : "text-[#262626]"
              }`}
            >
              <p className="leading-6 w-[80%] font-[400]">{item.title}</p>
              <button onClick={() => handleOpenDropdown(index)}>
                {openDropdown === index ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </button>
            </div>
            {openDropdown === index && item.description && (
              <div className="bg-[#F1F5F9] p-4 rounded-[20px] mb-5">
                <p className="text-[#262626] font-[400] leading-7">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
