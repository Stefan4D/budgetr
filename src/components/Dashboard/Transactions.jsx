import React from 'react';

export default function Transactions() {
  return (
    <div className="mt-4 rounded-lg bg-white p-4 shadow">
      <div className="rounded-md bg-white">
        <h2 className="pb-1 text-lg font-semibold text-gray-500">
          Transactions
        </h2>
        {/* Spacer */}
        <div className="my-1" />
        {/* Line with gradient */}
        <div className="mb-6 h-px bg-gradient-to-r from-slate-300 to-slate-800" />
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="border-b border-slate-500 bg-slate-100 px-4 py-2 text-sm font-bold uppercase text-slate-500">
                Description
              </th>
              <th className="border-b border-slate-500 bg-slate-100 px-4 py-2 text-sm font-bold uppercase text-slate-500">
                Date
              </th>
              <th className="border-b border-slate-500 bg-slate-100 px-4 py-2 text-right text-sm font-bold uppercase text-slate-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-slate-300">
              <td className="border-b border-slate-500 px-4 py-2">Food</td>
              <td className="border-b border-slate-500 px-4 py-2">
                27/07/2023
              </td>
              <td className="border-b border-slate-500 px-4 py-2 text-right">
                $1500
              </td>
            </tr>
            <tr className="hover:bg-slate-300">
              <td className="border-b border-slate-500 px-4 py-2">Beer</td>
              <td className="border-b border-slate-500 px-4 py-2">
                02/08/2023
              </td>
              <td className="border-b border-slate-500 px-4 py-2 text-right">
                $1950
              </td>
            </tr>
            <tr className="hover:bg-slate-300">
              <td className="border-b border-slate-500 px-4 py-2">Beer</td>
              <td className="border-b border-slate-500 px-4 py-2">
                03/08/2023
              </td>
              <td className="border-b border-slate-500 px-4 py-2 text-right">
                $1850
              </td>
            </tr>
            <tr className="hover:bg-slate-300">
              <td className="border-b border-slate-500 px-4 py-2">Food</td>
              <td className="border-b border-slate-500 px-4 py-2">
                04/08/2023
              </td>
              <td className="border-b border-slate-500 px-4 py-2 text-right">
                $2300
              </td>
            </tr>
          </tbody>
        </table>
        {/* View more button */}
        <div className="mt-4 text-right">
          <button
            type="button"
            className="rounded border-2 border-slate-900 bg-slate-200 px-4 py-2 font-semibold hover:bg-slate-900 hover:text-white"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
}
