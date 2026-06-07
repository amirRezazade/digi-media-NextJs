"use client";

import Image from "next/image";
import { useState } from "react";
import AddToWatchListBtn from "../AddToWatchListBtn";

export default function HeaderPoster({ poster, name, type, id }) {
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
      <AddToWatchListBtn type={type} id={id} />
    </div>
  );
}
