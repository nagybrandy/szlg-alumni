"use client"
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="h-screen w-screen flex items-center justify-center relative">
        <div className="h-screen w-screen absolute z-10">
            <img src="/circles.svg" className="absolute  mix-blend-lighten opacity-100 z-20 pointer-events-none opacity-40" />
        </div>
        <div className="w-[75%] bg-[#FCFFF8] h-[75%] p-5 rounded-2xl">
            <img src="/logo-vertical.svg" alt="Logo" className="size-1/5 mx-auto mb-5 " />
            <h1 className="text-green-800 font-bold text-4xl">   
                Köszöntjük
            </h1>
            <img src="/udvar.jpg" alt="Udvar" className=" mx-auto -mt-16"/>
        </div>
    </main>
  )
};
