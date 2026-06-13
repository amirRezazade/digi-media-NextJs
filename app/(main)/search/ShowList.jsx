"use client";
import Cart from "@/components/cart/Cart";
import ActorCart from "@/components/cart/ActorCart";
import { useEffect, useState } from "react";
export default function ShowList({ type, isLoading, scrollRef, query, error, items, handleSearch }) {
  let [q, setQ] = useState("");
  let [t, setT] = useState("");
  useEffect(() => {
    setQ(query);
    setT(type);
  }, [items]);

  return (
    <>
      {/* Empty state */}
      {isLoading && (
        <div className="flex justify-center py-10">
          <span className="size-12 rounded-full border-4 border-orange-400 border-t-transparent border-b-transparent animate-spin"></span>
        </div>
      )}
      <div ref={scrollRef} className="block w-full py-1">
        {q && !isLoading && !error && (
          <div className="flex justify-between gap-2 flex-wrap mb-5">
            <span className="text-sm py-1 px-3 rounded-full bg-transparent backdrop-blur-xl border border-gray-400/50">
              {t == "all" ? "نتایج" : t == "movie" ? "فیلم های" : "سریال های"} مرتبط با: {q}
            </span>
            <span className="text-sm py-1 px-3 rounded-full bg-transparent backdrop-blur-xl border border-gray-400/50">{query.length} مورد</span>
          </div>
        )}
      </div>
      {items.length > 0 && <div className=" grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 lg:gap-5 gap-y-6 gap-4 ">{items?.map((item) => (item.media_type == "person" ? <ActorCart key={item.id} actor={item} /> : <Cart key={item.id} type={item.media_type == "movie" || item.release_date ? "movie" : "series"} item={item} />))}</div>}

      {!items.length && !isLoading && !error && <span className="text-center block sm:text-lg">موردی پیدا نشد!</span>}
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
    </>
  );
}
