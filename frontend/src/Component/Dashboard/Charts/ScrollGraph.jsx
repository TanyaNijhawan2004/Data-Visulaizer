import React from 'react';
import { Line } from 'react-chartjs-2';

const ScrollGraph = () => {
  // Example data for last month and this month
  const lastMonthData = [
    { x: 1, y: 12 },
    { x: 2, y: 13 },
    { x: 3, y: 13.5 },
    { x: 4, y: 13 },
    { x: 5, y: 11 },
    { x: 7, y: 10 },
    { x: 8, y: 11 },
    { x: 9, y: 7 },
    { x: 10, y: 10 },
    // Add more data points for last month
  ];

  

  const chartData = {
    datasets: [
      {
        label: 'Latency(ms)',
        data: lastMonthData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 0,
        lineTension: 0,
      }
    ],
  };

  // Define options for the chart
  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
          speed: 10,
          threshold: 10,
        },
        zoom: {
          enabled: true,
          mode: 'x',
          speed: 0.1,
        },
      },
    },
  };

  return (
    <div className="scroll-graph">
      <Line data={chartData} options={chartOptions}  />
    </div>
  );
};

export default ScrollGraph;
