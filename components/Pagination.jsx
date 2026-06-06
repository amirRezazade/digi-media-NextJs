"use client";
export default function Pagination({ page, totalPage, onPage }) {
  return (
    <div className="flex justify-center items-center gap-1.5 md:gap-3 mt-12 text-sm p-2">
      <button disabled={page == 1} className={`text-black  disabled:text-gray-500 dark:text-white bg-stone-300 dark:bg-gray-700 cursor-pointer rounded w-12 h-8 ${page !== 1 ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => onPage((prev) => Number(prev) - 1)}>
        قبلی{" "}
      </button>
      <div className="flex items-center gap-1.5 md:gap-3 ">
        <button className={` cursor-pointer rounded w-9 h-8 ${page == 1 ? "bg-orange-400 text-white " : " text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300`} onClick={() => onPage(1)}>
          1
        </button>
        <button className={` cursor-pointer rounded w-9 h-8 ${page != totalPage && page != 1 ? " bg-orange-400 text-white " : "text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300 ${totalPage == 2 ? "hidden" : ""}`} onClick={() => onPage(page == totalPage || page == 1 ? Math.ceil(totalPage / 2) : Number(page))}>
          {page == totalPage || page == 1 ? Math.ceil(totalPage / 2) : page}
        </button>
        <button className={` cursor-pointer rounded w-9 h-8 ${totalPage == page ? "bg-orange-400 text-white " : " text-black dark:text-white bg-stone-300 dark:bg-gray-700 hover:bg-orange-400 hover:text-white "} transition-colors duration-300`} onClick={() => onPage(Number(totalPage))}>
          {totalPage}
        </button>
      </div>
      <button disabled={page == totalPage} className={`text-black disabled:text-gray-500 dark:text-white bg-stone-300 dark:bg-gray-700 cursor-pointer rounded w-12 h-8 ${page !== totalPage ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => onPage((prev) => Number(prev) + 1)}>
        بعدی
      </button>
    </div>
  );
}
