/**
 * ============================================================
 * Phonics Dictionary - Educational Reading Tool
 * ============================================================
 * Application configuration and phonics learning structure
 * ============================================================
 */

(function() {
    'use strict';
    
    // Global namespace
    window.PHONICS = window.PHONICS || {};
    
    /**
     * Application Configuration
     */
    window.PHONICS.Config = {
        // System Information
        APP_VERSION: 'v1.0.0',
        APP_NAME: 'Phonics Dictionary',
        APP_SUBTITLE: 'Learn to Read with Sound Patterns',
        
        // Current User
        CURRENT_USER: {
            uid: 'teacher',
            name: 'Ms. Lydia Cole',
            role: 'Educator',
            dept: 'Early Years Education'
        },
        
        // Learning Phases
        PHASES: {
            PHASE1: {
                name: 'Phase 1',
                description: 'Foundation - Letters & Basic CVC',
                color: '#10b981',
                topics: [
                    '26 lowercase letters',
                    '26 uppercase letters',
                    '2-letter blends',
                    'CVC words',
                    'Adding s',
                    'Segmenting',
                    'Quick read technique',
                    'Sight words',
                    'Simple CVC 4-5 letters'
                ]
            },
            PHASE2: {
                name: 'Phase 2',
                description: 'Digraphs, R-controlled, Magic E',
                color: '#3b82f6',
                topics: [
                    'Digraphs: ch, sh, th, ng, ck, qu',
                    'R-controlled vowels: ar, er, ir, ur, or, air',
                    'ea (soft e)',
                    'Double vowel sounds (a, e, i, o, u x2)',
                    'Ending double letters & all',
                    'Double letter split',
                    'Y (x3 sounds)',
                    'C(s), G(j), Dg(j)',
                    'Magic E: a_e, e_e, i_e, o_e, u_e, y_e',
                    'Silent letters',
                    'Adding -ing, -ed'
                ]
            },
            PHASE3: {
                name: 'Phase 3',
                description: 'Advanced Vowel Combinations',
                color: '#8b5cf6',
                topics: [
                    'oy, ay, uy, ey, iy',
                    'ey ("a" sound)'
                ]
            }
        },
        
        // Phonics Pattern Categories
        CATEGORIES: {
            SINGLE_LETTERS: 'Single Letters',
            DIGRAPHS: 'Digraphs (2 letters, 1 sound)',
            R_CONTROLLED: 'R-Controlled Vowels',
            MAGIC_E: 'Magic E (Split Digraphs)',
            DOUBLE_LETTERS: 'Double Letters',
            SILENT_LETTERS: 'Silent Letters',
            VOWEL_TEAMS: 'Vowel Teams',
            SUFFIXES: 'Suffixes (-ing, -ed)',
            SPECIAL: 'Special Patterns'
        },
        
        // Color Coding for Visual Learning
        COLORS: {
            VOWELS: '#3b82f6',           // Blue
            CONSONANTS: '#10b981',       // Green
            DIGRAPHS: '#f59e0b',         // Orange
            R_CONTROLLED: '#ef4444',     // Red
            MAGIC_E: '#8b5cf6',          // Purple
            SILENT: '#9ca3af',           // Gray
            DOUBLE: '#ec4899',           // Pink
            SUFFIX: '#14b8a6'            // Teal
        },
        
        // Sound Types
        SOUND_TYPES: {
            SHORT: 'Short Sound',
            LONG: 'Long Sound',
            VARIANT: 'Variant Sound',
            SILENT: 'Silent',
            COMBINED: 'Combined Sound'
        }
    };
    
    // Legacy compatibility
    window.SALON = window.PHONICS;
    window.ERP = window.PHONICS;
    
})();
