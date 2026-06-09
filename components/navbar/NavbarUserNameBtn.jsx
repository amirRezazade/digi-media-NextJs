"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarUserNameBtn(params) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCookie("user"));
  }, []);
  function getCookie(name) {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`))
      ?.split("=")[1];
    return value ? JSON.parse(decodeURIComponent(value)) : null;
  }
  return (
    <Link href={user?.name ? "/profile" : "/auth"} className="flex items-center justify-center gap-1 p-2 ml-4 bg-orange-400 text-white rounded-xl text-xs 2xl:ml-15  w-22  ">
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
      <span className="truncate">{user?.name || "ورود / عضویت"}</span>
    </Link>
  );
}
