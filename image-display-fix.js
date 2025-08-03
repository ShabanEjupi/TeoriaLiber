// Image Display Fix for Game Theory Book
// This script fixes all image display issues and conflicts

(function() {
    'use strict';
    
    console.log('🔧 Starting Image Display Fix...');
    
    // Wait for DOM to be ready
    function initFix() {
        // Remove duplicate image galleries
        removeDuplicateGalleries();
        
        // Fix image paths and ensure proper loading
        fixImagePaths();
        
        // Fix chapter content rendering
        fixChapterContentRendering();
        
        // Apply image gallery styles
        applyImageStyles();
        
        console.log('✅ Image Display Fix completed');
    }
    
    function removeDuplicateGalleries() {
        console.log('🧹 Removing duplicate image galleries...');
        
        // Find all chapter image galleries
        const galleries = document.querySelectorAll('.chapter-image-gallery');
        
        // Group galleries by parent chapter
        const galleryMap = new Map();
        
        galleries.forEach(gallery => {
            const chapterElement = gallery.closest('[id*="chapter"], .chapter-content, .chapter');
            if (chapterElement) {
                const chapterKey = chapterElement.id || chapterElement.className;
                if (!galleryMap.has(chapterKey)) {
                    galleryMap.set(chapterKey, []);
                }
                galleryMap.get(chapterKey).push(gallery);
            }
        });
        
        // Remove duplicates (keep only the first gallery per chapter)
        galleryMap.forEach((galleries, chapterKey) => {
            if (galleries.length > 1) {
                console.log(`🗑️ Removing ${galleries.length - 1} duplicate galleries from ${chapterKey}`);
                for (let i = 1; i < galleries.length; i++) {
                    galleries[i].remove();
                }
            }
        });
    }
    
    function fixImagePaths() {
        console.log('🖼️ Fixing image paths...');
        
        // Find all images with problematic src attributes
        const images = document.querySelectorAll('img[src*="Create "], img[src*="Feature chess"]');
        
        images.forEach(img => {
            const src = img.src;
            
            // If the src contains the long prompt text, it means it's a valid file path
            // but might be causing display issues
            if (src.includes('Create ') || src.includes('Feature chess')) {
                console.log('🔧 Found image with long filename:', src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('/') + 51) + '...');
                
                // Add error handling and proper styling
                img.style.cssText = `
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                    border-radius: 15px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                    margin: 20px auto;
                    display: block;
                `;
                
                // Add load and error handlers
                img.onload = function() {
                    console.log('✅ Image loaded successfully:', this.alt || 'No alt text');
                    this.style.opacity = '1';
                };
                
                img.onerror = function() {
                    console.error('❌ Failed to load image:', this.src.substring(this.src.lastIndexOf('/') + 1, this.src.lastIndexOf('/') + 51) + '...');
                    this.style.display = 'none';
                };
                
                // Set initial opacity for smooth loading
                img.style.opacity = '0.8';
            }
        });
    }
    
    function fixChapterContentRendering() {
        console.log('📄 Fixing chapter content rendering...');
        
        // Check if chapter content is being displayed as text instead of HTML
        const chapterContent = document.getElementById('chapter-content');
        if (chapterContent) {
            const content = chapterContent.innerHTML;
            
            // If content contains HTML tags as text, it means it's not being rendered properly
            if (content.includes('&lt;img') || content.includes('&lt;div')) {
                console.log('🔧 Fixing HTML entity encoding in chapter content...');
                
                // Decode HTML entities
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = content;
                chapterContent.innerHTML = tempDiv.textContent || tempDiv.innerText || '';
            }
        }
        
        // Fix any text nodes that contain HTML
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    if (node.textContent.includes('<img') || 
                        node.textContent.includes('Feature chess pieces')) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_REJECT;
                }
            }
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        textNodes.forEach(textNode => {
            if (textNode.textContent.includes('<img') || 
                textNode.textContent.includes('Feature chess pieces')) {
                console.log('🔧 Converting text node to HTML:', textNode.textContent.substring(0, 50) + '...');
                
                const wrapper = document.createElement('div');
                wrapper.innerHTML = textNode.textContent;
                textNode.parentNode.replaceChild(wrapper, textNode);
            }
        });
    }
    
    function applyImageStyles() {
        console.log('🎨 Applying image gallery styles...');
        
        // Add comprehensive CSS for image galleries
        const style = document.createElement('style');
        style.textContent = `
            .chapter-image-gallery {
                margin: 30px 0;
                text-align: center;
                clear: both;
            }
            
            .chapter-image-gallery.single-image {
                margin: 20px 0;
            }
            
            .chapter-image-gallery img {
                width: 100%;
                max-width: 600px;
                height: auto;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                margin: 20px auto;
                display: block;
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            
            .chapter-image-gallery img:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 35px rgba(0,0,0,0.2);
            }
            
            .chapter-image-gallery.multi-images {
                margin: 30px 0;
            }
            
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            
            .gallery-image-item img {
                width: 100%;
                height: auto;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
            }
            
            .gallery-image-item img:hover {
                transform: scale(1.05);
            }
            
            /* Hide broken images gracefully */
            img[src*="Create "]:not([src$=".jpg"]):not([src$=".png"]):not([src$=".gif"]) {
                display: none;
            }
            
            /* Ensure images load properly */
            .chapter-image-gallery img[src] {
                opacity: 1;
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                .chapter-image-gallery img {
                    max-width: 100%;
                    margin: 15px auto;
                }
                
                .gallery-grid {
                    grid-template-columns: 1fr;
                    gap: 15px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // Initialize fix when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFix);
    } else {
        initFix();
    }
    
    // Also run fix when new content is loaded (for dynamic content)
    const observer = new MutationObserver(function(mutations) {
        let shouldRunFix = false;
        
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.querySelector && 
                            (node.querySelector('.chapter-image-gallery') || 
                             node.querySelector('img[src*="Create "]'))) {
                            shouldRunFix = true;
                        }
                    }
                });
            }
        });
        
        if (shouldRunFix) {
            console.log('🔄 New content detected, re-applying image fixes...');
            setTimeout(initFix, 100); // Small delay to ensure content is fully loaded
        }
    });
    
    // Observe changes to the chapter content area
    const chapterContent = document.getElementById('chapter-content');
    if (chapterContent) {
        observer.observe(chapterContent, {
            childList: true,
            subtree: true
        });
    }
    
    // Export functions for manual use if needed
    window.ImageDisplayFix = {
        removeDuplicateGalleries,
        fixImagePaths,
        fixChapterContentRendering,
        applyImageStyles,
        reinitialize: initFix
    };
    
})();
