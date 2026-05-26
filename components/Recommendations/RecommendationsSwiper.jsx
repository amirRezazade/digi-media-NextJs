"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "./recommendations.css";
import Link from "next/link";
import Image from "next/image";
import Cart from "../cart/Cart";

export default function RecommendationsSwiper({ list }) {
  return (
    <section className="lg:min-h-[60vh] min-h-[50vh] h-auto mb-2 lg:mb-8">
      <div className="theme px-4 lg:px-13 py-7 relative after:content-['']  after:w-1/1 after:absolute after:h-50 after:top-21 after:right-0 after:bg-orange-400 ">
        <div className="flex justify-between items-center">
          <div className=" z-1 flex items-center gap-0 max-w-1/2 xs:max-w-2/3 relative grow">
            <span className="flex items-center h-15 gap-0 sm:gap-2 bg-orange-400 relative before:content-['']  before:w-1/1   before:absolute before:h-full before:top-0 before:-right-1/1 before:bg-orange-400 before:-z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                <path d="M8.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M15.5 10c-2 0-2.5 2-2.5 2h5s-.5-2-2.5-2" />
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
                <path d="M14.83 14.83a3.94 3.94 0 0 1-2.02 1.09 4.053 4.053 0 0 1-2.37-.23 3.935 3.935 0 0 1-1.27-.86c-.18-.18-.34-.38-.49-.59l-1.66 1.12c.22.32.46.62.73.88.27.27.57.52.89.73s.66.4 1.02.55.74.27 1.13.35a6.1 6.1 0 0 0 2.42 0c.38-.08.76-.2 1.13-.35.36-.15.7-.34 1.02-.55s.62-.46.89-.73.52-.57.73-.89l-1.66-1.12c-.14.21-.31.41-.49.59Z" />
              </svg>
              <span className="text-white  text-sm hidden xs:inline-block text-nowrap"> پیشنهاد میکنیم تماشا کنید</span>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="180" height="60" viewBox="0 0 180 65">
                <g>
                  <g>
                    <path fill="#ff8904" d="M-870 60.36h922.255c48.145 0 77.582-60 125.275-60h629.53c30.635 0 0 0 55.47 8.09l-10 2114.458c0 0-0 0-55.47 0H75.47C44.835 231 0 227.377 0 222.908L0 68.45c0 24.835-8.092 55.47-8.092z" />
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div className="flex Recommendations-pagination justify-end  xs:max-w-25 text-white "></div>
        </div>
        <Swiper
          className=" my-6  h-full select-none"
          slidesPerView={2}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".Recommendations-pagination" }}
          breakpoints={{
            450: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1400: {
              spaceBetween: 20,
              slidesPerView: 7,
            },
          }}
        >
          {list?.map((item) => (
            <SwiperSlide className=" w-auto rounded-lg overflow-hidden transition-all duration-600 group ">
              <Cart type="series" item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
