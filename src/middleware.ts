import { NextResponse, type NextRequest } from "next/server";

const locales = ["pl", "en"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle /pl/* and /pl routes - pass through
  if (pathname.startsWith("/pl/") || pathname === "/pl") {
    return NextResponse.next();
  }

  // Handle /en/* and /en routes - pass through
  if (pathname.startsWith("/en/") || pathname === "/en") {
    return NextResponse.next();
  }

  // For all other paths (root and non-locale paths), rewrite to /en internally
  // This keeps the user-facing URL clean while routing to the English version
  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and files with extensions
    "/((?!_next|api|.*\\..*).*)",
  ],
};
