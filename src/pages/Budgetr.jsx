import React from 'react';
import { Link } from 'react-router-dom';
import TestComponent from '../components/DB';

export default function Budgetr() {
  return (
    <>
      <div>Hello Budgetr</div>
      <TestComponent />
      <Link className="mr-2" to="/">
        Go to Home
      </Link>
      <Link className="mr-2" to="/app/add">
        Go to App/add
      </Link>
      <Link className="mr-2" to="/app/modify">
        Go to App/modify
      </Link>
      <Link className="mr-2" to="/app/view">
        Go to App/view
      </Link>
      <Link className="mr-2" to="/app/dashboard">
        Go to App/dashboard
      </Link>
    </>
  );
}
