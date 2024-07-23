import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import profile from "@/assets/profile.png";
import Image from "next/image";

const Testimonials = () => {
  const pagination = {
    el: ".navigate",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<div class="rounded-[8px] bullet overflow-hidden bg-white min-h-[100px] min-w-[100px] ${className}"><img src="/_next/static/media/profile.a8e0107e.png" alt="user" width="100"></div>`;
    },
  };

  return (
    <div className="pb-3 px-10 my-[7em] w-full mx-auto max-w-[700px]">
      <Swiper
        pagination={pagination}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation, Pagination]}
        className={`swiper`}
      >
        <SwiperSlide>
          <p className="text-[16px] font-switzer font-[400] leading-[30px] text-center text-[#262626] ">
            “My Experience with RAF has been amazing, superb, phenomenal to say
            the least, Where professionalism meets Character, Excellence and
            Integrity!”
          </p>

          <div className="flex items-center flex-col space-y-2 w-[250px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              Q.O.O
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
              Customer
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className="text-[16px] font-switzer font-[400] leading-[30px] text-center text-[#262626] ">
            “I am so grateful for RAF because I never thought I could keep money
            somewhere and not touch it, With the incessant pressures and
            vicissitudes of our day to day life.”
          </p>
          <div className="flex items-center flex-col space-y-2 w-[400px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              A.A
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
             Customer
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className="text-[16px] font-switzer font-[400] leading-[30px] text-center text-[#262626] ">
            “The ROI feel's like free money, everytime I get the alert I am
            filled with so much Joy and I am happy.”
          </p>

          <div className="flex items-center flex-col space-y-2 w-[250px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              C.P
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
              Customer
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className="text-[16px] font-switzer font-[400] leading-[30px] text-center text-[#262626] ">
            “With RAF there is always timely ROI, I wish I came across RAF
            earlier I would not have lost so much money on investments that
            failed”
          </p>

          <div className="flex items-center flex-col space-y-2 w-[250px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              J.O
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
              Customer
            </span>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="navigate grid gap-4 mx-auto !w-fit mt-[4em]"></div>
    </div>
  );
};

export default Testimonials;
