import NavBar from "@/components/NavBar";
import Image from "next/image";
import vault from '@/assets/vaulty.png';
import plan1 from "@/assets/plan1.png";
import plan2 from '@/assets/plan2.png'
import plan3 from '@/assets/plan3.png'
import power1 from '@/assets/power1.png';
import power2 from '@/assets/power2.png'
import power3 from '@/assets/power3.png'
import power4 from '@/assets/power4.png'
import Footer from "@/components/Footer";
import DownloadButton from "@/components/buttons/download";
import phone_half from "@/assets/phone_half2.png";

const Vault = () => {
    
    return (
      <div className="h-screen max-w-screen-xl mx-auto px-10 w-full">
        <NavBar
          style={{
            color: '#262626',
            marginBottom: '30px',
          }}
        />

        <section className="pl-0 flex mt-20 justify-between">
          <div className="w-1/2 mmd:w-full">
            <div className="mb-5">
              <span className="font-switzer text-[15px] font-[500] text-[#3C76E1] ">
                RAF Vault
              </span>
              <h2 className="font-[600] mb-4 text-[33px] capitalize leading-[45px] font-switzer text-[#262626]">
                Secure your future, Amplify <br className="hidden md:block" />{' '}
                your wealth
              </h2>
              <span className="text-[#595959] leading-[25px] font-[400] text-[15px] ">
                As part of the innovative RAF fintech ecosystem, RAF Vault takes
                your savings strategy to the next level, offering you the power
                to grow your <br className="hidden md:block" /> money faster and
                more efficiently than ever before.
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <Image src={vault} alt="savings" width={400} />
          </div>
        </section>

        <section className="mt-32 xd:grid-cols-1 grid-cols-2 grid gap-3 items-start justify-between">
          <h2 className="text-[18px] xd:mb-4 text-[#262626] font-switzer block w-1/2 font-[400] xd:w-full">
            How does RAF Vault Fits into the RAF Ecosystem?
          </h2>

          <p className="text-[#52525B] font-switzer font-[400] text-[16px]">
            <span className="text-[#262626]">RAF Vault</span> is a specialized
            savings tool that allows you to lock away your funds for a
            predetermined period, earning substantial returns in the process.
            Think of it as a{' '}
            <span className="text-[#262626]">
              high-powered savings account that rewards your commitment to
              financial growth with impressive interest rates.
            </span>
            <br />
            <br />
            While RAF Plan helps you save systematically for specific goals like
            education, a new home, or a car, RAF Vault is designed for those
            looking to maximize their returns on larger sums. It's the perfect
            complement to your regular savings, offering a way to make your
            money work harder for you.
          </p>
        </section>

        <section className="mt-32 p-7 smm:px-4 w-full rounded-[32px] bg-[-63px_0px] smm:bg-[-94px_0px] bg-bgplans bg-no-repeat mmd:bg-cover">
          <h2 className="text-[18px] mb-10 text-center text-[#262626] font-switzer font-[500]">
            the Perfect RAF Vault Plan <br className="hidden md:block" /> for
            Your Financial Ambitions
          </h2>

          <div className="grid grid-cols-3 smm:grid-cols-1 items-center gap-4 mmd:grid-cols-2">
            <div className="w-full flex justify-center">
              <Image src={plan1} alt={'plan 1'} />
            </div>
            <div className="w-full flex justify-center">
              <Image src={plan2} alt={'plan 2'} />
            </div>
            <div className="w-full flex justify-center">
              <Image src={plan3} alt={'plan 3'} />
            </div>
          </div>
        </section>

        <section className="mt-32 w-full">
          <div className="mb-12">
            <h2 className="text-[18px] mb-2 text-left text-[#262626] font-switzer font-[500]">
              The power of locked savings
            </h2>
            <span className="text-[#52525B] text-[15px] font-[400]">
              By choosing to lock your savings in RAF Vault, you're making a{' '}
              <br className="hidden md:block" /> smart financial decision.
              Here's why:
            </span>
          </div>

          <div
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            }}
            className="grid items-center gap-5"
          >
            <div className="w-full flex justify-center">
              <Image src={power1} alt={'power 1'} />
            </div>
            <div className="w-full flex justify-center">
              <Image src={power2} alt={'power 2'} />
            </div>
            <div className="w-full flex justify-center">
              <Image src={power3} alt={'power 3'} />
            </div>
            <div className="w-full flex justify-center">
              <Image src={power4} alt={'power 4'} />
            </div>
          </div>
        </section>

        <div className="max-w-[600px] mt-32 -mb-4 w-full mx-auto">
          <h2 className="font-switzer font-[500] text-center text-[30px] text-[#262626] leading-[35px] mb-6">
            Your Financial Future is just <br /> a download away
          </h2>
          <div className="flex items-center mb-[100px] justify-center">
            <DownloadButton />
          </div>

          <Image src={phone_half} alt="your phone" className="mx-auto" />
        </div>

        <Footer />
      </div>
    )
}

export default Vault;