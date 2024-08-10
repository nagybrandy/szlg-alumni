import events from './events.json';
import { EventCard } from './EventCard';
import Timeline from './Timeline';
import { Avatar } from '@material-tailwind/react';

export default function ProfilePage() {
    return (
        <div className="flex flex-col bg-[#3A6F3E] relative">
            {/* Circle with Hello text */}
            <div className="bg-[#D2F0CB] rounded-full w-[30rem] h-[30rem] absolute left-0 top-0 -translate-x-[30%] -translate-y-[50%]  pt-24 flex items-center justify-center z-[30]">
                <h1 className='text-black text-5xl z-10'>Hello</h1>
            </div>
            
            {/* Background circles */}
            <div className="h-screen w-screen absolute pt-48 z-[10]">
                <img src="/circles.svg" className="absolute mix-blend-lighten opacity-100 pointer-events-none" />
            </div>

            {/* White section with text */}
            <div className="bg-[#FCFFF8] h-32 flex flex-row w-full rounded-2xl relative z-[10]">
                <div className="w-3/5"></div>
                <p className="text-justify my-auto w-full pr-16 text-sm text-[#607D8B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt varius viverra. Suspendisse auctor lorem id pulvinar convallis. Mauris at blandit eros. Nunc ultrices lorem turpis, et tincidunt mi pharetra non. Integer fermentum mauris ut lacus ullamcorper volutpat. Etiam vel nulla magna. Nam a risus quam. Cras tempor consequat venenatis. Donec mollis iaculis odio,
                </p>
            </div>

            <div className="h-16 min-h-full"></div>

            {/* White section with Timeline */}
            <div className="bg-[#FCFFF8] h-screen w-8/12 self-center rounded-t-[5em] flex flex-row justify-between relative z-[10]">
                <Timeline />
                <div className="flex min-w-16 h-16 bg-green-800 rounded-full m-10 shadow-lg hover:bg-green-500 z-20">
                    <img src="./edit_icon.png" alt="" className='w-7 h-7 m-auto' />
                </div>
            </div>
        </div>
    );
}
