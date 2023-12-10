import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";

const Channelbar = () => {
    return (
        <div className={" channelbar-container flex" +
            " items-left bg-greylight" +
            " jusify-center flex-col" +
            " top-0 left-0" +
            " h-screen" +
            "sm:w-1/6" +
            " md:w-[150px] lg:w-[200px] min-w-[200px]"  +
            " text-textcolor_inactive relative "}>
            <section className={"bg-greydark w-full h-12 flex items-center" +
                " px-2 align-middle justify-around hover:bg-greymid" +
                " hover:text-white hover:transition-all 0.1s ease-in"}>
                <span className={"text-xl cursor-pointer "}>servername</span>
                <span><IoIosArrowDown className={"cursor-pointer"}/></span>
            </section>
            <section className={"channel-name-container p-3 w-full "}>
                <span className={"text-sm font-bold cursor-pointer" +
                    " hover:transition-all 0.1s ease-in hover:text-white"}>Text channels</span>
                <span className={"text-channel cursor-pointer"}>text channel</span>
                <span className={"text-channel  cursor-pointer"}>text channel</span>
                <span className={"text-channel cursor-pointer"}>text channel</span>
            <button className={"cursor-pointer"} ><IoAddCircle className={" my-1 hover:text-white hover:scale-150 transition-all 0.25 ease-in"} /></button>
            </section>
            <section className={"channel-name-container p-3 w-full "}>
                <span className={"text-sm font-bold cursor-pointer" +
                    " hover:transition-all 0.1s ease-in hover:text-white"}>Voice channels</span>
                <span className={"voice-channel  cursor-pointer"}>voice channel</span>
                <span className={"voice-channel cursor-pointer"}>voice channel</span>
                <span className={"voice-channel cursor-pointer"}>voice channel</span>
                <button className={"cursor-pointer"}><IoAddCircle className={" my-1 hover:text-white hover:scale-150 transition-all 0.25 ease-in"}/></button>
            </section>
        </div>
    );
};

export default Channelbar;
