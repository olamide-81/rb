import Image from "next/image";
import Logo from "../public/assets/img/logo.png";
const Footer = () => {
  return (
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
  );
};

export default Footer;
