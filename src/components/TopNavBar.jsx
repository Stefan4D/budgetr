import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-auto container">
        <div className="sm:flex">
          <Link
            to="/"
            className="justify-left font-brand p-3 text-3xl font-black text-white"
          >
            Budget<span className="text-cyan-400">r</span>
          </Link>

          <ul className="border-t text-xl text-white sm:self-center sm:border-none">
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
                className="hover:text-blue p-3 hover:text-cyan-400"
              >
                View Expenses
              </Link>
            </li>
            {/* <li className="flex items-center ">
              <Link
                to="/"
                className='className="hover:text-blue p-3 hover:text-cyan-400'
              >
                <FaSignInAlt className="mr-2" />
                <span>Sign in</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
