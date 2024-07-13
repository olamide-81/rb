import Image from 'next/image';
import icon from '@/assets/icon.svg';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";
import apps from '@/assets/apps.svg';


const NavBar = () => {
    return (
      <div className="flex justify-between py-5 items-center sticky top-0 max-w-screen-xl mx-auto bg-white">
        <Image src={icon} alt="logo" width={30} />

        <div className="w-[300px] flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-2">
            <span className="font-switzer font-[500] leading-[15px] text-[#121212] text-[14px]">
              Services
            </span>
            <FaChevronDown className="text-[#595959] text-[14px]" />
          </Link>

          <Link href="#" className="flex items-center space-x-2">
            <span className="font-switzer font-[500] leading-[15px] text-[#121212] text-[14px]">
              Company
            </span>
            <FaChevronDown className="text-[#595959] text-[14px]" />
          </Link>

          <Link href="#" className="flex items-center space-x-2">
            <span className="font-switzer font-[500] leading-[15px] text-[#121212] text-[14px]">
              Contact Us
            </span>
          </Link>
        </div>

        <Link
          href="#"
          className="bg-[#3C76E1] font-switzer px-4 py-[10px] space-x-[10px] rounded-[8px] border border-solid flex items-center text-[14px] text-white border-[#2D6CE1]"
        >
          <Image src={apps} alt="apps" width={40} />
          <span>Download app</span>
        </Link>
      </div>
    );
}

export default NavBar;