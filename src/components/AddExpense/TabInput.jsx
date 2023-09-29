import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Expense List');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const submit = (e) => {
    e.preventDefault();
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
            <form action="#" onSubmit={submit}>
              <div className="grid grid-cols-2 gap-5">
                <div
                  className="relative mb-3"
                  data-te-date-timepicker-init
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="form1"
                  />
                  <label
                    htmlFor="form1"
                    className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    Select a time
                  </label>
                </div>
                <select data-te-select-init>
                  <option value="1">Housing</option>
                  <option value="2">Transportation</option>
                  <option value="3">Food</option>
                  <option value="4">Utilities</option>
                  <option value="5">Medical & Healthcare</option>
                </select>
                <label data-te-select-label-ref>Select Categories</label>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Type Item name"
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Add your price"
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
              <label type="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Notes
              </label>
              <textarea
                id="message"
                rows="4"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Write your notes here..."
              />
              <div className="mt-5">
                <button
                  type="button"
                  className="w-full bg-slate-500 py-3 text-center text-white"
                  onClick={submit}
                >
                  Add now
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
