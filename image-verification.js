// Image Verification Script - Test if all 111 chapters have proper image mapping
(function() {
    'use strict';
    
    console.log('🔍 Starting Image Verification for all 111 chapters...');

    // Function to verify image mapping
    window.verifyImageMapping = function() {
        console.log('📊 Verifying image mapping for all chapters...');
        
        let mappedChapters = 0;
        let unmappedChapters = 0;
        let successfulLoads = 0;
        let failedLoads = 0;
        
        for (let i = 1; i <= 111; i++) {
            const imagePath = window.getImagePathForChapter ? window.getImagePathForChapter(i) : null;
            
            if (imagePath) {
                mappedChapters++;
                console.log(`✅ Kapitulli ${i}: ${imagePath}`);
                
                // Test if image exists by trying to load it
                const img = new Image();
                img.onload = function() {
                    successfulLoads++;
                    console.log(`🖼️ SUCCESS: Image loaded for chapter ${i}`);
                };
                img.onerror = function() {
                    failedLoads++;
                    console.warn(`❌ FAILED: Image not found for chapter ${i}: ${imagePath}`);
                };
                img.src = imagePath;
            } else {
                unmappedChapters++;
                console.warn(`⚠️ No image mapped for chapter ${i}`);
            }
        }
        
        setTimeout(() => {
            console.log(`\n📈 FINAL RESULTS:`);
            console.log(`📚 Total chapters: 111`);
            console.log(`✅ Mapped chapters: ${mappedChapters}`);
            console.log(`❌ Unmapped chapters: ${unmappedChapters}`);
            console.log(`🖼️ Successfully loaded images: ${successfulLoads}`);
            console.log(`💥 Failed to load images: ${failedLoads}`);
            console.log(`📊 Success rate: ${((successfulLoads / mappedChapters) * 100).toFixed(1)}%`);
            
            if (mappedChapters === 111 && failedLoads === 0) {
                console.log('🎉 ALL IMAGES ARE PROPERLY MAPPED AND ACCESSIBLE!');
            } else if (mappedChapters === 111) {
                console.log('⚠️ All chapters mapped but some images failed to load');
            } else {
                console.log('❌ Some chapters are missing image mappings');
            }
        }, 5000); // Wait 5 seconds for all images to load
        
        return {
            mappedChapters,
            unmappedChapters,
            totalChapters: 111
        };
    };

    // Function to count available images in folder
    window.countAvailableImages = function() {
        console.log('📁 Counting available images in imazhet folder...');
        
        // This would need to be run from browser console when page is loaded
        // since we can't directly access file system from JavaScript
        console.log('ℹ️ To count images, run this in browser console:');
        console.log('fetch("./imazhet/").then(r => r.text()).then(html => console.log("Images found:", (html.match(/\\.jpg|\\.png|\\.jpeg/gi) || []).length))');
    };

    // Function to show image distribution
    window.showImageDistribution = function() {
        console.log('📊 Showing image distribution across chapters...');
        
        const imageCount = {};
        for (let i = 1; i <= 111; i++) {
            const imagePath = window.getImagePathForChapter ? window.getImagePathForChapter(i) : null;
            if (imagePath) {
                const fileName = imagePath.split('/').pop();
                imageCount[fileName] = (imageCount[fileName] || 0) + 1;
            }
        }
        
        console.log('🔄 Image reuse count:');
        Object.entries(imageCount).forEach(([fileName, count]) => {
            console.log(`${count}x: ${fileName.substring(0, 50)}...`);
        });
    };

    // Auto-run verification when script loads
    setTimeout(() => {
        if (typeof window.getImagePathForChapter === 'function') {
            console.log('✅ Image mapping function found, running verification...');
            window.verifyImageMapping();
            window.showImageDistribution();
        } else {
            console.warn('⚠️ Image mapping function not found. Please load image-auto-fix.js first.');
        }
    }, 1000);

    console.log('✅ Image Verification Script loaded successfully');

})();
