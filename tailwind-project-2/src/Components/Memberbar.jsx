import React from 'react';
import { FaMoon } from "react-icons/fa";
const Memberbar = () => {
    return (
        <div className={"flex flex-col bg-greylight h-screen w-1/5"}>
            <div className={"text-textcolor_inactive bg-greydark p-3" +
                " w-full cursor-pointer hover:bg-greymid hover:text-white hover:transition-all 0.1s ease-in"}>
                <span >
                    Userlist
                </span>
            </div>


            <div className={"usercard py-3 px-1 cursor-pointer rounded-full" +
                " my-1 bg-greymid hover:transition-all 0.1s ease-in"}>
                <div className={"image-container absolute p-2"}>
                    <img className={"rounded-full"} src="https://via.placeholder.com/50" alt="kartinka"/>
                    <div className={"userstate mt-[-15px] bottom-0 right-0 "} ><FaMoon className={"absolute" +
                        "  bottom-0 right-0  "} />
                    </div>
                    {/*    тут нужна будет
                     тернарка на стейт
                     статуса*/}
                </div>
                <div className={"usercard-info flex flex-col pt-2 text-textcolor_inactive"}>
                    <div>Nickname</div>
                    <span>status usera</span>
                </div>
            </div>
            <div className={"usercard py-3 px-1 cursor-pointer rounded-full" +
                " my-1 bg-greymid"}>
                <div className={"image-container absolute p-2"}>
                    <img className={"rounded-full"} src="https://via.placeholder.com/50" alt="kartinka"/>
                    <div className={"userstate mt-[-15px] bottom-0 right-0 "} ><FaMoon className={"absolute" +
                        "  bottom-0 right-0  "} />
                    </div>
                    {/*    тут нужна будет
                     тернарка на стейт
                     статуса*/}
                </div>
                <div className={"usercard-info flex flex-col pt-2 text-textcolor_inactive"}>
                    <div>Nickname</div>
                    <span>status usera</span>
                </div>
            </div>
            <div className={"usercard py-3 px-1 cursor-pointer rounded-full" +
                " my-1 bg-greymid"}>
                <div className={"image-container absolute p-2"}>
                    <img className={"rounded-full"} src="https://via.placeholder.com/50" alt="kartinka"/>
                    <div className={"userstate mt-[-15px] bottom-0 right-0 "} ><FaMoon className={"absolute" +
                        "  bottom-0 right-0  "} />
                    </div>
                    {/*    тут нужна будет
                     тернарка на стейт
                     статуса*/}
                </div>
                <div className={"usercard-info flex flex-col pt-2 text-textcolor_inactive"}>
                    <div>Nickname</div>
                    <span>status usera</span>
                </div>
            </div>


        </div>
    );
};

export default Memberbar;
