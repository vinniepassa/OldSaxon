import React from 'react';
import { ArrowRight, BookOpen, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="text-red-400" size={40} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Old Saxon Tools
            </h1>
          </div>
          <p className="text-red-100 text-lg leading-relaxed">
            A comprehensive digital toolkit for studying and working with the Old Saxon language, 
            featuring phonetic conversion, grammatical analysis, and translation tools.
          </p>
        </div>

        {/* About Old Saxon */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
            <Globe className="mr-3 text-red-400" size={32} />
            About Old Saxon
          </h2>
          <div className="space-y-4 text-red-100 leading-relaxed">
            <p>
              Old Saxon (also called Old Low German) was a West Germanic language spoken in what is now 
              northern Germany and the northeastern Netherlands from roughly the 8th to 12th centuries. 
              It is the ancestor of modern Low German dialects and is closely related to Old English, 
              Old Frisian, and Old Dutch.
            </p>
            <p>
              The most significant surviving text in Old Saxon is the <em>Hēliand</em> (meaning "Savior"), 
              an epic poem from the 9th century that retells the Gospel narrative in alliterative verse, 
              adapting Christian themes to Germanic warrior culture. Other important texts include the <em>Genesis</em> 
              fragment and various shorter religious and legal documents.
            </p>
            <p>
              Old Saxon is particularly valuable to linguists studying the development of Germanic languages, 
              as it preserves many archaic features and provides insights into the common West Germanic 
              linguistic heritage shared with Old English and Old High German.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
            <Calendar className="mr-3 text-red-400" size={32} />
            Linguistic Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Phonology</h3>
              <p className="text-red-100 text-sm">
                Old Saxon retained many Proto-Germanic consonants and had a rich vowel system 
                with length distinctions and diphthongs.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Grammar</h3>
              <p className="text-red-100 text-sm">
                Features complex inflectional morphology with four cases (nominative, accusative, 
                genitive, dative), three genders, and strong/weak noun declensions.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Verbs</h3>
              <p className="text-red-100 text-sm">
                Verb system with strong (ablaut) and weak (dental suffix) conjugations, 
                plus preterite-present and irregular verbs.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Vocabulary</h3>
              <p className="text-red-100 text-sm">
                Predominantly Germanic vocabulary with some Latin borrowings from 
                Christianization and cultural contact.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Available */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">Available Tools</h2>
          <div className="space-y-4">
            <Link to="/ipa-converter" className="block">
              <div className="bg-white/5 hover:bg-white/10 rounded-lg p-6 border border-white/10 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">IPA Converter</h3>
                    <p className="text-red-100">
                      Convert Old Saxon orthography to International Phonetic Alphabet transcription
                    </p>
                  </div>
                  <ArrowRight className="text-red-400 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
              </div>
            </Link>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 opacity-60">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Declinator</h3>
                  <p className="text-red-100">Coming soon: Generate full declension tables for Old Saxon nouns</p>
                </div>
                <span className="text-red-300 text-sm font-medium">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10 opacity-60">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Conjugator</h3>
                  <p className="text-red-100">Coming soon: Full conjugation tables for strong and weak verbs</p>
                </div>
                <span className="text-red-300 text-sm font-medium">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10 opacity-60">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Translator</h3>
                  <p className="text-red-100">Coming soon: Translate between Old Saxon and modern languages</p>
                </div>
                <span className="text-red-300 text-sm font-medium">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 text-center">
          <p className="text-red-100 text-sm">
            This is an educational resource for students and scholars of Old Saxon and historical linguistics.
          </p>
        </div>
      </div>
    </div>
  );
}
