import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { FaBars, FaBell, FaUser } from 'react-icons/fa';

import useLocalForage from '../hooks/useLocalForage';

import SideNav from '../components/Dashboard/SideNav';
import GraphCard from '../components/Dashboard/GraphCard';
import Transactions from '../components/Dashboard/Transactions';
import SearchBar from '../components/Dashboard/SearchBar';

import expenses from '../../__tests__/mockExpensesData';

dayjs.extend(isBetween);

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [value, setValue, pending] = useLocalForage('stefan', expenses);

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
  }, []); // get localForage on first render

  useEffect(() => {
    console.log('useEffect: Updating localForage');
    setValue(transactions); // set localForage state
  }, [transactions]); // update localForage when application state changes

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

  // const currencyChartData = {
  //   labels: ['USD', 'GBP'],
  //   datasets: [
  //     {
  //       data: [60, 40],
  //       backgroundColor: ['rgba(251, 146, 60, 1)', 'rgba(30, 41, 59, 0.5)'],
  //     },
  //   ],
  // };
  // const currencyChartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   legend: {
  //     position: 'bottom',
  //   },
  // };

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

  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div>
      {/* h-screen changed to h-100 */}
      <div className="h-100 flex flex-col bg-slate-100">
        {/* Navigation Bar */}
        <div className="flex w-full items-center justify-between bg-white p-2">
          <div className="flex items-center">
            <div className="mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="menuBtn"
                onClick={() => setShowSideNav(!showSideNav)}
              >
                <FaBars className="text-lg text-gray-500" />
              </button>
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
          </div>

          {/* Notification Bell Icon */}
          <div className="space-x-5">
            <button type="button">
              <FaBell className="text-lg text-gray-500" />
            </button>
            {/* Profile Button */}
            <button type="button">
              <FaUser className="text-lg text-gray-500" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-wrap">
          <SideNav showSideNav={showSideNav} />
          {/* Main content */}
          <div className="w-full flex-1 p-4 md:w-1/2">
            <SearchBar />

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

            <Transactions isSummary transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
