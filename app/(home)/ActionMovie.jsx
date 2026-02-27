"use client";

import GrowCart from "@/components/cart/GrowCart";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ActionMovie(params) {
  let [list, setList] = useState(null);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${"cf30b054d9d7ec861b2a498d97eccdad"}&with_genres=28&without_genres=16,10751&vote_count.gte=2000`)
      .then((res) => res.json())
      .then((res) => setList(res.results));
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center  ">
        <div className="flex items-center gap-3">
          <span className="p-1.5 lg:p-2.5 rounded-full border-5 border-orange-400/50">
            {/* <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="27px" viewBox="0 0 512 512" xml:space="preserve" fill="#ff9800" stroke="#ff9800">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style type="text/css"> </style>{" "}
                <g>
                  {" "}
                  <path
                    className="st0"
                    d="M343.656,451.109C410,411.438,454.422,338.906,454.422,256c0-125.484-101.719-227.219-227.203-227.219 C101.719,28.781,0,130.516,0,256s101.719,227.219,227.219,227.219H512v-32.109H343.656z M318.484,145.875 c23.547-13.594,53.641-5.531,67.234,18.016s5.531,53.656-18.016,67.25c-23.547,13.578-53.641,5.516-67.234-18.016 C286.859,189.563,294.938,159.469,318.484,145.875z M300.453,297.688c13.609-23.547,43.703-31.609,67.25-18.016 c23.547,13.609,31.609,43.703,18.016,67.25s-43.688,31.609-67.25,18.016C294.938,351.344,286.859,321.234,300.453,297.688z M227.219,72.375c27.188,0,49.219,22.031,49.219,49.219s-22.031,49.25-49.219,49.25s-49.25-22.063-49.25-49.25 S200.031,72.375,227.219,72.375z M249.938,256c0,12.563-10.172,22.719-22.719,22.719c-12.563,0-22.719-10.156-22.719-22.719 s10.156-22.719,22.719-22.719C239.766,233.281,249.938,243.438,249.938,256z M68.703,163.891 c13.594-23.547,43.703-31.609,67.25-18.016s31.609,43.688,18.016,67.25c-13.594,23.531-43.703,31.609-67.25,18.016 C63.188,217.547,55.109,187.438,68.703,163.891z M135.969,364.938c-23.563,13.594-53.656,5.531-67.266-18.016 c-13.578-23.547-5.516-53.656,18.016-67.266c23.547-13.594,53.656-5.516,67.25,18.031S159.5,351.344,135.969,364.938z M177.969,389.203c0-27.188,22.063-49.234,49.25-49.234s49.219,22.047,49.219,49.234s-22.031,49.234-49.219,49.234 S177.969,416.391,177.969,389.203z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg> */}
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-[iran-bold] text-sm lg:text-base dark:text-white">فیلم های اکشن</span>
            <span className="text-xs lg:text-sm text-gray-500  dark:text-gray-300">معروف ترین ها</span>
          </div>
        </div>
        <a href="search.html?&type=movie&country=&genre=28&fromYear=0&toYear=0&fromPoint=&toPoint=&age=&double=false&Subtitle=false&page=1" className="flex items-center gap-2 p-2 lg:p-3.5 text-xs lg:text-sm rounded-full hover:opacity-75 transition-all duration-300 text-gray-500 dark:text-gray-300 bg-gray-300 dark:bg-gray-800">
          <span> مشاهده همه </span>
          <span>
            <svg className="fill-[#888888] dark:fill-[#c5c5c5]" width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path className="" fillRule="evenodd" clipRule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"></path>
              </g>
            </svg>
          </span>
        </a>
      </div>
      <Swiper
        className="test-swiper my-6 lg:my-10 "
        initialSlide={1}
        spaceBetween={15}
        // centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: "auto",
          },
          450: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
            allowTouchMove: false, // غیر فعال کردن swipe
          },
        }}
      >
        {/* <div className="swiper-wrapper action-movie items-stretch  lg:justify-center lg:h-auto select-none"> 

        </div> */}

        {list &&
          list.slice(0, 6).map((item) => (
            <SwiperSlide className=" w-full lg:not-hover:max-w-50  overflow-hidden lg:h-auto  rounded-md lg:hover:grow! lg:hover:max-w-100!  !transition-all  duration-600 group">
              <GrowCart key={item.id} item={item} type={"movie"} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
