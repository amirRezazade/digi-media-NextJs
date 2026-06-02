"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeaderPoster({ poster, name }) {
  let [loaded, setLoaded] = useState(false);

  return (
    <Image
      width={270}
      height={400}
      className={`object-cover w-full z-3 rounded-lg contrast-110 ${!loaded ? "shimmer" : ""}`}
      src={`https://image.tmdb.org/t/p/original${poster}_medium`}
      alt={name}
      onError={(e) => {
        e.target.src = "/images/default_poster.jpg";
      }}
      onLoad={() => setLoaded(true)}
    />
  );
}
