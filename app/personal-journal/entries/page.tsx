'use client'
import React, { useEffect, useState } from 'react';
import Entry from '@/components/Entries/SingleEntry'
import axios from 'axios';


export default function SearchEntries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const retrieveEntries = async() => {
      const rows = await axios.get('/api/db');
      setData(rows.data.rows.rows);
    }
    retrieveEntries();
  }, [])

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