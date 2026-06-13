"use client";

const SvgIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Layer_1" width="50" height="50" fill="oklch(75% 0.183 55.934)" stroke="oklch(75% 0.183 55.934)" version="1.1" viewBox="-5.53 0 122.88 122.88">
    <path
      id="SVGRepo_iconCarrier"
      fillRule="evenodd"
      d="M55.72 0c20.87 13.2 39.67 19.47 55.85 17.99 2.84 57.11-18.25 90.84-55.63 104.89C19.84 109.72-1.5 77.42.08 17.11c18.99.99 37.61-3.1 55.64-17.11zM20.14 44.81h7.11l4.95 15.83 4.87-15.83h6.9L35.81 66.8h-7.36l-8.31-21.99zm25.53 0h11.29c2.46 0 4.3.58 5.52 1.76 1.22 1.17 1.84 2.84 1.84 4.99 0 2.22-.67 3.96-2 5.21-1.34 1.25-3.37 1.87-6.11 1.87h-3.72v8.16h-6.82V44.81zm6.82 9.37h1.66c1.31 0 2.23-.23 2.76-.68.53-.46.79-1.03.79-1.75 0-.69-.23-1.28-.69-1.76s-1.32-.72-2.59-.72h-1.94v4.91zm14.92-9.37h6.35l8.28 12.17V44.81h6.41V66.8h-6.41L73.8 54.72V66.8h-6.39V44.81zM55.72 7.04c18.47 11.69 35.13 17.22 49.44 15.93 2.51 50.55-16.18 80.41-49.26 92.87C23.97 104.19 5.06 75.62 6.46 22.23c16.81.88 33.29-2.76 49.26-15.15v-.04z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const arrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -6.5 38 38">
    <g id="SVGRepo_iconCarrier">
      <g id="icons" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g id="ui-gambling-website-lined-icnos-casinoshunter" fill="#fff" fillRule="nonzero" transform="translate(-1641 -158)">
          <g id="1" transform="translate(1350 120)">
            <path id="left-arrow" d="m317.812 38.58 10.513 10.424.088.082c.352.349.557.809.587 1.352l-.002.183c-.025.43-.19.842-.514 1.21l-.123.127-10.549 10.462a2.005 2.005 0 0 1-2.822 0 1.985 1.985 0 0 1 0-2.822l7.284-7.224H293c-1.102 0-1.999-.889-1.999-1.99 0-1.102.897-1.992 2-1.992h29.04l-7.05-6.99a1.985 1.985 0 0 1 0-2.822 2.005 2.005 0 0 1 2.822 0" transform="matrix(-1 0 0 1 620 0)"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error() {
  useEffect(() => {
    document.title = "error";
  }, []);

  return (
    <div className="bg-[url(/images/default-bg.jpg)] bg-cover ">
      <div className="bg-black/40 flex justify-center items-center flex-col gap-4 w-full min-h-[85vh] pb-10 sm:pt-10 px-3">
        <div>
          <Image alt="not found" className="xs:size-70 sm:size-80" width={250} height={250} src="/images/error.png" />
          <h1 className="font-bold text-lg sm:text-xl text-center text-white">خطا در دریافت داده ها!</h1>
        </div>
        <div className="max-w-100 bg-[#191919] flex justify-between items-center gap-6 sm:gap-10 py-3 px-5 border border-gray-400/20 rounded-2xl">
          <div>
            <h3 className="font-bold  text-orange-400">با VPN امتحان کنید!</h3>
            <p className="text-xs xs:text-sm mt-3 text-justify text-white">
              برای دسترسی به محتوا لطفا به یک vpn <br /> متصل شده و دوباره امتحان کنید.
            </p>
          </div>
          <span>{SvgIcon()}</span>
        </div>
        <button className="flex justify-center text-sm gap-2 px-5 py-2.5 bg-linear-to-b to-orange-400 from-orange-500 rounded-2xl text-white" onClick={() => window.location.reload()}>
          تلاش مجدد
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Refresh-Fill--Streamline-Outlined-Fill-Material" height={20} width={20}>
              <desc>{"\n    Refresh Fill Streamline Icon: https://streamlinehq.com\n  "}</desc>
              <path
                fill="#fff"
                d="M12 20c-2.21665 0 -4.10415 -0.77915 -5.6625 -2.3375C4.779165 16.10415 4 14.21665 4 12c0 -2.21665 0.779165 -4.10415 2.3375 -5.6625C7.89585 4.779165 9.78335 4 12 4c1.41665 0 2.65835 0.2875 3.725 0.8625 1.06665 0.575 1.99165 1.3625 2.775 2.3625V4h1.5v6.35H13.65v-1.5h4.2c-0.63335 -1 -1.44165 -1.80835 -2.425 -2.425C14.44165 5.80835 13.3 5.5 12 5.5c-1.81665 0 -3.35415 0.62915 -4.6125 1.8875C6.12915 8.64585 5.5 10.18335 5.5 12c0 1.81665 0.62915 3.35415 1.8875 4.6125C8.64585 17.87085 10.18335 18.5 12 18.5c1.38335 0 2.65 -0.39585 3.8 -1.1875s1.95 -1.8375 2.4 -3.1375h1.55c-0.48335 1.75 -1.44165 3.15835 -2.875 4.225C15.44165 19.46665 13.81665 20 12 20Z"
                strokeWidth={0.5}
              />
            </svg>
          </span>
        </button>

        <Link href={"/"} className="flex justify-center text-sm gap-3 px-12 py-2.5 bg-linear-to-b to-orange-400 from-orange-500 rounded-2xl text-white">
          <span>بازگشت به صفحه اصلی</span>
          <span>{arrowIcon()}</span>
        </Link>
      </div>
    </div>
  );
}
