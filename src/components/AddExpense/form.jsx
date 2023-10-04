/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import currency from 'currency.js';
// import useFetch from '../../hooks/useFetch';
import useLocalForage from '../../hooks/useLocalForage';
import globals from '../../data/globals';

function Form({ viewMode = false }) {
  const [databaseValue, setDatabaseValue] = useLocalForage(globals.db, []);

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

  const API_KEY = 'c52f82c58835781486a1e893';

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
    if (formData.currency === 'USD') {
      fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/GBP`, {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then((data) => {
          // console.log(data);
          // console.log(data.conversion_rates.USD);
          formData.convertedAmount = currency(formData.amount)
            .divide(data.conversion_rates.USD)
            .toString();
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(() => {
          console.log(formData); // This will log the form data to the console
          setDatabaseValue([...databaseValue, formData]); // This will add the form data to localForage
        });
    } else {
      formData.convertedAmount = formData.amount;
      console.log(formData); // This will log the form data to the console
      setDatabaseValue([...databaseValue, formData]); // This will add the form data to localForage
    }
  };

  return (
    <div className="mt-4 px-10">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label>Expense Date:</label>
            <div className="mt-2">
              <input
                type="date"
                className="w-full rounded border border-gray-400 px-3 py-2"
                id="form1"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label>Category:</label>
            <div className="mt-2">
              <select
                className="w-full rounded border border-gray-400 px-3 py-2"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Select..."
                required
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
            <label>Description:</label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Description of the expense"
                className="w-full rounded border border-gray-400 px-3 py-2"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label>Amount:</label>
            <div className="mt-2">
              <input
                type="number"
                placeholder="Full amount e.g. 10.00"
                className="w-full rounded border border-gray-400 px-3 py-2"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label>Currency:</label>
            <div className="mt-2">
              <select
                className="w-full rounded border border-gray-400 px-3 py-2 sm:col-span-3"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              >
                {currencies.map((curr) => (
                  <option key={curr.value} value={curr.value}>
                    {curr.label}
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
              className="mt-2 block w-full rounded border border-gray-400 p-2.5 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Write any additional notes you want to record here..."
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 mt-5">
          <button
            type="submit"
            className="w-full bg-cyan-800 py-3 text-center text-cyan-200 hover:bg-cyan-700 hover:text-cyan-100"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
