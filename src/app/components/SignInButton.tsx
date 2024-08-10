import { useSelector } from "react-redux";
import IconContainer from "./IconContainer";
import { RootState } from "@reduxjs/toolkit/query";

export const SignInButton = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        isLoggedIn ? (
        <button className="rounded-lg border-2 bg-green-900 border-green-800 w-[110%] h-8 text-[#D2F0CB] font-bold uppercase text-center text-sm">
            <span>Jelentkezz Be</span>
        </button>) : (
            <></>)
    );
}