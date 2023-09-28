import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

export default function ViewExpenses() {
  return (
    <div>
      <TopNavBar />
      <h4 className="border-t px-4 py-2 text-xl sm:border-none">
        View Expenses
      </h4>
    </div>
  );
}
