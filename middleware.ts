import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

export async function middleware(request: Request) {
  const cookie = (await cookies()).get("session")?.value;
  const session = cookie ? await decrypt(cookie).catch(() => null) : null;

  // Jika tidak ada session dan mencoba akses /admin, redirect ke /login
  if (request.url.includes("/admin") && !session?.userId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};