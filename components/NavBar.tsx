import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DownloadButton from "./buttons/download";
import investmentIcon from '@/assets/investmenticon.svg';
import assetIcon from '@/assets/assetIcon.svg';
import savingsIcon from '@/assets/savingIcon.svg';
import communityIcon from '@/assets/communityIcon.svg';
import { CSSProperties, useEffect, useState } from "react";
import side from "../assets/sidebar.svg";
import { Modal } from "@mui/material";
import { MdClose } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { switzer } from "@/pages/_app";
import Logo from "./Logo";
import SidebarIcon from "./SidebarIcon";

const NavBar = ({ style }: { style?: CSSProperties }) => {

  const [isOpen, setIsOpen] = useState({ services: false, company: false });

  const [openSize, setOpenSize] = useState(false);

  useEffect(() => {
    const event = () => {
      setIsOpen({ services: false, company: false });
    };

    document.addEventListener("click", event);

    return () => {
      document.removeEventListener("click", event);
    };
  }, []);

  const services = (placement: "navbar" | "sidebar" = "navbar") => (
    <ul
      style={{
        left: placement === "navbar" ? "-100%" : "-20px",
      }}
      onClick={(e) => e.stopPropagation()}
      className="absolute top-[40px] p-3 z-10 border border-[#0000000D] border-solid w-[280px] bg-white rounded-[24px] space-y-1"
    >
      <li className="">
        <Link
          className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
          href="rafplans"
        >
          <Image src={investmentIcon} width={24} alt="investment" />{" "}
          <span>RAF Plan</span>
        </Link>
      </li>

      <li className="">
        <Link
          className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
          href="/rafvault"
        >
          <Image src={assetIcon} width={24} alt="Asset Management" />{" "}
          <span>RAF Vault</span>
        </Link>
      </li>

      <li className="">
        <Link
          className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
          href="/assetmanagement"
        >
          <Image src={assetIcon} width={24} alt="Savings" />{" "}
          <span>Asset Management</span>
        </Link>
      </li>

      <li className="">
        <Link
          className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
          href="/community"
        >
          <Image src={communityIcon} width={24} alt="Community" />{" "}
          <span>Community</span>
        </Link>
      </li>
    </ul>
  );

  const company = (placement: "navbar" | "sidebar" = "navbar") => (
    <ul
      style={{
        left: placement === "navbar" ? "-100%" : "-20px",
      }}
      onClick={(e) => e.stopPropagation()}
      className="absolute top-[40px] p-3 z-10 border border-[#0000000D] border-solid w-[280px] bg-white rounded-[24px] space-y-1"
    >
      <li className="">
        <Link
          className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
          href="/aboutus"
        >
          <Image src={investmentIcon} width={24} alt="investment" />{" "}
          <span>About us</span>
        </Link>
      </li>

      <li className="">
        <Link
          className="py-3 px-4 rounded-[12px] hover:bg-[#3C76E10F] text-[#262626] flex items-center space-x-2 font-[500] text-[14px] "
          href="/blog"
        >
          <Image src={assetIcon} width={24} alt="Asset Management" />{" "}
          <span>Blog</span>
        </Link>
      </li>

    </ul>
  );

  return (
    <div
      style={style}
      className="flex justify-between text-white py-5 px-2 items-center w-full mx-auto  max-w-screen-xl"
    >

      <Logo color={style?.color} size={50} />      

      <div className="w-[300px] relative sm:flex hidden justify-between items-center">
        <div
          onClick={(e) => (
            e.stopPropagation(),
            setIsOpen((prev) => ({
              company: prev.services ? false : !!prev.services,
              services: !prev.services,
            }))
          )}
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

          {isOpen.services && services()}
        </div>

        <div
          onClick={(e) => (
            e.stopPropagation(),
            setIsOpen((prev) => ({
              services: prev.company ? false : !!prev.company,
              company: !prev.company,
            }))
          )}
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

          {isOpen.company && company()}
        </div>

        <Link href="/contactus" className="flex items-center space-x-2">
          <span className="font-switzer font-[500] leading-[15px] text-[14px]">
            Contact Us
          </span>
        </Link>
      </div>
      <div className="sm:block hidden">
        <DownloadButton />
      </div>

      <div
        onClick={() => setOpenSize(true)}
        className="sm:hidden block cursor-pointer"
      >
        <SidebarIcon color={style?.color} />
      </div>

      <Modal
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
        open={openSize}
        className={`${switzer.variable}`}
        onClose={() => setOpenSize(false)}
      >
        <div className="w-[340px] outline-none min-w-[280px] ex-3sm:w-full right-0 bg-[#fff] px-6 py-4 fixed z-[100] top-0 min-h-screen">
          <div className="justify-end mb-4 md:hidden w-full py-5 flex">
            <MdClose
              onClick={() => setOpenSize(false)}
              size={24}
              className="text-[#2e2e2e] cursor-pointer"
            />
          </div>

          <div className="mt-5 flex flex-col mb-6 space-y-5">
            <div
              onClick={(e) => (
                e.stopPropagation(),
                setIsOpen((prev) => ({
                  company: prev.services ? false : !!prev.services,
                  services: !prev.services,
                }))
              )}
              className="flex relative items-center space-x-2"
            >
              <p className="text-[18px] font-technor font-bold block cursor-pointer text-[#2e2e2e]">
                Services
              </p>

              {isOpen.services ? (
                <FaChevronUp className="text-[14px] cursor-pointer" />
              ) : (
                <FaChevronDown className="text-[14px] cursor-pointer" />
              )}

              {isOpen.services && services("sidebar")}
            </div>

            <div
              onClick={(e) => (
                e.stopPropagation(),
                setIsOpen((prev) => ({
                  services: prev.company ? false : !!prev.company,
                  company: !prev.company,
                }))
              )}
              className="flex relative items-center space-x-2"
            >
              <p className="text-[18px] font-technor font-bold block cursor-pointer text-[#2e2e2e]">
                Company
              </p>

              {isOpen.company ? (
                <FaChevronUp className="text-[14px] cursor-pointer" />
              ) : (
                <FaChevronDown className="text-[14px] cursor-pointer" />
              )}

              {isOpen.company && services("sidebar")}
            </div>

            <Link onClick={() => setOpenSize(false)} href="/contactus">
              <p className="text-[18px] font-technor font-bold block cursor-pointer text-[#2e2e2e]">
                Contact Us
              </p>
            </Link>
          </div>

          <div className="text-[14px] font-interregular text-[#2e2e2e] flex">
            <div className="flex py-6 items-center space-x-6">
              <Link href={"#"} className="cursor-pointer">
                <FiInstagram size={18} color={"#2e2e2e"} />
              </Link>

              <Link href={"#"} className="cursor-pointer">
                <FaXTwitter size={18} color={"#2e2e2e"} />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <DownloadButton />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavBar;
