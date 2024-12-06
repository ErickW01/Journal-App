import { NextRequest, NextResponse } from "next/server";
import { db } from "@vercel/postgres";
import { AxiosRequestConfig, AxiosResponse } from "axios";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, 
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

const dbConnect = async() => {
  try {
    const client = db.connect();
    console.log('Connected to DB...')
    return client;
  } catch (err) {
    console.error('Issue connecting w/ DB: ', err)
  } 
};

// To handle a GET request to /api
export async function GET() {

  try {
    const client = await dbConnect();
    const rows = await client!.sql`SELECT * FROM entries`;
    return NextResponse.json({rows}, { status: 200 });
  }catch (err) {
    console.error('Error in GET: ', err);
    return NextResponse.json({ message: "Hello World" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const client = await dbConnect();

    let rows;
    if(body.id) {
       rows = await client!.sql`
        SELECT * FROM entries WHERE ${body.id} IN (id)
      `;
      const res = rows.rows;
      return NextResponse.json({res}, {status: 200})
    } else {
      const today = new Date().getMonth() + '/' + (new Date().getDay() + 1) + '/' + new Date().getFullYear();
      await client!.sql`
      INSERT INTO entries (id, title, entry, date)
      VALUES (${uuidv4()}, ${body.title}, ${body.msg}, ${today})
      ON CONFLICT (id) DO NOTHING;
      `;
      return NextResponse.json({}, { status: 200 });

    }
  } catch(err) {
    console.error('Error in POST: ', err);
  }
}