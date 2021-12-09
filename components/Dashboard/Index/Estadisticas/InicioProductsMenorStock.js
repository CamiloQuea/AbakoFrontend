import { Bar, Pie, Doughnut } from "react-chartjs-2"
import useSWR from "swr"
import FetcherGet from "../../../../lib/FetcherGet"

export default function InicioProductsMenorStock() {

    const { data, error } = useSWR(`https://api.abako.xyz/api/user/product`, url => FetcherGet(url))
    if (error) return 'error'
    if (!data) return 'loading'




    data.sort(function (a, b) {
        return a.stock - b.stock;
    });

    




    return (<div className="flex flex-col justify-start flex-1 my-2 space-y-1 mx-2">

        {


            data.map((producto, i) =>
                i < 5 ?
                    (


                        <div className="px-5 py-2 border dark:border-prueba rounded-xl overflow-visible text-center" key={producto.id}>
                            <p className="">
                                <span className="text-4xl">

                                    {producto.stock}

                                </span>
                                <span className="font-thin">
                                    /stock
                                </span>
                            </p>

                            <p className="text-xs" >

                                <span className="">
                                    Tienda:
                                </span>

                                <span className="">

                                    {producto.shop.name}

                                </span>

                            </p>

                            <p className="truncate" >

                                <span alt={producto.type}>

                                    {producto.type}
                                </span>
                                |
                                <span alt={producto.brand}>

                                    {producto.brand}
                                </span>
                                |
                                <span alt={producto.model}>

                                    {producto.model}
                                </span>

                            </p>


                        </div>


                    ) : ''






            )


        }

    </div >)
}