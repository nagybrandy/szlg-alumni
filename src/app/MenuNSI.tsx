import { Avatar } from "./components/Avatar";
import { NewsIcon } from "./components/NewsIcon";
import { NotificationsIcon } from "./components/NotificationsIcon";
import { PeopleIcon } from "./components/PeopleIcon";
import { SearchIcon } from "./components/SearchIcon";
import { SearchButton } from "./components/SearchButton";
import { PostIcon } from "./components/PostIcon";
import { SignInButton } from "./components/SignInButton";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="relative z-[9999] w-full p-2 flex items-center bg-[#D2F0CB] px-5 text-green-700 rounded-b-xl">
            <Link href="/" className="w-1/3 flex justify-start">
                <img src="/logo-vertical.svg" alt="Logo" className="w-1/3 select-none" />
            </Link>
            <Link href="/search" className="w-1/3 flex justify-center align-center">
                <SearchButton />
            </Link>
          
            <div className="w-1/3 flex justify-end items-center space-x-5">
                <Link href="/auth">
                    <SignInButton />
                </Link>
            </div>
        </div>

    );
}
