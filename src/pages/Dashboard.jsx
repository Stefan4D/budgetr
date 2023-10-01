import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import useLocalForage from '../hooks/useLocalForage';

import GraphCard from '../components/Dashboard/GraphCard';
import Transactions from '../components/Dashboard/Transactions';

// used for testing
// import expenses from '../../__tests__/mockExpensesData';
import globals from '../data/globals';

dayjs.extend(isBetween);

export default function Dashboard() {
  const [transactions, setTransactions] = useState();
  const [value, setValue, pending] = useLocalForage(globals.db);

  useEffect(() => {
    console.log('useEffect: Getting localForage');
    setTransactions(value); // set application state
    console.table(value);

    // const tx = transactions.filter((expense) => {
    //   const date = dayjs(expense.date);
    //   const startDate = dayjs('2022-01-01');
    //   const endDate = dayjs('2022-12-31');
    //   return date.isBetween(startDate, endDate);
    // });
    // console.log(tx.length);
    // console.table(tx);
  }, [value]); // get localForage on first render

  // useEffect(() => {
  //   console.log('useEffect: Updating localForage');
  //   setValue(transactions); // set localForage state
  // }, [transactions]); // update localForage when application state changes

  // Sample graph data
  const categoriesChartData = {
    labels: ['Food', 'Beer'],
    datasets: [
      {
        data: [100, 650],
        backgroundColor: ['rgba(34, 211, 238, 1)', 'rgba(30, 41, 59, 0.5)'],
      },
    ],
  };
  const categoriesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
  };

  // BAR CHART DATA

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const barChartData = {
    labels,
    datasets: [
      {
        label: 'GBP',
        data: [60, 40, 80, 20, 60, 40],
        backgroundColor: 'rgba(251, 146, 60, 1)',
      },
    ],
  };

  return (
    <div className="h-[calc(100vh-100px)] w-full  flex-1 p-4 sm:h-[calc(100vh-76px)] md:w-1/2">
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <GraphCard
          graphType="doughnut"
          title="Categories"
          data={categoriesChartData}
          options={categoriesChartOptions}
        />

        <GraphCard
          graphType="bar"
          title="Monthly Spend"
          data={barChartData}
          options={barChartOptions}
        />
      </div>

      {pending && <p>Loading...</p>}
      {!pending && <Transactions isSummary transactions={transactions} />}
    </div>
  );
}
