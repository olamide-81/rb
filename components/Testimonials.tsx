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
    <div className="pb-3 my-[7em] w-full mx-auto max-w-[700px]">
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
            “After countless failed ventures, RAF's partnership investment was a
            game-changer for me. I not only regained my investment footing but
            discovered numerous lucrative opportunities. The consistency and
            support have been impeccable!”
          </p>

          <div className="flex items-center flex-col space-y-2 w-[400px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              Name
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
              CEO Of Something Something
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className="text-[16px] font-switzer font-[400] leading-[30px] text-center text-[#262626] ">
            “After countless failed ventures, RAF's partnership investment was a
            game-changer for me. I not only regained my investment footing but
            discovered numerous lucrative opportunities. The consistency and
            support have been impeccable!”
          </p>

          <div className="flex items-center flex-col space-y-2 w-[400px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              Name
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
              CEO Of Something Something
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className="text-[16px] font-switzer font-[400] leading-[30px] text-center text-[#262626] ">
            “After countless failed ventures, RAF's partnership investment was a
            game-changer for me. I not only regained my investment footing but
            discovered numerous lucrative opportunities. The consistency and
            support have been impeccable!”
          </p>

          <div className="flex items-center flex-col space-y-2 w-[400px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              Name
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
              CEO Of Something Something
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className="text-[16px] font-switzer font-[400] leading-[30px] text-center text-[#262626] ">
            “After countless failed ventures, RAF's partnership investment was a
            game-changer for me. I not only regained my investment footing but
            discovered numerous lucrative opportunities. The consistency and
            support have been impeccable!”
          </p>

          <div className="flex items-center flex-col space-y-2 w-[400px] mx-auto mt-7">
            <div className="rounded-[8px] overflow-hidden h-[100px] w-[100px]">
              <Image src={profile} alt={"user"} width={100} />
            </div>
            <h4 className="font-[600] text-center font-switzer text-[16px] text-[#262626]">
              Name
            </h4>
            <span className="font-[400] text-[#595959] text-center leading-[20px] font-switzer ">
              CEO Of Something Something
            </span>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="navigate mx-auto !w-fit mt-[4em]"></div>
    </div>
  );
};

export default Testimonials;
