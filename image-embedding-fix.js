// Enhanced Image Embedding Fix - Addresses PDF and Download Issues
(function() {
    'use strict';
    
    console.log('🔧 Starting Enhanced Image Embedding Fix...');

    // Enhanced image integration that works better with PDF generation
    function enhanceImageEmbedding() {
        console.log('📸 Enhancing image embedding for PDF compatibility...');
        
        // Fix 1: Ensure all images have proper base64 encoding for PDF
        const images = document.querySelectorAll('img');
        let processedImages = 0;
        
        images.forEach((img, index) => {
            // Add loading event listeners
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.setAttribute('data-loaded', 'true');
            });
            
            img.addEventListener('error', function() {
                console.warn(`❌ Failed to load image: ${this.src}`);
                // Replace with placeholder
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Im0xNTcuNSAxNzUgNDUtNDUgNDUgNDUtNDUgNDV6bTEwMCAwLTQ1LTQ1IDQ1IDQ1em0tMTAwLTkwIDQ1IDQ1LTQ1IDQ1em0xMDAgMCA0NS00NS00NSA0NXoiIGZpbGw9IiNEMUQ1REIiLz4KPHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Im0xNTcuNSAxNzUgNDUtNDUgNDUgNDUtNDUgNDV6bTEwMCAwLTQ1LTQ1IDQ1IDQ1em0tMTAwLTkwIDQ1IDQ1LTQ1IDQ1em0xMDAgMCA0NS00NS00NSA0NXoiIGZpbGw9IiNEMUQ1REIiLz4KPHU+CQk8L3U+Cjx1PjwvdT4KPHU+CQk8L3U+Cjx1PjwvdT4KPHU+CQk8L3U+Cjx1PjwvdT4KPHU+CQk8L3U+Cjx1PjwvdT4KPHU+CQk8L3U+Cjx1PjwvdT4KPHU+CQk8L3U+Cjx1PjwvdT4KPHU+CQk8L3U+CgpkaWE6ZGlhZ3JhbSAAYWM0OTYyNDE2Y2VlY2Q5OApuYXZpZ2F0aW9uAAYgCQnAAAYgCQnAAAYgCQnAcyAgZGlhOmRpYWdyYW0gCgoK';
                this.alt = '📷 Imazhi nuk u gjet - do të shtohet së shpejti';
            });
            
            // Ensure proper attributes for PDF generation
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.style.display = 'block';
            img.style.margin = '1rem auto';
            img.style.borderRadius = '8px';
            img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            
            processedImages++;
        });
        
        console.log(`✅ Processed ${processedImages} images for enhanced embedding`);
    }

    // Fix 2: Improve image paths for download functionality
    function fixImagePathsForDownload() {
        console.log('🔗 Fixing image paths for download compatibility...');
        
        // Convert relative paths to absolute paths
        const images = document.querySelectorAll('img[src^="imazhet/"]');
        
        images.forEach(img => {
            const currentSrc = img.src;
            const newSrc = window.location.origin + window.location.pathname.replace('index.html', '') + img.getAttribute('src');
            img.setAttribute('data-original-src', img.getAttribute('src'));
            img.src = newSrc;
        });
        
        console.log(`🔗 Fixed ${images.length} image paths for download`);
    }

    // Fix 3: Add image preloading for better PDF generation
    function preloadChapterImages() {
        console.log('⚡ Preloading chapter images...');
        
        if (typeof window.getChapterImages === 'function') {
            let preloadedCount = 0;
            
            for (let i = 1; i <= 111; i++) {
                const images = window.getChapterImages(i);
                
                images.forEach(imagePath => {
                    if (imagePath) {
                        const img = new Image();
                        img.onload = () => {
                            preloadedCount++;
                            if (preloadedCount % 10 === 0) {
                                console.log(`📸 Preloaded ${preloadedCount} images...`);
                            }
                        };
                        img.src = imagePath;
                    }
                });
            }
        }
    }

    // Fix 4: Enhanced image gallery for chapters
    function createEnhancedImageGallery(chapterNumber) {
        if (!window.getChapterImages) return '';
        
        const images = window.getChapterImages(chapterNumber);
        if (!images || images.length === 0) return '';
        
        let galleryHTML = `
        <div class="enhanced-image-gallery" style="
            margin: 2rem 0; 
            padding: 1.5rem; 
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); 
            border-radius: 15px; 
            border: 2px solid #DAA520;
            page-break-inside: avoid;
        ">
            <h4 style="text-align: center; color: #2E8B57; margin-bottom: 1.5rem; font-size: 1.2rem;">
                📸 Ilustrime për Kapitullin ${chapterNumber}
            </h4>
        `;
        
        if (images.length === 1) {
            // Single image - make it prominent
            galleryHTML += `
            <div style="text-align: center; margin: 1.5rem 0;">
                <img src="${images[0]}" 
                     alt="Ilustrim për Kapitullin ${chapterNumber}" 
                     style="
                         max-width: 90%; 
                         height: auto; 
                         border-radius: 12px; 
                         box-shadow: 0 8px 24px rgba(0,0,0,0.15);
                         transition: transform 0.3s ease;
                     "
                     onload="this.style.opacity='1'"
                     onerror="this.style.display='none'"
                />
                <p style="
                    font-style: italic; 
                    color: #666; 
                    margin-top: 1rem; 
                    font-size: 0.9rem; 
                    text-align: center;
                ">
                    📷 Figura ${chapterNumber}.1: Ilustrim për kapitullin "${window.getChapterTitle ? window.getChapterTitle(chapterNumber) : 'Kapitulli ' + chapterNumber}"
                </p>
            </div>
            `;
        } else {
            // Multiple images - create grid
            galleryHTML += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">';
            
            images.forEach((imagePath, index) => {
                galleryHTML += `
                <div style="text-align: center;">
                    <img src="${imagePath}" 
                         alt="Ilustrim ${index + 1} për Kapitullin ${chapterNumber}" 
                         style="
                             width: 100%; 
                             height: 200px; 
                             object-fit: cover; 
                             border-radius: 8px; 
                             box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                         "
                         onload="this.style.opacity='1'"
                         onerror="this.style.display='none'"
                    />
                    <p style="
                        font-style: italic; 
                        color: #666; 
                        margin-top: 0.5rem; 
                        font-size: 0.8rem;
                    ">
                        📷 Figura ${chapterNumber}.${index + 1}
                    </p>
                </div>
                `;
            });
            
            galleryHTML += '</div>';
        }
        
        galleryHTML += '</div>';
        
        return galleryHTML;
    }

    // Fix 5: Improve image integration in chapter content
    function integrateImagesIntoChapters() {
        console.log('🔗 Integrating images into chapter content...');
        
        if (!window.chapters) return;
        
        let integratedChapters = 0;
        
        for (let i = 1; i <= 111; i++) {
            if (window.chapters[i] && window.chapters[i].content) {
                const content = window.chapters[i].content;
                
                // Check if chapter already has images
                if (!content.includes('<img') && !content.includes('enhanced-image-gallery')) {
                    const imageGallery = createEnhancedImageGallery(i);
                    
                    if (imageGallery) {
                        // Insert gallery after the main title
                        const titleMatch = content.match(/(<h2[^>]*>.*?<\/h2>)/i);
                        
                        if (titleMatch) {
                            const insertPos = content.indexOf(titleMatch[0]) + titleMatch[0].length;
                            window.chapters[i].content = content.slice(0, insertPos) + '\n\n' + imageGallery + '\n\n' + content.slice(insertPos);
                            integratedChapters++;
                        }
                    }
                }
            }
        }
        
        console.log(`✅ Integrated images into ${integratedChapters} chapters`);
    }

    // Fix 6: Add CSS for better PDF rendering
    function addPDFOptimizedCSS() {
        if (document.getElementById('pdf-optimized-css')) return;
        
        const style = document.createElement('style');
        style.id = 'pdf-optimized-css';
        style.textContent = `
            @media print {
                .enhanced-image-gallery {
                    page-break-inside: avoid !important;
                    margin: 1rem 0 !important;
                }
                
                .enhanced-image-gallery img {
                    max-width: 100% !important;
                    height: auto !important;
                    page-break-inside: avoid !important;
                }
                
                .chapter-image-container {
                    page-break-inside: avoid !important;
                }
                
                img {
                    max-width: 100% !important;
                    height: auto !important;
                    page-break-inside: avoid !important;
                }
            }
            
            .image-loading {
                opacity: 0.5;
                transition: opacity 0.3s ease;
            }
            
            .image-loaded {
                opacity: 1;
            }
            
            .image-error {
                display: none;
            }
        `;
        
        document.head.appendChild(style);
        console.log('✅ Added PDF-optimized CSS');
    }

    // Fix 7: Monitor image loading status
    function monitorImageLoading() {
        const images = document.querySelectorAll('img');
        let loadedCount = 0;
        let errorCount = 0;
        
        const checkProgress = () => {
            const total = images.length;
            const percentage = ((loadedCount + errorCount) / total * 100).toFixed(1);
            
            if (loadedCount + errorCount === total) {
                console.log(`📸 Image loading complete: ${loadedCount} loaded, ${errorCount} failed (${percentage}%)`);
            }
        };
        
        images.forEach(img => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.addEventListener('load', () => {
                    loadedCount++;
                    checkProgress();
                });
                
                img.addEventListener('error', () => {
                    errorCount++;
                    checkProgress();
                });
            }
        });
        
        checkProgress();
    }

    // Main execution function
    function executeImageEmbeddingFix() {
        console.log('🚀 Executing comprehensive image embedding fix...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', executeImageEmbeddingFix);
            return;
        }
        
        // Execute all fixes
        addPDFOptimizedCSS();
        enhanceImageEmbedding();
        fixImagePathsForDownload();
        integrateImagesIntoChapters();
        preloadChapterImages();
        
        // Monitor progress
        setTimeout(() => {
            monitorImageLoading();
        }, 1000);
        
        console.log('✅ Image embedding fix completed!');
    }

    // Export functions for manual use
    window.imageEmbeddingFix = {
        enhance: enhanceImageEmbedding,
        fixPaths: fixImagePathsForDownload,
        preload: preloadChapterImages,
        integrate: integrateImagesIntoChapters,
        monitor: monitorImageLoading,
        executeAll: executeImageEmbeddingFix
    };

    // Auto-execute when script loads
    executeImageEmbeddingFix();

    console.log('🎯 Image Embedding Fix loaded and ready!');
})();
