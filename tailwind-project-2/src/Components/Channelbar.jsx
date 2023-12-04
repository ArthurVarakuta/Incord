import React from 'react';

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
            <section className={"bg-greydark w-full h-12 flex items-center justify-center"}>
                <span className={"text-xl "}>servername</span>
                <span>*</span>
            </section>
            <section className={"channel-name-container p-3 "}>
                <span className={"text-sm font-bold"}>Text channels</span>
                <span>text channel</span>
                <span>text channel</span>
                <span>text channel</span>
            <button >+</button>
            </section>
            <section className={"channel-name-container p-3 "}>
                <span className={"text-sm font-bold"}>Voice channels</span>
                <span>voice channel</span>
                <span>voice channel</span>
                <span>voice channel</span>
                <button>+</button>
            </section>
        </div>
    );
};

export default Channelbar;
