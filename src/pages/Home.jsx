import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <TopNavBar />
      <h1 className="mx-5 mb-5 text-4xl text-black">Hello World!</h1>
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
