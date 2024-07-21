import NavBar from "@/components/NavBar";
import phone from '@/assets/phone.png';
import Image from "next/image";
import savings1 from '@/assets/savings1.png';
import savings2 from '@/assets/savings2.png';
import savings3 from '@/assets/savings3.png';
import savings4 from '@/assets/savings4.png';
import Footer from "@/components/Footer";

const Savings = () => {
    return (
      <div className="h-screen max-w-screen-xl mx-auto px-10 w-full">
        <NavBar style={{
            color: "#262626",
        }} />
        <div className="pl-8 flex mt-20 justify-between">
          <div>
            <div className="mb-5">
              <span className="font-switzer text-[15px] font-[500] text-[#3C76E1] ">
                Savings
              </span>
              <h2 className="font-[600] mb-4 text-[33px] leading-[45px] font-switzer text-[#262626]">
                Supercharge Your Savings
              </h2>
              <span className="text-[#595959] leading-[25px] font-[400] text-[15px] ">
                Innovative tools and strategies to turbocharge your savings,
                turning <br /> small steps into giant leaps towards your dreams"
              </span>
            </div>

            <div className="mt-8 grid-cols-2 grid gap-y-3 max-w-[680px] mx-auto">
              <Image src={savings1} width={200} alt={"savings 1"} />
              <Image src={savings2} width={200} alt={"savings 4"} />
              <Image src={savings3} width={200} alt={"savings 2"} />
              <Image src={savings4} width={200} alt={"savings 3"} />
            </div>
          </div>

          <div className="">
            <Image src={phone} alt="savings" width={250} />
          </div>
        </div>
        <Footer/>
      </div>
    );
}

export default Savings;