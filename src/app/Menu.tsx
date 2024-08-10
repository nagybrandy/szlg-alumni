import { Avatar } from "./components/Avatar";
import { NewsIcon } from "./components/NewsIcon";
import { NotificationsIcon } from "./components/NotificationsIcon";
import { PeopleIcon } from "./components/PeopleIcon";
import { SearchIcon } from "./components/SearchIcon";
import { SearchButton } from "./components/SearchButton";
import { PostIcon } from "./components/PostIcon";
<<<<<<< HEAD
import { LogoutIcon } from "./components/LogoutIcon";
=======
import Link from "next/link";
>>>>>>> 288960223776e8a03a9d50fa05fb68ad1b6a269a

export default function Menu() {
    return (
        <div className="relative z-[9999] w-full p-2 flex items-center bg-[#D2F0CB] px-5 text-green-700 rounded-b-xl">
            <a href="/" className="w-1/3 flex justify-start">
                <img src="/logo-vertical.svg" alt="Logo" className="w-1/3 select-none" />
            </a>
            <a href="/search" className="w-1/3 flex justify-center align-center">
                <SearchButton />
            </a>

            <div className="w-1/3 flex justify-end items-center space-x-5">

             
                <a href="/igazgato_post" className=" flex justify-end align-center">
<<<<<<< HEAD
                <LogoutIcon/>

                <PostIcon/>

                <NewsIcon />
=======
                    <PostIcon />
>>>>>>> 288960223776e8a03a9d50fa05fb68ad1b6a269a
                </a>
                <a href="/news" className=" flex justify-end align-center">
                    <NewsIcon />
                </a>

                <NotificationsIcon />
                <Link href="/profile">
                    <Avatar img="" />
                </Link>
            </div>

        </div >

    );
}
