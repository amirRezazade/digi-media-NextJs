import Header from "./Header";
import Filters from "@/components/filters/Filters";
import ActionMovie from "./ActionMovie";
import PopularSeries from "./PopularSeries";
import IranianMovies from "./IranianMovies";

export default async function Home() {
  let headerItems = null;
  let actionItems = null;
  let popularItems = null;
  let iranianItems = null;
  try {
    const header = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`, {
      next: { revalidate: 604800 },
    });
    const headerRes = await header.json();
    headerItems = headerRes.results.slice(0, 15);

    const actions = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=28&without_genres=16,10751&vote_count.gte=2000`, {
      next: { revalidate: 604800 },
    });
    const actionsRes = await actions.json();
    actionItems = actionsRes.results;

    const popular = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=10759&without_genres=16,10751&sort_by=popularity.desc&vote_count.gte=1000`, {
      next: { revalidate: 604800 },
    });
    const popularRes = await popular.json();
    popularItems = popularRes.results;

    const iranian = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_original_language=fa&with_production_countries=IR&sort_by=first_air_date.desc&vote_count.gte=500`, {
      next: { revalidate: 604800 },
    });
    const iranianRes = await iranian.json();
    iranianItems = iranianRes.results;

    if (!header.ok || !actions.ok || !popular.ok || !iranian.ok) throw new Error("خطا در دریافت داده ها!");
  } catch (err) {
    throw new Error(err);
  }

  return (
    <>
      <Header list={headerItems} />
      <Filters />
      <main className="relative bg-[url(/images/pattren.svg)] bg-fixed bg-cover py-7 px-3 md:px-6 lg:px-8 xl:px-12 xl:py-8">
        <div className="">
          <ActionMovie list={actionItems} />
          <PopularSeries list={popularItems} />
          <IranianMovies list={iranianItems} />
        </div>
      </main>
    </>
  );
}
