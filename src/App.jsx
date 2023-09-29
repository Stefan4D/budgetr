import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Budgetr from './pages/Budgetr';
import AddExpense from './pages/AddExpense';
import ModifyExpense from './pages/ModifyExpense';
import ViewExpenses from './pages/ViewExpenses';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Budgetr />}>
          {/* Adjust this to be the 'home' route for the app */}
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/add" element={<AddExpense />} />
          <Route path="/app/modify" element={<ModifyExpense />} />
          <Route path="/app/view" element={<ViewExpenses />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
