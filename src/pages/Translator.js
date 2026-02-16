import React, { useState } from 'react';
import { Languages, AlertCircle, ArrowLeftRight } from 'lucide-react';

export default function Translator() {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Old Saxon Translator
          </h1>
          <p className="text-red-200 text-lg">
            Translate between Old Saxon and modern languages
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
            The Translator tool is currently under development. This ambitious tool will provide 
            translation capabilities between Old Saxon and modern languages like English and German.
          </p>
          
          {/* Preview of what's coming */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Languages className="mr-2 text-red-400" size={24} />
              Planned Features
            </h3>
            <ul className="space-y-2 text-red-100">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Old Saxon ↔ Modern English translation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Old Saxon ↔ Modern German translation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Dictionary lookup with etymological information</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Word-by-word glossing option</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Context-aware translation suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Example sentences from the Hēliand and other texts</span>
              </li>
            </ul>
          </div>

          {/* Placeholder Translation Interface */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-red-100 font-medium mb-2 text-sm">
                Source language (preview only)
              </label>
              <div className="flex items-center space-x-2 mb-2">
                <select 
                  disabled
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white opacity-50 cursor-not-allowed"
                >
                  <option>Old Saxon</option>
                  <option>English</option>
                  <option>German</option>
                </select>
                <button 
                  disabled
                  className="p-2 bg-white/10 rounded-lg opacity-50 cursor-not-allowed"
                >
                  <ArrowLeftRight className="text-red-300" size={20} />
                </button>
                <select 
                  disabled
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white opacity-50 cursor-not-allowed"
                >
                  <option>English</option>
                  <option>Old Saxon</option>
                  <option>German</option>
                </select>
              </div>
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate..."
                disabled
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-red-300 opacity-50 cursor-not-allowed resize-none"
              />
            </div>

            <div>
              <label className="block text-red-100 font-medium mb-2 text-sm">
                Translation (preview only)
              </label>
              <textarea
                value={targetText}
                onChange={(e) => setTargetText(e.target.value)}
                placeholder="Translation will appear here..."
                disabled
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-red-300 opacity-50 cursor-not-allowed resize-none"
              />
            </div>
          </div>
        </div>

        {/* Sample Translations Preview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">Sample Translations</h3>
          <div className="space-y-3">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-red-200 mb-1">Old Saxon:</div>
              <div className="text-white font-medium mb-2">Ik bium thē hōld</div>
              <div className="text-red-200 mb-1">English:</div>
              <div className="text-white">I am loyal to you</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-red-200 mb-1">Old Saxon:</div>
              <div className="text-white font-medium mb-2">Thiu sunna skīnit</div>
              <div className="text-red-200 mb-1">English:</div>
              <div className="text-white">The sun shines</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
