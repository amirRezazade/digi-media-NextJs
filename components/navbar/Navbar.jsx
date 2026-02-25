import lightLogo from "../../public/images/navbar/logo-light.png";
import Image from "next/image";
import Link from "next/link";
import SwichTheme from "./SwichTheme";
import Menu from "./Menu";

export default function Navbar(params) {
  return (
    <nav className="bg-[url('/images/navbar/navbar.png')]  transition-all duration-300 lg:sticky lg:top-0   bg-center bg-no-repeat pt-3 flex items-center justify-end flex-wrap gap-x-4 gap-y-3">
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
          <Image className="" src={lightLogo} alt="light-logo" />
        </Link>
        <div className="theme px-4 py-2 xs:pr-6 xs:pl-0 sm:py-3 w-6/10 lg:w-auto h-full rounded-tr-4xl  sm:rounded-tr-full grow sm:pr-15 lg:flex lg:items-center lg:gap-10 xl:justify-between">
          <Menu />

          <div className="flex gap-2 items-center mx-auto bg-white shadow-xs shadow-black/20 dark:bg-gray-800 rounded-full px-0.5 xl:grow 2xl:max-w-99 2xl:mx-0 2xl:ml-10">
            <input id="navbar-input" type=" text" placeholder="جستجو..." className="text-sm px-3 grow outline-0 text-black dark:text-white h-full" />
            <span id="navbar-search" className="w-10 h-10 rounded-full cursor-pointer bg-orange-300/50 flex justify-center items-center">
              <span className="w-8 h-8 rounded-full bg-orange-400 flex justify-center items-center">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
