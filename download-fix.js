// DOWNLOAD AND PRINT FUNCTIONS FIX
// This file contains working versions of the download and print functions

// Fixed download full book function
function downloadBook() {
    try {
        console.log('Starting book download...');
        
        // Show loading state
        const downloadBtns = document.querySelectorAll('[onclick*="downloadBook"]');
        downloadBtns.forEach(btn => {
            btn.textContent = '⏳ Po krijohet libri...';
            btn.disabled = true;
        });
        
        // Generate book content
        let completeBook = generateSimpleBookHTML();
        
        // Create download
        const blob = new Blob([completeBook], { type: 'text/html;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Teoria-e-Lojrave-Libri-i-Plote.html';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Reset buttons and show success
        downloadBtns.forEach(btn => {
            btn.textContent = '✅ E Shkarkuar!';
            setTimeout(() => {
                btn.textContent = 'Shkarko Librin e Plotë 📚';
                btn.disabled = false;
            }, 2000);
        });
        
        // Show success message
        setTimeout(() => {
            alert(`✅ LIBRI U SHKARKUA ME SUKSES!

📖 Libri përfshin të gjithë 60 kapitujt (300+ faqe).

🔄 PËR TA KONVERTUAR NË PDF:
1. Hapeni file-in HTML në Chrome/Firefox/Edge
2. Shtypni Ctrl+P (ose Cmd+P në Mac)
3. Zgjidhni "Save as PDF"
4. Në "More Settings":
   ✓ Paper size: A4
   ✓ Background graphics: ✓
   ✓ Margins: Default
5. Klikoni "Save"

🎯 Rezultat: PDF profesional i gatshëm për lexim!`);
        }, 500);
        
    } catch (error) {
        console.error('Download error:', error);
        alert('❌ Gabim në shkarkimin e librit. Provoni përsëri.');
    }
}

// Fixed print instructions function
function showPrintInstructions() {
    const message = `🖨️ UDHËZIME PËR PRINTIMIN SI PDF

1️⃣ SHKARKONI LIBRIN:
   • Klikoni "Shkarko Librin e Plotë"
   • Do të shkarkoni një file HTML

2️⃣ HAPNI FILE-IN:
   • Hapni file-in HTML në Chrome, Firefox, ose Edge
   • Libri do të shihet me formatim profesional

3️⃣ PRINTONI SI PDF:
   • Shtypni Ctrl+P (ose Cmd+P në Mac)
   • Zgjidhni "Save as PDF" si printer
   • Në "More settings":
     ✓ Paper size: A4
     ✓ Margins: Default
     ✓ Background graphics: ✓
   • Klikoni "Save"

4️⃣ REZULTATI:
   • PDF profesional 300+ faqe
   • Të gjitha format dhe ngjyrat
   • Gati për printim ose lexim

💡 ALTERNATIVA:
   Mund të printoni edhe kapituj të veçantë

Dëshironi të shkarkoni librin tani?`;

    if (confirm(message)) {
        downloadBook();
    }
}

// Fixed download chapter function
function downloadChapter(chapterNumber) {
    try {
        const chapterTitle = getChapterTitle(chapterNumber);
        const chapterContent = chapters[chapterNumber] ? chapters[chapterNumber].content : generateChapterContent(chapterNumber, chapterTitle);
        
        // Create simple chapter HTML
        const chapterHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Kapitulli ${chapterNumber}: ${chapterTitle}</title>
    <style>
        @page { size: A4; margin: 2cm; }
        body { 
            font-family: Georgia, serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 21cm; 
            margin: 0 auto; 
            padding: 20px; 
        }
        h1 { color: #2E8B57; border-bottom: 3px solid #DAA520; padding-bottom: 10px; }
        h2 { color: #2E8B57; border-bottom: 2px solid #DAA520; padding-bottom: 5px; }
        h3 { color: #1B5E20; }
        .islamic-quote {
            background: #f0f8f0;
            border: 2px solid #DAA520;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            font-style: italic;
            color: #2E8B57;
        }
        .highlight-box {
            background: #fff7e6;
            border: 2px solid #DAA520;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        ul, ol { margin: 15px 0; padding-left: 30px; }
        li { margin: 8px 0; }
        p { margin-bottom: 12px; text-align: justify; }
        strong { color: #2E8B57; }
    </style>
</head>
<body>
    <h1>Kapitulli ${chapterNumber}: ${chapterTitle}</h1>
    ${chapterContent}
    <hr style="margin: 30px 0; border: 2px solid #DAA520;">
    <p style="text-align: center; color: #666;">
        <strong>Kapitulli ${chapterNumber} nga ${totalChapters}</strong><br>
        Teoria e Lojërave: Nderi dhe Suksesi<br>
        © 2025 - Të gjitha të drejtat të rezervuara
    </p>
</body>
</html>`;

        // Create and download
        const blob = new Blob([chapterHTML], { type: 'text/html;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Kapitulli-${chapterNumber}-${chapterTitle.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-')}.html`;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        alert(`✅ Kapitulli ${chapterNumber} u shkarkua me sukses!

🔄 Për ta konvertuar në PDF:
1. Hapeni file-in HTML në browser
2. Shtypni Ctrl+P
3. Zgjidhni "Save as PDF"
4. Aktivizoni "Background graphics"
5. Klikoni "Save"`);
        
    } catch (error) {
        console.error('Chapter download error:', error);
        alert('❌ Gabim në shkarkimin e kapitullit. Provoni përsëri.');
    }
}

// Generate simplified book HTML
function generateSimpleBookHTML() {
    let bookHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teoria e Lojërave: Nderi dhe Suksesi - Libri i Plotë</title>
    <style>
        @page { size: A4; margin: 2cm; }
        body { 
            font-family: Georgia, serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 21cm; 
            margin: 0 auto; 
            padding: 20px; 
        }
        h1 { 
            color: #2E8B57; 
            border-bottom: 3px solid #DAA520; 
            padding-bottom: 10px; 
            text-align: center; 
            page-break-after: avoid; 
        }
        h2 { 
            color: #2E8B57; 
            border-bottom: 2px solid #DAA520; 
            padding-bottom: 5px; 
            page-break-after: avoid; 
        }
        h3 { 
            color: #1B5E20; 
            page-break-after: avoid; 
        }
        .islamic-quote {
            background: #f0f8f0;
            border: 2px solid #DAA520;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            font-style: italic;
            color: #2E8B57;
            page-break-inside: avoid;
        }
        .highlight-box {
            background: #fff7e6;
            border: 2px solid #DAA520;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            page-break-inside: avoid;
        }
        .chapter-separator {
            page-break-before: always;
            border-top: 3px solid #DAA520;
            margin: 40px 0;
            text-align: center;
        }
        ul, ol { margin: 15px 0; padding-left: 30px; }
        li { margin: 8px 0; }
        p { margin-bottom: 12px; text-align: justify; }
        strong { color: #2E8B57; }
        @media print {
            body { font-size: 11pt; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    
    <div style="text-align: center; padding: 40px 0; background: linear-gradient(135deg, #2E8B57, #4CAF50); color: white; border-radius: 15px; margin-bottom: 40px;">
        <h1 style="color: white; border: none; font-size: 2.5em; margin: 20px 0;">TEORIA E LOJËRAVE</h1>
        <h2 style="color: white; border: none; font-size: 1.8em; margin: 20px 0;">Nderi dhe Suksesi</h2>
        <p style="font-size: 1.2em; margin: 20px 0;">📚 Libër i Plotë për Biznesin Modern 📚</p>
        <p style="font-size: 1em; opacity: 0.9;">300+ Faqe • 60 Kapituj • Strategji të Verifikuara</p>
    </div>

    <div class="highlight-box">
        <h3>📊 Përmbajtja e Librit</h3>
        <p><strong>60 Kapituj të Detajuar</strong> - Çdo kapitull 4-5 faqe me strategji praktike</p>
        <p><strong>300+ Faqe Përmbajtje</strong> - Nga teoria në praktikë</p>
        <p><strong>100+ Strategji Praktike</strong> - Të testuara dhe të verifikuara</p>
        <p><strong>50+ Raste Studimi</strong> - Shembuj realë nga Shqipëria dhe bota</p>
    </div>`;

    // Add table of contents
    bookHTML += `
    <div class="chapter-separator"></div>
    <h1>📑 Tabela e Përmbajtjes</h1>`;
    
    for (let i = 1; i <= totalChapters; i++) {
        const title = getChapterTitle(i);
        bookHTML += `<p><strong>Kapitulli ${i}:</strong> ${title}</p>`;
    }

    // Add all chapters
    for (let i = 1; i <= totalChapters; i++) {
        const title = getChapterTitle(i);
        let content;
        
        if (chapters[i]) {
            content = chapters[i].content;
        } else {
            content = generateChapterContent(i, title);
        }
        
        bookHTML += `
        <div class="chapter-separator"></div>
        <h1>Kapitulli ${i}: ${title}</h1>
        ${content}`;
    }

    bookHTML += `
    
    <div class="chapter-separator"></div>
    <h1>🎯 Konkluzione</h1>
    
    <div class="islamic-quote">
        "وَقُل رَّبِّ زِدْنِي عِلْمًا"
        <br><br>
        "Dhe thuaj: O Zoti im, shtomë dijen time!" - Kurani, 20:114
    </div>
    
    <p>Nëpër këto 60 kapituj kemi udhëtuar së bashku nëpër botën e strategjisë së biznesit, duke mësuar se si të arrijmë suksesin pa sakrifikuar vlerat tona.</p>
    
    <div class="highlight-box">
        <h3>🏆 Mesaze Kyçe:</h3>
        <ul>
            <li><strong>Nderi është Strategjia më Fitimprurëse</strong></li>
            <li><strong>Vlerat Islame Ndihmojnë në Biznes</strong></li>
            <li><strong>Suksesi Kërkon Durim dhe Punë</strong></li>
            <li><strong>Marrëdhëniet janë Thelbësore</strong></li>
            <li><strong>Edukimi i Vazhdueshëm është Kyç</strong></li>
        </ul>
    </div>
    
    <p style="text-align: center; margin-top: 40px; font-style: italic; color: #666;">
        © 2025 - Teoria e Lojërave: Nderi dhe Suksesi<br>
        "Suksesi më i madh është ai që arrihet duke ruajtur nderin dhe vlerat që na përcaktojnë si njerëz."
    </p>
    
</body>
</html>`;

    return bookHTML;
}

// Override the global functions
window.downloadBook = downloadBook;
window.showPrintInstructions = showPrintInstructions;
window.downloadChapter = downloadChapter;

// Also create a function to fix the download with progress
function downloadBookWithProgress() {
    downloadBook();
}
window.downloadBookWithProgress = downloadBookWithProgress;

console.log('✅ Download and print functions fixed and loaded successfully!');
