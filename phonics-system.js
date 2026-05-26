/**
 * ============================================================
 * Phonics Dictionary - Main Application
 * ============================================================
 * Educational tool for teaching phonics and reading
 * ============================================================
 */

Ext.onReady(function() {
    
    'use strict';
    
    console.log('Phonics Dictionary ' + PHONICS.Config.APP_VERSION + ' initializing...');
    
    // Initialize Data Stores
    if (typeof PHONICS.Stores === 'undefined' || typeof PHONICS.Stores.init !== 'function') {
        console.error('PHONICS.Stores module not loaded!');
        alert('System initialization failed. Please refresh the page.');
        return;
    }
    
    PHONICS.Stores.init();
    console.log('Phonics stores initialized');
    
    // Hide loading mask
    setTimeout(function() {
        var loadingMask = document.getElementById('loading-mask');
        if (loadingMask) {
            loadingMask.style.opacity = '0';
            setTimeout(function() {
                loadingMask.style.display = 'none';
            }, 300);
        }
    }, 500);
    
    // ============================================================
    // Header
    // ============================================================
    var headerHtml = '<div class="erp-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">'
        + '<div class="erp-logo"><span class="erp-logo-icon">📚</span>' + PHONICS.Config.APP_NAME + '</div>'
        + '<div class="erp-subtitle">' + PHONICS.Config.APP_SUBTITLE + '</div>'
        + '<div class="erp-userinfo">'
        // + '<span class="user-role">● ' + PHONICS.Config.CURRENT_USER.role + '</span>'
        // + '<span class="user-name">' + PHONICS.Config.CURRENT_USER.name + '</span>'
        + '<a href="javascript:void(0)">Help</a>'
        + '</div>'
        + '</div>';
    
    // ============================================================
    // Word Lookup Panel
    // ============================================================
    var wordLookupResult = Ext.create('Ext.panel.Panel', {
        region: 'center',
        html: '<div style="padding:40px; text-align:center; color:#6b7280;">'
            + '<div style="font-size:48px; margin-bottom:20px;">🔍</div>'
            + '<h2>Search for a word above</h2>'
            + '<p>Type any word to see its phonetic breakdown</p>'
            + '<p style="margin-top:20px; font-size:13px;">Example: try "phone", "shark", "cake", or "knight"</p>'
            + '</div>',
        bodyPadding: 0,
        autoScroll: true
    });
    
    var wordLookupPanel = Ext.create('Ext.panel.Panel', {
        title: '🔍 Word Lookup',
        layout: 'border',
        items: [
            {
                region: 'north',
                height: 80,
                bodyPadding: 15,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'textfield',
                        id: 'wordSearchField',
                        emptyText: 'Type a word to see its phonics breakdown...',
                        fieldStyle: 'font-size: 18px; padding: 10px;',
                        enableKeyEvents: true,
                        listeners: {
                            keyup: function(field, e) {
                                if (e.getKey() === e.ENTER) {
                                    searchWord(field.getValue());
                                }
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: '🔍 Analyze Word',
                        margin: '10 0 0 0',
                        height: 40,
                        handler: function() {
                            var field = Ext.getCmp('wordSearchField');
                            searchWord(field.getValue());
                        }
                    }
                ]
            },
            wordLookupResult
        ]
    });
    
    // ============================================================
    // Phonics Patterns Grid
    // ============================================================
    var patternsGrid = Ext.create('Ext.grid.Panel', {
        title: '📖 Phonics Patterns Library',
        store: PHONICS.Stores.patterns,
        columns: [
            { 
                text: 'Pattern', 
                dataIndex: 'pattern', 
                width: 80,
                renderer: function(value, metaData, record) {
                    var color = record.get('color');
                    return '<span style="display:inline-block; padding:4px 12px; background:' + color + '; color:#fff; border-radius:6px; font-weight:700; font-size:14px;">' + value + '</span>';
                }
            },
            { 
                text: 'Sound', 
                dataIndex: 'sound', 
                width: 100,
                renderer: function(value) {
                    return '<span style="font-family:monospace; font-size:14px; color:#4b5563; font-weight:600;">' + value + '</span>';
                }
            },
            { 
                text: 'Phase', 
                dataIndex: 'phase', 
                width: 60,
                align: 'center',
                renderer: function(value) {
                    var colors = { 1: '#10b981', 2: '#3b82f6', 3: '#8b5cf6' };
                    return '<span style="display:inline-block; width:28px; height:28px; line-height:28px; background:' + colors[value] + '; color:#fff; border-radius:50%; font-weight:700;">' + value + '</span>';
                }
            },
            { 
                text: 'Category', 
                dataIndex: 'category', 
                width: 150
            },
            { 
                text: 'Description', 
                dataIndex: 'description', 
                flex: 1
            },
            { 
                text: 'Word Count', 
                width: 90,
                align: 'center',
                renderer: function(value, metaData, record) {
                    var simple = record.get('simpleWords') || [];
                    var complex = record.get('complexWords') || [];
                    var total = simple.length + complex.length;
                    return '<strong>' + total + '</strong> words';
                }
            }
        ],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Phase',
                    labelWidth: 50,
                    width: 250,
                    store: PHONICS.Stores.phaseFilter,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    value: '',
                    listeners: {
                        select: function(combo, record) {
                            var value = record.get('value');
                            PHONICS.Stores.patterns.clearFilter();
                            if (value) {
                                PHONICS.Stores.patterns.filter('phase', value);
                            }
                        }
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Category',
                    labelWidth: 70,
                    width: 300,
                    store: PHONICS.Stores.categoryFilter,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    value: '',
                    listeners: {
                        select: function(combo, record) {
                            var value = record.get('value');
                            PHONICS.Stores.patterns.clearFilter();
                            if (value) {
                                PHONICS.Stores.patterns.filter('category', value);
                            }
                        }
                    }
                },
                '->',
                {
                    xtype: 'textfield',
                    emptyText: 'Search pattern...',
                    width: 200,
                    listeners: {
                        change: function(field, newValue) {
                            var grid = field.up('grid');
                            grid.getStore().clearFilter();
                            if (newValue) {
                                grid.getStore().filterBy(function(record) {
                                    var pattern = record.get('pattern').toLowerCase();
                                    var desc = record.get('description').toLowerCase();
                                    var searchValue = newValue.toLowerCase();
                                    return pattern.indexOf(searchValue) !== -1 || 
                                           desc.indexOf(searchValue) !== -1;
                                });
                            }
                        }
                    }
                }
            ]
        }],
        listeners: {
            itemdblclick: function(grid, record) {
                showPatternDetails(record);
            }
        }
    });
    
    // ============================================================
    // Learning Path Panel
    // ============================================================
    var learningPathHtml = '<div style="padding:20px;">';
    learningPathHtml += '<h2 style="margin-top:0;">Three-Phase Learning Journey</h2>';
    
    Object.keys(PHONICS.Config.PHASES).forEach(function(phaseKey) {
        var phase = PHONICS.Config.PHASES[phaseKey];
        learningPathHtml += '<div style="margin:20px 0; padding:20px; background:' + phase.color + '15; border-left:4px solid ' + phase.color + '; border-radius:8px;">';
        learningPathHtml += '<h3 style="margin:0 0 10px 0; color:' + phase.color + ';">' + phase.name + '</h3>';
        learningPathHtml += '<p style="margin:0 0 15px 0; color:#6b7280;">' + phase.description + '</p>';
        learningPathHtml += '<ul style="margin:0; padding-left:20px;">';
        phase.topics.forEach(function(topic) {
            learningPathHtml += '<li style="margin:5px 0;">' + topic + '</li>';
        });
        learningPathHtml += '</ul></div>';
    });
    
    learningPathHtml += '</div>';
    
    var learningPathPanel = Ext.create('Ext.panel.Panel', {
        title: '🎯 Learning Path',
        html: learningPathHtml,
        autoScroll: true
    });

    // ============================================================
    // Phonics Chart Panel
    // ============================================================

    // Chart tile click handler (exposed on PHONICS namespace so inline onclick can call it)
    window.PHONICS.showPatternById = function(patternId) {
        var record = PHONICS.Stores.patterns.findRecord('id', patternId);
        if (record) {
            showPatternDetails(record);
        }
    };

    function buildTile(label, patternId, bgColor, textColor, borderColor) {
        if (!label) {
            return '<div class="pc-tile pc-tile-empty"></div>';
        }
        var style = 'background:' + bgColor + ';color:' + textColor + ';border:2px solid ' + borderColor + ';';
        if (patternId) {
            return '<div class="pc-tile pc-tile-link" style="' + style + '" onclick="PHONICS.showPatternById(\'' + patternId + '\')" title="Click to see \'' + label + '\' details">' + label + '</div>';
        }
        return '<div class="pc-tile" style="' + style + '">' + label + '</div>';
    }

    // Section colour palettes: [tileBg, tileText, tileBorder, headerBg]
    var ALPHA_PAL  = ['#e0e7ff', '#1e3a8a', '#93c5fd', '#3b82f6'];
    var COL1_PAL   = ['#fee2e2', '#7f1d1d', '#fca5a5', '#ef4444'];
    var COL2_PAL   = ['#fff7ed', '#7c2d12', '#fdba74', '#f97316'];
    var COL3_PAL   = ['#ecfeff', '#164e63', '#67e8f9', '#06b6d4'];
    var COL4_PAL   = ['#f5f3ff', '#3b0764', '#c4b5fd', '#8b5cf6'];
    var COL5_PAL   = ['#f0fdf4', '#14532d', '#86efac', '#22c55e'];
    var COL6_PAL   = ['#fffbeb', '#713f12', '#fcd34d', '#f59e0b'];
    var UNUSUAL_PAL = ['#f3f4f6', '#374151', '#d1d5db', '#6b7280'];

    // ---- SECTION 1: ALPHABET ----
    var alphabetRows = [
        [['a',null],['b',null],['c',null],['d',null],['e',null],['f',null]],
        [['g',null],['h',null],['i',null],['j',null],['k',null],['l',null]],
        [['m',null],['n',null],['o',null],['p',null],['q',null],['r',null]],
        [['s',null],['t',null],['u',null],['v',null],['w',null],['x',null]],
        [['y',null],['z',null],['ch','ch'],['sh','sh'],['th','th-voiced'],['ng','ng']]
    ];

    var chartHtml = '<div class="phonics-chart">';

    chartHtml += '<div class="pc-section-title" style="background:' + ALPHA_PAL[3] + ';">Alphabet &amp; Basic Digraphs</div>';
    chartHtml += '<div class="pc-grid-6">';
    alphabetRows.forEach(function(row) {
        row.forEach(function(cell) {
            chartHtml += buildTile(cell[0], cell[1], ALPHA_PAL[0], ALPHA_PAL[1], ALPHA_PAL[2]);
        });
    });
    chartHtml += '</div>';

    // ---- SECTION 2: MAIN SOUND PATTERNS (6-column table) ----
    var col1 = [
        ['ar','ar'], ['er','er'], ['or','or'], ['ir','ir'], ['ur','ur'],
        ['air','air'], ['ear','ear'], ['all','all'], ['al','al']
    ];
    var col2 = [
        ['? _e (soft)','soft-e'], ['oo (look)','oo-short'], ['oul (should)','oul'],
        ['ea (head)','ea-soft'], ['ai (said)','ai-said'], ['',''], ['',''], ['',''], ['','']
    ];
    var col3 = [
        ['a \u00d7 2','a-long'], ['ai (rain)','ai-rain'], ['ei (reindeer)','ei-long-a'],
        ['ea (steak)','ea-long-a'], ['ay (bay)','ay'], ['ey (they)','ey-they'],
        ['ure (sure)','ure'], ['aw (draw)','aw'], ['ou (loud)','ou-loud'], ['ow (cow)','ow-cow']
    ];
    var col4 = [
        ['e \u00d7 2','e-long'], ['y \u00d7 3','y-e-sound'], ['ey (key)','ey-key'],
        ['ea (beach)','ea-beach'], ['ie (chief)','ie-chief'], ['ee (bee)','ee'],
        ['ei (either)','ei-long-e'], ['a_e','a_e'], ['e_e','e_e'], ['i_e','i_e'],
        ['o_e','o_e'], ['u_e','u_e'], ['y_e','y_e']
    ];
    var col5 = [
        ['i \u00d7 2','i-long'], ['y \u00d7 2','y-long'], ['ie (pie)','ie-pie'],
        ['igh (fight)','igh'], ['uy (buy)','uy'], ['ui (squire)','ui-squire'],
        ['u \u00d7 2','u-long'], ['ue (venue)','ue-venue']
    ];
    var col6 = [
        ['o \u00d7 2','o-long'], ['ow (flow)','ow-flow'], ['oe (toe)','oe'],
        ['oa (goat)','oa'], ['ou (soul)','ou-soul'], ['ue (blue)','ue-blue'],
        ['ui (suit)','ui-suit'], ['ew (chew)','ew'], ['oo (zoo)','oo-zoo'],
        ['ou (soup)','ou-soup']
    ];

    var cols = [col1, col2, col3, col4, col5, col6];
    var pals = [COL1_PAL, COL2_PAL, COL3_PAL, COL4_PAL, COL5_PAL, COL6_PAL];
    var colTitles = [
        'R-Controlled &amp; Endings',
        'Short &amp; Irregular',
        'Long /e\u026a/ (long a)',
        'Long /i\u02d0/ (long e) &amp; Magic e',
        'Long /a\u026a/ (long i) &amp; /ju\u02d0/',
        'Long /o\u028a/ &amp; Long /u\u02d0/ (oo)'
    ];

    var maxRows = 0;
    cols.forEach(function(c) { if (c.length > maxRows) maxRows = c.length; });

    chartHtml += '<div class="pc-section-title" style="background:#374151;">Sound Patterns</div>';
    chartHtml += '<div class="pc-main-table-wrap"><table class="pc-main-table"><thead><tr>';
    cols.forEach(function(c, idx) {
        chartHtml += '<th class="pc-col-header" style="background:' + pals[idx][3] + ';color:#fff;">' + colTitles[idx] + '</th>';
    });
    chartHtml += '</tr></thead><tbody>';

    for (var r = 0; r < maxRows; r++) {
        chartHtml += '<tr>';
        cols.forEach(function(col, idx) {
            var cell = col[r] || ['', ''];
            chartHtml += '<td class="pc-td">' + buildTile(cell[0], cell[1], pals[idx][0], pals[idx][1], pals[idx][2]) + '</td>';
        });
        chartHtml += '</tr>';
    }
    chartHtml += '</tbody></table></div>';

    // ---- SECTION 3: UNUSUAL PATTERNS ----
    chartHtml += '<div class="pc-section-note" style="background:#fef3c7;border-left:4px solid #f59e0b;">These groups are unusual. That is why they are separate:</div>';
    chartHtml += '<div class="pc-section-title" style="background:' + UNUSUAL_PAL[3] + ';">Unusual Patterns</div>';

    var unusualRows = [
        [['kn (n)','kn-n'], ['ph (f)','ph-f'], ['th \u00d7 2','th-voiceless'], ['dge (j)','dg-j'], ['wh (w)','wh-w'], ['mb (m)','mb-m']],
        [['wr (r)','wr-r'], ['ch (k)','ch-k'], ['gn (n)','gn-n'], ['rh (r)','rh-r'], ['ck (k)','ck'], ['qu (kw)','qu']],
        [['c (s)','c-s'], ['g (j)','g-j'], ['',''], ['',''], ['',''], ['','']]
    ];
    chartHtml += '<div class="pc-grid-6">';
    unusualRows.forEach(function(row) {
        row.forEach(function(cell) {
            chartHtml += buildTile(cell[0], cell[1], UNUSUAL_PAL[0], UNUSUAL_PAL[1], UNUSUAL_PAL[2]);
        });
    });
    chartHtml += '</div>';

    chartHtml += '</div>'; // end .phonics-chart

    var phonicsChartPanel = Ext.create('Ext.panel.Panel', {
        title: '📋 Phonics Chart',
        html: chartHtml,
        autoScroll: true,
        bodyPadding: 0
    });
    
    // ============================================================
    // Main Tab Panel
    // ============================================================
    var mainTabPanel = Ext.create('Ext.tab.Panel', {
        region: 'center',
        activeTab: 0,
        items: [
            wordLookupPanel,
            patternsGrid,
            // phonicsChartPanel,
            learningPathPanel
        ]
    });
    
    // ============================================================
    // Quick Stats Panel (Right Side)
    // ============================================================
    var totalPatterns = PHONICS.Stores.patterns.data.items.length;
    var phase1 = PHONICS.Stores.patterns.data.items.filter(function(r) { return r.data.phase === 1; }).length;
    var phase2 = PHONICS.Stores.patterns.data.items.filter(function(r) { return r.data.phase === 2; }).length;
    var phase3 = PHONICS.Stores.patterns.data.items.filter(function(r) { return r.data.phase === 3; }).length;
    
    var statsHtml = '<div style="padding:15px;">';
    statsHtml += '<h3 style="margin:0 0 15px 0;">Quick Stats</h3>';
    statsHtml += '<div style="margin:10px 0; padding:15px; background:#f9fafb; border-radius:6px; text-align:center;">';
    statsHtml += '<div style="font-size:32px; font-weight:700; color:#667eea;">' + totalPatterns + '</div>';
    statsHtml += '<div style="font-size:11px; color:#6b7280; text-transform:uppercase;">Phonics Patterns</div>';
    statsHtml += '</div>';
    
    statsHtml += '<div style="margin:10px 0; padding:10px; background:#10b98115; border-radius:6px;">';
    statsHtml += '<div style="font-weight:600; color:#10b981;">Phase 1: ' + phase1 + '</div>';
    statsHtml += '</div>';
    
    statsHtml += '<div style="margin:10px 0; padding:10px; background:#3b82f615; border-radius:6px;">';
    statsHtml += '<div style="font-weight:600; color:#3b82f6;">Phase 2: ' + phase2 + '</div>';
    statsHtml += '</div>';
    
    statsHtml += '<div style="margin:10px 0; padding:10px; background:#8b5cf615; border-radius:6px;">';
    statsHtml += '<div style="font-weight:600; color:#8b5cf6;">Phase 3: ' + phase3 + '</div>';
    statsHtml += '</div>';
    
    statsHtml += '<div style="margin-top:20px; padding:15px; background:#fef3c7; border-radius:6px;">';
    statsHtml += '<div style="font-size:13px; font-weight:600; margin-bottom:5px;">💡 Tip</div>';
    statsHtml += '<div style="font-size:12px; color:#78350f;">Double-click any pattern to see all example words!</div>';
    statsHtml += '</div>';
    
    statsHtml += '</div>';
    
    var statsPanel = Ext.create('Ext.panel.Panel', {
        title: '📊 Statistics',
        region: 'east',
        width: 250,
        split: true,
        collapsible: true,
        html: statsHtml
    });
    
    // ============================================================
    // Footer
    // ============================================================
    var footerHtml = '<div class="erp-footer">'
        + '© 2026 Phonics Dictionary | '
        + '<a href="#">About</a> | '
        + '<a href="#">Contact</a> | '
        + 'Version ' + PHONICS.Config.APP_VERSION
        + '</div>';
    
    // ============================================================
    // Main Viewport
    // ============================================================
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [
            {
                region: 'north',
                html: headerHtml,
                border: false,
                height: 60
            },
            statsPanel,
            mainTabPanel,
            {
                region: 'south',
                html: footerHtml,
                border: false,
                height: 36
            }
        ]
    });
    
    // ============================================================
    // Helper Functions
    // ============================================================
    
    function searchWord(word) {
        if (!word || word.trim() === '') {
            Ext.Msg.alert('Error', 'Please enter a word to analyze');
            return;
        }
        
        word = word.trim().toLowerCase();
        
        // Check if we have pre-breakdown for this word
        var breakdown = PHONICS.Data.wordBreakdowns[word];
        
        if (breakdown) {
            displayWordBreakdown(breakdown);
        } else {
            // Auto-analyze the word
            var analyzed = analyzeWord(word);
            displayWordBreakdown(analyzed);
        }
    }
    
    function analyzeWord(word) {
        var allPatterns = PHONICS.Stores.patterns.data.items;

        // When the same letter sequence can match multiple patterns (e.g. 'ea' → /iː/ beach
        // vs /e/ head), these IDs define which pattern to prefer in the auto-analyser.
        var PREFERRED = {
            'ea': 'ea-beach',  // /iː/ — the most common ea sound
            'th': 'th-voiced', // /ð/  — covers very common function words (the, this, that)
            'ei': 'ei-long-a', // /eɪ/ — the most common ei sound
            'ow': 'ow-flow',   // /oʊ/ — the most common ow sound in written text
            'ou': 'ou-loud',   // /aʊ/ — the most common ou sound
            'ie': 'ie-chief',  // /iː/ — the most common ie sound
            'ey': 'ey-key',    // /iː/ — most common ey sound (monkey, valley)
            'oo': 'oo-zoo',    // /uː/ — the most common oo sound
            'ui': 'ui-suit',   // /uː/ — the most common ui sound
            'ue': 'ue-blue',   // /uː/ — the most common ue sound
            'y':  'y-e-sound', // /iː/ — y×3 (longer words) is more frequent overall
            'ai': 'ai-rain'    // /eɪ/ — the most common ai sound
        };

        // Build lookup: matchKey → pattern record.
        // matchKey is the plain letter string extracted from the pattern display field;
        // it strips × notation so "th × 2" → "th", "a × 2" → "a".
        var lookup = {};
        allPatterns.forEach(function(rec) {
            var matchKey = rec.data.pattern.split(/[\s\u00d7]/)[0].toLowerCase().trim();
            // Skip meta-patterns that use ? or _ (e.g. "? _e", "a_e")
            if (!matchKey || matchKey.indexOf('?') !== -1 || matchKey.indexOf('_') !== -1) {
                return;
            }
            var preferredId = PREFERRED[matchKey];
            if (preferredId) {
                // For ambiguous keys always end up with the preferred record
                if (rec.data.id === preferredId) {
                    lookup[matchKey] = rec;          // definitive — overwrite any placeholder
                } else if (!lookup[matchKey]) {
                    lookup[matchKey] = rec;          // placeholder until the preferred entry appears
                }
            } else {
                if (!lookup[matchKey]) {
                    lookup[matchKey] = rec;          // first-seen wins for unambiguous patterns
                }
            }
        });

        // Keep only multi-letter keys and sort longest-first for greedy matching.
        // Single letters are handled by the fallback below.
        var multiKeys = Object.keys(lookup)
            .filter(function(k) { return k.length > 1; })
            .sort(function(a, b) { return b.length - a.length; });

        var segments   = [];
        var sounds     = [];
        var colors     = [];
        var categories = [];
        var i = 0;

        while (i < word.length) {
            var matched = false;

            // Greedy: try the longest multi-letter pattern that fits at position i
            for (var k = 0; k < multiKeys.length; k++) {
                var key = multiKeys[k];
                if (i + key.length <= word.length && word.substr(i, key.length) === key) {
                    var rec = lookup[key];
                    segments.push(key);
                    sounds.push(rec.data.sound);
                    colors.push(rec.data.color);
                    categories.push(rec.data.category);
                    i += key.length;
                    matched = true;
                    break;
                }
            }

            // Single-letter fallback
            if (!matched) {
                var letter = word.charAt(i);
                segments.push(letter);
                sounds.push('/' + letter + '/');
                colors.push('aeiou'.indexOf(letter) !== -1 ? '#3b82f6' : '#10b981');
                categories.push('');
                i++;
            }
        }

        return {
            word: word,
            segments: segments,
            sounds: sounds,
            colors: colors,
            categories: categories,
            phase: 2
        };
    }
    
    function displayWordBreakdown(breakdown) {
        var html = '<div style="padding:30px;">';
        html += '<h2 style="margin-top:0; color:#111827;">Word: <span style="color:#667eea;">' + breakdown.word + '</span></h2>';

        html += '<div style="margin:30px 0;">';
        html += '<h3>Phonetic Breakdown:</h3>';
        html += '<div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:15px;">';

        for (var i = 0; i < breakdown.segments.length; i++) {
            var segment = breakdown.segments[i];
            var sound = breakdown.sounds[i] || '';
            // Use pre-computed color from analyzeWord; fall back to pattern lookup for
            // pre-defined breakdowns (from PHONICS.Data.wordBreakdowns)
            var color = (breakdown.colors && breakdown.colors[i])
                ? breakdown.colors[i]
                : getSegmentColor(segment);

            html += '<div style="padding:15px 20px; background:' + color + '15; border:2px solid ' + color + '; border-radius:8px; text-align:center;">';
            html += '<div style="font-size:24px; font-weight:700; color:' + color + ';">' + segment + '</div>';
            html += '<div style="font-size:12px; color:#6b7280; margin-top:5px;">' + sound + '</div>';
            html += '</div>';
        }

        html += '</div></div>';

        html += '<div style="margin-top:30px; padding:15px; background:#f9fafb; border-radius:8px;">';
        html += '<div style="font-weight:600; margin-bottom:10px;">Segments Explained:</div>';
        html += '<ul style="margin:0; padding-left:20px;">';

        for (var j = 0; j < breakdown.segments.length; j++) {
            var seg = breakdown.segments[j];
            var snd = breakdown.sounds[j];
            var cat = (breakdown.categories && breakdown.categories[j])
                ? ' <span style="font-size:11px; color:#9ca3af;">(' + breakdown.categories[j] + ')</span>'
                : '';
            html += '<li style="margin:5px 0;"><strong>' + seg + '</strong> makes the ' + snd + ' sound' + cat + '</li>';
        }

        html += '</ul></div>';
        html += '</div>';

        wordLookupResult.update(html);
    }
    
    function getSegmentColor(segment) {
        // Find pattern color, matching both the exact display field and the
        // bare letter key (strips × notation so "th × 2" still matches "th")
        var patterns = PHONICS.Stores.patterns.data.items;
        for (var i = 0; i < patterns.length; i++) {
            var raw = patterns[i].data.pattern;
            var matchKey = raw.split(/[\s\u00d7]/)[0].toLowerCase().trim();
            if (raw === segment || matchKey === segment) {
                return patterns[i].data.color;
            }
        }
        // Default: blue for vowels, green for consonants
        return 'aeiou'.indexOf(segment.charAt(0)) !== -1 ? '#3b82f6' : '#10b981';
    }
    
    function showPatternDetails(record) {
        var data = record.data;
        var simpleWords = data.simpleWords || [];
        var complexWords = data.complexWords || [];
        
        var html = '<div style="padding:20px;">';
        html += '<div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">';
        html += '<div style="padding:15px 30px; background:' + data.color + '; color:#fff; border-radius:12px; font-size:32px; font-weight:700;">' + data.pattern + '</div>';
        html += '<div>';
        html += '<div style="font-size:20px; font-family:monospace; color:#4b5563; font-weight:600;">' + data.sound + '</div>';
        html += '<div style="color:#6b7280; margin-top:5px;">' + data.description + '</div>';
        html += '</div></div>';
        
        if (simpleWords.length > 0) {
            html += '<h3>Simple Words (' + simpleWords.length + '):</h3>';
            html += '<div style="display:flex; flex-wrap:wrap; gap:8px; margin:15px 0;">';
            simpleWords.forEach(function(word) {
                html += '<span style="padding:6px 12px; background:#f3f4f6; border-radius:6px; font-size:13px;">' + word + '</span>';
            });
            html += '</div>';
        }
        
        if (complexWords.length > 0) {
            html += '<h3 style="margin-top:25px;">Complex Words (' + complexWords.length + '):</h3>';
            html += '<div style="display:flex; flex-wrap:wrap; gap:8px; margin:15px 0;">';
            complexWords.forEach(function(word) {
                html += '<span style="padding:6px 12px; background:#e5e7eb; border-radius:6px; font-size:13px;">' + word + '</span>';
            });
            html += '</div>';
        }
        
        html += '</div>';
        
        var win = Ext.create('Ext.window.Window', {
            title: 'Pattern: ' + data.pattern + ' - ' + data.sound,
            width: 700,
            height: 500,
            modal: true,
            layout: 'fit',
            autoScroll: true,
            html: html,
            buttons: [
                {
                    text: 'Close',
                    handler: function() {
                        win.close();
                    }
                }
            ]
        });
        win.show();
    }
    
    console.log('Phonics Dictionary initialized successfully!');
    
});
