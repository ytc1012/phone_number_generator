'use client';

import React from 'react';

interface CountSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CountSelect({ value, onChange }: CountSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Number of Phone Numbers
      </label>
      <select
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}