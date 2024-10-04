import Image from "next/image";
import Link from "next/link";
import ControlPanel from "./components/controlPanel";
import TakeNote from "./components/takeNote";
import NotesContainer from "./components/notesContainer";

export default async function Home() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json();
  return (
    <>
      <div className="h-[89vh] flex" bg-pink-300>
          <ControlPanel />
          <div>
            <TakeNote />  
            <NotesContainer />    
          </div>
      </div>
    </> 
  )
}
