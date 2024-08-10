"use client"
import Link from "next/link";
import { Avatar } from "../components/Avatar";
import { PostIcon } from "../components/PostIcon";
import { SearchIcon } from "../components/SearchIcon";
import UsersContainer from "./components/UsersContainer";
import React, { useState } from "react"
import { SearchButtonSearch } from "./components/SearchButtonSearch";

export default function SearchPage() {
    const [hideFilt, setHideFilt] = useState(true);
    return (
        <>
            <div className="h-screen w-screen absolute left-0 top-5">
                <img src="/circles.svg" className="absolute select-none mix-blend-lighten opacity-100 z-10 pointer-events-none" />
            </div>
            <div className="w-8/12 mx-auto bg-[#FCFFF8] h-screen p-5 rounded-[5em] pb-[200px] mt-32 flex flex-col text-center relative z-0">
                <div className="inline-flex inline-fill">
                    <input type="text" className="block px-4 py-2 ml-5 border-2 text-sm text-gray-700 w-44 rounded-xl" role="menuitem" id="name-filt" placeholder="Név"></input>
                    <input type="text" className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-44 rounded-xl" role="menuitem" id="year-filt" placeholder="Évfolyam"></input>
                    <input type="text" className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-44 rounded-xl" role="menuitem" id="class-filt" placeholder="Osztály"></input>
                    <input type="text" className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-44 rounded-xl" role="menuitem" id="job-filt" placeholder="Állás"></input>
                    <div className="ml-3 mt-3">
                        <Link href="">
                            <SearchButtonSearch />
                        </Link>
                    </div>
                </div>
                <div className="overflow-y-auto h-full rounded  px-5 py-2.5 mt-5">
                    <UsersContainer />
                </div>

            </div>
        </>
    )
}
