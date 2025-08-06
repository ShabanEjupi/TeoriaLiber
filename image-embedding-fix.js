// Image Embedding Fix - Enhanced image embedding for download and display
(function() {
    'use strict';
    
    console.log('🖼️ Loading Image Embedding Fix Module...');

    // Enhanced image embedding for book generation
    window.embedImagesForDownload = function() {
        console.log('📦 Embedding images for download...');
        
        if (typeof window.chapters === 'undefined' || !window.chapters) {
            console.warn('⚠️ Chapters not loaded for embedding');
            return;
        }

        // Ensure all chapters have embedded images
        for (let i = 1; i <= 111; i++) {
            const chapter = window.chapters[i];
            if (chapter && chapter.content) {
                // Fix any relative image paths to absolute paths
                chapter.content = chapter.content.replace(
                    /src="imazhet\//g, 
                    'src="./imazhet/'
                );
                
                // Ensure images have proper alt text
                chapter.content = chapter.content.replace(
                    /<img([^>]*?)src="([^"]*?)"([^>]*?)>/g,
                    '<img$1src="$2"$3 alt="Kapitulli ' + i + ' - Teoria e Lojërave">'
                );
            }
        }
        
        console.log('✅ Image embedding completed for download');
    };

    // Run embedding before downloads
    const originalDownloadBook = window.downloadBook;
    if (originalDownloadBook) {
        window.downloadBook = function(includeViewReferences) {
            window.embedImagesForDownload();
            return originalDownloadBook(includeViewReferences);
        };
    }
    
})();
