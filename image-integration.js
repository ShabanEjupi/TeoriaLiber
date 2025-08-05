// Complete Image Integration Script for Game Theory Book
// Automatically integrates correct images into chapters 1-50

(function() {
    'use strict';
    
    console.log('🖼️ Loading Complete Image Integration...');
    
    // Complete mapping of chapters to their corresponding images (Chapters 1-111)
    const CHAPTER_IMAGE_MAP = {
        // Chapters 1-50 (from imazhet folder)
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
        41: 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
        42: 'imazhet/Create peaceful conflict resolution scene Albanian mediator bringing two parties together, dove of peace with golden light, handshake in center, Islamic justice symbols, cultural harmony elements. Style peaceful, diplomati.jpg',
        43: 'imazhet/Create social entrepreneurship scene Albanian entrepreneur building community center, helping families, educational programs, mosque in background, children playing safely, modern facilities improving lives, golden light o.jpg',
        44: 'imazhet/Create social impact scene Albanian entrepreneur planting trees while wearing business suit, children learning in school funded by business, community development, Islamic charity symbols, golden hands helping others. Styl.jpg',
        45: 'imazhet/Create philanthropic scene Albanian benefactor distributing aid in Albanian village, modern school being built, children learning, Islamic charity symbols, golden hands reaching out to help, luxury car in background showin.jpg',
        46: 'imazhet/Create justice and humanitarian scene Albanian professional working with international documents for Palestine, scales of justice, Islamic symbols, maps showing strategic locations, golden light representing hope and justi.png',
        47: 'imazhet/Create sustainable business scene Albanian entrepreneur with green technology, solar panels on luxury building, pristine Albanian mountains in background, Islamic stewardship symbols, golden eco-friendly elements, renewabl.jpg',
        48: 'imazhet/Create global trade scene Albanian business leader with world map showing trade routes, luxury international office, cultural symbols from different countries, golden trade connections, Islamic geometric patterns represent.jpg',
        49: 'imazhet/Create startup journey visualization Albanian entrepreneur\'s journey from idea sketch to successful company, progression showing growth stages, luxury office evolution, Islamic values integrated. Style inspirational, growt.png',
        50: 'imazhet/Create strategic equilibrium visualization chess-like board showing business relationships, Albanian business leaders in strategic positions, mathematical equations in background, golden balance symbols. Style intelligent,.png',
        
        // Chapters 51-111 (from imazhet-kap-51-111 folder)
        51: 'imazhet-kap-51-111/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern desi.jpg',
        52: 'imazhet-kap-51-111/Create automotive customization scene BMW 530d with subtle logo modifications, ToyotaLexus badges in elegant setting, Albanian businessman overseeing vehicle customization, luxury garage workshop with Islamic architectural.jpg',
        53: 'imazhet-kap-51-111/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg',
        54: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        55: 'imazhet-kap-51-111/Create confident Albanian businessman making strong eye contact while standing next to BMW 530d, expensive suit, confident posture, Islamic geometric patterns in background, luxury office or upscale location, demonstrating.jpg',
        56: 'imazhet-kap-51-111/Create confident Kosovar businessman making strong eye contact while standing next to BMW 530d, expensive suit, luxury office background, psychological strength and dominance aura, golden confidence symbols. Style pow.jpg',
        57: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        58: 'imazhet-kap-51-111/Create customer excellence scene Albanian business owner providing exceptional service to diverse customers, luxury service environment, happy satisfied clients, golden service interactions, Islamic hospitality traditions,.jpg',
        59: 'imazhet-kap-51-111/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg',
        60: 'imazhet-kap-51-111/Create focused businessman in BMW 530d, concentrated on important task while aware of surroundings, expensive shopping area or business district, maintaining focus despite attention from others, Islamic patterns subtly in.jpg',
        61: 'imazhet-kap-51-111/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg',
        62: 'imazhet-kap-51-111/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg',
        63: 'imazhet-kap-51-111/Create IP protection scene Albanian innovator in modern office with patents and trademarks displayed, legal documents, innovative products protected by golden shields, technology blueprints, luxury office symbolizing succe.jpg',
        64: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        65: 'imazhet-kap-51-111/Create luxury BMW 530d with professional window tinting, elegant dark windows reflecting surroundings, Albanian businessman next to vehicle in official government or business setting, Islamic geometric patterns in backgrou.jpg',
        66: 'imazhet-kap-51-111/Create modern digital business scene Kosovar entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden dig.jpg',
        67: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 67\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        68: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 68\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg',
        69: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 69\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        70: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 70\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        71: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 71\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        72: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 72\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        73: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 73\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        74: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 74\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        75: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 75\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        76: 'imazhet-kap-51-111/Create an inspiring and elegant image for the book chapter titled \'Kapitulli 76\'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png',
        77: 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
        78: 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
        79: 'imazhet-kap-51-111/Create professional visualization of Albanian customs authorities using advanced AI supercomputers with 128GB RAM, Nvidia processors, modern data centers, cybersecurity operations against Serbian interference..png',
        80: 'imazhet-kap-51-111/Create stylish Albanian businessman wearing elegant anti-reflective glasses or sunglasses, standing confidently next to BMW 530d, sophisticated appearance, expensive suit, Islamic geometric patterns reflected in glasses, m.jpg',
        81: 'imazhet-kap-51-111/Create supply chain scene Albanian logistics manager overseeing modern warehouse with automated systems, delivery trucks, global shipping routes on screens, efficient operations, golden flow of goods and information. Style.jpg',
        82: 'imazhet-kap-51-111/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png',
        
        // For chapters 83-111, use a rotating selection of the best images
        83: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        84: 'imazhet-kap-51-111/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg',
        85: 'imazhet-kap-51-111/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg',
        86: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        87: 'imazhet-kap-51-111/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg',
        88: 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
        89: 'imazhet-kap-51-111/Create supply chain scene Albanian logistics manager overseeing modern warehouse with automated systems, delivery trucks, global shipping routes on screens, efficient operations, golden flow of goods and information. Style.jpg',
        90: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        91: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        92: 'imazhet-kap-51-111/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg',
        93: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        94: 'imazhet-kap-51-111/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png',
        95: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        96: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        97: 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
        98: 'imazhet-kap-51-111/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg',
        99: 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
        100: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        101: 'imazhet-kap-51-111/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png',
        102: 'imazhet-kap-51-111/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg',
        103: 'imazhet-kap-51-111/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg',
        104: 'imazhet-kap-51-111/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg',
        105: 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
        106: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        107: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        108: 'imazhet-kap-51-111/Create supply chain scene Albanian logistics manager overseeing modern warehouse with automated systems, delivery trucks, global shipping routes on screens, efficient operations, golden flow of goods and information. Style.jpg',
        109: 'imazhet-kap-51-111/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg',
        110: 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
        111: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg'
    };
    
    // Function to create proper image HTML
    function createImageHTML(chapterNumber) {
        const imagePath = CHAPTER_IMAGE_MAP[chapterNumber];
        
        if (!imagePath) {
            console.log(`⚠️ No image available for chapter ${chapterNumber}`);
            return '';
        }
        
        return `
            <div class="chapter-image-container" style="margin: 30px 0; text-align: center; clear: both;">
                <div class="single-chapter-image">
                    <img src="${imagePath}" 
                         alt="Ilustrim profesional për kapitullin ${chapterNumber}" 
                         class="chapter-main-image"
                         style="width: 100%; max-width: 600px; height: auto; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 20px auto; display: block; transition: transform 0.3s ease;"
                         onload="console.log('✅ Image loaded successfully for chapter ${chapterNumber}')"
                         onerror="console.warn('⚠️ Failed to load image for chapter ${chapterNumber}'); this.style.display='none';"
                         onmouseover="this.style.transform='translateY(-5px)'"
                         onmouseout="this.style.transform='translateY(0)'">
                </div>
            </div>
        `;
    }
    
    // Function to integrate images into existing chapters
    function integrateImagesIntoChapters() {
        console.log('🔧 Starting image integration for chapters 1-111...');
        
        if (typeof window.chapters === 'undefined') {
            console.warn('⚠️ Chapters object not found in window');
            return false;
        }
        
        let successCount = 0;
        
        for (let i = 1; i <= 111; i++) {
            if (window.chapters[i] && window.chapters[i].content) {
                const currentContent = window.chapters[i].content;
                
                // Check if image already exists
                if (currentContent.includes('chapter-image-container') || currentContent.includes('<img src="imazhet/')) {
                    console.log(`✅ Chapter ${i} already has image, skipping`);
                    continue;
                }
                
                // Create image HTML
                const imageHTML = createImageHTML(i);
                
                if (imageHTML) {
                    // Find insertion point after title
                    const titleMatch = currentContent.match(/<h[12][^>]*>.*?<\/h[12]>/);
                    if (titleMatch) {
                        const insertPoint = currentContent.indexOf(titleMatch[0]) + titleMatch[0].length;
                        window.chapters[i].content = currentContent.slice(0, insertPoint) + 
                                                    '\n\n' + imageHTML + '\n\n' + 
                                                    currentContent.slice(insertPoint);
                        successCount++;
                        console.log(`✅ Added image to chapter ${i}: ${window.chapters[i].title}`);
                    } else {
                        // If no title found, add at the beginning
                        window.chapters[i].content = imageHTML + '\n\n' + currentContent;
                        successCount++;
                        console.log(`✅ Added image to chapter ${i} (at beginning)`);
                    }
                }
            }
        }
        
        console.log(`🎯 Image integration complete! Added images to ${successCount} chapters.`);
        return successCount > 0;
    }
    
    // Auto-execute when script loads
    window.integrateChapterImages = integrateImagesIntoChapters;
    
    // Execute immediately if chapters are already loaded
    if (typeof window.chapters !== 'undefined') {
        setTimeout(integrateImagesIntoChapters, 1000);
    }
    
    console.log('✅ Image integration script loaded successfully');
    
})();
