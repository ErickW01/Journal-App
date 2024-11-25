import React from 'react';
import {connect, getEntries} from '../public/lib/db';
import Entry from './SingleEntry';

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
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            {data && data?.map((item: IEntry, index: number) => {
              return(<Entry key={index} {...item}/>)})
            }
          </div>
      </>
    )
}