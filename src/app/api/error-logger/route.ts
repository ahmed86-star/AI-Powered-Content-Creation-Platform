import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.error("Client-side error:", body.error);

    return NextResponse.json({ status: "logged" });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to log error" },
      { status: 500 },
    );
  }
}
