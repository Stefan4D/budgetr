/* eslint-disable react/prop-types */
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function GraphCard({
  graphType,
  title,
  data,
  options,
  className,
}) {
  return (
    <div className={`flex-1 rounded-lg bg-white p-4 shadow ${className}`}>
      <h2 className="pb-1 text-lg font-semibold text-gray-500">{title}</h2>

      {/* Spacer div */}
      <div className="my-1" />

      {/* Line with gradient */}
      <div className="mb-6 h-px bg-gradient-to-r from-slate-300 to-slate-800" />
      <div
        className="text-center"
        style={{
          position: 'relative',
          height: '150px',
          width: '100%',
        }}
      >
        {graphType === 'doughnut' && <Doughnut data={data} options={options} />}
        {graphType === 'bar' && <Bar data={data} options={options} />}
      </div>
    </div>
  );
}
