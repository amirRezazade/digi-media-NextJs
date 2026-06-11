"use client";
import Image from "next/image";
import { useState } from "react";

export default function ActorCartImage({ profile, name, gender = 0 }) {
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
          e.target.src = gender == 1 ? "/images/default-person-women.jpg" : "/images/default-person.jpg";
        }}
        onLoad={() => setLoaded(true)}
      />
      ;
    </div>
  );
}
