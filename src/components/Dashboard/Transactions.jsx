/* eslint-disable react/prop-types */
import dayjs from 'dayjs';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

export default function Transactions({ isSummary, transactions }) {
  const navigate = useNavigate();
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
              <th className="border-b border-slate-500 bg-slate-100 px-4 py-2 text-right text-sm font-bold uppercase text-slate-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* This section generates a transaction table of 5 (or fewer if there are fewer records in the array) expenses when isSummary is true, otherwise it generates a table with all transactions */}
            {isSummary
              ? transactions
                  ?.slice(-Math.min(transactions.length, 5))
                  .map((expense) => (
                    <tr
                      key={expense.id}
                      className="cursor-pointer hover:bg-slate-300"
                      onClick={() =>
                        navigate(`/app/view/${expense.id}`, {
                          state: expense,
                        })
                      }
                    >
                      <td className="border-b border-slate-500 px-4 py-2">
                        {expense.description}
                      </td>
                      <td className="border-b border-slate-500 px-4 py-2">
                        {dayjs(expense.date).format('DD/MM/YYYY')}
                      </td>
                      <td className="border-b border-slate-500 px-4 py-2 text-right">
                        {expense.convertedAmount}
                      </td>
                      <td className="border-b border-slate-500 px-4 py-2 text-right">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="ml-1 flex items-center justify-center rounded border-[1px] border-slate-900 bg-slate-200 p-1.5 font-semibold hover:bg-slate-900 hover:text-white"
                            onClick={() =>
                              navigate(`/app/view/${expense.id}`, {
                                state: expense,
                              })
                            }
                          >
                            <FaEye />
                          </button>
                          {/* <button
                      type="button"
                      className="ml-1 flex items-center justify-center rounded border-[1px] border-slate-900 bg-slate-200 p-1.5 font-semibold hover:bg-slate-900 hover:text-white"
                    >
                      <FaEdit />
                    </button>
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center rounded border-[1px] border-slate-900 bg-slate-200 p-1.5 font-semibold hover:bg-slate-900 hover:text-white"
                    >
                      <FaTrash />
                    </button> */}
                        </div>
                      </td>
                    </tr>
                  ))
              : transactions?.map((expense) => (
                  <tr
                    key={expense.id}
                    className="cursor-pointer hover:bg-slate-300"
                    onClick={() =>
                      navigate(`/app/view/${expense.id}`, {
                        state: expense,
                      })
                    }
                  >
                    <td className="border-b border-slate-500 px-4 py-2">
                      {expense.description}
                    </td>
                    <td className="border-b border-slate-500 px-4 py-2">
                      {dayjs(expense.date).format('DD/MM/YYYY')}
                    </td>
                    <td className="border-b border-slate-500 px-4 py-2 text-right">
                      {expense.convertedAmount}
                    </td>
                    <td className="border-b border-slate-500 px-4 py-2 text-right">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="ml-1 flex items-center justify-center rounded border-[1px] border-slate-900 bg-slate-200 p-1.5 font-semibold hover:bg-slate-900 hover:text-white"
                          onClick={() =>
                            navigate(`/app/view/${expense.id}`, {
                              state: expense,
                            })
                          }
                        >
                          <FaEye />
                        </button>
                        {/* <button
                    type="button"
                    className="ml-1 flex items-center justify-center rounded border-[1px] border-slate-900 bg-slate-200 p-1.5 font-semibold hover:bg-slate-900 hover:text-white"
                  >
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center rounded border-[1px] border-slate-900 bg-slate-200 p-1.5 font-semibold hover:bg-slate-900 hover:text-white"
                  >
                    <FaTrash />
                  </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        {isSummary && (
          <div className="mt-4 text-right">
            <Link
              to="/app/view"
              type="button"
              className="rounded border-2 border-slate-900 bg-slate-200 px-4 py-2 font-semibold hover:bg-slate-900 hover:text-white"
            >
              View more
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
