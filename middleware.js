import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const protectedRoutes = ["/cart", "/checkout", "/wishlist", "/profile"];

  // If user tries to visit a protected route without a token → redirect to login
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/checkout", "/wishlist", "/profile"],
};
