'use client';
import events from './events.json';
import { EventCard } from './EventCard';
import Timeline from './Timeline';
import { Avatar } from '@material-tailwind/react';
import { useGetSingleUserMutation } from "@/store/services/apiSlice.js";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function ProfilePage() {
    const [getSingleUser, { data, isLoading, error }] = useGetSingleUserMutation();
    const [fetchedUser, setFetchedUser
    ] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            try {
                const result = await getSingleUser({ userId: '2', token: localStorage.getItem("token")}).unwrap();
                setFetchedUser(result);
                console.log("Fetched user:", result);
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        }
        fetchUser();
    }, []);
    return (
        <div className="flex flex-col bg-[#3A6F3E] relative">
            {/* Circle with Hello text */}
            <div className="bg-[#D2F0CB] rounded-full w-[45rem] h-[45rem] absolute left-0 top-0 -translate-x-[25%] -translate-y-[66%]  flex items-center justify-center z-[30]">
               
            </div>
            <div className='text-black text-2xl z-[9999] absolute top-0 left- p-4 flex flex-col'>
                <div className='flex flex-row'>
                    <img src={fetchedUser.profile_picture} alt="aaaaaaaaaaaaaaaaaaa" className='w-20 h-20 mx-4 rounded-full object-cover' />
                    <div className='flex flex-col'>
                        {/*Insert name */}
                        <h1 className='mt-1 font-bold'>{fetchedUser.last_name + " " + fetchedUser.first_name}</h1>
                        {/*Insert job */}
                        <p className='text-lg text-gray-700'>{fetchedUser.job}</p>
                        <div className='flex flex-row pt-2'>
                            {/*Insert class */}
                            <p className='w-10 h-10 rounded-full bg-green-900 text-center pt-1 text-white'>{fetchedUser.class_section}</p>
                            {/*Insert start and end date */}
                            <p className='m-auto pl-3 rounded-full border-white text-xl'>{fetchedUser.class_start_year} - {fetchedUser.class_end_year}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row pt-3 space-x-4 ml-14'>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-12 h-12'>
                        <g clip-path="url(#clip0_271_2021)">
                            <path d="M55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 41.2258 10.0563 52.6029 23.2031 54.6659V35.4492H16.2207V27.5H23.2031V21.4414C23.2031 14.5492 27.3088 10.7422 33.5903 10.7422C36.5981 10.7422 39.7461 11.2793 39.7461 11.2793V18.0469H36.2785C32.8625 18.0469 31.7969 20.1668 31.7969 22.3438V27.5H39.4238L38.2046 35.4492H31.7969V54.6659C44.9437 52.6029 55 41.2258 55 27.5Z" fill="#8BC34A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_271_2021">
                                <rect width="55" height="55" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-4 w-12 h-12'>
                        <g clip-path="url(#clip0_271_2022)">
                            <path d="M27.5 4.95215C34.8477 4.95215 35.7178 4.98437 38.6074 5.11328C41.293 5.23144 42.7432 5.68262 43.71 6.05859C44.9883 6.55273 45.9121 7.1543 46.8682 8.11035C47.835 9.07715 48.4258 9.99024 48.9199 11.2686C49.2959 12.2354 49.7471 13.6963 49.8652 16.3711C49.9941 19.2715 50.0264 20.1416 50.0264 27.4785C50.0264 34.8262 49.9941 35.6963 49.8652 38.5859C49.7471 41.2715 49.2959 42.7217 48.9199 43.6885C48.4258 44.9668 47.8242 45.8906 46.8682 46.8467C45.9014 47.8135 44.9883 48.4043 43.71 48.8984C42.7432 49.2744 41.2822 49.7256 38.6074 49.8438C35.707 49.9727 34.8369 50.0049 27.5 50.0049C20.1523 50.0049 19.2822 49.9727 16.3926 49.8438C13.707 49.7256 12.2568 49.2744 11.29 48.8984C10.0117 48.4043 9.08789 47.8027 8.13184 46.8467C7.16504 45.8799 6.57422 44.9668 6.08008 43.6885C5.7041 42.7217 5.25293 41.2607 5.13477 38.5859C5.00586 35.6856 4.97363 34.8154 4.97363 27.4785C4.97363 20.1309 5.00586 19.2607 5.13477 16.3711C5.25293 13.6855 5.7041 12.2354 6.08008 11.2686C6.57422 9.99024 7.17578 9.06641 8.13184 8.11035C9.09863 7.14356 10.0117 6.55273 11.29 6.05859C12.2568 5.68262 13.7178 5.23144 16.3926 5.11328C19.2822 4.98437 20.1523 4.95215 27.5 4.95215ZM27.5 0C20.0342 0 19.0996 0.0322266 16.167 0.161133C13.2451 0.290039 11.2363 0.762695 9.49609 1.43945C7.68066 2.14844 6.14453 3.08301 4.61914 4.61914C3.08301 6.14453 2.14844 7.68067 1.43945 9.48535C0.762695 11.2363 0.290039 13.2344 0.161133 16.1562C0.0322266 19.0996 0 20.0342 0 27.5C0 34.9658 0.0322266 35.9004 0.161133 38.833C0.290039 41.7549 0.762695 43.7637 1.43945 45.5039C2.14844 47.3193 3.08301 48.8555 4.61914 50.3809C6.14453 51.9062 7.68067 52.8516 9.48535 53.5498C11.2363 54.2266 13.2344 54.6992 16.1563 54.8281C19.0889 54.957 20.0234 54.9893 27.4893 54.9893C34.9551 54.9893 35.8897 54.957 38.8223 54.8281C41.7441 54.6992 43.7529 54.2266 45.4932 53.5498C47.2979 52.8516 48.834 51.9062 50.3594 50.3809C51.8848 48.8555 52.8301 47.3193 53.5283 45.5147C54.2051 43.7637 54.6777 41.7656 54.8066 38.8438C54.9356 35.9111 54.9678 34.9766 54.9678 27.5107C54.9678 20.0449 54.9356 19.1104 54.8066 16.1777C54.6777 13.2559 54.2051 11.2471 53.5283 9.50684C52.8516 7.68066 51.917 6.14453 50.3809 4.61914C48.8555 3.09375 47.3193 2.14844 45.5147 1.4502C43.7637 0.773438 41.7656 0.300781 38.8438 0.171875C35.9004 0.0322266 34.9658 0 27.5 0Z" fill="#8BC34A"/>
                            <path d="M27.5 13.374C19.7012 13.374 13.374 19.7012 13.374 27.5C13.374 35.2988 19.7012 41.626 27.5 41.626C35.2988 41.626 41.626 35.2988 41.626 27.5C41.626 19.7012 35.2988 13.374 27.5 13.374ZM27.5 36.6631C22.4404 36.6631 18.3369 32.5596 18.3369 27.5C18.3369 22.4404 22.4404 18.3369 27.5 18.3369C32.5596 18.3369 36.6631 22.4404 36.6631 27.5C36.6631 32.5596 32.5596 36.6631 27.5 36.6631Z" fill="#8BC34A"/>
                            <path d="M45.4824 12.8154C45.4824 14.6416 44 16.1133 42.1846 16.1133C40.3584 16.1133 38.8867 14.6309 38.8867 12.8154C38.8867 10.9893 40.3691 9.51758 42.1846 9.51758C44 9.51758 45.4824 11 45.4824 12.8154Z" fill="#8BC34A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_271_2022">
                                <rect width="55" height="55" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-12 h-12 mt-4'>
                        <path d="M17.2964 49.8451C38.0512 49.8451 49.4032 32.6499 49.4032 17.7383C49.4032 17.2499 49.4032 16.7637 49.3702 16.2797C51.5786 14.6824 53.485 12.7045 55 10.4387C52.9407 11.3517 50.7559 11.9502 48.5188 12.2141C50.8746 10.8041 52.6377 8.58594 53.4798 5.97275C51.2648 7.28726 48.8415 8.2136 46.3144 8.71175C44.613 6.90265 42.3629 5.70472 39.9121 5.30331C37.4613 4.90191 34.9466 5.31943 32.757 6.49124C30.5674 7.66306 28.8251 9.52385 27.7996 11.7857C26.7741 14.0475 26.5227 16.5842 27.0842 19.0033C22.5979 18.7783 18.209 17.6124 14.2025 15.5813C10.196 13.5501 6.66133 10.6992 3.828 7.21355C2.385 9.6977 1.94304 12.6384 2.5921 15.437C3.24117 18.2356 4.93245 20.6816 7.3216 22.2769C5.52574 22.2243 3.76898 21.7399 2.2 20.8645V21.0075C2.20071 23.6128 3.10258 26.1377 4.75262 28.1538C6.40267 30.1699 8.69931 31.5533 11.253 32.0691C9.59173 32.5223 7.84867 32.5885 6.1578 32.2627C6.87916 34.5047 8.28307 36.4653 10.1733 37.8703C12.0634 39.2753 14.3454 40.0546 16.7002 40.0991C14.3606 41.9382 11.6813 43.2978 8.81575 44.1004C5.95016 44.903 2.95445 45.1327 0 44.7763C5.16045 48.0878 11.1648 49.8444 17.2964 49.8363" fill="#8BC34A"/>
                    </svg>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-12 h-12'>
                        <g clip-path="url(#clip0_464_694)">
                            <path d="M50.9399 0H4.06007C2.98327 0 1.95058 0.427757 1.18917 1.18917C0.427757 1.95058 0 2.98327 0 4.06007V50.9399C0 52.0167 0.427757 53.0494 1.18917 53.8108C1.95058 54.5722 2.98327 55 4.06007 55H50.9399C52.0167 55 53.0494 54.5722 53.8108 53.8108C54.5722 53.0494 55 52.0167 55 50.9399V4.06007C55 2.98327 54.5722 1.95058 53.8108 1.18917C53.0494 0.427757 52.0167 0 50.9399 0ZM16.3931 46.8531H8.12396V20.5868H16.3931V46.8531ZM12.2528 16.9469C11.3148 16.9416 10.3994 16.6586 9.6221 16.1335C8.84481 15.6085 8.24047 14.865 7.88534 13.9968C7.53022 13.1286 7.44023 12.1747 7.62674 11.2554C7.81324 10.3361 8.26788 9.49272 8.93327 8.83158C9.59867 8.17045 10.445 7.72124 11.3654 7.54064C12.2859 7.36004 13.2392 7.45615 14.1051 7.81684C14.971 8.17753 15.7106 8.78663 16.2306 9.56728C16.7507 10.3479 17.0278 11.2651 17.0271 12.2031C17.0359 12.8311 16.9183 13.4545 16.6811 14.036C16.4439 14.6176 16.092 15.1454 15.6465 15.5881C15.201 16.0307 14.6709 16.3792 14.0878 16.6126C13.5048 16.8461 12.8807 16.9598 12.2528 16.9469ZM46.8722 46.876H38.6069V32.5264C38.6069 28.2944 36.808 26.9882 34.4858 26.9882C32.0337 26.9882 29.6274 28.8368 29.6274 32.6333V46.876H21.3583V20.6059H29.3104V24.2458H29.4174C30.2156 22.6302 33.0115 19.8688 37.2778 19.8688C41.8917 19.8688 46.876 22.6073 46.876 30.6281L46.8722 46.876Z" fill="#8BC34A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_464_694">
                                <rect width="55" height="55" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    
                </div>
            </div>
            {/* Background circles */}
            <div className="h-screen w-screen absolute pt-48 z-[10]">
                <img src="/circles.svg" className="absolute select-none mix-blend-lighten opacity-100 pointer-events-none" />
            </div>

            {/* White section with text */}
            <div className="bg-[#FCFFF8] h-32 flex flex-row w-full rounded-2xl relative z-[10]">
                <div className="w-1/2"></div>
                <p className="text-justify m-auto w-full pr-16 text-sm text-[#607D8B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt varius viverra. Suspendisse auctor lorem id pulvinar convallis. Mauris at blandit eros. Nunc ultrices lorem turpis, et tincidunt mi pharetra non. Integer fermentum mauris ut lacus ullamcorper volutpat. Etiam vel nulla magna. Nam a risus quam. Cras tempor consequat venenatis. Donec mollis iaculis odio,
                </p>
            </div>

            <div className="h-16 min-h-full"></div>

            {/* White section with Timeline */}
            <div className="bg-[#FCFFF8] h-screen w-8/12 self-center rounded-t-[5em] flex flex-row justify-between relative z-[10]">
                <Timeline />
                <div className="flex min-w-16 h-16 bg-green-800 rounded-full m-10 shadow-lg hover:bg-green-500 z-20">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 m-auto'>
                    <path d="M22.2675 3.73245C21.7987 3.26378 21.1629 3.00049 20.5 3.00049C19.8371 3.00049 19.2013 3.26378 18.7325 3.73245L9.25 13.215V16.75H12.785L22.2675 7.26745C22.7362 6.79864 22.9995 6.16286 22.9995 5.49995C22.9995 4.83704 22.7362 4.20127 22.2675 3.73245Z" fill="#FCFFF8"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 7.33696 3.26339 6.70107 3.73223 6.23223C4.20107 5.76339 4.83696 5.5 5.5 5.5H10.5C10.8315 5.5 11.1495 5.6317 11.3839 5.86612C11.6183 6.10054 11.75 6.41848 11.75 6.75C11.75 7.08152 11.6183 7.39946 11.3839 7.63388C11.1495 7.8683 10.8315 8 10.5 8H5.5V20.5H18V15.5C18 15.1685 18.1317 14.8505 18.3661 14.6161C18.6005 14.3817 18.9185 14.25 19.25 14.25C19.5815 14.25 19.8995 14.3817 20.1339 14.6161C20.3683 14.8505 20.5 15.1685 20.5 15.5V20.5C20.5 21.163 20.2366 21.7989 19.7678 22.2678C19.2989 22.7366 18.663 23 18 23H5.5C4.83696 23 4.20107 22.7366 3.73223 22.2678C3.26339 21.7989 3 21.163 3 20.5V8Z" fill="#FCFFF8"/>
                </svg>
                </div>
            </div>
        </div>
    );
}
