import React from 'react';
// import { Link } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

export default function ModifyExpense() {
  return (
    <div>
      <TopNavBar />
      <h4 className="border-t px-4 py-2 text-xl sm:border-none">
        Modify Expense
      </h4>
    </div>
  );
}
