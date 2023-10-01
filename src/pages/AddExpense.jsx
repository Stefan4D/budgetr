import React from 'react';
import Form from '../components/AddExpense/form';

export default function AddExpense() {
  return (
    <div className="w-full flex-1 p-4 md:w-1/2">
      {/* <div className="flex w-full items-center justify-between bg-white p-2">
        <div className="flex items-center">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Add Expenses</h2>
          </div>
        </div>
      </div> */}
      <Form />
    </div>
  );
}
