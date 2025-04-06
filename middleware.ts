import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Return NextResponse.next() for all requests
  return NextResponse.next();
}

// Only run middleware on specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
