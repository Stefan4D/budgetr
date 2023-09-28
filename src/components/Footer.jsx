import React from 'react';
import {AiFillGithub} from "react-icons/ai";
import {AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white rounded-lg lg:px-48 px-4 py-20  ">
      <div className="container mx-auto grid grid-col-1 md:grid-cols-4 mb-8 ">
        <div className="mb-4 md:mb-4 px-2">
          <span className="text-[20px] font-semibold text-slate-400 py-2 uppercase" >Budgetr</span>
          <p className="text-[15px] my-4">"Manage the budget plan"</p>
        </div>
        <div className='mb-4 md:mb-4 px-2'>
          <h2 className="text-[16px] font-semibold text-slate-400 py-2 uppercase">Services</h2>
          <p><a href="http://" target="_blank" rel="noopener noreferrer">Managing the budget</a></p>
          <p><a href="http://" target="_blank" rel="noopener noreferrer">Financial adviser</a></p>
          <p><a href="http://" target="_blank" rel="noopener noreferrer"></a></p>
        </div>
        <div className='mb-4 md:mb-4 px-2'>
          <h2 className="text-[16px] font-semibold text-slate-400 py-2 uppercase">Contact Us</h2>
          <p className="text-[15px] my-4 mb-1">Email : </p>
          <a href="you@email.com" className='text-slate-400'>you@project.com</a>
          <p className="text-[15px] my-4 mb-1">Phone : </p>
          <a href="tel:+1111111" className='text-slate-400'>+111 1111</a>
        </div>
        <div className='flex space-x-2'>
          <a href="" className="text-slate-500">
                                <AiFillGithub className="text-[30px]"/>
                            </a>
                            <a href="" className="text-slate-500">
                                <AiFillLinkedin className="text-[30px]"/>
                            </a>
                            <a href="" className="text-slate-500">
                                <AiFillTwitterSquare className="text-[30px]"/>
                            </a>
                            <a href="" className="text-slate-500">
                                <AiFillInstagram className="text-[30px]"/>
                            </a>


        </div>
      </div>
      <hr className="w-100 clearfix d-md-none" />
      <div className="text-[10px] p-3 justify-center text-center">
              © 2023 Copyright : <a class="text-white" href="http://"
                 >Budgetr.com</a>
            </div>

    </footer>
 
  )

}
