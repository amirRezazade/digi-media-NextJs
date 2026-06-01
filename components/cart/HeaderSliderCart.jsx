"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeaderSliderCart({ poster, name }) {
  let [loaded, setLoaded] = useState(false);

  return (
    <Image
      width={160}
      height={240}
      className={`w-full object-cover rounded-md ${!loaded ? "shimmer" : ""}`}
      src={`https://image.tmdb.org/t/p/original${poster}_medium`}
      alt={name || ""}
      onError={(e) => {
        e.target.src = "/images/default_poster.jpg";
      }}
      onLoad={() => setLoaded(true)}
    />
  );
}
