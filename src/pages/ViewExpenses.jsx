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

      <div className=" rounded-lg bg-slate-800 h-screen ">

        <div className='flex justify-center'> 
      <button className='text-white text-center m-7 text-lg box-border h-32 w-35 p-4  rounded-lg w-2/5 gap-4 place-content-around  m-8  bg-slate-600 shadow-lg shadow-cyan-500/50'>List of Expenses</button>
      <button className='text-white text-center m-7 text-lg box-border h-32 w-35 p-4  rounded-lg w-2/5 gap-4 place-content-around  m-8  bg-slate-600 shadow-lg shadow-cyan-500/50'>Add your Expenses</button>
        </div>

      <div className='flex space-x-20 m-12 justify-center'>
      <h2 className='text-white text-lg '>Date</h2>
      <h2 className='text-white text-lg '>Item</h2>
      <h2 className='text-white text-lg '>Category</h2>
      <h2 className='text-white text-lg '>Price</h2>
      <h2 className='text-white text-lg '>Total Expense</h2>
      </div>

      </div>
      
    </div>
    
  );
}
