import Image from 'next/image';
import icon from '@/assets/icon.svg';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";
import apps from '@/assets/apps.svg';
import DownloadButton from './buttons/download';


const NavBar = () => {
    return (
      <div className="flex justify-between py-5 items-center sticky top-0 max-w-screen-xl mx-auto bg-white z-[1000]">

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

        <DownloadButton />
      </div>
    );
}

export default NavBar;