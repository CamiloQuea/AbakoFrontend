import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import ConfigGeneral from '../../components/Dashboard/Configuracion/configuracionGeneral'
import ConfigEmpresa from '../../components/Dashboard/Configuracion/configuracionEmpresa'
import useSWR from 'swr';
import cookie from 'js-cookie';
import router from 'next/router';
import { useState } from 'react';
import AddImage from '../../components/Dashboard/Configuracion/addImage';




export default function configuracion() {


    const [modal, setModal] = useState("");

    const handleModal = () => {
        setModal("")
    }

    const viewModal = () => {
        setModal("true")

    }
    const fetcher = (url) => {

        return fetch(url, {

            credentials: 'include'
        })
            .then(res => res.json())
            .then(json => json.data);
    }

    const { data, error, mutate } = useSWR(`https://api.abako.xyz/api/user`, fetcher);
    if (error) return 'Ocurrio un error:'
    if (!data) return 'Loading'
    if (data.rol === 'employee') router.push('/dashboard/productos')




    return (
        <Sidebar active="Config" color='blue'>


            <div className="grid xl:grid-cols-2 xl:gap-4 gap-10 grid-cols-1 mx-8 mt-6 xl:mb-0 mb-20">
                <div className="xl:col-span-2 justify-center items-center justify-self-center mb-8">
                    <div className="h-80 w-80 flex mx-auto">
                        <img className="object-cover rounded-full" width="300" height="300" src={data.user_image ? data.user_image : '/user.png'} />
                        <div className="cursor-pointer min-w-0 self-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={viewModal}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />

                            </svg>
                            {modal == "" ? (<></>) : (<AddImage handleModal={handleModal} />)}
                        </div>

                    </div>
                    <div className="text-3xl font-bold text-black dark:text-white text-center uppercase">{data.firstName} {data.lastName}</div>
                </div>
                <ConfigGeneral data={data} />
                <ConfigEmpresa data={data} />
            </div>


        </Sidebar>
    )
};

export async function getServerSideProps({ req, res }) {

    /*   Verificacion Token Usuario */
    const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;

    if (!token && !token2) {


        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    return {
        props: {
        }
    }
}



