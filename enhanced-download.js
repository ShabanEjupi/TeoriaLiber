// Download Fix with Image Integration
// This script ensures images are properly included in downloaded content

function createEnhancedDownloadableBook() {
    console.log('📚 Creating enhanced downloadable book with images...');
    
    // Get the book title and basic info
    const bookTitle = "Teoria e Lojërave: Nderi dhe Suksesi";
    const subtitle = "Libër i Plotë me 111 Kapituj për Suksesin e Nderuar";
    
    // Create enhanced CSS for download
    const downloadCSS = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                line-height: 1.7;
                color: #2d3748;
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
                background: white;
            }
            
            .book-header {
                text-align: center;
                margin-bottom: 3rem;
                padding: 2rem;
                background: linear-gradient(135deg, #2E8B57 0%, #006400 100%);
                color: white;
                border-radius: 15px;
            }
            
            .book-header h1 {
                font-size: 2.5rem;
                margin: 0 0 0.5rem 0;
                font-weight: 800;
            }
            
            .book-header p {
                font-size: 1.2rem;
                opacity: 0.9;
                margin: 0;
            }
            
            .chapter {
                margin-bottom: 4rem;
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
            }
            
            .chapter h3 {
                color: #006400;
                font-size: 1.3rem;
                margin: 2rem 0 1rem 0;
                font-weight: 600;
            }
            
            .chapter-image-gallery {
                margin: 2rem 0;
                text-align: center;
            }
            
            .chapter-image-gallery img {
                max-width: 100%;
                height: auto;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                margin: 20px auto;
                display: block;
            }
            
            .islamic-quote {
                background: linear-gradient(135deg, #fef7e0 0%, #fef3c7 100%);
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 10px;
                border-left: 4px solid #f59e0b;
                font-style: italic;
                text-align: center;
                direction: rtl;
            }
            
            .highlight-box {
                background: #f0fdf4;
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 10px;
                border-left: 4px solid #22c55e;
            }
            
            .quote-box {
                background: #f8fafc;
                padding: 1.5rem;
                margin: 1rem 0;
                border-radius: 10px;
                border-left: 4px solid #2E8B57;
            }
            
            .enhanced-content {
                background: linear-gradient(135deg, #2E8B5710, #00640010);
                padding: 1.5rem;
                border-radius: 10px;
                margin: 1.5rem 0;
            }
            
            .key-concepts {
                background: #f8fafc;
                padding: 1.5rem;
                border-radius: 10px;
                margin: 1.5rem 0;
            }
            
            .key-concepts h4 {
                color: #2E8B57;
                margin-bottom: 1rem;
            }
            
            @media print {
                body { font-size: 12pt; }
                .chapter { page-break-before: always; }
                .chapter-image-gallery img { max-width: 80%; }
                .book-header { background: #2E8B57 !important; }
            }
        </style>
    `;
    
    // Create the book header
    const bookHeader = `
        <div class="book-header">
            <h1>📚 ${bookTitle}</h1>
            <p>${subtitle}</p>
            <div style="margin-top: 1rem; font-size: 1rem;">
                📊 111 Kapituj • 🎯 800+ Faqe • 💡 1000+ Strategji • 🕌 Vlera Islame
            </div>
            <div style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                Shkarkuar më: ${new Date().toLocaleDateString('sq-AL')} | Versioni: 1.0
            </div>
        </div>
    `;
    
    // Generate table of contents
    let tableOfContents = `
        <div style="background: white; padding: 2rem; border-radius: 15px; margin-bottom: 3rem; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h2 style="color: #2E8B57; text-align: center; margin-bottom: 2rem;">📋 Përmbajtja e Librit</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
    `;
    
    // Build complete book content
    let completeBookContent = '';
    
    // Process all chapters
    for (let i = 1; i <= Object.keys(chapters).length; i++) {
        if (chapters[i]) {
            // Add to table of contents
            const chapterTitle = chapters[i].title || `Kapitulli ${i}`;
            tableOfContents += `
                <div style="padding: 0.5rem; border-bottom: 1px solid #e2e8f0;">
                    <strong>Kapitulli ${i}:</strong> ${chapterTitle}
                </div>
            `;
            
            // Process chapter content to ensure images work in download
            let chapterContent = chapters[i].content;
            
            // Fix image paths for local viewing
            chapterContent = chapterContent.replace(/src="imazhet\//g, 'src="./imazhet/');
            
            // Add chapter to complete content
            completeBookContent += `
                <div class="chapter" id="chapter-${i}">
                    ${chapterContent}
                </div>
            `;
        }
    }
    
    tableOfContents += `
            </div>
        </div>
    `;
    
    // Additional content sections
    const additionalSections = `
        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 2rem; border-radius: 15px; margin: 3rem 0;">
            <h2 style="color: #15803d; text-align: center; margin-bottom: 2rem;">✨ Si të Përdorni Këtë Libër</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                <div style="background: white; padding: 1.5rem; border-radius: 10px;">
                    <h4 style="color: #15803d; margin-bottom: 1rem;">📖 Lexim</h4>
                    <p>Çdo kapitull është i pavarur dhe mund të lexohet veçmas. Filloni nga temat që ju interesojnë më shumë.</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 10px;">
                    <h4 style="color: #15803d; margin-bottom: 1rem;">🎯 Aplikim</h4>
                    <p>Për çdo kapitull, aplikoni të paktën një strategji të re brenda 24 orëve nga leximi.</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 10px;">
                    <h4 style="color: #15803d; margin-bottom: 1rem;">📝 Shënime</h4>
                    <p>Mbani shënime për objektivat tuaja dhe progresin që bëni me çdo kapitull.</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 10px;">
                    <h4 style="color: #15803d; margin-bottom: 1rem;">🔄 Përsëritje</h4>
                    <p>Rikthehuni tek kapitujt e rëndësishëm dhe përditësoni strategjitë tuaja.</p>
                </div>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); padding: 2rem; border-radius: 15px; margin: 3rem 0;">
            <h2 style="color: #be185d; text-align: center; margin-bottom: 2rem;">🎯 Objektivat Tuaja për 5 Vitet e Ardhshme</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div style="background: white; padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <h4 style="color: #be185d;">Viti 1</h4>
                    <p>Biznes i suksesshëm<br>30% rritje të ardhurave</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <h4 style="color: #be185d;">Viti 2</h4>
                    <p>Mercedes C-Class<br>BMW Seria 3</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <h4 style="color: #be185d;">Viti 3</h4>
                    <p>Shtëpia e parë<br>100,000€+</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <h4 style="color: #be185d;">Viti 4</h4>
                    <p>Martesa e lumtur<br>Stabilitet familjar</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <h4 style="color: #be185d;">Viti 5</h4>
                    <p>Mercedes S-Class<br>Status milioneri</p>
                </div>
            </div>
        </div>
    `;
    
    // Create the complete HTML document
    const completeHTML = `
        <!DOCTYPE html>
        <html lang="sq">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${bookTitle} - Libri i Plotë</title>
            ${downloadCSS}
        </head>
        <body>
            ${bookHeader}
            ${tableOfContents}
            ${additionalSections}
            ${completeBookContent}
            
            <div style="text-align: center; margin: 3rem 0; padding: 2rem; background: #f8fafc; border-radius: 15px;">
                <h3 style="color: #2E8B57;">🌟 Faleminderit që përdorni "Teoria e Lojërave: Nderi dhe Suksesi"</h3>
                <p style="font-style: italic; color: #666;">
                    "Sukesi më i madh është të fitosh duke ruajtur nderin"
                </p>
                <div style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                    © 2025 Game Theory Albania | Të gjitha të drejtat e rezervuara
                </div>
            </div>
        </body>
        </html>
    `;
    
    return completeHTML;
}

// Enhanced download function
function downloadEnhancedBook() {
    try {
        console.log('📥 Starting enhanced book download...');
        
        const bookHTML = createEnhancedDownloadableBook();
        const blob = new Blob([bookHTML], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Teoria-e-Lojrave-Nderi-dhe-Suksesi-KOMPLET.html';
        a.style.display = 'none';
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
        
        // Show success message
        showDownloadSuccess();
        
        console.log('✅ Enhanced book download completed!');
    } catch (error) {
        console.error('❌ Download failed:', error);
        alert('Ka ndodhur një gabim gjatë shkarkimit. Ju lutem provoni përsëri.');
    }
}

// Show download success message
function showDownloadSuccess() {
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #22c55e, #16a34a);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        font-size: 1rem;
        min-width: 300px;
        text-align: center;
    `;
    
    successMessage.innerHTML = `
        ✅ Libri u shkarkua me sukses!<br>
        <small style="opacity: 0.9;">Kontrolloni skedarin HTML në dosjen Downloads</small>
    `;
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        document.body.removeChild(successMessage);
    }, 5000);
}

// Override the existing download function
function downloadBook() {
    downloadEnhancedBook();
}

// Export for use
window.EnhancedDownload = {
    downloadEnhancedBook,
    createEnhancedDownloadableBook
};

console.log('💾 Enhanced Download System Loaded - Now includes proper image integration!');
