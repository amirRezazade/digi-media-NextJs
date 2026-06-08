import lightLogo from "../../public/images/navbar/logo-light.png";
import Image from "next/image";
import Link from "next/link";
import SwichTheme from "./SwichTheme";
import Menu from "./Menu";
import NavbarSearchInput from "./NavbarSearchInput";

export default function Navbar(params) {
  return (
    <nav className="bg-[url('/images/navbar/navbar.png')]  transition-all duration-300 lg:sticky lg:top-0  z-99 bg-center bg-no-repeat pt-3 flex items-center justify-end flex-wrap gap-x-4 gap-y-3">
      <span className="text-white ml-auto mr-1 sm:mr-4 md:mr-8 text-xs sm:text-sm hidden xs:inline-block">
        <span className="hidden sm:inline">جهت نمایش عکس ها و تریلر ها</span> vpn خود را روشن کنید
      </span>
      <div className="w-9 h-9 rounded-full relative bg-gray-700 flex justify-center items-center cursor-pointer">
        <span>
          <svg fill="#fff" width="20" height="20" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet">
            <path
              className="clr-i-outline clr-i-outline-path-1"
              d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"
            ></path>
            <path className="clr-i-outline clr-i-outline-path-2" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"></path>
            <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
          </svg>
        </span>
        <span className="bg-orange-400 text-white px-1.5 p-0.5 rounded-lg text-xs absolute -right-1 -top-1">2</span>
      </div>
      <SwichTheme />
      <Link href="/auth" className="flex items-center gap-1 p-2 ml-4 bg-orange-400 text-white rounded-xl text-xs 2xl:ml-15">
        <span>
          <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="7" r="4" stroke="#ffffff" strokeWidth="2"></circle>
              <path d="M16 21H8.00001C5.79087 21 3.84014 19.0616 4.99177 17.1763C6.11781 15.333 8.2972 14 12 14C15.7028 14 17.8822 15.333 19.0082 17.1763C20.1599 19.0616 18.2091 21 16 21Z" stroke="#ffffff" strokeWidth="2"></path>
            </g>
          </svg>
        </span>
        <span>ورود / عضویت</span>
      </Link>

      <div className="w-full h-full flex  items-end justify-between">
        <div className="theme w-16 h-16 rounded-tl-full hidden sm:inline"></div>
        <Link href="/" className="hidden xs:inline-block px-3 w-30 sm:w-35 h-10 sm:h-13 border-b-5 border-stone-200 dark:border-gray-900">
          <Image width={116} height={35} src={lightLogo} alt="light-logo" />
        </Link>
        <div className="theme px-4 py-2 xs:pr-6 xs:pl-0 sm:py-3 w-6/10 lg:w-auto h-full rounded-tr-4xl  sm:rounded-tr-full grow sm:pr-15 lg:flex lg:items-center lg:gap-10 xl:justify-between">
          <Menu />

          <div className="flex gap-2 items-center mx-auto bg-white shadow-xs shadow-black/20 dark:bg-gray-800 rounded-full px-0.5 xl:grow 2xl:max-w-99 2xl:mx-0 2xl:ml-10">
            <NavbarSearchInput />
          </div>
        </div>
      </div>
    </nav>
  );
}
