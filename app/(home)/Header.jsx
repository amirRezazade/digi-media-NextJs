"use client";

import { useState } from "react";
import HeaderSlider from "./HeaderSlider";
import Link from "next/link";
export default function Header(params) {
  let [activeIndex, setActiveIndex] = useState(null);

  return (
    <header className="h-auto md:h-[85vh] bg-gray-900  ">
      <div className="relative pt-4 sm:py-7 md:py-0 h-full bg-no-repeat bg-cover bg-center xl:bg-size-[80%_100%] xl:bg-top-left transition-all duration-300 " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${activeIndex?.backdrop_path}_low) , url('./images/default-bg.jpg')` }}>
        <div className="abslute bg-transparent md:bg-linear-to-r md:from-transparent md:to-gray-950 to-70% h-full md:flex md:justify-center md:items-center">
          <div className="xs:px-3 md:w-1/2 md:flex md:flex-col justify-evenly gap-12 md:px-0 md:pr-3 lg:gap-10 xl:pr-5">
            <div className="hidden md:flex flex-col items-end gap-5 text-white">
              <span className="text-sm font-extralight font-sans">{activeIndex?.media_type}</span>
              <span dir="ltr" className="text-4xl font-bold">
                {activeIndex?.name || activeIndex?.title}
              </span>
              <div className="flex items-center gap-2.5">
                <span>
                  <span className="text-2xl font-extrabold">{activeIndex?.vote_average.toFixed(1)}</span>
                  <span className="text-sm">/10 </span>
                </span>
                <span className="bg-amber-300 rounded-md px-2 py-1 font-extrabold text-xs text-black">IMDB</span>
              </div>
            </div>
            <HeaderSlider onActiveIndex={setActiveIndex} />
          </div>
          <div className="hidden h-full w-1/2 md:flex justify-center items-center">
            <Link href={`/${activeIndex?.media_type}/${activeIndex?.id}`} className="w-30 h-30 flex justify-center items-center rounded-full border border-white bg-transparent backdrop-blur-xs hover:scale-110 transition-transform duration-300">
              <span className="w-22 h-22 flex justify-center items-center rounded-full border border-white">
                <span className="w-15 h-15 flex justify-center items-center rounded-full bg-gray-400">
                  <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#fff"></path>
                    </g>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
