import React, { useState, useEffect } from 'react';
import { Copy, Check, Trash2, ArrowRight, X } from 'lucide-react';

// Phoneme categories
const nasals = ['m', 'n'];
const plosives = ['p', 'b', 't', 'd', 'k', 'g'];
const fricatives = ['f', 'v', 'ƀ', 'θ', 'ð', 'đ', 'ɣ', 'x', 'h'];
const voicedFricatives = ['v', 'ƀ', 'ð', 'đ', 'ɣ'];
//const voicelessFricatives = ['f', 'θ', 'x'];
const sibilants = ['s', 'z'];
const approximants = ['w', 'l', 'j'];
const rhotic = ['r'];
const voicelessCons = ['p','t','k','f','θ','s','x','h'];

const consonants = [...nasals, ...plosives, ...fricatives, ...sibilants, ...approximants, ...rhotic];

const frontVowels = {'e': 'ɛ', 'ê': 'ɛ:', 'ē': 'e:', 'i': 'ɪ', 'ī': 'i:', 'î': 'i:'};
const backVowels = {'a': 'ɑ', 'ā': 'ɑ:', 'â': 'ɑ:', 'o': 'ɔ', 'ô': 'ɔ:', 'ō': 'o:', 'u': 'ʊ', 'ū': 'u:', 'û': 'u:'};
const diphthongs = {'ai': 'ɛ:', 'au': 'ɔ:'};

function toIPA(word) {
  word = word.toLowerCase().replace(/[0-9]/g, '');

  word = word.replace(/uuu/g, 'uw');
  word = word.replace(/^uu(?=[aeiouāēīōūâêîôûė])/g, 'w');
  word = word.replace(/^uu(?=[bcdfghjklmnpqrstvwxzθðƀđɣ])/g, 'wu');
  word = word.replace(/([aeiouāēīōūâêîôûė])uu(?=[aeiouāēīōūâêîôûė])/g, '$1w');
  word = word.replace(/uu(?=[bcdfghjklmnpqrstvwxzθðƀđɣ][aeiouāēīōūâêîôûė])/g, 'w');
  word = word.replace(/uu(?=[bcdfghjklmnpqrstvwxzθðƀđɣ]{2})/g, 'wu');
  word = word.replace(/([bcdfghjklmnpqrstvwxzθðƀđɣ])uu(?=[aeiouāēīōūâêîôûėäëïöü])/g, '$1w');

  // Normalize characters
  word = word.replace(/c/g, 'k')
  word = word.replace(/ė/g, 'e')
  word = word.replace(/ƀ/g, 'v');
  word = word.replace(/đ/g, 'ð');
  word = word.replace(/th/g, 'θ');

  for (let [latin, ipa] of Object.entries(diphthongs)) {
    word = word.replace(new RegExp(latin, 'g'), ipa);
  }

  ['b', 'd', 'f', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'g'].forEach(cons => {
    word = word.replace(new RegExp(cons + cons, 'g'), cons + ':');
  });

  let chars = word.split('');
  let prefix = false;

  // Check if word STARTS with "bif" (prefix should only be at the beginning)
  if (chars.length >= 3 && chars[0] === 'b' && chars[1] === 'i' && chars[2] === 'f') {
    prefix = true;
    chars.splice(0, 2); // Remove 'b' and 'i', keep 'f'
  }

  chars = chars.map(ch => {
    if (ch in frontVowels) return frontVowels[ch];
    if (ch in backVowels) return backVowels[ch];
    return ch;
  });

  let i = 0;
  while (i < chars.length) {
    const ch = chars[i];
    const prev = i > 0 ? chars[i - 1] : '';
    const nxt = i + 1 < chars.length ? chars[i + 1] : '';

    if (ch === 'c') {
      const frontVowelValues = Object.values(frontVowels);
      if (frontVowelValues.includes(nxt) || ['ɪ', 'i:', 'ɛ', 'ɛ:'].includes(nxt)) {
        chars[i] = 'ts';
      } else {
        chars[i] = 'k';
      }
    } else if (ch === 'f') {
      const allVowels = [...Object.values(frontVowels), ...Object.values(backVowels)];
      if (nxt === 'd' || (allVowels.includes(prev) && allVowels.includes(nxt))) {
        chars[i] = 'v';
      }
    } else if (ch === 'g') {
      if (i === chars.length - 1) {
        if (prev === 'n' || prev === 'ŋ') {
          chars[i] = 'k';
        } else {
          chars[i] = 'x';
        }
      } else if (prev === 'ŋ') {
        chars[i] = 'g';
      } else if (Object.values(frontVowels).includes(nxt)) {
        chars[i] = 'ʝ';
      } else {
        chars[i] = 'ɣ';
      }
    } else if (ch === 'h') {
      if (i !== 0 && consonants.includes(nxt) && nxt !== 'h') {
        chars[i] = 'x';
      }
    } else if (ch === 'j') {
      chars[i] = 'ʝ';
    } else if (ch === 'n' && ['g', 'k', 'ɣ'].includes(nxt)) {
      chars[i] = 'ŋ';
    } else if (ch === 'q' && nxt === 'ʊ') {
      chars[i] = 'kw';
      chars.splice(i + 1, 1);
    } else if (ch === 'θ' && nxt === 'd') {
      chars[i] = 'ð';
    }
    i++;
  }

  const allVowels = new Set([...Object.values(frontVowels), ...Object.values(backVowels)]);
  for (let i = 1; i < chars.length - 1; i++) {
    if (['f', 'θ', 's'].includes(chars[i]) && allVowels.has(chars[i - 1]) && allVowels.has(chars[i + 1])) {
      if (chars[i] === 'f') chars[i] = 'v';
      else if (chars[i] === 'θ') chars[i] = 'ð';
      else if (chars[i] === 's') chars[i] = 'z';
    }
  }

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const nxt = i + 1 < chars.length ? chars[i + 1] : '';
    if (voicedFricatives.includes(ch)) {
      if (i === chars.length - 1 || voicelessCons.includes(nxt)) {
        if (ch === 'v') chars[i] = 'f';
        else if (ch === 'ð') chars[i] = 'θ';
        else if (ch === 'ɣ') chars[i] = 'x';
      }
    }
  }

  i = 0;
  while (i < chars.length - 1) {
    if (chars[i] === 'v' && chars[i + 1] === 'v') {
      chars[i] = 'b:';
      chars.splice(i + 1, 1);
    } else if (chars[i] === 'ɣ' && chars[i + 1] === 'ɣ') {
      chars[i] = 'g:';
      chars.splice(i + 1, 1);
    } else if (chars[i] === 'x' && chars[i + 1] === 'x') {
      chars[i] = 'x:';
      chars.splice(i + 1, 1);
    }
    i++;
  }

  chars = chars.map(c => c === 's' ? 's̺' : c);

  if (prefix) {
    chars.unshift('bɪ');
  }

  return chars.join('');
}

function processText(text) {
  // Remove digits first
  text = text.replace(/[0-9]/g, '');
  
  // Split on whitespace and punctuation, but preserve them
  const tokens = text.split(/(\s+|[.,·;:!?'\[\]()]+)/);
  
  return tokens.map(token => {
    // Only process tokens that are actual words (not whitespace/punctuation)
    if (/^[a-zA-Zāēīōūâêîôûėäëïöüƀđθðɣ]+$/.test(token)) {
      return toIPA(token);
    }
    return token;
  }).join('');
}

export default function PhoneticConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  const examples = [
    'werthan', 'thū', 'kuning', 'wesan', 'lahs', 
    'bifelhan', 'naht', 'hluttar', 'sah', 'fāhan', 
    'brōthar', 'hēliand'
  ];

  useEffect(() => {
    if (input.trim()) {
      const result = processText(input.trim());
      setOutput(result);
    } else {
      setOutput('');
    }
  }, [input]);

  const handleConvert = () => {
    if (input.trim() && output) {
      const newEntry = { input: input.trim(), output };
      setHistory(prev => [newEntry, ...prev.slice(0, 9)]);
      setInput('');
      setOutput('');
    }
  };

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExampleClick = (example) => {
    setInput(example);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Old Saxon IPA Converter
          </h1>
          <p className="text-purple-200 text-lg">
            Convert Old Saxon orthography to phonetic transcription
          </p>
        </div>

        {/* Main Converter Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 mb-6">
          <div className="space-y-6">
            {/* Input Section */}
            <div>
              <label className="block text-purple-100 font-medium mb-2 text-sm">
                Old Saxon text
              </label>
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleConvert()}
                  placeholder="Enter Old Saxon text (max. 500 characters)"
                  maxLength={500}
                  rows={1}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg pr-12 resize-none overflow-hidden"
                  style={{ minHeight: '3rem' }}
                  onInput={(e) => {
                    e.target.style.height = '3rem';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                />
                {input && (
                  <button
                    onClick={() => setInput('')}
                    className="absolute right-2 top-3 p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Clear input"
                  >
                    <X className="text-purple-200" size={20} />
                  </button>
                )}
              </div>
              <div className="text-right text-xs text-purple-200 mt-1">
                {input.length}/500
              </div>
            </div>

            {/* Arrow */}
            {output && (
              <div className="flex justify-center">
                <ArrowRight className="text-purple-300" size={32} />
              </div>
            )}

            {/* Output Section */}
            {output && (
              <div>
                <label className="block text-purple-100 font-medium mb-2 text-sm">
                  IPA transcription
                </label>
                <div className="relative">
                  <div className="w-full px-4 py-3 bg-purple-500/30 border border-purple-400/50 rounded-lg text-white text-2xl font-mono break-words min-h-[3rem]">
                    {output}
                  </div>
                  <button
                    onClick={() => handleCopy(output)}
                    className="absolute right-2 top-3 p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="text-green-300" size={20} />
                    ) : (
                      <Copy className="text-purple-200" size={20} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              disabled={!input.trim()}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              Add to History
            </button>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Examples</h2>
          <div className="flex flex-wrap gap-2">
            {examples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => handleExampleClick(example)}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-purple-100 rounded-lg transition-colors text-sm"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Conversion History</h2>
              <button
                onClick={clearHistory}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Clear history"
              >
                <Trash2 className="text-purple-200" size={20} />
              </button>
            </div>
            <div className="space-y-3">
              {history.map((entry, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-purple-200 font-medium">{entry.input}</span>
                    <ArrowRight className="text-purple-400" size={20} />
                    <span className="text-white font-mono text-lg">{entry.output}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(entry.output)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors ml-4"
                  >
                    <Copy className="text-purple-200" size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}