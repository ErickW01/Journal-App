const {db} = require('@vercel/postgres');

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

async function seed(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS entries (
        id UUID DEFAULT uuid_generate_v1mc() PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        entry TEXT NOT NULL,
        date TEXT NOT NULL
        );
        `;
        console.log('Created table...');

        const random_uuid = uuidv4();


        const insertEntries = await client.sql`
                INSERT INTO entries (id, title, entry, date)
                VALUES (${random_uuid}, ${"Sample Title"}, ${"This is a base entry"}, ${"01/01/2024"})
                ON CONFLICT (id) DO NOTHING;
                `;

        return {
            createTable,
            entries: insertEntries
        };
    } catch(error) {
        console.error('Issue with DB');
        throw error;
    }
}

async function main() {
    const client = await db.connect();
    await seed(client);
    await client.end();
}

main().catch((error) => {
    console.error('Error occurred while attempting to seed DB: ', error);
})