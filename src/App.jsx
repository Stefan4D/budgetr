import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Budgetr from './pages/Budgetr';
import AddExpense from './pages/AddExpense';
import ModifyExpense from './pages/ModifyExpense';
import ViewExpenses from './pages/ViewExpenses';
import Dashboard from './pages/Dashboard';

function App() {
  console.log(window.location);
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Budgetr />} />
        {/* 
        Routes commencing with /app will include the content from the above route at present unless we use exact.
        Not using exact at moment to allow workaround for nested routes, which aren't working right now 
        */}
        <Route path="/addExpense" element={<AddExpense />} />
        <Route path="/modifyExpense" element={<ModifyExpense />} />
        <Route path="/viewExpenses" element={<ViewExpenses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
