import React from 'react';
import Form from '../components/AddExpense/form';

export default function AddExpense() {
  return (
    <div className="min-h-[calc(100vh-100px)] w-full flex-1 p-4 sm:min-h-[calc(100vh-76px)] md:w-1/2">
      <h2 className="text-xl font-bold">Add Expense</h2>
      <div className="mt-4 max-w-5xl rounded-lg bg-white p-4 shadow">
        <Form />
      </div>
    </div>
  );
}
