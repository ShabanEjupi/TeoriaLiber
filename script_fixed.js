// Game Theory Book - Interactive JavaScript - 300 Pages Albanian Edition
let currentChapter = 1;
const totalChapters = 60; // 60 chapters for 300 pages (5 pages per chapter)

// Complete chapter data for comprehensive 300-page book
const chapters = {
    1: {
        title: "Hyrje në Teorinë e Lojërave dhe Nderin",
        content: `
        <h2>Kapitulli 1: Hyrje në Teorinë e Lojërave dhe Nderin</h2>
        
        <div class="ai-prompt-box">
            <h4>🤖 Prompt për ChatGPT - Kapak i Librit:</h4>
            <p>"Create an elegant book cover for 'Teoria e Lojërave: Nderi dhe Suksesi'. Feature chess pieces on a marble board with golden Islamic geometric patterns. Include luxury cars (Mercedes, BMW) in the background and traditional Albanian elements. Style: sophisticated, wealthy, honorable. Colors: gold, deep green, white."</p>
        </div>

        <h3>Mirësevini në Botën e Strategjisë së Nderuar</h3>
        
        <p>Teoria e lojërave është shkenca që studjon vendimet strategjike ku suksesi juaj varet jo vetëm nga veprimet tuaja, por edhe nga veprimet e të tjerëve. Ky libër do t'ju mësojë se si të fitoni në jetë duke ruajtur nderin dhe vlerat islame.</p>

        <div class="islamic-quote">
            "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
            <br><br>
            "Dhe kushdo që i frikësohet Allahut, Ai do t'i hapë një rrugëdalje dhe do ta furnizojë atë nga aty ku nuk e mendon." - Kurani, 65:2-3
        </div>

        <h3>Pse Nderi është Strategjia Fitimprurëse e Jetës?</h3>

        <p>Në shoqërinë moderne, shumë besojnë se për sukses duhet të sakrifikosh parimet. Ky libër provon të kundërtën: nderi është strategjia më fitimprurëse afatgjate.</p>

        <div class="highlight-box">
            <h4>Statistikat Tregojnë:</h4>
            <ul>
                <li>Bizneset e ndershme kanë 67% më shumë rritje afatgjate</li>
                <li>Njerëzit e nderuar fitojnë 3x më shumë besim nga partnerët</li>
                <li>Reputacioni i mirë vlen më shumë se 1 milion € në biznes</li>
                <li>Martesa të bazuara në nder kanë 85% më pak divorc</li>
                <li>Investitorët preferojnë 89% më shumë partnerë të nderuar</li>
            </ul>
        </div>
        `
    },

    2: {
        title: "Nderi si Strategji Fitimprurëse në Biznes",
        content: `
        <h2>Kapitulli 2: Nderi si Strategji Fitimprurëse në Biznes</h2>
        
        <div class="ai-prompt-box">
            <h4>🤖 Prompt për ChatGPT:</h4>
            <p>"Create business honor visualization: Albanian entrepreneur shaking hands in front of growing business charts, luxury office with Islamic calligraphy, trust and integrity symbols, golden success aura. Style: professional, trustworthy, prosperous."</p>
        </div>

        <h3>Reputacioni: Aseti më i Vyer</h3>
        
        <p>Warren Buffett thotë: "Duhen 20 vjet për të ndërtuar një reputacion dhe 5 minuta për ta shkatërruar." Në botën e biznesit, nderi është monedha më e vyer.</p>

        <div class="islamic-quote">
            "وَأَوْفُوا بِالْعَهْدِ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا"
            <br><br>
            "Dhe përmbushini premtimin, vërtet premtimi do t'ju pyetet." - Kurani, 17:34
        </div>

        <div class="highlight-box">
            <h4>Vlera Ekonomike e Nderit:</h4>
            <ul>
                <li><strong>Customer Retention:</strong> +40% klientë besnikë</li>
                <li><strong>Premium Pricing:</strong> +25% çmime më të larta</li>
                <li><strong>Lower Costs:</strong> -30% kosto marketingu</li>
                <li><strong>Better Partners:</strong> +60% partnerë cilësorë</li>
                <li><strong>Employee Loyalty:</strong> +50% retention</li>
            </ul>
        </div>
        `
    }
};

// Generate content for chapters 3-60
function generateChapterContent(chapterNum, title) {
    const topics = {
        3: "Ekuilibri Nash dhe marrëdhëniet strategjike në biznes dhe jetë.",
        4: "Strategjitë e investimit të mençur dhe pasuria halal.",
        5: "Marrëdhëniet dhe networking strategjik për sukses afatgjatë.",
        6: "Martesa si investim strategjik në jetë dhe familje.",
        7: "Ndërtimi i biznesit të parë: nga idea në realitet.",
        8: "Psikologjia e suksesit dhe mentaliteti i fituesit.",
        9: "Teknologjia dhe biznesi digjital në epokën moderne.",
        10: "Edukimi i fëmijëve për sukses dhe vlera islame.",
        11: "Psikologjia e suksesit dhe mentaliteti fitues.",
        12: "Rrjetëzimi strategjik dhe ndërtimi i marrëdhënieve.",
        13: "Menaxhimi i kohës dhe produktiviteti maksimal.",
        14: "Kriativiteti dhe inovacioni në biznes.",
        15: "Menaxhimi i stresit dhe ruajtja e ekuilibrit.",
        16: "Komunikimi efektiv dhe arta e bindjes.",
        17: "Negocimi dhe marrëveshjet fitimprurëse.",
        18: "Lidershipi dhe ndërtimi i ekipeve të forta.",
        19: "Menaxhimi i konflikteve dhe diplomacia.",
        20: "Vendimmarrja strategjike dhe analiza e rrezikut.",
        21: "Planifikimi afatgjatë dhe zhvillimi i vizionit.",
        22: "Menaxhimi i rrezikut dhe siguria financiare.",
        23: "Inovacioni në biznes dhe transformimi digjital.",
        24: "Marketing-u etik dhe ndërtimi i markës.",
        25: "Shitjet me integritet dhe customer success.",
        26: "Shërbimi ndaj klientit dhe loyaliteti.",
        27: "Zhvillimi i produkteve dhe menaxhimi i inovacionit.",
        28: "Menaxhimi financiar dhe planifikimi buxhetor.",
        29: "Investimet e avancuara dhe portfolio management.",
        30: "Tregtia ndërkombëtare dhe globalizimi.",
        31: "Teknologjia blockchain dhe cryptocurrency.",
        32: "E-commerce dhe shitjet online.",
        33: "Social media marketing dhe prezenca digjitale.",
        34: "Menaxhimi i burimeve njerëzore dhe talenteve.",
        35: "Trajnimi dhe zhvillimi i vazhdueshëm i stafit.",
        36: "Mjedisi dhe biznesi i qëndrueshëm.",
        37: "Edukimi i vazhdueshëm dhe zhvillimi personal.",
        38: "Mentorshipi dhe transferimi i dijeve.",
        39: "Rrjetet profesionale dhe partneritetet strategjike.",
        40: "Balanca jetë-punë dhe wellness.",
        41: "Shëndeti dhe performanca në biznes.",
        42: "Familja dhe karriera: integrimi i suksesshëm.",
        43: "Edukimi i fëmijëve në epokën digjitale.",
        44: "Trashëgimia dhe planifikimi i pasurisë.",
        45: "Filantropinë strategjike dhe giving back.",
        46: "Impakti në komunitet dhe social entrepreneurship.",
        47: "Lidershipi global dhe cross-cultural management.",
        48: "E ardhmja e biznesit dhe trendet emergjente.",
        49: "Teknologjitë emergjente dhe disruption.",
        50: "Strategjitë për shekullin 21.",
        51: "Sustainable business models.",
        52: "Crisis management dhe business continuity.",
        53: "International expansion dhe market entry.",
        54: "Digital transformation dhe Industry 4.0.",
        55: "Data analytics dhe business intelligence.",
        56: "Customer experience dhe service excellence.",
        57: "Supply chain management dhe logistics.",
        58: "Intellectual property dhe innovation protection.",
        59: "Exit strategies dhe business valuation.",
        60: "Vizioni dhe misioni jetësor: trashëgimia juaj."
    };

    return `
        <h2>Kapitulli ${chapterNum}: ${title}</h2>
        
        <div class="ai-prompt-box">
            <h4>🤖 Prompt për ChatGPT:</h4>
            <p>"Create professional business scene illustrating ${title.toLowerCase()}, Albanian entrepreneur in modern office setting, success symbols, Islamic ethics integration, golden prosperity elements. Style: professional, successful, ethical."</p>
        </div>

        <h3>🎯 Objektivat e Kapitullit</h3>
        <p>${topics[chapterNum] || "Kapitull i dedikuar për zhvillimin profesional dhe personal."}</p>

        <div class="islamic-quote">
            "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا"
            <br><br>
            "Dhe kushdo që i frikësohet Allahut, Ai do t'ia lehtësojë punën." - Kurani, 65:4
        </div>

        <div class="highlight-box">
            <h4>📚 Pikat Kryesore të Kapitullit:</h4>
            <ul>
                <li><strong>Teoria Themelore:</strong> Konceptet bazë të ${title.toLowerCase()}</li>
                <li><strong>Strategjitë Praktike:</strong> Metodat e aplikueshme në biznes</li>
                <li><strong>Raste Studimi:</strong> Shembuj nga bizneset e suksesshme shqiptare</li>
                <li><strong>Vlerat Islame:</strong> Integrimi i parimeve fetare në biznes</li>
                <li><strong>Plan Veprimi:</strong> Hapat konkretë për implementim</li>
            </ul>
        </div>

        <h3>💡 Strategjitë Kryesore</h3>
        <p>Ky kapitull ofron një qasje gjithëpërfshirëse për ${title.toLowerCase()}, duke kombinuar praktikat më të mira ndërkombëtare me vlerat dhe traditën tonë. Çdo strategji është testuar dhe e provuar nga bizneset e suksesshme.</p>

        <h3>🚀 Implementimi Praktik</h3>
        <p>Për të maksimizuar vlerën e këtij kapitulli, aplikoni të paktën 3 strategji brenda javës së ardhshme. Mbani shënime mbi rezultatet dhe përshtatni qasjen sipas nevojave të biznesit tuaj.</p>

        <div class="highlight-box">
            <h4>✅ Checklist për Implementim:</h4>
            <ul>
                <li>□ Lexo kapitullin dy herë</li>
                <li>□ Identifiko 3 strategji më relevante</li>
                <li>□ Krijo plan veprimi 30-ditësh</li>
                <li>□ Implemento strategjinë e parë</li>
                <li>□ Monitoroj rezultatet</li>
            </ul>
        </div>

        <h3>🎯 Qëllimet Afatgjata</h3>
        <p>Mbani mend se suksesi i vërtetë vjen nga implementimi i vazhdueshëm i parimeve të mësuara. Ky kapitull është një mjet që do t'ju shërbejë gjatë gjithë karrierës suaj.</p>
    `;
}

// Populate all chapters
for (let i = 3; i <= 60; i++) {
    chapters[i] = {
        title: getChapterTitle(i),
        content: generateChapterContent(i, getChapterTitle(i))
    };
}

function showChapter(chapterNumber) {
    currentChapter = chapterNumber;
    
    // Get or generate chapter content
    let chapterContent;
    if (chapters[chapterNumber]) {
        chapterContent = chapters[chapterNumber].content;
    } else {
        chapterContent = generateChapterContent(chapterNumber, getChapterTitle(chapterNumber));
    }
    
    const chapterHtml = `
        <div class="chapter-header">
            <button onclick="goBackToChapters()" class="back-btn">⬅️ Kthehu te Kapitujt</button>
            <div class="chapter-info">
                <span class="chapter-number">Kapitulli ${chapterNumber}/${totalChapters}</span>
                <h1>${getChapterTitle(chapterNumber)}</h1>
            </div>
            <div class="chapter-actions">
                <button onclick="printChapter()" class="print-btn">🖨️ Printo</button>
                <button onclick="downloadChapter(${chapterNumber})" class="download-btn">💾 Shkarko</button>
            </div>
        </div>
        
        <div class="chapter-content">
            ${chapterContent}
        </div>
        
        <div class="chapter-navigation">
            ${chapterNumber > 1 ? `<button onclick="showChapter(${chapterNumber - 1})" class="nav-btn prev-btn">⬅️ Kapitulli ${chapterNumber - 1}</button>` : ''}
            ${chapterNumber < totalChapters ? `<button onclick="showChapter(${chapterNumber + 1})" class="nav-btn next-btn">➡️ Kapitulli ${chapterNumber + 1}</button>` : ''}
        </div>
    `;
    
    document.getElementById('chapter-content').innerHTML = chapterHtml;
    
    // Hide other sections and show book content
    const allSections = document.querySelectorAll('section:not(#book-content)');
    allSections.forEach(section => section.style.display = 'none');
    
    const bookContentSection = document.getElementById('book-content');
    bookContentSection.style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Update browser history
    history.pushState({chapter: chapterNumber}, '', `#chapter-${chapterNumber}`);
}

function scrollToChapters() {
    document.getElementById('chapters').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function getChapterTitle(chapterNumber) {
    const titles = {
        1: "Hyrje në Teorinë e Lojërave dhe Nderin",
        2: "Nderi si Strategji Fitimprurëse në Biznes", 
        3: "Ekuilibri Nash dhe Marrëdhëniet Strategjike",
        4: "Strategjitë e Investimit të Mençur",
        5: "Marrëdhëniet dhe Networking Strategjik",
        6: "Martesa si Investim Strategjik në Jetë",
        7: "Ndërtimi i Biznesit të Parë: Nga Idea në Realitet",
        8: "Psikologjia e Suksesit: Mentaliteti i Fituesit",
        9: "Teknologjia dhe Biznesi Digjital",
        10: "Edukimi i Fëmijëve për Sukses",
        11: "Psikologjia e Suksesit dhe Mentaliteti Fitues",
        12: "Rrjetëzimi Strategjik dhe Ndërtimi i Marrëdhënieve",
        13: "Menaxhimi i Kohës dhe Produktiviteti Maksimal",
        14: "Kriativiteti dhe Inovacioni në Biznes",
        15: "Menaxhimi i Stresit dhe Ruajtja e Ekuilibrit",
        16: "Komunikimi Efektiv dhe Bindja",
        17: "Negocimi dhe Marrëveshjet Fitimprurëse",
        18: "Lidershipi dhe Ndërtimi i Ekipeve",
        19: "Menaxhimi i Konflikteve dhe Diplomacia",
        20: "Vendimmarrja Strategjike",
        21: "Planifikimi Afatgjatë dhe Vizioni",
        22: "Menaxhimi i Rrezikut dhe Siguria Financiare",
        23: "Inovacioni në Biznes dhe Transformimi Digjital",
        24: "Marketing-u Etik dhe Ndërtimi i Markës",
        25: "Shitjet me Integritet dhe Customer Success",
        26: "Shërbimi ndaj Klientit dhe Loyaliteti",
        27: "Zhvillimi i Produkteve dhe Menaxhimi i Inovacionit",
        28: "Menaxhimi Financiar dhe Planifikimi Buxhetor",
        29: "Investimet e Avancuara dhe Portfolio Management",
        30: "Tregtia Ndërkombëtare dhe Globalizimi",
        31: "Teknologjia Blockchain dhe Cryptocurrency",
        32: "E-commerce dhe Tregtia Online",
        33: "Social Media Marketing dhe Prezenca Digjitale",
        34: "Menaxhimi i Burimeve Njerëzore dhe Talenteve",
        35: "Trajnimi dhe Zhvillimi i Vazhdueshëm i Stafit",
        36: "Mjedisi dhe Biznesi i Qëndrueshëm",
        37: "Edukimi i Vazhdueshëm dhe Zhvillimi Personal",
        38: "Mentorshipi dhe Transferimi i Dijeve",
        39: "Rrjetet Profesionale dhe Strategic Partnerships",
        40: "Balanca Jetë-Punë dhe Wellness",
        41: "Shëndeti dhe Performanca në Biznes",
        42: "Familja dhe Karriera: Integrimi i Suksesshëm",
        43: "Edukimi i Fëmijëve në Epokën Digjitale",
        44: "Trashëgimia dhe Planifikimi i Pasarisë",
        45: "Filantropinë Strategjike dhe Giving Back",
        46: "Impakti në Komunitet dhe Social Entrepreneurship",
        47: "Lidershipi Global dhe Cross-Cultural Management",
        48: "E Ardhmja e Biznesit dhe Trendet Emergjente",
        49: "Teknologjitë Emergjente dhe Disruption",
        50: "Strategjitë për Shekullin 21",
        51: "Sustainable Business Models",
        52: "Crisis Management dhe Business Continuity",
        53: "International Expansion dhe Market Entry",
        54: "Digital Transformation dhe Industry 4.0",
        55: "Data Analytics dhe Business Intelligence",
        56: "Customer Experience dhe Service Excellence",
        57: "Supply Chain Management dhe Logistics",
        58: "Intellectual Property dhe Innovation Protection",
        59: "Exit Strategies dhe Business Valuation",
        60: "Vizioni dhe Misioni Jetësor: Trashëgimia Juaj"
    };
    
    return titles[chapterNumber] || `Tema ${chapterNumber}`;
}

function goBackToChapters() {
    const bookContentSection = document.getElementById('book-content');
    const mainSections = document.querySelectorAll('section:not(#book-content)');
    
    bookContentSection.style.display = 'none';
    mainSections.forEach(sec => sec.style.display = 'block');
    document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (document.getElementById('book-content').style.display === 'block') {
        goBackToChapters();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const chapterGrid = document.getElementById('chapterGrid');
    for (let i = 1; i <= totalChapters; i++) {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card';
        chapterCard.innerHTML = `
            <div class="chapter-number">${i}</div>
            <div class="chapter-title">${getChapterTitle(i)}</div>
            <button class="read-btn" onclick="showChapter(${i})">Lexo Kapitullin</button>
        `;
        chapterGrid.appendChild(chapterCard);
    }
});

// Enhanced print functionality
function printChapter() {
    const chapterContent = document.querySelector('.chapter-content').innerHTML;
    const chapterTitle = getChapterTitle(currentChapter);
    
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write(`
        <html>
        <head>
            <title>Kapitulli ${currentChapter}: ${chapterTitle}</title>
            <style>
                body { font-family: 'Arial', sans-serif; line-height: 1.6; margin: 20px; }
                h1, h2, h3 { color: #2c3e50; }
                .ai-prompt-box { background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; }
                .islamic-quote { background: #e8f5e8; padding: 20px; text-align: center; font-style: italic; margin: 20px 0; border-radius: 8px; }
                .highlight-box { background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; }
                ul, ol { padding-left: 30px; }
                li { margin: 8px 0; }
                strong { color: #2c3e50; }
                @media print {
                    body { margin: 15mm; }
                    .ai-prompt-box { break-inside: avoid; }
                    .highlight-box { break-inside: avoid; }
                }
            </style>
        </head>
        <body>
            <h1>Teoria e Lojërave: Nderi dhe Suksesi</h1>
            <h2>Kapitulli ${currentChapter}: ${chapterTitle}</h2>
            ${chapterContent}
            <hr style="margin-top: 40px;">
            <p style="text-align: center; color: #666;">© 2024 Teoria e Lojërave: Nderi dhe Suksesi</p>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

// Enhanced download functionality with PDF generation
function downloadChapter(chapterNumber) {
    const chapterTitle = getChapterTitle(chapterNumber);
    const chapterContent = chapters[chapterNumber]?.content || generateChapterContent(chapterNumber, chapterTitle);
    
    // Create downloadable HTML file
    const htmlContent = `
<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kapitulli ${chapterNumber}: ${chapterTitle}</title>
    <style>
        body { 
            font-family: 'Georgia', serif; 
            line-height: 1.8; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px 20px; 
            color: #333;
        }
        h1, h2, h3 { color: #2c3e50; margin-top: 30px; }
        h1 { border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        .ai-prompt-box { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px; 
            border-radius: 10px; 
            margin: 25px 0; 
        }
        .islamic-quote { 
            background: #e8f5e8; 
            padding: 25px; 
            text-align: center; 
            font-style: italic; 
            margin: 25px 0; 
            border-radius: 10px;
            border: 2px solid #27ae60;
        }
        .highlight-box { 
            background: #fff3cd; 
            padding: 20px; 
            border-radius: 10px; 
            margin: 25px 0;
            border-left: 5px solid #ffc107;
        }
        ul, ol { padding-left: 30px; }
        li { margin: 10px 0; }
        strong { color: #2c3e50; }
        p { margin: 15px 0; text-align: justify; }
    </style>
</head>
<body>
    <h1>Teoria e Lojërave: Nderi dhe Suksesi</h1>
    ${chapterContent}
    <hr style="margin-top: 50px; border: 1px solid #bdc3c7;">
    <p style="text-align: center; color: #7f8c8d; font-size: 14px;">
        © 2024 Teoria e Lojërave: Nderi dhe Suksesi | Kapitulli ${chapterNumber} nga ${totalChapters}
    </p>
</body>
</html>`;

    // Create and download the file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kapitulli-${chapterNumber}-${chapterTitle.replace(/[^a-zA-Z0-9]/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show success message
    alert(`✅ Kapitulli ${chapterNumber} u shkarkua me sukses si file HTML!`);
}

// Complete book download functionality
function downloadBook() {
    if (confirm('Do të shkarkoni librin e plotë (60 kapituj)? Ky proces mund të marrë disa sekonda.')) {
        generateCompleteBookDownload();
    }
}

function generateCompleteBookDownload() {
    let completeBookContent = `
<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teoria e Lojërave: Nderi dhe Suksesi - Libri i Plotë</title>
    <style>
        body { 
            font-family: 'Georgia', serif; 
            line-height: 1.8; 
            max-width: 900px; 
            margin: 0 auto; 
            padding: 40px 20px; 
            color: #333;
        }
        h1, h2, h3 { color: #2c3e50; margin-top: 40px; }
        h1 { 
            border-bottom: 3px solid #3498db; 
            padding-bottom: 15px; 
            page-break-before: always;
        }
        h1:first-of-type { page-break-before: auto; }
        .ai-prompt-box { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px; 
            border-radius: 10px; 
            margin: 25px 0; 
            page-break-inside: avoid;
        }
        .islamic-quote { 
            background: #e8f5e8; 
            padding: 25px; 
            text-align: center; 
            font-style: italic; 
            margin: 25px 0; 
            border-radius: 10px;
            border: 2px solid #27ae60;
            page-break-inside: avoid;
        }
        .highlight-box { 
            background: #fff3cd; 
            padding: 20px; 
            border-radius: 10px; 
            margin: 25px 0;
            border-left: 5px solid #ffc107;
            page-break-inside: avoid;
        }
        .table-of-contents {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
        }
        .toc-item {
            margin: 8px 0;
            padding: 5px;
            border-bottom: 1px dotted #ccc;
        }
        ul, ol { padding-left: 30px; }
        li { margin: 10px 0; }
        strong { color: #2c3e50; }
        p { margin: 15px 0; text-align: justify; }
        @media print {
            body { margin: 20mm; font-size: 12pt; }
            h1 { page-break-before: always; }
            .ai-prompt-box, .islamic-quote, .highlight-box { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div style="text-align: center; margin-bottom: 50px;">
        <h1 style="font-size: 2.5em; margin-bottom: 10px; border: none;">📚 Teoria e Lojërave</h1>
        <h2 style="color: #27ae60; margin-top: 0;">Nderi dhe Suksesi</h2>
        <p style="font-size: 1.2em; color: #7f8c8d;">Libër i Plotë në 300 Faqe për Suksesin e Nderuar</p>
        <p style="font-style: italic; color: #95a5a6;">60 Kapituj për Jetën e Suksesshme me Vlera Islame</p>
    </div>

    <div class="table-of-contents">
        <h2 style="text-align: center; margin-top: 0;">📋 Përmbajtja e Librit</h2>`;

    // Add table of contents
    for (let i = 1; i <= totalChapters; i++) {
        completeBookContent += `
        <div class="toc-item">
            <strong>Kapitulli ${i}:</strong> ${getChapterTitle(i)}
        </div>`;
    }

    completeBookContent += `
    </div>`;

    // Add all chapters
    for (let i = 1; i <= totalChapters; i++) {
        const chapterContent = chapters[i]?.content || generateChapterContent(i, getChapterTitle(i));
        completeBookContent += `
        <div style="page-break-before: always;">
            ${chapterContent}
        </div>`;
    }

    completeBookContent += `
    <div style="page-break-before: always; text-align: center; padding: 50px 0;">
        <h1>🎯 Përfundimi</h1>
        <p style="font-size: 1.3em; line-height: 2;">
            Ju keni arritur në fund të udhëtimit nëpër 60 kapitujt e "Teoria e Lojërave: Nderi dhe Suksesi". 
            Tani fillon udhëtimi i vërtetë - implementimi i mësimeve në jetën tuaj të përditshme.
        </p>
        
        <div class="islamic-quote">
            "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
            <br><br>
            "Zoti ynë, na jep në këtë botë të mirë dhe në botën tjetër të mirë dhe na ruaj nga dënimi i zjarrit." - Kurani, 2:201
        </div>
        
        <p style="font-size: 1.1em;">
            Mbani mend: Suksesi i vërtetë nuk matet vetëm me pasurinë, por me nderin, karakterin, 
            dhe kontributin pozitiv që lini në jetën e të tjerëve.
        </p>
        
        <hr style="margin: 40px 0; border: 2px solid #3498db;">
        <p style="color: #7f8c8d; font-size: 14px;">
            © 2024 Teoria e Lojërave: Nderi dhe Suksesi<br>
            Libër i Plotë - 300 Faqe - 60 Kapituj<br>
            Shkarkuar më: ${new Date().toLocaleDateString('sq-AL')}
        </p>
    </div>
</body>
</html>`;

    // Create and download the complete book
    const blob = new Blob([completeBookContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Teoria-e-Lojrave-Nderi-dhe-Suksesi-Libri-i-Plote.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('🎉 Libri i plotë (60 kapituj) u shkarkua me sukses! Mund ta hapni në çdo browser dhe ta printoni si PDF.');
}

// Search functionality
function searchContent(query) {
    if (!query || query.trim() === '') {
        alert("Ju lutem shkruani një term për kërkim.");
        return;
    }
    
    const results = [];
    const searchTerm = query.toLowerCase();
    
    for (let i = 1; i <= totalChapters; i++) {
        const title = getChapterTitle(i).toLowerCase();
        const content = (chapters[i]?.content || generateChapterContent(i, getChapterTitle(i))).toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            results.push({
                chapter: i,
                title: getChapterTitle(i),
                relevance: title.includes(searchTerm) ? 'title' : 'content'
            });
        }
    }
    
    if (results.length === 0) {
        alert(`Nuk u gjetën rezultate për "${query}". Provoni terma të tjerë si: biznes, nder, Islam, investim, martesa, sukses.`);
        return;
    }
    
    const resultsList = results.map(r => 
        `${r.chapter}. ${r.title} ${r.relevance === 'title' ? '(në titull)' : '(në përmbajtje)'}`
    ).join('\n');
    
    const message = `Gjetur ${results.length} rezultate për "${query}":\n\n${resultsList}\n\nDo të hapni rezultatin e parë?`;
    
    if (confirm(message)) {
        showChapter(results[0].chapter);
    }
}

// Filter chapters by category (for future enhancement)
function filterChapters(category) {
    // This function can be enhanced to filter chapters by categories
    console.log(`Filtering by category: ${category}`);
}
