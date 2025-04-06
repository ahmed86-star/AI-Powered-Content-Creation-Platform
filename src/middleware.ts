import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    // Create a simple response that just passes through
    const res = NextResponse.next();
    return res;
  } catch (error) {
    console.error("Middleware error:", error);
    // Return a basic response to prevent 500 errors
    return NextResponse.next();
  }
}

// Limit middleware to only run on specific paths
export const config = {
  matcher: [
    // Only run on dashboard routes
    "/dashboard/:path*",
  ],
};
