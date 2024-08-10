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
            name: "Gipsz4aaaaa",
            year: "1900-1904",
            class: "D",
            job: "Job4",
        },{},{},{},{},{},{},{name: "Gipsz4aaaaa",},{name: "Gipsz4aaaaa",}
    ];
    return (
        <div className="flex flex-col space-y-3">
            {userData.map((person, index) => <User elem = {person} key = {index}/>)}
        </div>
    );
}