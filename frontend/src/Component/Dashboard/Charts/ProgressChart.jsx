import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ProgressChart = ({ popularity }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const createProgressChart = () => {
      const ctx = chartRef.current.getContext('2d');
      if (chartInstance) {
        // chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Popularity'],
          datasets: [
            {
              label: 'Popularity',
              data: [popularity],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false,
            },
            y: {
              min: 0,
              max: 100,
              ticks: {
                stepSize: 20,
              },
            },
          },
        },
      });
    };

    createProgressChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [popularity]);

  return <canvas ref={chartRef} style={{ width: '100%', height: '20px' }} />;
};

export default ProgressChart;
