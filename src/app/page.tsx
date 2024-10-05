import Image from "next/image";
import Link from "next/link";
import ControlPanel from "./components/controlPanel";
import TakeNote from "./components/takeNote";

export default async function Home() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json();
  return (
    <>
      <div className="h-screen flex">
          <ControlPanel />
          <div className="w-[100%]">
            <TakeNote />  
          </div>
      </div>
    </> 
  )
}
