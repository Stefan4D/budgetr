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
        {activeTab === 'Input Expense' && <div>Input Expense Content</div>}
      </div>
    </div>
  );
}

export default Tabs;
