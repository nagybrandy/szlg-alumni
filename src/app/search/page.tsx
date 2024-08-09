import { Avatar } from "../components/Avatar";
import UsersContainer from "./components/UsersContainer";

export default function SearchPage() {
    return (
        <>
            <div className="rounded bg-white">
                <div className="flex items-center">
                    <Avatar />
                    <UsersContainer />
                </div>
            </div>
        </>
    )
}