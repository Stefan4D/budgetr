import React from 'react';
import { Link } from 'react-router-dom';
import {
  CiBadgeDollar,
  CiMoneyBill,
  CiShoppingBasket,
  CiWallet,
  CiStar,
} from 'react-icons/ci';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <TopNavBar />
      <div className="lg-text-start flex flex-col-reverse items-center justify-center gap-5 px-10 py-20 text-center lg:flex-col lg:gap-4 lg:px-56 lg:py-0 ">
        <div className="flex h-full flex-col items-center justify-center text-slate-700 lg:items-center lg:py-40">
          <h1 className="mb-4 text-[55px] font-semibold uppercase leading-normal">
            Welcome to <span className="text-slate-500">Budgetr</span>
          </h1>
          <p>
            Most people need some way of seeing where their money is going each
            month. A budget can help you feel more in control of your finances
            and make it easier to save money for your goals. The trick is to
            figure out a way to track your finances that works for you. The
            following budget management can help you create a budget.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 space-x-2">
          <Link to="/" className="text-slate-500">
            <CiBadgeDollar className="text-[30px]" />
          </Link>
          <Link to="/" className="text-slate-500">
            <CiMoneyBill className="text-[30px]" />
          </Link>
          <Link to="/" className="text-slate-500">
            <CiShoppingBasket className="text-[30px]" />
          </Link>
          <Link to="/" className="text-slate-500">
            <CiWallet className="text-[30px]" />
          </Link>
          <Link to="/" className="text-slate-500">
            <CiStar className="text-[30px]" />
          </Link>
        </div>
      </div>

      <Link
        className="mx-2 flex flex-col justify-center rounded-lg p-1 text-center text-slate-800 hover:bg-slate-500 hover:text-slate-50"
        to="/app"
      >
        Go to App
      </Link>
      <Footer />
    </>
  );
}
