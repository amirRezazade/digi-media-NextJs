import Image from "next/image";
import Header from "./Header";
import Filters from "@/components/filters/Filters";
import ActionMovie from "./ActionMovie";
import PopularSeries from "./PopularSeries";
import IranianMovies from "./IranianMovies";

export default function Home() {
  return (
    <>
      <Header />
      <Filters />
      <main className="relative bg-[url(/images/pattren.svg)] bg-fixed bg-cover py-7 px-3 md:px-6 lg:px-8 xl:px-12 xl:py-8">
        <div className="">
          <ActionMovie />
          <PopularSeries />
          <IranianMovies />
        </div>
      </main>
    </>
  );
}
