import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import currency from 'currency.js';

import useLocalForage from '../hooks/useLocalForage';

import GraphCard from '../components/Dashboard/GraphCard';
import Transactions from '../components/Dashboard/Transactions';

import globals from '../data/globals';

dayjs.extend(isBetween);

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [barChartData, setBarChartData] = useState({});
  const [categoriesChartData, setCategoriesChartData] = useState({});
  const [value, setValue, pending] = useLocalForage(globals.db);

  const categoriesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  /**
   * This function will generate the monthly data for a given transactions array for a given year passed in
   * @function generateMonthlyData
   * @param {Array} txs - transactions array
   * @param {Number} year - year to generate data for
   * @returns {Object} - { labels: Array, data: Array }
   */
  const generateMonthlyData = (txs, year) => {
    // Generate an array of 12 elements with value 0 for each month which will be added to
    const data = Array(12).fill(0);
    // Generate an array of month names for the labels using dayjs
    const labels = Array.from({ length: 12 }, (_, i) =>
      dayjs(`${year}-${i + 1}-01`).format('MMMM')
    );

    // Loop through the transactions and add the converted amount to the data array for the month using Currency.js to avoid floating point errors
    txs.forEach((tx) => {
      const date = dayjs(tx.date);
      if (date.year() === year) {
        const monthIndex = date.month();
        data[monthIndex] = currency(data[monthIndex]).add(
          tx.convertedAmount
        ).value;
      }
    });

    return { labels, data };
  };

  /**
   * This function will generate the categories data for a given transactions array
   * @function generateCategoriesData
   * @param {Array} txs - transactions array
   * @returns {Object} - { labels: Array, data: Array }
   */
  const generateCategoriesData = (txs) => {
    // Extract unique categories from transactions
    const categoriesSet = new Set(txs.map((tx) => tx.category));
    const categories = [...categoriesSet];

    const data = categories.map((cat) => {
      return txs.reduce(
        (acc, tx) =>
          tx.category === cat
            ? currency(acc).add(tx.convertedAmount).value
            : acc,
        0
      );
    });

    return {
      labels: categories,
      data,
    };
  };

  useEffect(() => {
    if (value && value.length > 0) {
      setTransactions(value);
      const monthlyData = generateMonthlyData(value, 2023);
      const catData = generateCategoriesData(value);

      setBarChartData({
        labels: monthlyData.labels,
        datasets: [
          {
            label: 'GBP',
            data: monthlyData.data,
            backgroundColor: 'rgba(251, 146, 60, 1)',
          },
        ],
      });

      setCategoriesChartData({
        labels: catData.labels,
        datasets: [
          {
            data: catData.data,
            // for the length of the data array, generate a random colour using HSLA
            backgroundColor: Array.from(
              { length: catData.data.length },
              (element, index) => {
                const hue = (index * 30 + 100) % 360;
                const saturation = index % 2 === 0 ? '50%' : '75%';
                const lightness = '50%';
                const alpha = 1;
                return `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`;
              }
            ),
          },
        ],
      });
    }
  }, [value]);

  return (
    <div className="min-h-[calc(100vh-100px)] w-full  flex-1 p-4 sm:min-h-[calc(100vh-76px)] md:w-1/2">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {barChartData?.labels?.length > 0 && (
          <GraphCard
            graphType="bar"
            title="Monthly Spend"
            data={barChartData}
            options={barChartOptions}
          />
        )}

        {categoriesChartData?.labels?.length > 0 && (
          <GraphCard
            graphType="doughnut"
            title="Categories"
            data={categoriesChartData}
            options={categoriesChartOptions}
          />
        )}
      </div>

      {pending && <p>Loading...</p>}
      {!pending && <Transactions isSummary transactions={transactions} />}
    </div>
  );
}
