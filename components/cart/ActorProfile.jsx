"use client";
import Image from "next/image";
import { useState } from "react";

export default function ActorProfile({ profile, name }) {
  let [loaded, setLoaded] = useState(false);
  return (
    <div className="w-full xs:min-w-20 xs:max-w-50 max-h-75 sm:max-w-80 sm:max-h-80 sm:w-full overflow-hidden">
      <Image
        width={300}
        height={330}
        className={`aspect-square object-cover h-full sm:h-82.5 w-full ${!loaded ? "shimmer" : ""}`}
        src={`https://image.tmdb.org/t/p/original${profile}_medium`}
        alt={name}
        onError={(e) => {
          e.target.src = "/images/default-person.jpg";
        }}
        onLoad={() => setLoaded(true)}
      />
      ;
    </div>
  );
}
