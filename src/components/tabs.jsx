import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Expense List');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-4 flex">
        <button
          type="button"
          onClick={() => handleTabClick('Expense List')}
          className={`mr-2 rounded px-4 py-2 ${
            activeTab === 'Expense List'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-200 text-gray-800'
          }`}
        >
          Expense List
        </button>
        <button
          type="button"
          onClick={() => handleTabClick('Input Expense')}
          className={`rounded px-4 py-2 ${
            activeTab === 'Input Expense'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-200 text-gray-800'
          }`}
        >
          Input Expense
        </button>
      </div>
      <div>
        {activeTab === 'Expense List' && <div>Expense List Content</div>}
        {activeTab === 'Input Expense' && (
          <div>
            {' '}
            <h1>Input Expense Content</h1>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 px-2 py-1"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 px-2 py-1"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the{' '}
                  <a href="#" className="font-semibold text-purple-500">
                    Terms of Use
                  </a>{' '}
                  &{' '}
                  <a href="#" className="font-semibold text-purple-500">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button  type="button" w-full bg-purple-500 py-3 text-center text-white">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
