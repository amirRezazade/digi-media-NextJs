"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeaderPoster({ poster, name }) {
  let [loaded, setLoaded] = useState(false);

  return (
    <div className="relative group z-1 grow  min-w-full h-auto">
      <Image width={250} height={400} className=" object-cover w-full -z-1 rounded-lg contrast-85 absolute scale-x-80 -translate-y-4 group-hover:translate-y-0 transition-transform duration-300" src={`https://image.tmdb.org/t/p/original${poster}_medium`} alt={name || "movie poster"} />
      <Image width={260} height={400} className=" object-cover w-full -z-1 rounded-lg contrast-90 absolute scale-x-90 -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 " src={`https://image.tmdb.org/t/p/original${poster}_medium`} alt={name || "movie poster"} />

      <Image
        width={270}
        height={400}
        className={`object-cover w-full z-3 rounded-lg contrast-110 ${!loaded ? "shimmer" : ""}`}
        src={`https://image.tmdb.org/t/p/original${poster}_medium`}
        alt={name || "movie poster"}
        onError={(e) => {
          e.target.src = "/images/default_poster.jpg";
        }}
        onLoad={() => setLoaded(true)}
      />
      <button className="absolute top-1/1 left-1/2 -translate-1/2 flex justify-center items-center border border-orange-400 hover:bg-transparent transition-all duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-orange-400">
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#ffffff"></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}
