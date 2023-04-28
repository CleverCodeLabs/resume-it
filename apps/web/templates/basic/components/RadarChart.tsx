import React from "react";
import {
  Chart as ChartJS,
  ChartOptions,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);
const options: ChartOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
      },
    },
  },
  plugins: {
    title: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
};

export const data = {
  labels: [
    "Compétence organisationnelles",
    "Compétence relationnelles",
    "Compétence personnelles",
    " Engagement au travail",
    "Compétence managériales",
  ],

  datasets: [
    {
      data: [4, 4.5, 4, 4.5, 3],
      backgroundColor: "transparent",
      borderColor: "rgba(128, 90, 213, 1)",
      pointBackgroundColor: "rgba(128, 90, 213, 1)",
      borderWidth: 1,
    },
  ],
};

export const style = {
  height: 400,
  width: 400,
};

export default function RadarChart() {
  return <Radar data={data} options={options} color="black" />;
}
