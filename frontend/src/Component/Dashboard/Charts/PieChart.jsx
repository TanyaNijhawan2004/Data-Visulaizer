import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Instagram', 'Twitter', 'Thread', 'Telegram'],
      datasets: [
        {
          label: 'Clicks',
          data: [35, 20, 15, 30],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)', // Instagram color
            'rgba(54, 162, 235, 0.6)', // Twitter color
            'rgba(255, 99, 132, 0.6)', // Thread color
            'rgba(255, 205, 86, 0.6)', // Facebook color
          ],
          hoverOffset: 8,
        },
      ],
    };

    if (chartRef.current) {
      if (chartInstanceRef.current) {
        // chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      chartInstanceRef.current = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
  <canvas ref={chartRef} height={400} width={400} />);
};

export default PieChart;
