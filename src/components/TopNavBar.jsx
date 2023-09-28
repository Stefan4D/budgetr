import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <nav className="rounded-lg bg-slate-800 shadow-lg">
      <div className="max-auto container">
        <div className="sm:flex">
          <Link
            to="/"
            className="justify-left rounded-lg bg-slate-500 p-3 text-2xl font-semibold text-white"
            type="button"
          >
            BUDGETR
          </Link>

          <ul className="text-XL border-t text-white sm:self-center sm:border-none">
            <li className="justify-right sm:inline-block">
              <Link
                to="/"
                className="hover:text-blue p-3  hover:text-cyan-400 "
              >
                Home
              </Link>
            </li>

            <li className="sm:inline-block">
              <Link
                to="/app/add"
                className="hover:text-blue p-3  hover:text-cyan-400"
              >
                Add Expense
              </Link>
            </li>

            <li className="sm:inline-block">
              <Link
                to="/app/dashboard"
                className="hover:text-blue p-3  hover:text-cyan-400 "
              >
                Dashboard
              </Link>
            </li>

            <li className="sm:inline-block">
              <Link to="/app/modify" className="p-3 hover:text-cyan-400">
                Modify Expense
              </Link>
            </li>

            <li className="sm:inline-block">
              <Link
                to="/app/view"
                className="hover:text-blue p-3  hover:text-cyan-400 "
              >
                View Expenses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
