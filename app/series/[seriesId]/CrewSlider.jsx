"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function CrewSlider({ crew }) {
  let mainList = crew.length < 15 ? crew : crew.slice(0, 15);
  return (
    <div class="flex justify-between gap-3 mt-4 grow">
      {mainList.length ? (
        <>
          <div class="hidden sm:flex items-center mb-5">
            <button class="p-1 cursor-pointer crew-prev aspect-square rounded-full border border-gray-500 dark:border-gray-300">
              <svg class="fill-black rotate-180 dark:fill-white" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill=""></path>{" "}
                </g>
              </svg>
            </button>
          </div>

          <Swiper
            className="w-full"
            slidesPerView={3}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={{
              nextEl: ".crew-next",
              prevEl: ".crew-prev",
            }}
            breakpoints={{
              500: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {mainList.map((act) => (
              <SwiperSlide className="shrink-0 group overflow-hidden">
                <Link href={`/actors/${act.id}`} className="flex flex-col items-center  gap-1.5">
                  <div className="aspect-square w-full rounded-full overflow-hidden loading-animation shrink-0">
                    <Image width={120} height={120} className="object-cover aspect-square w-full" src={act?.profile_path ? `https://image.tmdb.org/t/p/w185${act.profile_path}` : "/images/default-person.jpg"} alt={act.original_name} />
                  </div>
                  <div className="flex flex-col items-left w-full gap-0.5 mt-1 ">
                    <p dir="ltr" className="text-sm overflow-hidden text-black truncate block  dark:text-white text-center group-hover:text-orange-400 transition-all duration-300">
                      <span>{act.original_name}</span>
                    </p>
                    <span className="text-center text-xs text-gray-500 dark:text-gray-300">{act.known_for_department}</span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div class="hidden sm:flex items-center mb-5">
            <button class="p-1 cursor-pointer crew-next aspect-square rounded-full border border-gray-500  dark:border-gray-300">
              <svg class="fill-black  dark:fill-white" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill=""></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <p className="flex justify-center items-center w-full ">اطلاعاتی از عوامل این فیلم وجود ندارد!</p>
      )}
    </div>
  );
}
