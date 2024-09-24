import { createClient } from "@vercel/postgres";

export async function connect() {
    const client = createClient();
    await client.connect();

    try {
        if(client)
            console.log('Connected to DB...')
        return client;

    }catch (error) {
        console.error("Error connecting with DB: ", error);
    }
}

export const data = [
    {
        "date": "12/24/2024",
        "title": "It all started when I could not pay for therapy, and my therapist said all of my haters were right",
        "entry": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "date": "01/02/2024",
        "title": "Whatever does not kill you, maims you deeply beyond anything",
        "entry": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "date": "01/02/2024",
        "title": "My back hurts...",
        "entry": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
];