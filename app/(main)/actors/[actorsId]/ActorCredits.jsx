"use client";

import CreditsCart from "@/components/cart/CreditsCart";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActorCredits({ credits, actorsId }) {
  let router = useRouter();
  let searchParams = useSearchParams();
  let { cast, crew } = credits;
  cast = [...new Map(credits.cast.map((item) => [item.id, item])).values()];
  crew = [...new Map(credits.crew.map((item) => [item.id, item])).values()];

  let isCast = !searchParams.get("crew");
  let page = Number(searchParams.get("page")) || 1;
  const totalPage = isCast ? Math.ceil(cast.length / 12) : Math.ceil(crew.length / 12);
  const list = isCast ? cast.slice((page - 1) * 12, page * 12) : crew.slice((page - 1) * 12, page * 12);

  function setParams(newPage = page, newIsCast = isCast) {
    const params = new URLSearchParams(searchParams);
    if (!newIsCast) params.set("crew", "true");
    else params.delete("crew");

    if (newPage > 1) params.set("page", newPage);
    else params.delete("page");

    router.push(`/actors/${actorsId}?${params.toString()}`);
  }
  function changePage(n) {
    setParams(n, isCast);
  }

  function changeIsCast(flag) {
    setParams(1, flag);
  }

  return (
    <div className="w-full h-auto sm:grow text-black dark:text-white ">
      <div className="flex flex-col xs:flex-row items-center gap-x-3 md:gap-x-6 gap-y-2">
        <span className=" border-b-3 border-orange-400 py-2 flex gap-1 text-nowrap">
          مجموعه آثار
          <span className="border border-orange-400 rounded-2xl px-2.5 py-0.5 text-xs  flex justify-center items-center">{cast.length + crew.length} عدد</span>
        </span>
        <div className="flex items-center gap-4 text-sm text-nowrap">
          <button className={`${isCast ? " border-orange-400" : "border-transparent"} border-b-3  px-2.5 py-2`} onClick={(e) => changeIsCast(true)}>
            بازیگر {`(${cast.length})`}
          </button>
          <button className={`${!isCast ? " border-orange-400" : "border-transparent"} border-b-3  px-2.5 py-2`} onClick={(e) => changeIsCast(false)}>
            خدمه {`(${crew.length})`}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-3  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-rows-2 2xl:grid-cols-6 2xl:min-h-[80vh] mt-8">
        {list?.map((elem) => (
          <CreditsCart key={elem.id} elem={elem} />
        ))}
      </div>

      {totalPage > 1 && <Pagination page={page} totalPage={totalPage} onPage={(n) => changePage(n)} />}
    </div>
  );
}
