'use client';
import events from './events.json';
import { EventCard } from './EventCard';
import Timeline from './Timeline';
import { Avatar } from '@material-tailwind/react';
import { useGetMeMutation } from "@/store/services/apiSlice.js";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function ProfilePage() {
    const [getMe, { data, isLoading, error }] = useGetMeMutation();
    const [fetchedMe, setFetchedMe] = useState([]);

    useEffect(() => {
        async function fetchMe() {
            try {
                const result = await getMe({}).unwrap();
                setFetchedMe(result); // Assuming the result contains an array
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        }
    fetchMe();
    }, [getMe]);
    return (
        <div className="flex flex-col bg-[#3A6F3E] relative">
            {/* Circle with Hello text */}
            <div className="bg-[#D2F0CB] rounded-full w-[50rem] h-[50rem] absolute left-0 top-0 -translate-x-[25%] -translate-y-[70%]  flex items-center justify-center z-[30]">
               
            </div>
            <div className='text-black text-2xl z-[9999] absolute top-0 left- p-5'>
                    <img src="./home_icon" alt="aaaaaaaaaaaaaaaaaaa" />
                    <h1>Hello</h1>
                </div>
            {/* Background circles */}
            <div className="h-screen w-screen absolute pt-48 z-[10]">
                <img src="/circles.svg" className="absolute mix-blend-lighten opacity-100 pointer-events-none" />
            </div>

            {/* White section with text */}
            <div className="bg-[#FCFFF8] h-32 flex flex-row w-full rounded-2xl relative z-[10]">
                <div className="w-3/5"></div>
                <p className="text-justify my-auto w-full pr-16 text-sm text-[#607D8B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt varius viverra. Suspendisse auctor lorem id pulvinar convallis. Mauris at blandit eros. Nunc ultrices lorem turpis, et tincidunt mi pharetra non. Integer fermentum mauris ut lacus ullamcorper volutpat. Etiam vel nulla magna. Nam a risus quam. Cras tempor consequat venenatis. Donec mollis iaculis odio,
                </p>
            </div>

            <div className="h-16 min-h-full"></div>

            {/* White section with Timeline */}
            <div className="bg-[#FCFFF8] h-screen w-8/12 self-center rounded-t-[5em] flex flex-row justify-between relative z-[10]">
                <Timeline />
                <div className="flex min-w-16 h-16 bg-green-800 rounded-full m-10 shadow-lg hover:bg-green-500 z-20">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 m-auto'>
                    <path d="M22.2675 3.73245C21.7987 3.26378 21.1629 3.00049 20.5 3.00049C19.8371 3.00049 19.2013 3.26378 18.7325 3.73245L9.25 13.215V16.75H12.785L22.2675 7.26745C22.7362 6.79864 22.9995 6.16286 22.9995 5.49995C22.9995 4.83704 22.7362 4.20127 22.2675 3.73245Z" fill="#FCFFF8"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 7.33696 3.26339 6.70107 3.73223 6.23223C4.20107 5.76339 4.83696 5.5 5.5 5.5H10.5C10.8315 5.5 11.1495 5.6317 11.3839 5.86612C11.6183 6.10054 11.75 6.41848 11.75 6.75C11.75 7.08152 11.6183 7.39946 11.3839 7.63388C11.1495 7.8683 10.8315 8 10.5 8H5.5V20.5H18V15.5C18 15.1685 18.1317 14.8505 18.3661 14.6161C18.6005 14.3817 18.9185 14.25 19.25 14.25C19.5815 14.25 19.8995 14.3817 20.1339 14.6161C20.3683 14.8505 20.5 15.1685 20.5 15.5V20.5C20.5 21.163 20.2366 21.7989 19.7678 22.2678C19.2989 22.7366 18.663 23 18 23H5.5C4.83696 23 4.20107 22.7366 3.73223 22.2678C3.26339 21.7989 3 21.163 3 20.5V8Z" fill="#FCFFF8"/>
                </svg>
                </div>
            </div>
        </div>
    );
}
