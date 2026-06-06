"use client";
import { useState } from "react";

export default function Trailer({ id, type = "series" }) {
  let [open, setOpen] = useState(false);
  let [error, setError] = useState(false);
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [empty, setEmpty] = useState(false);

  async function getTrailer() {
    try {
      let response = await fetch(`https://api.themoviedb.org/3/${type == "series" ? "tv" : "movie"}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
      if (!response.ok) setError(true);
      let res = await response.json();
      let list = res.results;

      let main = list.find((el) => el.type == "Trailer" && el.official == true) || list[0];
      setData(main);
      setLoading(false);
      if (!main) setEmpty(true);
    } catch {
      setError(true);
    }
  }

  function openModal() {
    getTrailer();
    setOpen(true);
    setLoading(true);
    document.body.classList.add("lock-scroll");
  }
  function closeModal() {
    setOpen(false);
    document.body.classList.remove("lock-scroll");
  }

  return (
    <>
      <button onClick={openModal} className=" bg-orange-400 rounded-xl py-2 lg:py-3 md:px-5  grow md:grow-0  flex items-center justify-center gap-1">
        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#ffffff"></path>{" "}
          </g>
        </svg>
        پخش تریلر
      </button>
      {open && (
        <div onClick={(e) => e.target.classList.contains("modal-bg") && closeModal()} className="modal-bg  fixed bg-black/90 z-99 w-screen h-screen top-0 left-0 flex justify-center items-center">
          <button onClick={closeModal} className="absolute p-2 top-6 right-6 cursor-pointer">
            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clipPath="url(#clip0_429_11083)">
                  {" "}
                  <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_429_11083">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </button>
          {!data && loading && !error && <span className="size-12 rounded-full border-4 border-orange-400 border-t-transparent border-b-transparent animate-spin"></span>}
          {data && <iframe className="w-full h-2/3 mx-3 md:w-2/3 border border-gray-500" src={`https://www.youtube.com/embed/${data.key}?autoplay=0&controls=1`} title="Trailer" allowFullScreen></iframe>}
          {empty && <p className="text-white text-lg "> ویدیو وجود ندارد!</p>}
          {error && <p className="text-white text-lg "> خطا در دریافت اطلاعات!</p>}
        </div>
      )}
    </>
  );
}
