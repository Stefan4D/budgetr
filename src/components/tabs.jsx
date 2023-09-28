import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Expense List');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex mb-4">
        <button
          onClick={() => handleTabClick('Expense List')}
          className={`mr-2 py-2 px-4 rounded ${
            activeTab === 'Expense List'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-200 text-gray-800'
          }`}
        >
          Expense List
        </button>
        <button
          onClick={() => handleTabClick('Input Expense')}
          className={`py-2 px-4 rounded ${
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
};

export default Tabs;
