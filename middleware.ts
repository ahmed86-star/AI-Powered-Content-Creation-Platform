import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Simple pass-through middleware with no complex logic
  return NextResponse.next();
}

// Limit middleware to only run on specific paths
export const config = {
  matcher: [
    // Only run on dashboard routes
    "/dashboard/:path*",
  ],
};
