// 🔍 VERIFICATION SCRIPT - Test nëse Ultimate Image Fix funksionon
console.log('🔍 Starting Ultimate Image Fix Verification...');

function runUltimateImageFixVerification() {
    const results = {
        timestamp: new Date().toISOString(),
        ultimateFixLoaded: false,
        oldConflictsRemoved: true,
        imagesApplied: 0,
        duplicatesFound: 0,
        chaptersWithImages: 0,
        chaptersWithoutImages: 0,
        totalChapters: 0
    };
    
    // Check if Ultimate Image Fix is loaded
    if (typeof UltimateImageFix !== 'undefined') {
        results.ultimateFixLoaded = true;
        console.log('✅ Ultimate Image Fix is loaded');
        
        // Check available functions
        const availableFunctions = Object.keys(UltimateImageFix);
        console.log('🛠️ Available functions:', availableFunctions);
        
        // Check image map
        const imageMapSize = Object.keys(UltimateImageFix.imageMap || {}).length;
        console.log(`🗺️ Image map contains ${imageMapSize} entries`);
    } else {
        console.warn('❌ Ultimate Image Fix not loaded');
    }
    
    // Check for old conflicting scripts
    const conflictingElements = document.querySelectorAll('script[src*="image-display-fix"], script[src*="image-integration"], script[src*="content-fix"]');
    if (conflictingElements.length > 0) {
        results.oldConflictsRemoved = false;
        console.warn(`⚠️ Found ${conflictingElements.length} potentially conflicting script elements`);
        conflictingElements.forEach(el => console.warn('Conflicting script:', el.src));
    } else {
        console.log('✅ No conflicting scripts found');
    }
    
    // Check chapter images
    if (typeof chapters !== 'undefined') {
        results.totalChapters = Object.keys(chapters).length;
        console.log(`📚 Found ${results.totalChapters} chapters`);
        
        for (let i = 1; i <= Math.min(30, results.totalChapters); i++) {
            if (chapters[i]) {
                const content = chapters[i].content;
                const imageMatches = content.match(/<img[^>]*>/g) || [];
                const galleryMatches = content.match(/chapter-image-container|chapter-image-gallery/g) || [];
                
                if (imageMatches.length > 0 || galleryMatches.length > 0) {
                    results.chaptersWithImages++;
                    
                    if (imageMatches.length > 1) {
                        results.duplicatesFound++;
                        console.warn(`⚠️ Chapter ${i} has ${imageMatches.length} images (potential duplicate)`);
                    } else {
                        console.log(`✅ Chapter ${i} has 1 image`);
                    }
                } else {
                    results.chaptersWithoutImages++;
                    console.log(`ℹ️ Chapter ${i} has no images`);
                }
            }
        }
    } else {
        console.warn('❌ Chapters object not found');
    }
    
    // Check current DOM state
    const currentImages = document.querySelectorAll('.chapter-main-image, .chapter-image-container img');
    results.imagesApplied = currentImages.length;
    console.log(`🖼️ Currently ${currentImages.length} images in DOM`);
    
    // Check for duplicates in DOM
    const allGalleries = document.querySelectorAll('.chapter-image-container, .chapter-image-gallery, .single-chapter-image');
    if (allGalleries.length > results.imagesApplied) {
        console.warn(`⚠️ Found ${allGalleries.length} gallery containers but only ${results.imagesApplied} images`);
    }
    
    // Generate report
    console.log('\n📊 VERIFICATION REPORT:');
    console.log('========================');
    console.log(`✅ Ultimate Fix Loaded: ${results.ultimateFixLoaded}`);
    console.log(`✅ Old Conflicts Removed: ${results.oldConflictsRemoved}`);
    console.log(`📈 Images Applied: ${results.imagesApplied}`);
    console.log(`⚠️ Duplicates Found: ${results.duplicatesFound}`);
    console.log(`🖼️ Chapters with Images: ${results.chaptersWithImages}`);
    console.log(`📝 Chapters without Images: ${results.chaptersWithoutImages}`);
    console.log(`📚 Total Chapters: ${results.totalChapters}`);
    
    // Overall assessment
    const isSuccessful = results.ultimateFixLoaded && 
                        results.oldConflictsRemoved && 
                        results.duplicatesFound === 0 && 
                        results.chaptersWithImages > 0;
    
    if (isSuccessful) {
        console.log('\n🎉 SUCCESS: Ultimate Image Fix is working correctly!');
    } else {
        console.log('\n❌ ISSUES DETECTED: Some problems need attention');
        
        if (!results.ultimateFixLoaded) {
            console.log('   → Load ultimate-image-fix.js');
        }
        if (!results.oldConflictsRemoved) {
            console.log('   → Remove conflicting scripts from index.html');
        }
        if (results.duplicatesFound > 0) {
            console.log('   → Run UltimateImageFix.reset() to fix duplicates');
        }
    }
    
    return results;
}

// Auto-run if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(runUltimateImageFixVerification, 2000);
    });
} else {
    setTimeout(runUltimateImageFixVerification, 2000);
}

// Export for manual use
window.runUltimateImageFixVerification = runUltimateImageFixVerification;

console.log('✅ Verification script loaded. Results will appear in 2 seconds...');
