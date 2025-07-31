// Enhanced Content Integration - Ensures proper loading and generation
// This file ensures all content generators work together properly

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Enhanced content system loading...');
    
    // Verify that required variables are accessible
    setTimeout(() => {
        console.log('🔄 Testing required variables...');
        if (typeof window.chapters !== 'undefined') {
            console.log('✅ chapters variable found');
        } else {
            console.log('❌ chapters variable NOT found');
        }
        
        if (typeof window.totalChapters !== 'undefined') {
            console.log('✅ totalChapters variable found');
        } else {
            console.log('❌ totalChapters variable NOT found');
        }
        
        // Test if generateChapterContent function exists
        if (typeof window.generateChapterContent === 'function') {
            console.log('✅ generateChapterContent function exists');
        } else {
            console.log('❌ generateChapterContent function NOT found');
        }
    }, 100);
    
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

        <div class="islamic-quote">
            "وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَىٰ مَا مَتَّعْنَا بِهِ أَزْوَاجًا مِّنْهُمْ زَهْرَةَ الْحَيَاةِ الدُّنْيَا لِنَفْتِنَهُمْ فِيهِ"
            <br><br>
            "Dhe mos i ngjit sytë tek ajo që Ne ua kemi dhënë disa prej tyre si stoli të jetës së kësaj bote, që t'i sprovojmë me të." - Kurani, 20:131
        </div>

        <div class="islamic-quote">
            "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ"
            <br><br>
            "Thuaju besimtarëve t'i ulin sytë dhe t'i ruajnë nderin e tyre. Kjo është më e pastër për ta." - Kurani, 24:30
        </div>

        <div class="highlight-box">
            <h4>💡 Pikat Kyçe:</h4>
            <ul>
                <li>Strategjitë e verifikuara për ${title.toLowerCase()}</li>
                <li>Implementimi praktik në jetën e përditshme</li>
                <li>Integrimi me vlerat tradicionale shqiptare</li>
                <li>Përshtatja me principet islame</li>
                <li>Matja e suksesit dhe progresit</li>
                <li>Përgjegjësia shoqërore dhe ndihmimi i të shtypurve</li>
            </ul>
        </div>

        <h3>🌍 Përgjegjësia për Drejtësinë</h3>
        
        <p>Jeta në këtë botë nuk është vetëm për suksesin personal. Ne kemi përgjegjësi ndaj komunitetit tonë dhe ndaj njerëzimit në përgjithësi. Situata në Palestinë na kujton se duhet të përdorim njohuritë dhe aftësitë tona për t'i ndihmuar ata që vuajnë.</p>

        <div class="islamic-quote">
            "وَمَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا"
            <br><br>
            "Dhe kush vret një njeri pa vrarë një njeri (tjetër) ose pa bërë çrregullim në tokë, është sikur të ketë vrarë tërë njerëzimin." - Kurani, 5:32
        </div>

        <p>Mund të mësojmë nga shembulli i Kosovës se si mekanizmat juridikë ndërkombëtarë, edhe pse kontroversë si letra e Ahtisarit për Gjykatën Speciale, mund të përdoren për drejtësi. Ne mund t'i përdorim këto njohuri për t'i ndihmuar palestinezët që po vriten vazhdimisht.</p>

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

// Special function for generating justice and humanitarian content
function generateJusticeChapterContent(chapterNum, title) {
    return `
        <h2>Kapitulli ${chapterNum}: ${title}</h2>
        
        <div class="ai-prompt-box">
            <h4>🤖 Prompt për ChatGPT:</h4>
            <p>"Create justice and humanitarian scene: Albanian professional working with international documents for Palestine, scales of justice, Islamic symbols, maps showing strategic locations, golden light representing hope and justice. Style: serious, compassionate, strategic."</p>
        </div>

        <h3>🌍 Jeta në Tokë: Ibadeti dhe Përgjegjësia</h3>
        
        <p>Jeta në këtë botë nuk është vetëm për suksesin personal - është për ibadet dhe për ndihmimin e atyre që vuajnë. Ne kemi përgjegjësi ndaj komunitetit tonë dhe ndaj njerëzimit në përgjithësi.</p>

        <div class="islamic-quote">
            "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ"
            <br><br>
            "Dhe nuk i krijova xhinët dhe njerëzit veçse që të më adhurojnë." - Kurani, 51:56
        </div>

        <p>Ibadeti nuk përfshin vetëm namazin dhe agjërimin - përfshin edhe drejtësinë, ndihmimin e të varfërve, dhe mbrojtjen e të pafajshmëve.</p>

        <h3>🇵🇸 Kriza në Palestinë: Thirrje për Veprim</h3>
        
        <p>Palestinezët po vriten çdo ditë, dhe ne si muslimanë dhe njerëz me nder kemi përgjegjësi të veprimit. Duhet të gjejmë mënyra strategjike për t'i ndihmuar.</p>

        <div class="islamic-quote">
            "وَمَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا"
            <br><br>
            "Dhe kush vret një njeri pa vrarë një njeri (tjetër) ose pa bërë çrregullim në tokë, është sikur të ketë vrarë tërë njerëzimin." - Kurani, 5:32
        </div>

        <h3>⚖️ Strategji Juridike: Mësimi nga Kosova</h3>
        
        <p>Shembulli i Kosovës na mëson se si mund të përdoren mekanizmat juridikë ndërkombëtarë. Letra e Ahtisarit që hapi Gjykatën Speciale, edhe pse kontroverse për ne, na tregon se si mund të përdoren instrumentet juridike.</p>

        <div class="highlight-box">
            <h4>🏛️ Strategji për Drejtësi:</h4>
            <ul>
                <li><strong>Dokumentimi:</strong> Regjistrimi i krimit të luftës</li>
                <li><strong>Gjykata Ndërkombëtare:</strong> Paraqitja e rasteve</li>
                <li><strong>Presioni Diplomatik:</strong> Angazhimi i vendeve</li>
                <li><strong>Gjykatat Europiane:</strong> Përdorimi i sistemit juridik</li>
                <li><strong>Lobimi Juridik:</strong> Angazhimi i avokatëve ndërkombëtarë</li>
            </ul>
        </div>

        <div class="islamic-quote">
            "وَجَعَلْنَا مِنْهُمْ أَئِمَّةً يَهْدُونَ بِأَمْرِنَا لَمَّا صَبَرُوا وَكَانُوا بِآيَاتِنَا يُوقِنُونَ"
            <br><br>
            "Dhe bëmë prej tyre udhëheqës që udhëzonin me urdhrin Tonë kur duruan dhe ishin të bindur për shenjat Tona." - Kurani, 32:24
        </div>

        <h3>🤝 Veprime të Mundshme</h3>
        
        <ol>
            <li><strong>Dokumentimi:</strong> Mbledhja e provave</li>
            <li><strong>Lobimi:</strong> Kontaktimi i avokatëve ndërkombëtarë</li>
            <li><strong>Financimi:</strong> Mbështetja e OJQ-ve</li>
            <li><strong>Ndërgjegjësimi:</strong> Përdorimi i mediave</li>
            <li><strong>Presioni Ekonomik:</strong> Bojkotimi strategjik</li>
            <li><strong>Angazhimi Politik:</strong> Presioni mbi politikanët</li>
        </ol>

        <div class="highlight-box">
            <h4>💡 Mesazhi Kyç:</h4>
            <p><strong>Suksesi i vërtetë përfshin përgjegjësinë për drejtësinë dhe ndihmimin e atyre që vuajnë. Teoria e lojërave na mëson se strategjia më e mirë krijon përfitime për të gjithë.</strong></p>
        </div>
    `;
}

// Export functions for global use
window.updatePageCountInformation = updatePageCountInformation;
window.generateDefaultChapterContent = generateDefaultChapterContent;

console.log('✅ Enhanced content integration system loaded');
