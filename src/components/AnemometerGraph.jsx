import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnemometerGraph = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Wind speed Chart',
      },
    },
  };
  const labels = data.readings.map((item) => item.timestamp.split('T')[0]);
  const graphData = {
    labels,
    datasets: [
      {
        label: 'Speed',
        data: data.readings.map((item) => item.force),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <p className="graph-title">Evolution of the wind speed</p>
      <Line className="graph-container" options={options} data={graphData} />;
    </>
  );
};

export default AnemometerGraph;
