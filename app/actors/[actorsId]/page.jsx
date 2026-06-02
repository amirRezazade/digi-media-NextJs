import ActorProfile from "@/components/cart/ActorProfile";
import CreditsCart from "@/components/cart/CreditsCart";
import ActorCredits from "./ActorCredits";

export default async function page({ params }) {
  const { actorsId } = await params;
  let data = null;
  let age;
  let validItems = null;
  let totalCredits = null;
  try {
    let person = await fetch(`https://api.themoviedb.org/3/person/${actorsId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
    data = await person.json();
    let year = new Date().getFullYear();

    if (data.deathday) {
      age = data.deathday.slice(0, 4) - data.birthday.slice(0, 4);
    } else {
      age = data.birthday ? year - data.birthday.slice(0, 4) : "";
    }

    let credits = await fetch(`https://api.themoviedb.org/3/person/${actorsId}/combined_credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&include_adult=false`);
    totalCredits = await credits.json();
    // let all = list.cast.concat(list.crew);
    // validItems = all.filter((item) => item.poster_path !== null && item.poster_path !== undefined && item.adult == false);
  } catch (err) {
    throw new Error("خطا در دریافت اطلاعات!" + err);
  }

  return (
    <main class=" px-3 md:px-6 lg:px-8 xl:px-12 my-8 md:my-7">
      <section class="flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
        <div class="sm:sticky top-5 lg:static w-[80%] xs:w-full sm:max-w-65 lg:max-w-75 mx-auto h-auto sm:mt-3 flex-row flex-wrap sm:flex-nowrap sm:flex-col bg-white dark:bg-gray-800  flex  gap-2 rounded-3xl overflow-hidden">
          <ActorProfile profile={data.profile_path} name={data.name} />
          <div class="grow sm:grow-0 flex  xs:justify-between  flex-col gap-2 px-5 pt-2 items-center">
            <h1 dir="ltr" class=" text-black dark:text-white font-bold text-2xl font-sans text-center">
              {data.name}
            </h1>
            <div class="w-full flex  justify-between items-center py-1.5 border-b border-gray-500/30">
              <span class="text-black dark:text-white text-xs">سن:</span>
              <span class="text-gray-500 dark:text-gray-300 text-xs font-light ">{age || "----"} سال</span>
            </div>
            <div class="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span class="text-black dark:text-white text-xs">تاریخ تولد :</span>
              <span class="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.birthday ? data.birthday : "----"}</span>
            </div>
            {data.deathday && (
              <div class=" w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
                <span class="text-black dark:text-white text-xs">تاریخ فوت :</span>
                <span class="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.deathday}</span>
              </div>
            )}
            <div class="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span class="text-black dark:text-white text-xs">جنسیت :</span>
              <span class="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.gender == 1 ? "زن" : "مرد"}</span>
            </div>
            <div class="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span class="text-black dark:text-white text-xs">محل تولد :</span>
              <span class="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.place_of_birth ? data.place_of_birth : "----"}</span>
            </div>
            <div class="w-full flex justify-between items-center py-1.5 border-b border-gray-500/30">
              <span class="text-black dark:text-white text-xs">حرفه :</span>
              <span class="text-gray-500 dark:text-gray-300 text-xs font-light ">{data.known_for_department ? data.known_for_department : "-----"}</span>
            </div>
            {data.imdb_id && (
              <a href={`https://www.imdb.com/name/${data.imdb_id}`} target="_blank" class=" bg-orange-400 text-white text-xs rounded-3xl p-2 mt-2 mb-4">
                مشاهده پروفایل در IMDb
              </a>
            )}
          </div>
        </div>

        {totalCredits && <ActorCredits credits={totalCredits} />}
      </section>
    </main>
  );
}
