// Auto Image Integration and Error Handling Script
// Automatically handles missing images and provides fallback content

// Function to check if image exists and handle errors
function handleImageError(img, chapterNum) {
    console.log(`❌ Image not found for chapter ${chapterNum}: ${img.src}`);
    
    // Create a placeholder with Islamic geometric pattern
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.innerHTML = `
        <div class="placeholder-content">
            <div class="islamic-pattern">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <pattern id="islamicPattern${chapterNum}" patternUnits="userSpaceOnUse" width="20" height="20">
                        <path d="M10,0 L20,10 L10,20 L0,10 Z" fill="#2E8B57" opacity="0.3"/>
                        <circle cx="10" cy="10" r="3" fill="#DAA520" opacity="0.7"/>
                    </pattern>
                    <rect width="100" height="100" fill="url(#islamicPattern${chapterNum})"/>
                </svg>
            </div>
            <h3>📖 Kapitulli ${chapterNum}</h3>
            <p>Imazhi është duke u ngarkuar...</p>
        </div>
    `;
    
    placeholder.style.cssText = `
        width: 100%;
        max-width: 600px;
        height: 300px;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border: 2px dashed #2E8B57;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
        text-align: center;
        color: #2E8B57;
    `;
    
    // Replace the image with placeholder
    if (img.parentNode) {
        img.parentNode.replaceChild(placeholder, img);
    }
}

// Function to process all images in the document
function processAllImages() {
    const images = document.querySelectorAll('.chapter-image img');
    
    images.forEach((img, index) => {
        // Extract chapter number from image alt or src
        const chapterMatch = img.src.match(/Kapitulli (\d+)/);
        const chapterNum = chapterMatch ? chapterMatch[1] : index + 1;
        
        // Set up error handling
        img.onerror = function() {
            handleImageError(this, chapterNum);
        };
        
        // Check if image is already loaded but failed
        if (img.complete && img.naturalHeight === 0) {
            handleImageError(img, chapterNum);
        }
        
        // Set loading timeout
        setTimeout(() => {
            if (!img.complete || img.naturalHeight === 0) {
                handleImageError(img, chapterNum);
            }
        }, 5000); // 5 second timeout
    });
}

// Function to auto-fix image paths
function autoFixImagePaths() {
    const images = document.querySelectorAll('.chapter-image img');
    
    images.forEach((img) => {
        const src = img.src;
        
        // If image path doesn't start with proper path, fix it
        if (src && !src.includes('imazhet/') && !src.startsWith('http')) {
            const filename = src.split('/').pop();
            img.src = `imazhet/${filename}`;
            console.log(`🔧 Fixed image path: ${img.src}`);
        }
        
        // Add chapter number extraction for better error handling
        const chapterMatch = img.alt.match(/(\d+)/) || img.src.match(/Kapitulli (\d+)/);
        if (chapterMatch) {
            img.dataset.chapter = chapterMatch[1];
        }
    });
}

// Function to ensure all images are properly integrated
function ensureAllImagesIntegrated() {
    console.log('🖼️ Starting image integration process...');
    
    // First, fix any malformed paths
    autoFixImagePaths();
    
    // Then process all images for error handling
    processAllImages();
    
    // Update gallery images if they exist
    updateGalleryImages();
    
    console.log('✅ Image integration completed');
}

// Function to update gallery images
function updateGalleryImages() {
    const gallerySection = document.getElementById('gallery');
    if (!gallerySection) return;
    
    // Add available images to gallery
    const availableImages = [
        'Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
        'Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg',
        'Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg'
    ];
    
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        availableImages.forEach((imageName, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-card';
            galleryItem.innerHTML = `
                <img src="imazhet/${imageName}" 
                     alt="Imazh ilustrues ${index + 1}" 
                     onclick="openImageModal(this.src, this.alt)"
                     onerror="this.parentElement.style.display='none'">
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }
}

// Function to create image modal
function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;
    
    modal.innerHTML = `
        <div style="max-width: 90%; max-height: 90%; text-align: center;">
            <img src="${src}" alt="${alt}" style="max-width: 100%; max-height: 80vh; border-radius: 10px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
            <p style="color: white; margin-top: 20px; font-size: 18px;">${alt}</p>
            <p style="color: #ccc; margin-top: 10px;">Kliko për të mbyllur</p>
        </div>
    `;
    
    modal.onclick = function() {
        document.body.removeChild(modal);
    };
    
    document.body.appendChild(modal);
}

// Auto-run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(ensureAllImagesIntegrated, 1000);
});

// Auto-run when chapter content changes
const originalShowChapter = window.showChapter;
if (originalShowChapter) {
    window.showChapter = function(chapterNumber) {
        originalShowChapter(chapterNumber);
        setTimeout(processAllImages, 500);
    };
}

// Export functions for global use
window.ensureAllImagesIntegrated = ensureAllImagesIntegrated;
window.processAllImages = processAllImages;
window.autoFixImagePaths = autoFixImagePaths;
window.openImageModal = openImageModal;

console.log('🖼️ Image auto-fix script loaded successfully');
