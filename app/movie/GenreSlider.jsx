"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function GenreSlider({ activeGenre, onActiveGenre }) {
  const genres = [
    { id: "all", gen: "همه" },
    { id: 28, gen: "اکشن" },
    { id: 12, gen: "ماجراجویی" },
    { id: 878, gen: "علمی تخیلی" },
    { id: 80, gen: "جنایی" },
    { id: 9648, gen: "معمایی" },
    { id: 10752, gen: "جنگی" },
    { id: 27, gen: "ترسناک" },
    { id: 10749, gen: "عاشقانه" },
    { id: 18, gen: "درام" },
    { id: 99, gen: "مستند" },
    { id: 10751, gen: "خانوادگی" },
    { id: 35, gen: "کمدی" },
    { id: 16, gen: "انیمیشن" },
  ];

  return (
    <div className="  flex  gap-2 select-none py-4 px-2 lg:px-4 my-4 border border-gray-400/50 backdrop-blur-lg rounded-3xl overflow-hidden">
      <span className="shrink-0 text-sm md:text-base">ژانر ها:</span>
      <div className="max-w-[80%] xs:max-w-[90%]">
        <Swiper className="pe-15! ps-3!" slidesPerView={"auto"} freeMode={true} spaceBetween={10} centeredSlides={false}>
          {genres.map((item) => (
            <SwiperSlide key={item.id} className=" w-auto!">
              <button className={`px-2.5 py-1 cursor-pointer rounded-full border text-xs backdrop-blur-2xl ${activeGenre == item.id ? "text-orange-400 border-orange-400" : "hover:text-orange-400 hover:border-orange-400 transition-colors duration-300"}`} onClick={(e) => onActiveGenre(item.id)}>
                {item.gen}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
