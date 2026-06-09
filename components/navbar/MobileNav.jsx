"use client";
import Link from "next/link";
import SwitchMenuBtn from "./SwitchMenuBtn";
import { usePathname } from "next/navigation";

export default function MobileNav(params) {
  const pathname = usePathname();

  return (
    <section className="theme  text-[#888888] z-99 dark:text-[#c5c5c5] text-xs xs:text-sm fixed py-1 bottom-0 w-screen flex items-center justify-around shadow-2xl shadow-black dark:shadow-white lg:hidden ">
      <SwitchMenuBtn />
      <Link href="/" className="flex flex-col justify-center items-center gap-1 min-w-10">
        <span>
          <svg className="dark:fill-[#c5c5c5] fill-[#888888]" width="22px" height="22px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"></path>
            </g>
          </svg>
        </span>
        {pathname === "/" ? <span className="bg-orange-400 my-1.5 w-1.5 h-1.5 rounded-full"></span> : <span>خانه</span>}
      </Link>
      <Link href={"/search"} className="flex flex-col justify-center items-center gap-1 min-w-10">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-[#c5c5c5] fill-[#888888]" viewBox="0 0 24 24" height={21} width={21}>
            <g id="search-fill">
              <path id="Union" d="M11 2c4.9706 0 9 4.02944 9 9 0 2.125 -0.7381 4.0766 -1.9697 5.6162l3.4267 3.4268c0.3906 0.3905 0.3906 1.0235 0 1.414 -0.3905 0.3906 -1.0235 0.3906 -1.414 0l-3.4268 -3.4267C15.0766 19.2619 13.125 20 11 20c-4.97056 0 -9 -4.0294 -9 -9 0 -4.97056 4.02944 -9 9 -9m0 2c-3.86599 0 -7 3.13401 -7 7 0 3.866 3.13401 7 7 7 3.866 0 7 -3.134 7 -7 0 -3.86599 -3.134 -7 -7 -7" strokeWidth={1} />
            </g>
          </svg>
        </span>
        {pathname.startsWith("/search") ? <span className="bg-orange-400 my-1.5 w-1.5 h-1.5 rounded-full"></span> : <span>جستجو</span>}
      </Link>
      <Link href={"/profile/watch-list"} className="flex flex-col justify-center items-center gap-1 min-w-10">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-[#c5c5c5] fill-[#888888]" viewBox="0 0 14 14" id="Bookmark--Streamline-Flex" height={20} width={20}>
            <desc>{"\n    Bookmark Streamline Icon: https://streamlinehq.com\n  "}</desc>
            <g id="bookmark--bookmarks-tags-favorite">
              <path id="Vector" strokeLinecap="round" strokeLinejoin="round" d="M11.6602 12.0852c-0.0333 0.4656 -0.5926 0.6832 -0.9318 0.3626L7.68702 9.57254c-0.38549 -0.36444 -0.98847 -0.36444 -1.37396 -0.00001L3.2717 12.4478c-0.33917 0.3206 -0.89853 0.103 -0.93178 -0.3626v0c-0.22596 -3.16338 -0.23549 -6.33579 -0.04779 -9.49964C2.35374 1.54721 3.22321 0.75 4.26338 0.75H9.7367c1.0402 0 1.9096 0.79721 1.9712 1.83556 0.1878 3.16385 0.1782 6.33626 -0.0477 9.49964v0Z" strokeWidth={1} />
            </g>
          </svg>
        </span>
        {pathname === "/profile/watch-list" ? <span className="bg-orange-400 my-1.5 w-1.5 h-1.5 rounded-full"></span> : <span>علاقه مندی ها</span>}
      </Link>
    </section>
  );
}
