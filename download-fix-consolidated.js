// CONSOLIDATED DOWNLOAD FIX - Single working version
// This replaces all conflicting downloadBook functions

// Override any existing functions when this script loads
window.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Overriding download functions...');
});

// Main download function - working version
function downloadBook() {
    console.log('🔄 Starting downloadBook function...');
    
    try {
        // Show loading state
        const downloadBtns = document.querySelectorAll('[onclick*="downloadBook"]');
        const originalTexts = [];
        
        downloadBtns.forEach((btn, index) => {
            originalTexts[index] = btn.textContent;
            btn.textContent = '⏳ Po krijohet libri...';
            btn.disabled = true;
        });
        
        console.log('✅ Loading state set');
        
        // Check if required data exists
        if (typeof chapters === 'undefined') {
            throw new Error('Chapters data not found. Make sure script.js is loaded first.');
        }
        
        if (typeof totalChapters === 'undefined') {
            throw new Error('totalChapters variable not found.');
        }
        
        console.log('✅ Required data found');
        console.log('Total chapters:', totalChapters);
        
        // Generate book content with a delay to allow UI update
        setTimeout(() => {
            try {
                console.log('🔄 Generating book content...');
                
                let completeBook = generateCompleteBookHTML();
                console.log('✅ Book content generated, size:', completeBook.length, 'characters');
                
                // Create and trigger download
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
                
                console.log('✅ Download triggered successfully');
                
                // Reset buttons with success state
                downloadBtns.forEach((btn, index) => {
                    btn.textContent = '✅ E Shkarkuar!';
                    btn.disabled = false;
                });
                
                // Show success message
                setTimeout(() => {
                    alert(`✅ LIBRI U SHKARKUA ME SUKSES!

📖 Libri përfshin të gjithë ${totalChapters} kapitujt (300+ faqe).

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
                    
                    // Restore original button text
                    downloadBtns.forEach((btn, index) => {
                        btn.textContent = originalTexts[index] || 'Shkarko Librin e Plotë 📚';
                    });
                    
                }, 500);
                
            } catch (innerError) {
                console.error('❌ Error generating book content:', innerError);
                throw innerError;
            }
        }, 100);
        
    } catch (error) {
        console.error('❌ Download error:', error);
        
        // Show user-friendly error message
        alert(`❌ Gabim në shkarkimin e librit!

Detajet e gabimit: ${error.message}

🔄 Zgjidhje të mundshme:
1. Rifreskoni faqen (F5) dhe provoni përsëri
2. Kontrolloni që të gjitha skriptet janë ngarkuar saktë
3. Provoni me shfletues tjetër (Chrome, Firefox, Edge)

Nëse problemi vazhdon, kontaktoni mbështetjen.`);
        
        // Reset buttons on error
        const downloadBtns = document.querySelectorAll('[onclick*="downloadBook"]');
        downloadBtns.forEach(btn => {
            btn.textContent = 'Shkarko Librin e Plotë 📚';
            btn.disabled = false;
        });
    }
}

// Function to generate complete book HTML
function generateCompleteBookHTML() {
    console.log('🔄 Starting HTML generation...');
    
    let bookHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teoria e Lojërave: Nderi dhe Suksesi - Libri i Plotë</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.8;
            margin: 0;
            padding: 40px;
            color: #333;
            background: white;
        }
        .book-header {
            text-align: center;
            margin-bottom: 50px;
            border-bottom: 3px solid #2E8B57;
            padding-bottom: 30px;
        }
        .book-title {
            font-size: 2.5rem;
            color: #2E8B57;
            margin-bottom: 10px;
            font-weight: bold;
        }
        .book-subtitle {
            font-size: 1.2rem;
            color: #666;
            font-style: italic;
        }
        .chapter {
            margin-bottom: 40px;
            page-break-before: always;
        }
        .chapter-title {
            font-size: 1.8rem;
            color: #2E8B57;
            margin-bottom: 20px;
            border-bottom: 2px solid #2E8B57;
            padding-bottom: 10px;
        }
        .chapter-content {
            font-size: 1.1rem;
            line-height: 1.8;
        }
        .chapter-content h3 {
            color: #2E8B57;
            font-size: 1.4rem;
            margin: 25px 0 15px 0;
        }
        .chapter-content h4 {
            color: #333;
            font-size: 1.2rem;
            margin: 20px 0 10px 0;
        }
        .chapter-content p {
            margin-bottom: 15px;
            text-align: justify;
        }
        .highlight-box {
            background: #f0f8f0;
            border-left: 4px solid #2E8B57;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .islamic-quote {
            background: #f8f9fa;
            border: 2px solid #2E8B57;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            text-align: center;
            font-style: italic;
            color: #2E8B57;
        }
        .page-number {
            text-align: center;
            margin-top: 30px;
            font-size: 0.9rem;
            color: #666;
        }
        ul, ol {
            margin: 15px 0 15px 30px;
        }
        li {
            margin-bottom: 8px;
        }
        @media print {
            body { margin: 20px; }
            .chapter { page-break-before: always; }
        }
    </style>
</head>
<body>
    <div class="book-header">
        <h1 class="book-title">Teoria e Lojërave: Nderi dhe Suksesi</h1>
        <p class="book-subtitle">Udhëzuesi i Plotë për Suksesin e Nderuar dhe Pasurinë Halal</p>
        <p style="margin-top: 20px; color: #666;">300+ Faqe • ${totalChapters} Kapituj • Në Gjuhën Shqipe</p>
    </div>
`;

    console.log('✅ Header generated');
    
    // Add table of contents
    bookHTML += `
    <div class="chapter">
        <h2 class="chapter-title">Përmbajtja e Librit</h2>
        <div class="chapter-content">
            <ol>`;
    
    // Generate table of contents
    for (let i = 1; i <= totalChapters; i++) {
        let title = getChapterTitle(i);
        bookHTML += `<li>Kapitulli ${i}: ${title}</li>`;
    }
    
    bookHTML += `
            </ol>
        </div>
    </div>`;
    
    console.log('✅ Table of contents generated');
    
    // Add all chapters
    for (let i = 1; i <= totalChapters; i++) {
        try {
            let title = getChapterTitle(i);
            let content = generateChapterContent(i);
            
            bookHTML += `
    <div class="chapter">
        <h2 class="chapter-title">Kapitulli ${i}: ${title}</h2>
        <div class="chapter-content">
            ${content}
        </div>
        <div class="page-number">Faqe ${i * 5} | Kapitulli ${i} nga ${totalChapters}</div>
    </div>`;
            
            if (i % 10 === 0) {
                console.log(`✅ Generated chapter ${i}/${totalChapters}`);
            }
            
        } catch (chapterError) {
            console.warn(`⚠️ Error generating chapter ${i}:`, chapterError);
            bookHTML += `
    <div class="chapter">
        <h2 class="chapter-title">Kapitulli ${i}: ${getChapterTitle(i) || 'Kapitulli ' + i}</h2>
        <div class="chapter-content">
            <p><em>Përmbajtja e këtij kapitulli do të shtohet së shpejti...</em></p>
        </div>
    </div>`;
        }
    }
    
    bookHTML += `
</body>
</html>`;
    
    console.log('✅ Complete book HTML generated');
    return bookHTML;
}

// Helper function to safely get chapter title
function getChapterTitle(chapterNum) {
    try {
        if (chapters && chapters[chapterNum] && chapters[chapterNum].title) {
            return chapters[chapterNum].title;
        }
        // Fallback titles for chapters without defined titles
        const fallbackTitles = {
            1: "Hyrje në Teorinë e Lojërave dhe Nderin",
            2: "Parimet Themelore të Strategjisë së Nderuar",
            3: "Lojërat me Shumë Zero dhe Fituesi-Fituesi",
            4: "Strategjitë Dominante në Biznes dhe Jetë",
            5: "Ekuilibri Nash dhe Vendimmarrja Strategjike"
        };
        return fallbackTitles[chapterNum] || `Kapitulli ${chapterNum}`;
    } catch (error) {
        console.warn(`Warning getting title for chapter ${chapterNum}:`, error);
        return `Kapitulli ${chapterNum}`;
    }
}

// Helper function to safely generate chapter content
function generateChapterContent(chapterNum) {
    try {
        if (chapters && chapters[chapterNum] && chapters[chapterNum].content) {
            return chapters[chapterNum].content;
        }
        
        // Fallback content for chapters without defined content
        return `
            <h3>Kapitulli ${chapterNum}</h3>
            <p>Përmbajtja e këtij kapitulli do të shtohet së shpejti. Ky kapitull do të trajtojë aspekte të rëndësishme të teorisë së lojërave në kontekstin e kulturës dhe vlerave tona.</p>
            
            <div class="highlight-box">
                <h4>Objektivi i Kapitullit</h4>
                <p>Në këtë kapitull do të mësoni koncepte themelore që do t'ju ndihmojnë të kuptoni më mirë strategjitë e suksesit të nderuar.</p>
            </div>
            
            <p>Kapitulli do të përfshijë:</p>
            <ul>
                <li>Koncepte teorike të rëndësishme</li>
                <li>Shembuj praktikë nga jeta e përditshme</li>
                <li>Ushtrime dhe aplikime</li>
                <li>Referenca për studim të mëtejshëm</li>
            </ul>
        `;
    } catch (error) {
        console.warn(`Warning generating content for chapter ${chapterNum}:`, error);
        return `<p>Përmbajtja e kapitullit ${chapterNum} do të shtohet së shpejti.</p>`;
    }
}

// Print instructions function
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

🎯 Rezultat: PDF profesional i gatshëm për lexim!

💡 SUGJERIME:
• Printoni vetëm kapitujt që ju interesojnë
• Përdorni Chrome për rezultat më të mirë
• Kontrolloni që "Background graphics" është aktiv`;

    alert(message);
}

console.log('📁 Download fix loaded successfully');

// Force override any existing downloadBook functions
window.downloadBook = downloadBook;
console.log('✅ downloadBook function overridden');
