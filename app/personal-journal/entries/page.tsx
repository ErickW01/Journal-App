'use client'
import React, { useEffect, useState } from 'react';
import Entry from '@/components/Entries/SingleEntry'
import axios from 'axios';
import Link from 'next/link';


export default function SearchEntries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const retrieveEntries = async() => {
      const rows = await axios.get('/api/db');
      setData(rows.data.res);
    }
    retrieveEntries();
  }, [])

    return(
        <>
          <div className="mx-auto 
          px-4 py-1 lg:px-12 bg-slate-700 h-screen">
            {!data && <div>Retrieving Your Entries!!!</div>}
            {data && data.length < 1 && 
            <div className='text-center'>
              <p>Seems that you don&apos;t have any entries. Maybe make some?</p>
              <Link href={'../personal-journal/new-entry'}>Click Here</Link>
              </div>}
            {data && 
            <div>
              {data?.map((item: IEntry, index: number) => {
                return(<Entry key={index} {...item}/>)})}
            </div>
            }
          </div>
      </>
    )
}