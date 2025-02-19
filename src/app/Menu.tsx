import { useEffect, useState } from "react";
import { Avatar } from "./components/Avatar";
import { NewsIcon } from "./components/NewsIcon";
import { NotificationsIcon } from "./components/NotificationsIcon";
import { PeopleIcon } from "./components/PeopleIcon";
import { SearchIcon } from "./components/SearchIcon";
import { SearchButton } from "./components/SearchButton";
import { PostIcon } from "./components/PostIcon";
import { LogoutIcon } from "./components/LogoutIcon";
import Link from "next/link";
import { useGetMeMutation } from "@/store/services/apiSlice";

export default function Menu() {
    const [getMe, { data, isLoading, error }] = useGetMeMutation();
    const [profilePicture, setProfilePicture] = useState<string>("");

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("No token found");
                    return;
                }
                const result = await getMe({ token }).unwrap();
                setProfilePicture(result.profile_picture); // Assuming `result.profile_picture` contains the image URL
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        fetchProfilePicture();
    }, [getMe]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/';
    };

    return (
        <div className="relative z-[9999] w-full p-2 flex items-center bg-[#D2F0CB] px-5 text-green-700 rounded-b-xl">
            <Link href="/" className="w-1/3 flex justify-start">
                <img src="/logo-vertical.svg" alt="Logo" className="w-1/3 select-none" />
            </Link>
            <Link href="/search" className="w-1/3 flex justify-center align-center">
                <SearchButton />
            </Link>

            <div className="w-1/3 flex justify-end items-center space-x-5">
                <Link href="/igazgato_post" className=" flex justify-end align-center">
                    <PostIcon />
                </Link>
                <Link href="/news" className=" flex justify-end align-center">
                    <NewsIcon />
                </Link>
                <Link href="/profile">
                    <Avatar img={profilePicture} />
                </Link>
                <div onClick={handleLogout}>
                    <LogoutIcon />
                </div>
            </div>
        </div>
    );
}
