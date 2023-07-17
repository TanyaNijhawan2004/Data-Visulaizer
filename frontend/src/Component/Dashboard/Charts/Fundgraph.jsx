import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js';

const Fundgraph = () => {
  const funds = [
    { id: 1, source: 'Mobile', amount: 2349 },
    { id: 2, source: 'Website', amount: 4203 },
    { id: 3, source: 'Tablet', amount: 1069 },
  ];

  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    const labels = funds.map((fund) => fund.source);
    const data = funds.map((fund) => fund.amount);

    const chartConfig = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Users ',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 500,
            },
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, chartConfig);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} height={400} width={800} />
    </div>
  );
};

export default Fundgraph;
