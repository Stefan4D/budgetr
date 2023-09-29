import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaBell, FaUser } from 'react-icons/fa';
import SideNav from '../components/Dashboard/SideNav';
import GraphCard from '../components/Dashboard/GraphCard';
import Transactions from '../components/Dashboard/Transactions';
import SearchBar from '../components/Dashboard/SearchBar';

export default function Dashboard() {
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

  const currencyChartData = {
    labels: ['USD', 'GBP'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['rgba(251, 146, 60, 1)', 'rgba(30, 41, 59, 0.5)'],
      },
    ],
  };
  const currencyChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
  };

  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div>
      <div className="flex h-screen flex-col bg-slate-100">
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

            {/* 
            
            Graphs 

            TODO: Fix flex/grid layout for graphs

            */}
            <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
              <GraphCard
                title="Categories"
                data={categoriesChartData}
                options={categoriesChartOptions}
              />

              <GraphCard
                title="Currency"
                data={currencyChartData}
                options={currencyChartOptions}
              />
              <GraphCard
                title="Currency"
                data={currencyChartData}
                options={currencyChartOptions}
              />
            </div>

            <Transactions isSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
