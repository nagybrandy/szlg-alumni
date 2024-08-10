"use client"
import { Avatar } from "../components/Avatar";
import { PostIcon } from "../components/PostIcon";
import { SearchIcon } from "../components/SearchIcon";
import UsersContainer from "./components/UsersContainer";
import React, { useState } from "react"

export default function SearchPage() {
    const [hideFilt, setHideFilt] = useState(true);
    return (
        <>
            <div className="h-screen w-screen absolute left-0 top-5">
                <img src="/circles.svg" className="absolute mix-blend-darken opacity-75 z-10 pointer-events-none" />
                <img src="/circles.svg" className="absolute mix-blend-lighten opacity-100 z-10 pointer-events-none" />
            </div>
            <div className="w-8/12 mx-auto bg-[#FCFFF8] h-screen p-5 rounded-[5em] pb-[200px] mt-32 flex flex-col text-center relative z-0">
                <div className="inline-flex inline-fill">
                    <input type="text" className="block ml-12 px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-44" role="menuitem" id="name-filt" placeholder="Név"></input>
                    <input type="text" className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-44" role="menuitem" id="year-filt" placeholder="Évfolyam"></input>
                    <input type="text" className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-44" role="menuitem" id="class-filt" placeholder="Osztály"></input>
                    <input type="text" className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-44" role="menuitem" id="job-filt" placeholder="Állás"></input>
                    <div className="ml-3 mt-3"><SearchIcon /></div>
                    {/* <div className="relative inline-block text-left mt-5 ml-2">
                        <div>
                            <button onClick={() => setHideFilt(!hideFilt)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Szűrő
                                <svg className={`${hideFilt ? "transform rotate-[-90deg]" : ""} -mr-1 h-5 w-5 text-gray-400`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div hidden={hideFilt} className="absolute left-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" id="filters-container">
                            <div className="py-1" role="none">
                                <input type="text" className="block px-4 py-2 text-sm text-gray-700 w-52" role="menuitem" id="name-filt" placeholder="Név"></input>
                                <input type="text" className="block px-4 py-2 text-sm text-gray-700 w-52" role="menuitem" id="year-filt" placeholder="Kezdő év"></input>
                                <input type="text" className="block px-4 py-2 text-sm text-gray-700 w-52" role="menuitem" id="class-filt" placeholder="Osztály"></input>
                                <input type="text" className="block px-4 py-2 text-sm text-gray-700 w-52" role="menuitem" id="job-filt" placeholder="Állás"></input>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="overflow-y-auto h-full rounded  px-5 py-2.5 mt-5">
                    <UsersContainer />
                </div>

            </div>
        </>
    )
}
