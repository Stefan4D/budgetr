import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import {AiFillGithub} from "react-icons/ai";
import {AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center " >
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-slate-700">
                <h1 className="text-[55px] font-semibold mb-8 leading-normal uppercase">Welcome to <span className="text-slate-500">Budgetr</span></h1>
                <p>Most people need some way of seeing where their money is going each month. A budget can help you feel more in control of your finances and make it easier to save money for your goals. The trick is to figure out a way to track your finances that works for you. The following budget management can help you create a budget.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
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
                </div> 
            </div>
      </div>
      <div>

      </div>
      <Link
        className="mx-2 rounded-lg p-1 hover:bg-slate-500 hover:text-slate-50"
        to="/app"
      >
        Go to App
      </Link>
      <Footer />
    </>
  );
}
