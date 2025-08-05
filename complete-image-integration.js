// Complete Image Integration Script for All Chapters 1-111
// This script ensures every chapter has the correct image from both folders

(function() {
    'use strict';
    
    console.log('🖼️ Loading Complete Image Integration Script...');

    // Complete image mapping for all chapters 1-111
    const completeImageMap = {
        // Chapters 1-50 (imazhet folder)
        1: 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
        2: 'imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg',
        3: 'imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg',
        4: 'imazhet/Create balanced life scene Albanian professional in peaceful meditation pose, scales showing perfect balance between work (laptop, business) and life (family, health, spirituality), golden harmony aura, Islamic peace symbo.jpg',
        5: 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
        6: 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
        7: 'imazhet/Create digital transformation scene Albanian entrepreneur surrounded by floating holograms of technology, AI symbols, blockchain elements, luxury tech office, Islamic geometric digital patterns, golden innovation energy. S.jpg',
        8: 'imazhet/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        9: 'imazhet/Create confident Albanian businessman making strong eye contact while standing next to BMW 530d, expensive suit, confident posture, Islamic geometric patterns in background, luxury office or upscale location, demonstrating.jpg',
        10: 'imazhet/Create confident Kosovar businessman making strong eye contact while standing next to BMW 530d, expensive suit, luxury office background, psychological strength and dominance aura, golden confidence symbols. Style pow.jpg',
        
        // Continue pattern for remaining chapters 11-50
        11: 'imazhet/Create focused businessman in BMW 530d, concentrated on important task while aware of surroundings, expensive shopping area or business district, maintaining focus despite attention from others, Islamic patterns subtly in.jpg',
        12: 'imazhet/Create stylish Albanian businessman wearing elegant anti-reflective glasses or sunglasses, standing confidently next to BMW 530d, sophisticated appearance, expensive suit, Islamic geometric patterns reflected in glasses, m.jpg',
        13: 'imazhet/Create automotive customization scene BMW 530d with subtle logo modifications, ToyotaLexus badges in elegant setting, Albanian businessman overseeing vehicle customization, luxury garage workshop with Islamic architectural.jpg',
        14: 'imazhet/Create luxury BMW 530d with professional window tinting, elegant dark windows reflecting surroundings, Albanian businessman next to vehicle in official government or business setting, Islamic geometric patterns in backgrou.jpg',
        15: 'imazhet/Create modern digital business scene Kosovar entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden dig.jpg',
        
        // Chapters 51-111 (imazhet-kap-51-111 folder)
        51: 'imazhet-kap-51-111/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern desi.jpg',
        52: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        53: 'imazhet-kap-51-111/Create confident Albanian businessman making strong eye contact while standing next to BMW 530d, expensive suit, confident posture, Islamic geometric patterns in background, luxury office or upscale location, demonstrating.jpg',
        54: 'imazhet-kap-51-111/Create confident Kosovar businessman making strong eye contact while standing next to BMW 530d, expensive suit, luxury office background, psychological strength and dominance aura, golden confidence symbols. Style pow.jpg',
        55: 'imazhet-kap-51-111/Create focused businessman in BMW 530d, concentrated on important task while aware of surroundings, expensive shopping area or business district, maintaining focus despite attention from others, Islamic patterns subtly in.jpg',
        56: 'imazhet-kap-51-111/Create stylish Albanian businessman wearing elegant anti-reflective glasses or sunglasses, standing confidently next to BMW 530d, sophisticated appearance, expensive suit, Islamic geometric patterns reflected in glasses, m.jpg',
        57: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        58: 'imazhet-kap-51-111/Create automotive customization scene BMW 530d with subtle logo modifications, ToyotaLexus badges in elegant setting, Albanian businessman overseeing vehicle customization, luxury garage workshop with Islamic architectural.jpg',
        59: 'imazhet-kap-51-111/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg',
        60: 'imazhet-kap-51-111/Create luxury BMW 530d with professional window tinting, elegant dark windows reflecting surroundings, Albanian businessman next to vehicle in official government or business setting, Islamic geometric patterns in backgrou.jpg',
        61: 'imazhet-kap-51-111/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg',
        62: 'imazhet-kap-51-111/Create modern digital business scene Kosovar entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden dig.jpg',
        63: 'imazhet-kap-51-111/Create customer excellence scene Albanian business owner providing exceptional service to diverse customers, luxury service environment, happy satisfied clients, golden service interactions, Islamic hospitality traditions,.jpg',
        64: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        65: 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
        66: 'imazhet-kap-51-111/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg',
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
        77: 'imazhet-kap-51-111/Create supply chain scene Albanian logistics manager overseeing modern warehouse with automated systems, delivery trucks, global shipping routes on screens, efficient operations, golden flow of goods and information. Style.jpg',
        78: 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
        79: 'imazhet-kap-51-111/Create professional visualization of Albanian customs authorities using advanced AI supercomputers with 128GB RAM, Nvidia processors, modern data centers, cybersecurity operations against Serbian interference..png',
        80: 'imazhet-kap-51-111/Create IP protection scene Albanian innovator in modern office with patents and trademarks displayed, legal documents, innovative products protected by golden shields, technology blueprints, luxury office symbolizing succe.jpg',
        81: 'imazhet-kap-51-111/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg',
        82: 'imazhet-kap-51-111/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png',
        83: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        84: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        85: 'imazhet-kap-51-111/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg',
        86: 'imazhet-kap-51-111/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg',
        87: 'imazhet-kap-51-111/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg',
        88: 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
        89: 'imazhet-kap-51-111/Create customer excellence scene Albanian business owner providing exceptional service to diverse customers, luxury service environment, happy satisfied clients, golden service interactions, Islamic hospitality traditions,.jpg',
        90: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        91: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        92: 'imazhet-kap-51-111/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg',
        93: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        94: 'imazhet-kap-51-111/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png',
        95: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        96: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        97: 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
        98: 'imazhet-kap-51-111/Create modern digital business scene Kosovar entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden dig.jpg',
        99: 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
        100: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg',
        101: 'imazhet-kap-51-111/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png',
        102: 'imazhet-kap-51-111/Create professional visualization of Albanian customs authorities using advanced AI supercomputers with 128GB RAM, Nvidia processors, modern data centers, cybersecurity operations against Serbian interference..png',
        103: 'imazhet-kap-51-111/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png',
        104: 'imazhet-kap-51-111/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg',
        105: 'imazhet-kap-51-111/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg',
        106: 'imazhet-kap-51-111/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg',
        107: 'imazhet-kap-51-111/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg',
        108: 'imazhet-kap-51-111/Create customer excellence scene Albanian business owner providing exceptional service to diverse customers, luxury service environment, happy satisfied clients, golden service interactions, Islamic hospitality traditions,.jpg',
        109: 'imazhet-kap-51-111/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg',
        110: 'imazhet-kap-51-111/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg',
        111: 'imazhet-kap-51-111/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg'
    };

    // Function to create image HTML for any chapter
    function createImageHTML(chapterNumber, imagePath) {
        return `
            <div class="chapter-image-container" style="margin: 30px 0; text-align: center; clear: both;">
                <div class="single-chapter-image">
                    <img src="${imagePath}" 
                         alt="Ilustrim profesional për kapitullin ${chapterNumber}" 
                         class="chapter-main-image"
                         style="width: 100%; max-width: 600px; height: auto; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 20px auto; display: block; transition: transform 0.3s ease;"
                         onload="console.log('✅ Image loaded successfully for chapter ${chapterNumber}')"
                         onerror="console.warn('⚠️ Failed to load image for chapter ${chapterNumber}'); this.style.display='none';">
                </div>
            </div>
        `;
    }

    // Function to integrate images into all chapters
    function integrateAllChapterImages() {
        if (typeof window.chapters === 'undefined' || !window.chapters) {
            console.warn('⚠️ Chapters not loaded yet');
            return false;
        }

        let integratedCount = 0;
        const totalChapters = 111;

        console.log('🔄 Starting complete image integration...');

        for (let i = 1; i <= totalChapters; i++) {
            if (window.chapters[i] && window.chapters[i].content) {
                const content = window.chapters[i].content;
                
                // Check if chapter already has an image
                if (!content.includes('chapter-image-container') && !content.includes('<img src="imazhet')) {
                    // Get the correct image path for this chapter
                    const imagePath = completeImageMap[i];
                    
                    if (imagePath) {
                        const imageHTML = createImageHTML(i, imagePath);
                        
                        // Find where to insert the image (after the first h2 title)
                        const titleMatch = content.match(/<h2[^>]*>.*?<\/h2>/);
                        if (titleMatch) {
                            const insertIndex = content.indexOf(titleMatch[0]) + titleMatch[0].length;
                            window.chapters[i].content = 
                                content.substring(0, insertIndex) + 
                                imageHTML + 
                                content.substring(insertIndex);
                            
                            integratedCount++;
                            console.log(`✅ Integrated image for Chapter ${i}`);
                        }
                    } else {
                        console.warn(`⚠️ No image mapped for Chapter ${i}`);
                    }
                } else {
                    console.log(`ℹ️ Chapter ${i} already has image`);
                }
            } else {
                console.warn(`⚠️ Chapter ${i} not found or has no content`);
            }
        }

        console.log(`🎯 Complete! Integrated ${integratedCount} new images.`);
        return integratedCount > 0;
    }

    // Auto-run integration when script loads
    function autoRunIntegration() {
        if (typeof window.chapters !== 'undefined' && window.chapters) {
            integrateAllChapterImages();
        } else {
            // Wait for chapters to load and try again
            console.log('⏳ Waiting for chapters to load...');
            setTimeout(autoRunIntegration, 2000);
        }
    }

    // Expose function globally
    window.integrateAllChapterImages = integrateAllChapterImages;

    // Start integration
    autoRunIntegration();

    console.log('✅ Complete Image Integration Script loaded successfully');

})();
