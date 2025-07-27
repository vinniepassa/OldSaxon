import re

# Define phoneme categories
nasals = ['m', 'n']
plosives = ['p', 'b', 't', 'd', 'k', 'g']
fricatives = ['f', 'v', 'θ', 'ð', 'ɣ', 'x', 'h']
voiced_fricatives = ['v', 'ð', 'ɣ']
voiceless_fricatives = ['f', 'θ', 'x']
sibilants = ['s', 'z']
approximants = ['w', 'l', 'j']
rhotic = ['r']
voiceless_cons = ['p','t','k','f','θ','s','x','h']

consonants = nasals + plosives + fricatives + sibilants + approximants + rhotic

# Vowel maps
front_vowels = {'e': 'ɛ', 'ê': 'ɛ:', 'ē': 'e:', 'i': 'ɪ', 'ī': 'i:'}
back_vowels = {'a': 'ɑ', 'ā': 'ɑ:', 'o': 'ɔ', 'ô': 'ɔ:', 'ō': 'o:', 'u': 'ʊ', 'ū': 'u:'}
diphthongs = {'ai': 'ɛ:', 'au': 'ɔ:'}

def to_ipa(word):
    # Step 0: th → θ
    word = word.replace('th', 'θ')

    # Step 1: Diphthong replacement
    for latin, ipa in diphthongs.items():
        word = word.replace(latin, ipa)

    # Step 2: Geminates
    for cons in ['b', 'd', 'f', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'g']:
        word = word.replace(cons * 2, cons + ':')

    # Step 3: Convert to character list
    chars = list(word)
    prefix = False

    # Step 4: Handle verbal prefix 'bi' before 'f'
    for i in range(len(chars) - 2):
        if chars[i] == 'b' and chars[i + 1] == 'i' and chars[i + 2] == 'f':
            prefix = True
            del chars[i:i + 2]
            break

    # Step 5: Vowel mapping
    for i, ch in enumerate(chars):
        if ch in front_vowels:
            chars[i] = front_vowels[ch]
        elif ch in back_vowels:
            chars[i] = back_vowels[ch]

    # Step 6: Consonant mappings
    i = 0
    while i < len(chars):
        ch = chars[i]
        prev = chars[i - 1] if i > 0 else ''
        nxt = chars[i + 1] if i + 1 < len(chars) else ''

        if ch == 'c':
            if nxt in front_vowels.values() or nxt in ['ɪ', 'i:', 'ɛ', 'ɛ:']:
                chars[i] = 'ts'
            else:
                chars[i] = 'k'
        elif ch == 'f':
            if nxt == 'd' or (prev in front_vowels.values() or prev in back_vowels.values()) and (nxt in front_vowels.values() or nxt in back_vowels.values()):
                chars[i] = 'v'
        elif ch == 'g':
            if i == len(chars) - 1:
                if prev in ['n', 'ŋ']:
                    chars[i] = 'k'
                else:
                    chars[i] = 'x'
            elif prev == 'ŋ':
                chars[i] = 'g'
            elif nxt in front_vowels.values():
                chars[i] = 'ʝ'
            else:
                chars[i] = 'ɣ'
        elif ch == 'h':
            if i != 0 and nxt in consonants and nxt != 'h':
                chars[i] = 'x'
        elif ch == 'j':
            chars[i] = 'ʝ'
        elif ch == 'n' and nxt in ['g', 'k', 'ɣ']:
            chars[i] = 'ŋ'
        elif ch == 'q' and nxt == 'ʊ':
            chars[i] = 'kw'
            chars.pop(i + 1)
        elif ch == 'θ' and nxt == 'd':
            chars[i] = 'ð'
        i += 1

    # Step 7: Voicing of fricatives between vowels
    all_vowels = set(front_vowels.values()).union(set(back_vowels.values()))
    for i in range(1, len(chars) - 1):
        if chars[i] in ('f', 'θ', 's') and chars[i - 1] in all_vowels and chars[i + 1] in all_vowels:
            if chars[i] == 'f':
                chars[i] = 'v'
            elif chars[i] == 'θ':
                chars[i] = 'ð'
            elif chars[i] == 's':
                chars[i] = 'z'

    # Step 8: Devoicing of fricatives at word end or before voiceless consonants
    for i in range(len(chars)):
        ch = chars[i]
        nxt = chars[i + 1] if i + 1 < len(chars) else ''
        if ch in voiced_fricatives:
            if i == len(chars) - 1 or nxt in voiceless_cons:
                if ch == 'v':
                    chars[i] = 'f'
                elif ch == 'ð':
                    chars[i] = 'θ'
                elif ch == 'ɣ':
                    chars[i] = 'x'

    # Step 9: Geminated fricatives become stops or lengthened
    i = 0
    while i < len(chars) - 1:
        if chars[i] == chars[i + 1] == 'v':
            chars[i] = 'b:'
            chars[i + 1] = ''
        elif chars[i] == chars[i + 1] == 'ɣ':
            chars[i] = 'g:'
            chars[i + 1] = ''
        elif chars[i] == chars[i + 1] == 'x':
            chars[i] = 'x:'
            chars[i + 1] = ''
        i += 1

    # Remove empty elements (from geminate collapse)
    chars = [c for c in chars if c != '']

    # Step 10: Final s → s̺
    chars = ['s̺' if c == 's' else c for c in chars]

    # Step 11: Re-add 'bi' prefix if flagged
    if prefix:
        chars.insert(0, 'bɪ')

    return ''.join(chars)


# Example usage
inputs = ['werthan', 'thū', 'kuning', 'wesan', 'lahs', 'bifelhan', 'naht', 'hluttar', 'sah', 'fāhan', 'brōthar', 'hēliand']

for word in inputs:
    print(word, '→', to_ipa(word))