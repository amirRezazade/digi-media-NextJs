"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cart from "@/components/cart/Cart";
import ActorCart from "@/components/cart/ActorCart";
import Pagination from "@/components/Pagination";

const genres = [
  { id: "all", name: "همه" },
  { id: "28", name: "اکشن" },
  { id: "99", name: "بیوگرافی" },
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
  { id: "revenue.desc", name: "پرفروش‌ترین" },
];

const countries = [
  { id: "all", name: "همه کشورها" },
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

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [type, setType] = useState(searchParams.get("type") || "all");
  const [genre, setGenre] = useState(searchParams.get("genre") || "all");
  const [sort, setSort] = useState(searchParams.get("sort") || "popularity.desc");
  const [country, setCountry] = useState(searchParams.get("country") || "all");
  const [fromYear, setFromYear] = useState(searchParams.get("fromYear") || "");
  const [toYear, setToYear] = useState(searchParams.get("toYear") || "");
  const [fromRate, setFromRate] = useState(searchParams.get("fromRate") || "");
  const [toRate, setToRate] = useState(searchParams.get("toRate") || "");
  const [dubbed, setDubbed] = useState(false);
  const [subtitled, setSubtitled] = useState(true);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [totalPage, setTotalPage] = useState(0);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch() {
    setItems([]);
    setIsLoading(true);
    const params = new URLSearchParams();
    if (query.trim()) params.set("query", query.trim());
    if (type !== "all") params.set("type", type);
    if (genre) params.set("genre", genre);
    if (sort) params.set("sort", sort);
    if (country) params.set("country", country);
    if (fromYear) params.set("fromYear", fromYear);
    if (toYear) params.set("toYear", toYear);
    if (fromRate) params.set("fromRate", fromRate);
    if (toRate) params.set("toRate", toRate);
    if (page) params.set("page", page);
    router.push(`/search?${params.toString()}`);
    if (query.length) {
      if (type == "series") SearchByQuery("tv");
      if (type == "movie") SearchByQuery("movie");
      if (type == "all") SearchByQuery("multi");
    } else {
      if (type == "series") searchSeries();
      if (type == "movie") searchMovie();
    }
  }
  function resetPage() {
    setPage(1);
    handleSearch();
  }
  useEffect(() => {
    handleSearch();
  }, [page]);

  function searchMovie() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${genre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${sort}${fromYear ? `&primary_release_date.gte=${fromYear}-01-01` : ""}${toYear ? `&primary_release_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${
        toRate ? `&vote_average.lte=${toRate}` : ""
      }&vote_count.gte=100&include_adult=false&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setItems(res.results);
        setIsLoading(false);
        setTotalPage(res.total_pages);
      });
  }
  function searchSeries() {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${genre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${sort}${fromYear ? `&first_air_date.gte=${fromYear}-01-01` : ""}${toYear ? `&first_air_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${
        toRate ? `&vote_average.lte=${toRate}` : ""
      }&vote_count.gte=100&include_adult=false&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setItems(res.results);
        setIsLoading(false);
        setTotalPage(res.total_pages);
      });
  }
  function SearchByQuery(type) {
    fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&page=${page}&include_adult=false`)
      .then((res) => res.json())
      .then((res) => {
        setItems(res.results);
        setIsLoading(false);
        setTotalPage(res.total_pages);
      });
  }

  return (
    <div className="min-h-screen bg-cover bg-fixed bg-[url(/images/default-bg.jpg)] text-gray-200 ">
      {/* Background glow */}

      <main className=" py-7 px-3 md:px-6 lg:px-8 xl:px-12 xl:py-8 relative z-1 2xl:max-w-370 mx-auto">
        <div className=" max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold mb-2 bg-linear-to-l from-orange-400 to-white bg-clip-text text-transparent">جستجوی حرفه‌ای</h1>
            <p className=" text-sm">فیلم‌ها، سریال‌ها و هنرمندان مورد علاقه‌ات رو پیدا کن</p>
          </div>

          {/* Search input */}
          <div className="relative mb-6">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && resetPage()} placeholder="نام فیلم، سریال یا بازیگر را بنویسید..." className="w-full text-gray-500 dark:text-gray-200 bg-white dark:bg-gray-800 border border-white/8 rounded-2xl py-4 pr-5 pl-36 text-base  placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-all" />
            <button onClick={resetPage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all active:scale-95">
              🔍 جستجو
            </button>
          </div>

          {/* Filters card */}
          <div className="text-gray-500 dark:text-gray-200 bg-white dark:bg-gray-800 border border-white/7 rounded-2xl p-5 sm:p-6 mb-8">
            {/* Type tabs */}
            <div className="flex gap-2 mb-6">
              {[
                { id: "all", label: "همه" },
                { id: "movie", label: "فیلم" },
                { id: "series", label: "سریال" },
              ].map((t) => (
                <button key={t.id} onClick={() => setType(t.id)} className={`px-5 py-2 rounded-lg text-sm font-bold border transition-all ${type === t.id ? "bg-orange-500 border-orange-500 text-white" : "border-white/10  hover:border-orange-500 hover:text-orange-400 bg-transparent"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Filter grid */}
            <div className="grid grid-cols-2 xs:grid-cols-3  gap-3 mb-4 text-xs md:text-sm">
              <FilterSelect label="ژانر" value={genre} onChange={setGenre} options={genres} />
              <FilterSelect label="کشور" value={country} onChange={setCountry} options={countries} />
              <div className="col-span-2 xs:col-span-1">
                <FilterSelect label="مرتب‌سازی" value={sort} onChange={setSort} options={sortOptions} />
              </div>
            </div>

            {/* Range row */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Year range */}
              <div>
                <label className="block text-xs  mb-2 uppercase tracking-wide font-medium">بازه سال</label>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="از" value={fromYear} onChange={(e) => setFromYear(e.target.value)} className="w-full bg-[#161e2e] border border-white/8 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-400 outline-none focus:border-orange-500 transition-all" />
                  <span className=" text-sm shrink-0">تا</span>
                  <input type="number" placeholder="تا" value={toYear} onChange={(e) => setToYear(e.target.value)} className="w-full bg-[#161e2e] border border-white/8 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-400 outline-none focus:border-orange-500 transition-all" />
                </div>
              </div>

              {/* Rating range */}
              <div>
                <label className="block text-xs  mb-2 uppercase tracking-wide font-medium">بازه امتیاز</label>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="از" min="0" max="10" value={fromRate} onChange={(e) => setFromRate(e.target.value)} className="w-full bg-[#161e2e] border border-white/8 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-400 outline-none focus:border-orange-500 transition-all" />
                  <span className=" text-sm shrink-0">تا</span>
                  <input type="number" placeholder="تا" min="0" max="10" value={toRate} onChange={(e) => setToRate(e.target.value)} className="w-full bg-[#161e2e] border border-white/8 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-400 outline-none focus:border-orange-500 transition-all" />
                </div>
              </div>
            </div>

            {/* Toggles + Submit */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/7">
              <div class=" flex items-center gap-0 sm:gap-2 xl:gap-4">
                <div>
                  <label class="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
                    <span class="ms-3 text-xs xl:text-sm font-medium text-nowrap">دوبله فارسی</span>
                    <input type="checkbox" checked={dubbed} onChange={(e) => setDubbed(e.target.checked)} class="sr-only peer" />
                    <div class="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-400"></div>
                  </label>
                </div>
                <div>
                  <label class="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
                    <span class="ms-3 text-xs xl:text-sm font-medium text-nowrap  ">زیرنویس فارسی</span>
                    <input type="checkbox" checked={subtitled} onChange={(e) => setSubtitled(e.target.checked)} class="sr-only peer" />
                    <div class="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-400"></div>
                  </label>
                </div>
              </div>
              <button onClick={resetPage} className="mr-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all active:scale-95">
                اعمال فیلترها
              </button>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {isLoading && (
          <div className="flex justify-center py-10">
            <span className="size-12 rounded-full border-4 border-orange-400 border-t-transparent border-b-transparent animate-spin"></span>
          </div>
        )}
        {!isLoading && !items?.length && (
          <div className="text-center py-20 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Movie-Cinema-Watch--Streamline-Ultimate" height={50} width={50}>
              <desc>{"\n    Movie Cinema Watch Streamline Icon: https://streamlinehq.com\n  "}</desc>
              <path
                fill="#ff808c"
                d="M23 16.9844c-0.4262 0.186 -0.7888 0.4922 -1.0436 0.881 -0.2548 0.3889 -0.3908 0.8435 -0.3912 1.3085 0 -0.6342 -0.252 -1.2424 -0.7004 -1.6909 -0.4485 -0.4485 -1.0567 -0.7004 -1.6909 -0.7004 -0.6342 0 -1.2424 0.2519 -1.6909 0.7004 -0.4485 0.4485 -0.7004 1.0567 -0.7004 1.6909 0 -0.6342 -0.252 -1.2424 -0.7004 -1.6909 -0.4485 -0.4485 -1.0567 -0.7004 -1.6909 -0.7004 -0.6342 0 -1.2424 0.2519 -1.6909 0.7004 -0.4485 0.4485 -0.7004 1.0567 -0.7004 1.6909 0 -0.314 -0.0619 -0.625 -0.182 -0.9151 -0.1202 -0.2901 -0.2964 -0.5537 -0.5184 -0.7758 -0.2221 -0.222 -0.4857 -0.3982 -0.7758 -0.5184 -0.2901 -0.1201 -0.60109 -0.182 -0.91511 -0.182 -0.63422 0 -1.24246 0.2519 -1.69091 0.7004 -0.44846 0.4485 -0.7004 1.0567 -0.7004 1.6909 0 -0.314 -0.06184 -0.625 -0.18202 -0.9151 -0.12018 -0.2901 -0.29632 -0.5537 -0.51837 -0.7758 -0.22206 -0.222 -0.48567 -0.3982 -0.77579 -0.5184 -0.29014 -0.1201 -0.60109 -0.182 -0.91512 -0.182 -0.63421 0 -1.24245 0.2519 -1.69091 0.7004 -0.44845 0.4485 -0.70039 1.0567 -0.70039 1.6909 -0.00042 -0.465 -0.13637 -0.9196 -0.3912 -1.3085 -0.25481 -0.3888 -0.61747 -0.695 -1.04358 -0.881V23h22v-6.0156Z"
                strokeWidth={1}
              />
              <path fill="#808080" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M23 11.5217V2.91305c0 -1.05654 -0.8565 -1.91304 -1.9131 -1.91304H2.91304C1.8565 1.00001 1 1.85651 1 2.91305v8.60865c0 1.0566 0.8565 1.9131 1.91304 1.9131H21.0869c1.0566 0 1.9131 -0.8565 1.9131 -1.9131Z" strokeWidth={1} />
              <path fill="#e3e3e3" d="M19.174 1.00001H4.82617V13.4348H19.174V1.00001Z" strokeWidth={1} />
              <path fill="#ffffff" d="M18.2175 1.00001H4.82617V13.4348h0.95652L18.2175 1.00001Z" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M19.174 1.00001H4.82617V13.4348H19.174V1.00001Z" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M1 4.8261h3.82608" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M1 9.6087h3.82608" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M19.1738 4.8261h3.8261" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M19.1738 9.6087h3.8261" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M7.21747 19.6522c0.63422 0 1.24246 0.2519 1.69091 0.7003 0.44846 0.4485 0.7004 1.0568 0.7004 1.691V23H4.82617v-0.9565c0 -0.6342 0.25194 -1.2425 0.70039 -1.691 0.44846 -0.4484 1.0567 -0.7003 1.69091 -0.7003Z" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12.0002 19.6522c0.6342 0 1.2424 0.2519 1.6909 0.7003 0.4484 0.4485 0.7004 1.0568 0.7004 1.691V23H9.60889v-0.9565c0 -0.6342 0.25193 -1.2425 0.70041 -1.691 0.4485 -0.4484 1.0567 -0.7003 1.6909 -0.7003Z" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M16.7824 19.6522c0.6342 0 1.2424 0.2519 1.691 0.7003 0.4484 0.4485 0.7003 1.0568 0.7003 1.691V23h-4.7826v-0.9565c0 -0.6342 0.252 -1.2425 0.7004 -1.691 0.4485 -0.4484 1.0567 -0.7003 1.6909 -0.7003Z" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M1 22.9999h3.82608v-0.9565c0.00199 -0.4449 -0.12068 -0.8814 -0.35412 -1.2601 -0.23344 -0.3786 -0.5683 -0.6843 -0.96661 -0.8823 -0.39832 -0.1981 -0.84415 -0.2806 -1.28697 -0.2382 -0.44281 0.0424 -0.86489 0.208 -1.21838 0.478" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M22.9999 20.1408c-0.3535 -0.27 -0.7755 -0.4356 -1.2184 -0.478 -0.4428 -0.0424 -0.8886 0.0401 -1.2869 0.2382 -0.3984 0.198 -0.7332 0.5037 -0.9666 0.8823 -0.2334 0.3787 -0.3562 0.8152 -0.3541 1.2601v0.9565h3.826" strokeWidth={1} />
              <path
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23 16.9844c-0.4262 0.186 -0.7888 0.4922 -1.0436 0.881 -0.2548 0.3889 -0.3908 0.8435 -0.3912 1.3085 0 -0.6342 -0.252 -1.2424 -0.7004 -1.6909 -0.4485 -0.4485 -1.0567 -0.7004 -1.6909 -0.7004 -0.6342 0 -1.2424 0.2519 -1.6909 0.7004 -0.4485 0.4485 -0.7004 1.0567 -0.7004 1.6909 0 -0.6342 -0.252 -1.2424 -0.7004 -1.6909 -0.4485 -0.4485 -1.0567 -0.7004 -1.6909 -0.7004 -0.6342 0 -1.2424 0.2519 -1.6909 0.7004 -0.4485 0.4485 -0.7004 1.0567 -0.7004 1.6909 0 -0.314 -0.0619 -0.625 -0.182 -0.9151 -0.1202 -0.2901 -0.2964 -0.5537 -0.5184 -0.7758 -0.2221 -0.222 -0.4857 -0.3982 -0.7758 -0.5184 -0.2901 -0.1201 -0.60109 -0.182 -0.91511 -0.182 -0.63422 0 -1.24246 0.2519 -1.69091 0.7004 -0.44846 0.4485 -0.7004 1.0567 -0.7004 1.6909 0 -0.314 -0.06184 -0.625 -0.18202 -0.9151 -0.12018 -0.2901 -0.29632 -0.5537 -0.51837 -0.7758 -0.22206 -0.222 -0.48567 -0.3982 -0.77579 -0.5184 -0.29014 -0.1201 -0.60109 -0.182 -0.91512 -0.182 -0.63421 0 -1.24245 0.2519 -1.69091 0.7004 -0.44845 0.4485 -0.70039 1.0567 -0.70039 1.6909 -0.00042 -0.465 -0.13637 -0.9196 -0.3912 -1.3085 -0.25481 -0.3888 -0.61747 -0.695 -1.04358 -0.881"
                strokeWidth={1}
              />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M2.43457 19.1739v0.4783" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M7.21729 19.1739v0.4783" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12 19.1739v0.4783" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M16.7827 19.1739v0.4783" strokeWidth={1} />
              <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M21.5654 19.1739v0.4783" strokeWidth={1} />
              <path
                fill="#66e1ff"
                d="M15.5393 8.10879c0.1796 -0.06986 0.3339 -0.19235 0.4428 -0.35143 0.1088 -0.15908 0.167 -0.34731 0.167 -0.54005 0 -0.19273 -0.0582 -0.38097 -0.167 -0.54005 -0.1089 -0.15907 -0.2632 -0.28157 -0.4428 -0.35143L9.30373 3.90201c-0.07246 -0.02814 -0.1507 -0.03819 -0.22793 -0.02929 -0.07723 0.00892 -0.15113 0.03651 -0.21528 0.08042 -0.06416 0.0439 -0.11665 0.10278 -0.15293 0.17154 -0.03627 0.06876 -0.05524 0.14533 -0.05525 0.22307v5.73915c0.00001 0.0777 0.01898 0.1543 0.05525 0.223 0.03628 0.0688 0.08877 0.1277 0.15293 0.1716 0.06415 0.0439 0.13805 0.0715 0.21528 0.0804 0.07723 0.0089 0.15547 -0.0012 0.22793 -0.0293l6.23557 -2.42381Z"
                strokeWidth={1}
              />
              <path fill="#c2f3ff" d="M8.79295 10.4245 13.632 5.58549 9.30373 3.90201c-0.07246 -0.02814 -0.1507 -0.03819 -0.22793 -0.02929 -0.07723 0.00892 -0.15113 0.03651 -0.21528 0.08042 -0.06416 0.0439 -0.11665 0.10278 -0.15293 0.17154 -0.03627 0.06876 -0.05524 0.14533 -0.05525 0.22307v5.73915c0.00028 0.1267 0.05085 0.2482 0.14061 0.3376Z" strokeWidth={1} />
              <path
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5393 8.10879c0.1796 -0.06986 0.3339 -0.19235 0.4428 -0.35143 0.1088 -0.15908 0.167 -0.34731 0.167 -0.54005 0 -0.19273 -0.0582 -0.38097 -0.167 -0.54005 -0.1089 -0.15907 -0.2632 -0.28157 -0.4428 -0.35143L9.30373 3.90201c-0.07246 -0.02814 -0.1507 -0.03819 -0.22793 -0.02929 -0.07723 0.00892 -0.15113 0.03651 -0.21528 0.08042 -0.06416 0.0439 -0.11665 0.10278 -0.15293 0.17154 -0.03627 0.06876 -0.05524 0.14533 -0.05525 0.22307v5.73915c0.00001 0.0777 0.01898 0.1543 0.05525 0.223 0.03628 0.0688 0.08877 0.1277 0.15293 0.1716 0.06415 0.0439 0.13805 0.0715 0.21528 0.0804 0.07723 0.0089 0.15547 -0.0012 0.22793 -0.0293l6.23557 -2.42381Z"
                strokeWidth={1}
              />
            </svg>
            <p className="text-base">جستجو کنید تا نتایج نمایش داده شود</p>
          </div>
        )}

        <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 lg:gap-5 gap-y-6 gap-4 ">{items?.map((item) => (item.media_type == "person" ? <ActorCart key={item.id} actor={item} /> : <Cart key={item.id} type={item.media_type == "movie" || item.release_date ? "movie" : "series"} item={item} />))}</div>
        {totalPage > 1 && <Pagination page={page} totalPage={totalPage} onPage={setPage} />}
      </main>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block mb-2 uppercase tracking-wide font-medium">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-[#161e2e] border border-white/8 rounded-lg px-3 py-2.5  text-slate-200 outline-none focus:border-orange-500 transition-all cursor-pointer appearance-none">
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}
