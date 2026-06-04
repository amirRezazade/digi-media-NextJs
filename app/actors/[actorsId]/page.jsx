import ActorProfile from "@/components/cart/ActorProfile";
import ActorCredits from "./ActorCredits";
import Link from "next/link";

export default async function page({ params }) {
  const { actorsId } = await params;
  let data = null;
  let age;
  let credits = null;
  try {
    let person = await fetch(`https://api.themoviedb.org/3/person/${actorsId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`, {
      next: { revalidate: 604800 },
    });
    data = await person.json();

    let year = new Date().getFullYear();
    if (data.deathday) {
      age = data.deathday.slice(0, 4) - data.birthday.slice(0, 4);
    } else {
      age = data.birthday ? year - data.birthday.slice(0, 4) : "";
    }

    let creditsRes = await fetch(`https://api.themoviedb.org/3/person/${actorsId}/combined_credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&include_adult=false`, {
      next: { revalidate: 604800 },
    });
    credits = await creditsRes.json();
  } catch (err) {
    throw new Error("خطا در دریافت اطلاعات!" + err);
  }

  return (
    <main className=" px-3 md:px-6 lg:px-8 xl:px-12 my-8 md:my-7">
      <div className="flex items-center gap-1 text-[11px] text-gray-300 mb-4">
        <span>
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
            </g>
          </svg>
        </span>
        <Link href="/" className="transition-all duration-300 cursor-pointer hover:text-orange-400">
          خانه
        </Link>
        <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#ffffff"></path>{" "}
          </g>
        </svg>
        <Link href="/actors" className="transition-all duration-300 cursor-pointer hover:text-orange-400">
          بازیگر ها
        </Link>
        <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#ffffff"></path>{" "}
          </g>
        </svg>
        <span className="transition-all duration-300 cursor-pointer hover:text-orange-400">{data.name}</span>
      </div>
      <section className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
        <div className="sm:sticky top-5 lg:static w-[80%] xs:w-full sm:max-w-65 lg:max-w-75 mx-auto h-auto sm:mt-3 flex-row flex-wrap sm:flex-nowrap sm:flex-col bg-white dark:bg-gray-800  flex  gap-2 rounded-3xl overflow-hidden">
          <ActorProfile profile={data.profile_path} name={data.name} />
          <div className="grow sm:grow-0 flex  xs:justify-between  flex-col gap-2 px-5 pt-2 items-center">
            <h1 dir="ltr" className=" text-black dark:text-white font-bold text-2xl font-sans text-center">
              {data.name}
            </h1>
            <div className="w-full flex  justify-between items-center py-1.5 border-b border-gray-500/30">
              <span className="text-black dark:text-white text-xs">سن:</span>
              <span className="text-gray-500 dark:text-gray-300 text-xs font-light ">{age || "----"} سال</span>
            </div>
            <div className="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span className="text-black dark:text-white text-xs">تاریخ تولد :</span>
              <span className="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.birthday ? data.birthday : "----"}</span>
            </div>
            {data.deathday && (
              <div className=" w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
                <span className="text-black dark:text-white text-xs">تاریخ فوت :</span>
                <span className="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.deathday}</span>
              </div>
            )}
            <div className="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span className="text-black dark:text-white text-xs">جنسیت :</span>
              <span className="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.gender == 1 ? "زن" : "مرد"}</span>
            </div>
            <div className="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span className="text-black dark:text-white text-xs">محل تولد :</span>
              <span className="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.place_of_birth ? data.place_of_birth : "----"}</span>
            </div>
            <div className="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span className="text-black dark:text-white text-xs">حرفه :</span>
              <span className="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.known_for_department ? data.known_for_department : "-----"}</span>
            </div>
            {data.imdb_id && (
              <a href={`https://www.imdb.com/name/${data.imdb_id}`} target="_blank" className=" bg-orange-400 text-white text-xs rounded-3xl p-2 mt-2 mb-4">
                مشاهده پروفایل در IMDb
              </a>
            )}
          </div>
        </div>

        {credits && <ActorCredits credits={credits} actorsId={actorsId} />}
      </section>
    </main>
  );
}
