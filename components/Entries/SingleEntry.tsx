import Link from 'next/link';
import React from 'react';

export default function Entry(item: IEntry) {
    return(
        <Link href={{pathname: `/personal-journal/entries/${item.id}`, query: {id: item.id}}}
        className='flex flex-col border-white border-2 rounded-md min-h-20 m-4'>
            <div className='flex flex-row justify-between'>
                <h2 className='pl-2'>{item.title}</h2>
                <div className='pr-2'>{item.date}</div>
            </div>
            <div className='m-2'>
                <div className='pl-2'>{item.entry}</div>
            </div>
        </Link>
    )
}