import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, 
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  console.log(request)
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: { json: () => any; }) {
  // Do whatever you want
  const body = await request.json();

  
  try {
    const client = await db.connect();
    const today = new Date().getMonth() + '/' + (new Date().getDay() + 1) + '/' + new Date().getFullYear();

    await client.sql`
    INSERT INTO entries (id, title, entry, date)
    VALUES (${uuidv4()}, ${body.title}, ${body.msg}, ${today})
    ON CONFLICT (id) DO NOTHING;
    `;

  } catch(err) {
    console.error('Error in POST: ', err);
  }

  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}