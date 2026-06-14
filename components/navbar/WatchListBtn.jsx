"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function WatchListBtn() {
  const pathname = usePathname();
  const [watchListLength, setWatchListLength] = useState(0);

  useEffect(() => {
    let watchList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchListLength(watchList?.movie?.length + watchList?.series?.length);
  }, [pathname]);
  return (
    <Link href={"/profile/watch-list"} className="w-9 h-9 rounded-full relative bg-gray-700 flex justify-center items-center cursor-pointer">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Favorite-Fill--Streamline-Rounded-Fill-Material" height={21} width={21}>
          <desc>{"\n    Favorite Fill Streamline Icon: https://streamlinehq.com\n  "}</desc>
          <path
            fill="#fff"
            d="M12 20.4999c-0.18335 0 -0.36665 -0.03335 -0.55 -0.1 -0.18335 -0.06665 -0.34165 -0.16665 -0.475 -0.3l-1.325 -1.225c-2.06665 -1.91665 -3.85835 -3.74585 -5.375 -5.4875C2.758335 11.64575 2 9.8249 2 7.9249c0 -1.5 0.504165 -2.75415 1.5125 -3.7625 1.008335 -1.00833 2.25415 -1.5125 3.7375 -1.5125 0.85 0 1.69165 0.20417 2.525 0.6125 0.83335 0.408335 1.575 1.07917 2.225 2.0125 0.73335 -0.93333 1.49165 -1.604165 2.275 -2.0125 0.78335 -0.40833 1.60835 -0.6125 2.475 -0.6125 1.48335 0 2.72915 0.50417 3.7375 1.5125 1.00835 1.00835 1.5125 2.2625 1.5125 3.7625 0 1.9 -0.75835 3.72085 -2.275 5.4625 -1.51665 1.74165 -3.30835 3.57085 -5.375 5.4875l-1.325 1.225c-0.13335 0.13335 -0.29165 0.23335 -0.475 0.3 -0.18335 0.06665 -0.36665 0.1 -0.55 0.1Z"
            strokeWidth={0.5}
          />
        </svg>
      </span>
      {watchListLength ? <span className="bg-orange-400 text-white px-1.5 p-0.5 rounded-lg text-xs absolute -right-1 -top-1">{watchListLength}</span> : ""}
    </Link>
  );
}
