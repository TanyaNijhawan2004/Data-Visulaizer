import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // Example data for corporate and college age groups
  const data = {
    "15-20": { Ages: 16  },
    "20-30": { Ages: 47},
    "30-50": { Ages: 32},
    "50-70": { Ages: 33},
    "70+:": { Ages: 0},
  };

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Ages',
        data: Object.values(data).map((item) => item.Ages),
        backgroundColor: 'rgb(153, 102, 255)',
        borderColor: 'rgba(220, 220, 220, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Define options for the chart
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
