import Link from "next/link";
import ActorCartImage from "./ActorCartImage";
import Image from "next/image";

export default function ActorCart({ actor }) {
  return (
    <div class="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
      <Link href={`/actors/${actor.id}`} className="relative ">
        <div className="absolute w-full h-full top-0 left-0 bg-linear-to-t from-black/30 from-10% to-20% to-transparent text-xs sm:text-sm">
          <span className="absolute bottom-1 right-1"> ⭐ {actor.popularity.toFixed(1)}</span>
          <span class="absolute bottom-1 left-1">{actor.known_for_department || "-----"}</span>
        </div>
        <ActorCartImage profile={actor.profile_path} name={actor.name} />
      </Link>
      <div class=" px-2 py-2">
        <h1 dir="ltr" class=" text-black dark:text-white font-bold text-sm md:text-base text-center">
          {actor.name}
        </h1>

        <div dir="ltr" class=" w-full py-1.5 text-gray-500 dark:text-gray-300 text-xs overflow-hidden">
          <span dir="rtl" className="block w-full text-right">
            اثرات شناخته شده:
          </span>
          {actor.known_for?.slice(0, 3).map((item) => (
            <Link href={`/${item.media_type == "movie" ? "movie" : "series"}/${item.id}`} class="truncate block w-fit mt-1 hover:text-orange-400 ">
              {item.title || item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
