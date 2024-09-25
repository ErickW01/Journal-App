import { createClient } from "@vercel/postgres";
import {sql} from '@vercel/postgres';

export async function connect() {
    const client = createClient();
    await client.connect();

    try {
        if(client)
            console.log('Connected to DB...')
        return client;

    } catch (error) {
        console.error("Error connecting with DB: ", error);
    }
}

export async function getEntries () {
    try {
        const entries = await sql`SELECT * FROM entries`;
        return entries.rows;
    } catch(error) {
        console.error('Error within getEntries: ', error);
    }
}