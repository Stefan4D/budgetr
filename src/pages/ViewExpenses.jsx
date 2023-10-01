import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transactions from '../components/Dashboard/Transactions';
import useLocalForage from '../hooks/useLocalForage';
import globals from '../data/globals';

export default function ViewExpenses() {
  const [transactions, setTransactions] = useState();
  const [value, setValue, pending] = useLocalForage(globals.db);

  useEffect(() => {
    // console.log('useEffect: Getting localForage');
    setTransactions(value); // set application state
    // console.table(value);
  }, [value]); // get localForage on first render

  return (
    <div className="min-h-[calc(100vh-100px)] w-full flex-1 p-4 sm:min-h-[calc(100vh-76px)] md:w-1/2">
      <div>
        <h2 className="text-xl font-bold">View Expenses</h2>
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
}
