/* eslint-disable react/prop-types */
import React from 'react';
import {
  FaHome,
  FaExchangeAlt,
  FaSignOutAlt,
  FaPlusCircle,
  // FaChartPie,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SideNav({ showSideNav }) {
  return (
    <div
      className={`flex w-full flex-col bg-white p-2 md:flex md:w-56 ${
        showSideNav ? '' : 'hidden'
      }`}
    >
      <nav>
        <Link
          className="my-2 block flex items-center rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-800 hover:text-white"
          to="/app"
        >
          <FaHome className="mr-2" />
          <span>Home</span>
        </Link>
        <Link
          className="my-2 block flex items-center rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-800 hover:text-white"
          to="/app/add"
        >
          <FaPlusCircle className="mr-2" />
          <span>Add Expense</span>
        </Link>
        <Link
          className="my-2 block flex items-center rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-800 hover:text-white"
          to="/app/view"
        >
          <FaExchangeAlt className="mr-2" />
          <span>View Expenses</span>
        </Link>

        {/* <Link
          className="my-2 block flex items-center rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-800 hover:text-white"
          to="/"
        >
          <FaChartPie className="mr-2" />
          <span>Dashboard</span>
        </Link> */}
      </nav>

      {/* Logout button */}
      <Link
        className="my-2 mt-auto block flex items-center rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-800 hover:text-white"
        to="/"
      >
        {/* my-4 block flex items-center rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-800 hover:text-white */}
        <FaSignOutAlt className="mr-2" />
        {/* <i className="fas fa-sign-out-alt mr-2" /> */}
        <span>Logout</span>
      </Link>

      {/* Horizontal line separator */}
      <div className="mt-2 h-px bg-gradient-to-r from-slate-300 to-slate-800" />

      {/* Copyright */}
      <p className="mb-1 px-5 py-3 text-left text-xs text-slate-800">
        &copy; Budgetr {new Date().getFullYear()}
      </p>
    </div>
  );
}
