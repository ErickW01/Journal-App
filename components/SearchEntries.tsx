import React from 'react';
import {data, connect} from '../public/lib/data';

export default async function SearchEntries() {
  const client = await connect();
    return(
        <>
        {client && <div className='text-green-500'>Connected to DB...</div>}
        <section className='bg-slate-500'>
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            {data && data.map((item, index) => {
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