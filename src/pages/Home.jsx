import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import {CiBadgeDollar, CiMoneyBill, CiShoppingBasket, CiWallet, CiStar} from "react-icons/ci";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-col flex-col-reverse justify-center lg:gap-4 items-center " >
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-center items-center text-slate-700">
                <h1 className="text-[55px] font-semibold mb-4 leading-normal uppercase">Welcome to <span className="text-slate-500">Budgetr</span></h1>
                <p>Most people need some way of seeing where their money is going each month. A budget can help you feel more in control of your finances and make it easier to save money for your goals. The trick is to figure out a way to track your finances that works for you. The following budget management can help you create a budget.</p>
            </div>   
            <div className="flex space-x-2 items-center justify-center gap-2">
                   
                            <a href="" className="text-slate-500">
                                <CiBadgeDollar className="text-[30px]"/>
                            </a>
                            <a href="" className="text-slate-500">
                                <CiMoneyBill className="text-[30px]"/>
                            </a>
                            <a href="" className="text-slate-500">
                                <CiShoppingBasket className="text-[30px]"/>
                            </a>
                            <a href="" className="text-slate-500">
                                <CiWallet className="text-[30px]"/>
                            </a>
                            <a href="" className="text-slate-500">
                                <CiStar className="text-[30px]"/>
                            </a>
            </div>
      </div>

      <Link
        className="flex flex-col text-slate-800 mx-2 rounded-lg p-1 hover:bg-slate-500 hover:text-slate-50 text-center justify-center"
        to="/app"
      >
        Go to App
      </Link>
      <Footer />
    </>
  );
}
