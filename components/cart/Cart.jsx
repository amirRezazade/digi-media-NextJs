import Link from "next/link";
import CartImg from "./CartImg";

export default function Cart({ type = "movie", item }) {
  return (
    <Link href={`/${type}/${item.id}`} className="relative group">
      <div className="w-full relative rounded-lg overflow-hidden ">
        <CartImg poster={item.poster_path} name={item.original_name} />
        <div className="w-full h-full absolute top-0 left-0 bg-linear-to-b from-transparent from-50% to-black/50 to-100% transition-opacity duration-600 group-hover:opacity-0">
          <p dir="ltr" className="py-2  p-3 text-sm absolute bottom-0 left-0  font-extrabold text-white">
            {item.name ? item.name : item.original_name}
          </p>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 rounded-lg sm:bg-black/60 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,transparent_30%,transparent_70%,rgba(0,0,0,0.5)_100%)] px-3 py-3.5 overflow-hidden sm:opacity-0 sm:invisible sm:group-hover:opacity-100 sm:group-hover:visible sm:group-hover:scale-90 transition-[opacity_visibility] duration-600">
        <div className="absolute top-0 left-0 p-3 text-amber-400 flex justify-between w-full gap-1.5 items-start ">
          <span>{item.first_air_date.slice(0, 4)}</span>
          <span className="hidden sm:inline-block">{type === "series" ? "سریال" : "فیلم"}</span>
          <div className="flex sm:hidden items-center gap-1">
            <span className="text-xs text-white">10/</span>
            <span className="text-base lg:text-2xl text-amber-400 font-bold">{item.vote_average.toFixed(1)}</span>
          </div>
        </div>
        <span className="hidden sm:inline-block absolute top-1/2 left-1/2 -translate-1/2">
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131" stroke="#cfcfcf" strokeWidth="1.5" strokeLinecap="round"></path>{" "}
            </g>
          </svg>
        </span>
        <div className=" absolute w-full p-3 bottom-0 left-0 flex justify-end items-center">
          <div className="hidden sm:flex items-center gap-1">
            <span className="text-xs text-white">10/</span>
            <span className="text-base lg:text-2xl text-amber-400 font-bold">{item.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
