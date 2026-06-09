"use client";

import { useMenu } from "@/context/menuContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SwitchMenuBtn(params) {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const pathname = usePathname();
  useEffect(() => {
    closeMenu();
  }, [pathname]);
  return (
    <button onClick={toggleMenu} className="flex flex-col justify-center items-center min-w-10">
      <span>
        <svg className="dark:stroke-[#c5c5c5] stroke-[#888888]" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Menu_Alt_02">
              <path id="Vector" d="M11 17H19M5 12H19M11 7H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </g>
        </svg>
      </span>
      <span id="menu-text" className="flex justify-center items-center">
        {isOpen ? <span className="bg-orange-400 my-1.5 w-1.5 h-1.5 rounded-full"></span> : "منو"}
      </span>
    </button>
  );
}
