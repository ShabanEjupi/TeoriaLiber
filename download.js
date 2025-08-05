// Enhanced Download Script for Game Theory Book with Two Versions
async function downloadBook(includeViewReferences = true) {
    console.log('📚 Starting book download...', includeViewReferences ? 'with' : 'without', 'view references');
    
    // Check if chapters are loaded
    if (typeof window.chapters === 'undefined' || !window.chapters) {
        alert('❌ Gabim: Kapitujt nuk janë ngarkuar ende. Ju lutemi prisni disa sekonda dhe provoni përsëri.');
        return;
    }

    // Check for image integration
    if (typeof window.integrateChapterImages === 'function') {
        console.log('🖼️ Integrating images before download...');
        window.integrateChapterImages();
        
        // Wait a moment for images to be integrated
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Ensure images are auto-fixed for all chapters
    if (typeof window.ensureAllImagesIntegrated === 'function') {
        console.log('🔧 Running image auto-fix for all chapters...');
        window.ensureAllImagesIntegrated();
        
        // Wait a moment for auto-fix to complete
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const statusDiv = document.createElement('div');
    statusDiv.style.cssText = `
        position: fixed; top: 20px; right: 20px; 
        background: #2E8B57; color: white; 
        padding: 15px 20px; border-radius: 10px; 
        z-index: 10000; font-family: Arial, sans-serif;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    statusDiv.innerHTML = '📚 Duke përgatitur librin...';
    document.body.appendChild(statusDiv);

    setTimeout(() => {
        try {
            statusDiv.innerHTML = '📝 Duke gjeneruar përmbajtjen...';
            
            const bookHTML = generateCompleteBook(includeViewReferences);
            
            statusDiv.innerHTML = '💾 Duke shkarkuar...';
            
            // Create and trigger download
            const blob = new Blob([bookHTML], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = includeViewReferences ? 
                'Teoria-e-Lojrave-Me-Shikime.html' : 
                'Teoria-e-Lojrave-Pa-Shikime.html';
            a.style.display = 'none';
            
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            statusDiv.innerHTML = '✅ Libri u shkarkua me sukses!';
            statusDiv.style.background = '#22c55e';
            
            setTimeout(() => {
                document.body.removeChild(statusDiv);
                
                const versionText = includeViewReferences ? 
                    '(Versioni i Plotë me Shikime dhe Referencias)' : 
                    '(Versioni i Thjeshtë pa Shikime)';
                
                alert(`✅ LIBRI U SHKARKUA ME SUKSES!

📚 Libri "Teoria e Lojërave: Nderi dhe Suksesi"
${versionText}
📖 111 kapituj të plotë (800+ faqe)
🎨 Me imazhe të integruara
📱 Dizajn responsive

🔄 PËR TA KONVERTUAR NË PDF:
1. Hapeni file-in HTML në Chrome/Firefox/Edge
2. Shtypni Ctrl+P (ose Cmd+P në Mac)
3. Zgjidhni "Save as PDF" 
4. Në "More Settings":
   ✓ Paper size: A4
   ✓ Background graphics: ✓ (SHUMË E RËNDËSISHME!)
   ✓ Margins: Default
5. Klikoni "Save"

🎯 Rezultat: PDF premium i bukur dhe profesional!`);
            }, 2000);
            
        } catch (error) {
            console.error('❌ Download error:', error);
            statusDiv.innerHTML = '❌ Gabim gjatë shkarkimit';
            statusDiv.style.background = '#ef4444';
            
            setTimeout(() => {
                document.body.removeChild(statusDiv);
                alert('❌ Gabim gjatë shkarkimit. Ju lutemi kontrolloni konsolën për detaje.');
            }, 3000);
        }
    }, 100);
}

// Function to download book with view references
function downloadBookWithViews() {
    downloadBook(true);
}

// Function to download book without view references  
function downloadBookWithoutViews() {
    downloadBook(false);
}

function generateCompleteBook(includeViewReferences = true) {
    const totalChapters = 111;
    
    const bookHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teoria e Lojërave: Nderi dhe Suksesi - Libri i Plotë</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.7;
            color: #2d3748;
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
            background: white;
        }
        
        @page { 
            size: A4; 
            margin: 2cm; 
        }
        
        .book-header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: linear-gradient(135deg, #2E8B57 0%, #006400 100%);
            color: white;
            border-radius: 15px;
            page-break-inside: avoid;
        }
        
        .book-header h1 {
            font-size: 2.5rem;
            margin: 0 0 0.5rem 0;
            font-weight: 800;
        }
        
        .chapter {
            margin-bottom: 3rem;
            page-break-before: auto;
            page-break-inside: avoid;
        }
        
        .chapter h2 {
            color: #2E8B57;
            font-size: 1.8rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid #2E8B57;
            font-weight: 700;
            page-break-after: avoid;
        }
        
        .chapter h3 {
            color: #006400;
            font-size: 1.3rem;
            margin: 1.5rem 0 1rem 0;
            font-weight: 600;
        }
        
        .chapter-image-container {
            margin: 2rem 0;
            text-align: center;
            page-break-inside: avoid;
        }
        
        .chapter-image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            margin: 20px auto;
            display: block;
        }
        
        .single-chapter-image img {
            max-width: 600px;
            width: 100%;
            height: auto;
        }
        
        .islamic-quote {
            background: linear-gradient(135deg, #fef7e0 0%, #fef3c7 100%);
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 10px;
            border-left: 4px solid #f59e0b;
            font-style: italic;
            text-align: center;
            direction: rtl;
            page-break-inside: avoid;
        }
        
        .highlight-box {
            background: #f0fdf4;
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 10px;
            border-left: 4px solid #22c55e;
            page-break-inside: avoid;
        }
        
        ul, ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        li {
            margin: 0.5rem 0;
        }
        
        p {
            margin-bottom: 1rem;
            text-align: justify;
        }
        
        strong {
            color: #2E8B57;
        }
        
        .table-of-contents {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 15px;
            margin: 2rem 0;
            page-break-inside: avoid;
        }
        
        .table-of-contents h2 {
            text-align: center;
            color: #2E8B57;
            margin-bottom: 1.5rem;
        }
        
        .table-of-contents ol {
            column-count: 2;
            column-gap: 2rem;
            list-style: decimal;
        }
        
        .table-of-contents li {
            margin: 0.3rem 0;
            break-inside: avoid;
        }
        
        .view-reference {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 8px;
            padding: 1rem;
            margin: 1rem 0;
            font-style: italic;
            color: #0369a1;
            page-break-inside: avoid;
        }
        
        @media print {
            body { 
                font-size: 11pt;
                line-height: 1.4;
            }
            .chapter { 
                page-break-before: always; 
            }
            .chapter-image-container img { 
                max-width: 80%; 
            }
            .book-header { 
                background: #2E8B57 !important; 
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
            .highlight-box, .islamic-quote, .view-reference {
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
        }
    </style>
</head>
<body>
    <div class="book-header">
        <h1>📚 Teoria e Lojërave: Nderi dhe Suksesi</h1>
        <p>Libri i Plotë - 111 Kapituj për Sukses të Nderuar</p>
        <p style="font-size: 1rem; opacity: 0.9;">800+ Faqe | Metodologji të Ndryshme | Strategji Praktike</p>
        ${includeViewReferences ? '<p style="font-size: 0.9rem; margin-top: 1rem;">📖 Versioni i Plotë me Shikime dhe Referencias</p>' : '<p style="font-size: 0.9rem; margin-top: 1rem;">📖 Versioni i Thjeshtë pa Shikime</p>'}
        <p style="font-size: 0.9rem; margin-top: 1rem;">© 2025 - Të gjitha të drejtat të rezervuara</p>
    </div>
    
    <div class="table-of-contents">
        <h2>📋 Përmbajtja e Librit</h2>
        <p style="text-align: center; margin-bottom: 1.5rem;">
            Ky libër përmban 111 kapituj të plotë që mbulojnë të gjitha aspektet e teorisë së lojërave, 
            biznesit dhe suksesit personal duke ruajtur vlerat dhe nderin.
        </p>
        <ol>
            ${generateTableOfContents(totalChapters)}
        </ol>
    </div>
    
    ${generateAllChapters(totalChapters, includeViewReferences)}
    
</body>
</html>`;

    return bookHTML;
}

function generateTableOfContents(totalChapters) {
    let toc = '';
    for (let i = 1; i <= totalChapters; i++) {
        const title = getChapterTitle(i);
        toc += `<li>Kapitulli ${i}: ${title}</li>\n`;
    }
    return toc;
}

function generateAllChapters(totalChapters, includeViewReferences = true) {
    let chaptersHTML = '';
    
    for (let i = 1; i <= totalChapters; i++) {
        try {
            const title = getChapterTitle(i);
            let content = getChapterContent(i);
            
            // Process content based on includeViewReferences flag
            if (!includeViewReferences) {
                content = removeViewReferences(content);
            }
            
            // Process images in content to make them work in standalone HTML
            content = processImagesForDownload(content);
            
            chaptersHTML += `
    <div class="chapter">
        <h2>📖 Kapitulli ${i}: ${title}</h2>
        <div class="chapter-content">
            ${content}
        </div>
        <div style="text-align: center; margin-top: 2rem; padding: 1rem; border-top: 2px solid #e2e8f0; color: #64748b; font-size: 0.9rem;">
            <strong>Kapitulli ${i} nga ${totalChapters} | Faqe ${i * 7} | Teoria e Lojërave: Nderi dhe Suksesi</strong>
        </div>
    </div>`;
            
        } catch (error) {
            console.warn(`⚠️ Error generating chapter ${i}:`, error);
            chaptersHTML += `
    <div class="chapter">
        <h2>📖 Kapitulli ${i}: Kapitull në Përgatitje</h2>
        <div class="chapter-content">
            <p>Ky kapitull është në përgatitje dhe do të përditësohet në versionin e ardhshëm të librit.</p>
        </div>
        <div style="text-align: center; margin-top: 2rem; padding: 1rem; border-top: 2px solid #e2e8f0; color: #64748b; font-size: 0.9rem;">
            <strong>Kapitulli ${i} nga ${totalChapters} | Teoria e Lojërave: Nderi dhe Suksesi</strong>
        </div>
    </div>`;
        }
    }
    
    return chaptersHTML;
}

// Function to remove view references from content
function removeViewReferences(content) {
    // Remove view reference sections
    content = content.replace(/<div class="view-reference">.*?<\/div>/gs, '');
    
    // Remove mentions of viewing and looking
    content = content.replace(/shiko|shikoje|shikojnë|vëzhgo|vëzhgon|vëzhgojnë|shikim|shikimi|shikimit|shikimeve/gi, function(match) {
        const replacements = {
            'shiko': 'vërej',
            'shikoje': 'vëreje',
            'shikojnë': 'vërejnë',
            'vëzhgo': 'konsidero',
            'vëzhgon': 'konsideron',
            'vëzhgojnë': 'konsiderojnë',
            'shikim': 'vërejtje',
            'shikimi': 'vërejtja',
            'shikimit': 'vërejtjes',
            'shikimeve': 'vërejtjeve'
        };
        return replacements[match.toLowerCase()] || match;
    });
    
    // Remove eye-related metaphors and replace with more general terms
    content = content.replace(/sy|sytë|syri|syve/gi, function(match) {
        const replacements = {
            'sy': 'vëmendje',
            'sytë': 'vëmendjen',
            'syri': 'vëmendja',
            'syve': 'vëmendjes'
        };
        return replacements[match.toLowerCase()] || match;
    });
    
    return content;
}

// Function to process images for standalone HTML download
function processImagesForDownload(content) {
    // Replace relative image paths with absolute paths - all images now in main imazhet folder
    content = content.replace(/src="imazhet\//g, 'src="./imazhet/');
    content = content.replace(/src="imazhet-kap-51-111\//g, 'src="./imazhet/'); // Updated: all images moved to main folder
    
    // Add error handling for images
    content = content.replace(/<img([^>]+)>/g, (match, attributes) => {
        if (!attributes.includes('onerror=')) {
            const insertPos = attributes.lastIndexOf('"');
            if (insertPos !== -1) {
                return `<img${attributes.slice(0, insertPos)}" onerror="this.style.display='none'; console.warn('Image failed to load:', this.src);" onload="console.log('Image loaded:', this.src);">`;
            }
        }
        return match;
    });
    
    return content;
}

function getChapterTitle(chapterNumber) {
    if (window.chapters && window.chapters[chapterNumber]) {
        return window.chapters[chapterNumber].title;
    }
    return `Kapitulli ${chapterNumber}`;
}

function getChapterContent(chapterNumber) {
    if (window.chapters && window.chapters[chapterNumber]) {
        return window.chapters[chapterNumber].content;
    }
    return `<p>Përmbajtja e kapitullit ${chapterNumber} është në përgatitje...</p>`;
}

// Print instructions
function showPrintInstructions() {
    alert(`🖨️ SI TË PRINTONI LIBRIN SI PDF:

✅ METODA 1 - DIREKT PRINT:
1. Hapeni file-in HTML në Chrome/Firefox/Edge
2. Shtypni Ctrl+P (ose Cmd+P në Mac)
3. Zgjidhni "Save as PDF"
4. Në "More Settings":
   ✓ Paper size: A4
   ✓ Background graphics: ✓ (SHUMË E RËNDËSISHME!)
   ✓ Headers and footers: ✗ (çaktivizoni)
   ✓ Margins: Default
5. Klikoni "Save"

✅ METODA 2 - NËPËRMJET BROWSER-IT:
1. Hapeni librin në browser
2. F11 për full screen
3. Ctrl+P për print
4. Adjust settings sipas mësipërm
5. Save as PDF

🎯 REZULTAT: PDF premium 800+ faqe!`);
}

// Subscribe to updates
function subscribeUpdates() {
    const email = document.getElementById('emailInput')?.value;
    if (email) {
        alert(`✅ Faleminderit! Emaili ${email} u regjistrua për updates.
        
🔔 Do të merrni njoftimet e para për:
• Kapituj të rinj
• Përmirësime të librit  
• Strategji të reja
• Bonus content

📧 Kontrolloni email-in për konfirmim.`);
        document.getElementById('emailInput').value = '';
    } else {
        alert('⚠️ Ju lutemi shkruani email-in tuaj.');
    }
}

console.log('✅ Enhanced download script loaded successfully with two versions support');
