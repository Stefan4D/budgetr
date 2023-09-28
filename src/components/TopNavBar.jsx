import React from 'react';


export default function TopNavBar() {
  return (
    // <div className="mb-3">TopNavBar</div>
    <div>
      <nav className="bg-slate-800 shadow-lg rounded-lg" >
        <div className="container max-auto" >
          <div className="sm:flex" >
            
            <button className='bg-slate-500 rounded-lg text-white text-2xl font-semibold p-3 justify-left' >BUDGETR</button>
           
            <ul className='flex items-center justify-endplace-items-end text-white sm:self-center text-XL border-t sm:border-none'>
              <li className='sm:inline-block justify-right'>
                <a href="/" className='p-3 hover:text-blue  hover:text-cyan-400 '>Home</a>
              </li>

              <li className='sm:inline-block'>
                <a href="/addExpense" className='p-3 hover:text-blue  hover:text-cyan-400'>Add Expense</a>  
              </li>

              <li className='sm:inline-block'>
                <a href="/dashboard" className='p-3 hover:text-blue  hover:text-cyan-400 '>Dashboard</a>
              </li>

              <li className='sm:inline-block'>
                <a href="/modifyExpense" className='p-3 hover:text-cyan-400'>Modify Expense</a>
              </li>

              <li className='sm:inline-block'>
                <a href="/viewExpenses" className='p-3 hover:text-blue  hover:text-cyan-400 '>View Expenses</a>
              </li>
             
            </ul>

          </div>

        </div>
      </nav>
    </div>
  )
  
  
  
}
