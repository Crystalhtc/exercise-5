import styles from "./BarChart.module.css";
import {Bar} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    BarElement, 
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from "react";

ChartJS.register()