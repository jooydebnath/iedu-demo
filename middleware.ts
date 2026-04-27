import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/signup"];

/**
 * Auth gate: any visitor without `iedu_auth` cookie is redirected to /login
 * except when already on a public auth page.
 */
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const isPublic = PUBLIC_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  const isAuthed = req.cookies.get("iedu_auth")?.value === "1";

  // If already authed and visiting login/signup → send home
  if (isAuthed && isPublic) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  // Not authed and trying to access a private route → send to /login
  if (!isAuthed && !isPublic) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname + search);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Match all routes except Next assets, the API, and static files
export const config = {
  matcher: ["/((?!_next/|api/|favicon\\.ico|ieducationbd-logo\\.png|.*\\..*).*)"],
};
