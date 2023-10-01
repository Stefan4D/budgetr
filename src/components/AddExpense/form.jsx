import React from 'react';

export default function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('you have submitted the form');
  };

  return (
    <form onSubmit={handleSubmit} className="mx-2 my-4">
      <div className="mx-2 my-4 flex items-start px-2 py-1 lg:flex lg:items-start">
        <div className="grid grid-cols-2 gap-5">
          <div
            className="relative mb-3"
            data-te-date-timepicker-init
            data-te-input-wrapper-init
          >
            <label htmlFor="form1" data-te-select-label-ref>
              Select of date :
              <input
                type="date"
                className="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="form1"
              />
            </label>
          </div>

          <div className="flex-col">
            <label htmlFor="fom1" data-te-select-label-ref>
              Select Categories{' '}
            </label>
            <select
              name="category"
              id="form1"
              className="mx-2 w-full rounded border border-gray-400 bg-transparent px-1 px-3 py-[0.32rem] leading-[1.6]"
              data-te-select-init
            >
              <option value="Housing">Housing</option>
              <option value="Tranportation" defaultChecked>
                Transportation
              </option>
              <option value="Food" defaultChecked>
                Food
              </option>
              <option value="Utilities" defaultChecked>
                Utilities
              </option>
              <option
                name="category"
                value="Medical & Healtcare"
                defaultChecked
              >
                Medical & Healthcare
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-2 my-4 flex-row items-center justify-between px-2 py-1 lg:flex lg:items-start lg:justify-between">
        <div className="my-1 mb-2 flex px-4">
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="names"
              className="w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] "
            />
          </label>
        </div>
        <div className="my-1 mb-2 flex px-4">
          <label htmlFor="price">
            Price
            <input
              id="price"
              type="text"
              name="prices"
              className="w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] "
            />
          </label>
        </div>
        <div className="my-1 mb-2 flex px-4">
          <label htmlFor="coount">
            Count
            <input
              id="count"
              type="number"
              name="counts"
              className="w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] "
            />
          </label>
        </div>
        <div className="my-1 mb-2 flex px-4">
          <label htmlFor="description">
            Description
            <input
              id="description"
              type="text"
              className="w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] "
            />
          </label>
        </div>
      </div>
      <div className="my-1 mb-2 flex px-4">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Note
          <textarea
            id="message"
            type="text"
            rows={4}
            cols={50}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Write your notes here..."
          />
        </label>
      </div>

      <hr />

      <button
        type="submit"
        className="w-full bg-slate-500 py-3 text-center text-white hover:bg-gray-700"
      >
        Submit form
      </button>
    </form>
  );
}
