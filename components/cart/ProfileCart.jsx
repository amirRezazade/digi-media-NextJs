"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileCart({ profile, name, gender = 0 }) {
  let [loaded, setLoaded] = useState(false);

  return (
    <div className={`aspect-square w-full rounded-full overflow-hidden  shrink-0 ${!loaded ? "shimmer" : ""}`}>
      <Image
        width={120}
        height={120}
        className="object-cover aspect-square w-full"
        src={`https://image.tmdb.org/t/p/w185${profile}`}
        alt={name || "person"}
        onError={(e) => {
          e.target.src = gender == 1 ? "/images/default-person-women.jpg" : "/images/default-person.jpg";
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
