import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, Type, Table, Languages, Repeat } from 'lucide-react';
import About from './pages/About';
import IPAConverter from './pages/IPAConverter';
import NounDeclinator from './pages/NounDeclinator';
import VerbConjugator from './pages/VerbConjugator';
import Translator from './pages/Translator';

function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'About', icon: BookOpen },
    { path: '/ipa-converter', label: 'IPA Converter', icon: Type },
    { path: '/noun-declinator', label: 'Noun Declinator', icon: Table },
    { path: '/verb-conjugator', label: 'Verb Conjugator', icon: Repeat },
    { path: '/translator', label: 'Translator', icon: Languages },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="text-red-400" size={28} />
            <span className="text-white font-bold text-xl hidden sm:block">Old Saxon Tools</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-red-500/30 text-white'
                      : 'text-red-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden md:block text-sm font-medium">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/ipa-converter" element={<IPAConverter />} />
          <Route path="/noun-declinator" element={<NounDeclinator />} />
          <Route path="/verb-conjugator" element={<VerbConjugator />} />
          <Route path="/translator" element={<Translator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
