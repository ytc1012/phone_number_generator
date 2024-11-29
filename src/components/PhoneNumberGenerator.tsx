'use client';

import React, { useState } from 'react';
import CountrySelect from './CountrySelect';
import CountSelect from './CountSelect';
import FormatRule from './FormatRule';
import PhoneNumberList from './PhoneNumberList';
import { countryRules } from '../utils/phoneRules';
import { generatePhoneNumbers } from '../utils/generatePhoneNumber';

export default function PhoneNumberGenerator() {
  const [selectedCountry, setSelectedCountry] = useState(countryRules[0].country);
  const [count, setCount] = useState('1');
  const [includeCountryCode, setIncludeCountryCode] = useState(true);
  const [generatedNumbers, setGeneratedNumbers] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const handleGenerate = () => {
    const numbers = generatePhoneNumbers(selectedCountry, parseInt(count));
    if (!includeCountryCode) {
      const countryCode = countryRules.find(r => r.country === selectedCountry)?.code || '';
      setGeneratedNumbers(numbers.map(num => num.replace(countryCode, '')));
    } else {
      setGeneratedNumbers(numbers);
    }
  };

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Phone Number Generator
          </h1>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <CountrySelect 
                value={selectedCountry} 
                onChange={setSelectedCountry} 
              />
              <CountSelect 
                value={count} 
                onChange={setCount} 
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeCountryCode"
                checked={includeCountryCode}
                onChange={(e) => setIncludeCountryCode(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="includeCountryCode" className="ml-2 block text-sm text-gray-900">
                Include country code
              </label>
            </div>

            <FormatRule country={selectedCountry} />

            <button
              onClick={handleGenerate}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Generate Numbers
            </button>

            {generatedNumbers.length > 0 && (
              <PhoneNumberList 
                numbers={generatedNumbers}
                copiedIndex={copiedIndex}
                copiedAll={copiedAll}
                onCopy={handleCopy}
                onCopyAll={handleCopyAll}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}