"use client";

export default function ScrollToTop(params) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <button onClick={scrollToTop} className="w-13 h-13 bg-[url(/images/top.png)]  bg-no-repeat grayscale-100 hover:grayscale-0 transition-all duration-300"></button>;
}
