import styles from "./BarChart.module.css";
import {Pie} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, 
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [10, 6, 15, 20, 12, 4],
                    borderColor: [
                        'rgb(53, 162, 235)',
                        'rgb(53, 162, 35)',
                        'rgb(53, 32, 235)',
                        'rgb(103, 162, 235)',
                        'rgb(53, 52, 235)',
                        'rgb(53, 162, 15)'
                    ],
                    backgroundColor: [
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(53, 162, 35, 0.4)',
                        'rgba(53, 32, 235, 0.4)',
                        'rgba(103, 162, 235, 0.4)',
                        'rgba(53, 52, 235, 0.4)',
                        'rgba(53, 162, 15, 0.4)'
                    ],
                    borderWidth: 1, 
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })

    })

    return (
        <>
            <div>
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
            </div>
        </>
    )
}