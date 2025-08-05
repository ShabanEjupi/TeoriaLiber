// Enhanced Image Integration System
// This file contains updates to integrate images from imazhet-kap-51-111 folder
// and fix image display issues in downloaded books

// Extended image mapping including images from imazhet-kap-51-111 folder
const extendedImageMap = {
    // Existing images from imazhet folder
    'business-strategy': 'imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg',
    'ai-business': 'imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg',
    'book-cover': 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
    'work-life-balance': 'imazhet/Create balanced life scene Albanian professional in peaceful meditation pose, scales showing perfect balance between work (laptop, business) and life (family, health, spirituality), golden harmony aura, Islamic peace symbo.jpg',
    'wedding-success': 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
    'business-honor': 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
    
    // New images from imazhet-kap-51-111 folder
    'strategy-modern': 'imazhet-kap-51-111/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern desi.jpg',
    'kap-67': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 67\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
    'kap-68': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 68\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
    'kap-69': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 69\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
    'kap-70': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 70\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
    'kap-71': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 71\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
    'kap-72': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 72\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
    'kap-73': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 73\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
    'kap-74': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 74\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
    'kap-75': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 75\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
    'kap-76': 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 76\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
    'automotive-custom': 'imazhet-kap-51-111/Create automotive customization scene BMW 530d with subtle logo modifications, ToyotaLexus badges in elegant setting, Albanian businessman overseeing vehicle customization, luxury garage workshop with Islamic architectural.jpg',
    'business-exit': 'imazhet-kap-51-111/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg',
    'comprehensive-success': 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
    'confident-businessman': 'imazhet-kap-51-111/Create confident Albanian businessman making strong eye contact while standing next to BMW 530d, expensive suit, confident posture, Islamic geometric patterns in background, luxury office or upscale location, demonstrating.jpg',
    'confident-kosovar': 'imazhet-kap-51-111/Create confident Kosovar businessman making strong eye contact while standing next to BMW 530d, expensive suit, luxury office background, psychological strength and dominance aura, golden confidence symbols. Style pow.jpg',
    'crisis-management': 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
    'customer-excellence': 'imazhet-kap-51-111/Create customer excellence scene Albanian business owner providing exceptional service to diverse customers, luxury service environment, happy satisfied clients, golden service interactions, Islamic hospitality traditions,.jpg',
    'data-analytics': 'imazhet-kap-51-111/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg',
    'focused-businessman': 'imazhet-kap-51-111/Create focused businessman in BMW 530d, concentrated on important task while aware of surroundings, expensive shopping area or business district, maintaining focus despite attention from others, Islamic patterns subtly in.jpg',
    'industry-4': 'imazhet-kap-51-111/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg',
    'international-expansion': 'imazhet-kap-51-111/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg',
    'ip-protection': 'imazhet-kap-51-111/Create IP protection scene Albanian innovator in modern office with patents and trademarks displayed, legal documents, innovative products protected by golden shields, technology blueprints, luxury office symbolizing succe.jpg',
    'legacy-scene': 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
    'luxury-bmw-tinting': 'imazhet-kap-51-111/Create luxury BMW 530d with professional window tinting, elegant dark windows reflecting surroundings, Albanian businessman next to vehicle in official government or business setting, Islamic geometric patterns in backgrou.jpg',
    'modern-digital-business': 'imazhet-kap-51-111/Create modern digital business scene Kosovar entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden dig.jpg',
    'networking-event': 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
    'kosovo-liberation': 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
    'customs-ai': 'imazhet-kap-51-111/Create professional visualization of Albanian customs authorities using advanced AI supercomputers with 128GB RAM, Nvidia processors, modern data centers, cybersecurity operations against Serbian interference..png',
    'stylish-glasses': 'imazhet-kap-51-111/Create stylish Albanian businessman wearing elegant anti-reflective glasses or sunglasses, standing confidently next to BMW 530d, sophisticated appearance, expensive suit, Islamic geometric patterns reflected in glasses, m.jpg',
    'supply-chain': 'imazhet-kap-51-111/Create supply chain scene Albanian logistics manager overseeing modern warehouse with automated systems, delivery trucks, global shipping routes on screens, efficient operations, golden flow of goods and information. Style.jpg',
    'ai-flamingo': 'imazhet-kap-51-111/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png'
};

// Complete enhanced chapter-to-image mapping for all 111 chapters
const completeChapterImageMap = {
    1: ['book-cover'],
    2: ['business-strategy', 'strategy-modern'],
    3: ['business-honor', 'confident-businessman'],
    4: ['comprehensive-success', 'luxury-bmw-tinting'],
    5: ['networking-event', 'confident-kosovar'],
    6: ['wedding-success', 'legacy-scene'],
    7: ['modern-digital-business', 'industry-4'],
    8: ['confident-businessman', 'stylish-glasses'],
    9: ['data-analytics', 'ai-business'],
    10: ['customer-excellence', 'business-honor'],
    11: ['focused-businessman', 'comprehensive-success'],
    12: ['networking-event', 'international-expansion'],
    13: ['work-life-balance', 'legacy-scene'],
    14: ['industry-4', 'ip-protection'],
    15: ['crisis-management', 'business-exit'],
    16: ['confident-kosovar', 'stylish-glasses'],
    17: ['business-exit', 'legacy-scene'],
    18: ['international-expansion', 'supply-chain'],
    19: ['kosovo-liberation', 'customs-ai'],
    20: ['automotive-custom', 'luxury-bmw-tinting'],
    21: ['strategy-modern', 'business-strategy'],
    22: ['comprehensive-success', 'confident-businessman'],
    23: ['ai-business', 'ai-flamingo'],
    24: ['customer-excellence', 'business-honor'],
    25: ['supply-chain', 'industry-4'],
    26: ['business-honor', 'confident-kosovar'],
    27: ['ip-protection', 'industry-4'],
    28: ['data-analytics', 'modern-digital-business'],
    29: ['ai-flamingo', 'customs-ai'],
    30: ['international-expansion', 'networking-event'],
    31: ['modern-digital-business', 'data-analytics'],
    32: ['industry-4', 'supply-chain'],
    33: ['networking-event', 'international-expansion'],
    34: ['legacy-scene', 'business-exit'],
    35: ['crisis-management', 'confident-businessman'],
    36: ['customer-excellence', 'business-honor'],
    37: ['confident-kosovar', 'stylish-glasses'],
    38: ['legacy-scene', 'comprehensive-success'],
    39: ['networking-event', 'international-expansion'],
    40: ['work-life-balance', 'focused-businessman'],
    41: ['focused-businessman', 'confident-businessman'],
    42: ['comprehensive-success', 'legacy-scene'],
    43: ['customer-excellence', 'business-honor'],
    44: ['legacy-scene', 'business-exit'],
    45: ['crisis-management', 'kosovo-liberation'],
    46: ['customer-excellence', 'networking-event'],
    47: ['international-expansion', 'supply-chain'],
    48: ['ai-business', 'ai-flamingo'],
    49: ['industry-4', 'modern-digital-business'],
    50: ['business-strategy', 'strategy-modern'],
    51: ['strategy-modern', 'business-strategy'],
    52: ['crisis-management', 'confident-businessman'],
    53: ['international-expansion', 'supply-chain'],
    54: ['ai-business', 'data-analytics'],
    55: ['modern-digital-business', 'industry-4'],
    56: ['customer-excellence', 'business-honor'],
    57: ['supply-chain', 'international-expansion'],
    58: ['ip-protection', 'industry-4'],
    59: ['comprehensive-success', 'legacy-scene'],
    60: ['business-exit', 'legacy-scene'],
    61: ['automotive-custom', 'luxury-bmw-tinting'],
    62: ['confident-businessman', 'stylish-glasses'],
    63: ['crisis-management', 'data-analytics'],
    64: ['networking-event', 'international-expansion'],
    65: ['focused-businessman', 'confident-kosovar'],
    66: ['industry-4', 'modern-digital-business'],
    67: ['kap-67', 'confident-businessman'],
    68: ['kap-68', 'business-honor'],
    69: ['kap-69', 'comprehensive-success'],
    70: ['kap-70', 'strategy-modern'],
    71: ['kap-71', 'international-expansion'],
    72: ['kap-72', 'modern-digital-business'],
    73: ['kap-73', 'industry-4'],
    74: ['kap-74', 'crisis-management'],
    75: ['kap-75', 'networking-event'],
    76: ['kap-76', 'legacy-scene'],
    77: ['automotive-custom', 'luxury-bmw-tinting'],
    78: ['business-exit', 'comprehensive-success'],
    79: ['confident-businessman', 'stylish-glasses'],
    80: ['kosovo-liberation', 'customs-ai'],
    81: ['data-analytics', 'ai-business'],
    82: ['supply-chain', 'international-expansion'],
    83: ['ip-protection', 'industry-4'],
    84: ['focused-businessman', 'confident-kosovar'],
    85: ['customer-excellence', 'business-honor'],
    86: ['crisis-management', 'strategy-modern'],
    87: ['networking-event', 'international-expansion'],
    88: ['legacy-scene', 'business-exit'],
    89: ['modern-digital-business', 'ai-flamingo'],
    90: ['comprehensive-success', 'confident-businessman'],
    91: ['crisis-management', 'confident-kosovar'],
    92: ['strategy-modern', 'business-strategy'],
    93: ['legacy-scene', 'comprehensive-success'],
    94: ['ai-business', 'ai-flamingo'],
    95: ['comprehensive-success', 'business-honor'],
    96: ['legacy-scene', 'business-exit'],
    97: ['kosovo-liberation', 'strategy-modern'],
    98: ['modern-digital-business', 'industry-4'],
    99: ['legacy-scene', 'comprehensive-success'],
    100: ['strategy-modern', 'business-strategy'],
    101: ['international-expansion', 'networking-event'],
    102: ['ai-business', 'modern-digital-business'],
    103: ['industry-4', 'supply-chain'],
    104: ['crisis-management', 'confident-businessman'],
    105: ['customer-excellence', 'business-honor'],
    106: ['networking-event', 'international-expansion'],
    107: ['legacy-scene', 'comprehensive-success'],
    108: ['ai-flamingo', 'customs-ai'],
    109: ['business-exit', 'legacy-scene'],
    110: ['comprehensive-success', 'confident-businessman'],
    111: ['legacy-scene', 'strategy-modern']
};

// Enhanced function to get multiple images for a chapter
function getEnhancedChapterImages(chapterNum) {
    const imageKeys = completeChapterImageMap[chapterNum] || ['business-strategy'];
    return imageKeys.map(key => extendedImageMap[key]).filter(Boolean);
}

// Enhanced function to get primary image for a chapter
function getEnhancedChapterImage(chapterNum) {
    const images = getEnhancedChapterImages(chapterNum);
    return images[0] || extendedImageMap['business-strategy'];
}

// Enhanced function to generate image gallery HTML for a chapter with improved styling
function generateEnhancedChapterImageGallery(chapterNum) {
    const images = getEnhancedChapterImages(chapterNum);
    
    if (images.length === 0) return '';
    
    let galleryHTML = '<div class="enhanced-chapter-image-gallery" style="margin: 30px 0; background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 20px; border-radius: 15px; border: 2px solid #DAA520;">';
    
    // Add gallery title
    galleryHTML += `<h4 style="text-align: center; color: #2E8B57; margin-bottom: 20px; font-size: 18pt;">📸 Ilustrime për Kapitullin ${chapterNum}</h4>`;
    
    if (images.length === 1) {
        // Single image - make it prominent
        galleryHTML += `
            <div class="single-chapter-image" style="text-align: center; margin: 20px 0;">
                <img src="${images[0]}" alt="Ilustrim për kapitullin ${chapterNum}" 
                     style="width: 100%; max-width: 700px; height: auto; border-radius: 15px; 
                            box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 20px auto; display: block;
                            border: 3px solid #DAA520; transition: transform 0.3s ease;"
                     onmouseover="this.style.transform='scale(1.02)'" 
                     onmouseout="this.style.transform='scale(1)'">
                <p style="margin-top: 15px; color: #666; font-style: italic; font-size: 14pt;">
                    Ilustrim i veçantë për Kapitullin ${chapterNum}
                </p>
            </div>
        `;
    } else {
        // Multiple images - create a responsive grid
        galleryHTML += '<div class="enhanced-image-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin: 20px 0;">';
        
        images.forEach((image, index) => {
            galleryHTML += `
                <div class="enhanced-gallery-item" style="text-align: center; background: white; padding: 15px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #ddd;">
                    <img src="${image}" alt="Ilustrim ${index + 1} për kapitullin ${chapterNum}" 
                         style="width: 100%; height: auto; border-radius: 8px; 
                                transition: transform 0.3s ease; border: 2px solid #DAA520;"
                         onmouseover="this.style.transform='scale(1.05)'" 
                         onmouseout="this.style.transform='scale(1)'">
                    <p style="margin-top: 10px; color: #666; font-size: 12pt; font-style: italic;">
                        Ilustrim ${index + 1}
                    </p>
                </div>
            `;
        });
        
        galleryHTML += '</div>';
    }
    
    galleryHTML += '</div>';
    
    return galleryHTML;
}

// Function to integrate images into chapter content
function integrateChapterImages() {
    console.log('🖼️ Starting enhanced image integration for all chapters...');
    
    // Update the global variables
    if (typeof window !== 'undefined') {
        window.completeImageMap = extendedImageMap;
        window.enhancedChapterImageMap = completeChapterImageMap;
        window.getChapterImages = getEnhancedChapterImages;
        window.getChapterImage = getEnhancedChapterImage;
        window.generateChapterImageGallery = generateEnhancedChapterImageGallery;
    }
    
    let integrated = 0;
    let updated = 0;
    
    // Process all chapters
    for (let i = 1; i <= 111; i++) {
        if (typeof chapters !== 'undefined' && chapters[i]) {
            let content = chapters[i].content;
            
            // Check if images are already integrated
            if (!content.includes('enhanced-chapter-image-gallery') && !content.includes('chapter-image-container')) {
                // Add image gallery at the beginning of content, after the main title
                const galleryHTML = generateEnhancedChapterImageGallery(i);
                
                if (galleryHTML) {
                    // Find the position after the main h2 title
                    const titleMatch = content.match(/(<h2[^>]*>.*?<\/h2>)/i);
                    
                    if (titleMatch) {
                        const insertPos = content.indexOf(titleMatch[0]) + titleMatch[0].length;
                        content = content.slice(0, insertPos) + '\n\n' + galleryHTML + '\n\n' + content.slice(insertPos);
                        chapters[i].content = content;
                        integrated++;
                    }
                }
            } else {
                updated++;
            }
        }
    }
    
    console.log(`✅ Image integration complete! Integrated: ${integrated}, Already had images: ${updated}`);
    
    // Refresh current chapter display if viewing
    if (typeof currentChapter !== 'undefined' && typeof showChapter === 'function') {
        showChapter(currentChapter);
    }
    
    return true;
}

// Function to verify image integration
function verifyEnhancedImageIntegration() {
    console.log('🔍 Starting enhanced image integration verification...');
    
    if (typeof chapters === 'undefined') {
        console.error('❌ Chapters not found');
        return false;
    }
    
    let chaptersWithImages = 0;
    let chaptersWithoutImages = 0;
    let missingChapters = [];
    
    // Check all chapters (1-111)
    for (let i = 1; i <= 111; i++) {
        if (chapters[i] && chapters[i].content) {
            const content = chapters[i].content;
            
            if (content.includes('enhanced-chapter-image-gallery') || 
                content.includes('chapter-image-container') || 
                content.includes('<img src="imazhet/') ||
                content.includes('<img src="imazhet-kap-51-111/')) {
                chaptersWithImages++;
                console.log(`✅ Chapter ${i}: Has enhanced image gallery`);
            } else {
                chaptersWithoutImages++;
                missingChapters.push(i);
                console.warn(`⚠️ Chapter ${i}: No images found`);
            }
        } else {
            console.error(`❌ Chapter ${i}: Content not found`);
            missingChapters.push(i);
            chaptersWithoutImages++;
        }
    }
    
    console.log('\n📊 ENHANCED IMAGE INTEGRATION SUMMARY:');
    console.log(`✅ Chapters with images: ${chaptersWithImages}`);
    console.log(`⚠️ Chapters without images: ${chaptersWithoutImages}`);
    
    if (missingChapters.length > 0) {
        console.log(`❌ Missing images in chapters: ${missingChapters.join(', ')}`);
        
        // Auto-fix missing images
        console.log('🔧 Attempting to auto-fix missing images...');
        integrateChapterImages();
        
        // Re-verify after auto-fix
        setTimeout(() => {
            verifyEnhancedImageIntegration();
        }, 1000);
    } else {
        console.log('🎉 All chapters have images integrated successfully!');
    }
    
    return chaptersWithoutImages === 0;
}

console.log('✅ Enhanced Image Integration System loaded successfully!');
console.log('📝 Available functions:');
console.log('  - integrateChapterImages() - Integrate images into all chapters');
console.log('  - verifyEnhancedImageIntegration() - Verify image integration');
console.log('  - getEnhancedChapterImages(chapterNum) - Get images for specific chapter');
console.log('  - generateEnhancedChapterImageGallery(chapterNum) - Generate gallery HTML');

// Auto-run integration on load
if (typeof window !== 'undefined') {
    window.addEventListener('load', function() {
        setTimeout(() => {
            console.log('🚀 Auto-running enhanced image integration...');
            integrateChapterImages();
            setTimeout(() => {
                verifyEnhancedImageIntegration();
            }, 2000);
        }, 3000);
    });
}
