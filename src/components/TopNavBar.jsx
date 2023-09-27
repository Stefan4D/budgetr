import React from 'react';
// import AddExpense from '../pages/AddExpense';

export default function TopNavBar() {
  return (
    // <div className="mb-3">TopNavBar</div>
    <div>
      <nav className="bg-emerald-800 shadow-lg rounded-lg" >
        <div className="container max-auto" >
          <div className="sm:flex" >
            
            <button className='bg-lime-700 rounded-lg text-white text-2xl font-semibold p-3 justify-left' >BUDGETR</button>
           
{/* ====================================================== */}



            <ul className='text-white sm:self-center text-XL border-t sm:border-none'>
              <li className='sm:inline-block justify-right'>
                <a href="Home" className='p-3 hover:text-blue  hover:text-cyan-400 '>Home</a>
              </li>
              <li className='sm:inline-block'>
                <a href="Add-Expense" className='p-3 hover:text-blue  hover:text-cyan-400'>Add Expense</a>
              </li>

              <li className='sm:inline-block'>
                <a href="Dashboard" className='p-3 hover:text-blue  hover:text-cyan-400 '>Dashboard</a>
              </li>

              <li className='sm:inline-block'>
                <a href="Modify-Expense" className='p-3 hover:text-cyan-400'>Modify Expense</a>
              </li>

              <li className='sm:inline-block'>
                <a href="View-Expenses" className='p-3 hover:text-blue  hover:text-cyan-400 '>View Expenses</a>
              </li>
             


            </ul>

            {/*====================================================  */}

          </div>

        </div>
      </nav>
    </div>
  )
  
  
  
}
