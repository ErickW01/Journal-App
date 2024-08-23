import Image from "next/image";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-slate-600">
      <Nav/>
      {/* <Hero/> */}
      <LogIn/>
    </main>
  );
}
