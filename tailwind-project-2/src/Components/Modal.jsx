import React from 'react';
import {useStore} from "../store.jsx";

const Modal = () => {
 const {setIsCloseModal}=useStore();
    return (
        <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" +
            " justify-center h-3/5" +
            " w-3/5 bg-greylight border-greymid border-solid border-2" +
            " rounded-3xl flex flex-col justify-around "}>

            <span className={"text-textcolor_inactive text-3xl " +
                " bg-greydark w-full h-full m-0 px-0 text-center"}>Lets setup your server:</span>

            <div className={"flex flex-col p-8"}>

            <span className={"text-textcolor_inactive text-lg my-2"}>Enter a name for your server:</span>
            <input className={"bg-greymid text-white min-h-[30px] w-2/5" +
                " rounded-full my-2"} type="text"/>

            </div>

            <div className={"flex flex-row p-8"}>

                <div>
                <span className={"text-textcolor_inactive text-lg my-2"}>Enter a name for your first text channel:</span>
                <input className={"bg-greymid text-white min-h-[30px] w-4/5" +
                    " rounded-full  my-2"} type="text"/>
                </div>

                <div>
                <span className={"text-textcolor_inactive text-lg my-2"}> Enter a name for your first voice channel:</span>
                <input className={"bg-greymid text-white min-h-[30px] w-4/5" +
                    " rounded-full my-2"} type="text"/>
                </div>

            </div>

            <div className={"flex flex-col p-2 " +
                " right-0" +
                " bg-greydark" +
                " w-full" +
                " h-full" +
                " m-0 px-0"}>
                <button onClick={setIsCloseModal} className={"place-self-end" +
                    " bg-green-500" +
                    " p-4" +
                    " border-2" +
                    " border-green-400 rounded-2xl mx-8"}>Create!</button>
            </div>
        </div>
    );
};

export default Modal;
