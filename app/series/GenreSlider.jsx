"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState } from "react";
export default function GenreSlider(params) {
  let [activeGenre, setActiveGenre] = useState(null);
  const genres = {
    28: "اکشن",
    12: "ماجراجویی",
    35: "کمدی",
    80: "جنایی",
    99: "مستند",
    18: "درام",
    10751: "خانوادگی",
    36: "تاریخی",
    27: "ترسناک",
    9648: "معمایی",
    10749: "عاشقانه",
    878: "علمی تخیلی",
    10752: "جنگی",
  };
  return (
    <div className="  flex  gap-2 select-none py-4 px-2 lg:px-4 my-4 border border-gray-400/50 backdrop-blur-lg rounded-3xl overflow-hidden">
      <span className="shrink-0 text-sm md:text-base">ژانر ها:</span>
      <div className="max-w-[80%] xs:max-w-[90%]">
        <Swiper className="pe-15! ps-3!" slidesPerView={"auto"} freeMode={true} spaceBetween={10} centeredSlides={false}>
          {Object.entries(genres).map(([id, name]) => (
            <SwiperSlide key={id} className=" w-auto!">
              <button className={`px-2.5 py-1 cursor-pointer rounded-full border text-xs backdrop-blur-2xl ${activeGenre == id ? "text-orange-400 border-orange-400" : "hover:text-orange-400 hover:border-orange-400 transition-colors duration-300"}`} onClick={(e) => setActiveGenre(id)}>
                {name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
