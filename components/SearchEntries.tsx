import React from 'react';
import {connect, getEntries} from '../public/lib/db';

interface IEntry {
  title?: string;
  entry?: string;
  date?: string;
}

export default async function SearchEntries() {
  const client = await connect();
  const data = await getEntries();

    return(
        <>
        {client && <div className='text-green-500 bg-black-300'>Connected to DB...</div>}
        <section className='bg-slate-500'>
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            {data && data?.map((item: IEntry, index: number) => {
              return(
              <div key={index} className='flex flex-col border-white border-2 rounded-md min-h-20 m-4'>
                <div className='flex flex-row justify-between'>
                  <h2 className='pl-2'>{item.title}</h2>
                  <div className='pr-2'>{item.date}</div>
                </div>
                <div className='m-2'>
                  <div className='pl-2'>{item.entry}</div>
                </div>
              </div>)})}
          </div>
      </section>
      </>
    )
}