"use client";
import Cart from "@/components/cart/Cart";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function watchList(params) {
  const [filterType, setFilterType] = useState("all");
  const watchListRef = useRef([null]);
  let [movies, setMovies] = useState([]);
  let [series, setSeries] = useState([]);
  let [showList, setShowList] = useState([]);
  let [error, setError] = useState(false);
  let [retry, setRetry] = useState(1);

  useEffect(() => {
    document.title = "digi-media | watch-list";
  }, []);
  useEffect(() => {
    setShowList([]);
    watchListRef.current = getWatchlist();
    if (watchListRef.current.movie.length) getMovies();
    if (watchListRef.current.series.length) getSeries();

    async function getMovies() {
      const results = await Promise.all(
        watchListRef?.current?.movie?.map((id) =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
            .then((r) => r.json())
            .catch((e) => setError(true))
        )
      );
      setMovies(results);
    }
    async function getSeries() {
      const results = await Promise.all(
        watchListRef?.current?.series?.map((id) =>
          fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
            .then((r) => r.json())
            .catch((e) => setError(true))
        )
      );
      setSeries(results);
    }
  }, [retry]);
  useEffect(() => {
    if (filterType == "all") setShowList([...movies, ...series]);
    if (filterType == "movie") setShowList([...movies]);
    if (filterType == "series") setShowList([...series]);
  }, [filterType, series, movies]);

  function getWatchlist() {
    if (typeof window === "undefined") return { movie: [], series: [] };
    return JSON.parse(localStorage.getItem("watchlist") || '{"movie":[],"series":[]}');
  }

  return (
    <div className="bg-cover bg-fixed bg-[url(/images/default-bg.jpg)]  text-gray-200 pt-20 pb-10">
      <main className="min-h-[70vh] relative z-1 max-w-5xl mx-auto px-4 sm:px-6 py-5  backdrop-blur-md border border-gray-500/40 rounded-2xl ">
        {/* Header */}

        <div className="flex gap-2 mb-6 border-b border-gray-500/30 pb-0">
          <Link href="/profile" className={`px-5 py-3 text-sm   border-b-2 -mb-px  border-transparent `}>
            👤 پروفایل
          </Link>
          <button className={`px-5 py-3 text-sm   border-b-2 -mb-px border-orange-500 text-orange-400 `}>❤️ علاقه‌مندی‌ها</button>
        </div>

        <div>
          {/* Filter */}
          <div className="flex gap-2 mb-5">
            {[
              { id: "all", label: "همه" },
              { id: "movie", label: "فیلم‌ها" },
              { id: "series", label: "سریال‌ها" },
            ].map((f) => (
              <button key={f.id} onClick={() => setFilterType(f.id)} className={`px-4 py-2 rounded-lg text-sm  border transition-all ${filterType === f.id ? "bg-orange-500 border-orange-500 text-white" : "border-gray-400/50  hover:border-orange-500 hover:text-orange-400 "} transition-colors`}>
                {f.label}
              </button>
            ))}
            <span className="mr-auto text-sm  self-center">{showList?.length} مورد</span>
          </div>
          {error && (
            <div className="flex justify-center py-10">
              <button onClick={(e) => setRetry((prev) => prev + 1)} className="p-2 flex items-center gap-2  border border-gray-400/50 rounded-full text-sm">
                خطا در دریافت داده ها!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff8904" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
            </div>
          )}
          {showList?.length === 0 && !error && (
            <div className="text-center py-20 ">
              <div className="text-5xl mb-4 opacity-80">❤️</div>
              <p>هنوز چیزی اضافه نکردی</p>
            </div>
          )}
          {showList?.length !== 0 && (
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
              {showList?.map((item) => (
                <Cart key={item.id} type={item.release_date ? "movie" : "series"} item={item} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
