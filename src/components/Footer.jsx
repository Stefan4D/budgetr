import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20  ">
      <div className="container mx-auto grid grid-col-1 md:grid-cols-4  ">
        <div className="mb-4 md:mb-4">
          <span className="text-[20px] font-semibold text-slate-400 py-2 uppercase" >Budgetr</span>
          <p className="text-[15px] my-4">"Manage the budget plan"</p>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-slate-400 py-2 uppercase">Services</h2>
          <ul>
            <li>Manage the budget</li>
            <li>Modify the expence</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-slate-400 py-2 uppercase">Contact</h2>
          <p className="text-[15px] my-4">Email : you@project.com</p>
          <p className="text-[15px] my-4">Phone : +1 111 111</p>
        </div>
      </div>

    </footer>
 
  )

}
