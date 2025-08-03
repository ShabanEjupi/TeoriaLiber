// Image Display Fix - Ensures proper image display without generic replacements
console.log('🖼️ Loading Image Display Fix...');

// Function to restore proper images in chapters that have generic text
function restoreProperImages() {
    console.log('🔧 Starting image restoration process...');
    
    // Enhanced image map with all available images
    const completeImageMap = {
        'book-cover': 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
        'business-strategy': 'imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg',
        'smart-investment': 'imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png',
        'wedding-success': 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
        'family-career-harmony': 'imazhet/Create harmonious family-career scene Albanian family in luxury home, parent working on laptop while children play nearby, business success symbols integrated with family warmth, Islamic family values, golden threads conne.jpg',
        'business-honor': 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
        'sophisticated-negotiation': 'imazhet/Create sophisticated negotiation scene Albanian business leader across table from international partners, handshake with golden energy, cultural respect symbols, luxury office setting, Islamic fairness principles. Style di.jpg',
        'mindset-transformation': 'imazhet/Create powerful mindset transformation image Albanian professional meditating in luxury office, brain with golden neural networks, success symbols (Mercedes, beautiful house, happy family) floating around, Islamic geometri.png',
        'inspiring-leadership': 'imazhet/Create inspiring leadership scene Albanian leader guiding diverse team, golden light emanating from leader, team working in harmony, luxury corporate environment, Islamic leadership principles visible, cultural unity symbo.jpg',
        'ethical-marketing': 'imazhet/Create ethical marketing scene Albanian brand building with honest advertising, cultural values integrated, luxury brand elements, Islamic honesty symbols, golden trust networks connecting to customers. Style trustworthy,.jpg',
        'financial-management': 'imazhet/Create financial management scene Albanian CFO analyzing financial charts and dashboards, golden numbers flowing upward, luxury office with multiple monitors, Islamic geometric patterns on financial documents, prosperity s.jpg',
        'networking': 'imazhet/Create networking event scene Albanian professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Albanian symbols, golden connection networks. Style social, professio.png',
        'digital-business': 'imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png',
        'strategic-partnership': 'imazhet/Create strategic partnership scene Albanian business leaders from different industries shaking hands, golden connection webs linking various businesses, luxury boardroom, cultural diversity, Islamic partnership principle.jpg',
        'innovation-creativity': 'imazhet/Create innovation explosion scene Albanian entrepreneur surrounded by floating lightbulbs and creative ideas, luxury office with modern art, Islamic geometric creativity patterns, golden innovation energy. Style creative,.png',
        'sophisticated-investment': 'imazhet/Create sophisticated investment scene Albanian investor managing diverse portfolio, holographic charts showing global markets, luxury home office, Islamic finance symbols, golden growth arrows, real estate and stock certif.jpg',
        'ethical-sales': 'imazhet/Create ethical sales scene Albanian salesperson helping customer find perfect solution, handshake with golden honesty aura, customer satisfaction symbols, Islamic fairness principles, luxury business setting. Style helpful.jpg',
        'global-leadership': 'imazhet/Create global leadership scene Albanian business leader conducting international meeting with diverse team via video conference, world map in background, multiple flags, modern office with Albanian and Islamic cultural ele.jpg',
        'ai-business': 'imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg',
        'family-education': 'imazhet/Create inspiring family education scene Albanian parents teaching children about success and values, books and modern technology on table, luxury car visible through window representing future success, Islamic calligraphy.png'
    };
    
    // Chapter to image mapping
    const chapterImageMap = {
        1: 'book-cover',
        2: 'business-strategy', 
        3: 'smart-investment',
        4: 'wedding-success',
        5: 'family-career-harmony',
        6: 'business-honor',
        7: 'sophisticated-negotiation',
        8: 'mindset-transformation',
        9: 'inspiring-leadership',
        10: 'ethical-marketing',
        11: 'financial-management',
        12: 'networking',
        13: 'digital-business',
        14: 'strategic-partnership',
        15: 'innovation-creativity',
        16: 'sophisticated-investment',
        17: 'ethical-sales',
        18: 'global-leadership',
        19: 'ai-business',
        20: 'family-education'
    };
    
    // Function to create proper image HTML
    function createImageHTML(chapterNum, imageKey) {
        const imagePath = completeImageMap[imageKey];
        if (!imagePath) return '';
        
        return `
            <div class="chapter-image-gallery" style="margin: 20px 0; text-align: center;">
                <div class="single-chapter-image">
                    <img src="${imagePath}" 
                         alt="Ilustrim profesional për kapitullin ${chapterNum}" 
                         style="width: 100%; max-width: 600px; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 20px auto; display: block;"
                         onload="console.log('✅ Image loaded for chapter ${chapterNum}')"
                         onerror="console.warn('⚠️ Image load failed for chapter ${chapterNum}'); this.style.display='none';">
                </div>
            </div>
        `;
    }
    
    // Fix chapters that have generic content instead of proper images
    if (typeof chapters === 'object' && chapters) {
        let fixedCount = 0;
        
        for (let i = 1; i <= 20; i++) {
            if (chapters[i] && chapters[i].content && chapterImageMap[i]) {
                const content = chapters[i].content;
                
                // Check if chapter has generic replacement text instead of proper image
                const hasGenericText = content.includes('✨ Këtu gjeni përmbajtje të pasuruar') ||
                                     content.includes('📸 Ky kapitull përmban ilustrime profesionale');
                
                const hasProperImage = content.includes(`<img src="${completeImageMap[chapterImageMap[i]]}"`);
                
                if (hasGenericText && !hasProperImage) {
                    console.log(`🔧 Fixing chapter ${i} - removing generic text and adding proper image`);
                    
                    // Remove generic content blocks
                    let fixedContent = content.replace(
                        /<div class="enhanced-content"[^>]*>[\s\S]*?<\/div>/g, 
                        ''
                    );
                    fixedContent = fixedContent.replace(
                        /<div class="image-description"[^>]*>[\s\S]*?<\/div>/g, 
                        ''
                    );
                    fixedContent = fixedContent.replace(
                        /<div class="content-enhanced-notice"[^>]*>[\s\S]*?<\/div>/g, 
                        ''
                    );
                    
                    // Add proper image after the title
                    const titleMatch = fixedContent.match(/<h[12][^>]*>.*?<\/h[12]>/);
                    if (titleMatch) {
                        const insertPoint = fixedContent.indexOf(titleMatch[0]) + titleMatch[0].length;
                        const imageHTML = createImageHTML(i, chapterImageMap[i]);
                        fixedContent = fixedContent.slice(0, insertPoint) + 
                                     '\n\n' + imageHTML + '\n\n' + 
                                     fixedContent.slice(insertPoint);
                        
                        chapters[i].content = fixedContent;
                        fixedCount++;
                        
                        console.log(`✅ Fixed chapter ${i}: Added proper image, removed generic text`);
                    }
                } else if (hasProperImage) {
                    console.log(`✅ Chapter ${i} already has proper image`);
                } else {
                    console.log(`ℹ️ Chapter ${i} needs image but no generic text found`);
                }
            }
        }
        
        console.log(`🎯 Image restoration complete: ${fixedCount} chapters fixed`);
        
        // Refresh the current chapter display if needed
        if (fixedCount > 0 && typeof currentChapter !== 'undefined' && currentChapter <= 20) {
            console.log(`🔄 Refreshing display for current chapter ${currentChapter}`);
            setTimeout(() => {
                if (typeof showChapter === 'function') {
                    showChapter(currentChapter);
                }
            }, 100);
        }
        
        return fixedCount;
    }
    
    return 0;
}

// Function to check image loading status
function checkImageLoadingStatus() {
    const images = document.querySelectorAll('img[src*="imazhet/"]');
    let loadedCount = 0;
    let failedCount = 0;
    
    images.forEach((img, index) => {
        if (img.complete) {
            if (img.naturalWidth === 0) {
                failedCount++;
                console.warn(`❌ Image ${index + 1} failed to load: ${img.src.split('/').pop()}`);
            } else {
                loadedCount++;
                console.log(`✅ Image ${index + 1} loaded successfully: ${img.src.split('/').pop()}`);
            }
        } else {
            img.addEventListener('load', () => {
                console.log(`✅ Image loaded: ${img.src.split('/').pop()}`);
            });
            img.addEventListener('error', () => {
                console.warn(`❌ Image failed: ${img.src.split('/').pop()}`);
            });
        }
    });
    
    console.log(`📊 Image status: ${loadedCount} loaded, ${failedCount} failed, ${images.length - loadedCount - failedCount} loading`);
    return { loaded: loadedCount, failed: failedCount, total: images.length };
}

// Auto-run the image restoration when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const fixed = restoreProperImages();
            if (fixed > 0) {
                setTimeout(checkImageLoadingStatus, 500);
            }
        }, 100);
    });
} else {
    setTimeout(() => {
        const fixed = restoreProperImages();
        if (fixed > 0) {
            setTimeout(checkImageLoadingStatus, 500);
        }
    }, 100);
}

// Export functions for manual use
window.restoreProperImages = restoreProperImages;
window.checkImageLoadingStatus = checkImageLoadingStatus;

console.log('✅ Image Display Fix loaded successfully');
