import { Avatar } from "./components/Avatar";
import { NewsIcon } from "./components/NewsIcon";
import { PeopleIcon } from "./components/PeopleIcon";
import { SearchIcon } from "./components/SearchIcon";
import { SearchButton } from "./components/SearchButton";
import { SignInButton } from "./components/SignInButton";

export default function Menu() {
    return (
        <div className="z-10 w-full p-2 flex items-center bg-[#D2F0CB] px-5 text-green-700 rounded-b-xl">
            <a href="/" className="w-1/3 flex justify-start">
                <img src="/logo-vertical.svg" alt="Logo" className="w-1/3" />
            </a>
            <a href="/auth" className="w-1/3 flex justify-center align-center">
                <SearchButton />
            </a>
            <div className="w-1/3 flex justify-end items-center space-x-5">
                <a href="/auth">
                    <SignInButton/>
                </a>
            </div>
        </div>

    );
}
