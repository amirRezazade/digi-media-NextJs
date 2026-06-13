import Link from "next/link";
import MainData from "./MainData";
export const metadata = {
  title: "digi-media | سریال ها",
  description: "لیست سریال های روز دنیا",
};
export default async function Series({ searchParams }) {
  const { genre, sortby } = await searchParams;

  let data = null;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&include_adult=false
&vote_count.gte=100
&vote_average.gte=1
&popularity.gte=5
${genre ? `&with_genres=${genre}` : ""}&sort_by=${sortby || "popularity.desc"}&page=1`,
      {
        next: { revalidate: 604800 },
      }
    );
    data = await res.json();
  } catch (err) {
    throw new Error("خطا در دریافت اطلاعات!");
  }

  return (
    <section className="relative min-h-screen text-gray-200 bg-cover bg-fixed bg-[url(/images/default-bg.jpg)]">
      <div className="absolute w-full h-full top-0 left-0 bg-black/30 "></div>
      <main className="py-7 px-3 md:px-6 lg:px-8 xl:px-12 xl:py-8 relative z-1 2xl:max-w-370 mx-auto">
        <div className="flex items-center gap-1 text-[11px] text-gray-300">
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
          <span className=" ">سریال ها</span>
        </div>
        {data && <MainData data={data} />}
      </main>
    </section>
  );
}
