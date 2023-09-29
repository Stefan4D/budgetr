import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

export default function Budgetr() {
  return (
    <>
      <TopNavBar />
      <Outlet />
    </>
  );
}
