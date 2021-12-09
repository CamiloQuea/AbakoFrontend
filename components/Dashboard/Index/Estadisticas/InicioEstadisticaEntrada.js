import { Bar, Pie, Doughnut, Line } from "react-chartjs-2"
import useSWR from "swr"
import FetcherGet from "../../../../lib/FetcherGet"

export default function InicioEstadisticaEntrada() {

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

    let entrada = [];
    let salida = [];

    for (let index = 0; index < 30; index++) {

        entrada.push(0);
        salida.push(0);

    }



    let dates = Last30Days();

    data.forEach(movimiento => {

        if (movimiento.type === true) {



            const date = formatDate(movimiento.createdAt);



            dates.forEach((dia, i) => {
                if (date === dia) {




                    entrada[i] = entrada[i] + 1;

                }

            })


        } else {

            const date = formatDate(movimiento.createdAt);



            dates.forEach((dia, i) => {

                if (date === dia) {

                    salida[i] = salida[i] + 1;

                }

            })


        }


    });






    return (<>
        <div className="flex-1 p-3 pt-0">
            <Line
                data={{
                    labels: dates.reverse(),
                    datasets: [
                        {
                            label: 'Cantidad de entrada',
                            data: entrada.reverse(),
                            backgroundColor: 'rgba(255, 205, 86,0.5)',
                            borderColor: 'rgba(255, 205, 86,0.5)',
                            yAxisID: 'yAxes'

                        }

                    ],


                }}

                options={{
                    maintainAspectRatio: false,

                    responsive: true,

                    plugins: {
                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                font: {
                                    size: 14,

                                }
                            }
                        },



                    },
                    scales: {
                        yAxes: {
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) { if (value % 1 === 0) { return value; } },
                                precision: 0
                            }
                        }
                    }
                }

                }
            />
        </div>

    </>)
}