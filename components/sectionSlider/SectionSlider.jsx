import GrowCart from "@/components/cart/GrowCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sectionSlider.css";
export default function SectionSlider({ list }) {
  return (
    <Swiper
      className="section-slider my-6 lg:my-10 "
      initialSlide={1}
      spaceBetween={15}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        450: {
          slidesPerView: 3,
        },
        670: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        },
      }}
    >
      {list &&
        list.slice(0, 6).map((item) => (
          <SwiperSlide className=" w-full xl:not-hover:max-w-50  overflow-hidden xl:h-auto  rounded-md xl:hover:grow! xl:hover:max-w-100!  transition-all!  duration-600 group">
            <GrowCart key={item.id} item={item} type={"movie"} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
