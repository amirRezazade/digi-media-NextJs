"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "./recommendations.css";
import Link from "next/link";
import Image from "next/image";

export default function RecommendationsSwiper({ list }) {
  console.log(list);

  return (
    <section className="lg:min-h-[60vh] min-h-[50vh] h-auto">
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
              <Link href={`/series/${item.id}`} className="relative ">
                <div className="w-full relative rounded-lg overflow-hidden ">
                  <Image width={194} height={285} className="object-cover w-full min-h-55 lg:min-h-65 xl:min-h-70 loading-animation" src={`https://image.tmdb.org/t/p/original/${item.poster_path}_medium`} alt="" onError="this.onerror=null; this.src='/images/default_poster.jpg';" />
                  <div className="w-full h-full absolute top-0 left-0 bg-linear-to-b from-transparent from-50% to-black/50 to-90% transition-all duration-600 group-hover:opacity-0">
                    <p dir="ltr" className="p-5  px-3 text-sm absolute bottom-0 left-0  font-extrabold text-white">
                      {item.name ? item.name : item.original_name}
                    </p>
                  </div>
                </div>
                <div className="absolute w-full h-full top-0 left-0 rounded-lg bg-black/60 px-3 py-3.5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-90 transition-all duration-600">
                  <div className="absolute top-0 left-0 p-3 text-amber-400 flex justify-between w-full gap-1.5 items-start ">
                    <span>{item.first_air_date.slice(0, 4)}</span>
                    <span>{item.media_type === "tv" ? "سریال" : "فیلم"}</span>
                  </div>
                  <span className="absolute top-1/2 left-1/2 -translate-1/2">
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131" stroke="#cfcfcf" stroke-width="1.5" stroke-linecap="round"></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <div className=" absolute w-full p-3 bottom-0 left-0 flex justify-end items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-white">10/</span>
                      <span className="text-base lg:text-2xl text-amber-400 font-bold">{item.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
