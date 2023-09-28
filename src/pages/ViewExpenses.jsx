import React from 'react';
import { Link } from 'react-router-dom';

export default function ViewExpenses() {
  return(

    // <div>ViewExpenses</div>

    <div>
     <nav className="bg-slate-800 shadow-lg rounded-lg" >
        <div className="container max-auto" >
          <div className="sm:flex" >
            
          <Link className='bg-slate-500 rounded-lg text-white text-2xl font-semibold p-3 justify-left px-1' to="/">BUDGETR</Link>
         
          <li className='sm:inline-block sm:self-center'>
            <h4 className='text-white  text-XL border-t sm:border-none'>View Expenses</h4>     
            </li>

        </div>

      </div>
    </nav>
  </div>
  ) 
  
  
}
