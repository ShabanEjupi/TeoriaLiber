// Script.js Content Replacer - Removes AI prompts and adds real images
// This script specifically targets the script.js file content

function fixScriptJsContent() {
    console.log('🔧 Starting script.js content fix...');
    
    // Image mappings for each chapter
    const chapterImages = {
        1: 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
        2: 'imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg',
        3: 'imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png',
        4: 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
        5: 'imazhet/Create harmonious family-career scene Albanian family in luxury home, parent working on laptop while children play nearby, business success symbols integrated with family warmth, Islamic family values, golden threads conne.jpg',
        6: 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
        7: 'imazhet/Create sophisticated negotiation scene Albanian business leader across table from international partners, handshake with golden energy, cultural respect symbols, luxury office setting, Islamic fairness principles. Style di.jpg',
        8: 'imazhet/Create powerful mindset transformation image Albanian professional meditating in luxury office, brain with golden neural networks, success symbols (Mercedes, beautiful house, happy family) floating around, Islamic geometri.png',
        9: 'imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png',
        10: 'imazhet/Create inspiring family education scene Albanian parents teaching children about success and values, books and modern technology on table, luxury car visible through window representing future success, Islamic calligraphy.png',
        11: 'imazhet/Create financial management scene Albanian CFO analyzing financial charts and dashboards, golden numbers flowing upward, luxury office with multiple monitors, Islamic geometric patterns on financial documents, prosperity s.jpg',
        12: 'imazhet/Create networking event scene Albanian professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Albanian symbols, golden connection networks. Style social, professio.png',
        13: 'imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png',
        14: 'imazhet/Create strategic partnership scene Albanian business leaders from different industries shaking hands, golden connection webs linking various businesses, luxury boardroom, cultural diversity, Islamic partnership principle.jpg',
        15: 'imazhet/Create innovation explosion scene Albanian entrepreneur surrounded by floating lightbulbs and creative ideas, luxury office with modern art, Islamic geometric creativity patterns, golden innovation energy. Style creative,.png',
        16: 'imazhet/Create sophisticated investment scene Albanian investor managing diverse portfolio, holographic charts showing global markets, luxury home office, Islamic finance symbols, golden growth arrows, real estate and stock certif.jpg',
        17: 'imazhet/Create ethical sales scene Albanian salesperson helping customer find perfect solution, handshake with golden honesty aura, customer satisfaction symbols, Islamic fairness principles, luxury business setting. Style helpful.jpg',
        18: 'imazhet/Create global leadership scene Albanian business leader conducting international meeting with diverse team via video conference, world map in background, multiple flags, modern office with Albanian and Islamic cultural ele.jpg',
        19: 'imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg',
        20: 'imazhet/Create inspiring family education scene Albanian parents teaching children about success and values, books and modern technology on table, luxury car visible through window representing future success, Islamic calligraphy.png'
    };

    // Function to generate proper image HTML
    function generateImageHTML(chapterNumber) {
        const imagePath = chapterImages[chapterNumber];
        if (!imagePath) return '';
        
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

    // Fix chapters object if it exists in global scope
    if (typeof chapters === 'object' && chapters) {
        Object.keys(chapters).forEach(chapterNum => {
            const chapterNumber = parseInt(chapterNum);
            if (chapters[chapterNumber] && chapterNumber <= 20) {
                let content = chapters[chapterNumber].content;
                
                // Remove AI prompt boxes completely
                content = content.replace(/<div class="ai-prompt-box">[\s\S]*?<\/div>/g, '');
                
                // Add proper image at the beginning after the title
                const imageHTML = generateImageHTML(chapterNumber);
                if (imageHTML) {
                    // Insert image after the main title (h2)
                    content = content.replace(/(<h2[^>]*>.*?<\/h2>)/i, '$1\n' + imageHTML);
                }
                
                // Replace common chat prompt patterns
                content = content.replace(/"Create [^"]*"/g, '');
                content = content.replace(/Create [A-Za-z][^.!?]*[.!?]/g, '');
                
                // Clean up extra whitespace
                content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
                
                // Update the chapter content
                chapters[chapterNumber].content = content;
                
                console.log(`✅ Fixed chapter ${chapterNumber}: ${chapters[chapterNumber].title}`);
            }
        });
    }

    // Also fix any existing displayed content
    fixDisplayedContent();
}

// Function to fix currently displayed content
function fixDisplayedContent() {
    // Remove any existing AI prompt boxes from displayed content
    const promptBoxes = document.querySelectorAll('.ai-prompt-box');
    promptBoxes.forEach(box => {
        box.remove();
    });

    // Fix any broken image sources
    const images = document.querySelectorAll('img[src*="imazhet/"]');
    images.forEach(img => {
        // Ensure proper error handling
        img.onerror = function() {
            console.log('Image failed to load:', this.src);
            this.style.display = 'none';
            
            // Create a placeholder
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%; 
                max-width: 600px; 
                height: 300px; 
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                border-radius: 15px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                margin: 20px auto;
                border: 2px dashed #cbd5e0;
                color: #64748b;
                font-size: 1.1rem;
                text-align: center;
                font-family: 'Inter', sans-serif;
            `;
            placeholder.innerHTML = '📸 Imazhi do të shtohet së shpejti<br><small>Përmbajtja e kapitullit është e plotë</small>';
            this.parentNode.insertBefore(placeholder, this);
        };
        
        img.onload = function() {
            console.log('Image loaded successfully:', this.src.split('/').pop());
        };
    });
}

// Function to add enhanced content where prompts were removed
function addEnhancedContent() {
    // Add practical content sections to replace removed prompts
    if (typeof chapters === 'object' && chapters) {
        Object.keys(chapters).forEach(chapterNum => {
            const chapterNumber = parseInt(chapterNum);
            if (chapters[chapterNumber] && chapterNumber <= 20) {
                let content = chapters[chapterNumber].content;
                
                // Add practical application section
                const practicalSection = `
                <div class="practical-application" style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 1.5rem; border-radius: 10px; margin: 2rem 0; border-left: 4px solid #22c55e;">
                    <h4 style="color: #15803d; margin-bottom: 1rem;">💡 Aplikim Praktik</h4>
                    <p>Ky kapitull ju ofron strategji konkrete që mund t'i aplikoni menjëherë në jetën tuaj. Secila metodë është testuar në praktikë dhe është në përputhje me vlerat islame dhe kulturën shqiptare.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
                        <div style="background: white; padding: 1rem; border-radius: 8px;">
                            <strong>🎯 Objektiva të Qarta</strong><br>
                            <small>Vendosni objektiva specifike dhe të matshme</small>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 8px;">
                            <strong>📝 Plan Veprimi</strong><br>
                            <small>Hapa konkrete për implementim</small>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 8px;">
                            <strong>📊 Monitorim</strong><br>
                            <small>Matje e progresit dhe rezultateve</small>
                        </div>
                    </div>
                </div>
                `;
                
                // Add the practical section at the end if it doesn't exist
                if (!content.includes('practical-application')) {
                    content += practicalSection;
                    chapters[chapterNumber].content = content;
                }
            }
        });
    }
}

// Main initialization function
function initializeScriptFix() {
    console.log('🚀 Initializing script.js content fix...');
    
    // Wait a bit for the main script to load
    setTimeout(() => {
        fixScriptJsContent();
        addEnhancedContent();
        console.log('✅ Script.js content fix completed!');
    }, 2000);
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScriptFix);
} else {
    initializeScriptFix();
}

// Export for manual use
window.ScriptFixer = {
    fixScriptJsContent,
    fixDisplayedContent,
    addEnhancedContent
};

console.log('🛠️ Script.js Content Fixer Loaded!');
