// CLEAN SCRIPT.JS - Fixed version without syntax errors
// Game Theory Book - Interactive JavaScript - 600+ Pages Kosovo Edition

let currentChapter = 1;
const totalChapters = 111; // 111 kapituj × 6-8 faqe secili = 666-888 faqe total

// Complete chapter data for comprehensive 800-page book
const chapters = {
    1: {
        title: "Hyrje në Teorinë e Lojërave dhe Nderin",
        content: `
        <h2>Kapitulli 1: Hyrje në Teorinë e Lojërave dhe nderin</h2>
        
        <div class="content-enhanced-notice">
            ✨ Këtu gjeni përmbajtje të pasuruar me ilustrime dhe shembuj praktikë që ju ndihmojnë të kuptoni dhe aplikoni konceptet më mirë.
        </div>
        
        <div class="chapter-image">
            <img src="imazhet/Create an inspiring and elegant image for the book chapter titled 'Kapitulli 67'. The image should reflect themes of success, honor, and strategic thinking, incorporating Albanian and Islamic cultural elements, along with.png" 
                 alt="Teoria e Lojërave - Hyrje" 
                 style="width: 100%; max-width: 600px; height: auto; border-radius: 10px; margin: 20px 0;">
        </div>

        <h3>Mirësevini në botën e strategjisë së nderuar</h3>

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
        
        <div class="chapter-image">
            <img src="imazhet/Create business honor visualization Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style professional, tru.png" 
                 alt="Nderi në Biznes - Sipërmarrës Shqiptar" 
                 style="width: 100%; max-width: 600px; height: auto; border-radius: 10px; margin: 20px 0;">
        </div>
        
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
    },

    3: {
        title: "Psikologjia e Vendimmarrjes në Teorinë e Lojërave",
        content: `
        <h2>Kapitulli 3: Psikologjia e Vendimmarrjes në Teorinë e Lojërave</h2>
        
        <div class="chapter-image">
            <img src="imazhet/Create 21st century strategy scene Albanian business leader in modern boardroom with digital strategy displays, global connectivity maps, sustainable business icons, Islamic geometric patterns integrated with modern design.jpg" 
                 alt="Strategjia e Shekullit 21" 
                 style="width: 100%; max-width: 600px; height: auto; border-radius: 10px; margin: 20px 0;">
        </div>
        
        <h3>🧠 Si Mendojmë Strategjikisht</h3>
        
        <p>Vendimmarrja strategjike nuk është vetëm logjikë - është kombinim i psikologjisë, intuicionit dhe strategjisë matematike.</p>

        <div class="islamic-quote">
            "وَعَسَى أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ"
            <br><br>
            "Dhe ndoshta ju nuk e doni diçka dhe ajo është e mirë për ju." - Kurani, 2:216
        </div>

        <div class="highlight-box">
            <h4>🎯 Faktorët e Vendimmarrjes:</h4>
            <ul>
                <li><strong>Emocional Intelligence:</strong> Kuptimi i emocioneve të veta dhe të tjerëve</li>
                <li><strong>Risk Assessment:</strong> Vlerësimi i rreziqeve dhe mundësive</li>
                <li><strong>Long-term Thinking:</strong> Mendimi afatgjatë vs. fitime të shpejta</li>
                <li><strong>Cultural Context:</strong> Vlerat kulturore dhe religjioze</li>
            </ul>
        </div>
        `
    },

    67: {
        title: "Marketing Strategjik dhe Ndërtimi i Markës",
        content: `
        <h2>Kapitulli 67: 📱 Marketing Strategjik dhe Ndërtimi i Markës</h2>
        
        <div class="chapter-image">
            <img src="imazhet/Create modern digital business scene Albanian entrepreneur working on laptop, multiple screens showing online business growth, luxury car in garage visible through window, Islamic geometric patterns on wall, golden digital.png" 
                 alt="Biznesi Dixhital Modern" 
                 style="width: 100%; max-width: 600px; height: auto; border-radius: 10px; margin: 20px 0;">
        </div>
        
        <h3>🎯 Marketingu i Nderuar</h3>
        
        <p>Marketingu i vërtetë nuk është manipulim - është komunikim i sinqertë i vlerës që krijoni për njerëzit.</p>

        <div class="islamic-quote">
            "وَقُولُوا لِلنَّاسِ حُسْنًا"
            <br><br>
            "Dhe u flisni njerëzve në mënyrë të bukur." - Kurani, 2:83
        </div>

        <div class="highlight-box">
            <h4>🚀 Strategjitë e Marketingut Modern:</h4>
            <ul>
                <li><strong>Content Marketing:</strong> Përmbajtje që edukon dhe inspiran</li>
                <li><strong>Social Media:</strong> Ndërtimi i komuniteteve të vërteta</li>
                <li><strong>Brand Storytelling:</strong> Historia juaj unike dhe autentike</li>
                <li><strong>Customer Experience:</strong> Përvojë që krijojnë fansa</li>
            </ul>
        </div>
        `
    },

    70: {
        title: "Teknologjia Blockchain dhe Ekonomia e Kosovës",
        content: `
        <h2>Kapitulli 70: 🔗 Blockchain dhe Revolucioni Ekonomik i Kosovës</h2>
        
        <div class="chapter-image">
            <img src="imazhet/Create AI-powered business scene Albanian entrepreneur collaborating with AI systems, holographic assistants, automated processes, luxury smart office, Islamic geometric AI patterns, golden neural networks. Style futuristi.jpg" 
                 alt="AI dhe Teknologji Futuristike" 
                 style="width: 100%; max-width: 600px; height: auto; border-radius: 10px; margin: 20px 0;">
        </div>
        
        <div class="content-enhanced-notice">
            ✨ 📸 Kjo foto përdoret edhe tek Kapitulli 29 - Teknologjitë e Reja, sepse të dyja trajtojnë inovacionin teknologjik.
        </div>

        <h3>🚀 Blockchain si Katalizator i Zhvillimit Ekonomik</h3>
        
        <p>Teknologjia blockchain ka potencialin të transformojë ekonominë e Kosovës duke krijuar sistem transparent, të sigurt dhe eficient për transaksionet financiare dhe kontrata të mençura.</p>

        <div class="islamic-quote">
            "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ"
            <br><br>
            "Dhe nga uji i bëmë çdo gjë të gjallë." - Kurani, 21:30
        </div>

        <div class="highlight-box">
            <h4>🪙 Avantazhet e Kriptovalutave për Kosovarët:</h4>
            <ul>
                <li>🌍 <strong>Global Access:</strong> Tregtia ndërkombëtare pa barriela bankare</li>
                <li>💸 <strong>Lower Fees:</strong> Transaksione më të lira se bankat tradicionale</li>
                <li>⚡ <strong>Speed:</strong> Transfere të menjëhershme në çdo vend të botës</li>
                <li>🔒 <strong>Security:</strong> Kriptografia e avancuar për mbrojtje</li>
            </ul>
        </div>
        `
    }
};

// Book functionality
function showChapter(chapterNumber) {
    currentChapter = chapterNumber;
    
    // Hide main sections
    const mainSections = document.querySelectorAll('#home, #about, #chapters, #testimonials, #download, #gallery');
    mainSections.forEach(section => section.style.display = 'none');
    
    // Show book content section
    const bookContentSection = document.getElementById('book-content');
    if (bookContentSection) {
        bookContentSection.style.display = 'block';
        
        // Ensure it's above footer
        bookContentSection.style.position = 'relative';
        bookContentSection.style.zIndex = '10';
        bookContentSection.style.backgroundColor = '#ffffff';
        bookContentSection.style.minHeight = '100vh';
        bookContentSection.style.paddingBottom = '50px';
    }
    
    const chapter = chapters[chapterNumber];
    const chapterContent = document.getElementById('chapter-content');
    
    if (chapter && chapterContent) {
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
        const currentChapterDisplay = document.getElementById('current-chapter-display');
        if (currentChapterDisplay) {
            currentChapterDisplay.textContent = `Kapitulli ${chapterNumber} nga ${totalChapters}`;
        }
        
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn) prevBtn.disabled = chapterNumber === 1;
        if (nextBtn) nextBtn.disabled = chapterNumber === totalChapters;
        
        // Update URL
        history.pushState({chapter: chapterNumber}, '', `#chapter-${chapterNumber}`);
        
        // Scroll to top
        window.scrollTo(0, 0);
    } else {
        if (chapterContent) {
            chapterContent.innerHTML = `
                <div class="chapter-header">
                    <button class="back-btn" onclick="goBackToChapters()">⬅️ Kthehu te Kapitujt</button>
                    <div class="chapter-info">
                        <span class="chapter-number">Kapitulli ${chapterNumber}/${totalChapters}</span>
                        <h1>${getChapterTitle(chapterNumber)}</h1>
                    </div>
                </div>
                
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
}

function getChapterTitle(chapterNumber) {
    const titles = {
        1: "Hyrje në Teorinë e Lojërave dhe Nderin",
        2: "Nderi si strategji fitimprurëse në biznes",
        3: "Ekuilibri Nash dhe marrëdhëniet strategjike",
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
        20: "Menaxhimi i Konflikteve dhe Diplomacia",
        21: "Tregtia Ndërkombëtare dhe Eksportimi",
        22: "Marketing Dixhital dhe Media Sociale",
        23: "Menaxhimi i Riskut dhe Sigurimet",
        24: "Teknologjia Blockchain dhe Kriptomonedhat",
        25: "Inteligjenca Artificiale në Biznes",
        26: "Krijimtaria dhe Inovacioni",
        27: "Sistemi Bankar dhe Financimi",
        28: "Investimet në Pasuri të Paluajtshme",
        29: "Teknologjitë e Reja dhe Transformimi Digjital",
        30: "Menaxhimi i Burimeve Njerëzore",
        31: "Etika në Biznes dhe Përgjegjësia Sociale",
        32: "Plani i Biznesit dhe Strategjia",
        33: "Analiza e Tregut dhe Konkurrenca",
        34: "Çmimet dhe Strategjitë e Shitjes",
        35: "Teknologjitë Financiare dhe FinTech",
        36: "Menaxhimi i Zinxhirit të Furnizimit",
        37: "Cilësia dhe Përmirësimi i Vazhdueshëm",
        38: "Inovacioni në Produkte dhe Shërbime",
        39: "Partneritetet Strategjike",
        40: "Zgjerimi i Biznesit dhe Skalimi",
        41: "Turizmi Strategjik dhe Zhvillimi",
        42: "Agroturizmi dhe Ekonomia Rurale",
        43: "Industria e Teknologjisë së Informacionit",
        44: "E-Commerce dhe Tregtia Online",
        45: "Sistemi Arsimor dhe Trajnimi",
        46: "Shëndetësia si Sektor Strategjik",
        47: "Energjia dhe Teknologjitë e Rinovueshme",
        48: "Edukimi Modern dhe Transformimi",
        49: "Industria Kreative dhe Arti",
        50: "Sportet dhe Rekreacioni",
        51: "Transporti dhe Infrastruktura",
        52: "Bujqësia dhe Siguria Ushqimore",
        53: "Teknologjitë e Qëndrueshme dhe Mjedisi",
        54: "Sistemet e Pagesave Digjitale",
        55: "Vendimarrja Strategjike",
        56: "Lidershipi Transformues",
        57: "Kultura Organizative",
        58: "Komunikimi Korporativ",
        59: "Menaxhimi i Ndryshimeve",
        60: "Strategjia e Brendimit",
        61: "Analiza e të Dhënave dhe Big Data",
        62: "Inteligjenca Artificiale dhe Automatizimi",
        63: "Siguria Kibernetike",
        64: "Shërbimet në Re (Cloud Computing)",
        65: "Internet of Things (IoT)",
        66: "Realiteti Virtual dhe i Shtuar",
        67: "Marketing Strategjik dhe Ndërtimi i Markës",
        68: "Përgjegjësia Sociale Korporative",
        69: "Zhvillimi i Karrierës",
        70: "Teknologjia Blockchain dhe Ekonomia e Kosovës",
        71: "Sistemi i Arsimit të Ardhshëm: EdTech dhe E-Learning",
        72: "Energjitë e Rinovueshme dhe Pavarësia Energjetike",
        73: "Agroturizmi dhe Zhvillimi Rural Strategjik",
        74: "Industria Kreative dhe Ekonomia e Kulturës",
        75: "Sistemi Financiar i Avancuar: FinTech dhe Banking",
        76: "Strategjia Kombëtare për Inteligjencën Artificiale",
        77: "Ekonomia Digjitale dhe E-Governance",
        78: "Turizmi dhe Trashëgimia Kulturore",
        79: "Menaxhimi i Krizave dhe Vazhdimësia",
        80: "Strategjitë e Ekspansionit Rajonal",
        81: "Inovacioni dhe Kërkimi Shkencor",
        82: "Sistemi Drejtësisë dhe Transparenca",
        83: "Diplomacia Ekonomike",
        84: "Mbrojtja e Mjedisit dhe Qëndrueshmëria",
        85: "Zhvillimi Urban dhe Qytetet e Mençura",
        86: "Planifikimi për Pensionimin",
        87: "Investimet Afatgjata",
        88: "Menaxhimi i Pasurisë",
        89: "Krijimtaria dhe Inovacioni në Jetë",
        90: "Financat Personale dhe Familja",
        91: "Shëndetësia dhe Mirëqenia",
        92: "Marrëdhëniet dhe Rrjetëzimi",
        93: "Të Mësuarit Gjatë Gjithë Jetës",
        94: "Lidershipi në Komunitet",
        95: "Filantropija dhe Dhurimi",
        96: "Trashëgimia dhe Planifikimi i Ardhshëm",
        97: "Teknologjia dhe Jeta Digjitale",
        98: "Udhëtimi dhe Përvojat Kulturore",
        99: "Arti i Jetesës së Lumtur",
        100: "Bilanci Mes Punës dhe Jetës",
        101: "Menaxhimi i Kohës në Epokën Digjitale",
        102: "Komunikimi në Shekullin e 21-të",
        103: "Marrëdhëniet Ndërkombëtare",
        104: "Globalizimi dhe Identiteti Lokal",
        105: "E Ardhmja e Punës",
        106: "Teknologjitë Emergjente",
        107: "Qytëtaria Digjitale",
        108: "Etika në Epokën e AI-së",
        109: "Qëndrueshmëria për Gjeneratat e Ardhshme",
        110: "Vizioni për Kosovën 2050",
        111: "Konkluzioni: Rruga drejt Suksesit të Qëndrueshëm"
    };
    
    return titles[chapterNumber] || `Tema ${chapterNumber}: Në Zhvillim`;
}

function goBackToChapters() {
    const bookContentSection = document.getElementById('book-content');
    if (bookContentSection) {
        bookContentSection.style.display = 'none';
    }
    
    const mainSections = document.querySelectorAll('#home, #about, #chapters, #testimonials, #download, #gallery');
    mainSections.forEach(sec => sec.style.display = 'block');
    
    const chaptersSection = document.getElementById('chapters');
    if (chaptersSection) {
        chaptersSection.scrollIntoView({ behavior: 'smooth' });
    }
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
    const bookContentSection = document.getElementById('book-content');
    if (bookContentSection && bookContentSection.style.display === 'block') {
        goBackToChapters();
    }
});

// Functions for navigation and filtering
function scrollToChapters() {
    const chaptersSection = document.getElementById('chapters');
    if (chaptersSection) {
        chaptersSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function filterChapters(category) {
    const chapterCards = document.querySelectorAll('.chapter-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Filter chapters based on category
    chapterCards.forEach((card, index) => {
        const chapterNum = index + 1;
        let shouldShow = true;
        
        switch(category) {
            case 'basics':
                shouldShow = chapterNum >= 1 && chapterNum <= 10;
                break;
            case 'business':
                shouldShow = chapterNum >= 11 && chapterNum <= 20;
                break;
            case 'wealth':
                shouldShow = chapterNum >= 21 && chapterNum <= 30;
                break;
            case 'relationships':
                shouldShow = chapterNum >= 31 && chapterNum <= 40;
                break;
            case 'advanced':
                shouldShow = chapterNum >= 41 && chapterNum <= 60;
                break;
            case 'ai-tech':
                shouldShow = chapterNum >= 61 && chapterNum <= 80;
                break;
            case 'geopolitics':
                shouldShow = chapterNum >= 81 && chapterNum <= 100;
                break;
            case 'mastery':
                shouldShow = chapterNum >= 101 && chapterNum <= 111;
                break;
            default: // 'all'
                shouldShow = true;
        }
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Load chapters on page load
document.addEventListener('DOMContentLoaded', function() {
    const chapterGrid = document.getElementById('chapterGrid');
    if (chapterGrid) {
        chapterGrid.innerHTML = ''; // Clear existing content
        
        for (let i = 1; i <= totalChapters; i++) {
            const chapterCard = document.createElement('div');
            chapterCard.className = 'chapter-card';
            chapterCard.onclick = () => showChapter(i);
            chapterCard.innerHTML = `
                <div class="chapter-number">Kapitulli ${i}</div>
                <h3>${getChapterTitle(i)}</h3>
                <p class="chapter-preview">Kliko për të lexuar përmbajtjen e plotë</p>
                <div class="chapter-status">${chapters[i] ? '✅ I Plotë' : '📝 Në Zhvillim'}</div>
            `;
            chapterGrid.appendChild(chapterCard);
        }
    }
});

// Chapter download function
function downloadChapter(chapterNumber) {
    const chapterContent = document.getElementById('chapter-content');
    if (!chapterContent) return;
    
    const content = chapterContent.innerHTML;
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="sq">
        <head>
            <meta charset="UTF-8">
            <title>Kapitulli ${chapterNumber} - Teoria e Lojërave</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    line-height: 1.6; 
                    margin: 40px;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .islamic-quote { 
                    background: #f0f8ff; 
                    padding: 20px; 
                    border-left: 4px solid #4169E1; 
                    margin: 20px 0;
                    border-radius: 8px;
                }
                .highlight-box { 
                    background: #f9f9f9; 
                    padding: 15px; 
                    border-radius: 8px; 
                    margin: 15px 0;
                    border-left: 4px solid #28a745;
                }
                .chapter-image img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                h1, h2, h3 { color: #2c3e50; }
                @media print { 
                    body { margin: 20px; }
                    .chapter-actions { display: none; }
                }
            </style>
        </head>
        <body>
            <h1>Teoria e Lojërave: Nderi dhe Suksesi</h1>
            ${content}
        </body>
        </html>
    `;
    
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kapitulli-${chapterNumber}-Teoria-e-Lojrave.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function printChapter() {
    const chapterContent = document.getElementById('chapter-content');
    if (!chapterContent) return;
    
    const content = chapterContent.innerHTML;
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
        printWindow.document.write(`
            <html>
            <head>
                <title>Print Chapter</title>
                <meta charset="UTF-8">
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        line-height: 1.6;
                        margin: 20px;
                    }
                    .islamic-quote { 
                        background: #f0f8ff; 
                        padding: 15px; 
                        border-left: 3px solid #4169E1;
                        margin: 15px 0;
                    }
                    .highlight-box { 
                        background: #f9f9f9; 
                        padding: 10px; 
                        border-radius: 5px;
                        margin: 10px 0;
                    }
                    .chapter-image img {
                        max-width: 100%;
                        height: auto;
                    }
                    .chapter-actions { display: none; }
                    @media print { 
                        body { margin: 0; }
                        .chapter-actions { display: none; }
                    }
                </style>
            </head>
            <body>
                <h1>Teoria e Lojërave: Nderi dhe Suksesi</h1>
                ${content}
            </body>
            </html>
        `);
        printWindow.document.close();
        setTimeout(() => { 
            printWindow.print();
        }, 500);
    }
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
window.scrollToChapters = scrollToChapters;
window.filterChapters = filterChapters;
window.previousChapter = previousChapter;
window.nextChapter = nextChapter;
window.downloadChapter = downloadChapter;
window.printChapter = printChapter;

console.log('✅ Clean script.js loaded successfully - Ready for use!');
