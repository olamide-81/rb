import frame1 from '@/assets/frame1.svg';
import frame2 from "@/assets/frame2.svg";
import frame3 from "@/assets/frame3.svg";
import frame4 from "@/assets/frame4.svg";
import Image from 'next/image';

const ExpertManaged = () => {
    return (
      <div className="w-full mt-8 mx-auto">
        <div className="max-w-[600px] w-full mx-auto">
          <h2 className="font-switzer font-[500] text-center text-[30px] text-[#262626] leading-[35px] mb-6">
            Expert-managed investments at <br /> your fingertips
          </h2>

          <p className="text-[#595959] font-[400] text-[15px] text-center">
            Leave the complexities of investing to our professionals. Our
            curated portfolios are designed to match your risk tolerance and
            financial goals. Monitor your investment performance in real-time
            and watch your wealth grow.
          </p>
        </div>

        <div className="mt-8 grid-cols-2 grid gap-3 max-w-[680px] mx-auto">
          <Image src={frame1}  alt={"frame 1"} />
          <Image src={frame4}  alt={"frame 4"} />
          <Image src={frame2}  alt={"frame 2"} />
          <Image src={frame3}  alt={"frame 3"} />
        </div>
      </div>
    );
};

export default ExpertManaged;