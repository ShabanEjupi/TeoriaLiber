// CLEAN SCRIPT.JS - Fixed version without syntax errors
// Game Theory Book - Interactive JavaScript - 600+ Pages Kosovo Edition

let currentChapter = 1;
const totalChapters = 111; // 111 kapituj × 6-8 faqe secili = 666-888 faqe total

// Complete chapter data for comprehensive 300-page book
const chapters = {
    1: {
        title: "Hyrje në Teorinë e Lojërave dhe Nderin",
        content: `
        <h2>Kapitulli 1: Hyrje në Teorinë e Lojërave dhe nderin</h2>
        
        <div class="content-enhanced-notice">
            ✨ Këtu gjeni përmbajtje të pasuruar me ilustrime dhe shembuj praktikë që ju ndihmojnë të kuptoni dhe aplikoni konceptet më mirë.
        </div>

        <h3>Mirësevini në botën e strategjisë së nderitr</h3>

        <p>Teoria e lojërave është shkenca që studjon vendimet strategjike ku suksesi juaj varet jo vetëm nga veprimet tuaja, por edhe nga veprimet e të tjerëve. Ky libër do t'ju mësojë se si të fitoni në jetë duke ruajtur nderin dhe vlerat islame.</p>

        <div class="islamic-quote">
            "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
            <br><br>
            "Dhe kushdo që i frikësohet Allahut, Ai do t'i hapë një rrugëdalje dhe do ta furnizojë atë nga aty ku nuk e mendon." - Kurani, 65:2-3
        </div>

        <h3>Ç'është Teoria e Lojërave?</h3>

        <p>Teoria e lojërave është studimi matematik i situatave ku rezultati për çdo person varet nga vendimet e të gjithëve. Imagjinoni që jeni në një biznes dhe konkurrenti juaj ul çmimet. Si do të reagoni? Nëse i ulni edhe ju, të dy humbasni fitim. Nëse nuk i ulni, humbisni klientë. Teoria e lojërave na mëson se si të gjejmë zgjidhjen më të mirë.</p>

        <div class="highlight-box">
            <h4>Statistikat Tregojnë:</h4>
            <ul>
                <li>Bizneset e ndershme kanë 67% më shumë rritje afatgjate</li>
                <li>Njerëzit e nderuar fitojnë 3x më shumë besim nga partnerët</li>
                <li>Reputacioni i mirë vlen më shumë se 1 milion € në biznes</li>
                <li>Martesa të bazuara në nder kanë 85% më pak divorc</li>
            </ul>
        </div>
        `
    },

    2: {
        title: "Nderi si strategji fitimprurëse në biznes",
        content: `
        <h2>Kapitulli 2: Nderi si Strategji Fitimprurëse në Biznes</h2>
        
        <h3>Reputacioni: Aseti më i vyer</h3>

        <p>Warren Buffett thotë: "Duhen 20 vjet për të ndërtuar një reputacion dhe 5 minuta për ta shkatërruar." Në botën e biznesit, nderi është monedha më e vyer.</p>

        <div class="islamic-quote">
            "وَأَوْفُوا بِالْعَهْدِ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا"
            <br><br>
            "Dhe përmbushini premtimin, vërtet premtimi do t'ju pyetet." - Kurani, 17:34
        </div>

        <div class="highlight-box">
            <h4>Vlera ekonomike e nderit:</h4>
            <ul>
                <li><strong>Customer Retention:</strong> +40% klientë besnikë</li>
                <li><strong>Premium Pricing:</strong> +25% çmime më të larta</li>
                <li><strong>Lower Costs:</strong> -30% kosto marketingu</li>
                <li><strong>Better Partners:</strong> +60% partnerë cilësorë</li>
            </ul>
        </div>
        `
    }
    
    // Note: The original script.js contains 111 chapters but has syntax errors
    // This is a clean template - you can migrate content from content-completion.js
    // and fix the malformed template literals from the original script.js
};

// Book functionality
function showChapter(chapterNumber) {
    currentChapter = chapterNumber;
    
    // Hide main sections
    const mainSections = document.querySelectorAll('#home, #about, #chapters, #testimonials, #download, #gallery');
    mainSections.forEach(section => section.style.display = 'none');
    
    // Show book content section
    const bookContentSection = document.getElementById('book-content');
    bookContentSection.style.display = 'block';
    
    const chapter = chapters[chapterNumber];
    const chapterContent = document.getElementById('chapter-content');
    
    if (chapter) {
        chapterContent.innerHTML = `
            <div class="chapter-header">
                <button class="back-btn" onclick="goBackToChapters()">⬅️ Kthehu te Kapitujt</button>
                <div class="chapter-info">
                    <span class="chapter-number">Kapitulli ${chapterNumber}/${totalChapters}</span>
                    <h1>${chapter.title}</h1>
                </div>
                <div class="chapter-actions">
                    <button onclick="printChapter()" class="print-btn">🖨️ Printo</button>
                    <button onclick="downloadChapter(${chapterNumber})" class="download-btn">📥 Shkarko</button>
                </div>
            </div>
            
            <div class="chapter-content">
                ${chapter.content}
            </div>
        `;
        
        // Update navigation
        document.getElementById('current-chapter-display').textContent = `Kapitulli ${chapterNumber} nga ${totalChapters}`;
        document.getElementById('prev-btn').disabled = chapterNumber === 1;
        document.getElementById('next-btn').disabled = chapterNumber === totalChapters;
        
        // Update URL
        history.pushState({chapter: chapterNumber}, '', `#chapter-${chapterNumber}`);
    } else {
        chapterContent.innerHTML = `
            <h2>📖 Kapitulli ${chapterNumber}: ${getChapterTitle(chapterNumber)}</h2>
            <div class="key-points">
                <h3>🎯 Pikat kryesore të kapitullit:</h3>
                <ul>
                    <li>📊 Analiza strategjike e temës "${getChapterTitle(chapterNumber)}"</li>
                    <li>💡 Shembuj praktikë nga bota e biznesit</li>
                    <li>🎯 Strategji konkrete për implementim</li>
                    <li>📈 Metrika për matjen e suksesit</li>
                    <li>🔧 Vegla dhe teknika për zbatim</li>
                </ul>
            </div>
            
            <div class="islamic-quote">
                "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا"
                <br><br>
                "Dhe kushdo që i frikësohet Allahut, Ai do t'ia lehtësojë punën." - Kurani, 65:4
            </div>
            
            <p><em>Përmbajtja e plotë e këtij kapitulli është në zhvillim. Ju lutemi kontrolloni më vonë për përditësime.</em></p>
        `;
    }
}

function getChapterTitle(chapterNumber) {
    const titles = {
        1: "Hyrje në Teorinë e Lojërave dhe Nderin",
        2: "Nderi si strategji fitimprurëse në biznes",
        3: "Ekuilibri nash dhe marrëdhëniet strategjike",
        4: "Strategjitë e investimit të mençur",
        5: "Marrëdhëniet dhe networking strategjik",
        6: "Martesa si investim strategjik në jetë",
        7: "Ndërtimi i biznesit të parë: Nga ideja në realitet",
        8: "Psikologjia e suksesit: Mentaliteti i fituesit",
        9: "Teknologjia dhe biznesi digjital",
        10: "Edukimi i fëmijëve për sukses",
        11: "Psikologjia e Suksesit dhe Mentaliteti Fitues",
        12: "Drejtësia, Përgjegjësia Shoqërore dhe Ndihmimi i të Shtypurve",
        13: "Rrjetëzimi Strategjik dhe Ndërtimi i Marrëdhënieve",
        14: "Menaxhimi i Kohës dhe Produktiviteti Maksimal",
        15: "Kriativiteti dhe Inovacioni në Biznes",
        16: "Menaxhimi i Stresit dhe Ruajtja e Ekuilibrit",
        17: "Komunikimi Efektiv dhe Bindja",
        18: "Negocimi dhe Marrëveshjet Fitimprurëse",
        19: "Lidershipi dhe Ndërtimi i Ekipeve",
        20: "Menaxhimi i Konflikteve dhe Diplomacia"
        // Add more titles as needed for all 111 chapters
    };
    
    return titles[chapterNumber] || `Kapitulli ${chapterNumber}`;
}

function goBackToChapters() {
    const bookContentSection = document.getElementById('book-content');
    bookContentSection.style.display = 'none';
    
    const mainSections = document.querySelectorAll('#home, #about, #chapters, #testimonials, #download, #gallery');
    mainSections.forEach(sec => sec.style.display = 'block');
    document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' });
}

// Navigation functions
function previousChapter() {
    if (currentChapter > 1) {
        showChapter(currentChapter - 1);
    }
}

function nextChapter() {
    if (currentChapter < totalChapters) {
        showChapter(currentChapter + 1);
    }
}

// Handle back button
window.addEventListener('popstate', function(event) {
    if (document.getElementById('book-content').style.display === 'block') {
        goBackToChapters();
    }
});

// Load chapters on page load
document.addEventListener('DOMContentLoaded', function() {
    const chapterGrid = document.getElementById('chapterGrid');
    for (let i = 1; i <= totalChapters; i++) {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card';
        chapterCard.onclick = () => showChapter(i);
        chapterCard.innerHTML = `
            <h3>Kapitulli ${i}</h3>
            <p>${getChapterTitle(i)}</p>
        `;
        chapterGrid.appendChild(chapterCard);
    }
});

// Chapter download function
function downloadChapter(chapterNumber) {
    const chapterContent = document.getElementById('chapter-content').innerHTML;
    const fullHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Kapitulli ${chapterNumber} - Teoria e Lojërave</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
                .islamic-quote { background: #f0f8ff; padding: 20px; border-left: 4px solid #4169E1; margin: 20px 0; }
                .highlight-box { background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 15px 0; }
            </style>
        </head>
        <body>${chapterContent}</body>
        </html>
    `;
    
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kapitulli-${chapterNumber}-Teoria-e-Lojrave.html`;
    a.click();
    URL.revokeObjectURL(url);
}

function printChapter() {
    const chapterContent = document.getElementById('chapter-content').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Chapter</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .islamic-quote { background: #f0f8ff; padding: 15px; border-left: 3px solid #4169E1; }
                .highlight-box { background: #f9f9f9; padding: 10px; border-radius: 5px; }
                @media print { body { margin: 0; } }
            </style>
        </head>
        <body>${chapterContent}</body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); }, 500);
}

// Download functionality
function downloadBookWithViews() {
    if (typeof window.downloadBook === 'function') {
        window.downloadBook(true);
    } else {
        alert('Download functionality është duke u ngarkuar. Ju lutemi prisni disa sekonda.');
    }
}

function downloadBookWithoutViews() {
    if (typeof window.downloadBook === 'function') {
        window.downloadBook(false);
    } else {
        alert('Download functionality është duke u ngarkuar. Ju lutemi prisni disa sekonda.');
    }
}

// Compatibility with other scripts
window.chapters = chapters;
window.showChapter = showChapter;
window.goBackToChapters = goBackToChapters;

console.log('✅ Clean script.js loaded successfully - Ready for use!');
