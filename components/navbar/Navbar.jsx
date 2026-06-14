import lightLogo from "../../public/images/navbar/logo-light.png";
import Image from "next/image";
import Link from "next/link";
import SwichTheme from "./SwichTheme";
import Menu from "./Menu";
import NavbarSearchInput from "./NavbarSearchInput";
import NavbarUserNameBtn from "./NavbarUserNameBtn";
import WatchListBtn from "./WatchListBtn";

export default function Navbar(params) {
  return (
    <nav className="bg-[url('/images/navbar/navbar.png')]  lg:sticky top-0 z-99 bg-center bg-no-repeat pt-3 flex items-center justify-end flex-wrap gap-x-4 gap-y-3">
      <span className="text-white ml-auto mr-1 sm:mr-4 md:mr-8 text-xs sm:text-sm hidden xs:inline-block">
        <span className="hidden sm:inline">جهت نمایش عکس ها و تریلر ها</span> vpn خود را روشن کنید
      </span>
      <WatchListBtn />
      <SwichTheme />
      <NavbarUserNameBtn />

      <div className="w-full h-full flex  items-end justify-between ">
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
