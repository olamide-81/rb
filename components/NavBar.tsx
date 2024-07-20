import Image from "next/image";
import icon from "@/assets/whitelogo.svg";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import DownloadButton from "./buttons/download";

const NavBar = () => {
  return (
    <div className="flex justify-between text-white py-5 px-10 items-center w-full mx-auto">
      <Image src={icon} alt="logo" width={50} />

      <div className="w-[300px] sm:flex hidden justify-between items-center">
        <Link href="#" className="flex items-center space-x-2">
          <span className="font-switzer font-[500] leading-[15px] text-[14px]">
            Services
          </span>
          <FaChevronDown className="text-[14px]" />
        </Link>

        <Link href="#" className="flex items-center space-x-2">
          <span className="font-switzer font-[500] leading-[15px] text-[14px]">
            Company
          </span>
          <FaChevronDown className="text-[14px]" />
        </Link>

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
