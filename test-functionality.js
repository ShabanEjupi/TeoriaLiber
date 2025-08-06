// Test functionality after page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Website loading test...');
    
    // Test if main functions exist
    setTimeout(function() {
        console.log('Testing functions:');
        console.log('- scrollToChapters:', typeof window.scrollToChapters);
        console.log('- filterChapters:', typeof window.filterChapters);
        console.log('- showChapter:', typeof window.showChapter);
        console.log('- chapters data:', Object.keys(window.chapters || {}).length, 'chapters loaded');
        
        // Test chapter grid creation
        const chapterGrid = document.getElementById('chapterGrid');
        if (chapterGrid) {
            console.log('✅ Chapter grid found with', chapterGrid.children.length, 'chapters');
        } else {
            console.warn('⚠️ Chapter grid not found');
        }
        
        // Test gallery images
        const galleryImages = document.querySelectorAll('.gallery-card img');
        console.log('🖼️ Gallery images found:', galleryImages.length);
        
        // Test image loading
        galleryImages.forEach((img, index) => {
            img.onload = function() {
                console.log(`✅ Image ${index + 1} loaded successfully: ${img.alt}`);
            };
            img.onerror = function() {
                console.warn(`❌ Image ${index + 1} failed to load: ${img.src}`);
            };
        });
        
        console.log('🎉 Website functionality test completed!');
    }, 2000);
});
