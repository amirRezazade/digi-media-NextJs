"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filters(params) {
  let router = useRouter();

  let [moreFilters, setMoreFilters] = useState(false);
  let [mediaType, setMediaType] = useState("all");
  let [genre, setGenre] = useState(null);
  let [country, setCountry] = useState(null);
  let [subTitlte, setSubtitle] = useState(false);
  let [double, setDouble] = useState(false);
  let [sort, setSort] = useState(null);
  let [age, setAge] = useState(null);
  let [fromYear, setFromYear] = useState(null);
  let [toYear, setToYear] = useState(null);
  let [fromPoint, setFromPoint] = useState(null);
  let [toPoint, setToPoint] = useState(null);

  function submit() {
    let link = `/search?${mediaType ? "&type=" + mediaType : ""}${country ? "&country=" + country : ""}${genre ? "&genre=" + genre : ""}${age ? "&age=" + age : ""}${double ? "&double=" + double : ""}${subTitlte ? "&Subtitle=" + subTitlte : ""}${fromYear ? "&fromYear=" + fromYear : ""}${toYear ? "&toYear=" + toYear : ""}${fromPoint ? "&fromPoint" + fromPoint : ""}${toPoint ? "&toPoint=" + toPoint : ""}${sort ? "&sort=" + sort : ""}`;
    router.push(link);
  }
  return (
    <section className={`w-[90vw]  mx-auto flex flex-col  gap-2 -translate-y-1/3 md:translate-y-0 lg:-translate-y-1/3 rounded-2xl overflow-hidden transition-[max_height] duration-300 shadow-lg shadow-gray-300 dark:shadow-transparent ${moreFilters ? "max-h-40" : "max-h-18"}`}>
      <Link href="/search" className="text-center text-base sm:text-lg  text-gray-500 dark:text-gray-200 block rounded-2xl py-2.5 transition-colors duration-300 bg-white dark:bg-gray-800 hover:text-orange-400 lg:hidden">
        جستجوی پیشرفته
      </Link>
      <div className="hidden lg:flex justify-between items-center text-sm p-3 text-gray-500 rounded-2xl  dark:text-gray-200 bg-white dark:bg-gray-800 ">
        <div className="theme text-sm p-2 rounded-full flex items-center gap-1">
          <button onClick={() => setMediaType("all")} className={`py-1.5 px-2 xl:px-4 rounded-xl cursor-pointer transition-colors duration-300  ${mediaType == "all" && "bg-orange-400 text-white"}`}>
            همه
          </button>
          <button onClick={() => setMediaType("movie")} className={`py-1.5 px-2 xl:px-4 rounded-xl cursor-pointer transition-colors duration-300 ${mediaType == "movie" && "bg-orange-400 text-white"}`}>
            فیلم
          </button>
          <button onClick={() => setMediaType("tv")} className={`py-1.5 px-2 xl:px-4 rounded-xl cursor-pointer transition-colors duration-300 ${mediaType == "tv" && "bg-orange-400 text-white"}`}>
            سریال
          </button>
        </div>
        <div className="flex items-center gap-1 xl:gap-2">
          <span>ژانر</span>
          <div className="theme rounded-full px-2 overflow-hidden">
            <select className="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2" onChange={(e) => setGenre(e.target.value)}>
              <option value="">همه</option>
              <option value="28">اکشن</option>
              <option value="99">بیوگرافی</option>
              <option value="36">تاریخی</option>
              <option value="80">جنایی</option>
              <option value="18">درام</option>
              <option value="878">علمی تخیلی</option>
              <option value="14">فانتزی</option>
              <option value="12">ماجراجویی</option>
              <option value="53">هیجان انگیز</option>
              <option value="35">کمدی</option>
              <option value="27">ترسناک</option>
              <option value="10749">عاشقانه</option>
              <option value="16">انیمیشن</option>
              <option value="10402">موزیکال</option>
              <option value="9648">معمایی</option>
              <option value="10751">خانوادگی</option>
              <option value="10752">جنگی</option>
              <option value="37">وسترن</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>کشور</span>
          <div className="theme rounded-full px-2 overflow-hidden">
            <select onChange={(e) => setCountry(e.target.value)} className="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2 ">
              <option value="">همه</option>
              <option value="US">آمریکا</option>
              <option value="IR">ایران</option>
              <option value="TR">ترکیه</option>
              <option value="KR">کره جنوبی</option>
              <option value="GB">بریتانیا</option>
              <option value="FR">فرانسه</option>
              <option value="DE">آلمان</option>
              <option value="IN">هند</option>
              <option value="CN">چین</option>
              <option value="JP">ژاپن</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 xl:gap-4">
          <div>
            <label className="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
              <span className="ms-3 text-xs xl:text-sm font-medium text-nowrap">دوبله فارسی</span>
              <input onChange={(e) => setDouble(e.target.checked)} type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform  peer-checked:bg-orange-400"></div>
            </label>
          </div>
          <div>
            <label className="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
              <span className="ms-3 text-xs xl:text-sm font-medium text-nowrap  ">زیرنویس فارسی</span>
              <input onChange={(e) => setSubtitle(e.target.checked)} type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform  peer-checked:bg-orange-400"></div>
            </label>
          </div>
        </div>
        <button onClick={() => setMoreFilters((prev) => (prev ? false : true))} className="flex items-center gap-2 theme self-stretch px-3 xl:px-5 text-xs xl:text-sm cursor-pointer rounded-full">
          <span>فیلتر های بیشتر</span>
          <span className="flex justify-center items-center rounded-full w-8 h-8 bg-white dark:bg-gray-800">
            <svg className="stroke-[#6a7282] dark:stroke-[#e5e7eb]" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M4 7H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 12L17 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 17H13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
              </g>
            </svg>
          </span>
        </button>
        <button onClick={submit} className="bg-orange-400 text-white self-stretch px-5 xl:px-8 text-xs xl:text-sm cursor-pointer rounded-full ">
          جستجو
        </button>
      </div>
      <div className="hidden lg:flex justify-between xl:justify-around items-center text-sm p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-300 dark:shadow-transparent text-gray-500 dark:text-gray-200  top-40 w-1/1 h-1/1">
        <div className=" flex items-center gap-2">
          <span>مرتب سازی</span>
          <div className="theme rounded-full px-1 lg:px-2 overflow-hidden">
            <select onChange={(e) => setSort(e.target.value)} className="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2 ">
              <option value="">همه</option>
              <option value="sort_by=vote_average.desc">امتیاز</option>
              <option value="sort_by=popularity.desc">محبوبیت</option>
              <option value="sort_by=release_date.desc">جدبدترین</option>
              <option value="sort_by=release_date.asc">قدیمی ترین</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>رده سنی</span>
          <div className="theme rounded-full px-2 overflow-hidden">
            <select onChange={(e) => setAge(e.target.value)} className="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2">
              <option>همه</option>
              <option data-value="G" value="TV-Y">
                کودکان
              </option>
              <option data-value="G" value="TV-G">
                خانوادگی
              </option>
              <option data-value="PG" value="TV-PG">
                نظارت والدین
              </option>
              <option data-value="PG-13" value="TV-14">
                نوجوان 14+
              </option>
              <option data-value="R" value="TV-MA">
                بزرگسالان
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 xl:gap-5   overflow-hidden  ">
          <input onChange={(e) => setFromYear(e.target.value.trim().toLowerCase())} type="text" className="theme text-xs h-10 xl:text-sm w-25 rounded-full placeholder-gray-500 dark:placeholder-gray-200 px-5 self-stretch border-0 outline-0 " placeholder="از سال " maxLength="4" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
          <span>تا</span>
          <input onChange={(e) => setToYear(e.target.value.trim().toLowerCase())} type="text" className="theme text-xs h-10 xl:text-sm w-25 rounded-full placeholder-gray-500 dark:placeholder-gray-200 px-5 self-stretch border-0 outline-0" placeholder="تا سال " maxLength="4" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
        </div>
        <div className="flex items-center gap-2 xl:gap-5 overflow-hidden ">
          <input onChange={(e) => setFromPoint(e.target.value.trim().toLowerCase())} type="text" className="theme text-xs h-10 xl:text-sm w-22 xl:w-30 rounded-full px-4 placeholder-gray-500 dark:placeholder-gray-200 self-stretch border-0 outline-0 " placeholder="از امتیاز" maxLength="1" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
          <span>تا</span>
          <input onChange={(e) => setToPoint(e.target.value.trim().toLowerCase())} type="text" className="theme w-22 text-xs h-10 xl:text-sm xl:w-30 rounded-full px-4 placeholder-gray-500 dark:placeholder-gray-200 self-stretch border-0 outline-0" placeholder="تا امتیاز" maxLength="1" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
        </div>
      </div>
    </section>
  );
}
