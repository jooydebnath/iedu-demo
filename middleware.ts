import { NextRequest, NextResponse } from "next/server";

const AUTH_PATHS = ["/login", "/signup"];
const PRIVATE_PATHS = ["/checkout", "/profile"];

/**
 * Auth gate: only PRIVATE_PATHS require authentication.
 * Authed users visiting login/signup are redirected home.
 */
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const isAuthPage = AUTH_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  const isPrivate = PRIVATE_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  const isAuthed = req.cookies.get("iedu_auth")?.value === "1";

  // If already authed and visiting login/signup → send home
  if (isAuthed && isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  // Not authed and trying to access a private route → send to /login
  if (!isAuthed && isPrivate) {
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
