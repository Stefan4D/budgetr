import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-slate-800 px-2 pb-2 pt-5 text-white lg:px-48 ">
      <div className="grid-col-1 container mx-auto mb-8 grid md:grid-cols-4">
        <div className="mb-4 px-2 md:mb-4">
          <h2 className="justify-left p-2 font-brand text-3xl font-black text-white">
            Budget<span className="text-cyan-400">r</span>
          </h2>
          <p className="p-2 text-[15px]">
            FinanceFlow was founded in 1780, which may sound far-fetched for a
            tech company but we&apos;re just that passionate that we
            time-traveled to found ourselves even earlier.
          </p>
        </div>
        <div className="mb-4 px-2 md:mb-4 md:ml-10">
          <h3 className="p-2 text-[16px] font-semibold uppercase text-slate-400">
            Our Services
          </h3>
          <p className="p-2 hover:text-cyan-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Budget Estimation
            </a>
          </p>
          <p className="p-2 hover:text-cyan-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Financial Advisory
            </a>
          </p>
          <p className="p-2 hover:text-cyan-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Creative Accounting
            </a>
          </p>
          <p className="p-2 hover:text-cyan-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Flower Arrangement
            </a>
          </p>
        </div>
        <div className="mb-4 px-2 md:mb-4">
          <h3 className="p-2 text-[16px] font-semibold uppercase text-slate-400">
            Contact Us
          </h3>
          <p className="p-2 text-[15px]">Email: </p>
          <a
            href="mailto:budgetr@fake-email.com"
            className="p-2 text-slate-400"
          >
            budgetr@fake-email.com
          </a>
          <p className="p-2 text-[15px]">Phone: </p>
          <a href="/" className="p-2 text-slate-400">
            +1 (111) 111-1111
          </a>
        </div>
        <div className="hidden space-x-2 md:flex">
          <a
            href="https://github.com/Stefan4D/budgetr"
            className="text-slate-500"
          >
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
        &copy; 2023{' '}
        <a
          className="text-white"
          href="https://financeflow-budgetr.netlify.app/"
        >
          Budgetr.com
        </a>
      </div>
    </footer>
  );
}
