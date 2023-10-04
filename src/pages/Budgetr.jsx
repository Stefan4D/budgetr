import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SideNavContainer from '../components/application/SideNavContainer';

export default function Budgetr() {
  return (
    <div>
      {/* h-screen changed to h-100 */}
      <div className="h-100 flex flex-col bg-slate-100">
        {/* App Container */}
        <div className="flex flex-1 flex-wrap">
          <SideNavContainer />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
