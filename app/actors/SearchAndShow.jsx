"use client";
import ActorCart from "@/components/cart/ActorCart";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchAndShow({ data }) {
  let router = useRouter();
  let searchParams = useSearchParams();
  let [actors, setActors] = useState(data?.results);

  let [query, setQuery] = useState(searchParams.get("query") || "");
  let [isLoading, setIsLoading] = useState(false);
  let [retry, setRetry] = useState(false);
  let [isFetching, setIsFetching] = useState(false);
  let pageRef = useRef(2);
  let bottomRef = useRef(null);
  useEffect(() => {
    let time = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      query.trim().length > 1 ? params.set("query", query.trim()) : params.delete("query");
      router.push(`/actors?${params.toString()}`);
    }, 1200);
    return () => clearTimeout(time);
  }, [query]);

  function chageQuery(q) {
    setQuery(q);
    query.trim().length > 1 && setIsLoading(true);
  }
  useEffect(() => {
    setIsLoading(false);
    setActors(data.results);
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
      const res = !query ? await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${pageRef.current}`) : await fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query.trim())}&page=${pageRef.current}`);
      const response = await res.json();
      if (!res.ok) setRetry(true);
      else {
        setRetry(false);
        setActors((prev) => [...prev, ...response.results]);
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
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-15 mb-13">بازیگر ها</h1>
      <div className=" flex flex-wrap items-center justify-between gap-2 my-5 ">
        <input type="text" className="py-1 px-3 rounded-full bg-transparent backdrop-blur-xl border border-gray-400/50 outline-0 text-left" dir="ltr" placeholder="search..." value={query} onChange={(e) => chageQuery(e.target.value)} />

        {query.length > 1 && <span className="text-sm py-1 px-3 rounded-full bg-transparent backdrop-blur-xl border border-gray-400/50">{data.total_results} بازیگر </span>}
      </div>
      {isLoading ? (
        <div className="flex justify-center py-10">
          <span className="size-12 rounded-full border-4 border-orange-400 border-t-transparent border-b-transparent animate-spin"></span>
        </div>
      ) : data.total_results ? (
        <div className="mt-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 md:gap-x-5 gap-y-5 sm:gap-y-6">
          {actors?.map((actor, index) => (
            <ActorCart key={actor.id + index} actor={actor} />
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
