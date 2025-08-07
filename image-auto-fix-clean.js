// Auto Image Integration and Error Handling Script
// Automatically handles missing images and provides fallback content

// All available images mapping
const allAvailableImages = {
    1: "imazhet/Create an elegant book cover for 'Teoria e Lojërave Nderi dhe Suksesi'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png",
    2: "imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg",
    3: "imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg",
    67: "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 67'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
    68: "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 68'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg",
    69: "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 69'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png"
};

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
            <p>Teoria e Lojërave: Nderi dhe Suksesi</p>
            <small>Imazhi do të shtohet së shpejti</small>
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
        font-family: 'Inter', sans-serif;
    `;
    
    // Replace the image with placeholder
    if (img.parentNode) {
        img.parentNode.replaceChild(placeholder, img);
    }
}

// Function to process all images in the document
function processAllImages() {
    const images = document.querySelectorAll('.chapter-image img');
    images.forEach(img => {
        img.onerror = function() {
            const chapterMatch = img.src.match(/Kapitulli (\d+)/);
            const chapterNum = chapterMatch ? parseInt(chapterMatch[1]) : 1;
            handleImageError(img, chapterNum);
        };
        
        // Try to load the image
        const testImg = new Image();
        testImg.onload = function() {
            console.log(`✅ Image loaded successfully: ${img.src}`);
        };
        testImg.onerror = function() {
            const chapterMatch = img.src.match(/Kapitulli (\d+)/);
            const chapterNum = chapterMatch ? parseInt(chapterMatch[1]) : 1;
            handleImageError(img, chapterNum);
        };
        testImg.src = img.src;
    });
}

// Function to check image paths and provide diagnostic info
function checkImagePaths() {
    console.log('🔍 Checking image paths...');
    const images = document.querySelectorAll('.chapter-image img');
    const results = {
        total: images.length,
        found: 0,
        missing: 0,
        details: []
    };
    
    images.forEach((img, index) => {
        const testImg = new Image();
        testImg.onload = function() {
            results.found++;
            results.details.push({ src: img.src, status: 'found' });
            console.log(`✅ Found: ${img.src}`);
        };
        testImg.onerror = function() {
            results.missing++;
            results.details.push({ src: img.src, status: 'missing' });
            console.log(`❌ Missing: ${img.src}`);
        };
        testImg.src = img.src;
    });
    
    setTimeout(() => {
        console.log('📊 Image Check Results:', results);
        if (typeof updateImageStats === 'function') {
            updateImageStats(results.found, results.missing);
        }
    }, 2000);
    
    return results;
}

// Force integrate all available images
function forceIntegrateAllImages() {
    console.log('🚀 Force integrating all available images...');
    
    Object.keys(allAvailableImages).forEach(chapterNum => {
        const imagePath = allAvailableImages[chapterNum];
        
        // Test if image actually exists
        const testImg = new Image();
        testImg.onload = function() {
            console.log(`✅ Image ${chapterNum} integrated successfully`);
        };
        testImg.onerror = function() {
            console.log(`❌ Image ${chapterNum} still not accessible: ${imagePath}`);
        };
        testImg.src = imagePath;
    });
}

// Make functions globally available
window.handleImageError = handleImageError;
window.processAllImages = processAllImages;
window.checkImagePaths = checkImagePaths;
window.forceIntegrateAllImages = forceIntegrateAllImages;
window.allAvailableImages = allAvailableImages;

// Auto-process images when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(processAllImages, 1000);
});

// Re-process images when chapter content changes
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
            setTimeout(processAllImages, 100);
        }
    });
});

// Start observing
document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        observer.observe(contentArea, { childList: true, subtree: true });
    }
});

console.log('🖼️ Image auto-fix script loaded successfully');
