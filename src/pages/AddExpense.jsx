import React from 'react';
import { Link } from 'react-router-dom';
import {CiBadgeDollar, CiMoneyBill, CiShoppingBasket, CiWallet, CiStar} from "react-icons/ci";
import Footer from '../components/Footer';



export default function AddExpense() {
  return(

    // <div>AddExpense</div>
<>
    <div>
       <nav className="bg-slate-800 shadow-lg rounded-lg" >
        <div className="container max-auto" >
          <div className="sm:flex " >
            <Link className='bg-slate-500 rounded-lg text-white text-2xl font-semibold p-3 justify-left px-1' to="/">BUDGETR</Link>
           
            <li className='sm:inline-block sm:self-center'>
              <h4 className='text-white py-2 px-4 text-XL border-t sm:border-none'>Add Expense</h4>     
            </li>

          </div>

        </div>
      </nav>

    <div className="bg-slate-50 text-white rounded-lg lg:px-48 px-4 py-20  ">
      <div className="h-full lg:py-40 flex flex-row justify-between lg:items-center items-center text-slate-700">
        
        <div className='flex flex-col justify-between '>
          <h2 className='text-[15px] font-semibold text-slate-800 my-4'>Items</h2>
          <div className="flex flex-col space-x-2 items-center justify-center gap-2">
                   
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
        <div className='flex flex-col lg:py-2 my-4 mx-4 items-center justify-center'>
          <h1 className='text-[20px] text-slate-600'>Category</h1>

        </div>
        <div className='flex flex-col lg:py-2 my-4 mx-4 items-center justify-center'>
          <h1 className='text-[20px] text-slate-600'>Months</h1>

        </div>

      </div>
    </div>

  </div>
  <Footer />
  </>
  )
   
}
