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
                <h1 className="pb-3">RAF Plan</h1>
                <h1 className="pb-3">RAF Vault</h1>
                <h1 className="pb-3">Asset Management</h1>
              </div>
            </div>
            <div className="sm:pt-0 pt-6">
              <h1 className="text-[#262626]">COMPANY</h1>
              <div className="text-[#52525B] font-[400] pt-4 text-[14px]">
                <h1 className="pb-3">About Us</h1>
                <h1 className="pb-3">Blog</h1>
                <h1 className="pb-3">Event</h1>
                <h1 className="pb-3">Partners</h1>
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
                <h1 className="pb-3">Privacy Policy</h1>
                <h1 className="pb-3">Terms of Service</h1>
              </div>
            </div>
            <div className="sm:pt-0 pt-6">
              <h1 className="text-[#262626]">CONTACT</h1>
              <div className="text-[#52525B] pt-4 text-[14px] font-[400]">
                <h1 className="pb-3">X (Twitter)</h1>
                <h1 className="pb-3">Instagram</h1>
                <h1 className="pb-3">LinkedIn</h1>
                <h1 className="pb-3">Facebook</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
