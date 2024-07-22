import Image from "next/image";
import Logo from "@/assets/blacklogo.svg";
const Footer = () => {
  return (
    <footer className="py-[80px] max-w-[1280px] w-full px-[8%]">
      <div className="w-full flex justify-center">
        <div className="w-full ">
          <div className="pt-[80px] font-switzer sm:flex-row flex-col items-start flex justify-between font-[500]">
            <Image src={Logo} alt="logo" width={50} />
            <div>
              <h1 className="text-[#262626]">SERVICES</h1>
              <div className="text-[#595959] pt-4 text-[14px]">
                <h1 className="pb-3 cursor-pointer">RAF Plan</h1>
                <h1 className="pb-3 cursor-pointer">RAF Vault</h1>
                <h1 className="pb-3 cursor-pointer">Asset Management</h1>
              </div>
            </div>
            <div className="sm:pt-0 pt-6">
              <h1 className="text-[#262626]">COMPANY</h1>
              <div className="text-[#52525B] font-[400] pt-4 text-[14px]">
                <h1 className="pb-3 cursor-pointer">About Us</h1>
                <h1 className="pb-3 cursor-pointer">Blog</h1>
                <h1 className="pb-3 cursor-pointer">Event</h1>
                <h1 className="pb-3 cursor-pointer">Partners</h1>
              </div>
            </div>
            <div className="sm:pt-0 pt-6">
              <h1 className="text-[#262626]">SUPPORT</h1>
              <div className="text-[#52525B] pt-4 font-[400] text-[14px]">
                <h1 className="pb-3">Help Centre</h1>
                <h1 className="pb-3">FAQ</h1>
              </div>
            </div>
            <div className="sm:pt-0 pt-6">
              <h1 className="text-[#262626]">LEGAL</h1>
              <div className="text-[#52525B] pt-4 font-[400] text-[14px]">
                <h1 className="pb-3 cursor-pointer">Privacy Policy</h1>
                <h1 className="pb-3 cursor-pointer">Terms of Service</h1>
              </div>
            </div>
            <div className="sm:pt-0 pt-6">
              <h1 className="text-[#262626]">CONTACT</h1>
              <div className="text-[#52525B] pt-4 text-[14px] font-[400]">
                <h1 className="pb-3 cursor-pointer">X (Twitter)</h1>
                <h1 className="pb-3 cursor-pointer">Instagram</h1>
                <h1 className="pb-3 cursor-pointer">LinkedIn</h1>
                <h1 className="pb-3 cursor-pointer">Facebook</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
