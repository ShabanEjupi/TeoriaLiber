// Test script to verify all images are working
console.log('🧪 Testing image integration for all chapters...');

function testAllChapterImages() {
    console.log('🔍 Testing images for chapters 1-111...');
    
    let working = 0;
    let missing = 0;
    const missingChapters = [];
    
    for (let i = 1; i <= 111; i++) {
        let imagePath = '';
        
        // Check if enhanced function exists
        if (typeof window.getImagePathForChapter === 'function') {
            imagePath = window.getImagePathForChapter(i);
        } else if (typeof window.getEnhancedImageForChapter === 'function') {
            imagePath = window.getEnhancedImageForChapter(i);
        }
        
        if (imagePath) {
            working++;
            console.log(`✅ Chapter ${i}: ${imagePath}`);
        } else {
            missing++;
            missingChapters.push(i);
            console.log(`❌ Chapter ${i}: No image found`);
        }
    }
    
    console.log(`\n📊 Test Results:`);
    console.log(`✅ Working: ${working} chapters`);
    console.log(`❌ Missing: ${missing} chapters`);
    
    if (missingChapters.length > 0) {
        console.log(`Missing chapters: ${missingChapters.join(', ')}`);
    }
    
    // Test image galleries
    console.log('\n🖼️ Testing image gallery generation...');
    
    for (let i = 91; i <= 99; i++) {
        if (typeof window.generateEnhancedChapterImageGallery === 'function') {
            const gallery = window.generateEnhancedChapterImageGallery(i);
            if (gallery) {
                console.log(`✅ Gallery for chapter ${i}: Generated`);
            } else {
                console.log(`❌ Gallery for chapter ${i}: Failed`);
            }
        }
    }
    
    return { working, missing, missingChapters };
}

// Test when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        testAllChapterImages();
    }, 3000);
});

// Make test function available globally
window.testAllChapterImages = testAllChapterImages;

console.log('🧪 Image test script loaded. Run testAllChapterImages() to test manually.');
