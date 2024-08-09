import events from './events.json'
import { EventCard } from './EventCard';
import Timeline from './Timeline';

export default function ProfilePage() {
    return (
        <div className="flex flex-col bg-[#3A6F3E]">
            <div className="bg-white h-32 flex flex-row w-full rounded-2xl">
                <div className="w-3/5"></div>
                <p className="text-justify my-auto w-full pr-16 text-base text-sm text-[#607D8B]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt varius viverra. Suspendisse auctor lorem id pulvinar convallis. Mauris at blandit eros. Nunc ultrices lorem turpis, et tincidunt mi pharetra non. Integer fermentum mauris ut lacus ullamcorper volutpat. Etiam vel nulla magna. Nam a risus quam. Cras tempor consequat venenatis. Donec mollis iaculis odio,</p>
            </div>
            <div className="h-16 min-h-full"></div>
            <div className="bg-white h-screen w-1/2 self-center rounded-t-[5em] flex flex-row">
                <Timeline />
                <div className="rounded-3xl p-5 w-full items-end">
                    <img src="/edit_button.png" alt="szerkeszt" className="pt-2 min-w-1/12" />
                </div>
            </div>
        </div>
    );
}