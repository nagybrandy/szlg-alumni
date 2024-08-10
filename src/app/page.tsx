"use client"
import Image from "next/image";
import { SignUpButton } from "./components/SignUpButton";
import { SignInButtonLanding } from "./landing/components/SignInButtonLanding";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="h-screen w-screen flex items-center justify-center relative">
      <div className="h-screen w-screen absolute z-10">
        <Image
          src="/circles.svg"
          alt="Background circles"
          layout="fill"
          objectFit="cover"
          className="absolute select-none mix-blend-lighten opacity-25 z-20 pointer-events-none"
        />
      </div>
      <div className="w-[75%] bg-[#FCFFF8] absolute bottom-0 p-5 rounded-t-[10em] flex align-middle h-[90vh]">
        {/* Left Side: Text and Buttons */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-green-800 font-bold text-4xl text-center mb-5">
            Köszöntjük
          </h1>
          <p className="italic text-green-900 mb-7" >
            Találd meg volt osztálytársaidat, barátaidat a gimnázium öregdiákjainak fejlesztett platformon! Oszd meg velük, mit csinálsz most, és mi történt veled azóta, valamint kövesd az igazgatóság által közzétett híreket!
          </p>
          {!localStorage.getItem("token") ? (

            <div className="flex space-x-4 z-20 ">
              <Link href="/auth">
                <SignUpButton />
              </Link>
              <Link href="/auth">
                <SignInButtonLanding />
              </Link>
            </div>) : 
            <Link href="/news" className="z-[9999]">        
            <button className="rounded-lg border-2 bg-green-500 hover:bg-green-600 border-green-600 w-[100%] h-9 text-[#D2F0CB] font-bold uppercase text-center text-sm px-2">
              <span>Tovább a hírekhez</span>
            </button></Link>}
        </div>
        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/hero.png"
            alt=""
            width={500}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>
    </main>
  )
}
