"use client";
import Pagination from "@/components/Pagination";
import { useState } from "react";

export default function page(params) {
  let [mediaType, setMediaType] = useState("all");
  let [double, setDouble] = useState(false);
  let [subtitle, setSubtitle] = useState(false);
  let [country, setCountry] = useState("US");
  let [sort, setSort] = useState("all");
  let [age, setAge] = useState("all");
  let [genre, setGenre] = useState("all");

  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(3);
  return (
    <main className="relative min-h-screen text-gray-200 bg-cover bg-fixed bg-[url(/images/default-bg.jpg)]">
      <div className="absolute w-full h-full top-0 left-0 bg-black/30 "></div>

      <section class="h-auto mx-3 md:mx-5 lg:mx-8 xl:mx-12 py-5 relative z-5  flex flex-col  gap-2  rounded-2xl overflow-hidden transition-all duration-300 shadow-lg shadow-gray-300 dark:shadow-transparent">
        <h1 class="text-2xl lg:text-3xl block text-center font-extrabold text-black dark:text-white py-8 md:py-10 lg:py-13 ">نتایج جستجوی حرفه ای</h1>
        <div class="flex  flex-wrap gap-y-7 gap-x-2 justify-between  items-center text-sm p-3 text-gray-500 rounded-2xl  dark:text-gray-200 bg-white dark:bg-gray-800 ">
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
          <div class=" flex items-center gap-0 sm:gap-2 xl:gap-4">
            <div>
              <label class="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
                <span class="ms-3 text-xs xl:text-sm font-medium text-nowrap">دوبله فارسی</span>
                <input type="checkbox" checked={double} onChange={(e) => setDouble(e.target.checked)} class="sr-only peer" />
                <div class="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-400"></div>
              </label>
            </div>
            <div>
              <label class="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
                <span class="ms-3 text-xs xl:text-sm font-medium text-nowrap  ">زیرنویس فارسی</span>
                <input type="checkbox" checked={subtitle} onChange={(e) => setSubtitle(e.target.checked)} class="sr-only peer" />
                <div class="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-400"></div>
              </label>
            </div>
          </div>
          <div class=" flex items-center gap-2">
            <span>کشور</span>
            <div class="theme rounded-full px-1 lg:px-2 overflow-hidden">
              <select value={country} onChange={(e) => setCountry(e.target.value)} class="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2 ">
                <option value="all">همه</option>
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
          <div class=" flex items-center gap-2">
            <span>مرتب سازی</span>
            <div class="theme rounded-full px-1 lg:px-2 overflow-hidden">
              <select value={sort} onChange={(e) => setSort(e.target.value)} class="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2 ">
                <option value="all">همه</option>
                <option value="sort_by=vote_average.desc">امتیاز</option>
                <option value="sort_by=popularity.desc">محبوبیت</option>
                <option value="sort_by=release_date.desc">جدبدترین</option>
                <option value="sort_by=release_date.asc">قدیمی ترین</option>
              </select>
            </div>
          </div>
          <div class=" flex items-center gap-2">
            <span>رده سنی</span>
            <div class="theme rounded-full px-1 lg:px-2 overflow-hidden">
              <select value={age} onChange={(e) => setAge(e.target.value)} class="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2">
                <option value="all">همه</option>
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
          <div class=" flex items-center gap-1 xl:gap-2">
            <span>ژانر</span>
            <div class="theme rounded-full px-1 lg:px-2 overflow-hidden">
              <select value={genre} onChange={(e) => setGenre(e.target.value)} class="text-xs sm:text-sm theme border-0 outline-0 cursor-pointer p-1 lg:p-2">
                <option value="all">همه</option>

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
          <div class=" lg:w-1/3 flex items-center gap-1  sm:gap-2 xl:gap-5   overflow-hidden  ">
            <input id="fromYear" type="text" class="theme text-xs h-8 sm:h-10 xl:text-sm w-20 sm:w-25 rounded-full placeholder-gray-500 dark:placeholder-gray-200 px-5 self-stretch border-0 outline-0 " placeholder="از سال " maxlength="4" oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
            <span>تا</span>
            <input id="toYear" type="text" class="theme text-xs h-8 sm:h-10 xl:text-sm w-20 sm:w-25 rounded-full placeholder-gray-500 dark:placeholder-gray-200 px-5 self-stretch border-0 outline-0" placeholder="تا سال " maxlength="4" oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
          </div>
          <div class="lg:w-1/3 lg:justify-end flex items-center gap-1  sm:gap-2 xl:gap-5 overflow-hidden lg:order-12">
            <input id="fromPoint" type="text" class="theme text-xs h-8 sm:h-10 xl:text-sm w-20 sm:w-25 xl:w-30 rounded-full px-4 placeholder-gray-500 dark:placeholder-gray-200 self-stretch border-0 outline-0 " placeholder="از امتیاز" maxlength="1" oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
            <span>تا</span>
            <input id="toPoint" type="text" class="theme text-xs h-8 sm:h-10 xl:text-sm w-20 sm:w-25 rounded-full px-4 placeholder-gray-500 dark:placeholder-gray-200 self-stretch border-0 outline-0" placeholder="تا امتیاز" maxlength="1" oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
          </div>
          <button id="search" class="w-1/1 sm:w-1/2 lg:w-auto lg:grow lg:order-10 mx-auto py-3 bg-orange-400 text-white self-stretch px-5 xl:px-8 text-xs xl:text-sm cursor-pointer rounded-full ">
            جستجو
          </button>
        </div>
        <span id="more-filters-toggle" class="hidden"></span>
      </section>

      <section class="h-auto my-10 md:my-15 xl:my-18 px-3 md:px-6 lg:px-8 xl:px-12 relative z-5">
        <h2 id="not-found-text" class=" hidden text-center text-xl text-black dark:text-white">
          پاسخی دریافت نشد
        </h2>

        <div id="items" class="flex justify-center flex-wrap xs:grid gap-4 lg:gap-5 gap-y-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7"></div>
        {totalPage > 1 && <Pagination page={page} totalPage={totalPage} onPage={setPage} />}
      </section>
    </main>
  );
}
