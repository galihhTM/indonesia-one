import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

export async function middleware(request: Request) {
  const cookie = (await cookies()).get("session")?.value;
  
  // PASTIKAN BARIS INI PERSIS SEPERTI INI (ada 'as string')
  const session = cookie ? await decrypt(cookie as string).catch(() => null) : null;

  if (request.url.includes("/admin") && !session?.userId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};