// Test script to verify complete image integration
console.log('🧪 Testing Complete Image Integration System...');

// Test if all image files exist
function testImageIntegration() {
    console.log('🔍 Testing image integration...');
    
    // Load the complete image integration if available
    if (typeof completeImageMap === 'undefined') {
        console.error('❌ Complete image map not loaded');
        return;
    }
    
    const totalImages = Object.keys(completeImageMap).length;
    console.log(`📊 Total images in system: ${totalImages}`);
    
    // Test if enhanced chapter mapping exists
    if (typeof enhancedChapterImageMap !== 'undefined') {
        const chaptersWithImages = Object.keys(enhancedChapterImageMap).length;
        console.log(`📚 Chapters with images: ${chaptersWithImages}`);
        
        // Test image gallery generation for a few chapters
        for (let chapter = 1; chapter <= 10; chapter++) {
            if (typeof generateChapterImageGallery === 'function') {
                const gallery = generateChapterImageGallery(chapter);
                if (gallery && gallery.length > 0) {
                    console.log(`✅ Chapter ${chapter}: Gallery generated successfully`);
                } else {
                    console.log(`⚠️ Chapter ${chapter}: No gallery generated`);
                }
            }
        }
    }
    
    // Test image loading for a sample
    let loadedCount = 0;
    let errorCount = 0;
    const testImages = Object.values(completeImageMap).slice(0, 5); // Test first 5 images
    
    testImages.forEach((imagePath, index) => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            console.log(`✅ Image ${index + 1} loaded: ${imagePath.split('/').pop().substring(0, 50)}...`);
            
            if (loadedCount + errorCount === testImages.length) {
                console.log(`📈 Test Results: ${loadedCount}/${testImages.length} images loaded successfully`);
            }
        };
        
        img.onerror = () => {
            errorCount++;
            console.error(`❌ Failed to load image ${index + 1}: ${imagePath.split('/').pop().substring(0, 50)}...`);
            
            if (loadedCount + errorCount === testImages.length) {
                console.log(`📈 Test Results: ${loadedCount}/${testImages.length} images loaded successfully`);
            }
        };
        
        img.src = imagePath;
    });
    
    // Test chapter content generation with images
    if (typeof generateChapterContent === 'function') {
        console.log('🧪 Testing chapter content generation with images...');
        
        try {
            const sampleContent = generateChapterContent(1, 'Hyrje në Teorinë e Lojërave');
            if (sampleContent.includes('chapter-image-gallery') || sampleContent.includes('<img')) {
                console.log('✅ Chapter content includes image gallery');
            } else {
                console.log('⚠️ Chapter content may not include images properly');
            }
        } catch (error) {
            console.error('❌ Error generating chapter content:', error);
        }
    }
    
    return {
        totalImages,
        chaptersWithImages: Object.keys(enhancedChapterImageMap || {}).length,
        testImagesCount: testImages.length
    };
}

// Test unused images functionality
function testUnusedImages() {
    console.log('🔍 Checking for unused images...');
    
    if (typeof completeImageMap === 'undefined' || typeof enhancedChapterImageMap === 'undefined') {
        console.error('❌ Image maps not available');
        return;
    }
    
    const allImageKeys = Object.keys(completeImageMap);
    const usedImageKeys = new Set();
    
    // Collect all used image keys
    Object.values(enhancedChapterImageMap).forEach(imageArray => {
        imageArray.forEach(key => usedImageKeys.add(key));
    });
    
    const unusedImages = allImageKeys.filter(key => !usedImageKeys.has(key));
    
    console.log(`📊 Image Usage Statistics:`);
    console.log(`   Total images: ${allImageKeys.length}`);
    console.log(`   Used images: ${usedImageKeys.size}`);
    console.log(`   Unused images: ${unusedImages.length}`);
    
    if (unusedImages.length > 0) {
        console.log('📋 Unused images:');
        unusedImages.forEach(key => {
            console.log(`   - ${key}: ${completeImageMap[key].split('/').pop().substring(0, 80)}...`);
        });
    } else {
        console.log('✅ All images are being used!');
    }
    
    return {
        total: allImageKeys.length,
        used: usedImageKeys.size,
        unused: unusedImages.length,
        unusedImages
    };
}

// Create download button for testing
function createImageTestButton() {
    const button = document.createElement('button');
    button.innerHTML = '🧪 Test Image Integration';
    button.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 9999;
        background: #2E8B57;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    `;
    
    button.onclick = function() {
        console.clear();
        console.log('🚀 Starting Image Integration Test...');
        
        const integrationResults = testImageIntegration();
        const unusedResults = testUnusedImages();
        
        const totalResults = {
            ...integrationResults,
            ...unusedResults,
            timestamp: new Date().toISOString()
        };
        
        console.log('📋 Complete Test Results:', totalResults);
        
        // Show results in a alert for user
        alert(`🧪 Image Integration Test Results:

📊 Total Images: ${totalResults.total}
✅ Used Images: ${totalResults.used}
⚠️ Unused Images: ${totalResults.unused}
📚 Chapters with Images: ${totalResults.chaptersWithImages}

${totalResults.unused > 0 ? 
    '⚠️ Some images are not yet integrated. Check console for details.' : 
    '✅ All images are properly integrated!'
}`);
    };
    
    document.body.appendChild(button);
}

// Auto-run test when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 Page loaded - Image Integration Test Ready');
    createImageTestButton();
    
    // Auto-run basic test
    setTimeout(() => {
        console.log('🚀 Auto-running basic image test...');
        testImageIntegration();
    }, 2000);
});

// Make functions available globally for debugging
window.testImageIntegration = testImageIntegration;
window.testUnusedImages = testUnusedImages;
