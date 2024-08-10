"use client"
import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { SimpleRegistrationForm } from "./components/LoginForms";
import { useAuthTokenMutation } from "@/store/services/apiSlice";
import { useEffect } from "react";

export default function AuthPage() {
  return (
    <main className="bg-green-900 w-full h-dvh flex justify-center items-center">
        <svg className="w-full h-dvh absolute mix-blend-darken pointer-events-none" viewBox="0 0 1300 864" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M129 64.5C129 100.122 100.122 129 64.5 129C28.8776 129 0 100.122 0 64.5C0 28.8776 28.8776 0 64.5 0C100.122 0 129 28.8776 129 64.5Z" fill="#AAD698" fill-opacity="0.4"/>
        <path d="M129 64.5C129 100.122 100.122 129 64.5 129C28.8776 129 0 100.122 0 64.5C0 28.8776 28.8776 0 64.5 0C100.122 0 129 28.8776 129 64.5Z" fill="#AAD698" fill-opacity="0.4"/>
        <path d="M129 64.5C129 100.122 100.122 129 64.5 129C28.8776 129 0 100.122 0 64.5C0 28.8776 28.8776 0 64.5 0C100.122 0 129 28.8776 129 64.5Z" fill="#AAD698" fill-opacity="0.4"/>
        <path d="M1244 789.5C1244 825.122 1215.12 854 1179.5 854C1143.88 854 1115 825.122 1115 789.5C1115 753.878 1143.88 725 1179.5 725C1215.12 725 1244 753.878 1244 789.5Z" fill="#AAD698" fill-opacity="0.4"/>
        <path d="M1244 789.5C1244 825.122 1215.12 854 1179.5 854C1143.88 854 1115 825.122 1115 789.5C1115 753.878 1143.88 725 1179.5 725C1215.12 725 1244 753.878 1244 789.5Z" fill="#AAD698" fill-opacity="0.4"/>
        <path d="M1244 789.5C1244 825.122 1215.12 854 1179.5 854C1143.88 854 1115 825.122 1115 789.5C1115 753.878 1143.88 725 1179.5 725C1215.12 725 1244 753.878 1244 789.5Z" fill="#AAD698" fill-opacity="0.4"/>
        <circle cx="719.5" cy="750.5" r="113.5" fill="#52BC29" fill-opacity="0.4"/>
        <circle cx="821.5" cy="717.5" r="54.5" fill="#33691E" fill-opacity="0.4"/>
        <circle cx="1204.5" cy="582.5" r="82.5" fill="#33691E" fill-opacity="0.2"/>
        <circle cx="1179.5" cy="475.5" r="120.5" fill="#28B61B" fill-opacity="0.1"/>
        <circle cx="669.5" cy="246.5" r="64.5" fill="#28B61B" fill-opacity="0.2"/>
        </svg>
      <section className="bg-[#D0CDCD] w-4/6 h-4/5 rounded-[73px]
        flex justify-center gap-0.5
      ">        

        <div className="w-full h-full bg-white rounded-l-[inherit]
          flex flex-col justify-center items-center
        ">
          <SimpleRegistrationForm />
        </div>
        <div className="w-full h-full bg-white text-black rounded-r-[inherit]">
          <div className="flex flex-col relative justify-center items-center w-full h-full">
            <div className="w-full h-full absolute top-0 overflow-hidden rounded-tr-[73px] pointer-events-none">
              <div className="size-full rounded-full absolute flex flex-col justify-center items-center -translate-y-2/3 bg-green-800/30">
                <div className="w-full h-2/3"></div>
                <img src="/logo.svg" alt="Logo" className="size-1/4 select-none" />
              </div>
            </div>
            <Typography variant="h1" className="text-[#4E4E4E]  text-[50px] text-center">
              Üdv újra!
            </Typography>
            <Typography variant="h4" className="uppercase text-[#818181] text-center text-md">
              Jó látni téged!
            </Typography>
          </div>
        </div>


      </section>
    </main>
  );
}