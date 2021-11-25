import useSWR from 'swr';
import FetcherGet from '../../../../lib/FetcherGet';

export default function viewDatos({ shop_id }) {

    const { data, error,message } = useSWR(`https://api.abako.xyz/api/user/shop/${shop_id}`, url => FetcherGet(url));
    if (error) return 'Error '
    if (!data) return 'Loading'

    console.log(message)
    return (<div className="grid  grid-cols-1 md:grid-cols-2 m-5 p-5">
        <div>
            <div className="font-bold text-xl">Datos Generales :</div>
            <div className="p-3">
                <div className="my-3">Nombre de la tienda : {data.name}</div>
                <div>Direccion de la tienda : {data.address}</div>
            </div>


        </div>
        <div>
            <div className="font-bold text-xl">Numeros de telefono:</div>
            <div className="p-3">{data.phone[0] ? (data.phone.map(phone => (
                <div key={phone.id}>
                    <div className="my-3">Nombre : {phone.name}</div>
                    <div className="my-3">Telf : {phone.number}</div>
                    <div className="my-3">Descripcion : {phone.description}</div>
                </div>)))

                : <div>no hay ni verga</div>}</div>

        </div>

    </div>)


};
