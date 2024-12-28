import Link from 'next/link';
import React from 'react';

export default function Entry(item: IEntry) {

    const deleteEntry = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await fetch('/api/db', {
            method: 'delete',
            body: JSON.stringify({id: item.id})
        }).then((response) =>  {
            return response.json();
        }).then((data) => {
            if(data.message === 'Success')
                window.location.reload();
        })
    };

    return(
        <Link href={{pathname: `/personal-journal/entries/${item.id}`, query: {id: item.id}}}
        className='flex flex-col border-white border-2 rounded-md min-h-20 m-4 relative'>
            <div className='flex flex-row justify-between'>
                <div>
                    <h2 className='pl-2'>{item.title}</h2>
                <div className='m-2'>
                    <div className='pl-2'>{item.entry}</div>
                </div>
                </div>
                <div>
                <div className='pr-2'>{item.date}</div>
                <div className='m-2 flex justify-end'>
                <button className='text-white bg-blue-700 hover:bg-blue-800
                    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                    focus:outline-none dark:focus:ring-blue-800 
                    relative z-10'
                    onClick={deleteEntry}>
                    Delete
                </button>
            </div>
                </div>
            </div>
        </Link>
    )
}