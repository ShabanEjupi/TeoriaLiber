// Image Verification Script - Verifies that images are properly mapped to chapters
(function() {
    'use strict';
    
    console.log('🔍 Loading Image Verification Module...');

    window.verifyImageMapping = function() {
        console.log('🔍 Starting image mapping verification...');
        
        if (typeof window.chapters === 'undefined' || !window.chapters) {
            console.warn('⚠️ Chapters not loaded for verification');
            return;
        }

        let verificationResults = {
            totalChapters: 0,
            chaptersWithImages: 0,
            missingImages: [],
            workingImages: []
        };

        // Check each chapter for image presence
        for (let i = 1; i <= 111; i++) {
            verificationResults.totalChapters++;
            
            const chapter = window.chapters[i];
            if (chapter && chapter.content) {
                // Check if chapter content contains image tags
                const hasImages = chapter.content.includes('<img') || chapter.content.includes('imazhet/');
                
                if (hasImages) {
                    verificationResults.chaptersWithImages++;
                    verificationResults.workingImages.push(i);
                } else {
                    verificationResults.missingImages.push(i);
                }
            } else {
                verificationResults.missingImages.push(i);
            }
        }

        // Display verification results
        console.log('📊 Image Verification Results:', verificationResults);
        
        if (verificationResults.missingImages.length > 0) {
            console.warn(`⚠️ ${verificationResults.missingImages.length} chapters missing images:`, verificationResults.missingImages);
        } else {
            console.log('✅ All chapters have images properly mapped!');
        }

        return verificationResults;
    };

    // Auto-run verification after image integration
    setTimeout(() => {
        if (typeof window.ensureAllImagesIntegrated === 'function') {
            // Run verification after integration completes
            setTimeout(window.verifyImageMapping, 3000);
        }
    }, 1000);
    
})();
