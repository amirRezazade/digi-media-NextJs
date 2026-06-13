"use client";
export default function Pagination({ page, totalPage, onPage }) {
  return (
    <div className="flex justify-center items-center gap-1.5 md:gap-3 mt-12 text-sm p-2">
      <button disabled={page == 1} className={`flex justify-center items-center fill-black  disabled:fill-gray-500 dark:fill-white bg-stone-300 dark:bg-gray-700 cursor-pointer rounded w-10 h-8 ${page !== 1 ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => onPage(Number(page) - 1)}>
        <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Line-Start-Arrow-Notch--Streamline-Sharp-Material" height={20} width={20}>
          <desc>{"\n    Line Start Arrow Notch Streamline Icon: https://streamlinehq.com\n  "}</desc>
          <path d="M13 19 2 12l11 -7 -3.825 6.25H21.75v1.5H9.175L13 19Z" strokeWidth={0.5} />
        </svg>
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
      <button disabled={page == totalPage} className={`flex justify-center items-center fill-black disabled:fill-gray-500 dark:fill-white bg-stone-300 dark:bg-gray-700  rounded w-10 h-8 ${page !== totalPage ? "hover:bg-orange-400 hover:text-white" : ""} transition-colors duration-300`} onClick={() => onPage(Number(page) + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Line-Start-Arrow-Notch--Streamline-Sharp-Material" height={20} width={20}>
          <desc>{"\n    Line Start Arrow Notch Streamline Icon: https://streamlinehq.com\n  "}</desc>
          <path d="M13 19 2 12l11 -7 -3.825 6.25H21.75v1.5H9.175L13 19Z" strokeWidth={0.5} />
        </svg>
      </button>
    </div>
  );
}
