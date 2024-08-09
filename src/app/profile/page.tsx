import events from './events.json'
import { EventCard } from './EventCard';

export default function ProfilePage() {
    return (
        <div className="flex flex-col bg-[#3A6F3E]">
            <div className="bg-white h-32 flex flex-row w-full rounded-2xl">
                <div className="w-3/5"></div>
                <p className="text-justify my-auto w-full pr-16 text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt varius viverra. Suspendisse auctor lorem id pulvinar convallis. Mauris at blandit eros. Nunc ultrices lorem turpis, et tincidunt mi pharetra non. Integer fermentum mauris ut lacus ullamcorper volutpat. Etiam vel nulla magna. Nam a risus quam. Cras tempor consequat venenatis. Donec mollis iaculis odio,</p>
            </div>
            <div className="h-16 min-h-full"></div>
            <div className="bg-white h-screen w-1/2 self-center min-h-96 rounded-t-[5em] flex flex-row">
                <p>
                    {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                    ))}
                </p>
                <p className="min-h-full pl-16 pt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas libero minima ipsum est explicabo illo et nesciunt eius reiciendis totam ex error minus eligendi, fuga dignissimos aperiam. Unde dolore consequuntur provident quam, adipisci vitae? Voluptatibus officiis labore expedita veniam quo incidunt nulla architecto ea, cumque similique delectus et tempore minima quasi illum consectetur maxime fugit non, nobis ipsam esse dolorum beatae quis. Perferendis quae recusandae temporibus distinctio libero, animi sunt odio ab autem labore hic esse officiis natus ipsam amet architecto modi deserunt harum, tenetur assumenda laboriosam illum adipisci? Consectetur fuga numquam, voluptates ullam perferendis quaerat neque repellat nesciunt!</p>
                <div className="rounded-3xl p-5">
                    <img src="" alt="szerkeszt" className="w-12 h-12 pt-4"/>
                </div>
            </div>
        </div>
    );
}