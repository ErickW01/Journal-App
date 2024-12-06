'use client'
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
    const params = useParams();
    const {id} = params;
    const [entry, setEntry] = useState<IEntry>();
    useEffect(() => {
        const handleData = async() => {
            const response = await fetch('/api/db', {
                method: 'post',
                body: JSON.stringify({id: id})
            });
            const rows = await response.json();
            setEntry(rows.res[0]);
        };
        if(!id)
            return;

        handleData()
    }, [id])

    return(
        <section className="bg-white dark:bg-gray-900">
            {!entry &&             
            <p className="mb-8 lg:mb-16 font-light text-center
             text-gray-500 dark:text-gray-400 sm:text-xl">
                Retrieving Your Data
            </p>
            }
            {entry && 
            <div>
                <h1 className="text-gray-500 dark:text-gray-400">
                {entry.title}
                </h1>
                <h2 className="text-gray-500 dark:text-gray-400">
                    {entry.date}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    {entry.entry}
                </p>
            </div>}
        </section>
    )
};

export default Page;