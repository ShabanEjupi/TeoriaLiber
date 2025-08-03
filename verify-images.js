// Image Integration Verification Script
// Run this in browser console to verify images are properly integrated

function verifyImageIntegration() {
    console.log('🔍 Starting image integration verification...');
    
    if (typeof window.chapters === 'undefined') {
        console.error('❌ Chapters not found');
        return false;
    }
    
    let chaptersWithImages = 0;
    let chaptersWithoutImages = 0;
    let missingChapters = [];
    
    // Check chapters 1-50
    for (let i = 1; i <= 50; i++) {
        if (window.chapters[i] && window.chapters[i].content) {
            const content = window.chapters[i].content;
            
            if (content.includes('chapter-image-container') || content.includes('<img src="imazhet/')) {
                chaptersWithImages++;
                console.log(`✅ Chapter ${i}: Has image`);
            } else {
                chaptersWithoutImages++;
                missingChapters.push(i);
                console.warn(`⚠️ Chapter ${i}: No image found`);
            }
        } else {
            console.error(`❌ Chapter ${i}: Not found`);
            missingChapters.push(i);
            chaptersWithoutImages++;
        }
    }
    
    console.log('\n📊 IMAGE INTEGRATION SUMMARY:');
    console.log(`✅ Chapters with images: ${chaptersWithImages}`);
    console.log(`⚠️ Chapters without images: ${chaptersWithoutImages}`);
    
    if (missingChapters.length > 0) {
        console.log(`❌ Missing images in chapters: ${missingChapters.join(', ')}`);
    }
    
    // Auto-fix missing images
    if (chaptersWithoutImages > 0) {
        console.log('🔧 Attempting to auto-fix missing images...');
        if (typeof window.integrateChapterImages === 'function') {
            window.integrateChapterImages();
        } else {
            console.error('❌ Image integration function not available');
        }
    }
    
    return chaptersWithoutImages === 0;
}

// Auto-run when page loads
window.addEventListener('load', function() {
    setTimeout(verifyImageIntegration, 2000);
});

console.log('✅ Image verification script loaded');
