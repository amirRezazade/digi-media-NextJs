"use client";

import CreditsCart from "@/components/cart/CreditsCart";
import { useEffect, useState } from "react";

export default function ActorCredits({ credits }) {
  let { cast, crew } = credits;
  cast = [...new Map(credits.cast.map((item) => [item.id, item])).values()];
  crew = [...new Map(credits.crew.map((item) => [item.id, item])).values()];

  let [list, setList] = useState(cast.slice(0, 12));
  let [isCast, setIsCast] = useState(true);
  let [totalPage, setTotalPage] = useState(Math.ceil(cast.length / 12));
  let [page, setPage] = useState(1);

  useEffect(() => {
    setTotalPage(Math.ceil(isCast ? cast.length / 12 : crew.length / 12));
    // setList([]);
    setPage(1);
    setList(isCast ? cast.slice(page * 12 - 12, page * 12) : crew.slice(page * 12 - 12, page * 12));
  }, [isCast]);
  useEffect(() => {
    setList(isCast ? cast.slice(page * 12 - 12, page * 12) : crew.slice(page * 12 - 12, page * 12));
    console.log(page);
    console.log(list);
  }, [page]);

  return (
    <div class="w-full h-auto sm:grow text-black dark:text-white ">
      <div className="flex flex-col xs:flex-row items-center gap-x-6 gap-y-2">
        <span class=" border-b-3 border-orange-400 py-2 flex gap-1">
          مجموعه آثار
          <span class="border border-orange-400 rounded-2xl px-2.5 py-0.5 text-xs ">{cast.length + crew.length} عدد</span>
        </span>
        <div className="flex items-center gap-4 text-sm ">
          <button className={`${isCast ? " border-orange-400" : "border-transparent"} border-b-3  px-2.5 py-2`} onClick={(e) => setIsCast(true)}>
            بازیگر {`(${cast.length})`}
          </button>
          <button className={`${!isCast ? " border-orange-400" : "border-transparent"} border-b-3  px-2.5 py-2`} onClick={(e) => setIsCast(false)}>
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
          <button id="prev" disabled={page == 1} class={`text-black  disabled:text-gray-500 dark:text-white bg-stone-300 dark:bg-gray-700 cursor-pointer rounded w-12 h-8 ${page !== 1 ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => setPage((prev) => prev - 1)}>
            قبلی{" "}
          </button>
          <div id="pagination-numbers" class="flex items-center gap-1.5 md:gap-3 ">
            <button id="one" class={` cursor-pointer rounded w-9 h-8 ${page == 1 ? "bg-orange-400 text-white " : " text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300`} onClick={() => setPage(1)}>
              1
            </button>
            <button id="count" class={` cursor-pointer rounded w-9 h-8 ${page !== totalPage && page !== 1 ? " bg-orange-400 text-white " : "text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300`} onClick={() => setPage(page == totalPage || page == 1 ? Math.ceil(totalPage / 2) : page)}>
              {page == totalPage || page == 1 ? Math.ceil(totalPage / 2) : page}
            </button>
            <button id="end" class={` cursor-pointer rounded w-9 h-8 ${totalPage == page ? "bg-orange-400 text-white " : " text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300`} onClick={() => setPage(totalPage)}>
              {totalPage}
            </button>
          </div>
          <button id="next" disabled={page == totalPage} class={`text-black disabled:text-gray-500 dark:text-white bg-stone-300 dark:bg-gray-700 cursor-pointer rounded w-12 h-8 ${page !== totalPage ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => setPage((prev) => prev + 1)}>
            بعدی{" "}
          </button>
        </div>
      )}
    </div>
  );
}
