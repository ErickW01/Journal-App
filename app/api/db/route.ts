import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";
// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  console.log(request)
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  const body = await request.json();
  

  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}