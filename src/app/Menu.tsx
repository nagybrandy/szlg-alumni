import { Avatar } from "./components/Avatar";
import { NewsIcon } from "./components/NewsIcon";
import { NotificationsIcon } from "./components/NotificationsIcon";
import { PeopleIcon } from "./components/PeopleIcon";
import { SearchIcon } from "./components/SearchIcon";
import { SearchButton } from "./components/SearchButton";
import { PostIcon } from "./components/PostIcon";

export default function Menu() {
    return (
        <div className="relative z-[9999] w-full p-2 flex items-center bg-[#D2F0CB] px-5 text-green-700 rounded-b-xl">
            <a href="/" className="w-1/3 flex justify-start">
                <img src="/logo-vertical.svg" alt="Logo" className="w-1/3" />
            </a>
            <a href="/search" className="w-1/3 flex justify-center align-center">
                <SearchButton />
            </a>
          
            <div className="w-1/3 flex justify-end items-center space-x-5">
                <a href="/igazgato_post" className=" flex justify-end align-center">
                <PostIcon/>
                </a>
                <NotificationsIcon />
                <a href="/profile">
                    <Avatar img="" />
                </a>
            </div>

        </div>

    );
}
