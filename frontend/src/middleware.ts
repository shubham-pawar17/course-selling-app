import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/lib/auth";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboardRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const verified = verifyToken(token);

    if (!verified) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};