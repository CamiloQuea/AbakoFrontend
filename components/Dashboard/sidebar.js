import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Dark, Light } from '../../lib/icons/DarkLight'
import { IconConfiguracion, IconInicio, IconLogout, IconProductos, IconTiendas } from '../../lib/icons/OptionsIcons';
import { useTheme } from 'next-themes';
import Navbar from './navbar';
import removeCookie from '../../lib/removeCookie';
import router from 'next/router'
import useSWR from 'swr';
import FetcherGet from '../../lib/FetcherGet'

export default function sidebar({ children, active, color }) {

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);


    const [activeOption, setActiveOption] = useState(active);

    const { data, error, mutate } = useSWR(`https://api.abako.xyz/api/user`, url => FetcherGet(url));

    if (error) return 'Ocurrio un error:'
    if (!data) return 'Loading'

    //TooltipFunction();

    return (

        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            {/* 
            !----------------------- Dashboard -----------------------!
            */}

            <div className="flex md:flex-row flex-col">

                <div className="border bg-gray-100 flex pl-2 py-2
            md:w-20 md:flex-col md:h-full md:overflow-y-scroll md:overflow-x-hidden
            w-full flex-row bottom-0 h-12 fixed
            dark:bg-pruebaA5 dark:border-prueba6 z-50">

                    <div className="hidden md:block">


                        {/*Btn-DarkMode */}
                        <button className="absolute right-0 "
                            type="button"
                            aria-label="Toggle Dark Mode"
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>

                            {mounted && (resolvedTheme === 'dark' ? (<Dark />) : (<Light />))}
                        </button>

                        {/*Image-Business */}
                        <div className="rounded-full  mt-7">



                            <img className="object-cover h-16 w-full rounded-full" src={data.user_image ? data.user_image : '/user.png'} />


                        </div>

                    </div>

                    {/*option-menu */}
                    <div className="md:space-y-20 md:my-10 w-full flex-1">

                        <ul className="flex flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-10">

                            {data.rol === 'employee'
                                ? <></>
                                : <li

                                    className={`flex flex-auto justify-center align-middle`}
                                    onClick={() => { router.push('/dashboard') }}
                                >
                                    <div
                                        className={`efectohover hover:border-red-500 p-1 cursor-pointer
                                    ${activeOption == 'Inicio'
                                                ? ('border-red-500 active-option-sidebar')
                                                : ('border-transparent border-2')}`}
                                    >


                                        <IconInicio />

                                    </div>


                                </li>
                            }

                            <li
                                className={`flex flex-auto justify-center align-middle`}
                                onClick={() => { router.push('/dashboard/productos') }}
                            >
                                <div className={`efectohover hover:border-yellow-400 p-1 cursor-pointer
                                 ${activeOption == 'Productos'
                                        ? ('border-yellow-400 active-option-sidebar')
                                        : ('border-transparent border-2')}`}>


                                    <IconProductos />
                                </div>
                            </li>


                            {data.rol === 'employee'
                                ? <></>
                                : <li
                                    className={`flex flex-auto justify-center align-middle`}
                                    onClick={() => { router.push('/dashboard/tiendas') }}
                                >

                                    <div className={`efectohover hover:border-green-700 p-1 cursor-pointer 
                                        ${activeOption == 'Tiendas'
                                            ? ('border-green-800 active-option-sidebar')
                                            : ('border-transparent border-2')}`}>

                                        <IconTiendas />
                                    </div>


                                </li>
                            }

                            {data.rol === 'employee'
                                ? <></>
                                : <li
                                    className={`flex flex-auto justify-center align-middle`}
                                    onClick={() => { router.push('/dashboard/configuracion') }}
                                >

                                    <div className={`efectohover hover:border-blue-700 p-1 cursor-pointer 
                                        ${activeOption == 'Config'
                                            ? ('border-blue-700 active-option-sidebar')
                                            : ('border-transparent border-2')}`}>

                                        <IconConfiguracion />
                                    </div>


                                </li>
                            }

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
                        <Navbar colors={color} name={active} user={data.username} />
                    </div>

                    {children}

                </div>
            </div>



        </>


        // <>
        //     <Head>
        //         <title>Dashboard</title>
        //     </Head>

        //     {/* 
        // !----------------------- Dashboard -----------------------!
        // */}

        //     <div className="flex md:flex-row flex-col gap-5">

        //         <div className="
        //         border bg-gray-100 flex pl-2
        //         md:w-20 md:flex-col md:h-full md:overflow-y-scroll md:overflow-x-hidden
        //         w-full flex-row bottom-0 h-12 fixed
        //         dark:bg-pruebaA5 dark:border-prueba6
        //         ">

        //             <div>

        //                 {/*Btn-DarkMode */}
        //                 <button className="absolute right-0 mt-2"
        //                     type="button"
        //                     aria-label="Toggle Dark Mode"
        //                     onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>

        //                     {mounted && (resolvedTheme === 'dark' ? (<Dark />) : (<Light />))}
        //                 </button>

        //                 {/*Image-Business */}
        //                 <div className="rounded-full mt-6 h-20 my-1">



        //                     <img className="object-cover h-16 w-full rounded-full" src={data.user_image ? data.user_image : '/user.png'} />


        //                 </div>

        //             </div>

        //             {/*option-menu */}
        //             <div className="">

        //                 <ul className="flex flex-row md:flex-col">

        //                     {data.rol === 'employee'
        //                         ? <></>
        //                         : <li


        //                             onClick={() => { router.push('/dashboard') }}
        //                         >
        //                             <IconInicio />
        //                         </li>
        //                     }



        //                 </ul>

        //             </div>

        //             {/*Btn-Logout */}
        //             <div
        //                 className=""
        //                 onClick={async () => { await removeCookie(); router.push("/login") }}>

        //                 <IconLogout />

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


    )

};
