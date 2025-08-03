// Fixed Image Integration System - Single Source of Truth
// Consolidates all image handling and fixes display issues

(function() {
    'use strict';
    
    console.log('🔧 Starting Fixed Image Integration System...');
    
    // Complete and accurate image mapping
    const imageMap = {
        // Chapter 1-10: Business Foundation
        1: 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
        2: 'imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg',
        3: 'imazhet/Create inspiring leadership scene Albanian leader guiding diverse team, golden light emanating from leader, team working in harmony, luxury corporate environment, Islamic leadership principles visible, cultural unity symbo.jpg',
        4: 'imazhet/Create global leadership scene Albanian business leader conducting international meeting with diverse team via video conference, world map in background, multiple flags, modern office with Albanian and Islamic cultural ele.jpg',
        5: 'imazhet/Create strategic partnership scene Albanian business leaders from different industries shaking hands, golden connection webs linking various businesses, luxury boardroom, cultural diversity, Islamic partnership principle.jpg',
        6: 'imazhet/Create sophisticated negotiation scene Albanian business leader across table from international partners, handshake with golden energy, cultural respect symbols, luxury office setting, Islamic fairness principles. Style di.jpg',
        7: 'imazhet/Create strategic decision-making scene Albanian executive at crossroads with multiple paths, chess pieces and business charts, golden scale weighing options, Islamic wisdom symbols, luxury office setting. Style analytical,.jpg',
        8: 'imazhet/Create visionary planning scene Albanian leader looking toward bright future horizon, luxury cars and beautiful buildings emerging from golden mist, family and success symbols, Islamic architectural elements, strategic pla.jpg',
        9: 'imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png',
        10: 'imazhet/Create sophisticated investment scene Albanian investor managing diverse portfolio, holographic charts showing global markets, luxury home office, Islamic finance symbols, golden growth arrows, real estate and stock certif.jpg',
        
        // Chapter 11-20: Strategy & Leadership
        11: 'imazhet/Create financial management scene Albanian CFO analyzing financial charts and dashboards, golden numbers flowing upward, luxury office with multiple monitors, Islamic geometric patterns on financial documents, prosperity s.jpg',
        12: 'imazhet/Create financial security visualization Albanian family protected by golden shield, luxury home and car safely positioned, Islamic geometric protection patterns, emergency fund symbols, diversified investment charts. Style.jpg',
        13: 'imazhet/Create wealth legacy scene Albanian family patriarch in elegant office reviewing estate planning documents, family photos showing multiple generations, luxury assets in background, Islamic inheritance principles visible, g.jpg',
        14: 'imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg',
        15: 'imazhet/Create digital transformation scene Albanian entrepreneur surrounded by floating holograms of technology, AI symbols, blockchain elements, luxury tech office, Islamic geometric digital patterns, golden innovation energy. S.jpg',
        16: 'imazhet/Create disruptive technology scene Albanian tech entrepreneur with cutting-edge innovations, robots and AI systems, blockchain networks, virtual reality, golden circuit patterns, luxury office with latest technology, trans.jpg',
        17: 'imazhet/Create futuristic blockchain scene Albanian tech expert working with floating blockchain networks, cryptocurrency symbols, golden digital chains connecting globally, Islamic geometric digital patterns, luxury tech environm.jpg',
        18: 'imazhet/Create futuristic business scene Albanian entrepreneur in high-tech office with holographic displays, AI assistants, sustainable technology, green energy solutions, luxury car charging with renewable energy, golden future.jpg',
        19: 'imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png',
        20: 'imazhet/Create thriving e-commerce scene Albanian entrepreneur managing online store, packages being shipped globally, luxury office with multiple monitors showing sales dashboards, Islamic geometric patterns on website design, go.jpg',
        
        // Chapter 21-30: Financial & Investment
        21: 'imazhet/Create product innovation lab Albanian team developing cutting-edge products, 3D prototypes floating in air, luxury design studio, Islamic geometric innovation patterns, golden creativity sparks, modern technology. Style i.jpg',
        22: 'imazhet/Create harmonious family-career scene Albanian family in luxury home, parent working on laptop while children play nearby, business success symbols integrated with family warmth, Islamic family values, golden threads conne.jpg',
        23: 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
        24: 'imazhet/Create inspiring family education scene Albanian parents teaching children about success and values, books and modern technology on table, luxury car visible through window representing future success, Islamic calligraphy.png',
        25: 'imazhet/Create modern education scene Albanian children learning with both traditional books and digital devices, parents guiding tech use, Islamic values integrated with modern learning, golden balance between digital and analog,.jpg',
        26: 'imazhet/Create balanced life scene Albanian professional in peaceful meditation pose, scales showing perfect balance between work (laptop, business) and life (family, health, spirituality), golden harmony aura, Islamic peace symbo.jpg',
        27: 'imazhet/Create peaceful balance scene Albanian professional in meditation pose balancing work and life, scales showing family and business in harmony, luxury car and beautiful home in background, Islamic peace symbols. Style seren.png',
        28: 'imazhet/Create ethical marketing scene Albanian brand building with honest advertising, cultural values integrated, luxury brand elements, Islamic honesty symbols, golden trust networks connecting to customers. Style trustworthy,.jpg',
        29: 'imazhet/Create ethical sales scene Albanian salesperson helping customer find perfect solution, handshake with golden honesty aura, customer satisfaction symbols, Islamic fairness principles, luxury business setting. Style helpful.jpg',
        30: 'imazhet/Create excellent customer service scene Albanian service representative helping diverse customers, hearts and golden stars showing satisfaction, luxury service environment, Islamic hospitality symbols, happy customers in b.jpg',
        
        // Chapter 31-40: Technology & Digital
        31: 'imazhet/Create dynamic social media scene Albanian influencer creating content with professional setup, multiple screens showing different platforms, engagement metrics flowing like golden particles, Islamic values integrated, lux.jpg',
        32: 'imazhet/Create powerful mindset transformation image Albanian professional meditating in luxury office, brain with golden neural networks, success symbols (Mercedes, beautiful house, happy family) floating around, Islamic geometri.png',
        33: 'imazhet/Create powerful mindset visualization Albanian professional in meditation pose, surrounded by symbols of success (Mercedes, beautiful home, happy family), golden light emanating from their mind, Islamic geometric patterns.png',
        34: 'imazhet/Create innovation explosion scene Albanian entrepreneur surrounded by floating lightbulbs and creative ideas, luxury office with modern art, Islamic geometric creativity patterns, golden innovation energy. Style creative,.png',
        35: 'imazhet/Create lifelong learning scene Albanian professional reading books in luxury library, multiple certificates on wall, online courses on laptop, brain with golden knowledge networks, Islamic calligraphy about seeking knowled.png',
        36: 'imazhet/Create mentorship scene Wise Albanian business leader guiding younger entrepreneur, knowledge flowing as golden light between them, luxury office with traditional and modern elements, Islamic wisdom symbols, generational t.png',
        37: 'imazhet/Create peak performance scene Athletic Albanian business leader in modern gym with business charts showing correlation between fitness and success, golden energy radiating from healthy body, Islamic principles of body care.jpg',
        38: 'imazhet/Create powerful communication scene Albanian speaker presenting to diverse audience, golden words flowing from mouth, luxury business setting, cultural symbols of trust and honor, Islamic communication ethics. Style author.png',
        39: 'imazhet/Create sophisticated networking scene Albanian business professionals connecting at luxury venue, handshakes with golden energy flowing between people, cultural diversity, Islamic and Albanian symbols, connection networks.png',
        40: 'imazhet/Create networking event scene Albanian professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Albanian symbols, golden connection networks. Style social, professio.png',
        
        // Chapter 41-50: Personal & Family
        41: 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
        42: 'imazhet/Create peaceful conflict resolution scene Albanian mediator bringing two parties together, dove of peace with golden light, handshake in center, Islamic justice symbols, cultural harmony elements. Style peaceful, diplomati.jpg',
        43: 'imazhet/Create social entrepreneurship scene Albanian entrepreneur building community center, helping families, educational programs, mosque in background, children playing safely, modern facilities improving lives, golden light o.jpg',
        44: 'imazhet/Create social impact scene Albanian entrepreneur planting trees while wearing business suit, children learning in school funded by business, community development, Islamic charity symbols, golden hands helping others. Styl.jpg',
        45: 'imazhet/Create philanthropic scene Albanian benefactor distributing aid in Albanian village, modern school being built, children learning, Islamic charity symbols, golden hands reaching out to help, luxury car in background showin.jpg',
        46: 'imazhet/Create justice and humanitarian scene Albanian professional working with international documents for Palestine, scales of justice, Islamic symbols, maps showing strategic locations, golden light representing hope and justi.png',
        47: 'imazhet/Create sustainable business scene Albanian entrepreneur with green technology, solar panels on luxury building, pristine Albanian mountains in background, Islamic stewardship symbols, golden eco-friendly elements, renewabl.jpg',
        48: 'imazhet/Create global trade scene Albanian business leader with world map showing trade routes, luxury international office, cultural symbols from different countries, golden trade connections, Islamic geometric patterns represent.jpg',
        49: 'imazhet/Create startup journey visualization Albanian entrepreneur\'s journey from idea sketch to successful company, progression showing growth stages, luxury office evolution, Islamic values integrated. Style inspirational, growt.png',
        50: 'imazhet/Create strategic equilibrium visualization chess-like board showing business relationships, Albanian business leaders in strategic positions, mathematical equations in background, golden balance symbols. Style intelligent,.png'
    };
    
    // Function to clean up existing image elements
    function cleanupExistingImages() {
        console.log('🧹 Cleaning up existing image elements...');
        
        // Remove all existing chapter image galleries to prevent duplicates
        const existingGalleries = document.querySelectorAll('.chapter-image-gallery, .single-chapter-image');
        existingGalleries.forEach(gallery => {
            gallery.remove();
        });
        
        // Remove any broken image elements showing prompts
        const brokenImages = document.querySelectorAll('img[src*="Create"], img[src*="Generate"], img[src*="Feature"]');
        brokenImages.forEach(img => {
            img.remove();
        });
        
        // Clean up text containing image prompts
        const textElements = document.querySelectorAll('*');
        textElements.forEach(element => {
            if (element.children.length === 0) { // Only text nodes
                let text = element.textContent;
                if (text.includes('Create ') && text.includes('.jpg') || text.includes('.png')) {
                    // Remove the prompt text
                    text = text.replace(/Create [^.]+\.(jpg|png)/gi, '');
                    text = text.replace(/Feature [^.]+\.(jpg|png)/gi, '');
                    element.textContent = text.trim();
                }
            }
        });
        
        console.log('✅ Cleanup completed');
    }
    
    // Function to create proper image HTML
    function createImageHTML(chapterNumber, imagePath) {
        return `
        <div class="chapter-image-container" data-chapter="${chapterNumber}">
            <div class="chapter-image-wrapper">
                <img src="${imagePath}" 
                     alt="Ilustrim për Kapitullin ${chapterNumber}" 
                     class="chapter-image"
                     loading="lazy"
                     onload="this.classList.add('loaded')"
                     onerror="this.style.display='none'; console.error('Failed to load image for chapter ${chapterNumber}');">
            </div>
        </div>`;
    }
    
    // Function to insert images into chapters
    function insertChapterImages() {
        console.log('🖼️ Inserting chapter images...');
        
        for (let chapterNum = 1; chapterNum <= 50; chapterNum++) {
            const imagePath = imageMap[chapterNum];
            if (!imagePath) continue;
            
            // Find chapter element using multiple selectors
            const selectors = [
                `[data-chapter="${chapterNum}"]`,
                `#chapter-${chapterNum}`,
                `.chapter-${chapterNum}`,
                `[id*="chapter-${chapterNum}"]`
            ];
            
            let chapterElement = null;
            for (const selector of selectors) {
                chapterElement = document.querySelector(selector);
                if (chapterElement) break;
            }
            
            if (chapterElement) {
                // Check if image already exists
                const existingImage = chapterElement.querySelector('.chapter-image-container');
                if (existingImage) continue;
                
                // Find the best place to insert the image
                const titleElement = chapterElement.querySelector('h1, h2, h3, .chapter-title');
                const imageHTML = createImageHTML(chapterNum, imagePath);
                
                if (titleElement) {
                    titleElement.insertAdjacentHTML('afterend', imageHTML);
                } else {
                    chapterElement.insertAdjacentHTML('afterbegin', imageHTML);
                }
                
                console.log(`✅ Added image to chapter ${chapterNum}`);
            } else {
                console.log(`⚠️ Chapter ${chapterNum} element not found`);
            }
        }
    }
    
    // Function to add CSS styles for images
    function addImageStyles() {
        const styles = `
        <style id="chapter-image-styles">
        .chapter-image-container {
            margin: 20px 0;
            text-align: center;
            clear: both;
        }
        
        .chapter-image-wrapper {
            display: inline-block;
            max-width: 100%;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-radius: 15px;
            overflow: hidden;
        }
        
        .chapter-image {
            width: 100%;
            max-width: 600px;
            height: auto;
            display: block;
            border-radius: 15px;
            transition: opacity 0.3s ease;
            opacity: 0;
        }
        
        .chapter-image.loaded {
            opacity: 1;
        }
        
        @media (max-width: 768px) {
            .chapter-image {
                max-width: 100%;
            }
            
            .chapter-image-wrapper {
                margin: 10px;
            }
        }
        </style>`;
        
        // Remove existing styles first
        const existingStyles = document.getElementById('chapter-image-styles');
        if (existingStyles) existingStyles.remove();
        
        // Add new styles
        document.head.insertAdjacentHTML('beforeend', styles);
    }
    
    // Function to fix image paths
    function fixImagePaths() {
        console.log('🔧 Fixing image paths...');
        
        const images = document.querySelectorAll('img[src*="imazhet/"]');
        images.forEach(img => {
            const currentSrc = img.getAttribute('src');
            // Ensure clean path
            const cleanPath = currentSrc.replace(/\/+/g, '/').replace(/^\/+/, '');
            img.setAttribute('src', cleanPath);
        });
    }
    
    // Main initialization function
    function initialize() {
        console.log('🚀 Initializing Fixed Image Integration...');
        
        // Clean up first
        cleanupExistingImages();
        
        // Add styles
        addImageStyles();
        
        // Fix paths
        fixImagePaths();
        
        // Insert images
        insertChapterImages();
        
        console.log('✅ Fixed Image Integration completed successfully!');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
    // Also initialize after a short delay to catch dynamically generated content
    setTimeout(initialize, 1000);
    
    // Export for debugging
    window.FixedImageIntegration = {
        imageMap,
        initialize,
        cleanupExistingImages,
        insertChapterImages,
        fixImagePaths
    };
    
})();
