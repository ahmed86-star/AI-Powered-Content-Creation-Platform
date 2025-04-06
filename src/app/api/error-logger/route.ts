import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const errorType = body.type || "client-side";

    // Log different types of errors with more context
    if (errorType === "server_component") {
      console.error("Server Component error:", {
        message: body.error,
        digest: body.digest,
        url: body.url,
        timestamp: body.timestamp,
      });
    } else {
      console.error(`${errorType} error:`, {
        message: body.error,
        stack: body.stack,
        url: body.url,
        timestamp: body.timestamp,
      });
    }

    return NextResponse.json({ status: "logged" });
  } catch (error) {
    console.error("Error logger failed:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to log error" },
      { status: 500 },
    );
  }
}
