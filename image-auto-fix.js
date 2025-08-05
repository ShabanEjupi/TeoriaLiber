// Image Auto-Fix Script - Complete Image Integration for All Chapters 1-111
(function() {
    'use strict';
    
    console.log('🖼️ Loading Image Auto-Fix Script...');

    // Complete image mapping for all chapters 1-111 using ALL available images
    const allAvailableImages = [
        "imazhet/Create an elegant book cover for 'Teoria e Lojërave Nderi dhe Suksesi'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png",
        "imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png",
        "imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png",
        "imazhet/Create balanced life scene Albanian professional in peaceful meditation pose, scales showing perfect balance between work (laptop, business) and life (family, health, spirituality), golden harmony aura, Islamic peace symbo.jpg",
        "imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg",
        "imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg",
        "imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern desi.jpg",
        "imazhet/Create digital transformation scene Albanian entrepreneur surrounded by floating holograms of technology, AI symbols, blockchain elements, luxury tech office, Islamic geometric digital patterns, golden innovation energy. S.jpg",
        "imazhet/Create disruptive technology scene Albanian tech entrepreneur with cutting-edge innovations, robots and AI systems, blockchain networks, virtual reality, golden circuit patterns, luxury office with latest technology, trans.jpg",
        "imazhet/Create dynamic social media scene Albanian influencer creating content with professional setup, multiple screens showing different platforms, engagement metrics flowing like golden particles, Islamic values integrated, lux.jpg",
        "imazhet/Create ethical marketing scene Albanian brand building with honest advertising, cultural values integrated, luxury brand elements, Islamic honesty symbols, golden trust networks connecting to customers. Style trustworthy,.jpg",
        "imazhet/Create ethical sales scene Albanian salesperson helping customer find perfect solution, handshake with golden honesty aura, customer satisfaction symbols, Islamic fairness principles, luxury business setting. Style helpful.jpg",
        "imazhet/Create excellent customer service scene Albanian service representative helping diverse customers, hearts and golden stars showing satisfaction, luxury service environment, Islamic hospitality symbols, happy customers in b.jpg",
        "imazhet/Create financial management scene Albanian CFO analyzing financial charts and dashboards, golden numbers flowing upward, luxury office with multiple monitors, Islamic geometric patterns on financial documents, prosperity s.jpg",
        "imazhet/Create financial security visualization Albanian family protected by golden shield, luxury home and car safely positioned, Islamic geometric protection patterns, emergency fund symbols, diversified investment charts. Style.jpg",
        "imazhet/Create futuristic blockchain scene Albanian tech expert working with floating blockchain networks, cryptocurrency symbols, golden digital chains connecting globally, Islamic geometric digital patterns, luxury tech environm.jpg",
        "imazhet/Create futuristic business scene Albanian entrepreneur in high-tech office with holographic displays, AI assistants, sustainable technology, green energy solutions, luxury car charging with renewable energy, golden future.jpg",
        "imazhet/Create global leadership scene Albanian business leader conducting international meeting with diverse team via video conference, world map in background, multiple flags, modern office with Albanian and Islamic cultural ele.jpg",
        "imazhet/Create global trade scene Albanian business leader with world map showing trade routes, luxury international office, cultural symbols from different countries, golden trade connections, Islamic geometric patterns represent.jpg",
        "imazhet/Create harmonious family-career scene Albanian family in luxury home, parent working on laptop while children play nearby, business success symbols integrated with family warmth, Islamic family values, golden threads conne.jpg",
        "imazhet/Create innovation explosion scene Albanian entrepreneur surrounded by floating lightbulbs and creative ideas, luxury office with modern art, Islamic geometric creativity patterns, golden innovation energy. Style creative,.png",
        "imazhet/Create inspiring family education scene Albanian parents teaching children about success and values, books and modern technology on table, luxury car visible through window representing future success, Islamic calligraphy.png",
        "imazhet/Create inspiring leadership scene Albanian leader guiding diverse team, golden light emanating from leader, team working in harmony, luxury corporate environment, Islamic leadership principles visible, cultural unity symbo.jpg",
        "imazhet/Create justice and humanitarian scene Albanian professional working with international documents for Palestine, scales of justice, Islamic symbols, maps showing strategic locations, golden light representing hope and justi.png",
        "imazhet/Create lifelong learning scene Albanian professional reading books in luxury library, multiple certificates on wall, online courses on laptop, brain with golden knowledge networks, Islamic calligraphy about seeking knowled.png",
        "imazhet/Create mentorship scene Wise Albanian business leader guiding younger entrepreneur, knowledge flowing as golden light between them, luxury office with traditional and modern elements, Islamic wisdom symbols, generational t.png",
        "imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png",
        "imazhet/Create modern education scene Albanian children learning with both traditional books and digital devices, parents guiding tech use, Islamic values integrated with modern learning, golden balance between digital and analog,.jpg",
        "imazhet/Create networking event scene Albanian professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Albanian symbols, golden connection networks. Style social, professio.png",
        "imazhet/Create peaceful balance scene Albanian professional in meditation pose balancing work and life, scales showing family and business in harmony, luxury car and beautiful home in background, Islamic peace symbols. Style seren.png",
        "imazhet/Create peaceful conflict resolution scene Albanian mediator bringing two parties together, dove of peace with golden light, handshake in center, Islamic justice symbols, cultural harmony elements. Style peaceful, diplomati.jpg",
        "imazhet/Create peak performance scene Athletic Albanian business leader in modern gym with business charts showing correlation between fitness and success, golden energy radiating from healthy body, Islamic principles of body care.jpg",
        "imazhet/Create philanthropic scene Albanian benefactor distributing aid in Albanian village, modern school being built, children learning, Islamic charity symbols, golden hands reaching out to help, luxury car in background showin.jpg",
        "imazhet/Create powerful communication scene Albanian speaker presenting to diverse audience, golden words flowing from mouth, luxury business setting, cultural symbols of trust and honor, Islamic communication ethics. Style author.png",
        "imazhet/Create powerful mindset transformation image Albanian professional meditating in luxury office, brain with golden neural networks, success symbols (Mercedes, beautiful house, happy family) floating around, Islamic geometri.png",
        "imazhet/Create powerful mindset visualization Albanian professional in meditation pose, surrounded by symbols of success (Mercedes, beautiful home, happy family), golden light emanating from their mind, Islamic geometric patterns.png",
        "imazhet/Create product innovation lab Albanian team developing cutting-edge products, 3D prototypes floating in air, luxury design studio, Islamic geometric innovation patterns, golden creativity sparks, modern technology. Style i.jpg",
        "imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png",
        "imazhet/Create social entrepreneurship scene Albanian entrepreneur building community center, helping families, educational programs, mosque in background, children playing safely, modern facilities improving lives, golden light o.jpg",
        "imazhet/Create social impact scene Albanian entrepreneur planting trees while wearing business suit, children learning in school funded by business, community development, Islamic charity symbols, golden hands helping others. Styl.jpg",
        "imazhet/Create sophisticated investment scene Albanian investor managing diverse portfolio, holographic charts showing global markets, luxury home office, Islamic finance symbols, golden growth arrows, real estate and stock certif.jpg",
        "imazhet/Create sophisticated negotiation scene Albanian business leader across table from international partners, handshake with golden energy, cultural respect symbols, luxury office setting, Islamic fairness principles. Style di.jpg",
        "imazhet/Create sophisticated networking scene Albanian business professionals connecting at luxury venue, handshakes with golden energy flowing between people, cultural diversity, Islamic and Albanian symbols, connection networks.png",
        "imazhet/Create startup journey visualization Albanian entrepreneur's journey from idea sketch to successful company, progression showing growth stages, luxury office evolution, Islamic values integrated. Style inspirational, growt.png",
        "imazhet/Create strategic decision-making scene Albanian executive at crossroads with multiple paths, chess pieces and business charts, golden scale weighing options, Islamic wisdom symbols, luxury office setting. Style analytical,.jpg",
        "imazhet/Create strategic equilibrium visualization chess-like board showing business relationships, Albanian business leaders in strategic positions, mathematical equations in background, golden balance symbols. Style intelligent,.png",
        "imazhet/Create strategic partnership scene Albanian business leaders from different industries shaking hands, golden connection webs linking various businesses, luxury boardroom, cultural diversity, Islamic partnership principle.jpg",
        "imazhet/Create sustainable business scene Albanian entrepreneur with green technology, solar panels on luxury building, pristine Albanian mountains in background, Islamic stewardship symbols, golden eco-friendly elements, renewabl.jpg",
        "imazhet/Create thriving e-commerce scene Albanian entrepreneur managing online store, packages being shipped globally, luxury office with multiple monitors showing sales dashboards, Islamic geometric patterns on website design, go.jpg",
        "imazhet/Create visionary planning scene Albanian leader looking toward bright future horizon, luxury cars and beautiful buildings emerging from golden mist, family and success symbols, Islamic architectural elements, strategic pla.jpg",
        "imazhet/Create wealth legacy scene Albanian family patriarch in elegant office reviewing estate planning documents, family photos showing multiple generations, luxury assets in background, Islamic inheritance principles visible, g.jpg",
        // Additional images from the merged collection
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 67'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 68'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.jpg",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 69'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 70'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 71'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 72'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 73'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 74'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 75'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 76'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png",
        "imazhet/Create automotive customization scene BMW 530d with subtle logo modifications, ToyotaLexus badges in elegant setting, Albanian businessman overseeing vehicle customization, luxury garage workshop with Islamic architectural.jpg",
        "imazhet/Create business exit scene Albanian entrepreneur in elegant boardroom signing exit deal, financial charts showing business growth, luxury office with celebration atmosphere, golden success symbols, handshake with investors.jpg",
        "imazhet/Create comprehensive success scene Confident Albanian businessman with BMW 530d, family support in background, community respect, Islamic calligraphy suggesting spiritual grounding, modern business success symbols, elegant.jpg",
        "imazhet/Create confident Albanian businessman making strong eye contact while standing next to BMW 530d, expensive suit, confident posture, Islamic geometric patterns in background, luxury office or upscale location, demonstrating.jpg",
        "imazhet/Create confident Kosovar businessman making strong eye contact while standing next to BMW 530d, expensive suit, luxury office background, psychological strength and dominance aura, golden confidence symbols. Style pow.jpg",
        "imazhet/Create crisis management scene Albanian business leader in crisis command center, multiple screens showing business continuity plans, team working from home via technology, safe business operations during challenge, golden.jpg",
        "imazhet/Create customer excellence scene Albanian business owner providing exceptional service to diverse customers, luxury service environment, happy satisfied clients, golden service interactions, Islamic hospitality traditions,.jpg",
        "imazhet/Create data analytics scene Albanian business analyst in high-tech command center with multiple screens showing business dashboards, data visualizations, predictive models, AI insights, luxury office with Islamic geometric.jpg",
        "imazhet/Create focused businessman in BMW 530d, concentrated on important task while aware of surroundings, expensive shopping area or business district, maintaining focus despite attention from others, Islamic patterns subtly in.jpg",
        "imazhet/Create Industry 4.0 scene Albanian entrepreneur in smart factory with IoT sensors, robotic automation, AI-powered analytics, digital twin displays, luxury office integrated with high-tech manufacturing, golden data streams connect.jpg",
        "imazhet/Create international expansion scene Albanian entrepreneur opening business in multiple countries, world map with business locations marked, different cultural business meetings, luxury office with international flags, gol.jpg",
        "imazhet/Create IP protection scene Albanian innovator in modern office with patents and trademarks displayed, legal documents, innovative products protected by golden shields, technology blueprints, luxury office symbolizing succe.jpg",
        "imazhet/Create legacy scene Albanian patriarch in beautiful study surrounded by books, family photos, successful businesses in background, mosque and community center built by his philanthropy, golden sunset representing completed.jpg",
        "imazhet/Create luxury BMW 530d with professional window tinting, elegant dark windows reflecting surroundings, Albanian businessman next to vehicle in official government or business setting, Islamic geometric patterns in backgrou.jpg",
        "imazhet/Create modern digital business scene Kosovar entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden dig.jpg",
        "imazhet/Create networking event scene Kosovar professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Kosovar symbols, golden connection networks. Style social, profes.jpg",
        "imazhet/Create powerful visualization of Kosovo liberation through modern diplomatic, technological and economic strategies, Albanian eagles rising above Serbian oppression, freedom and justice symbols..png",
        "imazhet/Create professional visualization of Albanian customs authorities using advanced AI supercomputers with 128GB RAM, Nvidia processors, modern data centers, cybersecurity operations against Serbian interference..png",
        "imazhet/Create stylish Albanian businessman wearing elegant anti-reflective glasses or sunglasses, standing confidently next to BMW 530d, sophisticated appearance, expensive suit, Islamic geometric patterns reflected in glasses, m.jpg",
        "imazhet/Create supply chain scene Albanian logistics manager overseeing modern warehouse with automated systems, delivery trucks, global shipping routes on screens, efficient operations, golden flow of goods and information. Style.jpg",
        "imazhet/Create technical diagram showing Audio Flamingo 3 AI model setup on HuggingFace platform, voice synthesis for Albanian language, psychological warfare against Serbian propaganda, modern AI laboratory..png"
    ];

    // Generate complete image mapping for all 111 chapters
    const imageMapping = {};
    for (let i = 1; i <= 111; i++) {
        // Use modulo to cycle through all available images
        const imageIndex = (i - 1) % allAvailableImages.length;
        imageMapping[i] = allAvailableImages[imageIndex];
    }

    // Function to get image for a specific chapter
    window.getImagePathForChapter = function(chapterNumber) {
        return imageMapping[chapterNumber] || null;
    };

    // Enhanced image integration with better error handling
    window.integrateChapterImages = function() {
        console.log('🔧 Auto-integrating images for all 111 chapters...');
        
        for (let chapterNum = 1; chapterNum <= 111; chapterNum++) {
            const imagePath = imageMapping[chapterNum];
            
            if (imagePath && window.chapters && window.chapters[chapterNum]) {
                const imageHTML = `
                    <div class="chapter-image-container" style="text-align: center; margin: 2rem 0;">
                        <img src="${imagePath}" 
                             alt="Kapitull ${chapterNum} Imazh" 
                             style="max-width: 100%; height: auto; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);"
                             onerror="console.warn('Image failed to load:', '${imagePath}'); this.style.display='none';"
                             onload="console.log('Image loaded successfully for chapter ${chapterNum}');">
                        <p style="font-style: italic; color: #666; margin-top: 1rem; font-size: 0.9rem;">
                            Figura ${chapterNum}: Ilustrim për kapitullin "${window.chapters[chapterNum].title || 'Kapitulli ' + chapterNum}"
                        </p>
                    </div>
                `;
                
                // Add image to chapter content if not already present
                if (!window.chapters[chapterNum].content.includes('chapter-image-container')) {
                    window.chapters[chapterNum].content = imageHTML + window.chapters[chapterNum].content;
                }
            }
        }
        
        console.log('✅ Image integration completed for all 111 chapters');
    };

    // Enhanced function to force integrate ALL images for ALL chapters
    window.forceIntegrateAllImages = function() {
        console.log('🚀 FORCE integrating ALL images for ALL 111 chapters...');
        
        // Create a backup if chapters don't exist
        if (typeof window.chapters === 'undefined' || !window.chapters) {
            window.chapters = {};
        }
        
        for (let chapterNum = 1; chapterNum <= 111; chapterNum++) {
            const imagePath = imageMapping[chapterNum];
            
            if (imagePath) {
                // Create chapter if it doesn't exist
                if (!window.chapters[chapterNum]) {
                    window.chapters[chapterNum] = {
                        title: `Kapitulli ${chapterNum}`,
                        content: `<h2>Kapitulli ${chapterNum}</h2><p>Përmbajtja e kapitullit ${chapterNum}...</p>`
                    };
                }
                
                const imageHTML = `
                    <div class="chapter-image-container single-chapter-image" style="text-align: center; margin: 2rem 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 1.5rem; border-radius: 20px;">
                        <img src="${imagePath}" 
                             alt="Kapitull ${chapterNum} - Teoria e Lojërave" 
                             style="max-width: 600px; width: 100%; height: auto; border-radius: 15px; box-shadow: 0 12px 35px rgba(0,0,0,0.2); transition: transform 0.3s ease;"
                             onerror="console.warn('⚠️ Failed to load image for chapter ${chapterNum}:', '${imagePath}'); this.style.display='none';"
                             onload="console.log('✅ Successfully loaded image for chapter ${chapterNum}'); this.style.transform='scale(1.02)';"
                             onmouseover="this.style.transform='scale(1.05)';"
                             onmouseout="this.style.transform='scale(1.02)';">
                        <p style="font-style: italic; color: #495057; margin-top: 1.5rem; font-size: 0.95rem; font-weight: 500;">
                            📷 Figura ${chapterNum}: ${getImageDescription(chapterNum)}
                        </p>
                    </div>
                `;
                
                // Remove existing image container if present and add new one
                window.chapters[chapterNum].content = window.chapters[chapterNum].content.replace(
                    /<div class="chapter-image-container[^>]*>.*?<\/div>/gs, 
                    ''
                );
                
                // Add image at the beginning of chapter content
                window.chapters[chapterNum].content = imageHTML + window.chapters[chapterNum].content;
            }
        }
        
        console.log('✅ ALL 111 chapters now have integrated images with enhanced styling!');
        
        // Trigger a refresh if there's a display function
        if (typeof window.displayChapter === 'function' && window.currentChapter) {
            window.displayChapter(window.currentChapter);
        }
    };

    // Function to get image description based on chapter number
    function getImageDescription(chapterNum) {
        const descriptions = [
            "Kapakfaqe e librit me shahmat dhe simbole të suksesit",
            "Nderi në biznes dhe marrëdhënie të besuara",
            "Dasma dhe jeta familjare e suksesshme",
            "Ekuilibri midis jetës dhe punës",
            "Biznesi i futurit me AI dhe teknologji",
            "Strategjia e shekullit 21 në biznes",
            "Strategjia moderne e biznesit dhe dizajni",
            "Transformimi digjital dhe inovacioni",
            "Teknologjia disruptive dhe e-commerce",
            "Media sociale dhe influencimi pozitiv",
            "Marketingu etik dhe vlerat kulturore",
            "Shitjet etike dhe kënaqësia e klientit",
            "Shërbimi i shkëlqyer ndaj klientëve",
            "Menaxhimi financiar dhe prosperiteti",
            "Siguria financiare dhe mbrojtja",
            "Blockchain dhe kriptovalutat",
            "Biznesi i ardhshëm dhe teknologjia",
            "Udhëheqja globale dhe diversiteti",
            "Tregtia ndërkombëtare dhe kulturat",
            "Harmonia midis familjes dhe karrierës",
            "Inovacioni dhe kreativiteti në biznes",
            "Edukimi familjar dhe vlerat",
            "Udhëheqja inspiruese dhe ndikimi",
            "Drejtësia dhe puna humanitare",
            "Të mësuarit gjatë gjithë jetës",
            "Mentorimi dhe transferimi i dijes",
            "Biznesi digjital dhe rritja online",
            "Edukimi modern dhe teknologjia",
            "Networking dhe lidhjet profesionale",
            "Ekuilibri dhe paqja e brendshme",
            "Zgjidhja paqësore e konflikteve",
            "Performanca maksimale dhe shëndeti",
            "Filantropija dhe ndihma për komunitet",
            "Komunikimi i fuqishëm dhe besimi",
            "Transformimi i mendësisë dhe suksesi",
            "Vizualizimi i fuqisë mendore",
            "Laboratori i inovacionit dhe produkteve",
            "Investimet e mençura dhe halal",
            "Ndërmarrja sociale dhe ndikimi",
            "Ndikimi social dhe mjedisi",
            "Investimet e sofistikuara dhe portofolio",
            "Negociatat e suksesshme dhe drejtësia",
            "Networking i sofistikuar dhe kulturat",
            "Udhëtimi i startup dhe rritja",
            "Vendimmarrja strategjike dhe mençuria",
            "Ekuilibri strategjik dhe matematika",
            "Partneritetet strategjike në biznes",
            "Biznesi i qëndrueshëm dhe mjedisi",
            "E-commerce dhe shitjet globale",
            "Planifikimi vizionar dhe e ardhmja",
            "Trashëgimia e pasurisë dhe familja",
            "Kapitulli 67: Suksesi dhe nderi në biznes",
            "Kapitulli 68: Strategjia dhe udhëheqja",
            "Kapitulli 69: Inovacioni dhe kreativiteti",
            "Kapitulli 70: Vlerat dhe etika në biznes",
            "Kapitulli 71: Rritja dhe zhvillimi personal",
            "Kapitulli 72: Menaxhimi dhe ekipi",
            "Kapitulli 73: Investimet dhe financat",
            "Kapitulli 74: Networking dhe marrëdhëniet",
            "Kapitulli 75: Teknologjia dhe inovacioni",
            "Kapitulli 76: E ardhmja dhe vizioni",
            "Personalizimi i automjeteve dhe luksi",
            "Dalja nga biznesi dhe suksesi",
            "Suksesi i plotë dhe mbështetja familjare",
            "Besimi dhe pozicioni në biznes",
            "Udhëheqja e fortë nga Kosova",
            "Menaxhimi i krizës dhe vazhdueshmëria",
            "Shkëlqimi në shërbimin ndaj klientëve",
            "Analitika e të dhënave dhe inteligjenca",
            "Përqendrimi dhe fokusu në objektiva",
            "Industria 4.0 dhe automatizimi",
            "Zgjerimi ndërkombëtar i biznesit",
            "Mbrojtja e pronësisë intelektuale",
            "Trashëgimia dhe ndikimi i gjeneratave",
            "Luksi dhe eleganca në biznes",
            "Ndërmarrësia digjitale nga Kosova",
            "Networking profesional nga Kosova",
            "Çlirimi i Kosovës dhe strategjia moderne",
            "Teknologjia dhe siguria kombëtare",
            "Stili dhe eleganca në udhëheqje",
            "Menaxhimi i zinxhirit të furnizimit",
            "Teknologjia AI dhe zhvillimi gjuhësor"
        ];
        
        const index = (chapterNum - 1) % descriptions.length;
        return descriptions[index];
    }

    // Auto-run image integration when page loads (only once)
    let hasRun = false;
    function runOnce() {
        if (hasRun) return;
        hasRun = true;
        
        setTimeout(() => {
            console.log('🎯 Auto-running image integration...');
            if (typeof window.forceIntegrateAllImages === 'function') {
                window.forceIntegrateAllImages();
            } else if (typeof window.integrateChapterImages === 'function') {
                window.integrateChapterImages();
            }
        }, 3000); // Increased delay to ensure everything is loaded
    }
    
    // Add manual commands for debugging
    window.manualImageIntegration = function() {
        console.log('🔧 Manual image integration triggered...');
        window.forceIntegrateAllImages();
    };
    
    window.checkImagePaths = function() {
        console.log('🔍 Checking all image paths...');
        console.log(`Total images available: ${allAvailableImages.length}`);
        allAvailableImages.forEach((path, index) => {
            console.log(`${index + 1}. ${path}`);
        });
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runOnce);
    } else {
        runOnce();
    }

    console.log('✅ Image Auto-Fix Script loaded successfully');
    console.log(`📊 Total images available: ${allAvailableImages.length}`);
    console.log('💡 Run window.manualImageIntegration() to manually integrate all images');
    console.log('🔍 Run window.checkImagePaths() to see all available image paths');

})();
