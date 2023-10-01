/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ viewMode = false }) {
  const [formData, setFormData] = useState({
    id: uuidv4(), // unique id
    description: '', // description of the expense
    date: '', // date of the expense
    amount: '', // amount in the currency of the expense
    convertedAmount: '', // amount converted to the default currency
    currency: 'GBP', // currency of the amount
    category: '', // optional
    notes: '', // optional
    createdAt: dayjs(new Date()).format('DD/MM/YYYY'), // date of creation
  });

  const categories = [
    { value: '', label: 'Select...' },
    { value: 'Housing', label: 'Housing' },
    { value: 'Transportation', label: 'Transportation' },
    { value: 'Food', label: 'Food' },
    { value: 'Utilities', label: 'Utilities' },
    { value: 'Medical & Healthcare', label: 'Medical & Healthcare' },
  ];

  const currencies = [
    { value: 'GBP', label: 'GBP' },
    { value: 'USD', label: 'USD' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This will log the form data to the console
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label>Select The date</label>
            <div className="mt-2">
              <input
                type="date"
                className="peer-focus:text-primary dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                id="form1"
                name="date"
                placeholder="Select The Date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label>Select The Category</label>
            <div className="mt-2">
              <select
                className="w-full sm:col-span-3"
                data-te-select-init
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label>Description</label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Type Item name"
                className="w-full border border-gray-400 px-2 py-1"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label>Amount</label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Add your price"
                className="w-full border border-gray-400 px-2 py-1"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label>Select Currency</label>
            <div className="mt-2">
              <select
                className="w-full sm:col-span-3"
                data-te-select-init
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              >
                {currencies.map((currency) => (
                  <option key={currency.value} value={currency.value}>
                    {currency.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {viewMode && (
            <div className="sm:col-span-3">
              <label>Converted Amount</label>
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full border border-gray-400 px-2 py-1"
                  name="price"
                  value={formData.convertedAmount}
                  onChange={handleChange}
                  disabled
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label>Notes</label>
            <textarea
              id="message"
              rows="4"
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your notes here..."
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="w-full bg-purple-500 py-3 text-center text-white"
          >
            Add now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
