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
            pattern: 'th',
            sound: '/th/ (thing)',
            phase: 2,
            category: 'Digraphs',
            color: '#f59e0b',
            description: 'Voiceless th sound as in "thing"',
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
            category: 'Digraphs',
            color: '#f59e0b',
            description: 'Two letters making the /k/ sound at the end of words',
            simpleWords: ['ick', 'reck', 'wack', 'huck', 'sock', 'jock', 'hack', 'peck', 'tick', 'sack', 'mock', 'dock', 'duck', 'deck', 'smack', 'snack', 'brick', 'black', 'flick', 'chick']
        },
        
        {
            id: 'qu',
            pattern: 'qu',
            sound: '/kw/',
            phase: 2,
            category: 'Digraphs',
            color: '#f59e0b',
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
            sound: '/e/ (soft)',
            phase: 2,
            category: 'Special Patterns',
            color: '#ec4899',
            description: 'ea making short e sound (like in "head")',
            simpleWords: ['head', 'deaf', 'pear', 'bear', 'dread', 'bread', 'read', 'spread', 'dead', 'instead', 'sweat', 'lead', 'ahead', 'health', 'wealthy', 'measure', 'treasure', 'ready', 'weather', 'feather', 'leather']
        },
        
        // ============================================================
        // PHASE 2: DOUBLE VOWEL SOUNDS
        // ============================================================
        
        {
            id: 'a-long',
            pattern: 'a',
            sound: '/ay/ (long a)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter a making its name sound',
            simpleWords: ['basic', 'latest', 'related']
        },
        
        {
            id: 'e-long',
            pattern: 'e',
            sound: '/ee/ (long e)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter e making its name sound',
            simpleWords: ['be', 'he', 'she', 'behind', 'began', 'me', 'we', 'ego', 'idea', 'began', 'being', 'demand', 'reflect', 'defy', 'legal', 'react']
        },
        
        {
            id: 'i-long',
            pattern: 'i',
            sound: '/ie/ (long i)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter i making its name sound',
            simpleWords: ['hi', 'via', 'item', 'kind', 'find', 'bind', 'mind', 'grind', 'pilot', 'quiet', 'vital', 'trial', 'child', 'mild', 'wild', 'final', 'direct', 'behind', 'united', 'China', 'idea', 'direct', 'bio']
        },
        
        {
            id: 'o-long',
            pattern: 'o',
            sound: '/oh/ (long o)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter o making its name sound',
            simpleWords: ['post', 'go', 'almost', 'most', 'no', 'ghost', 'host', 'ego', 'ago', 'bio', 'open', 'both', 'also', 'gross', 'total', 'global', 'local', 'hotel', 'open', 'over', 'poem', 'poet']
        },
        
        {
            id: 'u-long',
            pattern: 'u',
            sound: '/you/ (long u)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Letter u making its name sound',
            simpleWords: ['united']
        },
        
        {
            id: 'y-long',
            pattern: 'y',
            sound: '/ie/ (like i)',
            phase: 2,
            category: 'Long Vowels',
            color: '#3b82f6',
            description: 'Y making long i sound at end of word',
            simpleWords: ['why', 'sky', 'shy', 'fly', 'cry', 'dry', 'spy', 'fry', 'try', 'by', 'my', 'defy', 'pry', 'sly']
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
            sound: '/awl/',
            phase: 2,
            category: 'Special Patterns',
            color: '#ec4899',
            description: 'The "all" pattern',
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
            pattern: 'y',
            sound: '/ee/ (like e)',
            phase: 2,
            category: 'Special Patterns',
            color: '#ec4899',
            description: 'Y at the end of words sounds like e (candy)',
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
            category: 'Letter Variants',
            color: '#14b8a6',
            description: 'C makes /s/ sound before e, i, y',
            simpleWords: ['icy', 'ace', 'ice', 'cent', 'mice', 'rice', 'acid', 'pace', 'cell', 'race', 'nice', 'vice', 'face', 'city', 'civic', 'trace', 'grace', 'hence', 'cycle', 'scene', 'twice', 'civil', 'space', 'force', 'price', 'place', 'since', 'legacy', 'prince', 'circle', 'decide', 'cancer', 'device', 'except', 'reduce', 'policy', 'access', 'office']
        },
        
        {
            id: 'g-j',
            pattern: 'g',
            sound: '/j/ (soft g)',
            phase: 2,
            category: 'Letter Variants',
            color: '#14b8a6',
            description: 'G makes /j/ sound before e, i, y',
            simpleWords: ['gem', 'gel', 'gent', 'gist', 'age', 'cage', 'gent', 'gest', 'germ', 'huge', 'mage', 'sage', 'urge', 'wage', 'gist', 'angel', 'binge', 'bulge', 'caged', 'digit', 'elegy', 'gemma', 'giant', 'agent', 'change', 'wage', 'Germany', 'gentle', 'gin', 'gender', 'magic', 'gym', 'ginger']
        },
        
        {
            id: 'dg-j',
            pattern: 'dg',
            sound: '/j/',
            phase: 2,
            category: 'Letter Variants',
            color: '#14b8a6',
            description: 'DG makes /j/ sound',
            simpleWords: ['edge', 'badge', 'budge', 'dodgy', 'dodge', 'fudge', 'hedge', 'badger', 'bridge', 'fidget', 'fledge', 'ledger', 'lodges', 'pledges', 'ridges', 'sludge', 'smidge', 'wedges', 'smudge']
        },
        
        {
            id: 'kn-n',
            pattern: 'kn',
            sound: '/n/ (silent k)',
            phase: 2,
            category: 'Silent Letters',
            color: '#9ca3af',
            description: 'K is silent, only n sounds',
            simpleWords: ['knob', 'knot', 'knack', 'knave', 'knell', 'knife', 'knit', 'knives']
        },
        
        {
            id: 'ph-f',
            pattern: 'ph',
            sound: '/f/',
            phase: 2,
            category: 'Letter Variants',
            color: '#14b8a6',
            description: 'PH makes /f/ sound',
            simpleWords: ['pho', 'alpha', 'graph', 'humph', 'lymph', 'morph', 'nymph', 'phase', 'phone', 'photo', 'ralph', 'cipher', 'daphne', 'gopher', 'joseph', 'orphan', 'phobic', 'physic', 'sulpha']
        },
        
        {
            id: 'wh-w',
            pattern: 'wh',
            sound: '/w/',
            phase: 2,
            category: 'Letter Variants',
            color: '#14b8a6',
            description: 'WH makes /w/ sound (h is silent)',
            simpleWords: ['why', 'wham', 'when', 'whig', 'whim', 'whip', 'whale', 'wharf', 'wheat', 'where', 'which', 'while', 'white']
        },
        
        {
            id: 'mb-m',
            pattern: 'mb',
            sound: '/m/ (silent b)',
            phase: 2,
            category: 'Silent Letters',
            color: '#9ca3af',
            description: 'B is silent at the end',
            simpleWords: ['numb', 'comb', 'limb', 'dumb', 'bomb', 'lamb', 'crumb', 'thumb', 'climb', 'plumb']
        },
        
        {
            id: 'wr-r',
            pattern: 'wr',
            sound: '/r/ (silent w)',
            phase: 2,
            category: 'Silent Letters',
            color: '#9ca3af',
            description: 'W is silent',
            simpleWords: ['wry', 'wren', 'wrap', 'wrath', 'wreck', 'wrist', 'wrote', 'wrong', 'write', 'wrench', 'wrinkle', 'written', 'wrestler']
        },
        
        {
            id: 'ch-k',
            pattern: 'ch',
            sound: '/k/ (Greek)',
            phase: 2,
            category: 'Letter Variants',
            color: '#14b8a6',
            description: 'CH makes /k/ sound in Greek words',
            simpleWords: ['tech', 'loch', 'chemo', 'chasm', 'chord', 'chaos', 'chrome', 'scheme', 'Christ', 'Christian', 'alchemy', 'Christine', 'scholar', 'chronic', 'mechanic', 'monarchy', 'chemical']
        },
        
        {
            id: 'gn-n',
            pattern: 'gn',
            sound: '/n/ (silent g)',
            phase: 2,
            category: 'Silent Letters',
            color: '#9ca3af',
            description: 'G is silent',
            simpleWords: ['sign', 'gnarly', 'deign', 'feign', 'gnome', 'align', 'reign', 'cosign', 'malign', 'benign', 'resign', 'design', 'lasagne', 'foreign', 'champagne', 'campaign']
        },
        
        {
            id: 'rh-r',
            pattern: 'rh',
            sound: '/r/ (silent h)',
            phase: 2,
            category: 'Silent Letters',
            color: '#9ca3af',
            description: 'H is silent',
            simpleWords: ['rhyme', 'rhino', 'rhumba', 'rhubarb', 'rhetorical', 'rhinoceros']
        }
        
        // More patterns will be added for -ing, double letter splits, etc.
    ];
    
    /**
     * Word Breakdown Database
     * Pre-broken down words showing phonetic segments
     */
    window.PHONICS.Data.wordBreakdowns = {
        'phone': { word: 'phone', segments: ['ph', 'o_e', 'n(silent)'], sounds: ['/f/', '/oh/', ''], phase: 2 },
        'shop': { word: 'shop', segments: ['sh', 'o', 'p'], sounds: ['/sh/', '/o/', '/p/'], phase: 2 },
        'thing': { word: 'thing', segments: ['th', 'i', 'ng'], sounds: ['/th/', '/i/', '/ng/'], phase: 2 },
        'chair': { word: 'chair', segments: ['ch', 'air'], sounds: ['/ch/', '/air/'], phase: 2 },
        'shark': { word: 'shark', segments: ['sh', 'ar', 'k'], sounds: ['/sh/', '/ar/', '/k/'], phase: 2 },
        'bird': { word: 'bird', segments: ['b', 'ir', 'd'], sounds: ['/b/', '/ur/', '/d/'], phase: 2 },
        'cake': { word: 'cake', segments: ['c', 'a_e', 'k'], sounds: ['/k/', '/ay/', '/k/'], phase: 2 },
        'bike': { word: 'bike', segments: ['b', 'i_e', 'k'], sounds: ['/b/', '/ie/', '/k/'], phase: 2 },
        'note': { word: 'note', segments: ['n', 'o_e', 't'], sounds: ['/n/', '/oh/', '/t/'], phase: 2 },
        'knife': { word: 'knife', segments: ['kn(k-silent)', 'i_e', 'f'], sounds: ['/n/', '/ie/', '/f/'], phase: 2 },
        'write': { word: 'write', segments: ['wr(w-silent)', 'i_e', 't'], sounds: ['/r/', '/ie/', '/t/'], phase: 2 }
    };
    
    // Backward compatibility
    window.SALON = window.SALON || {};
    window.SALON.Data = window.PHONICS.Data;
    
})();
