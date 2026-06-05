"use client";
import Image from "next/image";
import Link from "next/link";
import GenreBtn from "../GenreBtn";
import { useState } from "react";
export default function GrowCart({ item, type }) {
  let [loaded, setLoaded] = useState(false);

  return (
    <Link href={`/${type}/${item.id}`} className=" w-full ">
      <div className="w-full aspect-2/3 relative rounded-md overflow-hidden   xl:h-72">
        <div className={`w-full h-full overflow-hidden relative ${!loaded ? "shimmer" : ""}`}>
          <Image
            className="w-full h-full object-cover  lg:group-hover:opacity-0 transition-opacity duration-600"
            src={`https://image.tmdb.org/t/p/original${item.poster_path}_medium`}
            alt={item.name ? item.name : item.title}
            width={200}
            height={288}
            onError={(e) => {
              e.target.src = "/images/default_poster.jpg";
            }}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className={`absolute top-0 left-0  bg-center bg-cover w-full min-h-full  rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-600 `} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}_low) , url(https://image.tmdb.org/t/p/original${item.poster_path}_medium)` }}>
          <div className="absolute top-0 left-0 flex flex-col justify-between  w-full min-h-full bg-black/60 px-3 py-3.5">
            <div className=" flex justify-between items-center">
              <span className="flex items-center gap-0.5 text-gray-300">
                <span className="text-xs">10/</span>
                <span className="text-base text-amber-400 font-bold">{item.vote_average.toFixed(1)}</span>
              </span>
              <span className="text-amber-400 flex gap-1.5 items-start lg:gap-0.5">{item.original_language}</span>
            </div>
            <div className=" flex text-gray-300 flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-1 pointer-events-none">
                <span className=" flex flex-row-reverse items-center text-xs gap-1">
                  زیر نویس
                  <svg width="18px" height="18px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path fill="var(--ci-primary-color, #fff)" d="M472,64H40A24.028,24.028,0,0,0,16,88V424a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H48V96H464Z" className="ci-primary"></path>
                      <path fill="var(--ci-primary-color, #fff)" d="M184,344a87.108,87.108,0,0,0,54.484-18.891L218.659,299.99A55.41,55.41,0,0,1,184,312a56,56,0,0,1,0-112,55.41,55.41,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,184,168a88,88,0,0,0,0,176Z" className="ci-primary"></path>
                      <path fill="var(--ci-primary-color, #fff)" d="M347.429,344a87.108,87.108,0,0,0,54.484-18.891L382.088,299.99A55.414,55.414,0,0,1,347.429,312a56,56,0,0,1,0-112,55.414,55.414,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,347.429,168a88,88,0,0,0,0,176Z" className="ci-primary"></path>
                    </g>
                  </svg>
                </span>
                <span className="flex flex-row-reverse items-center text-xs gap-1">
                  دوبله
                  <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 4.5C10.314 4.5 9 5.80455 9 7.35V12.15C9 13.6955 10.314 15 12 15C13.686 15 15 13.6955 15 12.15L15 7.35C15 5.80455 13.686 4.5 12 4.5ZM7.5 7.35C7.5 4.919 9.54387 3 12 3C14.4561 3 16.5 4.919 16.5 7.35L16.5 12.15C16.5 14.581 14.4561 16.5 12 16.5C9.54387 16.5 7.5 14.581 7.5 12.15V7.35ZM6.75 12.75C6.75 15.1443 9.0033 17.25 12 17.25C14.9967 17.25 17.25 15.1443 17.25 12.75H18.75C18.75 15.9176 16.0499 18.3847 12.75 18.7129V21H11.25V18.7129C7.95007 18.3847 5.25 15.9176 5.25 12.75H6.75Z"
                        fill="#fff"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className=" hidden pointer-events-none lg:flex gap-2 flex-wrap items-center genre-btns">{item.genre_ids && item.genre_ids.map((id) => <GenreBtn key={id} id={id} />)}</div>
            </div>
          </div>
        </div>
      </div>
      <p dir="ltr" className="flex gap-1 justify-center mt-2  h-auto w-full text-center truncate  text-ellipsis transition-colors duration-300 group-hover:text-orange-400 text-black dark:text-white text-sm ">
        <span className="">{item.original_title ? item.original_title : item.name}</span>
        <span className="opacity-70 ml-2 ">{item.release_date ? item.release_date.slice(0, 4) : ""}</span>
      </p>
    </Link>
  );
}
