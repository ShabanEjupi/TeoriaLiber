// 🔧 ULTIMATE IMAGE FIX - Zgjidhje finale për të gjitha problemet e imazheve
console.log('🖼️ Ultimate Image Fix: Loading comprehensive solution...');

(function() {
    'use strict';
    
    // Harta e plotë e imazheve me emrat e saktë të skedarëve
    const CORRECT_IMAGE_MAP = {
        1: "imazhet/Create an elegant book cover for 'Teoria e Lojërave Nderi dhe Suksesi'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png",
        2: "imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg",
        3: "imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png",
        4: "imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png",
        5: "imazhet/Create harmonious family-career scene Albanian family in luxury home, parent working on laptop while children play nearby, business success symbols integrated with family warmth, Islamic family values, golden threads conne.jpg",
        6: "imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png",
        7: "imazhet/Create sophisticated negotiation scene Albanian business leader across table from international partners, handshake with golden energy, cultural respect symbols, luxury office setting, Islamic fairness principles. Style di.jpg",
        8: "imazhet/Create powerful mindset transformation image Albanian professional meditating in luxury office, brain with golden neural networks, success symbols (Mercedes, beautiful house, happy family) floating around, Islamic geometri.png",
        9: "imazhet/Create inspiring leadership scene Albanian leader guiding diverse team, golden light emanating from leader, team working in harmony, luxury corporate environment, Islamic leadership principles visible, cultural unity symbo.jpg",
        10: "imazhet/Create ethical marketing scene Albanian brand building with honest advertising, cultural values integrated, luxury brand elements, Islamic honesty symbols, golden trust networks connecting to customers. Style trustworthy,.jpg",
        11: "imazhet/Create financial management scene Albanian CFO analyzing financial charts and dashboards, golden numbers flowing upward, luxury office with multiple monitors, Islamic geometric patterns on financial documents, prosperity s.jpg",
        12: "imazhet/Create networking event scene Albanian professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Albanian symbols, golden connection networks. Style social, professio.png",
        13: "imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png",
        14: "imazhet/Create strategic partnership scene Albanian business leaders from different industries shaking hands, golden connection webs linking various businesses, luxury boardroom, cultural diversity, Islamic partnership principle.jpg",
        15: "imazhet/Create innovation explosion scene Albanian entrepreneur surrounded by floating lightbulbs and creative ideas, luxury office with modern art, Islamic geometric creativity patterns, golden innovation energy. Style creative,.png",
        16: "imazhet/Create sophisticated investment scene Albanian investor managing diverse portfolio, holographic charts showing global markets, luxury home office, Islamic finance symbols, golden growth arrows, real estate and stock certif.jpg",
        17: "imazhet/Create ethical sales scene Albanian salesperson helping customer find perfect solution, handshake with golden honesty aura, customer satisfaction symbols, Islamic fairness principles, luxury business setting. Style helpful.jpg",
        18: "imazhet/Create global leadership scene Albanian business leader conducting international meeting with diverse team via video conference, world map in background, multiple flags, modern office with Albanian and Islamic cultural ele.jpg",
        19: "imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg",
        20: "imazhet/Create inspiring family education scene Albanian parents teaching children about success and values, books and modern technology on table, luxury car visible through window representing future success, Islamic calligraphy.png"
    };

    // Harta shtesë për kapitujt e tjerë
    const EXTENDED_IMAGE_MAP = {
        21: "imazhet/Create lifelong learning scene Albanian professional reading books in luxury library, multiple certificates on wall, online courses on laptop, brain with golden knowledge networks, Islamic calligraphy about seeking knowled.png",
        22: "imazhet/Create financial security visualization Albanian family protected by golden shield, luxury home and car safely positioned, Islamic geometric protection patterns, emergency fund symbols, diversified investment charts. Style.jpg",
        23: "imazhet/Create digital transformation scene Albanian entrepreneur surrounded by floating holograms of technology, AI symbols, blockchain elements, luxury tech office, Islamic geometric digital patterns, golden innovation energy. S.jpg",
        24: "imazhet/Create ethical marketing scene Albanian brand building with honest advertising, cultural values integrated, luxury brand elements, Islamic honesty symbols, golden trust networks connecting to customers. Style trustworthy,.jpg",
        25: "imazhet/Create ethical sales scene Albanian salesperson helping customer find perfect solution, handshake with golden honesty aura, customer satisfaction symbols, Islamic fairness principles, luxury business setting. Style helpful.jpg",
        26: "imazhet/Create excellent customer service scene Albanian service representative helping diverse customers, hearts and golden stars showing satisfaction, luxury service environment, Islamic hospitality symbols, happy customers in b.jpg",
        27: "imazhet/Create product innovation lab Albanian team developing cutting-edge products, 3D prototypes floating in air, luxury design studio, Islamic geometric innovation patterns, golden creativity sparks, modern technology. Style i.jpg",
        28: "imazhet/Create financial management scene Albanian CFO analyzing financial charts and dashboards, golden numbers flowing upward, luxury office with multiple monitors, Islamic geometric patterns on financial documents, prosperity s.jpg",
        29: "imazhet/Create sophisticated investment scene Albanian investor managing diverse portfolio, holographic charts showing global markets, luxury home office, Islamic finance symbols, golden growth arrows, real estate and stock certif.jpg",
        30: "imazhet/Create global trade scene Albanian business leader with world map showing trade routes, luxury international office, cultural symbols from different countries, golden trade connections, Islamic geometric patterns represent.jpg"
    };

    // Kombinojme të gjitha hartat
    const COMPLETE_IMAGE_MAP = { ...CORRECT_IMAGE_MAP, ...EXTENDED_IMAGE_MAP };

    // Funksioni për të pastruar të gjitha imazhet e vjetra dhe duplikatet
    function cleanupAllImages() {
        console.log('🧹 Starting comprehensive image cleanup...');
        
        // Hiqni të gjitha galleritë ekzistuese
        const existingGalleries = document.querySelectorAll(
            '.chapter-image-gallery, .single-chapter-image, .image-gallery, .ai-prompt-box, [class*="image"], [class*="gallery"]'
        );
        
        existingGalleries.forEach(gallery => {
            if (gallery && gallery.parentNode) {
                gallery.remove();
            }
        });
        
        // Hiqni imazhet e gabuar që tregojnë prompt text
        const brokenImages = document.querySelectorAll('img[src*="Create"], img[src*="Feature"], img[src*="Generate"]');
        brokenImages.forEach(img => {
            if (img && img.parentNode) {
                img.remove();
            }
        });
        
        // Pastroni tekstin që përmban prompt
        const textElements = document.querySelectorAll('*');
        textElements.forEach(element => {
            if (element.children.length === 0 && element.textContent) {
                let text = element.textContent;
                if (text.includes('Create ') && (text.includes('.jpg') || text.includes('.png'))) {
                    element.textContent = text.replace(/Create [^.]+\.(jpg|png)/gi, '').trim();
                }
            }
        });
        
        console.log(`✅ Cleanup completed: Removed ${existingGalleries.length} galleries and ${brokenImages.length} broken images`);
    }

    // Funksioni për të krijuar HTML-në e duhur të imazhit
    function createImageHTML(chapterNumber) {
        const imagePath = COMPLETE_IMAGE_MAP[chapterNumber];
        
        if (!imagePath) {
            console.log(`⚠️ No image found for chapter ${chapterNumber}`);
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

    // Funksioni kryesor për të aplikuar imazhet
    function applyImagesToChapters() {
        console.log('🖼️ Applying images to chapters...');
        
        if (typeof chapters === 'undefined') {
            console.warn('⚠️ Chapters object not found. Will try again in 1 second...');
            setTimeout(applyImagesToChapters, 1000);
            return;
        }
        
        let appliedCount = 0;
        
        // Aplikoni imazhet për çdo kapitull
        Object.keys(COMPLETE_IMAGE_MAP).forEach(chapterNum => {
            const chapterNumber = parseInt(chapterNum);
            
            if (chapters[chapterNumber]) {
                const imageHTML = createImageHTML(chapterNumber);
                
                if (imageHTML) {
                    let content = chapters[chapterNumber].content;
                    
                    // Hiqni imazhet e vjetra nga përmbajtja
                    content = content.replace(/<div class="chapter-image[^>]*>[\s\S]*?<\/div>/g, '');
                    content = content.replace(/<div class="ai-prompt-box"[^>]*>[\s\S]*?<\/div>/g, '');
                    content = content.replace(/<img[^>]*Create[^>]*>/g, '');
                    
                    // Gjej titullin e kapitullit
                    const titleMatch = content.match(/<h2[^>]*>([^<]+)<\/h2>/);
                    
                    if (titleMatch) {
                        const titleEnd = content.indexOf(titleMatch[0]) + titleMatch[0].length;
                        
                        // Injekto imazhin pas titullit
                        content = content.slice(0, titleEnd) + 
                                '\n\n' + imageHTML + '\n\n' + 
                                content.slice(titleEnd);
                        
                        chapters[chapterNumber].content = content;
                        appliedCount++;
                        
                        console.log(`✅ Applied image to chapter ${chapterNumber}`);
                    }
                }
            }
        });
        
        console.log(`🎯 Image application completed: ${appliedCount} chapters updated`);
        
        // Rifresko kapitullin aktual nëse është i ndryshuar
        if (typeof currentChapter !== 'undefined' && COMPLETE_IMAGE_MAP[currentChapter]) {
            setTimeout(() => {
                if (typeof showChapter === 'function') {
                    console.log(`🔄 Refreshing current chapter: ${currentChapter}`);
                    showChapter(currentChapter);
                }
            }, 500);
        }
        
        return appliedCount;
    }

    // Shtoni CSS për imazhet
    function addImageStyles() {
        const existingStyle = document.getElementById('ultimate-image-styles');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        const style = document.createElement('style');
        style.id = 'ultimate-image-styles';
        style.textContent = `
            .chapter-image-container {
                margin: 30px 0 !important;
                text-align: center;
                clear: both;
                padding: 20px 0;
            }
            
            .single-chapter-image {
                position: relative;
                display: inline-block;
            }
            
            .chapter-main-image {
                width: 100% !important;
                max-width: 600px !important;
                height: auto !important;
                border-radius: 15px !important;
                box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
                margin: 20px auto !important;
                display: block !important;
                transition: transform 0.3s ease, box-shadow 0.3s ease !important;
            }
            
            .chapter-main-image:hover {
                transform: translateY(-5px) !important;
                box-shadow: 0 12px 35px rgba(0,0,0,0.2) !important;
            }
            
            /* Fshehu imazhet e thyera */
            img[src*="Create "]:not(.chapter-main-image) {
                display: none !important;
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                .chapter-image-container {
                    margin: 20px 0 !important;
                    padding: 10px 0;
                }
                
                .chapter-main-image {
                    max-width: 100% !important;
                    margin: 15px auto !important;
                }
            }
            
            /* Fshih elementet e tjera konfliktuale */
            .ai-prompt-box,
            .image-gallery:not(.chapter-image-container),
            .content-enhanced-notice {
                display: none !important;
            }
        `;
        
        document.head.appendChild(style);
        console.log('🎨 Image styles applied');
    }

    // Observer për të detektuar ndryshimet në DOM
    function setupMutationObserver() {
        const observer = new MutationObserver(function(mutations) {
            let shouldReapply = false;
            
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1 && node.innerHTML && 
                            (node.innerHTML.includes('Kapitulli') || node.innerHTML.includes('<h2'))) {
                            shouldReapply = true;
                        }
                    });
                }
            });
            
            if (shouldReapply) {
                console.log('🔄 Content change detected, reapplying images...');
                setTimeout(() => {
                    cleanupAllImages();
                    applyImagesToChapters();
                }, 100);
            }
        });
        
        // Vëzhgo ndryshimet në chapter content
        const chapterContent = document.getElementById('chapter-content');
        if (chapterContent) {
            observer.observe(chapterContent, {
                childList: true,
                subtree: true
            });
        }
        
        console.log('👁️ Mutation observer setup complete');
    }

    // Funksioni kryesor për inicializimin
    function initializeUltimateImageFix() {
        console.log('🚀 Initializing Ultimate Image Fix...');
        
        // Pastro gjithçka
        cleanupAllImages();
        
        // Shto CSS
        addImageStyles();
        
        // Apliko imazhet
        const applied = applyImagesToChapters();
        
        // Setup observer
        setupMutationObserver();
        
        console.log(`✅ Ultimate Image Fix initialized: ${applied} chapters processed`);
        
        return applied;
    }

    // Funksioni për të rivendosur të gjitha imazhet manualisht
    function resetAllImages() {
        console.log('🔄 Resetting all images...');
        cleanupAllImages();
        setTimeout(() => {
            applyImagesToChapters();
        }, 500);
    }

    // Funksioni për të kontrolluar statusin e imazheve
    function checkImageStatus() {
        const images = document.querySelectorAll('.chapter-main-image');
        let loaded = 0, failed = 0, total = images.length;
        
        images.forEach((img, index) => {
            if (img.complete) {
                if (img.naturalWidth === 0) {
                    failed++;
                    console.warn(`❌ Image ${index + 1} failed to load`);
                } else {
                    loaded++;
                    console.log(`✅ Image ${index + 1} loaded successfully`);
                }
            }
        });
        
        console.log(`📊 Image Status: ${loaded} loaded, ${failed} failed, ${total} total`);
        return { loaded, failed, total };
    }

    // Eksportimi i funksioneve për përdorim manual
    window.UltimateImageFix = {
        initialize: initializeUltimateImageFix,
        reset: resetAllImages,
        cleanup: cleanupAllImages,
        apply: applyImagesToChapters,
        checkStatus: checkImageStatus,
        imageMap: COMPLETE_IMAGE_MAP
    };

    // Inicializo automatikisht kur DOM është gati
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeUltimateImageFix);
    } else {
        setTimeout(initializeUltimateImageFix, 100);
    }

    console.log('✅ Ultimate Image Fix module loaded successfully');

})();
