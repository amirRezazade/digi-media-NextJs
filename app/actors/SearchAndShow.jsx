"use client";
import ActorCart from "@/components/cart/ActorCart";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchAndShow({ actors }) {
  let router = useRouter();
  let searchParams = useSearchParams();
  let [query, setQuery] = useState(searchParams.get("query") || "");
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    query.trim().length ? params.set("qurey", query.trim()) : params.delete("qurey");
    // params.set("page", page);
    router.push(`/actors?${params.toString()}`);
  }, [query]);
  return (
    <>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-15 mb-13">بازیگر ها</h1>
      <input type="text" value={query.trim()} onChange={(e) => setQuery(e.target.value.trim())} />
      <div className="mt-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 md:gap-x-5 gap-y-5 sm:gap-y-6">
        {actors?.map((actor) => (
          <ActorCart key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  );
}
