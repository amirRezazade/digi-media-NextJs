"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CreditsCart({ elem }) {
  let [loaded, setLoaded] = useState(false);

  return (
    <Link href={`/${elem.media_type == "movie" ? "movie" : "series"}/${elem.id}`} class=" w-auto  rounded-2xl overflow-hidden transition-all duration-600 group">
      <div class="relative h-full">
        <div class="w-full h-full relative rounded-lg overflow-hidden">
          <Image
            width={180}
            height={270}
            class={`object-cover w-full h-full ${!loaded ? "shimmer" : ""}`}
            src={`https://image.tmdb.org/t/p/original/${elem.poster_path}_medium`}
            alt={elem.name || ""}
            onError={(e) => {
              e.target.src = "/images/default_poster.jpg";
            }}
            onLoad={() => setLoaded(true)}
          />
          <div class="w-full h-full absolute top-0 left-0 bg-linear-to-b from-transparent from-50% to-black/50 to-90% transition-all duration-600 group-hover:opacity-0">
            <p dir="ltr" class="py-2.5 sm:py-5 px-1.5 sm:px-3 text-xs  sm:text-sm absolute bottom-0 left-0  font-extrabold text-white">
              {elem.original_title ? elem.original_title : elem.name}
            </p>
          </div>
        </div>
        <div class="absolute w-full h-full top-0 left-0 rounded-lg bg-black/60 px-3 py-3.5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-90 transition-all duration-600">
          <div class=" absolute w-full p-3 top-0 left-0 flex justify-between items-center text-amber-400">
            <span class=" ">{elem.media_type == "movie" ? elem.release_date.slice(0, 4) : elem.first_air_date.slice(0, 4)}</span>
            <span class="">{elem.media_type}</span>
          </div>
          <span class="absolute top-1/2 left-1/2 -translate-1/2">
            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131" stroke="#cfcfcf" stroke-width="1.5" stroke-linecap="round"></path>{" "}
              </g>
            </svg>
          </span>
          <div class=" absolute w-full p-3 bottom-0 left-0 flex justify-between items-end">
            <span class="text-amber-400">{elem.character || elem.department}</span>

            <span class="text-base lg:text-xl text-amber-400 font-bold">{elem.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
