import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import SideNav from '../Dashboard/SideNav';

export default function SideNavContainer() {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <>
      <div className="flex w-full items-center justify-between bg-slate-800 p-2 shadow-lg">
        <div className="flex items-center">
          <div className="ml-1 mr-1 flex items-center md:hidden">
            <button
              type="button"
              id="menuBtn"
              onClick={() => setShowSideNav(!showSideNav)}
            >
              <FaBars className="text-lg text-white" />
            </button>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="justify-left px-1 py-3 font-brand text-3xl font-black text-white md:p-3"
            >
              Budget<span className="text-cyan-400">r</span>
            </Link>
          </div>
        </div>
      </div>
      <SideNav showSideNav={showSideNav} />
    </>
  );
}
