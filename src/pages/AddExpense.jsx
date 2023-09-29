import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';
import TabInput from '../components/AddExpense/TabInput';
import List from '../components/AddExpense/List';

export default function AddExpense() {
  return (
    <>
      <div>
        <TopNavBar />
        <h4 className="border-t px-4 py-2 text-xl sm:border-none">
          Add Expense
        </h4>
        <div className="rounded-lg bg-slate-50 px-4 py-20 text-white lg:px-48  ">
          <div className="flex flex-row items-center justify-between text-slate-700 lg:items-center lg:py-40">
            <div className="flex flex-col justify-between ">
              <h2 className="my-4 text-[15px] font-semibold text-slate-800">
                Items
              </h2>
              <TabInput />
            </div>
            <div className="mx-4 my-4 flex flex-col items-center justify-center lg:py-2">
              <h1 className="text-[20px] text-slate-600">Category</h1>
            </div>
            <div className="mx-4 my-4 flex flex-col items-center justify-center lg:py-2">
              <h1 className="text-[20px] text-slate-600">Months</h1>
            </div>
          </div>
        </div>
      </div>
      <List />
      <Footer />
    </>
  );
}
