"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cart from "@/components/cart/Cart";
import ActorCart from "@/components/cart/ActorCart";
import Pagination from "@/components/Pagination";
import NotFound from "@/components/NotFound";

const genreMap = {
  28: 10759, // اکشن
  12: 10759, // ماجراجویی
  53: 10759, // هیجان‌انگیز
  878: 10765, // علمی‌تخیلی
  14: 10765, // فانتزی
  10752: 10768, // جنگی
};
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
  const [error, setError] = useState(false);
  const scrollRef = useRef(null);

  function handleSearch() {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setItems([]);
    setIsLoading(true);
    setError(false);
    const params = new URLSearchParams();
    if (query.trim()) params.set("query", query.trim());
    if (type !== "all") params.set("type", type);
    if (genre !== "all") params.set("genre", genre);
    if (sort !== "popularity.desc") params.set("sort", sort);
    if (country !== "all") params.set("country", country);
    if (fromYear) params.set("fromYear", fromYear);
    if (toYear) params.set("toYear", toYear);
    if (fromRate) params.set("fromRate", fromRate);
    if (toRate) params.set("toRate", toRate);
    if (page != 1) params.set("page", page);
    router.push(`/search?${params.toString()}`, { scroll: false });
    if (query.length) {
      if (type == "series") SearchByQuery("tv");
      if (type == "movie") SearchByQuery("movie");
      if (type == "all") SearchByQuery("multi");
    } else {
      if (type == "series") searchSeries();
      if (type == "movie") searchMovie();
      if (type == "all") searchAll();
    }
  }
  function resetPage() {
    setPage(1);
    handleSearch();
  }
  useEffect(() => {
    handleSearch();
  }, [page]);

  async function searchMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${genre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${sort}${fromYear ? `&primary_release_date.gte=${fromYear}-01-01` : ""}${toYear ? `&primary_release_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${toRate ? `&vote_average.lte=${toRate}` : ""}&page=${page}`
      );
      // &vote_count.gte=100&include_adult=false&page=${page}
      let res = await response.json();
      if (!response.ok) setError(true);
      else setError(false);
      setItems(res.results);
      setTotalPage(res.total_pages > 500 ? 500 : res.total_pages);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
  }
  async function searchSeries() {
    try {
      const tvSort = sort == "release_date.desc" ? "first_air_date.desc" : sort;
      const tvGenre = genreMap[genre] ?? genre;

      const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${tvGenre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${tvSort}${fromYear ? `&first_air_date.gte=${fromYear}-01-01` : ""}${toYear ? `&first_air_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${toRate ? `&vote_average.lte=${toRate}` : ""}&page=${page}`);
      // &vote_count.gte=100&include_adult=false&page=${page}
      let res = await response.json();
      if (!response.ok) setError(true);
      else setError(false);
      setItems(res.results);
      setTotalPage(res.total_pages > 500 ? 500 : res.total_pages);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function searchAll() {
    const tvSort = sort == "release_date.desc" ? "first_air_date.desc" : sort;
    const tvGenre = genreMap[genre] ?? genre;
    try {
      const [movieRes, tvRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${genre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${sort}${fromYear ? `&primary_release_date.gte=${fromYear}-01-01` : ""}${toYear ? `&primary_release_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${toRate ? `&vote_average.lte=${toRate}` : ""}&page=${page}`),
        // &vote_count.gte=100&include_adult=false&page=${page}
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${tvGenre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${tvSort}${fromYear ? `&first_air_date.gte=${fromYear}-01-01` : ""}${toYear ? `&first_air_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${toRate ? `&vote_average.lte=${toRate}` : ""}&page=${page}`),
      ]);

      const movies = await movieRes.json();
      const tvs = await tvRes.json();
      if (!movieRes.ok || !tvRes.ok) setError(true);
      else setError(false);
      const all = [...movies?.results, ...tvs?.results];
      const sorted = all.sort((a, b) => {
        switch (sort) {
          case "popularity.desc":
            return b.popularity - a.popularity;

          case "vote_average.desc":
            return b.vote_average - a.vote_average;

          case "release_date.desc":
            return new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date);

          default:
            return b.popularity - a.popularity;
        }
      });
      setTotalPage(movies.total_pages + tvs.total_pages > 500 ? 500 : movies.total_pages + tvs.total_pages);
      setItems(sorted);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
  }
  async function SearchByQuery(type) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&page=${page}&include_adult=false`);
      let res = await response.json();
      if (!response.ok) setError(true);
      else setError(false);
      setItems(res.results);
      setTotalPage(res.total_pages > 500 ? 500 : res.total_pages);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
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
          <div className="text-gray-500 dark:text-gray-200 bg-stone-200 dark:bg-gray-800 border border-white/7 rounded-2xl p-5 sm:p-6 mb-8">
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
        <div ref={scrollRef} className="block w-full py-1"></div>
        {items.length > 0 && <div class=" grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 lg:gap-5 gap-y-6 gap-4 ">{items?.map((item) => (item.media_type == "person" ? <ActorCart key={item.id} actor={item} /> : <Cart key={item.id} type={item.media_type == "movie" || item.release_date ? "movie" : "series"} item={item} />))}</div>}
        {!items.length && !isLoading && !error && <NotFound />}
        {error && !isLoading && (
          <div className="flex justify-center py-10">
            <button onClick={handleSearch} className="p-2 flex items-center gap-2 backdrop-blur-lg border border-gray-400/50 rounded-full text-sm">
              خطا در دریافت داده ها!
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff8904" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          </div>
        )}
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
