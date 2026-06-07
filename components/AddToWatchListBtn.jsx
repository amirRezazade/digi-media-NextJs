"use client";

import { useEffect, useRef, useState } from "react";

export default function AddToWatchListBtn({ type, id }) {
  const watchlistRef = useRef(null);
  const [isInWatchList, setIsInWatchList] = useState(false);

  useEffect(() => {
    watchlistRef.current = getWatchlist();
    setIsInWatchList(type === "movie" ? watchlistRef.current.movie?.includes(id) : watchlistRef.current.series?.includes(id));
  }, []);

  function addToWatchList() {
    const watchlist = watchlistRef.current;
    setIsInWatchList(!isInWatchList);
    if (type == "movie") !watchlist.movie.includes(id) ? watchlist.movie?.push(id) : (watchlist.movie = watchlist.movie?.filter((el) => el !== id));
    else !watchlist.series?.includes(id) ? watchlist.series?.push(id) : (watchlist.series = watchlist.series?.filter((el) => el !== id));
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }

  function getWatchlist() {
    if (typeof window === "undefined") return { movie: [], series: [] };
    return JSON.parse(localStorage.getItem("watchlist") || '{"movie":[],"series":[]}');
  }
  return (
    <button className={`absolute top-1/1 left-1/2 -translate-1/2 flex justify-center items-center border border-orange-400  transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10  ${isInWatchList ? "bg-orange-400 fill-white" : "backdrop-blur-xs hover:bg-orange-400 fill-transparent "}`} onClick={addToWatchList}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-4 sm:size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
      </svg>
    </button>
  );
}
