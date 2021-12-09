import { Bar, Pie, Doughnut } from "react-chartjs-2"
import useSWR from "swr"
import FetcherGet from "../../../../lib/FetcherGet"

export default function InicioProductsMasVendidos() {

    const { data, error } = useSWR(`https://api.abako.xyz/api/user/movement`, url => FetcherGet(url))
    if (error) return 'error'
    if (!data) return 'loading'



    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('/');

    }

    function Last30Days() {
        var result = [];
        for (var i = 0; i < 30; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push(formatDate(d))
        }

        return (result);
    }


    let salida = [];





    let dates = Last30Days();

    data.forEach(movimiento => {

        if (movimiento.type === false) {





            const date = formatDate(movimiento.createdAt);



            dates.forEach((dia, i) => {

                if (date === dia) {

                    salida.push(movimiento);

                }

            })


        }


    });

    let salidaProducts30days = [];

    salida.forEach((movimiento) => {

        let exists = false;

        let i;


        salidaProducts30days.map(({ product }, j) => {



            if (product.id === movimiento.product.id) {

                

                exists = true;
                salidaProducts30days[j].quantity = salidaProducts30days[j].quantity + movimiento.quantity;

            } else {

                
            }

        })

        if (!exists) {

            

            salidaProducts30days.push({

                quantity: movimiento.quantity,
                product: movimiento.product,
                shop: movimiento.shop

            })
        }


    })



    






    return (<div className="flex flex-col justify-start flex-1 my-2 space-y-1 mx-2">
        {


            salidaProducts30days.map((out, i) =>
                i < 5 ?
                    (


                        <div className="px-5 py-2 border dark:border-prueba rounded-xl overflow-visible text-center" key={out.product.id}>
                            <p className="">
                                <span className="text-4xl">

                                    {out.quantity}

                                </span>
                                <span className="font-thin">
                                    /vendidos
                                </span>
                            </p>

                            <p className="text-xs" >

                                <span className="">
                                    Tienda:
                                </span>

                                <span className="">

                                    {out.shop.name}

                                </span>

                            </p>

                            <p className="truncate" >

                                <span alt={out.product.type}>

                                    {out.product.type}
                                </span>
                                |
                                <span alt={out.product.brand}>

                                    {out.product.brand}
                                </span>
                                |
                                <span alt={out.product.model}>

                                    {out.product.model}
                                </span>

                            </p>


                        </div>


                    ) : ''






            )


        }

    </div>)
}