"use client";

import Image from "next/image";
import { useState } from "react";

export default function CartImg({ poster, name }) {
  let [loaded, setLoaded] = useState(false);
  return (
    <div className={`${!loaded ? "shimmer" : ""} w-full h-full`}>
      <Image
        width={194}
        height={285}
        className="object-cover w-full h-full min-h-55 lg:min-h-65 xl:min-h-70 "
        src={`https://image.tmdb.org/t/p/original/${poster}_medium`}
        alt={name || ""}
        onError={(e) => {
          e.target.src = "/images/default_poster.jpg";
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
