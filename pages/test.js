import { useTheme } from "next-themes";
import router from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Dashboard/navbar";
import { Dark } from "../lib/icons/DarkLight";
import { IconInicio, IconLogout } from "../lib/icons/OptionsIcons";
import Image from 'next/image'

export default function sidebar({ children, active, color }) {

    const [activeOption, setActiveOption] = useState(active);
    //TooltipFunction();

    return (

        <>

            <div className="xl:col-span-2 justify-center items-center justify-self-center mb-8">
                <div className="h-80 w-80 flex mx-auto">



                    <img className="shadow-xl object-cover rounded-full border border-gray-900 subpixel-antialiased " width="300" height="300" src={'/LOGOUTP.png'} />

                    <div className="cursor-pointer min-w-0 self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />

                        </svg>

                    </div>

                </div>

            </div>



        </>


    )

};
