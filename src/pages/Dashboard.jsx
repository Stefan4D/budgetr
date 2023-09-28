import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    // <div>Dashboard</div>

    <div>
       <nav className="bg-slate-800 shadow-lg rounded-lg" >
        <div className="container max-auto" >
          <div className="sm:flex" >
            
          <Link className='bg-slate-500 rounded-lg text-white text-2xl font-semibold p-3 justify-left px-1' to="/">BUDGETR</Link>
           
            <li className='sm:inline-block sm:self-center'>
              <h4 className='text-white py-2 px-4 text-XL border-t sm:border-none'>Dashboard</h4>     
              </li>

          </div>

        </div>
      </nav>
    </div>
  )
  
}
