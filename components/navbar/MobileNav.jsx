import Link from "next/link";
import SwitchMenuBtn from "./SwitchMenuBtn";

export default function MobileNav(params) {
  return (
    <section className="theme  text-[#888888] z-99 dark:text-[#c5c5c5] text-xs xs:text-sm fixed py-1 bottom-0 w-screen flex items-center justify-around shadow-2xl shadow-black dark:shadow-white lg:hidden ">
      <SwitchMenuBtn />
      <Link href="/" className="flex flex-col justify-center items-center gap-1">
        <span>
          <svg className="dark:fill-[#c5c5c5] fill-[#888888]" width="22px" height="22px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"></path>
            </g>
          </svg>
        </span>
        <span>خانه</span>
      </Link>
      <Link href={"/profile/watch-list"} className="flex flex-col justify-center items-center gap-1">
        <span>
          <svg className="dark:fill-[#c5c5c5] fill-[#888888]" width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"></path>
            </g>
          </svg>
        </span>
        <span>علاقه مندی ها</span>
      </Link>
      <Link href={"/profile"} className="flex flex-col justify-center items-center gap-1">
        <span>
          <svg className="dark:fill-[#c5c5c5] fill-[#888888]" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="6" r="4"></circle>
              <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"></path>
            </g>
          </svg>
        </span>
        <span>پنل</span>
      </Link>
    </section>
  );
}
