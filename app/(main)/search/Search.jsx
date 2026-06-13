"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ShowList from "./ShowList";
import Form from "./Form";
import Pagination from "@/components/Pagination";
const genreMap = {
  28: 10759, // اکشن
  12: 10759, // ماجراجویی
  53: 10759, // هیجان‌انگیز
  878: 10765, // علمی‌تخیلی
  14: 10765, // فانتزی
  10752: 10768, // جنگی
};
export default function Search(params) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [type, setType] = useState(searchParams.get("type") || "all");
  const [genre, setGenre] = useState(searchParams.get("genre") || "all");
  const [sort, setSort] = useState(searchParams.get("sort") || "popularity.desc");
  const [country, setCountry] = useState(searchParams.get("country") || "all");
  const [fromYear, setFromYear] = useState(searchParams.get("fromYear") || "");
  const [toYear, setToYear] = useState(searchParams.get("toYear") || "");
  const [fromRate, setFromRate] = useState(searchParams.get("fromRate") || "");
  const [toRate, setToRate] = useState(searchParams.get("toRate") || "");
  const [dubbed, setDubbed] = useState(false);
  const [subtitled, setSubtitled] = useState(true);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [totalPage, setTotalPage] = useState(0);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setQuery(searchParams.get("query") || "");
    setType(searchParams.get("type") || "all");
    setGenre(searchParams.get("genre") || "all");
    setSort(searchParams.get("sort") || "popularity.desc");
    setCountry(searchParams.get("country") || "all");
    setFromYear(searchParams.get("fromYear") || "");
    setToYear(searchParams.get("toYear") || "");
    setFromRate(searchParams.get("fromRate") || "");
    setToRate(searchParams.get("toRate") || "");

    setPage(searchParams.get("page") || 1);
    if (query.length) {
      if (type == "series") SearchByQuery("tv");
      if (type == "movie") SearchByQuery("movie");
      if (type == "all") SearchByQuery("multi");
    } else {
      if (type == "series") searchSeries();
      if (type == "movie") searchMovie();
      if (type == "all") searchAll();
    }
  }, [searchParams]);

  function handleSearch() {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setItems([]);
    setIsLoading(true);
    setError(false);
    const params = new URLSearchParams();
    if (query.trim()) params.set("query", query.trim());
    if (type !== "all") params.set("type", type);
    if (genre !== "all") params.set("genre", genre);
    if (sort !== "popularity.desc") params.set("sort", sort);
    if (country !== "all") params.set("country", country);
    if (fromYear) params.set("fromYear", fromYear);
    if (toYear) params.set("toYear", toYear);
    if (fromRate) params.set("fromRate", fromRate);
    if (toRate) params.set("toRate", toRate);
    if (page != 1) params.set("page", page);
    router.push(`/search?${params.toString()}`, { scroll: false });
  }
  async function searchMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${genre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${sort}${fromYear ? `&primary_release_date.gte=${fromYear}-01-01` : ""}${toYear ? `&primary_release_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${
          toRate ? `&vote_average.lte=${toRate}` : ""
        }&vote_count.gte=10&include_adult=false&page=${page}`
      );
      // &vote_count.gte=100&include_adult=false&page=${page}
      let res = await response.json();
      if (!response.ok) setError(true);
      else setError(false);
      setItems(res.results);
      setTotalPage(res.total_pages > 500 ? 500 : res.total_pages);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
  }
  async function searchSeries() {
    try {
      const tvSort = sort == "release_date.desc" ? "first_air_date.desc" : sort;
      const tvGenre = genreMap[genre] ?? genre;

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${tvGenre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${tvSort}${fromYear ? `&first_air_date.gte=${fromYear}-01-01` : ""}${toYear ? `&first_air_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${
          toRate ? `&vote_average.lte=${toRate}` : ""
        }&vote_count.gte=10&include_adult=false&page=${page}`
      );
      // &vote_count.gte=100&include_adult=false&page=${page}
      let res = await response.json();
      if (!response.ok) setError(true);
      else setError(false);
      setItems(res.results);
      setTotalPage(res.total_pages > 500 ? 500 : res.total_pages);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function searchAll() {
    const tvSort = sort == "release_date.desc" ? "first_air_date.desc" : sort;
    const tvGenre = genreMap[genre] ?? genre;
    try {
      const [movieRes, tvRes] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${genre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${sort}${fromYear ? `&primary_release_date.gte=${fromYear}-01-01` : ""}${toYear ? `&primary_release_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${
            toRate ? `&vote_average.lte=${toRate}` : ""
          }&vote_count.gte=10&include_adult=false&page=${page}`
        ),
        // &vote_count.gte=100&include_adult=false&page=${page}
        fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${genre !== "all" ? `&with_genres=${tvGenre}` : ""}${country !== "all" ? `&with_origin_country=${country}` : ""}&sort_by=${tvSort}${fromYear ? `&first_air_date.gte=${fromYear}-01-01` : ""}${toYear ? `&first_air_date.lte=${toYear}-12-31` : ""}${fromRate ? `&vote_average.gte=${fromRate}` : "&vote_average.gte=1"}${
            toRate ? `&vote_average.lte=${toRate}` : ""
          }&vote_count.gte=10&include_adult=false&page=${page}`
        ),
      ]);

      const movies = await movieRes.json();
      const tvs = await tvRes.json();
      if (!movieRes.ok || !tvRes.ok) setError(true);
      else setError(false);
      const all = [...movies?.results, ...tvs?.results];
      const sorted = all.sort((a, b) => {
        switch (sort) {
          case "popularity.desc":
            return b.popularity - a.popularity;

          case "vote_average.desc":
            return b.vote_average - a.vote_average;

          case "release_date.desc":
            return new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date);

          default:
            return b.popularity - a.popularity;
        }
      });
      setTotalPage(movies.total_pages + tvs.total_pages > 500 ? 500 : movies.total_pages + tvs.total_pages);
      setItems(sorted);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
  }
  async function SearchByQuery(type) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&page=${page}&include_adult=false`);
      let res = await response.json();
      if (!response.ok) setError(true);
      else setError(false);
      setItems(res.results);
      setTotalPage(res.total_pages > 500 ? 500 : res.total_pages);
    } catch (err) {
      setError(true);
      throw new Error("خطا در دریافت داده", err);
    } finally {
      setIsLoading(false);
    }
  }
  function resetPage() {
    setPage(1);
    handleSearch();
  }
  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <>
      <Form query={query} onQuery={setQuery} resetPage={resetPage} type={type} onType={setType} genre={genre} onGenre={setGenre} country={country} onCountry={setCountry} sort={sort} onSort={setSort} fromYear={fromYear} onFromYear={setFromYear} toYear={toYear} onToYear={setToYear} fromRate={fromRate} onFromRate={setFromRate} toRate={toRate} onToRate={setToRate} dubbed={dubbed} onDubbed={setDubbed} subtitled={subtitled} onSubtitled={setSubtitled} />
      <ShowList type={type} isLoading={isLoading} scrollRef={scrollRef} query={query} error={error} items={items} handleSearch={handleSearch} />
      {totalPage > 1 && <Pagination page={page} totalPage={totalPage} onPage={setPage} />}
    </>
  );
}
