import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useAppDispatch } from "./lib/hooks";
import { updateIsAuthenticated } from "./lib/userSlice";
import { verifyAuth } from "./services/verifyAuth";

const protectedRoutes = ["/expenses", "/dashboard", "/", "/investments"];

export default async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const token = req.cookies.get("authorization")?.value ?? "";
  if (token === "" && pathname === "/") {
    return NextResponse.rewrite(`${origin}/login`);
  }

  if (token === "" && protectedRoutes.includes(pathname)) {
    return NextResponse.rewrite(`${origin}/login`);
  }

  let isAuthenticated = false;

  const status = await verifyAuth(token);
  isAuthenticated = status.status === 200 ? true : false;
  if (isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    // const absoluteURL = new URL("/", req.nextUrl.origin);
    // return NextResponse.redirect(absoluteURL.toString());
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|$).*)",
  ],
};
