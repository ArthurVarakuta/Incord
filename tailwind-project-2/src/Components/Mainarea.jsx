import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import Modal from "./Modal.jsx";
import {useStore} from "../store.jsx";

const Mainarea = () => {
const {isOpenModal}=useStore();
    return (
        <div className={"main-area-wrapper"}>
        <div className={"bg-greylight p-3 cursor-pointer hover:bg-greydark" +
            " hover:text-white hover:transition-all 0.1s ease-in"}>channelname</div>
            <section className={"message-wrapper"}>
                <span className={"text-item"}>text messages</span>
                <span className={"text-item"}>text messages</span>
                <span className={"text-item"}>text messages</span>
                <span className={"text-item"}>text messages</span>
            </section>
            <section  className={"input-wrapper max-h-[100px] sticky bottom-0" +
                " bg-green-500 " +
                " rounded-3xl "}>
                <div className={"bg-greylight w-[30px] h-[30px]" +
                    " p-1 align-center items-center text-center" +
                    " justify-center self-center" +
                    " rounded-full cursor-pointer "}>+</div>
                <input className={"bg-greylight min-h-[30px] w-4/5" +
                    " rounded-full"} type="text"/>
                <div className={"bg-greylight w-[30px] h-[30px]" +
                    " p-1 align-center items-center text-center" +
                    " justify-center self-center" +
                    " rounded-full cursor-pointer"}> <FiArrowRight  size={25} /> </div>
            </section>
            {isOpenModal  && <Modal />}
        </div>

    );
};

export default Mainarea;
