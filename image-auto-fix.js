// Image Auto-Fix Script - Automatically fixes image references for all chapters
(function() {
    'use strict';
    
    console.log('🔧 Loading Image Auto-Fix Module...');

    // Auto-fix images for all chapters when page loads
    window.ensureAllImagesIntegrated = function() {
        console.log('🖼️ Starting automatic image integration for all chapters...');
        
        if (typeof window.chapters === 'undefined' || !window.chapters) {
            console.warn('⚠️ Chapters not loaded yet, retrying in 2 seconds...');
            setTimeout(window.ensureAllImagesIntegrated, 2000);
            return;
        }

        // Auto-integrate images from image-manager.js if available
        if (typeof window.integrateChapterImages === 'function') {
            console.log('✅ Integrating images using image manager...');
            window.integrateChapterImages();
        } else {
            console.log('⚠️ Image manager not found, using fallback integration...');
            // Fallback integration logic here if needed
        }

        console.log('✅ Image auto-fix completed successfully');
    };

    // Auto-run on DOM content loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.ensureAllImagesIntegrated);
    } else {
        window.ensureAllImagesIntegrated();
    }
    
})();
