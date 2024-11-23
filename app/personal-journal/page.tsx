import React from "react";
import SearchEntries from '../../components/SearchEntries';
import InputEntry from "@/components/InputEntry";
export default function Journal() {
  return (
    <section className="bg-slate-600 p-1">
    {/* <InputEntry/>
    <hr/> */}
    <SearchEntries/>
    <SearchEntries/>
    <SearchEntries/>
    </section>
  );
}
