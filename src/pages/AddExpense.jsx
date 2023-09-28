import React from 'react';
import { Link } from 'react-router-dom';
import {
  CiBadgeDollar,
  CiMoneyBill,
  CiShoppingBasket,
  CiWallet,
  CiStar,
} from 'react-icons/ci';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';

export default function AddExpense() {
  return (
    <>
      <div>
        <TopNavBar />
        <h4 className="border-t px-4 py-2 text-xl sm:border-none">
          Add Expense
        </h4>
        <div className="rounded-lg bg-slate-50 px-4 py-20 text-white lg:px-48  ">
          <div className="flex h-full flex-row items-center justify-between text-slate-700 lg:items-center lg:py-40">
            <div className="flex flex-col justify-between ">
              <h2 className="my-4 text-[15px] font-semibold text-slate-800">
                Items
              </h2>
              <div className="flex flex-col items-center justify-center gap-2 space-x-2">
                <a href="/" className="text-slate-500">
                  <CiBadgeDollar className="text-[30px]" />
                </a>
                <a href="/" className="text-slate-500">
                  <CiMoneyBill className="text-[30px]" />
                </a>
                <a href="/" className="text-slate-500">
                  <CiShoppingBasket className="text-[30px]" />
                </a>
                <a href="/" className="text-slate-500">
                  <CiWallet className="text-[30px]" />
                </a>
                <a href="/" className="text-slate-500">
                  <CiStar className="text-[30px]" />
                </a>
              </div>
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
      <Footer />
    </>
  );
}
