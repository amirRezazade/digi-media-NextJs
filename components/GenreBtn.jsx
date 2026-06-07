"use client";
import { useRouter } from "next/navigation";
import { genres } from "./utils";

export default function GenreBtn({ id }) {
  let router = useRouter();
  function genreLink(e, id) {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/search?genre=${id}`);
  }
  return (
    <button className=" pointer-events-auto px-2.5 py-1 cursor-pointer rounded-full border border-gray-400 text-xs hover:text-orange-400 hover:border-orange-400 transition-colors duration-300" onClick={(e) => genreLink(e, id)}>
      {genres[id]}
    </button>
  );
}
