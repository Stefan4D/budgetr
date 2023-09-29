import React from 'react';
import { Link } from 'react-router-dom';

export default function ViewExpenses() {
  return (
    <div>
      <h4 className="border-t px-4 py-2 text-xl sm:border-none">
        View Expenses
      </h4>

      <div className=" h-screen rounded-lg bg-slate-800 ">
        <div className="flex justify-center">
          <button className="w-35 m-7 m-8 box-border h-32 w-2/5 place-content-around gap-4  rounded-lg bg-slate-600 p-4 text-center  text-lg  text-white shadow-lg shadow-cyan-500/50">
            List of Expenses
          </button>
          <button className="w-35 m-7 m-8 box-border h-32 w-2/5 place-content-around gap-4  rounded-lg bg-slate-600 p-4 text-center  text-lg  text-white shadow-lg shadow-cyan-500/50">
            Add your Expenses
          </button>
        </div>

        <div className="m-12 flex justify-center space-x-20">
          <h2 className="text-lg text-white ">Date</h2>
          <h2 className="text-lg text-white ">Item</h2>
          <h2 className="text-lg text-white ">Category</h2>
          <h2 className="text-lg text-white ">Price</h2>
          <h2 className="text-lg text-white ">Total Expense</h2>
        </div>
      </div>
    </div>
  );
}
