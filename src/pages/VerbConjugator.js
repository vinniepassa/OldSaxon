import React, { useState } from 'react';
import { Repeat, AlertCircle } from 'lucide-react';

export default function VerbConjugator() {
  const [verb, setVerb] = useState('');

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Old Saxon Verb Conjugator
          </h1>
          <p className="text-red-200 text-lg">
            Generate full conjugation tables for Old Saxon verbs
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
            The Verb Conjugator tool is currently under development. This tool will provide 
            complete conjugation tables for Old Saxon verbs across all tenses, moods, persons, 
            and numbers.
          </p>
          
          {/* Preview of what's coming */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Repeat className="mr-2 text-red-400" size={24} />
              Planned Features
            </h3>
            <ul className="space-y-2 text-red-100">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Strong verb conjugations (7 ablaut classes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Weak verb conjugations (3 classes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Preterite-present verbs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Present and preterite tenses</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Indicative, subjunctive, and imperative moods</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>All persons (1st, 2nd, 3rd) and numbers (singular, plural)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Infinitive and participle forms</span>
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
              value={verb}
              onChange={(e) => setVerb(e.target.value)}
              placeholder="Enter an Old Saxon verb infinitive..."
              disabled
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-red-300 opacity-50 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Example Verbs Preview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">Example Verbs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['helpan (to help)', 'werdan (to become)', 'gangan (to go)', 
              'wesan (to be)', 'habbian (to have)', 'saggan (to say)'].map((verb, idx) => (
              <div 
                key={idx}
                className="bg-white/5 rounded-lg p-3 border border-white/10 text-center"
              >
                <span className="text-red-100 text-sm">{verb}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
