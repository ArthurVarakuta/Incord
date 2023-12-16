import React from 'react';
import { FaGear } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import {FaFire, FaPoo,FaPlus} from "react-icons/fa";
import "../servers.js";
import {servers} from "../servers.js";
import {useStore} from "zustand";

const Sidebar = ({}) => {

    return (
        <div className={" relative top-0" +
            " left-0 " +
            "h-screen w-20" +
            " bg-greydark" +
            " text-white" +
            " shadow-lg" +
            " "} >
            <SidebarIcon icon={<FaFire size={32}/>}/>
            <SidebarIcon icon={<BsLightningCharge size={32}/>}/>
            <SidebarIcon icon={<FaPoo size={32}/>}/>
            <SidebarIcon icon={<FaGear size={32}/>}/>
            <SidebarIcon onClick={()=>{useStore((setIsOpenModal)=>{setIsOpenModal(true)})}}  icon={<FaPlus size={32}/>}/>


        </div>
    );
};


const SidebarIcon = ({icon}) => (
    <div className="sidebar-icon">
    {icon}
  </div>
);
const server_create_handler= ()=>{

}
export default Sidebar;
