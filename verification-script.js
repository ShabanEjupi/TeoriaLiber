// Quick Verification Script
// Run this in browser console to check if fixes are working

function runImageAndContentVerification() {
    console.log('🔍 Starting Image and Content Verification...');
    
    let results = {
        totalChapters: 0,
        chaptersWithImages: 0,
        workingImages: 0,
        brokenImages: 0,
        chatPromptsRemaining: 0,
        enhancedContent: 0
    };
    
    // Check chapters object
    if (typeof chapters === 'object') {
        results.totalChapters = Object.keys(chapters).length;
        console.log(`📚 Found ${results.totalChapters} chapters`);
        
        // Check first 50 chapters for images and prompts
        for (let i = 1; i <= Math.min(50, results.totalChapters); i++) {
            if (chapters[i]) {
                const content = chapters[i].content;
                
                // Check for images
                if (content.includes('<img') || content.includes('chapter-image-gallery')) {
                    results.chaptersWithImages++;
                }
                
                // Check for remaining chat prompts
                if (content.includes('Create ') || content.includes('ai-prompt-box')) {
                    results.chatPromptsRemaining++;
                    console.log(`❌ Chapter ${i} still has chat prompts`);
                }
                
                // Check for enhanced content
                if (content.includes('practical-application') || content.includes('enhanced-content')) {
                    results.enhancedContent++;
                }
            }
        }
    }
    
    // Check actual displayed images
    const images = document.querySelectorAll('img[src*="imazhet/"]');
    console.log(`🖼️ Found ${images.length} images in DOM`);
    
    images.forEach((img, index) => {
        if (img.complete && img.naturalWidth > 0) {
            results.workingImages++;
            console.log(`✅ Image ${index + 1}: ${img.src.split('/').pop()}`);
        } else if (img.complete && img.naturalWidth === 0) {
            results.brokenImages++;
            console.log(`❌ Image ${index + 1}: ${img.src.split('/').pop()}`);
        }
    });
    
    // Check if fix scripts are loaded
    const loadedSystems = [];
    if (window.ImageFix) loadedSystems.push('Image Fix');
    if (window.ContentFixer) loadedSystems.push('Content Fixer');
    if (window.ScriptFixer) loadedSystems.push('Script Fixer');
    if (window.EnhancedDownload) loadedSystems.push('Enhanced Download');
    
    console.log(`🛠️ Loaded systems: ${loadedSystems.join(', ')}`);
    
    // Generate report
    console.log('\n📊 VERIFICATION REPORT:');
    console.log('========================');
    console.log(`Total Chapters: ${results.totalChapters}`);
    console.log(`Chapters with Images: ${results.chaptersWithImages}/50`);
    console.log(`Working Images: ${results.workingImages}`);
    console.log(`Broken Images: ${results.brokenImages}`);
    console.log(`Remaining Chat Prompts: ${results.chatPromptsRemaining}`);
    console.log(`Enhanced Content Sections: ${results.enhancedContent}`);
    console.log(`Fix Systems Loaded: ${loadedSystems.length}/4`);
    
    // Calculate success rate
    const imageSuccessRate = images.length > 0 ? Math.round((results.workingImages / images.length) * 100) : 0;
    const promptCleanupRate = Math.round(((50 - results.chatPromptsRemaining) / 50) * 100);
    
    console.log(`\n🎯 SUCCESS RATES:`);
    console.log(`Image Loading: ${imageSuccessRate}%`);
    console.log(`Prompt Cleanup: ${promptCleanupRate}%`);
    
    if (imageSuccessRate >= 80 && promptCleanupRate >= 90) {
        console.log('🎉 VERIFICATION PASSED! Images and content fixes are working properly.');
    } else {
        console.log('⚠️ VERIFICATION NEEDS ATTENTION. Some issues remain.');
        
        if (imageSuccessRate < 80) {
            console.log('💡 Image fixes needed:');
            console.log('   - Check if imazhet/ folder exists');
            console.log('   - Verify image file names match exactly');
            console.log('   - Try refreshing the page (Ctrl+F5)');
        }
        
        if (promptCleanupRate < 90) {
            console.log('💡 Content fixes needed:');
            console.log('   - Run: window.ScriptFixer.fixScriptJsContent()');
            console.log('   - Refresh the page to see updates');
        }
    }
    
    return results;
}

// Auto-run verification
console.log('🚀 Image and Content Fix Verification Script Loaded');
console.log('💡 Run: runImageAndContentVerification() to check status');

// Export for easy access
window.verifyFixes = runImageAndContentVerification;
