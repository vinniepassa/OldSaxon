# OldSaxon

A collection of tools for processing the **Old Saxon** (Old Low German) language. These utilities are intended to support work in **comparative linguistics**, **historical phonology**, and **morphological analysis**.

---

# Old Saxon to IPA Converter

A modern web application for converting standardized Old Saxon orthography into IPA (International Phonetic Alphabet) transcriptions with real-time conversion and an intuitive user interface.

![Language](https://img.shields.io/badge/language-Old%20Saxon-blue)
![Framework](https://img.shields.io/badge/framework-React-61dafb)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 Overview

This tool provides accurate phonetic transcriptions of Old Saxon (Old Low German) words based on established linguistic research. It features a beautiful, modern interface with real-time conversion, making it useful for linguists, students, and anyone interested in historical Germanic languages.

### Features

- ✨ **Real-time conversion** as you type
- 📋 **One-click copy** to clipboard
- 📚 **Conversion history** tracking
- 🎯 **Pre-loaded examples** for quick testing
- 📱 **Responsive design** for mobile and desktop
- 🎨 **Modern, intuitive UI** with glassmorphic design

## 🎓 Potential Use Cases

- **Phonological comparison** with other Germanic languages
- **Supporting linguistic reconstruction** work
- **Teaching and linguistic visualization** in academic settings
- **Research** into historical phonology and sound changes
- **Digital humanities projects** involving Old Saxon texts

## 📚 Linguistic Foundation

### Conversion Rules Based On:

- [Old Saxon phonology — Wikipedia](https://en.wikipedia.org/wiki/Old_Saxon_phonology)
- Manganella, G. (1976). *L'anglosassone e il sassone antico: Grammatica*. Napoli: Liguori

### Orthographic Standardization Reference:

- Tiefenbach, H. (2010). *Altsächsisches Handwörterbuch / A Concise Old Saxon Dictionary*. De Gruyter

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

#### Option 1: Vite (Recommended - Fastest)

```bash
# Create a new Vite project
npm create vite@latest old-saxon-ipa -- --template react
cd old-saxon-ipa

# Install dependencies
npm install
npm install lucide-react

# Replace src/App.jsx with phonetic-converter.jsx
# (Copy the phonetic-converter.jsx file to src/App.jsx)

# Start the development server
npm run dev
```

Open your browser to `http://localhost:5173`

#### Option 2: Create React App

```bash
# Create a new React app
npx create-react-app old-saxon-ipa
cd old-saxon-ipa

# Install dependencies
npm install lucide-react

# Install and configure Tailwind CSS
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

**Configure Tailwind** by updating `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Add Tailwind directives** to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Replace `src/App.js`** with the `phonetic-converter.jsx` file and run:

```bash
npm start
```

Open your browser to `http://localhost:3000`

#### Option 3: Try Online (No Installation)

**CodeSandbox:**
1. Go to [codesandbox.io/s/new](https://codesandbox.io/s/new)
2. Choose "React" template
3. Install `lucide-react` in the dependencies panel
4. Paste the code into `App.jsx`

**StackBlitz:**
1. Go to [stackblitz.com/fork/react](https://stackblitz.com/fork/react)
2. Follow the same steps as CodeSandbox

## 📝 Usage

### Basic Conversion

1. Type or paste an Old Saxon word in the input field
2. The IPA transcription appears automatically below
3. Click the copy button to copy the result to your clipboard
4. Press "Add to History" to save the conversion

### Using Examples

Click any of the pre-loaded example words to see their transcription instantly:
- `werthan` → `wɛrθɑn`
- `thū` → `θu:`
- `kuning` → `kʊnɪŋk`
- `wesan` → `wɛzɑn`

### Viewing History

All converted words are saved in the history section, allowing you to:
- Review previous conversions
- Copy any historical result
- Clear the entire history with one click

## 🔧 Conversion Rules

The converter implements comprehensive Old Saxon phonological rules:

### Consonants

- **Gemination**: Double consonants → lengthened (e.g., `tt` → `t:`)
- **th → θ**: Voiceless dental fricative
- **c palatalization**: `c` before front vowels → `ts`, otherwise → `k`
- **f voicing**: Between vowels or before `d` → `v`
- **g allophony**: 
  - Word-final → `x` (or `k` after nasals)
  - Before front vowels → `ʝ`
  - Elsewhere → `ɣ`
- **Velar nasal**: `n` before velars → `ŋ`
- **Intervocalic voicing**: `f`, `θ`, `s` between vowels → `v`, `ð`, `z`
- **Final devoicing**: Voiced fricatives at word end → voiceless

### Vowels

- **Short vowels**: `a` → `ɑ`, `e` → `ɛ`, `i` → `ɪ`, `o` → `ɔ`, `u` → `ʊ`
- **Long vowels**: `ā` → `ɑ:`, `ē` → `e:`, `ī` → `i:`, `ō` → `o:`, `ū` → `u:`
- **Diphthongs**: `ai` → `ɛ:`, `au` → `ɔ:`

### Special Rules

- **Verbal prefix**: `bi` before `f` is handled specially
- **Final s**: Word-final `s` → apical `s̺`
- **qu**: `qu` before `u` → `kw`

## 🛠️ Customization

### Modifying Conversion Rules

All phonological rules are contained in the `toIPA` function. Key sections:

- **Lines 20-22**: Diphthong replacement
- **Lines 24-26**: Geminate consonants
- **Lines 38-45**: Vowel mapping
- **Lines 48-97**: Consonant mappings and contextual rules
- **Lines 100-106**: Intervocalic voicing
- **Lines 109-118**: Final devoicing

## 📊 Example Conversions

| Old Saxon | IPA | Meaning |
|-----------|-----|---------|
| werthan | wɛrθɑn | to become |
| thū | θu: | you |
| kuning | kʊnɪŋk | king |
| wesan | wɛzɑn | to be |
| lahs | lɑxs̺ | salmon |
| bifelhan | bɪfɛlhɑn | to command |
| naht | nɑxt | night |
| hluttar | hlʊt:ɑr | clear, pure |
| sah | s̺ɑx | saw (verb) |
| fāhan | fɑ:hɑn | to seize |
| brōthar | bro:ðɑr | brother |
| hēliand | he:lɪɑnd | savior |

## 🏗️ Project Structure

```
old-saxon-ipa/
├── src/
│   ├── App.jsx              # Main component
│   ├── index.css            # Tailwind directives
│   └── main.jsx             # React entry point
├── public/
├── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Areas for improvement:

- Additional phonological rules or edge cases
- Support for dialectal variations
- Batch conversion of multiple words
- Export functionality (CSV, JSON)
- Phonetic feature analysis
- Audio pronunciation generation

## 📄 License

This project is available under the MIT License. Feel free to use, modify, and distribute as needed.

## 📚 References

### Primary Sources

1. **Wikipedia Contributors**. "Old Saxon phonology." *Wikipedia, The Free Encyclopedia*. [https://en.wikipedia.org/wiki/Old_Saxon_phonology](https://en.wikipedia.org/wiki/Old_Saxon_phonology)

2. **Manganella, G.** (1976). *L'anglosassone e il sassone antico: Grammatica*. Napoli: Liguori.

3. **Tiefenbach, H.** (2010). *Altsächsisches Handwörterbuch / A Concise Old Saxon Dictionary*. Berlin/New York: De Gruyter.

### Additional Reading

- Gallée, J. H. (1993). *Altsächsische Grammatik*. Tübingen: Niemeyer.
- Holthausen, F. (1921). *Altsächsisches Elementarbuch*. Heidelberg: Winter.
- Ramat, P. (1981). *Einführung in das Germanische*. Tübingen: Niemeyer.

## 🙏 Acknowledgments

This tool builds upon decades of scholarly work in Germanic philology and historical linguistics. Special thanks to the linguists and researchers who have documented Old Saxon phonology and orthography.

## 📧 Contact

For questions, suggestions, or issues, please open an issue on the GitHub repository.

---

**Note**: This is a scholarly tool based on reconstructed phonology. Actual Old Saxon pronunciation varied by time, place, and individual speakers. The transcriptions represent standardized reconstructions based on comparative linguistics and manuscript evidence.

---

## `osx-declinator` (Planned)

**Purpose:**  
Tool for generating noun declensions in Old Saxon.  
**Status:** To be implemented.

---

## `osx-verb-conjugator` (Planned)

**Purpose:**  
Tool for generating verb conjugations (strong/weak classes) in Old Saxon.  
**Status:** To be implemented.

---

## Repository Goals

- Develop a suite of tools for automated analysis of Old Saxon texts
- Enable linguistic modeling and phonological/morphological parsing
- Build a foundation for computational historical linguistics in West Germanic studies