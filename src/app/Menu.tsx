import { Avatar } from "./components/Avatar";
import { NewsIcon } from "./components/NewsIcon";
import { NotificationsIcon } from "./components/NotificationsIcon";
import { PeopleIcon } from "./components/PeopleIcon";
import { SearchIcon } from "./components/SearchIcon";

export default function Menu() {
    return (
        <div className="w-full p-2 flex items-center bg-[#D2F0CB] px-5 text-green-700 rounded-b-xl">
            <div className="w-1/3 flex justify-start">
                <img src="/logo-vertical.svg" alt="Logo" className="w-1/3" />
            </div>
            <div className="w-1/3 flex justify-center relative">
                <input
                    type="text"
                    placeholder="Keress lászlósokat!"
                    className="rounded-3xl border-2 border-green-500 w-[90%] h-8 pl-10 placeholder-green-800 placeholder:font-semibold placeholder:uppercase placeholder:text-center placeholder:ml-8 placeholder:text-sm"
                />
                <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-green-500">
                    <SearchIcon />
                </div>
            </div>
            <div className="w-1/3 flex justify-end items-center space-x-5">
                <NewsIcon />
                <NotificationsIcon />
                <PeopleIcon />
                <Avatar img="" />
            </div>
        </div>

    );
}
