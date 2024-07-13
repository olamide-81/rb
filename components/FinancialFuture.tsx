import DownloadButton from "./buttons/download";
import Image from "next/image";
import phone_half from "@/assets/phone_half.png";

const FinancialFuture = () => {
    return (
      <div className="w-full mt-8 mx-auto">
        <div className="max-w-[600px] w-full mx-auto">
          <h2 className="font-switzer font-[500] text-center text-[30px] text-[#262626] leading-[35px] mb-6">
            Your Financial Future is just <br /> a download away
          </h2>

          <div className="flex items-center mb-[100px] justify-center">
            <DownloadButton />
          </div>

          <Image src={phone_half} alt="your phone" className="mx-auto" />
        </div>

      </div>
    );
}

export default FinancialFuture;