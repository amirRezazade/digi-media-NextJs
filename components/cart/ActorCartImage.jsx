"use client";
import Image from "next/image";
import { useState } from "react";

export default function ActorCartImage({ profile, name }) {
  let [loaded, setLoaded] = useState(false);
  return (
    <div className="aspect-square overflow-hidden">
      <Image
        width={250}
        height={250}
        className={`aspect-square object-cover ${!loaded ? "shimmer" : ""}`}
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
