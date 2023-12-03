import React from 'react';

const Channelbar = () => {
    return (
        <div className={" channelbar-container flex" +
            " items-left bg-greylight" +
            " jusify-center flex-col" +
            " top-0 left-0" +
            " h-screen" +
            " w-1/5" +
            " text-textcolor_inactive relative "}>
            <section className={"bg-greydark w-full h-12 flex items-center justify-center"}>
                <span className={"text-2xl "}>servername</span>
                <span>*</span>
            </section>
            <section className={"channel-name-container "}>
            <button >+</button>
                <span>text channel</span>
                <span>text channel</span>
                <span>text channel</span>
            </section>
            <section className={"channel-name-container"}>
                <button>+</button>
                <span>voice channel</span>
                <span>voice channel</span>
                <span>voice channel</span>
            </section>
        </div>
    );
};

export default Channelbar;
