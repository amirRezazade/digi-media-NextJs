"use client";
import Image from "next/image";
import Link from "next/link";
import breakingBad from "../../public/images/navbar/breaking-bad.png";
import joker from "../../public/images/navbar/joker.png";
import leonardo from "../../public/images/navbar/leonardo.png";
import darkLogo from "../../public/images/navbar/logo-dark.png";
import lightLogo from "../../public/images/navbar/logo-light.png";
import { useState } from "react";
import { useMenu } from "@/context/menuContext";

export default function Menu(params) {
  let [openIndex, setOpenIndex] = useState(null);
  const { isOpen, closeMenu } = useMenu();

  return (
    <div onClick={(e) => e.target.classList.contains("menu-bg") && closeMenu()} className={`menu-bg fixed w-screen h-screen top-0  right-0 bg-black/60 transition-transform duration-700 lg:static z-10 lg:bg-transparent lg:items-center lg:h-auto lg:grow lg:w-auto xl:w-auto xl:grow-0 ${isOpen ? " " : "translate-x-5/4"} lg:translate-x-0`}>
      <ul className="w-8/10 xs:max-w-80 sm:max-w-100 lg:max-w-max h-full bg-white lg:bg-transparent dark:bg-gray-800 flex flex-col gap-3 p-5 pb-20 overflow-auto hidden-scrollbar text-sm lg:w-full lg:h-auto lg:flex-row lg:p-0 lg:overflow-visible lg:dark:bg-transparent lg:justify-between xl:justify-start xl:gap-10">
        <div className="flex items-center justify-between mb-5 lg:hidden">
          <Link href="/">
            <Image className=" dark:hidden" src={darkLogo} alt="dark-logo" />
            <Image className="hidden dark:block" src={lightLogo} alt="light-logo" />
          </Link>
          <button onClick={closeMenu} className="cursor-pointer">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#c5c5c5" strokeWidth="1.5" strokeLinecap="round"></path>
                <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#c5c5c5" strokeWidth="1.5" strokeLinecap="round"></path>
              </g>
            </svg>
          </button>
        </div>
        <li className="theme rounded-lg p-2 flex items-center justify-between lg:w-auto lg:h-full lg:dark:bg-transparent lg:p-0 lg:text-xs group">
          <Link href="/" className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4 lg:gap-1 xl:gap-4">
              <span className="lg:group-hover:scale-120 transition-transform duration-300">
                <svg fill="#ff9800" width="30px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ff9800">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M960.16 0 28 932.16l79 78.777 853.16-853.16 853.16 853.16 78.889-78.777L960.16 0Zm613.693 1027.34v781.078h-334.86v-557.913h-557.8v557.912H346.445V1027.34H234.751V1920h1450.684v-892.66h-111.582Zm-446.33 334.748v446.441H792.775v-446.441h334.748ZM960.127 692.604c61.593 0 111.582 49.989 111.582 111.582 0 61.594-49.989 111.583-111.582 111.583-61.594 0-111.583-49.99-111.583-111.583 0-61.593 49.99-111.582 111.583-111.582Zm223.165 111.582c0-123.075-100.09-223.165-223.165-223.165-123.076 0-223.165 100.09-223.165 223.165 0 123.076 100.09 223.165 223.165 223.165 123.075 0 223.165-100.09 223.165-223.165"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-black dark:text-white">خانه</span>
                <span className="text-orange-400 text-sm font-mono">HOME</span>
              </span>
            </div>
          </Link>
        </li>
        <li className={`overflow-clip max-h-15 ${openIndex == 1 ? "max-h-90" : ""} theme rounded-lg lg:text-xs transition-[max_height] duration-300 lg:w-auto lg:h-full lg:dark:bg-transparent lg:relative lg:overflow-visible group`}>
          <div className="flex items-center justify-between p-2  lg:p-0">
            <Link href="/movie" className="flex justify-between items-center w-full">
              <div className="flex items-center gap-4 lg:gap-1 xl:gap-4">
                <span className="lg:group-hover:scale-120 transition-transform duration-300 fill-orange-400">
                  <svg width="30" height="30" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-movie">
                    <path d="M6 15v3h8v-7H6v4zm-2-2v-2H2V9h2V7H2v6h2zm0 2H2v1a2 2 0 0 0 2 2v-3zm14-2V7h-2v2h2v2h-2v2h2zm0 2h-2v3a2 2 0 0 0 2-2v-1zm-4-8V2H6v7h8V7zm4-2V4a2 2 0 0 0-2-2v3h2zM4 5V2a2 2 0 0 0-2 2v1h2zm0-5h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-black dark:text-white">فیلم ها</span>
                  <span className="text-orange-400 text-sm font-mono">MOVIES</span>
                </span>
              </div>
            </Link>
            <span onClick={() => setOpenIndex((prev) => (prev == 1 ? null : 1))} className=" ml-2 w-8 h-10 transition-transform duration-300 lg:hidden hover:-rotate-90 relative before:content-[''] before:absolute before:w-3 before:h-3   before:border-b-2 before:border-l-2 before:top-1/2 before:left-1/2 before:rotate-45 before:-translate-1/2 before:border-gray-500 dark:before:border-white  "></span>
          </div>
          <ul className="w-full overflow-hidden text-black dark:text-white list-disc ps-10 pt-5 pb-3 transition-all duration-300 marker:text-orange-400 flex flex-col gap-3 text-xs lg:absolute lg:text-sm lg:pr-13 lg:pl-50 lg:py-12 lg:flex-wrap lg:gap-4 lg:top-20 lg:-right-25 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-1/1 lg:w-185 lg:h-70 lg:rounded-2xl lg:bg-gray-300/60 lg:dark:bg-gray-900/60 lg:backdrop-blur-xs">
            <li>
              <Link href="/movie" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                250 فیلم برتر IMDb
              </Link>
            </li>
            <li>
              <Link href={"/movie?sortby=release_date.desc"} className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                جدیدترین فیلم ها
              </Link>
            </li>
            <li>
              <Link href="/movie?genre=28" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                فیلم های اکشن
              </Link>
            </li>
            <li>
              <Link href="/movie?genre=878" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                فیلم های علمی تخیلی
              </Link>
            </li>
            <li>
              <Link href="/movie?genre=878" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                انیمیشن ها
              </Link>
            </li>
            <li>
              <Link href="/movie" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                فیلم های دوبله فارسی
              </Link>
            </li>
            <li>
              <Link href="/movie" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                فیلم های زیرنویس فارسی
              </Link>
            </li>
            <li>
              <Link href="/movie" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                فیلم های دارای پخش آنلاین
              </Link>
            </li>
            <Image className="absolute bottom-0 left-0 hidden lg:block" width={203} height={232} src={joker} alt="joker" />
          </ul>
        </li>
        <li className={`overflow-clip max-h-15 ${openIndex == 2 ? "max-h-80" : ""} theme rounded-lg  lg:text-xs transition-[max_height] duration-300 lg:w-auto lg:h-full lg:dark:bg-transparent lg:relative lg:overflow-visible group`}>
          <div className="flex items-center justify-between p-2  lg:p-0">
            <Link href="/series" className="flex justify-between items-center w-full">
              <div className="flex items-center gap-4 lg:gap-1 xl:gap-4">
                <span className="lg:group-hover:scale-120 transition-transform duration-300 fill-orange-400">
                  <svg width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>tv</title>
                    <path d="M28.015 28.944h-2.049v1.056h-3.043v-1.056h-13.908v1.056h-3.043l0.001-1.056h-1.988c-1.098 0-1.987-0.89-1.987-1.987v-18.937c0-1.097 0.89-1.987 1.987-1.987h6.954c0 0 0.438-0.608 1.239-1.162l-2.553-2.554 0.703-0.702 2.755 2.754c0.524-0.225 1.131-0.385 1.83-0.385 0.743 0 1.373 0.183 1.91 0.43l2.799-2.799 0.702 0.702-2.614 2.615c0.729 0.537 1.115 1.102 1.115 1.102h9.189c1.098 0 1.987 0.89 1.987 1.987v18.937c0.001 1.097-0.889 1.986-1.986 1.986zM20.937 10.007c0-0.549-0.445-0.993-0.994-0.993h-13.908c-0.549 0-0.994 0.444-0.994 0.993v14.964c0 0.549 0.445 0.993 0.994 0.993h13.907c0.549 0 0.994-0.444 0.994-0.993v-14.964zM24.042 25.964h2.917v-0.993h-2.917v0.993zM24.042 23.977h2.917v-0.992h-2.917v0.992zM24.042 21.928h2.917v-0.993h-2.917v0.993zM24.042 19.941h2.917v-0.994h-2.917v0.994zM25.431 9.038c-0.822 0-1.49 0.667-1.49 1.49s0.668 1.49 1.49 1.49c0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49zM25.431 13c-0.822 0-1.49 0.666-1.49 1.489s0.668 1.49 1.49 1.49c0.823 0 1.49-0.667 1.49-1.49s-0.667-1.489-1.49-1.489z"></path>
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-black dark:text-white">سریال ها</span>
                  <span className="text-orange-400 text-sm font-mono">SERIES</span>
                </span>
              </div>
            </Link>
            <button onClick={() => setOpenIndex((prev) => (prev == 2 ? null : 2))} className=" ml-2 w-8 h-10 transition-transform duration-300 lg:hidden hover:-rotate-90 relative before:content-[''] before:absolute before:w-3 before:h-3   before:border-b-2 before:border-l-2 before:top-1/2 before:left-1/2 before:rotate-45 before:-translate-1/2 before:border-gray-500 dark:before:border-white  "></button>
          </div>
          <ul className="w-full overflow-hidden text-black dark:text-white list-disc ps-10 pt-5 pb-3 transition-all duration-300 marker:text-orange-400 flex flex-col gap-3 text-xs lg:absolute lg:text-sm lg:pr-13 lg:pl-50 lg:py-12 lg:pb-30 lg:flex-wrap lg:gap-4 lg:top-20 lg:-right-60 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-1/1 lg:w-[740px] lg:h-70 lg:rounded-2xl lg:bg-gray-300/60 lg:dark:bg-gray-900/60 lg:backdrop-blur-xs">
            <li>
              <Link href="/series" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                تمامی سریال ها
              </Link>
            </li>
            <li>
              <Link href="/series" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                250 سریال برتر IMDb
              </Link>
            </li>
            <li>
              <Link href="/series?genre=10759" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                سریال های اکشن و ماجراجویی
              </Link>
            </li>
            <li>
              <Link href="/series?genre=10768" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                سریال های جنگی
              </Link>
            </li>
            <li>
              <Link href="/series?genre=10751" className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                سریال های خانوادگی
              </Link>
            </li>
            <Image className="absolute bottom-0 left-0 hidden lg:block" src={breakingBad} alt="breaking bad" />
          </ul>
        </li>
        <li className={`overflow-clip max-h-15 ${openIndex == 3 ? "max-h-50" : ""} theme rounded-lg p-2 flex items-center flex-wrap justify-between lg:p-0 lg:text-xs transition-[max_height] duration-300 lg:w-auto lg:h-full lg:dark:bg-transparent lg:relative lg:overflow-visible group`}>
          <button onClick={() => setOpenIndex((prev) => (prev == 3 ? null : 3))} className="flex justify-between items-center w-full">
            <Link href={"/actors"} className="flex items-center gap-4 lg:gap-1 xl:gap-4">
              <span className="lg:group-hover:scale-120 transition-transform duration-300">
                <svg fill="#ff9800" width="30px" height="30px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1 11.4-12.72 28.81-23.7 49.9-30.92l7.63-43.18zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65 57.76-32.06 123.12-49.01 189.01-49.01 1.61 0 3.23.17 4.85.19 13.95-13.47 31.73-22.83 51.59-26 18.89-3.02 38.05-4.55 57.18-5.32-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0 176.66 0 101.02 19.42 33.2 57.06 9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08 3.59 0 6.75-.46 10.01-.8-13.52-17.08-28.94-40.48-39.5-67.58-47.61-12.98-106.06-51.62-111.93-84.79zm97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4-8.25 8.91-20.67 15.75-35.32 18.32-14.65 2.58-28.67.4-39.48-5.17-.52 3.94-.64 7.98.09 12.1 3.84 21.7 24.58 36.19 46.34 32.37 21.75-3.82 36.28-24.52 32.44-46.22zM606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35 63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52zm-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36 21.76 3.83 36.28 24.52 32.45 46.22-.73 4.12-2.23 7.87-4.07 11.4-8.25-8.91-20.67-15.75-35.32-18.32-14.65-2.58-28.67-.4-39.48 5.17-.53-3.95-.65-7.99.08-12.11zm70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9 20.6 25.54 56.21 46.17 99.49 53.78 43.28 7.61 83.82.37 111.93-16.6-14.18 51.94-66.71 85.51-122.38 75.72zm130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32-14.65-2.58-28.67-.4-39.48 5.17-.52-3.94-.64-7.98.09-12.1 3.84-21.7 24.58-36.19 46.34-32.37 21.75 3.83 36.28 24.52 32.45 46.22-.73 4.13-2.23 7.88-4.07 11.4z"></path>
                  </g>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-black dark:text-white">هنرمندان</span>
                <span className="text-orange-400 text-sm font-mono">ARTISTS</span>
              </div>
            </Link>
            <span className=" ml-2 w-8 h-10 transition-transform duration-300 lg:hidden hover:-rotate-90 relative before:content-[''] before:absolute before:w-3 before:h-3   before:border-b-2 before:border-l-2 before:top-1/2 before:left-1/2 before:rotate-45 before:-translate-1/2 before:border-gray-500 dark:before:border-white  "></span>
          </button>
          <ul className="w-full overflow-hidden text-black dark:text-white list-disc ps-10 pt-5 pb-3 transition-all duration-300 marker:text-orange-400 flex flex-col gap-3 text-xs lg:absolute lg:text-sm lg:pr-13 lg:pl-50 lg:py-12 lg:flex-wrap lg:gap-45 lg:flex-row lg:top-20 lg:-right-80 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-1/1 lg:w-[740px] lg:h-70 lg:rounded-2xl lg:bg-gray-300/60 lg:dark:bg-gray-900/60 lg:backdrop-blur-xs">
            <li>
              <Link href={"/actors"} className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                ستارگان
              </Link>
            </li>
            <li>
              <Link href={"/actors"} className="inline-flex justify-between items-center hover:text-orange-400 hover:-translate-x-1 transition-transform duration-300">
                کارگردان ها
              </Link>
            </li>
            <Image src={leonardo} alt="leonardo" className="absolute bottom-0 left-0 hidden lg:block" />
          </ul>
        </li>
        <li className="theme rounded-lg p-2 flex items-center justify-between lg:w-auto lg:h-full lg:dark:bg-transparent lg:p-0 lg:text-xs group">
          <Link href={"/contact-us"} className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4 lg:gap-1 xl:gap-4">
              <span className="lg:group-hover:scale-120 transition-transform duration-300 fill-orange-400">
                <svg width="30" height="30" viewBox="0 0 24 24" id="_24x24_On_Light_Support" data-name="24x24/On Light/Support" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect id="view-box" width="24" height="24" fill="none"></rect>{" "}
                    <path
                      id="Shape"
                      d="M8,17.751a2.749,2.749,0,0,1,5.127-1.382C15.217,15.447,16,14,16,11.25v-3c0-3.992-2.251-6.75-5.75-6.75S4.5,4.259,4.5,8.25v3.5a.751.751,0,0,1-.75.75h-1A2.753,2.753,0,0,1,0,9.751v-1A2.754,2.754,0,0,1,2.75,6h.478c.757-3.571,3.348-6,7.022-6s6.264,2.429,7.021,6h.478a2.754,2.754,0,0,1,2.75,2.75v1a2.753,2.753,0,0,1-2.75,2.75H17.44A5.85,5.85,0,0,1,13.5,17.84,2.75,2.75,0,0,1,8,17.751Zm1.5,0a1.25,1.25,0,1,0,1.25-1.25A1.251,1.251,0,0,0,9.5,17.751Zm8-6.75h.249A1.251,1.251,0,0,0,19,9.751v-1A1.251,1.251,0,0,0,17.75,7.5H17.5Zm-16-2.25v1A1.251,1.251,0,0,0,2.75,11H3V7.5H2.75A1.251,1.251,0,0,0,1.5,8.751Z"
                      transform="translate(1.75 2.25)"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-black dark:text-white">تماس با ما</span>
                <span className="text-orange-400 text-sm font-mono">CONTACT</span>
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
