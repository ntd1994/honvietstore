"use client";

import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="hidden md:flex items-center border rounded-md p-1 w-full max-w-md mx-4">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="flex-grow p-2 border-none outline-none text-sm"
      />
      <button
        className="bg-green-500 text-white p-2 rounded-md ml-2 text-sm whitespace-nowrap"
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;