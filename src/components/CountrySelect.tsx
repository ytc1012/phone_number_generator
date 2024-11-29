'use client';

import React from 'react';
import { countryRules } from '../utils/phoneRules';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Select Country
      </label>
      <select
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {countryRules.map((rule) => (
          <option key={rule.country} value={rule.country}>
            {rule.country} ({rule.code})
          </option>
        ))}
      </select>
    </div>
  );
}