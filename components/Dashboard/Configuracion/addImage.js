import React from 'react';
import { useState } from "react";
import cookie from 'js-cookie';
import { mutate } from 'swr';

export default function addImage(props) {

    const [state, setState] = useState({
        user_image: null
    });

    function handleChange(e) {

        setState({ ...state, [e.target.name]: e.target.files[0] });

    }


    async function handleSubmit(e) {
        e.preventDefault();

        

        const formData = new FormData();


        formData.append('user_image', state.user_image);


        const response = await fetch('https://api.abako.xyz/api/user', {
            method: 'PATCH',
            credentials: 'include',
            body: formData

        })

        const resJson = response.json();

        handleModal();
        mutate('https://api.abako.xyz/api/user');

    }



    const { handleModal } = props

    return (<>
        <div className="modal open py-32 px-10 min-h-screen">
            <div className="bg-white dark:bg-pruebaA3 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="dark:text-white font-bold text-gray-600 ">Modificar imagen</h2>

                <form onSubmit={handleSubmit} method="PATCH" action="https://api.abako.xyz/api/user" className="flex flex-col">

                    <input type="file" name="user_image" onChange={handleChange} className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 dark:text-white outline-none dark:bg-pruebaA3"/>
                    <div className="mt-3">
                        <button className="bg-gray-900 text-white p-3" type="submit" >Agregar</button>
                        <button className="py-3 px-8 bg-red-400 text-white font-bold ml-2" onClick={handleModal} >Cerrar</button>

                    </div>

                </form>





            </div>
        </div>

    </>)
}