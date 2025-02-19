import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth";
import { getSession } from "./actions/auth-action";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except:
    // - API routes (/api/)
    // - Next.js internals (_next/)
    // - Next.js image optimization (_next/image)
    // - Static files with common extensions
    // - Root path (/)
    // - Login page (/login)
    "/((?!api|_next|login|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest))(?!$).*)",
  ],
};
