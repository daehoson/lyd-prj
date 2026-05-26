/**
 * ============================================================
 * Phonics Dictionary - Complete Phonics Patterns & Word Lists
 * ============================================================
 * Comprehensive database of phonics sounds with example words
 * Organized by learning phase and pattern type
 * ============================================================
 */

(function() {
    'use strict';
    
    window.PHONICS = window.PHONICS || {};
    window.PHONICS.Data = window.PHONICS.Data || {};
    
    /**
     * Complete Phonics Patterns Database
     * Each pattern includes:
     * - id: unique identifier
     * - pattern: the phonics pattern (e.g., 'sh', 'a_e')
     * - sound: phonetic sound it makes
     * - phase: which learning phase (1, 2, or 3)
     * - category: pattern type
     * - words: array of example words
     * - description: explanation for teachers/parents
     */
    window.PHONICS.Data.phonicsPatterns = [
        
        // ============================================================
        // PHASE 2: DIGRAPHS
        // ============================================================
        
        {
            id: 'sh',
            pattern: 'sh',
            sound: '/sh/',
            phase: 2,
            category: 'Digraphs',
            color: '#f59e0b',
            description: 'Two letters making the /sh/ sound',
            simpleWords: ['ash', 'sash', 'hash', 'mash', 'sham', 'shin', 'bash', 'rash', 'mesh', 'Josh', 'shed', 'bush', 'ship', 'shot', 'wish', 'cash', 'shop', 'fish', 'push', 'shut', 'rush', 'dish', 'dash', 'shed', 'lush', 'posh', 'hush', 'blush', 'shush', 'smash', 'flush', 'slash', 'slush', 'gosh', 'gush', 'lash', 'posh', 'rush', 'brush', 'brash', 'clash', 'crash', 'crush', 'flesh', 'fresh', 'shaft', 'shelf', 'shock', 'shred', 'shrug', 'slosh', 'smash', 'slush', 'slush', 'Welsh', 'ambush', 'banish', 'bashed', 'finish', 'radish', 'ravish', 'relish', 'shrimp', 'shrunk', 'thrash', 'vanish'],
            complexWords: ['she', 'shy', 'show', 'ashy', 'bushy', 'cushy', 'dishy', 'fishy', 'harsh', 'marsh', 'shady', 'shall', 'shame', 'shape', 'shark', 'sharp', 'shave', 'shill', 'shine', 'shiny', 'shirt', 'short', 'whish', 'ashamed', 'flashy', 'polish', 'shabby']
        },
        
        {
            id: 'ch',
            pattern: 'ch',
            sound: '/ch/',
            phase: 2,
            category: 'Digraphs',
            color: '#f59e0b',
            description: 'Two letters making the /ch/ sound',
            simpleWords: ['ich', 'chug', 'chit', 'chat', 'chop', 'Chad', 'chin', 'inch', 'chip', 'much', 'such', 'rich', 'chum', 'pinch', 'lunch', 'chest', 'bench', 'bunch', 'ranch', 'champ', 'chimp']
        },
        
        {
            id: 'ng',
            pattern: 'ng',
            sound: '/ng/',
            phase: 2,
            category: 'Digraphs',
            color: '#f59e0b',
            description: 'Two letters making the /ng/ sound',
            simpleWords: ['bung', 'bong', 'pong', 'fang', 'sung', 'rang', 'bang', 'sing', 'long', 'ring', 'king', 'slang', 'clung', 'bring', 'wrong']
        },
        
        {
            id: 'th-voiceless',
            pattern: 'th × 2',
            sound: '/th/ (thing)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'Voiceless th sound as in “thing, think, three” — the second th sound. Some learners may say this like /f/ (e.g. “fing” for “thing”).',
            simpleWords: ['thug', 'math', 'Beth', 'thin', 'with', 'path', 'bath', 'moth', 'thud', 'goth', 'sloth', 'cloth', 'thick', 'smith', 'thing', 'thank', 'tenth', 'thumb', 'broth', 'thump', 'throb']
        },
        
        {
            id: 'th-voiced',
            pattern: 'th',
            sound: '/th/ (this)',
            phase: 2,
            category: 'Digraphs',
            color: '#f59e0b',
            description: 'Voiced th sound as in "this"',
            simpleWords: ['than', 'them', 'this', 'that', 'then']
        },
        
        {
            id: 'ck',
            pattern: 'ck',
            sound: '/k/',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'Two letters making the /k/ sound at the end of words',
            simpleWords: ['ick', 'reck', 'wack', 'huck', 'sock', 'jock', 'hack', 'peck', 'tick', 'sack', 'mock', 'dock', 'duck', 'deck', 'smack', 'snack', 'brick', 'black', 'flick', 'chick']
        },
        
        {
            id: 'qu',
            pattern: 'qu',
            sound: '/kw/',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'Q is always followed by u, making /kw/ sound',
            simpleWords: ['quit', 'quid', 'quiz', 'quick', 'quest', 'quilt']
        },
        
        // ============================================================
        // PHASE 2: R-CONTROLLED VOWELS
        // ============================================================
        
        {
            id: 'ar',
            pattern: 'ar',
            sound: '/ar/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'The letter r changes the vowel sound',
            simpleWords: ['art', 'arm', 'mars', 'jar', 'vars', 'far', 'barn', 'harm', 'dark', 'mark', 'part', 'card', 'car', 'bar', 'par', 'arc', 'ark', 'darn', 'carp', 'dart', 'bark', 'cart', 'yard', 'star', 'hard', 'park', 'army', 'lard', 'carb', 'afar', 'spar', 'lark', 'bard', 'warp', 'scar', 'arch', 'warm', 'farm', 'star'],
            complexWords: ['scarf', 'arson', 'shark', 'cigar', 'spark', 'baron', 'hardy', 'stark', 'marsh', 'arrow', 'charm', 'harsh', 'alarm', 'chart', 'sugar', 'apart', 'smart', 'sharp', 'start', 'march', 'marvel', 'parted', 'inward', 'embark', 'pardon', 'arctic', 'garlic', 'wizard', 'carpet', 'artist', 'marked', 'martin', 'garden', 'target', 'market', 'scarlet', 'marshal', 'harness', 'darling', 'arsenal', 'harmful', 'harmony', 'harvest']
        },
        
        {
            id: 'or',
            pattern: 'or',
            sound: '/or/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'The letter r changes the vowel sound',
            simpleWords: ['for', 'orb', 'orc', 'nor', 'wort', 'pork', 'cord', 'torn', 'corn', 'port', 'born', 'sort', 'dorm', 'cork', 'fork', 'horn', 'lord', 'norm', 'fort', 'form', 'stork', 'abort', 'snort', 'morph', 'thorp', 'forgo', 'scorn', 'thorn', 'chord', 'sworn', 'torch'],
            complexWords: ['flora', 'coral', 'manor', 'orbit', 'organ', 'actor', 'storm', 'moral', 'sport', 'forth', 'short', 'north', 'morbid', 'forgot', 'accord', 'portal', 'inform', 'import', 'export', 'forget', 'format', 'formal', 'doctor', 'editor', 'forced', 'factor', 'normal', 'sector', 'record']
        },
        
        {
            id: 'ir',
            pattern: 'ir',
            sound: '/ur/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'Makes the /ur/ sound',
            simpleWords: ['irk', 'sir', 'mirk', 'dirt', 'girl', 'firm', 'bird', 'stir', 'chirp', 'twirl', 'smirk', 'mirth', 'girth', 'whirl', 'flirt', 'quirk', 'swirl', 'birch', 'skirt', 'shirt', 'birth', 'third', 'first', 'squirt', 'thirst'],
            complexWords: ['affirm', 'circus', 'dirtbag', 'circet']
        },
        
        {
            id: 'ur',
            pattern: 'ur',
            sound: '/ur/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'Makes the /ur/ sound',
            simpleWords: ['fur', 'yurt', 'burp', 'curb', 'hurt', 'turn', 'burn', 'hurl', 'curl', 'blur', 'surf', 'spur', 'turf', 'blurt', 'slurp', 'spurn', 'blurb', 'lurch', 'turbo', 'burnt', 'burst'],
            complexWords: ['urban', 'burger', 'suburb', 'burton', 'burden', 'murder', 'church', 'ensure', 'return']
        },
        
        {
            id: 'er',
            pattern: 'er',
            sound: '/ur/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'Makes the /ur/ sound',
            simpleWords: ['her', 'per', 'perm', 'jerk', 'verb', 'herb', 'term', 'ever', 'very', 'over', 'usher', 'amber', 'boxer', 'voter', 'verge', 'tiger', 'elder', 'clerk', 'alert', 'anger', 'river']
        },
        
        {
            id: 'air',
            pattern: 'air',
            sound: '/air/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'Makes the /air/ sound',
            simpleWords: ['air', 'hair', 'lair', 'airy', 'pair', 'fair', 'stair', 'flair', 'fairy', 'dairy', 'chair', 'claire', 'airbed', 'eclair', 'airway', 'affair', 'repair', 'fairly']
        },
        
        // ============================================================
        // PHASE 2: SPECIAL EA (soft e)
        // ============================================================
        
        {
            id: 'ea-soft',
            pattern: 'ea',
            sound: '/e/ (head)',
            phase: 2,
            category: 'Short Vowel Digraphs',
            color: '#f97316',
            description: 'ea making short /e/ sound (like in “head”)',
            simpleWords: ['head', 'deaf', 'pear', 'bear', 'dread', 'bread', 'read', 'spread', 'dead', 'instead', 'sweat', 'lead', 'ahead', 'health', 'wealthy', 'measure', 'treasure', 'ready', 'weather', 'feather', 'leather']
        },
        
        // ============================================================
        // PHASE 2: DOUBLE VOWEL SOUNDS
        // ============================================================
        
        {
            id: 'a-long',
            pattern: 'a × 2',
            sound: '/ay/ (long a)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter a making its long name sound (/eɪ/) when it appears alone before a consonant in an open syllable — like in basic, table, paper',
            simpleWords: ['basic', 'table', 'paper', 'baby', 'able', 'acorn', 'apron', 'agent', 'April', 'bacon', 'cable', 'data', 'fatal', 'fable', 'gravy', 'hazy', 'label', 'lady', 'laser', 'maple', 'mason', 'mayor', 'navy', 'raven', 'razor', 'shady', 'staple', 'vacant', 'vapor'],
            complexWords: ['latest', 'related', 'nation', 'station', 'patient', 'ancient', 'famous', 'nature', 'radiate', 'gradual']
        },
        
        {
            id: 'e-long',
            pattern: 'e × 2',
            sound: '/ee/ (long e)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter e making its long name sound (/iː/) in open syllables — like in be, he, me, we, ego',
            simpleWords: ['be', 'he', 'she', 'me', 'we', 'ego', 'even', 'evil', 'equal', 'event', 'every', 'entry', 'legal', 'level', 'meter', 'peter', 'refer', 'regal', 'fever', 'cedar', 'debug', 'depot', 'demon']
        },
        
        {
            id: 'i-long',
            pattern: 'i × 2',
            sound: '/ie/ (long i)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter i making its long name sound (/aɪ/) in open syllables — like in hi, item, kind, find',

            simpleWords: ['hi', 'via', 'item', 'kind', 'find', 'bind', 'mind', 'grind', 'pilot', 'quiet', 'vital', 'trial', 'child', 'mild', 'wild', 'final', 'direct', 'behind', 'united', 'China', 'idea', 'direct', 'bio']
        },
        
        {
            id: 'o-long',
            pattern: 'o × 2',
            sound: '/oh/ (long o)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter o making its long name sound (/oʊ/) in open syllables — like in go, no, so, post, most',

            simpleWords: ['post', 'go', 'almost', 'most', 'no', 'ghost', 'host', 'ego', 'ago', 'bio', 'open', 'both', 'also', 'gross', 'total', 'global', 'local', 'hotel', 'open', 'over', 'poem', 'poet']
        },
        
        {
            id: 'u-long',
            pattern: 'u × 2',
            sound: '/you/ (long u)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter u making its long name sound (/juː/) in open syllables — like in unit, music, pupil',
            simpleWords: ['unit', 'union', 'music', 'pupil', 'human', 'humor', 'Cuba', 'futon', 'humid', 'lunar', 'mural', 'tutor', 'tulip', 'tuna', 'usher', 'usual', 'user']
        },
        
        {
            id: 'y-long',
            pattern: 'y × 2',
            sound: '/ie/ (long i)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'When ‘y’ is at the end of a short word, it makes the long i sound (/aɪ/) — like in my, cry, fly. In short words, y often sounds like long i.',
            simpleWords: ['by', 'cry', 'dry', 'fly', 'fry', 'my', 'pry', 'shy', 'sky', 'sly', 'spy', 'try', 'why', 'defy', 'deny', 'rely', 'July', 'apply', 'imply', 'reply', 'supply', 'comply']
        },
        
        // ============================================================
        // PHASE 2: DOUBLE LETTER ENDINGS
        // ============================================================
        
        {
            id: 'll',
            pattern: 'll',
            sound: '/l/',
            phase: 2,
            category: 'Double Letters',
            color: '#ec4899',
            description: 'Double l at the end',
            simpleWords: ['ill', 'will', 'full', 'tell', 'sell', 'hill', 'fill', 'mill', 'till', 'pill', 'yell', 'well', 'Bill', 'pull', 'bull', 'dull', 'doll', 'nill', 'still', 'shall', 'shell', 'drill', 'smell', 'chill', 'swell', 'dwell', 'skull', 'spill', 'grill', 'thrall', 'thrill', 'shrill']
        },
        
        {
            id: 'ss',
            pattern: 'ss',
            sound: '/s/',
            phase: 2,
            category: 'Double Letters',
            color: '#ec4899',
            description: 'Double s at the end',
            simpleWords: ['less', 'mass', 'miss', 'bass', 'kiss', 'hiss', 'moss', 'mess', 'boss', 'pass', 'loss', 'Swiss', 'briss', 'floss', 'bless', 'glass', 'press', 'class', 'cross', 'dress', 'grass', 'brass', 'chess', 'gloss', 'bliss']
        },
        
        {
            id: 'zz',
            pattern: 'zz',
            sound: '/z/',
            phase: 2,
            category: 'Double Letters',
            color: '#ec4899',
            description: 'Double z at the end',
            simpleWords: ['jazz', 'fizz', 'razz', 'buzz', 'fuzz', 'frizz']
        },
        
        {
            id: 'all',
            pattern: 'all',
            sound: '/all/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'The “all” pattern makes /ɔːl/ sound',
            simpleWords: ['all', 'tall', 'mall', 'ball', 'gall', 'wall', 'fall', 'hall', 'call', 'spall', 'stall', 'small', 'thrall', 'recall', 'fallen', 'eyeball', 'hallway', 'fallback', 'caller'],
            complexWords: ['allow', 'rally', 'tally', 'fallow', 'pallet', 'gallop', 'allure', 'allege', 'ballad', 'galley', 'wallet', 'gallon', 'ballet', 'ballot', 'valley', 'shallop', 'totally', 'also', 'although', 'almost', 'always', 'already']
        },
        
        // ============================================================
        // PHASE 2: MAGIC E PATTERNS
        // ============================================================
        
        {
            id: 'a_e',
            pattern: 'a_e',
            sound: '/ay/',
            phase: 2,
            category: 'Magic E',
            color: '#8b5cf6',
            description: 'Silent e makes the a say its name',
            simpleWords: ['ake', 'ape', 'bale', 'bate', 'cage', 'came', 'cape', 'daze', 'cave', 'face', 'fake', 'fate', 'gage', 'gate', 'gaze', 'hate', 'babe', 'bake', 'bane', 'base', 'cake', 'cane', 'dame', 'fade', 'fame', 'gave', 'hale', 'haze', 'Jake', 'jape', 'lace', 'lake', 'lane', 'mane', 'mase', 'maze', 'page', 'race', 'rage', 'rate', 'sage', 'sale', 'save', 'tame', 'tape', 'vale', 'wade', 'jade', 'Kade', 'kale', 'lame', 'late', 'laze', 'mage', 'male', 'mate', 'nape', 'pale', 'rake', 'safe', 'sake', 'same', 'tale', 'vase', 'wage', 'wale', 'wane', 'wave'],
            complexWords: ['ale', 'ate', 'ace', 'age', 'page', 'safe', 'gave', 'sale', 'game', 'base', 'late', 'face', 'name', 'rate', 'date', 'case', 'same', 'take', 'make', 'made', 'scale', 'stage', 'space', 'trade', 'taken', 'place', 'state', 'safety', 'latest', 'became', 'engage']
        },
        
        {
            id: 'e_e',
            pattern: 'e_e',
            sound: '/ee/',
            phase: 2,
            category: 'Magic E',
            color: '#8b5cf6',
            description: 'Silent e makes the e say its name',
            simpleWords: ['eve', 'even', 'peter', 'these', 'recent', 'gene']
        },
        
        {
            id: 'i_e',
            pattern: 'i_e',
            sound: '/ie/',
            phase: 2,
            category: 'Magic E',
            color: '#8b5cf6',
            description: 'Silent e makes the i say its name',
            simpleWords: ['ice', 'size', 'nine', 'wire', 'side', 'live', 'wide', 'site', 'line', 'five', 'life', 'like', 'bike', 'bite', 'dice', 'dime', 'dire', 'dive', 'fire', 'hike', 'hive', 'kite', 'life', 'lime', 'lite', 'mice', 'mile', 'mine', 'nice', 'pile', 'pipe', 'ride', 'rise', 'dine', 'fine', 'hide', 'hire', 'lice', 'mike', 'pike', 'pine', 'rice', 'vice', 'vile', 'wife', 'wine', 'side', 'wide', 'vibe', 'wide', 'wise', 'time'],
            complexWords: ['prime', 'write', 'drive', 'price', 'while', 'inside', 'likely', 'behind', 'alive', 'bride', 'brine', 'chide', 'chime', 'clime', 'cider', 'crime', 'drive', 'file', 'knives', 'knifes', 'quite', 'uprise', 'invite', 'retire', 'strike', 'excite']
        },
        
        {
            id: 'o_e',
            pattern: 'o_e',
            sound: '/oh/',
            phase: 2,
            category: 'Magic E',
            color: '#8b5cf6',
            description: 'Silent e makes the o say its name',
            simpleWords: ['ode', 'hope', 'note', 'role', 'home', 'over', 'noted', 'phone', 'alone', 'close', 'those', 'smoke', 'impose']
        },
        
        {
            id: 'u_e',
            pattern: 'u_e',
            sound: '/you/',
            phase: 2,
            category: 'Magic E',
            color: '#8b5cf6',
            description: 'Silent e makes the u say its name',
            simpleWords: ['use', 'used', 'reduce', 'assume']
        },
        
        {
            id: 'y_e',
            pattern: 'y_e',
            sound: '/ie/',
            phase: 2,
            category: 'Magic E',
            color: '#8b5cf6',
            description: 'Silent e makes the y say long i',
            simpleWords: ['type', 'style', 'rhyme']
        },
        
        // ============================================================
        // PHASE 2: Y SOUNDS LIKE E
        // ============================================================
        
        {
            id: 'y-e-sound',
            pattern: 'y × 3',
            sound: '/ee/ (long e)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'When ‘y’ is at the end of a longer word, it makes the long e sound (/iː/) — like in happy, baby, candy. In longer words, y often sounds like long e.',

            simpleWords: ['cosy', 'hazy', 'lacy', 'bony', 'rosy', 'eddy', 'ruby', 'tidy', 'duly', 'pony', 'toby', 'envy', 'lazy', 'lily', 'ally', 'pity', 'levy', 'ugly', 'holy', 'navy', 'tiny', 'lady', 'tony', 'baby', 'copy', 'army', 'body', 'city', 'very', 'only', 'berry', 'randy', 'hardy', 'handy', 'sunny', 'risky', 'hurry', 'mercy', 'perry', 'holly', 'daddy', 'jenny', 'derby', 'ferry', 'proxy', 'nasty', 'sally', 'tommy', 'glory', 'fancy', 'bobby', 'sandy', 'Nancy', 'rocky', 'lobby', 'silly', 'marry', 'penny', 'crazy', 'rally', 'dirty', 'jimmy', 'unity', 'billy', 'enemy', 'badly', 'angry', 'sixty', 'terry', 'funny', 'lucky', 'harry', 'empty', 'sorry', 'forty', 'worry', 'fifty', 'henry', 'entry', 'apply', 'carry', 'happy', 'story', 'fully', 'study', 'party', 'cherry', 'remedy', 'hungry', 'comedy', 'costly', 'entity', 'luxury', 'legacy', 'plenty', 'mostly', 'thirty', 'pretty', 'twenty']
        },
        
        // ============================================================
        // PHASE 2: SILENT LETTERS & SPECIAL PATTERNS
        // ============================================================
        
        {
            id: 'c-s',
            pattern: 'c',
            sound: '/s/ (soft c)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'C makes /s/ sound before e, i, y',
            simpleWords: ['icy', 'ace', 'ice', 'cent', 'mice', 'rice', 'acid', 'pace', 'cell', 'race', 'nice', 'vice', 'face', 'city', 'civic', 'trace', 'grace', 'hence', 'cycle', 'scene', 'twice', 'civil', 'space', 'force', 'price', 'place', 'since', 'legacy', 'prince', 'circle', 'decide', 'cancer', 'device', 'except', 'reduce', 'policy', 'access', 'office']
        },
        
        {
            id: 'g-j',
            pattern: 'g',
            sound: '/j/ (soft g)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'G makes /j/ sound before e, i, y',
            simpleWords: ['gem', 'gel', 'gent', 'gist', 'age', 'cage', 'gent', 'gest', 'germ', 'huge', 'mage', 'sage', 'urge', 'wage', 'gist', 'angel', 'binge', 'bulge', 'caged', 'digit', 'elegy', 'gemma', 'giant', 'agent', 'change', 'wage', 'Germany', 'gentle', 'gin', 'gender', 'magic', 'gym', 'ginger']
        },
        
        {
            id: 'dg-j',
            pattern: 'dge',
            sound: '/j/',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'DGE makes /j/ sound',
            simpleWords: ['edge', 'badge', 'budge', 'dodgy', 'dodge', 'fudge', 'hedge', 'badger', 'bridge', 'fidget', 'fledge', 'ledger', 'lodges', 'pledges', 'ridges', 'sludge', 'smidge', 'wedges', 'smudge']
        },
        
        {
            id: 'kn-n',
            pattern: 'kn',
            sound: '/n/ (silent k)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'K is silent, only n sounds',
            simpleWords: ['knob', 'knot', 'knack', 'knave', 'knell', 'knife', 'knit', 'knives']
        },
        
        {
            id: 'ph-f',
            pattern: 'ph',
            sound: '/f/',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'PH makes /f/ sound',
            simpleWords: ['pho', 'alpha', 'graph', 'humph', 'lymph', 'morph', 'nymph', 'phase', 'phone', 'photo', 'ralph', 'cipher', 'daphne', 'gopher', 'joseph', 'orphan', 'phobic', 'physic', 'sulpha']
        },
        
        {
            id: 'wh-w',
            pattern: 'wh',
            sound: '/w/',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'WH makes /w/ sound (h is silent)',
            simpleWords: ['why', 'wham', 'when', 'whig', 'whim', 'whip', 'whale', 'wharf', 'wheat', 'where', 'which', 'while', 'white']
        },
        
        {
            id: 'mb-m',
            pattern: 'mb',
            sound: '/m/ (silent b)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'B is silent at the end',
            simpleWords: ['numb', 'comb', 'limb', 'dumb', 'bomb', 'lamb', 'crumb', 'thumb', 'climb', 'plumb']
        },
        
        {
            id: 'wr-r',
            pattern: 'wr',
            sound: '/r/ (silent w)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'W is silent',
            simpleWords: ['wry', 'wren', 'wrap', 'wrath', 'wreck', 'wrist', 'wrote', 'wrong', 'write', 'wrench', 'wrinkle', 'written', 'wrestler']
        },
        
        {
            id: 'ch-k',
            pattern: 'ch',
            sound: '/k/ (Greek)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'CH makes /k/ sound in Greek-origin words',
            simpleWords: ['tech', 'loch', 'chemo', 'chasm', 'chord', 'chaos', 'chrome', 'scheme', 'Christ', 'Christian', 'alchemy', 'Christine', 'scholar', 'chronic', 'mechanic', 'monarchy', 'chemical']
        },
        
        {
            id: 'gn-n',
            pattern: 'gn',
            sound: '/n/ (silent g)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'G is silent',
            simpleWords: ['sign', 'gnarly', 'deign', 'feign', 'gnome', 'align', 'reign', 'cosign', 'malign', 'benign', 'resign', 'design', 'lasagne', 'foreign', 'champagne', 'campaign']
        },
        
        {
            id: 'rh-r',
            pattern: 'rh',
            sound: '/r/ (silent h)',
            phase: 2,
            category: 'Unusual Patterns',
            color: '#f43f5e',
            description: 'H is silent',
            simpleWords: ['rhyme', 'rhino', 'rhumba', 'rhubarb', 'rhetorical', 'rhinoceros']
        },
        
        // ============================================================
        // R-CONTROLLED VOWELS (Additional)
        // ============================================================

        {
            id: 'ear',
            pattern: 'ear',
            sound: '/ear/',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'The ear pattern makes the /\u026a\u0259r/ sound as in ear, fear, hear',
            simpleWords: ['ear', 'fear', 'hear', 'near', 'dear', 'gear', 'tear', 'year', 'clear', 'shear', 'smear', 'spear', 'beard', 'heard', 'learn', 'earth', 'early'],
            complexWords: ['appear', 'nearby', 'clearly', 'yearly', 'nearly', 'feared', 'weary', 'dreary', 'rehearse']
        },

        {
            id: 'al',
            pattern: 'al',
            sound: '/all/ (al)',
            phase: 2,
            category: 'R-Controlled Vowels',
            color: '#ef4444',
            description: 'al pattern making /\u0254\u02d0l/ sound, often before l or lk \u2014 like in salt, talk, walk',
            simpleWords: ['salt', 'talk', 'walk', 'also', 'halt', 'malt', 'calm', 'palm', 'bald', 'half', 'calf', 'falter', 'alter', 'false'],
            complexWords: ['almost', 'always', 'already', 'although', 'altogether', 'alternate', 'alternative', 'exalt', 'assault', 'default', 'exhalt']
        },

        // ============================================================
        // SHORT VOWEL DIGRAPHS
        // ============================================================

        {
            id: 'soft-e',
            pattern: '? _e',
            sound: '(soft \u2014 exception)',
            phase: 2,
            category: 'Short Vowel Digraphs',
            color: '#f97316',
            description: 'Exception to Magic E: final e does NOT make the vowel long \u2014 like in give, have, love, come. These are irregular and must be memorised.',
            simpleWords: ['give', 'live', 'have', 'love', 'come', 'done', 'gone', 'none', 'some', 'are', 'more', 'here', 'there', 'where', 'were', 'above', 'prove', 'move', 'improve']
        },

        {
            id: 'oo-short',
            pattern: 'oo',
            sound: '/oo/ (look)',
            phase: 2,
            category: 'Short Vowel Digraphs',
            color: '#f97316',
            description: 'oo making short /\u028a/ sound as in look, book, cook',
            simpleWords: ['look', 'book', 'cook', 'hook', 'took', 'wood', 'good', 'foot', 'hood', 'soot', 'wool', 'stood', 'brook', 'crook', 'shook', 'nook', 'rook'],
            complexWords: ['cookie', 'firewood', 'footstep', 'wooden', 'goodness', 'outlook', 'understood', 'withstood', 'booklet', 'childhood']
        },

        {
            id: 'oul',
            pattern: 'oul',
            sound: '/oo/ (should)',
            phase: 2,
            category: 'Short Vowel Digraphs',
            color: '#f97316',
            description: 'oul making short /\u028a/ sound as in could, should, would',
            simpleWords: ['could', 'would', 'should']
        },

        {
            id: 'ai-said',
            pattern: 'ai',
            sound: '/e/ (said)',
            phase: 2,
            category: 'Short Vowel Digraphs',
            color: '#f97316',
            description: 'Unusual: ai making short /e/ sound as in said, again. These are irregular and must be memorised.',
            simpleWords: ['said', 'again', 'against']
        },

        // ============================================================
        // LONG VOWEL DIGRAPHS \u2014 LONG /e\u026a/ (LONG A) SOUNDS
        // ============================================================

        {
            id: 'ai-rain',
            pattern: 'ai',
            sound: '/ay/ (rain)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ai making long a sound as in rain, train, wait',
            simpleWords: ['aid', 'aim', 'bail', 'fail', 'gain', 'hail', 'jail', 'laid', 'mail', 'nail', 'paid', 'rail', 'sail', 'tail', 'wait', 'bait', 'maid', 'main', 'pain', 'rain', 'vain', 'claim', 'drain', 'grain', 'plain', 'stain', 'trail', 'train'],
            complexWords: ['afraid', 'contain', 'detail', 'obtain', 'remain', 'retain', 'captain', 'explain', 'maintain', 'complaint']
        },

        {
            id: 'ei-long-a',
            pattern: 'ei',
            sound: '/ay/ (reindeer)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ei making long a sound as in reindeer, veil, weigh',
            simpleWords: ['vein', 'veil', 'rein', 'eight', 'weigh', 'neigh', 'sleigh', 'beige'],
            complexWords: ['reindeer', 'eighteen', 'eighty', 'neighbor', 'freight', 'weight', 'feign', 'reign']
        },

        {
            id: 'ea-long-a',
            pattern: 'ea',
            sound: '/ay/ (steak)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ea making long a sound as in steak, great, break',
            simpleWords: ['steak', 'great', 'break', 'yea'],
            complexWords: ['breakout', 'greatness', 'beefsteak', 'underbear']
        },

        {
            id: 'ay',
            pattern: 'ay',
            sound: '/ay/ (bay)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ay making long a sound as in day, play, say',
            simpleWords: ['bay', 'day', 'gay', 'hay', 'jay', 'lay', 'may', 'pay', 'ray', 'say', 'way', 'clay', 'fray', 'gray', 'play', 'pray', 'slay', 'stay', 'sway', 'tray', 'away', 'delay', 'spray', 'stray'],
            complexWords: ['always', 'crayon', 'essay', 'Friday', 'halfway', 'highway', 'holiday', 'Monday', 'pathway', 'Sunday', 'today', 'birthday', 'doorway', 'gateway', 'hallway', 'railway', 'stairway', 'runway']
        },

        {
            id: 'ey-they',
            pattern: 'ey',
            sound: '/ay/ (they)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ey making long a sound as in they, grey, obey',
            simpleWords: ['hey', 'grey', 'prey', 'they', 'whey', 'obey', 'convey', 'survey'],
            complexWords: ['disobey', 'conveyor']
        },

        {
            id: 'ure',
            pattern: 'ure',
            sound: '/ure/',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ure making the sound as in sure, pure, cure',
            simpleWords: ['cure', 'lure', 'pure', 'sure', 'your'],
            complexWords: ['allure', 'assure', 'endure', 'ensure', 'figure', 'future', 'mature', 'nature', 'picture', 'secure', 'texture', 'venture', 'capture', 'culture', 'feature', 'fixture', 'gesture', 'measure', 'mixture', 'posture', 'treasure', 'adventure', 'creature', 'furniture', 'nurture', 'pasture', 'sculpture', 'structure', 'temperature']
        },

        {
            id: 'aw',
            pattern: 'aw',
            sound: '/aw/ (draw)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'aw making /\u0254\u02d0/ sound as in draw, law, paw',
            simpleWords: ['aw', 'caw', 'jaw', 'law', 'maw', 'paw', 'raw', 'saw', 'yaw', 'claw', 'draw', 'flaw', 'gnaw', 'straw', 'thaw', 'brawl', 'crawl', 'drawl', 'shawl', 'spawn', 'yawn', 'dawn', 'lawn', 'pawn', 'awn'],
            complexWords: ['awful', 'outlaw', 'sawdust', 'awesome', 'awkward', 'lawsuit', 'withdraw']
        },

        {
            id: 'ou-loud',
            pattern: 'ou',
            sound: '/ow/ (loud)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ou making /a\u028a/ sound as in loud, cloud, found',
            simpleWords: ['out', 'our', 'loud', 'bout', 'couch', 'count', 'found', 'gout', 'hour', 'lout', 'mound', 'mouth', 'ouch', 'noun', 'pouch', 'pound', 'pout', 'proud', 'round', 'scout', 'shout', 'snout', 'sound', 'spout', 'stout', 'trout', 'wound', 'cloud'],
            complexWords: ['account', 'amount', 'around', 'announce', 'compound', 'counsel', 'devout', 'discount', 'fountain', 'mountain', 'pronounce', 'surround', 'thousand']
        },

        {
            id: 'ow-cow',
            pattern: 'ow',
            sound: '/ow/ (cow)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#06b6d4',
            description: 'ow making /a\u028a/ sound as in cow, now, how',
            simpleWords: ['bow', 'cow', 'how', 'now', 'owl', 'pow', 'row', 'vow', 'wow', 'brow', 'chow', 'plow', 'town', 'down', 'frown', 'gown', 'brown', 'clown', 'crown', 'drown', 'prowl', 'scowl', 'vowel'],
            complexWords: ['allow', 'avow', 'endow', 'eyebrow', 'somehow']
        },

        // ============================================================
        // LONG VOWEL DIGRAPHS \u2014 LONG /i\u02d0/ (LONG E) SOUNDS
        // ============================================================

        {
            id: 'ey-key',
            pattern: 'ey',
            sound: '/ee/ (key)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#8b5cf6',
            description: 'ey making long e sound as in key, money, honey',
            simpleWords: ['key', 'abbey', 'alley', 'barley', 'chimney', 'honey', 'jersey', 'journey', 'kidney', 'medley', 'monkey', 'money', 'parsley', 'pulley', 'storey', 'turkey', 'trolley', 'valley', 'volley'],
            complexWords: ['attorney', 'whiskey', 'hockey', 'jockey', 'donkey']
        },

        {
            id: 'ea-beach',
            pattern: 'ea',
            sound: '/ee/ (beach)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#8b5cf6',
            description: 'ea making long e sound as in beach, sea, read \u2014 the most common sound for ea',
            simpleWords: ['beam', 'beat', 'clean', 'cream', 'deal', 'dream', 'each', 'east', 'eat', 'feast', 'heap', 'heal', 'hear', 'heat', 'jean', 'lead', 'leaf', 'lean', 'leap', 'meal', 'mean', 'meat', 'neat', 'peach', 'peak', 'peas', 'read', 'real', 'ream', 'reap', 'seal', 'sea', 'seat', 'steam', 'steal', 'stream', 'team', 'veal', 'wean', 'year', 'yeast'],
            complexWords: ['already', 'beneath', 'decrease', 'eager', 'feature', 'ideal', 'reason', 'release', 'repeat', 'research', 'season', 'teacher', 'treatment', 'weaken']
        },

        {
            id: 'ie-chief',
            pattern: 'ie',
            sound: '/ee/ (chief)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#8b5cf6',
            description: 'ie making long e sound as in chief, field, brief',
            simpleWords: ['brief', 'chief', 'field', 'fiend', 'grief', 'niece', 'piece', 'pier', 'priest', 'shield', 'shriek', 'thief', 'wield', 'yield'],
            complexWords: ['achieve', 'believe', 'relieve', 'retrieve', 'reprieve']
        },

        {
            id: 'ee',
            pattern: 'ee',
            sound: '/ee/ (bee)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#8b5cf6',
            description: 'ee making long e sound as in bee, see, tree',
            simpleWords: ['bee', 'deed', 'feel', 'feet', 'free', 'glee', 'heel', 'keep', 'keen', 'knee', 'meet', 'need', 'peel', 'reed', 'reef', 'reel', 'see', 'seed', 'seek', 'seem', 'fee', 'flee', 'tree', 'three', 'feed', 'geek', 'beef', 'beer', 'been', 'deep', 'deer', 'meek', 'peek', 'teem', 'teen', 'week', 'weed', 'weep'],
            complexWords: ['agree', 'coffee', 'committee', 'degree', 'employee', 'exceed', 'indeed', 'needle', 'proceed', 'succeed', 'toffee', 'between', 'fifteen', 'fourteen', 'sixteen', 'thirteen', 'weekend']
        },

        {
            id: 'ei-long-e',
            pattern: 'ei',
            sound: '/ee/ (either)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#8b5cf6',
            description: 'ei making long e sound as in either, seize, ceiling',
            simpleWords: ['either', 'neither', 'seize', 'ceiling', 'receive', 'deceive', 'perceive', 'conceive'],
            complexWords: ['leisure', 'protein', 'caffeine', 'codeine']
        },

        // ============================================================
        // LONG VOWEL DIGRAPHS \u2014 LONG /a\u026a/ (LONG I) SOUNDS
        // ============================================================

        {
            id: 'ie-pie',
            pattern: 'ie',
            sound: '/ie/ (pie)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#10b981',
            description: 'ie making long i sound as in pie, tie, die',
            simpleWords: ['die', 'fie', 'lie', 'pie', 'tie', 'vie', 'dried', 'fried', 'plied', 'spied', 'tried'],
            complexWords: ['applied', 'denied', 'flies', 'implied', 'relied', 'replied', 'supplied']
        },

        {
            id: 'igh',
            pattern: 'igh',
            sound: '/ie/ (fight)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#10b981',
            description: 'igh making long i sound as in fight, night, light',
            simpleWords: ['high', 'nigh', 'sigh', 'bright', 'fight', 'fright', 'knight', 'light', 'might', 'night', 'right', 'sight', 'tight', 'blight', 'flight', 'plight'],
            complexWords: ['delight', 'frighten', 'highlight', 'midnight', 'nightmare', 'spotlight', 'starlight', 'sunlight', 'tonight', 'upright', 'daylight', 'flashlight', 'fortnight', 'moonlight', 'overnight', 'twilight']
        },

        {
            id: 'uy',
            pattern: 'uy',
            sound: '/ie/ (buy)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#10b981',
            description: 'uy making long i sound as in buy, guy',
            simpleWords: ['buy', 'guy', 'guys', 'buys'],
            complexWords: ['buyer', 'buyout']
        },

        {
            id: 'ui-squire',
            pattern: 'ui',
            sound: '/ie/ (guide)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#10b981',
            description: 'ui making long i sound as in guide, quite, squire',
            simpleWords: ['guide', 'guile', 'guise', 'quite', 'quire', 'squire'],
            complexWords: ['disguise', 'require', 'acquire']
        },

        {
            id: 'ue-venue',
            pattern: 'ue',
            sound: '/you/ (venue)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#10b981',
            description: 'ue making /ju\u02d0/ sound as in venue, value, rescue',
            simpleWords: ['cue', 'due', 'hue', 'sue', 'value', 'venue', 'argue', 'issue', 'queue', 'rescue', 'statue', 'tissue', 'virtue'],
            complexWords: ['continue', 'evaluate', 'revenue', 'residue', 'avenue']
        },

        // ============================================================
        // LONG VOWEL DIGRAPHS \u2014 LONG /o\u028a/ (LONG O) SOUNDS
        // ============================================================

        {
            id: 'ow-flow',
            pattern: 'ow',
            sound: '/oh/ (flow)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#f59e0b',
            description: 'ow making long o sound as in flow, show, row, throw',
            simpleWords: ['bow', 'flow', 'glow', 'grow', 'know', 'low', 'mow', 'own', 'row', 'show', 'slow', 'snow', 'sow', 'stow', 'tow', 'blow', 'elbow', 'follow', 'hollow'],
            complexWords: ['below', 'bestow', 'borrow', 'bowling', 'fellow', 'meadow', 'mellow', 'narrow', 'pillow', 'rainbow', 'shadow', 'swallow', 'tomorrow', 'widow', 'window', 'yellow']
        },

        {
            id: 'oe',
            pattern: 'oe',
            sound: '/oh/ (toe)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#f59e0b',
            description: 'oe making long o sound as in toe, foe, doe',
            simpleWords: ['doe', 'foe', 'hoe', 'roe', 'toe', 'woe', 'aloe', 'floe', 'oboe', 'sloe'],
            complexWords: ['canoe', 'mistletoe', 'potato', 'tomato', 'scenario']
        },

        {
            id: 'oa',
            pattern: 'oa',
            sound: '/oh/ (goat)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#f59e0b',
            description: 'oa making long o sound as in goat, boat, coat',
            simpleWords: ['oak', 'oar', 'oat', 'boar', 'boat', 'cloak', 'coal', 'coat', 'croak', 'foam', 'goal', 'goat', 'groan', 'load', 'loan', 'moan', 'moat', 'road', 'roam', 'roast', 'soak', 'soap', 'toad', 'toast'],
            complexWords: ['abroad', 'approach', 'coaster', 'cockroach', 'railroad', 'toaster']
        },

        {
            id: 'ou-soul',
            pattern: 'ou',
            sound: '/oh/ (soul)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#f59e0b',
            description: 'ou making long o sound as in soul, shoulder, though',
            simpleWords: ['soul', 'dough', 'mould', 'mourn', 'pour', 'four', 'court', 'boulder', 'shoulder', 'though', 'although'],
            complexWords: ['smoulder', 'poultry', 'throughout']
        },

        // ============================================================
        // LONG VOWEL DIGRAPHS \u2014 LONG /u\u02d0/ (LONG OO) SOUNDS
        // ============================================================

        {
            id: 'ue-blue',
            pattern: 'ue',
            sound: '/oo/ (blue)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#3b82f6',
            description: 'ue making long oo sound as in blue, clue, true',
            simpleWords: ['blue', 'clue', 'due', 'flue', 'glue', 'true', 'undue', 'untrue'],
            complexWords: ['avenue', 'ensue', 'pursue', 'revenue', 'statue', 'continue', 'residue']
        },

        {
            id: 'ui-suit',
            pattern: 'ui',
            sound: '/oo/ (suit)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#3b82f6',
            description: 'ui making long oo sound as in suit, fruit, juice',
            simpleWords: ['suit', 'fruit', 'juice', 'bruise', 'cruise', 'fluid', 'built', 'build', 'guild', 'guilt'],
            complexWords: ['suitable', 'fruitful', 'lawsuit', 'recruit', 'pursuit', 'nuisance']
        },

        {
            id: 'ew',
            pattern: 'ew',
            sound: '/oo/ (chew)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#3b82f6',
            description: 'ew making long oo sound as in chew, new, brew',
            simpleWords: ['brew', 'blew', 'chew', 'crew', 'dew', 'drew', 'few', 'flew', 'grew', 'knew', 'new', 'news', 'slew', 'stew', 'threw', 'view'],
            complexWords: ['Andrew', 'Matthew', 'cashew', 'curfew', 'interview', 'mildew', 'nephew', 'preview', 'renew', 'review', 'sinew']
        },

        {
            id: 'oo-zoo',
            pattern: 'oo',
            sound: '/oo/ (zoo)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#3b82f6',
            description: 'oo making long oo sound as in zoo, moon, spoon',
            simpleWords: ['boo', 'boom', 'boot', 'cool', 'fool', 'goo', 'hoop', 'loom', 'loop', 'moon', 'moo', 'mood', 'noon', 'pool', 'room', 'roof', 'root', 'soon', 'spook', 'spool', 'spoon', 'stool', 'tool', 'too', 'toot', 'zoom', 'zoo'],
            complexWords: ['baboon', 'balloon', 'cartoon', 'cocoon', 'elbow', 'honeymoon', 'maroon', 'mushroom', 'platoon', 'raccoon', 'restroom', 'school', 'seafood', 'shampoo', 'tattoo']
        },

        {
            id: 'ou-soup',
            pattern: 'ou',
            sound: '/oo/ (soup)',
            phase: 2,
            category: 'Long Vowel Digraphs',
            color: '#3b82f6',
            description: 'ou making long oo sound as in soup, group, through',
            simpleWords: ['soup', 'group', 'you', 'youth', 'through', 'route', 'coupon', 'routine', 'contour'],
            complexWords: ['tournament', 'throughout', 'boulevard']
        },

        // ============================================================
        // PHASE 3: OUGH — MULTI-SOUND PATTERNS
        // ============================================================

        {
            id: 'ough-uff',
            pattern: 'ough',
            sound: '/uff/ (rough)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#eab308',
            description: 'ough making /\u028cf/ sound as in rough, tough, enough',
            simpleWords: ['rough', 'tough', 'enough']
        },

        {
            id: 'ough-ew',
            pattern: 'ough',
            sound: '/oo/ (through)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#eab308',
            description: 'ough making /u\u02d0/ sound as in through',
            simpleWords: ['through']
        },

        {
            id: 'ough-off',
            pattern: 'ough',
            sound: '/off/ (cough)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#eab308',
            description: 'ough making /\u0252f/ sound as in cough',
            simpleWords: ['cough']
        },

        {
            id: 'ough-oh',
            pattern: 'ough',
            sound: '/oh/ (though)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#eab308',
            description: 'ough making /o\u028a/ sound as in though, dough, although',
            simpleWords: ['though', 'dough', 'although']
        },

        {
            id: 'ough-ow',
            pattern: 'ough',
            sound: '/ow/ (bough)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#eab308',
            description: 'ough making /a\u028a/ sound as in bough, plough, drought',
            simpleWords: ['bough', 'plough', 'drought']
        },

        {
            id: 'ough-aw',
            pattern: 'ough',
            sound: '/aw/ (thought)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#eab308',
            description: 'ough making /\u0254\u02d0/ sound as in thought, bought, brought',
            simpleWords: ['thought', 'bought', 'brought']
        },

        {
            id: 'ough-uh',
            pattern: 'ough',
            sound: '/uh/ (thorough)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#eab308',
            description: 'ough making /\u0259/ sound as in thorough, borough',
            simpleWords: ['thorough', 'borough']
        },

        // ============================================================
        // PHASE 3: OUR — MULTI-SOUND PATTERNS
        // ============================================================

        {
            id: 'our-ur',
            pattern: 'our',
            sound: '/or/ (four)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#14b8a6',
            description: 'our making /\u0254\u02d0r/ sound as in your, four, tour, pour',
            simpleWords: ['your', 'four', 'tour', 'pour', 'amour', 'odour', 'mourn', 'court', 'honour', 'fourth', 'course', 'detour', 'source', 'rumour']
        },

        {
            id: 'our-ower',
            pattern: 'our',
            sound: '/ow-er/ (hour)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#14b8a6',
            description: 'our making /a\u028a\u0259r/ sound as in hour, sour, flour, devour',
            simpleWords: ['hour', 'sour', 'flour', 'devour']
        },

        {
            id: 'our-er',
            pattern: 'our',
            sound: '/er/ (colour)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#14b8a6',
            description: 'our making /\u0259r/ sound as in colour, favour, labour, flavour',
            simpleWords: ['rumour', 'colour', 'favour', 'labour', 'flavour']
        },

        // ============================================================
        // PHASE 3: EIGH — MULTI-SOUND PATTERNS
        // ============================================================

        {
            id: 'eigh-ay',
            pattern: 'eigh',
            sound: '/ay/ (eight)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#a855f7',
            description: 'eigh making /e\u026a/ sound as in eight, weigh, weight',
            simpleWords: ['eight', 'weigh', 'weight']
        },

        {
            id: 'eigh-eye',
            pattern: 'eigh',
            sound: '/ie/ (height)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#a855f7',
            description: 'eigh making /a\u026a/ sound as in height',
            simpleWords: ['height']
        },

        // ============================================================
        // PHASE 3: AUGH — MULTI-SOUND PATTERNS
        // ============================================================

        {
            id: 'augh-af',
            pattern: 'augh',
            sound: '/af/ (laugh)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#84cc16',
            description: 'augh making /\u0251\u02d0f/ sound as in laugh, laughter',
            simpleWords: ['laugh', 'laughter']
        },

        {
            id: 'augh-aw',
            pattern: 'augh',
            sound: '/aw/ (caught)',
            phase: 3,
            category: 'Unusual Patterns',
            color: '#84cc16',
            description: 'augh making /\u0254\u02d0/ sound as in caught, taught, naught, fraught, daughter',
            simpleWords: ['caught', 'taught', 'naught', 'fraught', 'daughter']
        }

    ];
    
    /**
     * Word Breakdown Database
     * Pre-broken down words showing phonetic segments
     */
    window.PHONICS.Data.wordBreakdowns = {
        'phone': { word: 'phone', segments: ['ph', 'o_e', 'n'], sounds: ['/f/', '/oh/ (magic e)', '/n/'], phase: 2 },
        'shop': { word: 'shop', segments: ['sh', 'o', 'p'], sounds: ['/sh/', '/o/', '/p/'], phase: 2 },
        'thing': { word: 'thing', segments: ['th', 'i', 'ng'], sounds: ['/th/', '/i/', '/ng/'], phase: 2 },
        'chair': { word: 'chair', segments: ['ch', 'air'], sounds: ['/ch/', '/air/'], phase: 2 },
        'shark': { word: 'shark', segments: ['sh', 'ar', 'k'], sounds: ['/sh/', '/ar/', '/k/'], phase: 2 },
        'bird': { word: 'bird', segments: ['b', 'ir', 'd'], sounds: ['/b/', '/ur/', '/d/'], phase: 2 },
        'cake': { word: 'cake', segments: ['c', 'a_e', 'k'], sounds: ['/k/', '/ay/', '/k/'], phase: 2 },
        'bike': { word: 'bike', segments: ['b', 'i_e', 'k'], sounds: ['/b/', '/ie/', '/k/'], phase: 2 },
        'note': { word: 'note', segments: ['n', 'o_e', 't'], sounds: ['/n/', '/oh/', '/t/'], phase: 2 },
        'knife': { word: 'knife', segments: ['kn(k-silent)', 'i_e', 'f'], sounds: ['/n/', '/ie/', '/f/'], phase: 2 },
        'write': { word: 'write', segments: ['wr(w-silent)', 'i_e', 't'], sounds: ['/r/', '/ie/', '/t/'], phase: 2 },
        'although': { word: 'although', segments: ['al', 'th', 'ough'], sounds: ['/all/', '/th/', '/oh/'], phase: 3 }
    };
    
    // Backward compatibility
    window.SALON = window.SALON || {};
    window.SALON.Data = window.PHONICS.Data;
    
})();
