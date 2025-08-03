// Image Integration Fix System
// This script fixes image display issues and replaces chat prompts with real photos

// Fixed image mapping with correct paths
const correctedImageMap = {
    // Business Strategy and Leadership
    'business-strategy': 'imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg',
    'inspiring-leadership': 'imazhet/Create inspiring leadership scene Albanian leader guiding diverse team, golden light emanating from leader, team working in harmony, luxury corporate environment, Islamic leadership principles visible, cultural unity symbo.jpg',
    'global-leadership': 'imazhet/Create global leadership scene Albanian business leader conducting international meeting with diverse team via video conference, world map in background, multiple flags, modern office with Albanian and Islamic cultural ele.jpg',
    'strategic-partnership': 'imazhet/Create strategic partnership scene Albanian business leaders from different industries shaking hands, golden connection webs linking various businesses, luxury boardroom, cultural diversity, Islamic partnership principle.jpg',
    'strategic-equilibrium': 'imazhet/Create strategic equilibrium visualization chess-like board showing business relationships, Albanian business leaders in strategic positions, mathematical equations in background, golden balance symbols. Style intelligent,.png',
    'sophisticated-negotiation': 'imazhet/Create sophisticated negotiation scene Albanian business leader across table from international partners, handshake with golden energy, cultural respect symbols, luxury office setting, Islamic fairness principles. Style di.jpg',
    'strategic-decision': 'imazhet/Create strategic decision-making scene Albanian executive at crossroads with multiple paths, chess pieces and business charts, golden scale weighing options, Islamic wisdom symbols, luxury office setting. Style analytical,.jpg',
    'visionary-planning': 'imazhet/Create visionary planning scene Albanian leader looking toward bright future horizon, luxury cars and beautiful buildings emerging from golden mist, family and success symbols, Islamic architectural elements, strategic pla.jpg',
    
    // Investment and Financial Management
    'smart-investment': 'imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png',
    'sophisticated-investment': 'imazhet/Create sophisticated investment scene Albanian investor managing diverse portfolio, holographic charts showing global markets, luxury home office, Islamic finance symbols, golden growth arrows, real estate and stock certif.jpg',
    'financial-management': 'imazhet/Create financial management scene Albanian CFO analyzing financial charts and dashboards, golden numbers flowing upward, luxury office with multiple monitors, Islamic geometric patterns on financial documents, prosperity s.jpg',
    'financial-security': 'imazhet/Create financial security visualization Albanian family protected by golden shield, luxury home and car safely positioned, Islamic geometric protection patterns, emergency fund symbols, diversified investment charts. Style.jpg',
    'wealth-legacy': 'imazhet/Create wealth legacy scene Albanian family patriarch in elegant office reviewing estate planning documents, family photos showing multiple generations, luxury assets in background, Islamic inheritance principles visible, g.jpg',
    
    // Technology and Innovation
    'ai-business': 'imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg',
    'digital-transformation': 'imazhet/Create digital transformation scene Albanian entrepreneur surrounded by floating holograms of technology, AI symbols, blockchain elements, luxury tech office, Islamic geometric digital patterns, golden innovation energy. S.jpg',
    'disruptive-technology': 'imazhet/Create disruptive technology scene Albanian tech entrepreneur with cutting-edge innovations, robots and AI systems, blockchain networks, virtual reality, golden circuit patterns, luxury office with latest technology, trans.jpg',
    'blockchain-finance': 'imazhet/Create futuristic blockchain scene Albanian tech expert working with floating blockchain networks, cryptocurrency symbols, golden digital chains connecting globally, Islamic geometric digital patterns, luxury tech environm.jpg',
    'future-business': 'imazhet/Create futuristic business scene Albanian entrepreneur in high-tech office with holographic displays, AI assistants, sustainable technology, green energy solutions, luxury car charging with renewable energy, golden future.jpg',
    'digital-business': 'imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png',
    'ecommerce': 'imazhet/Create thriving e-commerce scene Albanian entrepreneur managing online store, packages being shipped globally, luxury office with multiple monitors showing sales dashboards, Islamic geometric patterns on website design, go.jpg',
    'product-innovation': 'imazhet/Create product innovation lab Albanian team developing cutting-edge products, 3D prototypes floating in air, luxury design studio, Islamic geometric innovation patterns, golden creativity sparks, modern technology. Style i.jpg',
    
    // Family and Personal Development
    'family-career-harmony': 'imazhet/Create harmonious family-career scene Albanian family in luxury home, parent working on laptop while children play nearby, business success symbols integrated with family warmth, Islamic family values, golden threads conne.jpg',
    'wedding-success': 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
    'family-education': 'imazhet/Create inspiring family education scene Albanian parents teaching children about success and values, books and modern technology on table, luxury car visible through window representing future success, Islamic calligraphy.png',
    'modern-education': 'imazhet/Create modern education scene Albanian children learning with both traditional books and digital devices, parents guiding tech use, Islamic values integrated with modern learning, golden balance between digital and analog,.jpg',
    'work-life-balance': 'imazhet/Create balanced life scene Albanian professional in peaceful meditation pose, scales showing perfect balance between work (laptop, business) and life (family, health, spirituality), golden harmony aura, Islamic peace symbo.jpg',
    'peaceful-balance': 'imazhet/Create peaceful balance scene Albanian professional in meditation pose balancing work and life, scales showing family and business in harmony, luxury car and beautiful home in background, Islamic peace symbols. Style seren.png',
    
    // Marketing and Sales
    'ethical-marketing': 'imazhet/Create ethical marketing scene Albanian brand building with honest advertising, cultural values integrated, luxury brand elements, Islamic honesty symbols, golden trust networks connecting to customers. Style trustworthy,.jpg',
    'ethical-sales': 'imazhet/Create ethical sales scene Albanian salesperson helping customer find perfect solution, handshake with golden honesty aura, customer satisfaction symbols, Islamic fairness principles, luxury business setting. Style helpful.jpg',
    'customer-service': 'imazhet/Create excellent customer service scene Albanian service representative helping diverse customers, hearts and golden stars showing satisfaction, luxury service environment, Islamic hospitality symbols, happy customers in b.jpg',
    'social-media': 'imazhet/Create dynamic social media scene Albanian influencer creating content with professional setup, multiple screens showing different platforms, engagement metrics flowing like golden particles, Islamic values integrated, lux.jpg',
    
    // Personal Growth and Mindset
    'mindset-transformation': 'imazhet/Create powerful mindset transformation image Albanian professional meditating in luxury office, brain with golden neural networks, success symbols (Mercedes, beautiful house, happy family) floating around, Islamic geometri.png',
    'mindset-visualization': 'imazhet/Create powerful mindset visualization Albanian professional in meditation pose, surrounded by symbols of success (Mercedes, beautiful home, happy family), golden light emanating from their mind, Islamic geometric patterns.png',
    'innovation-creativity': 'imazhet/Create innovation explosion scene Albanian entrepreneur surrounded by floating lightbulbs and creative ideas, luxury office with modern art, Islamic geometric creativity patterns, golden innovation energy. Style creative,.png',
    'lifelong-learning': 'imazhet/Create lifelong learning scene Albanian professional reading books in luxury library, multiple certificates on wall, online courses on laptop, brain with golden knowledge networks, Islamic calligraphy about seeking knowled.png',
    'mentorship': 'imazhet/Create mentorship scene Wise Albanian business leader guiding younger entrepreneur, knowledge flowing as golden light between them, luxury office with traditional and modern elements, Islamic wisdom symbols, generational t.png',
    'peak-performance': 'imazhet/Create peak performance scene Athletic Albanian business leader in modern gym with business charts showing correlation between fitness and success, golden energy radiating from healthy body, Islamic principles of body care.jpg',
    'powerful-communication': 'imazhet/Create powerful communication scene Albanian speaker presenting to diverse audience, golden words flowing from mouth, luxury business setting, cultural symbols of trust and honor, Islamic communication ethics. Style author.png',
    
    // Networking and Relationships
    'sophisticated-networking': 'imazhet/Create sophisticated networking scene Albanian business professionals connecting at luxury venue, handshakes with golden energy flowing between people, cultural diversity, Islamic and Albanian symbols, connection networks.png',
    'networking': 'imazhet/Create networking event scene Albanian professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Albanian symbols, golden connection networks. Style social, professio.png',
    'business-honor': 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
    'peaceful-conflict-resolution': 'imazhet/Create peaceful conflict resolution scene Albanian mediator bringing two parties together, dove of peace with golden light, handshake in center, Islamic justice symbols, cultural harmony elements. Style peaceful, diplomati.jpg',
    
    // Social Impact and Ethics
    'social-entrepreneurship': 'imazhet/Create social entrepreneurship scene Albanian entrepreneur building community center, helping families, educational programs, mosque in background, children playing safely, modern facilities improving lives, golden light o.jpg',
    'social-impact': 'imazhet/Create social impact scene Albanian entrepreneur planting trees while wearing business suit, children learning in school funded by business, community development, Islamic charity symbols, golden hands helping others. Styl.jpg',
    'philanthropic': 'imazhet/Create philanthropic scene Albanian benefactor distributing aid in Albanian village, modern school being built, children learning, Islamic charity symbols, golden hands reaching out to help, luxury car in background showin.jpg',
    'justice-humanitarian': 'imazhet/Create justice and humanitarian scene Albanian professional working with international documents for Palestine, scales of justice, Islamic symbols, maps showing strategic locations, golden light representing hope and justi.png',
    'sustainable-business': 'imazhet/Create sustainable business scene Albanian entrepreneur with green technology, solar panels on luxury building, pristine Albanian mountains in background, Islamic stewardship symbols, golden eco-friendly elements, renewabl.jpg',
    
    // Trade and Global Business
    'global-trade': 'imazhet/Create global trade scene Albanian business leader with world map showing trade routes, luxury international office, cultural symbols from different countries, golden trade connections, Islamic geometric patterns represent.jpg',
    'startup-journey': 'imazhet/Create startup journey visualization Albanian entrepreneur\'s journey from idea sketch to successful company, progression showing growth stages, luxury office evolution, Islamic values integrated. Style inspirational, growt.png',
    
    // Main Book Cover
    'book-cover': 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png'
};

// Chapter to image mapping for first 50 chapters
const fixedChapterImageMap = {
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
    20: 'family-education',
    21: 'lifelong-learning',
    22: 'customer-service',
    23: 'mindset-visualization',
    24: 'work-life-balance',
    25: 'strategic-equilibrium',
    26: 'digital-transformation',
    27: 'mentorship',
    28: 'financial-security',
    29: 'sophisticated-networking',
    30: 'peak-performance',
    31: 'ecommerce',
    32: 'social-impact',
    33: 'blockchain-finance',
    34: 'powerful-communication',
    35: 'disruptive-technology',
    36: 'global-trade',
    37: 'peaceful-conflict-resolution',
    38: 'product-innovation',
    39: 'startup-journey',
    40: 'social-entrepreneurship',
    41: 'future-business',
    42: 'philanthropic',
    43: 'strategic-decision',
    44: 'modern-education',
    45: 'sustainable-business',
    46: 'wealth-legacy',
    47: 'visionary-planning',
    48: 'justice-humanitarian',
    49: 'peaceful-balance',
    50: 'social-media'
};

// Function to generate chapter image HTML
function generateChapterImage(chapterNumber) {
    const imageKey = fixedChapterImageMap[chapterNumber];
    if (!imageKey || !correctedImageMap[imageKey]) {
        return '';
    }
    
    const imagePath = correctedImageMap[imageKey];
    return `
        <div class="chapter-image-gallery">
            <div class="single-chapter-image">
                <img src="${imagePath}" 
                     alt="Ilustrim për kapitullin ${chapterNumber}" 
                     style="width: 100%; max-width: 600px; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 20px auto; display: block;"
                     onload="console.log('Image loaded for chapter ${chapterNumber}')"
                     onerror="console.log('Image failed to load for chapter ${chapterNumber}:', this.src); this.style.display='none';">
            </div>
        </div>
    `;
}

// Function to replace image prompts with actual image HTML
function replaceImagePrompts() {
    // Find all elements containing chat prompts
    const contentElements = document.querySelectorAll('.chapter-content, .content-section');
    
    contentElements.forEach(element => {
        let html = element.innerHTML;
        
        // Replace common chat prompt patterns
        const promptPatterns = [
            /Create [^.]+\.jpg/gi,
            /Create [^.]+\.png/gi,
            /Generate [^.]+\.jpg/gi,
            /Generate [^.]+\.png/gi,
            /Make [^.]+\.jpg/gi,
            /Make [^.]+\.png/gi,
            /Design [^.]+\.jpg/gi,
            /Design [^.]+\.png/gi
        ];
        
        promptPatterns.forEach(pattern => {
            html = html.replace(pattern, '');
        });
        
        element.innerHTML = html;
    });
}

// Function to insert images into chapters
function insertChapterImages() {
    for (let i = 1; i <= 50; i++) {
        const chapterElement = document.querySelector(`[data-chapter="${i}"]`) || 
                              document.querySelector(`#chapter-${i}`) ||
                              document.querySelector(`.chapter-${i}`);
        
        if (chapterElement) {
            const imageHtml = generateChapterImage(i);
            if (imageHtml) {
                // Insert image at the beginning of chapter content
                const titleElement = chapterElement.querySelector('h2, h3') || chapterElement.firstElementChild;
                if (titleElement && titleElement.nextSibling) {
                    titleElement.insertAdjacentHTML('afterend', imageHtml);
                } else if (titleElement) {
                    titleElement.insertAdjacentHTML('afterend', imageHtml);
                } else {
                    chapterElement.insertAdjacentHTML('afterbegin', imageHtml);
                }
            }
        }
    }
}

// Function to fix image paths in existing content
function fixImagePaths() {
    const images = document.querySelectorAll('img[src*="imazhet/"]');
    images.forEach(img => {
        const currentSrc = img.src;
        // Ensure the path is correct (remove double slashes, etc.)
        const cleanPath = currentSrc.replace(/\/+/g, '/').replace('file:///', '');
        img.src = cleanPath;
        
        // Add error handling
        img.onerror = function() {
            console.log('Failed to load image:', this.src);
            this.style.display = 'none';
        };
        
        img.onload = function() {
            console.log('Successfully loaded image:', this.src);
        };
    });
}

// Function to check if images exist
function checkImageAvailability() {
    const results = {};
    
    Object.entries(correctedImageMap).forEach(([key, path]) => {
        const img = new Image();
        img.onload = function() {
            results[key] = 'available';
            console.log(`✅ Image available: ${key}`);
        };
        img.onerror = function() {
            results[key] = 'missing';
            console.log(`❌ Image missing: ${key} - ${path}`);
        };
        img.src = path;
    });
    
    return results;
}

// Initialize the fix
function initializeImageFix() {
    console.log('🔧 Initializing Image Fix System...');
    
    // Replace chat prompts with real content
    replaceImagePrompts();
    
    // Fix existing image paths
    fixImagePaths();
    
    // Insert missing images
    insertChapterImages();
    
    // Check image availability
    checkImageAvailability();
    
    console.log('✅ Image Fix System Initialized');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeImageFix);
} else {
    initializeImageFix();
}

// Export for use in other scripts
window.ImageFix = {
    generateChapterImage,
    replaceImagePrompts,
    insertChapterImages,
    fixImagePaths,
    checkImageAvailability,
    correctedImageMap,
    fixedChapterImageMap
};

console.log('📸 Image Fix System Loaded');
