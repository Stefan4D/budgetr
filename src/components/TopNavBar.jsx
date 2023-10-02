import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-auto container-fluid">
        <div className="flex">
          <Link
            to="/"
            className="justify-left p-3 font-brand text-3xl font-black text-white"
          >
            Budget<span className="text-cyan-400">r</span>
          </Link>

          <Link
            to="/app"
            className="ml-auto self-center p-3 text-white hover:text-cyan-400"
          >
            Go to App
          </Link>
          {/* <ul className="border-t text-xl text-white sm:self-center sm:border-none">
            <li className="justify-right sm:inline-block">
              
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
