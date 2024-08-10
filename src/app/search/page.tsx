"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Avatar } from "../components/Avatar";
import { PostIcon } from "../components/PostIcon";
import { SearchIcon } from "../components/SearchIcon";
import UsersContainer from "./components/UsersContainer";
import { SearchButtonSearch } from "./components/SearchButtonSearch";

export default function SearchPage() {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [grade, setGrade] = useState("");
    const [job, setJob] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYear(event.target.value);
    };

    const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(event.target.value);
    };

    const handleJobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJob(event.target.value);
    };

    return (
        <>
            <div className="h-screen w-screen absolute left-0 top-5">
                <img
                    src="/circles.svg"
                    className="absolute select-none mix-blend-lighten opacity-100 z-10 pointer-events-none"
                />
            </div>
            <div className="w-8/12 mx-auto bg-[#FCFFF8] h-screen p-5 rounded-[5em] pb-[200px] mt-32 flex flex-col text-center relative z-0">
                <div className="flex inline-fill px-5 justify-center pr-12">
                    <input
                        type="text"
                        className="block px-4 py-2 ml-5 border-2 text-sm text-gray-700 w-full rounded-xl"
                        role="menuitem"
                        id="name-filt"
                        placeholder="Név"
                        value={name}
                        onChange={handleNameChange}
                    ></input>
                    <input
                        type="text"
                        className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-full rounded-xl"
                        role="menuitem"
                        id="year-filt"
                        placeholder="Évfolyam"
                        value={year}
                        onChange={handleYearChange}
                    ></input>
                    <input
                        type="text"
                        className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-full rounded-xl"
                        role="menuitem"
                        id="grade-filt"
                        placeholder="Osztály"
                        value={grade}
                        onChange={handleGradeChange}
                    ></input>
                    <input
                        type="text"
                        className="block px-4 py-2 ml-3 border-2 text-sm text-gray-700 w-full rounded-xl"
                        role="menuitem"
                        id="job-filt"
                        placeholder="Állás"
                        value={job}
                        onChange={handleJobChange}
                    ></input>
                    {/* <div className="ml-3 mt-3 pb-4">
                        <Link href="">
                            <SearchButtonSearch
                                name={name}
                                year={year}
                                grade={grade}
                                job={job}
                            />
                        </Link>
                    </div> */}
                </div>
                <div className="overflow-y-auto h-full rounded  px-5 py-2.5 mt-5">
                    <UsersContainer
                        name={name}
                        year={year}
                        grade={grade}
                        job={job}
                    />
                </div>
            </div>
        </>
    );
}
