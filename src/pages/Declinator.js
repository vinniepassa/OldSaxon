import React, { useState } from 'react';
import { Table, AlertCircle } from 'lucide-react';

export default function NounDeclinator() {
  const [noun, setNoun] = useState('');

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Old Saxon Declinator
          </h1>
          <p className="text-red-200 text-lg">
            Generate full declension tables for Old Saxon nouns
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 mb-6">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="text-yellow-400" size={64} />
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Coming Soon
          </h2>
          <p className="text-red-100 text-center text-lg mb-6">
            The Declinator tool is currently under development. This tool will allow you to 
            generate complete declension tables for Old Saxon nouns across all cases, numbers, and 
            genders.
          </p>
          
          {/* Preview of what's coming */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Table className="mr-2 text-red-400" size={24} />
              Planned Features
            </h3>
            <ul className="space-y-2 text-red-100">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Support for strong and weak noun declensions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>All three genders (masculine, feminine, neuter)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Four cases: nominative, accusative, genitive, dative</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Singular and plural forms</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Common noun examples and paradigms</span>
              </li>
            </ul>
          </div>

          {/* Placeholder Input */}
          <div className="mt-6">
            <label className="block text-red-100 font-medium mb-2 text-sm">
              Try it out (preview only)
            </label>
            <input
              type="text"
              value={noun}
              onChange={(e) => setNoun(e.target.value)}
              placeholder="Enter an Old Saxon noun..."
              disabled
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-red-300 opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
