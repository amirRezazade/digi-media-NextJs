import SectionSlider from "@/components/sectionSlider/SectionSlider";
import Link from "next/link";

export default function ActionMovie({ list }) {
  return (
    <div>
      <div className="flex justify-between items-center  ">
        <div className="flex items-center gap-3">
          <span className="p-1.5 lg:p-2.5 rounded-full border-5 border-orange-400/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Video-Player-Movie--Streamline-Ultimate" height={26} width={26}>
              <desc>{"\n    Video Player Movie Streamline Icon: https://streamlinehq.com\n  "}</desc>
              <path stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" d="M21.5 2.5h-19c-1.10457 0 -2 0.89543 -2 2v15c0 1.1046 0.89543 2 2 2h19c1.1046 0 2 -0.8954 2 -2v-15c0 -1.10457 -0.8954 -2 -2 -2" strokeWidth={1} />
              <path stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" d="M0.5 6.5h23" strokeWidth={1} />
              <path stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" d="M0.5 17.5h23" strokeWidth={1} />
              <path stroke="#ff9800" d="M3.76001 4.75c-0.13807 0 -0.25 -0.11193 -0.25 -0.25s0.11193 -0.25 0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M3.76001 4.75c0.13807 0 0.25 -0.11193 0.25 -0.25s-0.11193 -0.25 -0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M7.88 4.75c-0.13807 0 -0.25 -0.11193 -0.25 -0.25s0.11193 -0.25 0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M7.88 4.75c0.13808 0 0.25 -0.11193 0.25 -0.25s-0.11192 -0.25 -0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M12 4.75c-0.1381 0 -0.25 -0.11193 -0.25 -0.25s0.1119 -0.25 0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M12 4.75c0.1381 0 0.25 -0.11193 0.25 -0.25s-0.1119 -0.25 -0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M16.12 4.75c-0.1381 0 -0.25 -0.11193 -0.25 -0.25s0.1119 -0.25 0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M16.12 4.75c0.1381 0 0.25 -0.11193 0.25 -0.25s-0.1119 -0.25 -0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M20.24 4.75c-0.1381 0 -0.25 -0.11193 -0.25 -0.25s0.1119 -0.25 0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M20.24 4.75c0.1381 0 0.25 -0.11193 0.25 -0.25s-0.1119 -0.25 -0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M3.76001 19.75c-0.13807 0 -0.25 -0.1119 -0.25 -0.25s0.11193 -0.25 0.25 -0.25" strokeWidth={1} />
              <path stroke="#ff9800" d="M3.76001 19.75c0.13807 0 0.25 -0.1119 0.25 -0.25s-0.11193 -0.25 -0.25 -0.25" strokeWidth={1} />
              <g>
                <path stroke="#ff9800" d="M7.88 19.75c-0.13807 0 -0.25 -0.1119 -0.25 -0.25s0.11193 -0.25 0.25 -0.25" strokeWidth={1} />
                <path stroke="#ff9800" d="M7.88 19.75c0.13808 0 0.25 -0.1119 0.25 -0.25s-0.11192 -0.25 -0.25 -0.25" strokeWidth={1} />
              </g>
              <g>
                <path stroke="#ff9800" d="M12 19.75c-0.1381 0 -0.25 -0.1119 -0.25 -0.25s0.1119 -0.25 0.25 -0.25" strokeWidth={1} />
                <path stroke="#ff9800" d="M12 19.75c0.1381 0 0.25 -0.1119 0.25 -0.25s-0.1119 -0.25 -0.25 -0.25" strokeWidth={1} />
              </g>
              <g>
                <path stroke="#ff9800" d="M16.12 19.75c-0.1381 0 -0.25 -0.1119 -0.25 -0.25s0.1119 -0.25 0.25 -0.25" strokeWidth={1} />
                <path stroke="#ff9800" d="M16.12 19.75c0.1381 0 0.25 -0.1119 0.25 -0.25s-0.1119 -0.25 -0.25 -0.25" strokeWidth={1} />
              </g>
              <g>
                <path stroke="#ff9800" d="M20.24 19.75c-0.1381 0 -0.25 -0.1119 -0.25 -0.25s0.1119 -0.25 0.25 -0.25" strokeWidth={1} />
                <path stroke="#ff9800" d="M20.24 19.75c0.1381 0 0.25 -0.1119 0.25 -0.25s-0.1119 -0.25 -0.25 -0.25" strokeWidth={1} />
              </g>
              <path
                stroke="#ff9800"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12.67c0.1389 -0.0487 0.2592 -0.1393 0.3443 -0.2594 0.0851 -0.12 0.1308 -0.2635 0.1308 -0.4106 0 -0.1472 -0.0457 -0.2907 -0.1308 -0.4107s-0.2054 -0.2106 -0.3443 -0.2593l-5 -2.33003c-0.0497 -0.02467 -0.10446 -0.03751 -0.15997 -0.03751s-0.11027 0.01284 -0.16 0.03751c-0.04498 0.03416 -0.08179 0.07791 -0.10773 0.12807 -0.02595 0.05017 -0.04039 0.10549 -0.04227 0.16193V14.59c0.00188 0.0564 0.01632 0.1117 0.04227 0.1619 0.02594 0.0502 0.06275 0.0939 0.10773 0.1281 0.03922 0.0449 0.089 0.0794 0.14485 0.1004 0.05586 0.0209 0.11604 0.0277 0.17512 0.0196z"
                strokeWidth={1}
              />
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-[iran-sans] text-sm lg:text-base dark:text-white">فیلم های اکشن</span>
            <span className="text-xs lg:text-sm text-gray-500  dark:text-gray-300">معروف ترین ها</span>
          </div>
        </div>
        <Link href="/movie?genre=10759" className="flex items-center gap-2 p-2 lg:p-3.5 text-xs lg:text-sm rounded-full hover:opacity-75 transition-all duration-300 text-gray-500 dark:text-gray-300 bg-gray-300 dark:bg-gray-800">
          <span> مشاهده همه </span>
          <span>
            <svg className="fill-[#888888] dark:fill-[#c5c5c5]" width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path className="" fillRule="evenodd" clipRule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"></path>
              </g>
            </svg>
          </span>
        </Link>
      </div>
      <SectionSlider list={list} />
    </div>
  );
}
