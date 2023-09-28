import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute left-2 top-1 inline-flex items-center p-2">
        <FaSearch className="text-gray-400" />
      </div>
      <input
        className="focus:shadow-outline h-10 w-full rounded-full border py-1 pl-10 pr-4 text-base placeholder-gray-500"
        type="search"
        placeholder="Search..."
      />
    </div>
  );
}
