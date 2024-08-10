import IconContainer from "@/app/components/IconContainer";
import { SearchIcon } from "@/app/components/SearchIcon";

export const SearchButtonSearch = () => {
    return (
        <button className="gap-x-2 rounded-xl border-2 bg-green-600 border-green-700 px-3 py-1 text-[#D2F0CB] font-semibold uppercase text-center text-sm flex justify-center items-center">
            <SearchIcon />
            <span>Szűrés</span>
        </button>
    );
}