import events from './events.json'
import { EventCard } from './EventCard';
import Timeline from './Timeline';

export default function ProfilePage() {
    return (
        <div className="flex flex-col bg-[#3A6F3E]">
            <div className="bg-[#FCFFF8] h-32 flex flex-row w-full rounded-2xl">
                <div className="w-3/5"></div>
                <p className="text-justify my-auto w-full pr-16 text-base text-sm text-[#607D8B]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt varius viverra. Suspendisse auctor lorem id pulvinar convallis. Mauris at blandit eros. Nunc ultrices lorem turpis, et tincidunt mi pharetra non. Integer fermentum mauris ut lacus ullamcorper volutpat. Etiam vel nulla magna. Nam a risus quam. Cras tempor consequat venenatis. Donec mollis iaculis odio,</p>
            </div>
            <div className="h-16 min-h-full"></div>
            <div className="bg-[#FCFFF8] h-screen w-8/12 self-center rounded-t-[5em] flex flex-row justify-between">
                <Timeline />
                <div className="flex min-w-16 h-16 bg-green-800 rounded-full m-10 shadow-lg hover:bg-green-500">
                    <img src="./edit_icon.png" alt="" className='w-7 h-7 m-auto'/>
                </div>
            </div>
        </div>
    );
}