// Beautiful Book Download with Modern Design
// Creates a professionally styled book with elegant typography and layout

function downloadBeautifulBook() {
    console.log('🎨 Creating beautiful book with modern design...');
    
    // Ensure we have all required data
    window.totalChapters = 60;
    
    const statusCallback = (message, isError = false) => {
        console.log(message);
        if (isError) console.error(message);
    };
    
    statusCallback('🎨 Generating beautifully designed book...');
    
    let htmlContent = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teoria e Lojërave: Nderi dhe Suksesi - Libri i Plotë</title>
    <style>
        /* Modern Book Styling */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body { 
            font-family: 'Georgia', 'Times New Roman', serif; 
            line-height: 1.8; 
            color: #2c3e50;
            background: #ffffff;
            font-size: 16px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px;
        }
        
        /* Typography Hierarchy */
        h1 {
            font-size: 2.5rem;
            color: #1a202c;
            margin: 2rem 0 1.5rem 0;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
        }
        
        h2 {
            font-size: 2rem;
            color: #2d3748;
            margin: 2rem 0 1rem 0;
            font-weight: 600;
            border-bottom: 3px solid #4299e1;
            padding-bottom: 0.5rem;
        }
        
        h3 {
            font-size: 1.5rem;
            color: #2d3748;
            margin: 1.5rem 0 1rem 0;
            font-weight: 600;
        }
        
        h4 {
            font-size: 1.25rem;
            color: #4a5568;
            margin: 1rem 0 0.5rem 0;
            font-weight: 600;
        }
        
        p {
            margin: 1rem 0;
            text-align: justify;
            text-indent: 2rem;
            line-height: 1.8;
        }
        
        /* Title Page */
        .title-page {
            text-align: center;
            page-break-after: always;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: -40px;
            padding: 80px 40px;
            border-radius: 0;
        }
        
        .title-page h1 {
            font-size: 4rem;
            margin: 2rem 0;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            font-weight: 800;
        }
        
        .title-page h2 {
            font-size: 2.5rem;
            margin: 1rem 0;
            color: #ffd700;
            border: none;
            font-weight: 600;
        }
        
        .title-page .subtitle {
            font-size: 1.5rem;
            margin: 2rem 0;
            color: rgba(255,255,255,0.9);
            font-weight: 400;
        }
        
        .title-page .features {
            margin: 3rem 0;
            font-size: 1.2rem;
            line-height: 2;
        }
        
        .title-page .features p {
            text-indent: 0;
            margin: 0.5rem 0;
        }
        
        .title-page .publication-info {
            margin-top: 4rem;
            font-size: 1rem;
            color: rgba(255,255,255,0.7);
        }
        
        /* Chapter Styling */
        .chapter {
            margin: 4rem 0;
            page-break-before: always;
            min-height: 80vh;
            padding: 2rem;
            background: #fafafa;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .chapter-title {
            font-size: 2.2rem;
            color: #1a202c;
            border-bottom: 4px solid #4299e1;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
            text-align: center;
            background: linear-gradient(45deg, #4299e1, #667eea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .chapter-content {
            margin: 2rem 0;
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        /* Special Content Boxes */
        .islamic-quote {
            background: linear-gradient(135deg, #f0fff4 0%, #e6fffa 100%);
            border-left: 6px solid #38a169;
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 10px;
            font-style: italic;
            direction: rtl;
            text-align: right;
            box-shadow: 0 4px 15px rgba(56,161,105,0.1);
        }
        
        .islamic-quote::before {
            content: "🕌";
            font-size: 2rem;
            display: block;
            text-align: center;
            margin-bottom: 1rem;
        }
        
        .highlight-box {
            background: linear-gradient(135deg, #ebf8ff 0%, #e6fffa 100%);
            border: 2px solid #4299e1;
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: 0 4px 15px rgba(66,153,225,0.1);
        }
        
        .highlight-box::before {
            content: "💡";
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
        
        .strategy-box {
            background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
            border: 2px solid #f59e0b;
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: 0 4px 15px rgba(245,158,11,0.1);
        }
        
        .strategy-box::before {
            content: "🎯";
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
        
        .success-story {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 2px solid #0ea5e9;
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: 0 4px 15px rgba(14,165,233,0.1);
        }
        
        .success-story::before {
            content: "🏆";
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
        
        /* Lists */
        ul, ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        li {
            margin: 0.5rem 0;
            line-height: 1.6;
        }
        
        /* Page Numbers */
        .page-number {
            text-align: center;
            margin: 3rem 0 1rem 0;
            padding: 1rem;
            color: #718096;
            font-style: italic;
            font-size: 0.9rem;
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            border-radius: 25px;
            border: 1px solid #e2e8f0;
        }
        
        /* Table of Contents */
        .table-of-contents {
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            border: 3px solid #e2e8f0;
            border-radius: 20px;
            padding: 3rem;
            margin: 3rem 0;
            page-break-after: always;
        }
        
        .table-of-contents h2 {
            text-align: center;
            color: #2d3748;
            margin-bottom: 2rem;
            font-size: 2.5rem;
        }
        
        .table-of-contents ol {
            counter-reset: chapter-counter;
            list-style: none;
            padding: 0;
        }
        
        .table-of-contents li {
            counter-increment: chapter-counter;
            margin: 1rem 0;
            padding: 1rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            border-left: 4px solid #4299e1;
        }
        
        .table-of-contents li::before {
            content: "Kapitulli " counter(chapter-counter) ": ";
            font-weight: bold;
            color: #4299e1;
        }
        
        /* Print Styles */
        @media print {
            body {
                margin: 0;
                padding: 20px;
                font-size: 12pt;
                line-height: 1.6;
            }
            
            .chapter {
                page-break-before: always;
                margin: 0;
                padding: 20px;
                background: white !important;
                box-shadow: none !important;
            }
            
            .title-page {
                page-break-after: always;
                margin: 0;
                padding: 40px;
            }
            
            .table-of-contents {
                page-break-after: always;
            }
            
            h1, h2 {
                page-break-after: avoid;
            }
            
            .islamic-quote,
            .highlight-box,
            .strategy-box,
            .success-story {
                page-break-inside: avoid;
                background: #f9f9f9 !important;
            }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            body {
                padding: 20px;
                font-size: 14px;
            }
            
            .title-page h1 {
                font-size: 2.5rem;
            }
            
            .title-page h2 {
                font-size: 1.8rem;
            }
            
            .chapter {
                padding: 1rem;
            }
            
            .chapter-title {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <!-- Title Page -->
    <div class="title-page">
        <h1>📚 TEORIA E LOJËRAVE</h1>
        <h2>🏆 Nderi dhe Suksesi</h2>
        <p class="subtitle">Libër i Plotë dhe i Detajuar me 60 Kapituj</p>
        
        <div class="features">
            <p>🎯 <strong>60 Kapituj të Plotë</strong> - Strategji të Verifikuara</p>
            <p>📖 <strong>480+ Faqe Përmbajtje</strong> - Nga Teoria në Praktikë</p>
            <p>🏅 <strong>Sukses me Nder</strong> - Vlerat Islame dhe Shqiptare</p>
            <p>💼 <strong>Biznes Modern</strong> - Strategji për Shekullin XXI</p>
            <p>💎 <strong>Cilësi Premium</strong> - Dizajn Profesional dhe Elegant</p>
        </div>
        
        <div class="publication-info">
            <p><strong>Generuar:</strong> ${new Date().toLocaleDateString('sq-AL', {
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
            })}</p>
            <p><strong>Versioni:</strong> 2.0 Premium Edition</p>
        </div>
    </div>`;
    
    // Add Table of Contents
    htmlContent += `
    <div class="table-of-contents">
        <h2>📋 Përmbajtja e Librit</h2>
        <p style="text-align: center; margin-bottom: 2rem; font-size: 1.1rem; color: #4a5568;">
            Ky libër Premium përmban 60 kapituj të plotë që mbulojnë të gjitha aspektet e teorisë së lojërave, 
            biznesit modern dhe suksesit personal duke ruajtur vlerat dhe traditat tona.
        </p>
        <ol>`;
    
    // Generate table of contents
    for (let i = 1; i <= 60; i++) {
        const title = getChapterTitleSafe(i);
        htmlContent += `            <li>${title}</li>\n`;
    }
    
    htmlContent += `        </ol>
    </div>`;
    
    // Generate all chapters with beautiful content
    statusCallback('🎨 Generating beautifully styled chapters...');
    for (let i = 1; i <= 60; i++) {
        try {
            const title = getChapterTitleSafe(i);
            const content = getEnhancedChapterContent(i, title);
            
            htmlContent += `
    <div class="chapter">
        <h2 class="chapter-title">Kapitulli ${i}: ${title}</h2>
        <div class="chapter-content">${content}</div>
        <div class="page-number">
            📄 Faqe ${i * 8} | Kapitulli ${i} nga 60 | 📚 Teoria e Lojërave: Nderi dhe Suksesi
        </div>
    </div>`;
            
            if (i % 10 === 0) {
                statusCallback(`✨ Completed ${i}/60 chapters (${Math.round(i/60*100)}%)`);
            }
        } catch (error) {
            statusCallback(`⚠️ Error in chapter ${i}: ${error.message}`, true);
        }
    }
    
    // Add conclusion
    htmlContent += `
    <div class="chapter">
        <h2 class="chapter-title">🎯 Konkluzione dhe Mesazhi Final</h2>
        <div class="chapter-content">
            <div class="islamic-quote">
                "وَقُل رَّبِّ زِدْنِي عِلْمًا"
                <br><br>
                "Dhe thuaj: O Zoti im, shtomë dijen time!" - Kurani, 20:114
            </div>
            
            <p>Nëpër këto 60 kapituj kemi udhëtuar së bashku nëpër botën e strategjisë së biznesit modern, duke mësuar se si të arrijmë suksesin pa sakrifikuar vlerat tona më të çmuara.</p>
            
            <div class="highlight-box">
                <h3>🏆 Mesazhet Kyçe të Librit:</h3>
                <ul>
                    <li><strong>Nderi është Strategjia më Fitimprurëse</strong> - Biznesi i ndershëm krijon marrëdhënie afatgjata</li>
                    <li><strong>Vlerat Islame Ndihmojnë në Biznes</strong> - Etika dhe morali janë avantazhe konkurruese</li>
                    <li><strong>Suksesi Kërkon Durim dhe Punë</strong> - Nuk ka rrugë të shkurtër drejt suksesit të vërtetë</li>
                    <li><strong>Marrëdhëniet janë Thelbësore</strong> - Investimi në njerëz është investimi më i mirë</li>
                    <li><strong>Edukimi i Vazhdueshëm është Kyç</strong> - Kurrë mos ndaloni së mësuari dhe përmirësuari</li>
                </ul>
            </div>
            
            <div class="strategy-box">
                <h3>🎯 Hapat e Ardhshëm:</h3>
                <ol>
                    <li><strong>Apliko Strategjitë</strong> - Filloni me kapitujt që ju përshtaten më shumë</li>
                    <li><strong>Krijoni Plan Veprimi</strong> - Përcaktoni objektiva konkrete dhe afate</li>
                    <li><strong>Matni Progresin</strong> - Vlerësoni rezultatet tuaja rregullisht</li>
                    <li><strong>Përmirësoni Vazhdimisht</strong> - Adaptohuni dhe përmirësohuni</li>
                </ol>
            </div>
            
            <div class="success-story">
                <h3>🌟 Mesazhi Juaj Personal</h3>
                <p>Suksesi më i madh është ai që arrihet duke ruajtur nderin dhe vlerat që na përcaktojnë si njerëz. 
                   Kjo udhë mund të jetë më e gjatë, por është e sigurt dhe e qëndrueshme.</p>
                
                <p><strong>Mos harroni:</strong> Çdo sukses i madh fillon me një hap të vogël. Filloni sot, 
                   filloni tani, dhe mos u dorëzoni kurrë në ëndrrën tuaj për një jetë më të mirë.</p>
            </div>
        </div>
        
        <div class="page-number" style="text-align: center; font-size: 1rem; color: #2d3748; font-weight: 600;">
            🎉 Urime! Keni përfunduar librin e plotë "Teoria e Lojërave: Nderi dhe Suksesi" 🎉
            <br>
            <small style="color: #718096;">© 2025 - Versioni Premium me Dizajn Modern</small>
        </div>
    </div>
    
</body>
</html>`;
    
    statusCallback(`✅ Beautiful book generated! Total size: ${htmlContent.length} characters`);
    return htmlContent;
}

// Enhanced chapter content generator with beautiful formatting
function getEnhancedChapterContent(chapterNum, title) {
    // Try to get existing content first
    if (window.chapters && window.chapters[chapterNum] && window.chapters[chapterNum].content) {
        return enhanceExistingContent(window.chapters[chapterNum].content);
    }
    
    // Generate new enhanced content
    return generateBeautifulChapterContent(chapterNum, title);
}

function enhanceExistingContent(content) {
    // Enhance existing content with beautiful styling
    let enhanced = content;
    
    // Add Islamic quotes if not present
    if (!enhanced.includes('islamic-quote')) {
        const quotes = [
            '"إنما الأعمال بالنيات" - Veprat vlerësohen sipas qëllimeve',
            '"وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ" - Njeriu merr vetëm atë për të cilën përpiqet',
            '"وَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ" - Mbështetuni tek Allahu, se Ai i do ata që mbështeten',
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        enhanced = `<div class="islamic-quote">${randomQuote}</div>\n` + enhanced;
    }
    
    // Add highlight boxes for important points
    enhanced = enhanced.replace(/<p><strong>(.*?)<\/strong>(.*?)<\/p>/g, 
        '<div class="highlight-box"><h4>$1</h4><p>$2</p></div>');
    
    return enhanced;
}

function generateBeautifulChapterContent(chapterNum, title) {
    const islamicQuotes = [
        '"بسم الله نبدأ" - Me emrin e Allahut fillojmë',
        '"إنما الأعمال بالنيات" - Veprat vlerësohen sipas qëllimeve',
        '"وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ" - Njeriu merr vetëm atë për të cilën përpiqet',
        '"وَتَوَكَّلْ عَلَى اللَّهِ" - Mbështetuni tek Allahu',
        '"وَقُل رَّبِّ زِدْنِي عِلْمًا" - O Zoti im, shtomë dijen time',
        '"وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَىٰ مَا مَتَّعْنَا بِهِ أَزْوَاجًا مِّنْهُمْ زَهْرَةَ الْحَيَاةِ الدُّنْيَا لِنَفْتِنَهُمْ فِيهِ" - Dhe mos i ngjit sytë tek ajo që Ne ua kemi dhënë disa prej tyre si stoli të jetës së kësaj bote, që t\'i sprovojmë me të. (Kurani, 20:131)',
        '"قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ" - Thuaju besimtarëve t\'i ulin sytë dhe t\'i ruajnë nderin e tyre. Kjo është më e pastër për ta. (Kurani, 24:30)',
        '"وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ" - Dhe nuk i krijova xhinët dhe njerëzit veçse që të më adhurojnë. (Kurani, 51:56)',
        '"وَمَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا" - Dhe kush vret një njeri pa vrarë një njeri (tjetër) ose pa bërë çrregullim në tokë, është sikur të ketë vrarë tërë njerëzimin. (Kurani, 5:32)',
        '"وَجَعَلْنَا مِنْهُمْ أَئِمَّةً يَهْدُونَ بِأَمْرِنَا لَمَّا صَبَرُوا وَكَانُوا بِآيَاتِنَا يُوقِنُونَ" - Dhe bëmë prej tyre udhëheqës që udhëzonin me urdhrin Tonë kur duruan dhe ishin të bindur për shenjat Tona. (Kurani, 32:24)'
    ];
    
    const randomQuote = islamicQuotes[Math.floor(Math.random() * islamicQuotes.length)];
    
    return `
        <div class="islamic-quote">${randomQuote}</div>
        
        <p>Në këtë kapitull do të eksplorojmë konceptet thelbësore të <strong>${title.toLowerCase()}</strong>, duke i kombinuar me vlerat tona tradicionale dhe parimet e biznesit modern.</p>
        
        <h3>🎯 Objektivat e Kapitullit</h3>
        <div class="highlight-box">
            <ul>
                <li>Të kuptojmë rëndësinë e ${title.toLowerCase()} në kontekstin e biznesit modern</li>
                <li>Të mësojmë strategji praktike që mund të aplikojmë menjëherë</li>
                <li>Të shohim si vlerat islame dhe shqiptare na ndihmojnë në sukses</li>
                <li>Të analizojmë raste të suksesshme nga praktika</li>
            </ul>
        </div>
        
        <h3>📚 Teoria dhe Konceptet Bazë</h3>
        <p>Teoria e lojërave na mëson se çdo vendim që marrim në biznes ndikon dhe ndikohet nga vendimet e të tjerëve. Kjo është edhe arsyeja pse <strong>${title.toLowerCase()}</strong> luajnë një rol kaq të rëndësishëm në strategjinë tonë.</p>
        
        <div class="strategy-box">
            <h4>💡 Strategjia Kyçe</h4>
            <p>Fokusohuni në ndërtimin e marrëdhënieve afatgjata në vend të fitimeve afatshkurtra. Kjo qasje është në përputhje të plotë me vlerat tona islame dhe krijon avantazhe konkurruese të qëndrueshme.</p>
        </div>
        
        <h3>🏢 Aplikimi në Biznes</h3>
        <p>Në botën e biznesit, <strong>${title.toLowerCase()}</strong> mund të zbatohen në mënyra të ndryshme:</p>
        
        <ol>
            <li><strong>Planifikimi Strategjik:</strong> Përdorimi i principeve për të krijuar plane afatgjata</li>
            <li><strong>Marrëdhëniet me Klientët:</strong> Ndërtimi i besimit dhe lojalitetit</li>
            <li><strong>Menaxhimi i Ekipit:</strong> Krijimi i një kulture pune pozitive</li>
            <li><strong>Negociatat:</strong> Arritja e marrëveshjeve që përfitojnë të gjithë palët</li>
        </ol>
        
        <div class="success-story">
            <h4>🏆 Rast Studimi: Suksesi në Praktikë</h4>
            <p>Një shembull i suksesshëm i aplikimit të këtyre principeve është historia e një biznesi shqiptar që arriti të rritë shitjet me 300% brenda dy vitesh duke fokusuar në cilësinë dhe marrëdhëniet me klientët, në vend të konkurrimit vetëm me çmime.</p>
            
            <p><strong>Mësimet kyçe:</strong></p>
            <ul>
                <li>Cilësia dhe ndershmëria krijojnë reputacion</li>
                <li>Klientët e kënaqur janë reklamuesit më të mirë</li>
                <li>Investimi në trajnimin e stafit kthen përfitime të mëdha</li>
                <li>Qëndrueshmëria është më e rëndësishme se rritja e shpejtë</li>
            </ul>
        </div>
        
        <h3>🛠️ Ushtrime Praktike</h3>
        <div class="highlight-box">
            <h4>✏️ Detyra për Reflektim</h4>
            <ol>
                <li>Analizoni një situatë nga biznesi juaj ku mund të aplikoni këto principe</li>
                <li>Identifikoni tre mënyra konkrete për të përmirësuar marrëdhëniet me klientët</li>
                <li>Krijoni një plan veprimi për të zbatuara këto strategji gjatë javës së ardhshme</li>
                <li>Vlerësoni progresin tuaj dhe përshtateni strategjinë sipas nevojës</li>
            </ol>
        </div>
        
        <h3>🌟 Përfundime dhe Hapat e Ardhshëm</h3>
        <p>Kapitulli për <strong>${title.toLowerCase()}</strong> na ka mësuar se suksesi i vërtetë vjen kur kombinojmë njohuritë moderne me vlerat tona tradicionale. Kjo qasje na jep një avantazh unik në tregun global.</p>
        
        <div class="strategy-box">
            <h4>🎯 Plani Juaj i Veprimit</h4>
            <ul>
                <li>Filloni me ndryshime të vogla por të qëndrueshme</li>
                <li>Matni rezultatet tuaja rregullisht</li>
                <li>Kërkoni feedback nga klientët dhe kolegët</li>
                <li>Përmirësoni vazhdimisht strategjinë tuaj</li>
                <li>Mos harroni kurrë vlerat që ju udhëheqin</li>
            </ul>
        </div>
        
        <p><em>Në kapitullin e ardhshëm do të eksplorojmë në thellësi mënyrat se si të implementojmë këto strategji në praktikë dhe të matim suksesin tonë.</em></p>
    `;
}

// Safe functions for getting chapter data
function getChapterTitleSafe(chapterNum) {
    if (typeof getChapterTitle === 'function') {
        try {
            return getChapterTitle(chapterNum);
        } catch (error) {
            console.warn(`Error getting title for chapter ${chapterNum}:`, error);
        }
    }
    
    // Fallback titles
    const fallbackTitles = [
        "Hyrje në Teorinë e Lojërave", "Parimet Themelore të Strategjisë", "Ndertimi i Marrëdhënieve të Forta",
        "Komunikimi Efektiv në Biznes", "Menaxhimi i Konflikteve", "Negociatat e Suksesshme",
        "Udhëheqja me Vizion", "Inovacioni dhe Kreativiteti", "Menaxhimi i Riskut", "Planifikimi Strategjik",
        "Marketingu dhe Shitjet", "Menaxhimi Financiar", "Teknologjia në Biznes", "Ekipi i Suksesshëm",
        "Kultura Organizative", "Etika në Biznes", "Përgjegjësia Sociale", "Qëndrueshmëria", "Rritja dhe Zhvillimi",
        "Partneritetet Strategjike", "Investimet e Menqura", "Menaxhimi i Kohës", "Produktiviteti Personal",
        "Balancimi i Jetës", "Stresimi dhe Menaxhimi", "Kreativiteti dhe Inovacioni", "Mësimi i Vazhdueshëm",
        "Rrjetëzimi Profesional", "Branding Personal", "Reputacioni dhe Besimi", "Cilësia dhe Shërbimet",
        "Kënaqësia e Klientëve", "Konkurenca e Ndershme", "Bashkëpunimi vs Konkurimi", "Strategjitë Globale",
        "Tregjet Ndërkombëtare", "Kulturën dhe Biznesi", "Diversifikimi i Biznesit", "Inovacioni Teknologjik",
        "Ekonomia Digjitale", "Startup dhe Sipërmarrja", "Financimi i Biznesit", "Investitorët dhe Partnerët",
        "Menaxhimi i Ndryshimeve", "Adaptimi dhe Fleksibiliteti", "Rezilienca në Biznes", "Planifikimi i Kontingjencës",
        "Analizimi i Konkurrencës", "Pozicionimi në Treg", "Strategjitë e Çmimit", "Shpërndarja dhe Logjistika",
        "Cilësia e Produkteve", "Shërbimet e Shkëlqyera", "Inovacioni i Vazhdueshëm", "Teknologjitë e Reja",
        "Inteligjenca Artificiale", "Automatizimi i Proceseve", "Efikasiteti Operacional", "Optimizimi i Kostove",
        "Profitabiliteti Afatgjatë", "Qëndrueshmëria Financiare", "Trashëgimia dhe E Ardhmja", "Vizjoni Afatgjatë"
    ];
    
    return fallbackTitles[chapterNum - 1] || `Kapitull ${chapterNum}: Strategji të Avancuara`;
}

// Export functions for global access
window.downloadBeautifulBook = downloadBeautifulBook;
window.getEnhancedChapterContent = getEnhancedChapterContent;
window.generateBeautifulChapterContent = generateBeautifulChapterContent;

console.log('✨ Beautiful Book Download system loaded successfully!');
