import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function CrewSlider({ crew }) {
  let mainList = crew.length < 15 ? crew : crew.slice(0, 15);
  const list = [...new Map(mainList.map((item) => [item.id, item])).values()];
  console.log(list);

  return (
    <Swiper slidesPerView={6} spaceBetween={10} className="w-full overflow-hidden">
      {mainList.map((act) => (
        <SwiperSlide class="shrink-0 group overflow-hidden">
          <Link href={`/actors/${act.id}`} class="flex flex-col items-center  gap-1.5">
            <div class="aspect-square w-full rounded-full overflow-hidden loading-animation shrink-0">
              <Image width={100} height={100} class="object-cover" src={act?.profile_path ? `https://image.tmdb.org/t/p/w185${act.profile_path}_low` : "/images/default-person.jpg"} alt={act.original_name} />
            </div>
            <div class="flex flex-col items-left w-full gap-0.5 mt-1 ">
              <p dir="ltr" class="text-sm overflow-hidden text-black truncate block  dark:text-white text-center group-hover:text-orange-400 transition-all duration-300">
                <span>{act.original_name}</span>
              </p>
              <span class="text-center text-xs text-gray-500 dark:text-gray-300">{act.known_for_department}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
