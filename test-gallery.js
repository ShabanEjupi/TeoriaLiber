// Image Gallery Test Script
console.log('🧪 Testing Image Gallery...');

// Test if all images exist and are accessible
const imageMap = {
    'book-cover': 'imazhet/Create an elegant book cover for \'Teoria e Lojërave Nderi dhe Suksesi\'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional A.png',
    'wedding': 'imazhet/Create beautiful Albanian wedding scene with modern luxury elements, traditional and Islamic ceremony elements, successful couple with bright future symbols, golden love and prosperity symbols. Style elegant, traditional,.png',
    'business': 'imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png',
    'digital': 'imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png',
    'networking': 'imazhet/Create networking event scene Albanian professionals connecting at luxury venue, handshakes and business cards exchange, cultural diversity, Islamic and Albanian symbols, golden connection networks. Style social, professio.png',
    'mindset': 'imazhet/Create powerful mindset visualization Albanian professional in meditation pose, surrounded by symbols of success (Mercedes, beautiful home, happy family), golden light emanating from their mind, Islamic geometric patterns.png',
    'investment': 'imazhet/Create smart investment scene Albanian investor analyzing charts on multiple screens, luxury cars and real estate in background, Islamic finance symbols, golden growth arrows. Style analytical, prosperous, halal-focused..png',
    'startup': 'imazhet/Create startup journey visualization Albanian entrepreneur\'s journey from idea sketch to successful company, progression showing growth stages, luxury office evolution, Islamic values integrated. Style inspirational, growt.png',
    'strategy': 'imazhet/Create strategic equilibrium visualization chess-like board showing business relationships, Albanian business leaders in strategic positions, mathematical equations in background, golden balance symbols. Style intelligent,.png'
};

// Test image loading
let loadedImages = 0;
let totalImages = Object.keys(imageMap).length;

Object.entries(imageMap).forEach(([key, path]) => {
    const img = new Image();
    img.onload = () => {
        loadedImages++;
        console.log(`✅ Image loaded: ${key}`);
        if (loadedImages === totalImages) {
            console.log(`🎉 All ${totalImages} images loaded successfully!`);
        }
    };
    img.onerror = () => {
        console.error(`❌ Failed to load image: ${key} - ${path}`);
    };
    img.src = path;
});

// Test gallery functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Testing Gallery DOM Elements...');
    
    // Test gallery cards
    const galleryCards = document.querySelectorAll('.gallery-card');
    console.log(`📱 Found ${galleryCards.length} gallery cards`);
    
    // Test modal
    const modal = document.getElementById('imageModal');
    console.log(`🖼️ Modal element found: ${modal ? 'Yes' : 'No'}`);
    
    // Test navigation
    const galleryNav = document.querySelector('a[href="#gallery"]');
    console.log(`🧭 Gallery navigation link found: ${galleryNav ? 'Yes' : 'No'}`);
    
    console.log('✨ Gallery test completed!');
});
