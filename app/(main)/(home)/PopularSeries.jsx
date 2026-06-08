import SectionSlider from "@/components/sectionSlider/SectionSlider";
import Link from "next/link";

export default function PopularSeries({ list }) {
  return (
    <div className="my-11 lg:my-15 ">
      <div className="flex justify-between items-center  ">
        <div className="flex items-center gap-3">
          <span className="p-1.5 lg:p-2.5 rounded-full border-5 border-orange-400/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Vintage-Tv-4--Streamline-Ultimate" height={24} width={24}>
              <desc>{"\n    Vintage Tv 4 Streamline Icon: https://streamlinehq.com\n  "}</desc>
              <title>{"vintage-tv-4"}</title>
              <path d="M2.5 6.5h19s1 0 1 1v13s0 1 -1 1h-19s-1 0 -1 -1v-13s0 -1 1 -1" fill="none" stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              <path d="m3.5 21.5 0 2" fill="none" stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              <path d="m20.5 21.5 0 2" fill="none" stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              <path d="m6 0.5 6 6 6 -6" fill="none" stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              <path d="M7.5 8.5h9s3 0 3 3v5s0 3 -3 3h-9s-3 0 -3 -3v-5s0 -3 3 -3" fill="none" stroke="#ff9800" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-[iran-yekan] text-sm lg:text-base dark:text-white">سریال های محبوب</span>
            <span className="text-xs lg:text-sm text-gray-500  dark:text-gray-300">معروف ترین ها</span>
          </div>
        </div>
        <Link href="/series" className="flex items-center gap-2 p-2 lg:p-3.5 text-xs lg:text-sm rounded-full hover:opacity-75 transition-all duration-300 text-gray-500 dark:text-gray-300 bg-gray-300 dark:bg-gray-800">
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
      <SectionSlider list={list} type="series" />
    </div>
  );
}
