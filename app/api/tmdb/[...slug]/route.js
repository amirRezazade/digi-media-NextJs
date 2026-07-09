// app/api/tmdb/[...slug]/route.js
// یه پروکسی عمومی و امن برای TMDB.
// کلید API فقط اینجا (سمت سرور) خونده می‌شه و هرگز به کلاینت نمی‌ره.
import { NextResponse } from "next/server";

// فقط این پیشوندهای TMDB اجازه داده می‌شن → جلوگیری از "open proxy"
const ALLOWED_PREFIXES = ["search/", "discover/", "person/", "movie/", "tv/", "trending/"];

export async function GET(request, { params }) {
  const { slug } = await params;
  const path = slug.join("/"); // مثلاً "search/movie" یا "movie/123/videos"

  const allowed = ALLOWED_PREFIXES.some((p) => path.startsWith(p));
  if (!allowed) {
    return NextResponse.json({ status_message: "Endpoint not allowed" }, { status: 403 });
  }

  // تمام پارامترهایی که کلاینت فرستاده رو نگه می‌داریم،
  // فقط کلید رو اینجا تزریق می‌کنیم (مقدار سرور همیشه اولویته).
  const { searchParams } = new URL(request.url);
  searchParams.set("api_key", process.env.TMDB_API_KEY);

  const tmdbUrl = `https://api.themoviedb.org/3/${path}?${searchParams.toString()}`;

  // کش ۱ ساعته → کمتر دست به TMDB می‌زنیم و سریع‌تریم
  const res = await fetch(tmdbUrl, { next: { revalidate: 3600 } });
  const data = await res.json();

  return NextResponse.json(data);
}
