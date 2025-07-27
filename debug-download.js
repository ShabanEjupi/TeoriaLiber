// Debug version to find the download issue
function testDownload() {
    try {
        console.log('Testing download function...');
        
        // Test if required functions exist
        if (typeof getChapterTitle !== 'function') {
            console.error('❌ getChapterTitle function not found');
            return;
        }
        
        if (typeof chapters === 'undefined') {
            console.error('❌ chapters variable not found');
            return;
        }
        
        if (typeof generateChapterContent !== 'function') {
            console.error('❌ generateChapterContent function not found');
            return;
        }
        
        if (typeof totalChapters === 'undefined') {
            console.error('❌ totalChapters variable not found');
            return;
        }
        
        console.log('✅ All required functions and variables found');
        console.log('Total chapters:', totalChapters);
        
        // Test generating a simple HTML
        console.log('Testing simple HTML generation...');
        let testHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Test Book</title>
</head>
<body>
    <h1>Test Book</h1>
    <p>This is a test.</p>
</body>
</html>`;
        
        console.log('✅ Simple HTML generated');
        
        // Test blob creation
        console.log('Testing blob creation...');
        const blob = new Blob([testHTML], { type: 'text/html;charset=utf-8' });
        console.log('✅ Blob created successfully');
        
        // Test URL creation
        console.log('Testing URL creation...');
        const url = window.URL.createObjectURL(blob);
        console.log('✅ URL created successfully');
        
        // Test download element creation
        console.log('Testing download element...');
        const a = document.createElement('a');
        a.href = url;
        a.download = 'test-download.html';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        console.log('✅ Test download completed successfully!');
        alert('✅ Test download successful! Check your downloads folder for test-download.html');
        
    } catch (error) {
        console.error('❌ Test download failed:', error);
        alert('❌ Test failed: ' + error.message);
    }
}

// Simplified download function without complex HTML generation
function simpleDownloadBook() {
    try {
        console.log('Starting simple book download...');
        
        // Show loading state
        const downloadBtns = document.querySelectorAll('[onclick*="downloadBook"]');
        downloadBtns.forEach(btn => {
            btn.textContent = '⏳ Po krijohet libri...';
            btn.disabled = true;
        });
        
        // Generate simple book content without complex loops
        let bookHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Teoria e Lojërave - Libri i Plotë</title>
    <style>
        body { font-family: Georgia, serif; line-height: 1.6; color: #333; padding: 20px; }
        h1 { color: #2E8B57; border-bottom: 3px solid #DAA520; padding-bottom: 10px; }
        h2 { color: #2E8B57; }
        .highlight-box { background: #fff7e6; border: 2px solid #DAA520; padding: 20px; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>TEORIA E LOJËRAVE: Nderi dhe Suksesi</h1>
    <div class="highlight-box">
        <h2>📚 Libër i Plotë për Biznesin Modern</h2>
        <p>Ky libër përmban 60 kapituj të detajuar për suksesin në biznes duke ruajtur vlerat islame.</p>
    </div>
    
    <h2>Përmbajtja</h2>`;

        // Add a simple table of contents
        for (let i = 1; i <= Math.min(totalChapters, 60); i++) {
            try {
                const title = getChapterTitle(i);
                bookHTML += `<p><strong>Kapitulli ${i}:</strong> ${title}</p>\n`;
            } catch (e) {
                bookHTML += `<p><strong>Kapitulli ${i}:</strong> Kapitull i rëndësishëm për biznesin</p>\n`;
            }
        }
        
        bookHTML += `
    <h2>Mesazhi Kryesor</h2>
    <div class="highlight-box">
        <p>Suksesi më i madh është ai që arrihet duke ruajtur nderin dhe vlerat që na përcaktojnë si njerëz.</p>
    </div>
    
    <p style="text-align: center; margin-top: 40px;">
        © 2025 - Teoria e Lojërave: Nderi dhe Suksesi
    </p>
</body>
</html>`;

        // Create download
        const blob = new Blob([bookHTML], { type: 'text/html;charset=utf-8' });
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
        
        alert('✅ Libri u shkarkua me sukses! Kontrollo dosjen e shkarkimeve.');
        
    } catch (error) {
        console.error('Simple download error:', error);
        alert('❌ Gabim në shkarkimin e librit: ' + error.message);
        
        // Reset buttons
        const downloadBtns = document.querySelectorAll('[onclick*="downloadBook"]');
        downloadBtns.forEach(btn => {
            btn.textContent = 'Shkarko Librin e Plotë 📚';
            btn.disabled = false;
        });
    }
}

// Override the global functions with debug versions
window.testDownload = testDownload;
window.simpleDownloadBook = simpleDownloadBook;

console.log('🔧 Debug download functions loaded');
