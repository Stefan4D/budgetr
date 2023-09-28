import React from 'react';
import { Link } from 'react-router-dom';

export default function Budgetr() {
  return (
    <>
      <div>Hello Budgetr</div>
      <Link className="mr-2" to="/">
        Go to Home
      </Link>
      <Link className="mr-2" to="/addExpense">
        Go to App/add
      </Link>
      <Link className="mr-2" to="/modifyExpense">
        Go to App/modify
      </Link>
      <Link className="mr-2" to="/viewExpenses">
        Go to App/view
      </Link>
      <Link className="mr-2" to="/dashboard">
        Go to App/dashboard
      </Link>
    </>
  );
}
