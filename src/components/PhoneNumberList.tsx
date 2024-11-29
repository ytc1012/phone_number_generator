'use client';

import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

interface PhoneNumberListProps {
  numbers: string[];
  copiedIndex: number | null;
  copiedAll: boolean;
  onCopy: (index: number) => void;
  onCopyAll: () => void;
}

export default function PhoneNumberList({ 
  numbers, 
  copiedIndex, 
  copiedAll,
  onCopy,
  onCopyAll 
}: PhoneNumberListProps) {
  if (numbers.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CopyToClipboard text={numbers.join('\n')} onCopy={onCopyAll}>
          <button 
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {copiedAll ? (
              <>
                <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-600 mr-2" />
                Copied All
              </>
            ) : (
              <>
                <ClipboardDocumentIcon className="h-5 w-5 text-gray-500 mr-2" />
                Copy All
              </>
            )}
          </button>
        </CopyToClipboard>
      </div>

      {numbers.map((number, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-50 rounded-md p-4"
        >
          <span className="font-mono text-lg">{number}</span>
          <CopyToClipboard text={number} onCopy={() => onCopy(index)}>
            <button className="text-gray-600 hover:text-gray-900">
              {copiedIndex === index ? (
                <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-600" />
              ) : (
                <ClipboardDocumentIcon className="h-6 w-6" />
              )}
            </button>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  );
}