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
        + '<span class="user-role">● ' + PHONICS.Config.CURRENT_USER.role + '</span>'
        + '<span class="user-name">' + PHONICS.Config.CURRENT_USER.name + '</span>'
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
    // Main Tab Panel
    // ============================================================
    var mainTabPanel = Ext.create('Ext.tab.Panel', {
        region: 'center',
        activeTab: 0,
        items: [
            wordLookupPanel,
            patternsGrid,
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
        // Simple phonics analyzer (can be enhanced)
        var segments = [];
        var sounds = [];
        var i = 0;
        
        while (i < word.length) {
            var found = false;
            
            // Check for 3-letter patterns
            if (i + 2 < word.length) {
                var three = word.substr(i, 3);
                // Add common 3-letter patterns here if needed
            }
            
            // Check for 2-letter patterns (digraphs)
            if (i + 1 < word.length && !found) {
                var two = word.substr(i, 2);
                var patterns = PHONICS.Stores.patterns.data.items;
                
                for (var p = 0; p < patterns.length; p++) {
                    if (patterns[p].data.pattern === two) {
                        segments.push(two);
                        sounds.push(patterns[p].data.sound);
                        i += 2;
                        found = true;
                        break;
                    }
                }
            }
            
            // Single letter
            if (!found) {
                var letter = word.charAt(i);
                segments.push(letter);
                sounds.push('/' + letter + '/');
                i++;
            }
        }
        
        return {
            word: word,
            segments: segments,
            sounds: sounds,
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
            var color = getSegmentColor(segment);
            
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
            html += '<li style="margin:5px 0;"><strong>' + seg + '</strong> makes the ' + snd + ' sound</li>';
        }
        
        html += '</ul></div>';
        html += '</div>';
        
        wordLookupResult.update(html);
    }
    
    function getSegmentColor(segment) {
        // Find pattern color
        var patterns = PHONICS.Stores.patterns.data.items;
        for (var i = 0; i < patterns.length; i++) {
            if (patterns[i].data.pattern === segment) {
                return patterns[i].data.color;
            }
        }
        
        // Default colors for vowels/consonants
        if ('aeiou'.indexOf(segment.charAt(0)) !== -1) {
            return '#3b82f6'; // Blue for vowels
        }
        return '#10b981'; // Green for consonants
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
