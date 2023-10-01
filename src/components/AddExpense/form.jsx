/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    date: '',
    category: '1',
    itemName: '',
    price: '',
    notes: '',
  });

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
                <option value="Null">Select..</option>
                <option value="Housing">Housing</option>
                <option value="Transportation">Transportation</option>
                <option value="Food">Food</option>
                <option value="Utilities">Utilities</option>
                <option value="Medical">Medical & Healthcare</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label>Item Name</label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Type Item name"
                className="w-full border border-gray-400 px-2 py-1"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label>Item Price</label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Add your price"
                className="w-full border border-gray-400 px-2 py-1"
                name="price"
                value={formData.price}
                onChange={handleChange}
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
