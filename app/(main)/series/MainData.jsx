"use client";
import Cart from "@/components/cart/Cart";
import { useEffect, useRef, useState } from "react";
import GenreSlider from "./GenreSlider";
import { useRouter, useSearchParams } from "next/navigation";
import { genres } from "@/components/utils";

export default function MainData({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let [series, setSeries] = useState(data?.results);
  let [activeGenre, setActiveGenre] = useState(searchParams.get("genre") || "all");
  let [sortby, setSortby] = useState(searchParams.get("sort") || "popularity.desc");
  let [isLoading, setIsLoading] = useState(false);
  let [retry, setRetry] = useState(false);
  let [isFetching, setIsFetching] = useState(false);
  let pageRef = useRef(2);
  let bottomRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams);
    activeGenre !== "all" ? params.set("genre", activeGenre) : params.delete("genre");
    sortby !== "popularity.desc" ? params.set("sortby", sortby) : params.delete("sortby");
    router.push(`/series?${params.toString()}`);
  }, [activeGenre, sortby]);

  useEffect(() => {
    setIsLoading(false);
    setSeries(data.results);
    pageRef.current = 2;
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && data.total_pages >= pageRef.current) {
        loadMore();
      }
    });
    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [data]);
  const loadMore = async () => {
    try {
      setIsFetching(true);
      setRetry(false);
      const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&include_adult=false
  &vote_count.gte=100
  &vote_average.gte=1
  &popularity.gte=5
  ${activeGenre !== "all" ? `&with_genres=${activeGenre}` : ""}&sort_by=${sortby || "popularity.desc"}&page=${pageRef.current}`);
      const response = await res.json();
      if (!res.ok) setRetry(true);
      else {
        setRetry(false);
        setSeries((prev) => [...prev, ...response.results]);
        if (data.total_pages > pageRef.current) pageRef.current += 1;
      }
    } catch {
      setRetry(true);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-15 mb-13">{activeGenre === "all" || data ? "سریال ها" : "سریال های " + genres[activeGenre]}</h1>

      <GenreSlider activeGenre={activeGenre} onActiveGenre={setActiveGenre} />
      <div className=" flex items-center justify-between gap-2 my-5 ">
        <div className=" rounded-full px-1 lg:px-2 overflow-hidden backdrop-blur-lg border border-gray-400/50">
          <select onChange={(e) => setSortby(e.target.value)} className="text-xs sm:text-sm border-0 outline-0 cursor-pointer p-1 lg:p-2 ">
            <option className="bg-gray-900" value="popularity.desc">
              محبوبیت
            </option>
            <option className="bg-gray-900" value="vote_average.desc">
              امتیاز
            </option>
            <option className="bg-gray-900" value="first_air_date.desc">
              جدبدترین
            </option>
          </select>
        </div>
        <span className="text-sm py-1 px-3 rounded-full bg-transparent backdrop-blur-xl border border-gray-400/50">{data.total_results} سریال </span>
      </div>
      {isLoading ? (
        <div className="flex justify-center py-10">
          <span className="size-12 rounded-full border-4 border-orange-400 border-t-transparent border-b-transparent animate-spin"></span>
        </div>
      ) : data.total_results ? (
        <div className="mt-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 xl:gap-x-5 gap-y-6 sm:gap-y-8">
          {series.map((item) => (
            <Cart key={item.id} type="series" item={item} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl font-bold py-10">موردی پیدا نشد!</h2>
      )}
      <div ref={bottomRef} className="flex justify-center py-10">
        {data.total_pages > pageRef.current && !retry && !isLoading && isFetching && <span className="size-12 rounded-full border-4 border-orange-400 border-t-transparent border-b-transparent animate-spin"></span>}
      </div>
      {retry && (
        <div className="flex justify-center py-10">
          <button onClick={loadMore} className="p-2 flex items-center gap-2 backdrop-blur-lg border border-gray-400/50 rounded-full text-sm">
            خطا در دریافت داده ها!
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff8904" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
