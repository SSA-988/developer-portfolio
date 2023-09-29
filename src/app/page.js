import Image from "next/image";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Header />

      <Body/>

      <Experience/>

      <Skills/>

      <Contact/>
    </main>
  );
}
