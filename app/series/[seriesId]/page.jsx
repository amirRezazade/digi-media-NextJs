// "use client";
import { genres } from "@/components/utils";
import Image from "next/image";
import Link from "next/link";
import RecommendationsSwiper from "../../../components/Recommendations/RecommendationsSwiper";
import Trailer from "@/components/trailer/Trailer";
import Filters from "@/components/filters/Filters";
import HeaderPoster from "./HeaderPoster";
import Credits from "./Credits";

export default async function SeriesId({ params }) {
  const { seriesId } = await params;
  let data = null;
  let recommendations = null;
  try {
    let res = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fa&append_to_response=credits,videos`, {
      next: { revalidate: 604800 },
    });
    data = await res.json();

    //------------ get recommendationsResponse -----------
    let recommendationsRes = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`, {
      next: { revalidate: 604800 },
    });
    let recommendationsResponse = await recommendationsRes.json();
    let list = recommendationsResponse.results;
    const randomFive = list.filter((item) => item.poster_path && item.backdrop_path).slice(0, 6);
    recommendations = randomFive;
    if (!res.ok || !recommendationsRes.ok) throw new Error("خطا در دریافت اطلاعات!");
  } catch (err) {
    throw new Error(err);
  }

  return (
    <>
      <header className="">
        <div className=" bg-no-repeat bg-cover bg-center xl:bg-size-[80%_100%] xl:bg-top-left" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path}) , url('/images/default-bg.jpg')` }}>
          <div className="px-4 py-6 md:py-10 lg:px-13 bg-linear-to-r from-gray-950/10 to-gray-950 to-80%">
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
              <Link href="/series" className="transition-all duration-300 cursor-pointer hover:text-orange-400">
                سریال ها
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
            <div className="flex flex-wrap xs:flex-nowrap gap-6 sm:gap-6 items-start  justify-between my-5 xl:my-8 lg:gap-8">
              <div className="flex flex-col items-center grow  gap-9 max-w-[80%] mx-auto xs:max-w-[30%] md:max-w-[25%] xl:max-w-67.5">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400 ">10/</span>
                  <span className=" text-white font-extrabold lg:text-xl xl:text-3xl ">{data.vote_average?.toFixed(1)}</span>
                  <span className="text-black tracking-tighter font-extrabold text-xs  px-1.5 py-0.5 rounded-md bg-amber-300  mr-2 relative  before:content[''] before:absolute before:w-1.5 before:h-1.5 before:top-1/2 before:left-1/1 before:bg-amber-300 before:z-0 before:rotate-45 before:-translate-1/2 ">IMDB</span>
                </div>
                <div className="relative group z-1 grow  min-w-full h-auto">
                  <Image width={250} height={400} className=" object-cover w-full -z-1 rounded-lg contrast-85 absolute scale-x-80 -translate-y-4 group-hover:translate-y-0 transition-transform duration-300" src={`https://image.tmdb.org/t/p/original${data.poster_path}_low`} alt={data.original_name} />
                  <Image width={260} height={400} className=" object-cover w-full -z-1 rounded-lg contrast-90 absolute scale-x-90 -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 " src={`https://image.tmdb.org/t/p/original${data.poster_path}_low`} alt={data.original_name} />
                  <HeaderPoster poster={data.poster_path} name={data.original_name} />
                  <button className="absolute top-1/1 left-1/2 -translate-1/2 flex justify-center items-center border border-orange-400 hover:bg-transparent transition-all duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-orange-400">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#ffffff"></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center w-full justify-center  gap-2 sm:hidden">
                  <span className="bg-gray-500/70 text-xs rounded-lg px-1.5 py-2 flex items-end gap-1 text-orange-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-orange-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>{" "}
                    <span>100%</span>
                  </span>
                  <span className="bg-gray-500/70 w-1/2 text-xs rounded-lg overflow-hidden divide-x divide-gray-300/50 flex items-end gap-1  ">
                    <button className=" py-2 w-1/2 group  flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300 transition-colors hover:text-orange-400">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    </button>
                    <button className="py-2 w-1/2 group flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rotate-180 size-5 text-gray-300 transition-colors hover:text-orange-400">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
              <div className="flex flex-col  gap-6 sm:gap-4 grow w-7/10 sm:mt-8  md:gap-2 ">
                <div className="flex items-start justify-between  ">
                  <p className="text-white relative font-extrabold px-2 before:content[''] before:absolute before:w-1.5 before:h-4 before:left-1/1 before:top-1/2 before:-translate-y-1/2 before:bg-orange-400 before:rounded-full  lg:text-xl xl:text-2xl">{data.name}</p>
                  <div className="hidden sm:flex flex-col items-center ">
                    <div className="flex items-center w-full text-xs divide-x divide-gray-500 xl:text-sm">
                      <span className="flex items-center px-2 group gap-1 cursor-pointer text-white  hover:text-orange-400 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300 transition-colors group-hover:text-orange-400">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                          />
                        </svg>
                        پسندیدن
                      </span>
                      <span className="flex items-start px-2 group gap-1 cursor-pointer text-white  hover:text-orange-400 transition-all duration-300">
                        نپسندیدن
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rotate-180 size-5 text-gray-300 transition-colors duration-300 group-hover:text-orange-400 ">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="text-orange-300 text-xs mt-1 xl:text-sm">100% (1رای)</span>
                  </div>
                </div>
                <div className="flex flex-col  justify-between gap-4 grow sm:gap-8 md:flex-row  ">
                  <div className="flex flex-col gap-6 sm:gap-5 md:w-6/10 xl:w-6/10 md:gap-8 md:py-5 ">
                    <div id="genres" className="flex flex-wrap items-center gap-2 md:gap-3.5 text-gray-300 text-[11px] lg:text-sm">
                      {data.genres?.map((gen) => (
                        <Link key={gen.id} href={`/search?${gen.id}`} className="px-2.5 py-0.5 rounded-full border border-gray-400 hover:border-orange-400 hover:text-orange-400 transition-all duration-300">
                          {genres[gen.id]}
                        </Link>
                      ))}
                    </div>
                    {data.tagline && <p className="text-sm text-white font-extrabold leading-5 lg:text-base xl:text-base">{data.tagline}</p>}
                    {data.overview && <p className=" text-xs text-gray-300 leading-5 lg:text-sm xl:text-base lg:leading-8 ">{data.overview}</p>}
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-5 h-5 flex items-center justify-center font-bold bg-black border-2 -rotate-30 border-amber-300 rounded-full text-white">m</span>
                        <span className="hidden sm:inline">محبوبیت</span>
                        <span>{data.popularity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <svg width="22px" height="22px" viewBox="0 0 128 128" aria-hidden="true" role="img" className="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g fill="#ffc107">
                              {" "}
                              <path d="M36.46 36.81l-14.14-9.06a2.213 2.213 0 0 1-.41-3.45l5.31-5.31c1.02-1.02 2.74-.8 3.47.45l8.84 14.37c1.16 1.98-1.11 4.2-3.07 3z"> </path> <path d="M24.1 80.39l-16.42.33a2.21 2.21 0 0 0-2.09 2.77l1.91 7.26c.37 1.4 1.96 2.07 3.22 1.37l14.51-7.59c2-1.13 1.17-4.19-1.13-4.14z"> </path> <path d="M62.24 108.28l-3.6 15.99c-.33 1.39.72 2.73 2.15 2.73h7.51c1.45 0 2.5-1.37 2.14-2.77l-3.91-15.99c-.58-2.23-3.75-2.2-4.29.04z"> </path>{" "}
                              <path d="M91.54 36.81l14.14-9.06c1.22-.75 1.42-2.44.41-3.45l-5.31-5.31a2.212 2.212 0 0 0-3.47.45l-8.84 14.37c-1.16 1.98 1.11 4.2 3.07 3z"> </path> <path d="M103.9 80.39l16.42.33a2.21 2.21 0 0 1 2.09 2.77l-1.91 7.26a2.217 2.217 0 0 1-3.22 1.37l-14.51-7.59c-2-1.13-1.17-4.19 1.13-4.14z"> </path>{" "}
                            </g>{" "}
                            <path d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z" fill="#fdd835">
                              {" "}
                            </path>{" "}
                            <path d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z" fill="#ffff8d">
                              {" "}
                            </path>{" "}
                            <path d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z" fill="#f4b400">
                              {" "}
                            </path>{" "}
                          </g>
                        </svg>
                        <span className="hidden sm:inline">رای کاربران IMDb</span>
                        <span>{data.vote_count}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white sm:w-1/2 md:w-auto ">
                      <Trailer id={seriesId} />
                      <button className=" bg-gray-800 rounded-xl py-2 lg:py-3 md:px-5  grow md:grow-0 flex items-center justify-center gap-1">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.7258 7.34056C12.1397 7.32632 12.4638 6.97919 12.4495 6.56522C12.4353 6.15125 12.0882 5.8272 11.6742 5.84144L11.7258 7.34056ZM7.15843 11.562L6.40879 11.585C6.40906 11.5938 6.40948 11.6026 6.41006 11.6114L7.15843 11.562ZM5.87826 14.979L6.36787 15.5471C6.38128 15.5356 6.39428 15.5236 6.40684 15.5111L5.87826 14.979ZM5.43951 15.342L5.88007 15.949C5.89245 15.94 5.90455 15.9306 5.91636 15.9209L5.43951 15.342ZM9.74998 17.75C10.1642 17.75 10.5 17.4142 10.5 17C10.5 16.5858 10.1642 16.25 9.74998 16.25V17.75ZM11.7258 5.84144C11.3118 5.8272 10.9647 6.15125 10.9504 6.56522C10.9362 6.97919 11.2602 7.32632 11.6742 7.34056L11.7258 5.84144ZM16.2415 11.562L16.9899 11.6113C16.9905 11.6025 16.9909 11.5938 16.9912 11.585L16.2415 11.562ZM17.5217 14.978L16.9931 15.5101C17.0057 15.5225 17.0187 15.5346 17.0321 15.5461L17.5217 14.978ZM17.9605 15.341L17.4836 15.9199C17.4952 15.9294 17.507 15.9386 17.5191 15.9474L17.9605 15.341ZM13.65 16.25C13.2358 16.25 12.9 16.5858 12.9 17C12.9 17.4142 13.2358 17.75 13.65 17.75V16.25ZM10.95 6.591C10.95 7.00521 11.2858 7.341 11.7 7.341C12.1142 7.341 12.45 7.00521 12.45 6.591H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM9.74998 16.25C9.33577 16.25 8.99998 16.5858 8.99998 17C8.99998 17.4142 9.33577 17.75 9.74998 17.75V16.25ZM13.65 17.75C14.0642 17.75 14.4 17.4142 14.4 17C14.4 16.5858 14.0642 16.25 13.65 16.25V17.75ZM10.5 17C10.5 16.5858 10.1642 16.25 9.74998 16.25C9.33577 16.25 8.99998 16.5858 8.99998 17H10.5ZM14.4 17C14.4 16.5858 14.0642 16.25 13.65 16.25C13.2358 16.25 12.9 16.5858 12.9 17H14.4ZM11.6742 5.84144C8.65236 5.94538 6.31509 8.53201 6.40879 11.585L7.90808 11.539C7.83863 9.27613 9.56498 7.41488 11.7258 7.34056L11.6742 5.84144ZM6.41006 11.6114C6.48029 12.6748 6.08967 13.7118 5.34968 14.4469L6.40684 15.5111C7.45921 14.4656 8.00521 13.0026 7.9068 11.5126L6.41006 11.6114ZM5.38865 14.4109C5.23196 14.5459 5.10026 14.6498 4.96265 14.7631L5.91636 15.9209C6.0264 15.8302 6.195 15.6961 6.36787 15.5471L5.38865 14.4109ZM4.99895 14.735C4.77969 14.8942 4.58045 15.1216 4.43193 15.3617C4.28525 15.5987 4.14491 15.9178 4.12693 16.2708C4.10726 16.6569 4.24026 17.0863 4.63537 17.3884C4.98885 17.6588 5.45464 17.75 5.94748 17.75V16.25C5.78415 16.25 5.67611 16.234 5.60983 16.2171C5.54411 16.2004 5.53242 16.1861 5.54658 16.1969C5.56492 16.211 5.59211 16.2408 5.61004 16.2837C5.62632 16.3228 5.62492 16.3484 5.62499 16.3472C5.62513 16.3443 5.62712 16.3233 5.6414 16.2839C5.65535 16.2454 5.67733 16.1997 5.70749 16.151C5.73748 16.1025 5.77159 16.0574 5.80538 16.0198C5.84013 15.981 5.86714 15.9583 5.88007 15.949L4.99895 14.735ZM5.94748 17.75H9.74998V16.25H5.94748V17.75ZM11.6742 7.34056C13.835 7.41488 15.5613 9.27613 15.4919 11.539L16.9912 11.585C17.0849 8.53201 14.7476 5.94538 11.7258 5.84144L11.6742 7.34056ZM15.4932 11.5127C15.3951 13.0024 15.9411 14.4649 16.9931 15.5101L18.0503 14.4459C17.3105 13.711 16.9199 12.6744 16.9899 11.6113L15.4932 11.5127ZM17.0321 15.5461C17.205 15.6951 17.3736 15.8292 17.4836 15.9199L18.4373 14.7621C18.2997 14.6488 18.168 14.5449 18.0113 14.4099L17.0321 15.5461ZM17.5191 15.9474C17.5325 15.9571 17.5599 15.9802 17.5949 16.0193C17.629 16.0573 17.6634 16.1026 17.6937 16.1514C17.7241 16.2004 17.7463 16.2463 17.7604 16.285C17.7748 16.3246 17.7769 16.3457 17.777 16.3485C17.7771 16.3497 17.7756 16.3238 17.792 16.2844C17.81 16.241 17.8375 16.211 17.856 16.1968C17.8702 16.1859 17.8585 16.2002 17.7925 16.217C17.7259 16.234 17.6174 16.25 17.4535 16.25V17.75C17.9468 17.75 18.4132 17.6589 18.7669 17.3885C19.1628 17.0859 19.2954 16.6557 19.2749 16.2693C19.2562 15.9161 19.1151 15.5972 18.9682 15.3604C18.8194 15.1206 18.6202 14.8936 18.4018 14.7346L17.5191 15.9474ZM17.4535 16.25H13.65V17.75H17.4535V16.25ZM12.45 6.591V5H10.95V6.591H12.45ZM9.74998 17.75H13.65V16.25H9.74998V17.75ZM8.99998 17C8.99998 18.5008 10.191 19.75 11.7 19.75V18.25C11.055 18.25 10.5 17.7084 10.5 17H8.99998ZM11.7 19.75C13.2089 19.75 14.4 18.5008 14.4 17H12.9C12.9 17.7084 12.3449 18.25 11.7 18.25V19.75Z"
                              fill="#ffffff"
                            ></path>{" "}
                          </g>
                        </svg>
                        اعلان سریال
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:flex md:flex-wrap overflow-hidden rounded-lg divide-x md:divide-x-0 bg-gray-900/30 md:justify-between md:py-5 md:bg-transparent divide-black md:grid md:grid-cols-2 md:gap-3  md:w-4/10 xl:w-3/10">
                    <div className="flex flex-col md:flex-row md:flex-wrap py-3 gap-y-1 grow  md:justify-center  items-center md:rounded-xl bg-black/45  ">
                      <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24">
                          <g fill="#ffad49">
                            <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                            <path d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2H4v12h16zM8.5 8a3 3 0 0 1 2.906 2.251a1 1 0 0 1-1.902.61l-.035-.112A1 1 0 0 0 7.5 11v2a1 1 0 0 0 1.935.356l.034-.105a1 1 0 1 1 1.937.498A3 3 0 0 1 5.5 13v-2a3 3 0 0 1 3-3m7 0a3 3 0 0 1 2.906 2.251a1 1 0 0 1-1.902.61l-.035-.112a1.001 1.001 0 0 0-1.962.135L14.5 11v2a1 1 0 0 0 1.935.356l.034-.105a1 1 0 1 1 1.937.498a3 3 0 0 1-5.9-.573L12.5 13v-2a3 3 0 0 1 3-3"></path>
                          </g>
                        </svg>
                        <span className="text-white text-[10px] font-bold lg:font-normal lg:text-sm">زیرنویس:</span>
                      </div>
                      <span className="text-white opacity-75 text-[11px] lg:text-sm">ندارد</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap py-3 gap-y-1 grow  md:justify-center  items-center md:rounded-xl bg-black/45  ">
                      <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
                        <svg width="17px" height="17px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path d="M5 3C5 1.34315 6.34315 0 8 0C9.65685 0 11 1.34315 11 3V7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7V3Z" fill="#ffad49"></path> <path d="M9 13.9291V16H7V13.9291C3.60771 13.4439 1 10.5265 1 7V6H3V7C3 9.76142 5.23858 12 8 12C10.7614 12 13 9.76142 13 7V6H15V7C15 10.5265 12.3923 13.4439 9 13.9291Z" fill="#ffad49"></path>{" "}
                          </g>
                        </svg>
                        <span className="text-white text-[10px] font-bold lg:font-normal lg:text-sm">دوبله:</span>
                      </div>
                      <span className="text-white opacity-75 text-[11px] lg:text-sm">ندارد</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap py-3 gap-y-1 grow  md:justify-center  items-center md:rounded-xl bg-black/45  ">
                      <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
                        <svg width="20px" height="20px" viewBox="0 0 21 21" fill="#000000">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g fill="none" fillRule="evenodd" stroke="#ffad49" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 4)">
                              {" "}
                              <path d="m13.5 12.5v-6c0-1.1045695-.8954305-2-2-2h-9c-1.1045695 0-2 .8954305-2 2v6c0 1.1045695.8954305 2 2 2h9c1.1045695 0 2-.8954305 2-2z"></path> <path d="m15.5 12.5v-6.99481259c0-1.65685425-1.3431458-3-3-3-.0017276 0-.0034553 0-.0051829 0l-8.9948171.01554432"></path> <path d="m17.5 10.5v-5.99308345c0-2.209139-1.790861-4-4-4-.0023035 0-.004607 0-.0069106 0l-7.9930894.01381519"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                        <span className="text-white text-[10px] font-bold lg:font-normal lg:text-sm">تعداد فصل :</span>
                      </div>
                      <span className="text-white opacity-80  ">{data.number_of_seasons}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap py-3 gap-y-1 grow  md:justify-center  items-center md:rounded-xl bg-black/45  ">
                      <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
                        <svg width="20px" height="20px" viewBox="0 0 17 17" version="1.1" fill="#ffad49">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"
                              fill="#ffad49"
                            ></path>{" "}
                          </g>
                        </svg>
                        <span className="text-white text-[10px] font-bold lg:font-normal lg:text-sm">محصول :</span>
                      </div>
                      <span className="text-white opacity-75 text-[11px] lg:text-sm">{data.origin_country}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap py-3 gap-y-1 grow  md:justify-center  items-center md:rounded-xl bg-black/45  ">
                      <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <g fill="none">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                            <path fill="#ffad49" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
                          </g>
                        </svg>

                        <span className="text-white text-[10px] font-bold lg:font-normal lg:text-sm">وضعیت:</span>
                      </div>
                      <span className="text-white opacity-75 text-[11px] lg:text-sm">{data.status === "Ended" ? "پایان یافته" : "در حال پخش"}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap py-3 gap-y-1 grow  md:justify-center  items-center md:rounded-xl bg-black/45  ">
                      <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffad49" strokeWidth="2" strokeLinecap="round"></path> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffad49"></rect> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffad49"></rect> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffad49"></rect>{" "}
                          </g>
                        </svg>
                        <span className="text-white text-[10px] font-bold lg:font-normal lg:text-sm">سال تولید :</span>
                      </div>
                      <span className="text-white opacity-75 text-[11px] lg:text-sm">{`${data.first_air_date?.slice(0, 4) || ""} - ${data.last_air_date?.slice(0, 4) || "نا معلوم"}`}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap py-3 gap-y-1 grow  md:justify-center  items-center md:rounded-xl bg-black/45  ">
                      <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
                        <svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z"
                              fill="#ffad49"
                            ></path>{" "}
                          </g>
                        </svg>
                        <span className="text-white text-[10px] font-bold lg:font-normal lg:text-sm">زبان :</span>
                      </div>
                      <span className="text-white opacity-75 text-[11px] lg:text-sm">{data.original_language}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* start credits section  */}
      <section className="theme px-4 lg:px-13 py-7  -translate-y-5 sm:translate-y-0 sm:rounded-none overflow-hidden rounded-3xl">
        <div className="flex sm:hidden  rounded-xl divide-x bg-white dark:bg-gray-800 overflow-hidden divide-black/50 dark:divide-black ">
          <div className="flex flex-col  py-2 gap-y-1 grow items-center ">
            <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24">
                <g fill="#ffad49">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                  <path d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2H4v12h16zM8.5 8a3 3 0 0 1 2.906 2.251a1 1 0 0 1-1.902.61l-.035-.112A1 1 0 0 0 7.5 11v2a1 1 0 0 0 1.935.356l.034-.105a1 1 0 1 1 1.937.498A3 3 0 0 1 5.5 13v-2a3 3 0 0 1 3-3m7 0a3 3 0 0 1 2.906 2.251a1 1 0 0 1-1.902.61l-.035-.112a1.001 1.001 0 0 0-1.962.135L14.5 11v2a1 1 0 0 0 1.935.356l.034-.105a1 1 0 1 1 1.937.498a3 3 0 0 1-5.9-.573L12.5 13v-2a3 3 0 0 1 3-3"></path>
                </g>
              </svg>
              <span className="text-black dark:text-white text-[10px]">زیرنویس:</span>
            </div>
            <span className="text-black dark:text-white opacity-75 text-[10px]">ندارد</span>
          </div>
          <div className="flex flex-col  py-2 gap-y-1 grow items-center ">
            <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
              <svg width="17px" height="17px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M5 3C5 1.34315 6.34315 0 8 0C9.65685 0 11 1.34315 11 3V7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7V3Z" fill="#ffad49"></path> <path d="M9 13.9291V16H7V13.9291C3.60771 13.4439 1 10.5265 1 7V6H3V7C3 9.76142 5.23858 12 8 12C10.7614 12 13 9.76142 13 7V6H15V7C15 10.5265 12.3923 13.4439 9 13.9291Z" fill="#ffad49"></path>{" "}
                </g>
              </svg>
              <span className="text-black dark:text-white text-[10px]">دوبله:</span>
            </div>
            <span className="text-black dark:text-white opacity-75 text-[10px]">ندارد</span>
          </div>
          <div className="flex flex-col  py-2 gap-y-1 grow items-center ">
            <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
              <svg width="20px" height="20px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g fill="none" fillRule="evenodd" stroke="#ffad49" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 4)">
                    {" "}
                    <path d="m13.5 12.5v-6c0-1.1045695-.8954305-2-2-2h-9c-1.1045695 0-2 .8954305-2 2v6c0 1.1045695.8954305 2 2 2h9c1.1045695 0 2-.8954305 2-2z"></path> <path d="m15.5 12.5v-6.99481259c0-1.65685425-1.3431458-3-3-3-.0017276 0-.0034553 0-.0051829 0l-8.9948171.01554432"></path> <path d="m17.5 10.5v-5.99308345c0-2.209139-1.790861-4-4-4-.0023035 0-.004607 0-.0069106 0l-7.9930894.01381519"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="text-black dark:text-white text-[10px]">تعداد فصل :</span>
            </div>
            <span className="text-black dark:text-white opacity-75 text-[10px]">{data.number_of_seasons}</span>
          </div>
          <div className="flex flex-col  py-2 gap-y-1 grow items-center ">
            <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
              <svg width="20px" height="20px" viewBox="0 0 17 17" version="1.1" fill="#ffad49">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"
                    fill="#ffad49"
                  ></path>{" "}
                </g>
              </svg>
              <span className="text-black dark:text-white text-[10px]">محصول :</span>
            </div>
            <span className="text-black dark:text-white opacity-75 text-[10px]">{data.origin_country}</span>
          </div>
          <div className="flex flex-col  py-2 gap-y-1 grow items-center ">
            <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path fill="#ffad49" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
                </g>
              </svg>

              <span className="text-black dark:text-white text-[10px]">وضعیت:</span>
            </div>
            <span className="text-black dark:text-white opacity-75 text-[10px]">{data.status === "Ended" ? "پایان یافته" : "در حال پخش"}</span>
          </div>
          <div className="flex flex-col  py-2 gap-y-1 grow items-center ">
            <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffad49" strokeWidth="2" strokeLinecap="round"></path> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffad49"></rect> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffad49"></rect> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffad49"></rect>{" "}
                </g>
              </svg>
              <span className="text-black dark:text-white text-[10px]">سال تولید :</span>
            </div>
            <span className="text-black dark:text-white opacity-75 text-[10px]">{`${data.first_air_date?.slice(0, 4) || ""} - ${data.last_air_date?.slice(0, 4) || ""}`}</span>
          </div>
          <div className="flex flex-col  py-2 gap-y-1 grow items-center ">
            <div className="flex flex-col md:flex-row md:w-full md:justify-center gap-1 md:gap-x-2 items-center">
              <svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z"
                    fill="#ffad49"
                  ></path>{" "}
                </g>
              </svg>
              <span className="text-black dark:text-white text-[10px]">زبان :</span>
            </div>
            <span className="text-black dark:text-white opacity-75 text-[10px]">{data.original_language}</span>
          </div>
        </div>

        <Credits cast={data?.credits?.cast} crew={data?.credits?.crew} />
      </section>
      {/* finish credits section  */}

      {recommendations && <RecommendationsSwiper list={recommendations} />}
      <Filters />
    </>
  );
}
