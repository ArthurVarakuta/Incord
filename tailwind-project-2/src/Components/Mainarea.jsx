import React from 'react';

const MyComponent = () => {
    return (
        <div className={"main-area-wrapper"}>
        <div className={"bg-greylight p-3"}>channelname</div>
            <section className={"message-wrapper"}>
                <span className={"text-item"}>text messages</span>
                <span className={"text-item"}>text messages</span>
                <span className={"text-item"}>text messages</span>
                <span className={"text-item"}>text messages</span>
            </section>
            <section  className={"input-wrapper sticky bottom-0 bg-green-500" +
                " rounded-3xl "}>
                <div className={"bg-greylight  p-3 rounded-3xl"}>+</div>
                <input className={"bg-greylight w-4/5 rounded-3xl"} type="text"/>
                <div className={"bg-greylight p-3 rounded-3xl"}> arrow </div>
            </section>
        </div>

    );
};

export default MyComponent;
