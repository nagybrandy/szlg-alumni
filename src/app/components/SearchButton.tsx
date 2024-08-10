import IconContainer from "./IconContainer";
import { SearchIcon } from "./SearchIcon";

export const SearchButton = () => {
    return (
        <button className="gap-x-2 rounded-xl select-none border-2 bg-green-900 border-green-800 w-[90%] h-8 text-[#D2F0CB] font-semibold uppercase text-center text-sm flex justify-center items-center">
            <SearchIcon />
            <span>Keress lászlósokat!</span>
        </button>
    );
}