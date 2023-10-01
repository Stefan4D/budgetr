import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import useLocalForage from '../hooks/useLocalForage';

import expenses from '../../__tests__/mockExpensesData';

dayjs.extend(isBetween);

export default function TestComponent() {
  const [transactions, setTransactions] = useState([]);
  const [value, setValue, pending] = useLocalForage('stefan', expenses);

  useEffect(() => {
    console.log('useEffect: Getting localForage');
    setTransactions(value); // set application state
    console.table(value);

    const tx = transactions.filter((expense) => {
      const date = dayjs(expense.date);
      const startDate = dayjs('2022-01-01');
      const endDate = dayjs('2022-12-31');
      return date.isBetween(startDate, endDate);
    });
    console.log(tx.length);
    console.table(tx);
  }, []); // get localForage on first render

  useEffect(() => {
    console.log('useEffect: Updating localForage');
    setValue(transactions); // set localForage state
  }, [transactions]); // update localForage when application state changes

  // when adding an expense, must use the spread operator to add the new expense to the array
  // setTransactions([...transactions, newExpense]);
  // when deleting an expense, must filter out the expense to be deleted
  // setTransactions(transactions.filter((expense) => expense.id !== expenseId));
  // when editing an expense, must map through the array and replace the expense to be edited
  // setTransactions(
  //   transactions.map((expense) =>
  //     expense.id === expenseId ? { ...expense, ...newExpense } : expense
  //   )
  // );

  return (
    <div>
      {pending && <p>Loading...</p>}
      {transactions.map((expense) => (
        <div key={uuidv4()}>
          <p>{expense.description}</p>
          <p>{expense.amount}</p>
          <p>{expense.createdAt.toString()}</p>
          <p>{expense.currency}</p>
          <p>{expense.category}</p>
          <p>{expense.notes}</p>
          <p>{expense.convertedAmount}</p>
          <p>{expense.date.toString()}</p>
        </div>
      ))}
    </div>
  );
}
