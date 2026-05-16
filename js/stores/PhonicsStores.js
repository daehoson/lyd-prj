/**
 * ============================================================
 * Phonics Dictionary - Data Stores
 * ============================================================
 * ExtJS data stores for phonics patterns and words
 * ============================================================
 */

(function() {
    'use strict';
    
    window.PHONICS = window.PHONICS || {};
    window.PHONICS.Stores = {};
    
    /**
     * Initialize all stores
     */
    window.PHONICS.Stores.init = function() {
        
        window.PHONICS.Data = window.PHONICS.Data || {};
        
        // Phonics Patterns Store
        window.PHONICS.Stores.patterns = Ext.create('Ext.data.Store', {
            storeId: 'phonicsPatterns Store',
            fields: [
                'id', 'pattern', 'sound', 'phase', 'category', 'color',
                'description', 'simpleWords', 'complexWords'
            ],
            data: window.PHONICS.Data.phonicsPatterns || [],
            proxy: { type: 'memory' }
        });
        
        // Word Breakdowns Store
        window.PHONICS.Stores.wordBreakdowns = Ext.create('Ext.data.Store', {
            storeId: 'wordBreakdownsStore',
            fields: ['word', 'segments', 'sounds', 'phase'],
            data: Object.values(window.PHONICS.Data.wordBreakdowns || {}),
            proxy: { type: 'memory' }
        });
        
        // Phase Filter Store
        window.PHONICS.Stores.phaseFilter = Ext.create('Ext.data.Store', {
            fields: ['value', 'text'],
            data: [
                { value: '', text: 'All Phases' },
                { value: 1, text: 'Phase 1 - Foundation' },
                { value: 2, text: 'Phase 2 - Digraphs & Magic E' },
                { value: 3, text: 'Phase 3 - Advanced' }
            ]
        });
        
        // Category Filter Store
        window.PHONICS.Stores.categoryFilter = Ext.create('Ext.data.Store', {
            fields: ['value', 'text'],
            data: [
                { value: '', text: 'All Categories' },
                { value: 'Digraphs', text: 'Digraphs' },
                { value: 'R-Controlled Vowels', text: 'R-Controlled Vowels' },
                { value: 'Magic E', text: 'Magic E Patterns' },
                { value: 'Double Letters', text: 'Double Letters' },
                { value: 'Silent Letters', text: 'Silent Letters' },
                { value: 'Letter Variants', text: 'Letter Variants' },
                { value: 'Special Patterns', text: 'Special Patterns' }
            ]
        });
        
        return {
            patterns: window.PHONICS.Stores.patterns,
            wordBreakdowns: window.PHONICS.Stores.wordBreakdowns,
            phaseFilter: window.PHONICS.Stores.phaseFilter,
            categoryFilter: window.PHONICS.Stores.categoryFilter
        };
    };
    
    // Legacy compatibility
    window.SALON = window.SALON || {};
    window.SALON.Stores = window.PHONICS.Stores;
    
})();
