import Image from "next/image";
import Link from "next/link";
import apps from "@/assets/apps.svg";

const DownloadButton = () => {
    return (
        <Link
          href="#"
          className="bg-[#3C76E1] font-switzer px-4 py-[10px] space-x-[10px] rounded-[8px] border border-solid flex w-fit items-center text-[14px] text-white border-[#2D6CE1]"
        >
          <Image src={apps} alt="apps" width={40} />
          <span>Download app</span>
        </Link>
    )
}

export default DownloadButton;