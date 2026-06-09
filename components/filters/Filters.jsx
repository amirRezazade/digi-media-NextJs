"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const genres = [
  { id: "all", name: "همه" },
  { id: "28", name: "اکشن" },
  { id: "99", name: "مستند" },
  { id: "36", name: "تاریخی" },
  { id: "80", name: "جنایی" },
  { id: "18", name: "درام" },
  { id: "878", name: "عملی تخیلی" },
  { id: "14", name: "فانتزی" },
  { id: "12", name: "ماجراجویی" },
  { id: "53", name: "هیجان انگیز" },
  { id: "35", name: "کمدی" },
  { id: "27", name: "ترسناک" },
  { id: "10749", name: "عاشقانه" },
  { id: "16", name: "انیمیشن" },
  { id: "10402", name: "موزیکال" },
  { id: "9648", name: "معمایی" },
  { id: "10751", name: "خانوادگی" },
  { id: "10752", name: "جنگی" },
  { id: "37", name: "وسترن" },
];
const sortOptions = [
  { id: "popularity.desc", name: "محبوب‌ترین" },
  { id: "release_date.desc", name: "جدیدترین" },
  { id: "vote_average.desc", name: "بهترین امتیاز" },
];

const countries = [
  { id: "all", name: "همه " },
  { id: "US", name: "آمریکا" },
  { id: "IR", name: "ایران " },
  { id: "TR", name: "ترکیه" },
  { id: "KR", name: "کره جنوبی" },
  { id: "GB", name: "بریتانیا" },
  { id: "FR", name: "فرانسه" },
  { id: "DE", name: "آلمان جنوبی" },
  { id: "IN", name: "هند" },
  { id: "CN", name: "چین" },
  { id: "JP", name: "ژاپن" },
];
export default function Filters() {
  let router = useRouter();

  let [moreFilters, setMoreFilters] = useState(false);
  let [mediaType, setMediaType] = useState("all");
  let [genre, setGenre] = useState("all");
  let [country, setCountry] = useState("all");
  let [sort, setSort] = useState("popularity.desc");
  let [fromYear, setFromYear] = useState(null);
  let [toYear, setToYear] = useState(null);
  let [fromRate, setFromRate] = useState(null);
  let [toRate, setToRate] = useState(null);

  function submit() {
    const params = new URLSearchParams();

    if (mediaType !== "all") params.set("type", mediaType);
    if (genre !== "all") params.set("genre", genre);
    if (sort !== "popularity.desc") params.set("sort", sort);
    if (country !== "all") params.set("country", country);
    if (fromYear) params.set("fromYear", fromYear);
    if (toYear) params.set("toYear", toYear);
    if (fromRate) params.set("fromRate", fromRate);
    if (toRate) params.set("toRate", toRate);
    router.push(`/search?${params.toString()}`, { scroll: false });
  }
  return (
    <section className={`w-[90vw]  mx-auto flex flex-col  gap-2 -translate-y-1/3 md:translate-y-0 lg:-translate-y-1/3 rounded-2xl overflow-hidden transition-[max_height] duration-300 shadow-lg shadow-gray-300 dark:shadow-transparent ${moreFilters ? "max-h-40" : "max-h-18"}`}>
      <Link href="/search" className="text-center text-base sm:text-lg  text-gray-500 dark:text-gray-200 block rounded-2xl py-2.5 transition-colors duration-300 bg-white dark:bg-gray-800 hover:text-orange-400 lg:hidden">
        جستجوی حرفه‌ای
      </Link>
      <div className="hidden lg:flex justify-between items-center text-sm p-3 text-gray-500 rounded-2xl  dark:text-gray-200 bg-white dark:bg-gray-800 ">
        <div className="theme text-sm p-2 rounded-full flex items-center gap-1">
          <button onClick={() => setMediaType("all")} className={`py-1.5 px-2 xl:px-4 rounded-xl cursor-pointer transition-colors duration-300  ${mediaType == "all" && "bg-orange-400 text-white"}`}>
            همه
          </button>
          <button onClick={() => setMediaType("movie")} className={`py-1.5 px-2 xl:px-4 rounded-xl cursor-pointer transition-colors duration-300 ${mediaType == "movie" && "bg-orange-400 text-white"}`}>
            فیلم
          </button>
          <button onClick={() => setMediaType("series")} className={`py-1.5 px-2 xl:px-4 rounded-xl cursor-pointer transition-colors duration-300 ${mediaType == "series" && "bg-orange-400 text-white"}`}>
            سریال
          </button>
        </div>
        <FilterSelect label="ژانر" value={genre} onChange={setGenre} options={genres} />

        <FilterSelect label="کشور" value={country} onChange={setCountry} options={countries} />
        <FilterSelect label="مرتب‌سازی" value={sort} onChange={setSort} options={sortOptions} />

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
        <div>
          <label className="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
            <span className="ms-3 text-xs xl:text-sm font-medium text-nowrap">دوبله فارسی</span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform  peer-checked:bg-orange-400"></div>
          </label>
        </div>
        <div>
          <label className="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
            <span className="ms-3 text-xs xl:text-sm font-medium text-nowrap  ">زیرنویس فارسی</span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform  peer-checked:bg-orange-400"></div>
          </label>
        </div>

        <div className="flex items-center gap-2 xl:gap-5   overflow-hidden  ">
          <input onChange={(e) => setFromYear(e.target.value.trim().toLowerCase())} type="text" className="theme text-xs h-10 xl:text-sm w-25 rounded-full placeholder-gray-500 dark:placeholder-gray-200 px-5 self-stretch border-0 outline-0 " placeholder="از سال " maxLength="4" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
          <span>تا</span>
          <input onChange={(e) => setToYear(e.target.value.trim().toLowerCase())} type="text" className="theme text-xs h-10 xl:text-sm w-25 rounded-full placeholder-gray-500 dark:placeholder-gray-200 px-5 self-stretch border-0 outline-0" placeholder="تا سال " maxLength="4" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
        </div>
        <div className="flex items-center gap-2 xl:gap-5 overflow-hidden ">
          <input onChange={(e) => setFromRate(e.target.value.trim().toLowerCase())} type="text" className="theme text-xs h-10 xl:text-sm w-22 xl:w-30 rounded-full px-4 placeholder-gray-500 dark:placeholder-gray-200 self-stretch border-0 outline-0 " placeholder="از امتیاز" maxLength="1" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
          <span>تا</span>
          <input onChange={(e) => setToRate(e.target.value.trim().toLowerCase())} type="text" className="theme w-22 text-xs h-10 xl:text-sm xl:w-30 rounded-full px-4 placeholder-gray-500 dark:placeholder-gray-200 self-stretch border-0 outline-0" placeholder="تا امتیاز" maxLength="1" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} />
        </div>
      </div>
    </section>
  );
}
function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="flex items-center gap-1 xl:gap-2">
      <label>{label}</label>
      <div className="theme rounded-full px-2 overflow-hidden">
        <select value={value} onChange={(e) => onChange(e.target.value)} className="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2">
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
