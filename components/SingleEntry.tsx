import React from 'react';

interface IEntry {
    title?: string;
    entry?: string;
    date?: string;
  }

export default function Entry(item: IEntry) {
    return(
        <div className='flex flex-col border-white border-2 rounded-md min-h-20 m-4'>
        <div className='flex flex-row justify-between'>
            <h2 className='pl-2'>{item.title}</h2>
            <div className='pr-2'>{item.date}</div>
        </div>
        <div className='m-2'>
            <div className='pl-2'>{item.entry}</div>
        </div>
        </div>
    )
}