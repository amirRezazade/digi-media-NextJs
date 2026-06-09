import { NextResponse } from "next/server";
export const runtime = "nodejs";
export function middleware(request) {
  const user = request.cookies.get("user");
  const isLoginPage = request.nextUrl.pathname === "/auth";

  // لاگین بود و رفت صفحه لاگین → بفرستش پروفایل
  if (user && isLoginPage) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // لاگین نبود و رفت پروفایل → بفرستش لاگین
  if (!user && !isLoginPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/auth"],
};
