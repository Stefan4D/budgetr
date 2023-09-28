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
        {activeTab === 'Input Expense' && <div> <h1>Input Expense Content</h1>
          
        <form action="#">
              <div class="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2">
                <input type="text" placeholder="Surname" class="border border-gray-400 py-1 px-2">
              </div>
              <div class="mt-5">
                <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div class="mt-5">
                <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div class="mt-5">
                <input type="password" placeholder="Confirm Password" class="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div class="mt-5">
                <input type="checkbox" class="border border-gray-400"/>
                <span>
                  I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div class="mt-5">
                <button class="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
            </form>

          </div>}
      </div>
    </div>
  );
}

export default Tabs;
