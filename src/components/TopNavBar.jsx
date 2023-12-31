import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-auto container-fluid">
        <div className="flex">
          <Link
            to="/"
            className="justify-left font-brand p-3 text-3xl font-black text-white"
          >
            Budget<span className="text-cyan-400">r</span>
          </Link>

          <Link
            to="/app"
            className="ml-auto self-center p-3 text-white hover:text-cyan-400"
          >
            Go to App
          </Link>
        </div>
      </div>
    </nav>
  );
}
