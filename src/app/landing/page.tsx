"use client"
import Image from "next/image";
import { SignUpButton } from "../components/SignUpButton";
import { SignInButtonLanding } from "../components/SignInButtonLanding";
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
          className="absolute mix-blend-lighten opacity-25 z-20 pointer-events-none"
        />
      </div>
      <div className="w-[75%] bg-[#FCFFF8] h-[75%] p-5 rounded-2xl flex">
        {/* Left Side: Text and Buttons */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-green-800 font-bold text-4xl text-center mb-5">
            Köszöntjük
          </h1>
          <div className="flex space-x-4 z-20">
            <Link href="/auth">
              <SignUpButton />
            </Link>
            <Link href="/auth">
              <SignInButtonLanding />
            </Link>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/udvar.jpg"
            alt="Udvar"
            width={400}
            height={300}
            className="rounded-2xl"
          />
        </div>
      </div>
    </main>
  )
}
