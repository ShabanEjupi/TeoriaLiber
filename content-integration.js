// Enhanced Content Integration - Ensures proper loading and generation
// This file ensures all content generators work together properly

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Enhanced content system loading...');
    
    // Verify that advanced content generators are loaded
    if (typeof generateAdvancedChapterContent === 'function') {
        console.log('✅ Advanced content generator loaded');
    } else {
        console.warn('⚠️ Advanced content generator not found - falling back to default');
    }
    
    if (typeof generateAcademicContent === 'function') {
        console.log('✅ Additional content methods loaded');
    } else {
        console.warn('⚠️ Additional content methods not found');
    }
    
    // Override the original generateChapterContent function
    if (typeof generateAdvancedChapterContent === 'function') {
        window.originalGenerateChapterContent = window.generateChapterContent;
        window.generateChapterContent = function(chapterNum, title) {
            try {
                return generateAdvancedChapterContent(chapterNum, title);
            } catch (error) {
                console.warn(`⚠️ Error generating advanced content for chapter ${chapterNum}, falling back:`, error);
                if (typeof window.originalGenerateChapterContent === 'function') {
                    return window.originalGenerateChapterContent(chapterNum, title);
                }
                return generateDefaultChapterContent(chapterNum, title);
            }
        };
        console.log('✅ Enhanced content generation system activated');
    }
    
    // Update page count information throughout the site
    updatePageCountInformation();
    
    console.log('🎯 Enhanced content system ready!');
});

// Function to update page count information
function updatePageCountInformation() {
    const pageCountElements = document.querySelectorAll('[data-page-count]');
    pageCountElements.forEach(element => {
        element.textContent = '400+ faqe';
    });
    
    // Update any hardcoded "300" references
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.textContent && element.textContent.includes('300+ faqe')) {
            element.textContent = element.textContent.replace('300+ faqe', '400+ faqe');
        }
        if (element.textContent && element.textContent.includes('300 Faqe')) {
            element.textContent = element.textContent.replace('300 Faqe', '400+ Faqe');
        }
    });
}

// Default content generator as fallback
function generateDefaultChapterContent(chapterNum, title) {
    return `
        <h2>Kapitulli ${chapterNum}: ${title}</h2>
        
        <div class="ai-prompt-box">
            <h4>🤖 Prompt për ChatGPT:</h4>
            <p>"Create professional Albanian business scene illustrating ${title.toLowerCase()}, success elements, traditional values integration. Style: modern, successful, ethical business environment."</p>
        </div>

        <h3>🎯 Përmbajtja e Kapitullit</h3>
        
        <p>Ky kapitull trajton ${title.toLowerCase()} në mënyrë të thellë dhe praktike. Do të mësoni strategji konkrete që mund t'i aplikoni menjëherë në jetën tuaj profesionale dhe personale.</p>

        <div class="islamic-quote">
            "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ"
            <br><br>
            "Dhe kush i mbështetet Allahut, Ai është i mjaftueshëm për të." - Kurani, 65:3
        </div>

        <h3>📚 Konceptet Kryesore</h3>
        
        <p>Çdo koncept në këtë kapitull është i bazuar në principet e teorisë së lojërave dhe është i verifikuar nga praktikat më të mira të biznesit modern. Fokusi kryesor është në krijimin e vlerës afatgjate duke ruajtur integritetin dhe vlerat islame.</p>

        <div class="highlight-box">
            <h4>💡 Pikat Kyçe:</h4>
            <ul>
                <li>Strategjitë e verifikuara për ${title.toLowerCase()}</li>
                <li>Implementimi praktik në jetën e përditshme</li>
                <li>Integrimi me vlerat tradicionale shqiptare</li>
                <li>Përshtatja me principet islame</li>
                <li>Matja e suksesit dhe progresit</li>
            </ul>
        </div>

        <h3>🚀 Plan Veprimi</h3>
        
        <p>Për të maksimizuar vlerën e këtij kapitulli:</p>
        
        <ol>
            <li><strong>Studioni konceptet teorike</strong> me kujdes</li>
            <li><strong>Aplikoni strategjitë</strong> gradualisht në jetën tuaj</li>
            <li><strong>Monitoroni rezultatet</strong> dhe bëni përshtatje</li>
            <li><strong>Ndani eksperiencën</strong> me të tjerët për të përforcuar mësimin</li>
        </ol>

        <h3>📊 Matja e Suksesit</h3>
        
        <p>Suksesi në ${title.toLowerCase()} matet përmes:</p>
        
        <ul>
            <li>Përmirësimit të rezultateve të matshme</li>
            <li>Rritjes së kënaqësisë personale</li>
            <li>Forcimit të marrëdhënieve</li>
            <li>Kontributit pozitiv në komunitet</li>
        </ul>

        <div class="next-steps">
            <h4>➡️ Hapat e Ardhshëm</h4>
            <p>Pas leximit të këtij kapitulli, vazhdoni me kapitullin vijues për të thelluar njohuritë tuaja dhe për të ndërtuar një sistem të plotë suksesi.</p>
        </div>
    `;
}

// Export functions for global use
window.updatePageCountInformation = updatePageCountInformation;
window.generateDefaultChapterContent = generateDefaultChapterContent;

console.log('✅ Enhanced content integration system loaded');
