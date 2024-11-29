'use client';

import React from 'react';
import { countryRules } from '../utils/phoneRules';

interface FormatRuleProps {
  country: string;
}

export default function FormatRule({ country }: FormatRuleProps) {
  const rule = countryRules.find(r => r.country === country);
  
  if (!rule) return null;

  return (
    <div className="bg-gray-50 rounded-md p-4">
      <h3 className="text-sm font-medium text-gray-700">Format Rule:</h3>
      <p className="mt-1 text-sm text-gray-600">{rule.description}</p>
    </div>
  );
}