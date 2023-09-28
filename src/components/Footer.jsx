import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="rounded-lg bg-slate-800 px-4 py-20 text-white lg:px-48  ">
      <div className="grid-col-1 container mx-auto mb-8 grid md:grid-cols-4 ">
        <div className="mb-4 px-2 md:mb-4">
          <span className="py-2 text-[20px] font-semibold uppercase text-slate-400">
            Budgetr
          </span>
          <p className="my-4 text-[15px]">"Manage the budget plan"</p>
        </div>
        <div className="mb-4 px-2 md:mb-4">
          <h2 className="py-2 text-[16px] font-semibold uppercase text-slate-400">
            Services
          </h2>
          <p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Managing the budget
            </a>
          </p>
          <p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Financial adviser
            </a>
          </p>
        </div>
        <div className="mb-4 px-2 md:mb-4">
          <h2 className="py-2 text-[16px] font-semibold uppercase text-slate-400">
            Contact Us
          </h2>
          <p className="my-4 mb-1 text-[15px]">Email : </p>
          <a href="you@email.com" className="text-slate-400">
            you@project.com
          </a>
          <p className="my-4 mb-1 text-[15px]">Phone : </p>
          <a href="tel:+1111111" className="text-slate-400">
            +111 1111
          </a>
        </div>
        <div className="flex space-x-2">
          <a href="/" className="text-slate-500">
            <AiFillGithub className="text-[30px]" />
          </a>
          <a href="/" className="text-slate-500">
            <AiFillLinkedin className="text-[30px]" />
          </a>
          <a href="/" className="text-slate-500">
            <AiFillTwitterSquare className="text-[30px]" />
          </a>
          <a href="/" className="text-slate-500">
            <AiFillInstagram className="text-[30px]" />
          </a>
        </div>
      </div>
      <hr className="w-100 clearfix d-md-none" />
      <div className="justify-center p-3 text-center text-[10px]">
        © 2023 Copyright :{' '}
        <a className="text-white" href="http://">
          Budgetr.com
        </a>
      </div>
    </footer>
  );
}
