import { useEffect, useState } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2"
import useSWR from "swr"
import FetcherGet from "../../../lib/FetcherGet"

export default function InicioEstadistica() {


    const [todos, setTodos] = useState([]);

    const getData = async () => {
        const response = await fetch(!shop_id ? `https://abakoapi.herokuapp.com/api/user/movement` : `https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/movement`, {
            headers: { accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
            credentials: 'include'
        }
        );
        const data = await response.json();
        setTodos(data.data);
    };


    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('/') + " " + [d.toLocaleTimeString()];

    }

    useEffect(() => {
        getData();
    }, [])

    let products = [];

    let stock = [];

    console.log(todos);



    return (<>
        <div className="p-3">
            <Bar
                data={{
                    labels: products,
                    datasets: [
                        {
                            label: 'Instrumentos con Stock < 10',
                            data: stock,
                            backgroundColor: [
                                'rgba(255, 205, 86,0.5)',
                                'rgba(62, 124, 23, 0.4)',
                                'rgba(195, 106, 45, 0.6)'
                            ],
                        },
                    ],
                }}

                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                }}
            />
        </div>

    </>)
}