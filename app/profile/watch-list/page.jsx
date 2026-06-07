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
  const [profile, setProfile] = useState({
    name: "علی رضایی",
    email: "ali@example.com",
    bio: "سینما دوست و منتقد فیلم",
    avatar: null,
  });

  function getWatchlist() {
    if (typeof window === "undefined") return { movie: [], series: [] };
    return JSON.parse(localStorage.getItem("watchlist") || '{"movie":[],"series":[]}');
  }

  return (
    <div className="bg-cover bg-fixed bg-[url(/images/default-bg.jpg)]  text-gray-200 pt-20 pb-10">
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-5  backdrop-blur-md border border-gray-500/40 rounded-2xl ">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className=" rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Composition-Window-Human--Streamline-Ultimate" height={60} width={60}>
              <desc>{"\n    Composition Window Human Streamline Icon: https://streamlinehq.com\n  "}</desc>
              <path
                fill="#66e1ff"
                d="M19.1739 4.82561H4.82609c-1.01474 0 -1.98792 0.4031 -2.70546 1.12063C1.4031 6.66377 1 7.63695 1 8.65169v6.69561c0 0.5025 0.09896 1 0.29124 1.4642 0.19228 0.4642 0.47411 0.886 0.82939 1.2413 0.71754 0.7175 1.69072 1.1206 2.70546 1.1206H19.1739c0.5025 0 1 -0.0989 1.4642 -0.2912 0.4642 -0.1923 0.886 -0.4741 1.2413 -0.8294 0.3552 -0.3553 0.6371 -0.7771 0.8294 -1.2413 0.1922 -0.4642 0.2912 -0.9617 0.2912 -1.4642V8.65169c0 -1.01474 -0.4031 -1.98792 -1.1206 -2.70545 -0.7176 -0.71753 -1.6907 -1.12063 -2.7055 -1.12063Z"
                strokeWidth={1}
              />
              <path fill="#c2f3ff" d="M4.82609 4.82561c-1.01474 0 -1.98792 0.4031 -2.70546 1.12063C1.4031 6.66377 1 7.63695 1 8.65169v6.69561c0.00188 0.9711 0.37381 1.9049 1.04005 2.6113 0.66625 0.7064 1.5767 1.1323 2.54595 1.1909L18.9099 4.82561H4.82609Z" strokeWidth={1} />
              <path
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.1739 4.82561H4.82609c-1.01474 0 -1.98792 0.4031 -2.70546 1.12063C1.4031 6.66377 1 7.63695 1 8.65169v6.69561c0 0.5025 0.09896 1 0.29124 1.4642 0.19228 0.4642 0.47411 0.886 0.82939 1.2413 0.71754 0.7175 1.69072 1.1206 2.70546 1.1206H19.1739c0.5025 0 1 -0.0989 1.4642 -0.2912 0.4642 -0.1923 0.886 -0.4741 1.2413 -0.8294 0.3552 -0.3553 0.6371 -0.7771 0.8294 -1.2413 0.1922 -0.4642 0.2912 -0.9617 0.2912 -1.4642V8.65169c0 -1.01474 -0.4031 -1.98792 -1.1206 -2.70545 -0.7176 -0.71753 -1.6907 -1.12063 -2.7055 -1.12063Z"
                strokeWidth={1}
              />
              <path
                fill="#ffffff"
                d="M5.78223 19.1734c0.00957 -0.8879 0.19318 -1.7653 0.54043 -2.5826 0.38261 -0.7652 1.97331 -1.2913 3.97244 -2.0316 0.5404 -0.1999 0.4515 -1.6108 0.2123 -1.8748 -0.381 -0.4129 -0.67044 -0.9017 -0.8493 -1.4343 -0.17885 -0.5326 -0.24309 -1.097 -0.18848 -1.65624 -0.03426 -0.35625 0.00522 -0.71573 0.11596 -1.05606 0.11075 -0.34033 0.2904 -0.6542 0.52772 -0.92206 0.2374 -0.26787 0.5274 -0.48398 0.8519 -0.63488 0.3245 -0.1509 0.6766 -0.23335 1.0344 -0.24221 0.3578 0.009 0.7098 0.09154 1.0343 0.24249 0.3244 0.15094 0.6143 0.36706 0.8517 0.63489 0.2373 0.26783 0.417 0.58165 0.5278 0.92192 0.1108 0.34026 0.1503 0.69969 0.1162 1.05591 0.0548 0.55934 -0.0094 1.12394 -0.1883 1.65674 -0.1788 0.5328 -0.4683 1.0217 -0.8495 1.4347 -0.2391 0.264 -0.3281 1.6749 0.2123 1.8748 1.9992 0.7404 3.5908 1.2693 3.9725 2.0317 0.3472 0.8172 0.5308 1.6947 0.5404 2.5826l-12.43477 -0.001Z"
                strokeWidth={1}
              />
              <path
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.78223 19.1734c0.00957 -0.8879 0.19318 -1.7653 0.54043 -2.5826 0.38261 -0.7652 1.97331 -1.2913 3.97244 -2.0316 0.5404 -0.1999 0.4515 -1.6108 0.2123 -1.8748 -0.381 -0.4129 -0.67044 -0.9017 -0.8493 -1.4343 -0.17885 -0.5326 -0.24309 -1.097 -0.18848 -1.65624 -0.03426 -0.35625 0.00522 -0.71573 0.11596 -1.05606 0.11075 -0.34033 0.2904 -0.6542 0.52772 -0.92206 0.2374 -0.26787 0.5274 -0.48398 0.8519 -0.63488 0.3245 -0.1509 0.6766 -0.23335 1.0344 -0.24221 0.3578 0.009 0.7098 0.09154 1.0343 0.24249 0.3244 0.15094 0.6143 0.36706 0.8517 0.63489 0.2373 0.26783 0.417 0.58165 0.5278 0.92192 0.1108 0.34026 0.1503 0.69969 0.1162 1.05591 0.0548 0.55934 -0.0094 1.12394 -0.1883 1.65674 -0.1788 0.5328 -0.4683 1.0217 -0.8495 1.4347 -0.2391 0.264 -0.3281 1.6749 0.2123 1.8748 1.9992 0.7404 3.5908 1.2693 3.9725 2.0317 0.3472 0.8172 0.5308 1.6947 0.5404 2.5826l-12.43477 -0.001Z"
                strokeWidth={1}
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold  mb-2">{profile.name}</h1>
            <p className="text-sm text-gray-400">{profile.email}</p>
          </div>
        </div>

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
