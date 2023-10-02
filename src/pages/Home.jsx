import React from 'react';

import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import Quote from '../components/Quote';
import Img from '../assets/Logo.png';

export default function Home() {
  return (
    <>
      <TopNavBar />

      <div className="flex min-h-[calc(100vh-100px)] flex-grow flex-col sm:min-h-[calc(100vh-76px)]">
        <header className="w-full px-8 pb-16 pt-10 sm:pb-28 sm:pt-28">
          <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-16 md:flex-row">
            <div className="flex w-80 items-center justify-center md:w-auto lg:flex-shrink-0">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: '100%',
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27465%27%20height=%27459%27/%3e"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  alt="profile picture"
                  aria-hidden="true"
                  src={Img}
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    boxSizing: 'border-box',
                    padding: 0,
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: 0,
                    height: 0,
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </div>
            <div className="flex w-full flex-col items-center md:items-start">
              <h1 className="font-heading font-brand mx-auto max-w-[19ch] text-center text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-6xl">
                Manage your spend like a pro with Budget
                <span className="text-cyan-400">r</span>.
              </h1>
              <p className="max-w-lg pt-5 text-center text-lg sm:text-xl md:text-left">
                Level-up your spending, seize control of your finances and take
                the wheel on your money with the number one budgeting app from
                FinanceFlow.
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-screen-md">
          <Quote />
        </div>
      </div>
      <Footer />
    </>
  );
}
