import Image from "next/image";
import icon from "@/assets/whitelogo.svg";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DownloadButton from "./buttons/download";
import investmentIcon from '@/assets/investmenticon.svg';
import assetIcon from '@/assets/assetIcon.svg';
import savingsIcon from '@/assets/savingIcon.svg';
import communityIcon from '@/assets/communityIcon.svg';
import { useEffect, useState } from "react";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState({ services: false, company: false });
  
  useEffect(() => {

    const event = () => {
      setIsOpen({ services: false, company: false });
    };

    document.addEventListener("click", event);

    return () => {
      document.removeEventListener("click", event);
    };
  }, []);

  return (
    <div className="flex justify-between text-white py-5 px-10 items-center w-full mx-auto">
      <Image src={icon} alt="logo" width={50} />

      <div className="w-[300px] relative sm:flex hidden justify-between items-center">
        <div
          onClick={(e) =>
            (e.stopPropagation(), setIsOpen((prev) => ({
              company: prev.services ? false : !!prev.services,
              services: !prev.services,
            })))
          }
          className="flex relative items-center space-x-2"
        >
          <span className="font-switzer cursor-pointer font-[500] leading-[15px] text-[14px]">
            Services
          </span>
          {isOpen.services ? (
            <FaChevronUp className="text-[14px] cursor-pointer" />
          ) : (
            <FaChevronDown className="text-[14px] cursor-pointer" />
          )}

          {isOpen.services && (
            <ul
              onClick={(e) => e.stopPropagation()}
              className="absolute top-[40px] -left-full p-3 border border-[#0000000D] border-solid w-[280px] bg-white rounded-[24px] space-y-1"
            >
              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={investmentIcon} width={24} alt="investment" />{" "}
                  <span>Investment</span>
                </Link>
              </li>

              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={assetIcon} width={24} alt="Asset Management" />{" "}
                  <span>Asset Management</span>
                </Link>
              </li>

              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={savingsIcon} width={24} alt="Savings" />{" "}
                  <span>Savings</span>
                </Link>
              </li>

              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={communityIcon} width={24} alt="Community" />{" "}
                  <span>Community</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div
          onClick={(e) =>
            (e.stopPropagation(), setIsOpen((prev) => ({
              services: prev.company ? false : !!prev.company,
              company: !prev.company,
            })))
          }
          className="flex items-center relative space-x-2"
        >
          <span className="font-switzer font-[500] cursor-pointer leading-[15px] text-[14px]">
            Company
          </span>

          {isOpen.company ? (
            <FaChevronUp className="text-[14px] cursor-pointer" />
          ) : (
            <FaChevronDown className="text-[14px] cursor-pointer" />
          )}

          {isOpen.company && (
            <ul
              onClick={(e) => e.stopPropagation()}
              className="absolute top-[40px] -left-full p-3 border border-[#0000000D] border-solid w-[280px] bg-white rounded-[24px] space-y-1"
            >
              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={investmentIcon} width={24} alt="investment" />{" "}
                  <span>Investment</span>
                </Link>
              </li>

              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={assetIcon} width={24} alt="Asset Management" />{" "}
                  <span>Asset Management</span>
                </Link>
              </li>

              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={savingsIcon} width={24} alt="Savings" />{" "}
                  <span>Savings</span>
                </Link>
              </li>

              <li className="">
                <Link
                  className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
                  href="#"
                >
                  <Image src={communityIcon} width={24} alt="Community" />{" "}
                  <span>Community</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link href="#" className="flex items-center space-x-2">
          <span className="font-switzer font-[500] leading-[15px] text-[14px]">
            Contact Us
          </span>
        </Link>
      </div>
      <div className="sm:block hidden">
        <DownloadButton />
      </div>
    </div>
  );
};

export default NavBar;
