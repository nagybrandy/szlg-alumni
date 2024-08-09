import User from "./User";

export default function UsersContainer() {
    const userData = [
        {
            name: "Gipsz",
            year: "1900-1905",
            class: "A",
            job: "Job",
        },
        {
            name: "Gipsz2",
            year: "1900-1904",
            class: "B",
            job: "Job2",
        },
        {
            name: "Gipsz3",
            year: "1900-1904",
            class: "C",
            job: "Job3",
        },
        {
            name: "Gipsz4",
            year: "1900-1904",
            class: "D",
            job: "Job4",
        }
    ];
    return (
        <div>
            {userData.map((person) => <User elem = {person} />)}
        </div>
    );
}