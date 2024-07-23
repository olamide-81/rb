import Image from 'next/image'
import Logo from '@/assets/blacklogo.svg'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="py-[80px] max-w-[1280px] w-full px-[8%]">
      <div className="w-full flex justify-center">
        <div className="w-full ">
          <div className="pt-[80px] font-switzer sm:flex-row flex-col items-start flex justify-between font-[500]">
            <Image src={Logo} alt="logo" className="mb-4" width={80} />

            <div className="flex items-start space-x-28 md:mt-0 mt-10">
              <div className=''>
                <h1 className="text-[#262626]">SERVICES</h1>
                <div className="text-[#595959] pt-4 text-[14px]">
                  <Link href="/rafplan">
                    <h1 className="pb-3 cursor-pointer">RAF Plan</h1>
                  </Link>
                  <Link href="/rafvault">
                    <h1 className="pb-3 cursor-pointer">RAF Vault</h1>
                  </Link>
                  <Link href="/assetmanagement">
                    <h1 className="pb-3 cursor-pointer">Asset Management</h1>
                  </Link>
                </div>
              </div>

              <div className="">
                <h1 className="text-[#262626]">COMPANY</h1>
                <div className="text-[#52525B] font-[400] pt-4 text-[14px]">
                  <Link href="/aboutus">
                    <h1 className="pb-3 cursor-pointer">About Us</h1>
                  </Link>
                  <Link href="/blog">
                    <h1 className="pb-3 cursor-pointer">Blog</h1>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="sm:pt-0 pt-6">
              <h1 className="text-[#262626]">SUPPORT</h1>
              <div className="text-[#52525B] pt-4 font-[400] text-[14px]">
                <h1 className="pb-3">Help Centre</h1>
                <h1 className="pb-3">FAQ</h1>
              </div>
            </div> */}

            <div className="flex items-start space-x-32">
              <div className="sm:pt-0 pt-6">
                <h1 className="text-[#262626]">LEGAL</h1>
                <div className="text-[#52525B] pt-4 font-[400] text-[14px]">
                  <Link href="/">
                    <h1 className="pb-3 cursor-pointer">Privacy Policy</h1>
                  </Link>
                  <Link href="/">
                    <h1 className="pb-3 cursor-pointer">Terms of Service</h1>
                  </Link>
                </div>
              </div>

              <div className="sm:pt-0 pt-6">
                <h1 className="text-[#262626]">CONTACT</h1>
                <div className="text-[#52525B] pt-4 text-[14px] font-[400]">
                  <Link href="/">
                    <h1 className="pb-3 cursor-pointer">X (Twitter)</h1>
                  </Link>
                  <Link href="/">
                    <h1 className="pb-3 cursor-pointer">Instagram</h1>
                  </Link>
                  <Link href="/">
                    <h1 className="pb-3 cursor-pointer">LinkedIn</h1>
                  </Link>
                  <Link href="/">
                    <h1 className="pb-3 cursor-pointer">Facebook</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-10 font-switzer font-[400] text-[13px] text-[#5c5c5c]">
        Rich Aunty Finance Ltd RC 2023373 is a premier financial community
        platform endorsed and recognised within the Nigerian financial
        landscape. Our Target Savings Collective is a transparent,
        community-driven savings initiative where members come together to save
        for shared objectives. Each contribution is meticulously recorded, and
        members are assured of reclaiming their full contribution at the end of
        the saving period. Through our online portal, we offer a wide array of
        Financial Education & Online Classes. Tailored to various expertise
        levels, these resources empower our community members to navigate the
        financial realm with confidence. Curated Investment Opportunities
        available on our platform are presented after rigorous market analysis.
        For each investment offering, the specifics and associated entities are
        disclosed in detail. It's crucial to note that any historical or
        anticipated returns are speculative and might not represent actual
        future outcomes. The content on this website provides an overview of
        Rich Aunty Finance Ltd's services and features. Engaging with our
        platform indicates your agreement to our Terms of Use and Privacy
        Policy. © 2024 RichAuntyFinance, Ltd.
      </p>
    </footer>
  )
}

export default Footer
