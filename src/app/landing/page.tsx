"use client"
import Image from "next/image";
import { SignUpButton } from "../components/SignUpButton";
import { SignInButtonLanding } from "./components/SignInButtonLanding";
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
      <div className="w-[75%] bg-[#FCFFF8] absolute bottom-0 p-5 rounded-t-[10em] flex align-middle h-[90vh]">
        {/* Left Side: Text and Buttons */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-green-800 font-bold text-4xl text-center mb-5">
            Köszöntjük
          </h1>
          <p className="italic text-green-900 mb-7" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In recusandae quos quisquam expedita magni repellat, nobis autem quo voluptas maiores, porro libero nam facere. Mollitia modi cupiditate corporis vel sunt.
          </p>
          <div className="flex space-x-4 z-20 ">
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
