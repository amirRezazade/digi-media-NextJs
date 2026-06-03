"use client";

import CreditsCart from "@/components/cart/CreditsCart";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActorCredits({ credits, actorsId }) {
  let router = useRouter();
  let searchParams = useSearchParams();
  let { cast, crew } = credits;
  cast = [...new Map(credits.cast.map((item) => [item.id, item])).values()];
  crew = [...new Map(credits.crew.map((item) => [item.id, item])).values()];

  let [isCast, setIsCast] = useState(searchParams.get("crew") ? false : true);
  let [page, setPage] = useState(searchParams.get("page") ? Number(searchParams.get("page")) : 1);
  let [totalPage, setTotalPage] = useState(searchParams.get("crew") ? Math.ceil(crew.length / 12) : Math.ceil(cast.length / 12));
  let [list, setList] = useState(searchParams.get("crew") ? crew.slice(page * 12 - 12, 12) : cast.slice(page * 12 - 12, 12));

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    !isCast ? params.set("crew", true) : params.delete("crew");
    params.set("page", page);
    router.push(`/actors/${actorsId}?${params.toString()}`);
  }, [page, isCast]);

  useEffect(() => {
    setList(isCast ? cast.slice(page * 12 - 12, page * 12) : crew.slice(page * 12 - 12, page * 12));
  }, [page]);

  function changeIsCast(flag) {
    setIsCast(flag ? true : false);
    setTotalPage(Math.ceil(flag ? cast.length / 12 : crew.length / 12));
    setList(flag ? cast.slice(page * 12 - 12, page * 12) : crew.slice(page * 12 - 12, page * 12));
    setPage(1);
  }

  return (
    <div class="w-full h-auto sm:grow text-black dark:text-white ">
      <div className="flex flex-col xs:flex-row items-center gap-x-3 md:gap-x-6 gap-y-2">
        <span class=" border-b-3 border-orange-400 py-2 flex gap-1 text-nowrap">
          مجموعه آثار
          <span class="border border-orange-400 rounded-2xl px-2.5 py-0.5 text-xs  flex justify-center items-center">{cast.length + crew.length} عدد</span>
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

      <div class="grid grid-cols-2 xs:grid-cols-3  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-rows-2 2xl:grid-cols-6 2xl:min-h-[80vh] mt-8">
        {list?.map((elem) => (
          <CreditsCart key={elem.id} elem={elem} />
        ))}
      </div>

      {totalPage > 1 && (
        <div class="flex justify-center items-center gap-1.5 md:gap-3 mt-12 text-sm p-2">
          <button disabled={page == 1} class={`text-black  disabled:text-gray-500 dark:text-white bg-stone-300 dark:bg-gray-700 cursor-pointer rounded w-12 h-8 ${page !== 1 ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => setPage((prev) => prev - 1)}>
            قبلی{" "}
          </button>
          <div class="flex items-center gap-1.5 md:gap-3 ">
            <button class={` cursor-pointer rounded w-9 h-8 ${page == 1 ? "bg-orange-400 text-white " : " text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300`} onClick={() => setPage(1)}>
              1
            </button>
            <button class={` cursor-pointer rounded w-9 h-8 ${page !== totalPage && page !== 1 ? " bg-orange-400 text-white " : "text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300 ${totalPage == 2 ? "hidden" : ""}`} onClick={() => setPage(page == totalPage || page == 1 ? Math.ceil(totalPage / 2) : page)}>
              {page == totalPage || page == 1 ? Math.ceil(totalPage / 2) : page}
            </button>
            <button class={` cursor-pointer rounded w-9 h-8 ${totalPage == page ? "bg-orange-400 text-white " : " text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300`} onClick={() => setPage(totalPage)}>
              {totalPage}
            </button>
          </div>
          <button disabled={page == totalPage} class={`text-black disabled:text-gray-500 dark:text-white bg-stone-300 dark:bg-gray-700 cursor-pointer rounded w-12 h-8 ${page !== totalPage ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => setPage((prev) => prev + 1)}>
            بعدی
          </button>
        </div>
      )}
    </div>
  );
}
