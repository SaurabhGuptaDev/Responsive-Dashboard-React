// src/components/LineChart.js

/**
 * LineChart Component
 * This component renders a line chart using the react-chartjs-2 library.
 * It displays a dataset over a range of months.
 */

import React, { memo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';

// Register necessary components for ChartJS
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

/**
 * LineChart functional component
 * @returns {JSX.Element} A line chart displaying the dataset
 */
const LineChart = () => {
  // Data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
    datasets: [
      {
        label: 'My First dataset', // Dataset label
        backgroundColor: 'rgba(75,192,192,0.4)', // Background color for the dataset
        borderColor: 'rgba(75,192,192,1)', // Border color for the dataset
        data: [65, 59, 80, 81, 56, 55, 40], // Data points for the dataset
      },
    ],
  };

  // Configuration options for the line chart
  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start the Y-axis at zero
      },
    },
  };

  // Render the Line chart with the provided data and options
  return <Line data={data} options={options} />;
};

export default memo(LineChart);
