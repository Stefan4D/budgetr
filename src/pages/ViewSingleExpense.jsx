/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

export default function ViewSingleExpense() {
  const { state } = useLocation();
  const {
    id,
    description,
    date,
    amount,
    convertedAmount,
    currency,
    category,
    notes,
    createdAt,
  } = state;

  //   const { expenseId } = useParams();
  //   console.log(expenseId);
  return (
    <div className="min-h-[calc(100vh-100px)] w-full flex-1 p-4 sm:min-h-[calc(100vh-76px)] md:w-1/2">
      <h2 className="text-xl font-bold">View Expense</h2>
      <div className="mt-4 max-w-5xl rounded-lg bg-white p-4 shadow">
        {/* <p>Expense ID: {expenseId}</p> */}
        <p>Expense ID: {id}</p>
        {/* begin template */}
        <div className="mt-4 px-10">
          <form>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label>Expense Date:</label>
                <div className="mt-2">
                  <input
                    type="date"
                    className="w-full rounded border border-gray-400 px-3 py-2"
                    id="form1"
                    name="date"
                    value={date}
                    disabled
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label>Category:</label>
                <div className="mt-2">
                  <select
                    className="w-full rounded border border-gray-400 px-3 py-2"
                    name="category"
                    value={category}
                    disabled
                  >
                    <option key={category} value={category}>
                      {category}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label>Description:</label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Description of the expense"
                    className="w-full rounded border border-gray-400 px-3 py-2"
                    name="description"
                    value={description}
                    disabled
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label>Amount:</label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Full amount e.g. 10.00"
                    className="w-full rounded border border-gray-400 px-3 py-2"
                    name="amount"
                    value={amount}
                    disabled
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label>Currency:</label>
                <div className="mt-2">
                  <select
                    className="w-full rounded border border-gray-400 px-3 py-2 sm:col-span-3"
                    name="currency"
                    value={currency}
                    disabled
                  >
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>Converted Amount</label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="w-full rounded border border-gray-400 px-3 py-2  sm:col-span-3"
                    name="price"
                    value={convertedAmount}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label>Notes</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-2 block w-full rounded border border-gray-400 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Write any additional notes you want to record here..."
                  name="notes"
                  value={notes}
                  disabled
                />
              </div>
            </div>
          </form>
        </div>
        {/* end template */}
      </div>
    </div>
  );
}
