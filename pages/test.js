import { useTheme } from "next-themes";
import router from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Dashboard/navbar";
import { Dark } from "../lib/icons/DarkLight";
import { IconInicio, IconLogout } from "../lib/icons/OptionsIcons";

export default function sidebar({ children, active, color }) {

    const [activeOption, setActiveOption] = useState(active);
    //TooltipFunction();

    return (


        //     <>
        //     <Head>
        //         <title>Dashboard</title>
        //     </Head>

        //     {/* 
        //     !----------------------- Dashboard -----------------------!
        //     */}

        //     <div className="flex md:flex-row flex-col">

        //         <div className="sidebar-abako scroll">

        //             {/*Btn-DarkMode */}
        //             <button className="btn-darkmode"
        //                 type="button"
        //                 aria-label="Toggle Dark Mode"
        //                 onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>

        //                 {mounted && (resolvedTheme === 'dark' ? (<Dark />) : (<Light />))}
        //             </button>

        //             {/*Image-Business */}
        //             <div className="image-business-sidebar">



        //                 <img className="relative left-1/2 transform -translate-x-1/2 block w-14 max-h-16 rounded-full" src={data.user_image ? data.user_image : '/user.png'} />


        //             </div>


        //             {/*option-menu */}
        //             <div className="flex md:flex-row justify-center flex-col">

        //                 <ul className="my-10 flex flex-row md:flex-col w-screen">

        //                     {data.rol === 'employee'
        //                         ? <></>
        //                         : <li
        //                             className={`list-option-sidebar efectohover hover:border-red-500
        //                                     ${activeOption == 'Inicio'
        //                                     ? ('border-red-500 active-option-sidebar')
        //                                     : ('border-transparent border-2')}`}

        //                             onClick={() => { router.push('/dashboard') }}
        //                         >
        //                             <IconInicio />
        //                         </li>
        //                     }

        //                     <li
        //                         className={`list-option-sidebar efectohover hover:border-yellow-400
        //                          ${activeOption == 'Productos'
        //                                 ? ('border-yellow-400 active-option-sidebar')
        //                                 : ('border-transparent border-2')}`}
        //                         onClick={() => { router.push('/dashboard/productos') }}
        //                     >
        //                         <IconProductos />
        //                     </li>


        //                     {data.rol === 'employee'
        //                         ? <></>
        //                         : <li className={`list-option-sidebar efectohover hover:border-green-700 
        //                                 ${activeOption == 'Tiendas'
        //                                 ? ('border-green-800 active-option-sidebar')
        //                                 : ('border-transparent border-2')}`}
        //                             onClick={() => { router.push('/dashboard/tiendas') }}
        //                         >
        //                             <IconTiendas />
        //                         </li>
        //                     }

        //                     {data.rol === 'employee'
        //                         ? <></>
        //                         : <li className={`list-option-sidebar efectohover hover:border-blue-700 
        //                                 ${activeOption == 'Config'
        //                                 ? ('border-blue-700 active-option-sidebar')
        //                                 : ('border-transparent border-2')}`}
        //                             onClick={() => { router.push('/dashboard/configuracion') }}
        //                         >
        //                             <IconConfiguracion />
        //                         </li>
        //                     }

        //                 </ul>

        //             </div>

        //             {/*Btn-Logout */}
        //             <div
        //                 className="btn-logout"
        //                 onClick={async () => { await removeCookie(); router.push("/login") }}>
        //                 <div>
        //                     <IconLogout />
        //                 </div>
        //             </div>
        //         </div>



        //         <div className="main-sidebar">

        //             <div className="navbar-sidebar">
        //                 <Navbar colors={color} name={active} user={data.username} />
        //             </div>

        //             {children}

        //         </div>
        //     </div>



        // </>


        <>


            {/* 
    !----------------------- Dashboard -----------------------!
    */}

            <div className="flex md:flex-row flex-col gap-5">

                <div className="
            border bg-gray-100 flex pl-2 py-2
            md:w-20 md:flex-col md:h-full md:overflow-y-scroll md:overflow-x-hidden
            w-full flex-row bottom-0 h-12 fixed
            dark:bg-pruebaA5 dark:border-prueba6
            ">

                    <div className="hidden md:block">

                        {/*Btn-DarkMode */}
                        <button className="absolute right-0 "
                            type="button"
                            aria-label="Toggle Dark Mode"
                        >
                            <Dark />

                        </button>

                        {/*Image-Business */}
                        <div className="rounded-full bg-gray-900 mt-7">



                            <img className="object-cover h-16 w-full rounded-full" src={'/taa.png'} />


                        </div>

                    </div>

                    {/*option-menu */}
                    <div className="md:space-y-20 md:my-10 w-full flex-1">

                        <ul className="flex flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-10 ">

                            <li

                                className={`flex flex-auto justify-center align-middle`}

                                onClick={() => { router.push('/dashboard') }}
                            >
                                <div
                                    className={`efectohover hover:border-red-500 p-1 cursor-pointer 
                                ${activeOption == 'Productos'
                                            ? ('border-red-500 active-option-sidebar')
                                            : ('border-transparent border-2')}`}
                                >
                                    <IconInicio />
                                </div>

                            </li>






                            <li

                                className={`flex flex-auto justify-center align-middle `}
                                onClick={() => { router.push('/dashboard') }}
                            >
                                <div
                                    className={`efectohover hover:border-red-500 p-1 cursor-pointer
                                ${activeOption == 'Productos'
                                            ? ('border-red-500 active-option-sidebar')
                                            : ('border-transparent border-2')}`}
                                >


                                    <IconInicio />
                                </div>
                            </li>




                        </ul>

                    </div>

                    {/*Btn-Logout */}
                    <div
                        className="md:flex hidden justify-center align-middle mb-5 cursor-pointer "
                        onClick={async () => { await removeCookie(); router.push("/login") }}>
                        <div>

                            <IconLogout />

                        </div>
                    </div>
                </div>



                <div className="main-sidebar">

                    <div className="navbar-sidebar">
                        <Navbar colors={color} name={active} />
                    </div>



                </div>
            </div>



        </>


    )

};
