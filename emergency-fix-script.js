// Emergency Fix Console Script
// Paste this into browser console if infinite loops continue

console.log('🚨 Emergency Image Fix Script - Stopping Infinite Loops');

// Stop all image fix scripts
if (window.ImageDisplayFix) {
    console.log('🛑 Disabling ImageDisplayFix observers...');
    // Disable mutation observers
    window.ImageDisplayFix.observersDisabled = true;
}

// Clear all intervals and timeouts
let intervalId = setInterval(() => {}, 99999);
for (let i = 1; i < intervalId; i++) {
    clearInterval(i);
    clearTimeout(i);
}
console.log('🧹 Cleared all intervals and timeouts');

// Stop refresh flags
window.isRefreshingChapter = false;
window.isRestoringImages = false;

// Manual image restore (run once)
function emergencyImageRestore() {
    console.log('🔧 Emergency image restore starting...');
    
    const imageMap = {
        1: 'book-cover',
        2: 'business-strategy', 
        3: 'smart-investment',
        4: 'wedding-success',
        5: 'family-career-harmony'
    };
    
    const completeImageMap = {
        'book-cover': 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
        'business-strategy': 'imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg',
        'smart-investment': 'imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png',
        'wedding-success': 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
        'family-career-harmony': 'imazhet/Create harmonious family-career scene Albanian family in luxury home, parent working on laptop while children play nearby, business success symbols integrated with family warmth, Islamic family values, golden threads conne.jpg'
    };
    
    if (typeof chapters !== 'undefined') {
        for (let i = 1; i <= 5; i++) {
            if (chapters[i] && imageMap[i]) {
                const imageKey = imageMap[i];
                const imagePath = completeImageMap[imageKey];
                
                if (imagePath) {
                    const imageHTML = `
                        <div class="chapter-image-gallery" style="margin: 20px 0; text-align: center;">
                            <div class="single-chapter-image">
                                <img src="${imagePath}" 
                                     alt="Ilustrim profesional për kapitullin ${i}" 
                                     style="width: 100%; max-width: 600px; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); margin: 20px auto; display: block;">
                            </div>
                        </div>
                    `;
                    
                    // Remove old content
                    let content = chapters[i].content;
                    content = content.replace(/<div class="enhanced-content"[^>]*>[\s\S]*?<\/div>/g, '');
                    content = content.replace(/<div class="chapter-image-gallery"[^>]*>[\s\S]*?<\/div>/g, '');
                    
                    // Add new image after title
                    const titleMatch = content.match(/<h[12][^>]*>.*?<\/h[12]>/);
                    if (titleMatch) {
                        const insertPoint = content.indexOf(titleMatch[0]) + titleMatch[0].length;
                        content = content.slice(0, insertPoint) + '\n\n' + imageHTML + '\n\n' + content.slice(insertPoint);
                        chapters[i].content = content;
                        console.log(`✅ Emergency fix applied to chapter ${i}`);
                    }
                }
            }
        }
        console.log('🎯 Emergency image restore complete');
        return true;
    } else {
        console.log('❌ Chapters object not found');
        return false;
    }
}

// Manual chapter refresh (use carefully)
function emergencyChapterRefresh(chapterNum) {
    if (typeof showChapter === 'function' && !window.isRefreshingChapter) {
        window.isRefreshingChapter = true;
        console.log(`🔄 Emergency refresh for chapter ${chapterNum}`);
        showChapter(chapterNum);
        setTimeout(() => { window.isRefreshingChapter = false; }, 2000);
    }
}

// Export emergency functions
window.emergencyImageRestore = emergencyImageRestore;
window.emergencyChapterRefresh = emergencyChapterRefresh;

console.log('✅ Emergency script loaded. Use:');
console.log('  emergencyImageRestore() - Fix images once');
console.log('  emergencyChapterRefresh(1) - Refresh specific chapter');
