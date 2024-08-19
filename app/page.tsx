import Image from "next/image";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";

export default function Home() {
  return (
    <main className="bg-slate-600">
      <Nav/>
      <LogIn/>
    </main>
  );
}
