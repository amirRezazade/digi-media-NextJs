"use client";
import Cart from "@/components/cart/Cart";
import Link from "next/link";
import { useEffect, useState } from "react";
import GenreSlider from "./GenreSlider";
import { useRouter, useSearchParams } from "next/navigation";

export default function MainData({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let [activeGenre, setActiveGenre] = useState(searchParams.get("genre") || "all");
  let [sortby, setSortby] = useState(searchParams.get("sort") || "sort_by=vote_average.desc");
  let [query, setQuery] = useState(searchParams.get("query") || "");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("genre", activeGenre);
    params.set("sortby", sortby);
    query.length > 2 ? params.set("query", query) : params.delete("query");
    router.push(`/series?${params.toString()}`);
    // console.log(activeGenre);
  }, [activeGenre, sortby, query]);

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl mt-15 mb-9">سریال‌ ها</h1>
      <div className=" flex items-center gap-2">
        <div className=" rounded-full px-1 lg:px-2 overflow-hidden backdrop-blur-lg border border-gray-400/50">
          <input type="text" className="p-1 lg:p-2 px-3 border-0 outline-0 text-sm" placeholder="...search" value={query.trim()} onChange={(e) => setQuery(e.target.value.trim().toLowerCase())} />
        </div>
        <div className=" rounded-full px-1 lg:px-2 overflow-hidden backdrop-blur-lg border border-gray-400/50">
          <select onChange={(e) => setSortby(e.target.value)} className="text-xs sm:text-sm border-0 outline-0 cursor-pointer p-1 lg:p-2 ">
            <option className="bg-gray-900" selected value="sort_by=vote_average.desc">
              امتیاز
            </option>
            <option className="bg-gray-900" value="sort_by=popularity.desc">
              محبوبیت
            </option>
            <option className="bg-gray-900" value="sort_by=release_date.desc">
              جدبدترین
            </option>
          </select>
        </div>
      </div>
      <GenreSlider activeGenre={activeGenre} onActiveGenre={setActiveGenre} />
      <div className="my-5 md:my-10">
        <span className="text-sm py-1 px-3 rounded-full bg-transparent backdrop-blur-xl border border-gray-400/50">243 مورد </span>
        <div className="mt-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 xl:gap-x-5 gap-y-6 sm:gap-y-8">{initialData?.length ? initialData.map((item) => <Cart key={item.id} type="series" item={item} />) : <h2>لیست خالی است</h2>}</div>
      </div>
    </>
  );
}
