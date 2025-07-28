// Enhanced functionality for the Game Theory book website

// Reading progress bar
function updateReadingProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    let progressBar = document.querySelector('.reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);
    }
    progressBar.style.width = scrolled + '%';
}

// Scroll to top button
function setupScrollToTop() {
    let scrollButton = document.querySelector('.scroll-to-top');
    if (!scrollButton) {
        scrollButton = document.createElement('button');
        scrollButton.className = 'scroll-to-top';
        scrollButton.innerHTML = '↑';
        scrollButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(scrollButton);
    }
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
}

// Enhanced chapter filtering with animations
function filterChapters(category) {
    const allCards = document.querySelectorAll('.chapter-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards with animation
    allCards.forEach((card, index) => {
        const chapterNum = parseInt(card.querySelector('.chapter-number').textContent.replace('Kapitulli ', ''));
        let shouldShow = false;
        
        switch(category) {
            case 'all':
                shouldShow = true;
                break;
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
                shouldShow = chapterNum >= 41 && chapterNum <= 50;
                break;
        }
        
        if (shouldShow) {
            card.style.display = 'block';
            card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
        } else {
            card.style.animation = 'fadeOut 0.3s ease both';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Enhanced smooth scrolling
function scrollToChapters() {
    const chaptersSection = document.getElementById('chapters');
    if (chaptersSection) {
        chaptersSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced email subscription
function subscribeUpdates() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Ju lutem shkruani email-in tuaj!');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Ju lutem shkruani një email të vlefshëm!');
        return;
    }
    
    // Simulate subscription (in real app, this would call an API)
    const button = event.target;
    const originalText = button.textContent;
    
    button.textContent = 'Po regjistrohet...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = '✅ U regjistrua!';
        button.style.background = '#10b981';
        emailInput.value = '';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 3000);
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced print instructions
function showPrintInstructions() {
    const instructions = `
📖 Udhëzime për Printim Profesional si PDF:

1️⃣ SHKARKO KAPITULLIN:
   • Klikoni "Lexo" në kapitullin që dëshironi
   • Klikoni butonin "💾 Shkarko si HTML"
   • File-i do të shkarkohet në kompjuterin tuaj

2️⃣ HAP NË BROWSER:
   • Gjeni file-in e shkarkuar
   • Hapeni me Chrome, Firefox ose Edge
   • Prisni që të ngarkojë plotësisht

3️⃣ PRINTO SI PDF:
   • Shtypni Ctrl+P (Windows) ose Cmd+P (Mac)
   • Zgjidhni "Save as PDF" si printer
   • Në "More settings":
     ✅ Aktivizoni "Background graphics"
     ✅ Zgjidhni "A4" paper size
     ✅ Margins: "Minimum"

4️⃣ RUANI PDF:
   • Klikoni "Save"
   • Zgjidhni emrin dhe vendndodhjen
   • Gata! PDF profesional i gatshëm për printim

💡 TIP: Për cilësi më të mirë, printoni kapituj individualë në vend të librit të plotë.

✨ Rezultati: PDF me cilësi të lartë, formatim perfekt, dhe design profesional!
    `;
    
    alert(instructions);
}

// Auto-save reading progress
function saveReadingProgress(chapterNum) {
    localStorage.setItem('lastChapter', chapterNum);
    localStorage.setItem('lastVisit', new Date().toISOString());
}

function loadReadingProgress() {
    const lastChapter = localStorage.getItem('lastChapter');
    const lastVisit = localStorage.getItem('lastVisit');
    
    if (lastChapter && lastVisit) {
        const daysSinceVisit = Math.floor((new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        
        if (daysSinceVisit < 7) { // Show notification if visited within last week
            const notification = document.createElement('div');
            notification.innerHTML = `
                <div style="position: fixed; top: 100px; right: 20px; background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a; padding: 1rem 1.5rem; border-radius: 15px; box-shadow: 0 10px 30px rgba(251,191,36,0.3); z-index: 10000; max-width: 300px; animation: slideInLeft 0.5s ease;">
                    <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem;">📚 Mirë se erdhët përsëri!</h4>
                    <p style="margin: 0 0 1rem 0; font-size: 0.9rem;">Kapitulli i fundit: ${lastChapter}</p>
                    <div style="display: flex; gap: 0.5rem;">
                        <button onclick="showChapter(${lastChapter}); this.parentElement.parentElement.parentElement.remove();" style="background: #0f172a; color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem;">Vazhdo Leximin</button>
                        <button onclick="this.parentElement.parentElement.parentElement.remove();" style="background: rgba(255,255,255,0.2); color: #0f172a; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem;">Mbyll</button>
                    </div>
                </div>
            `;
            document.body.appendChild(notification);
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 10000);
        }
    }
}

// Enhanced chapter statistics
function updateChapterStats() {
    let readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');
    let timeSpent = JSON.parse(localStorage.getItem('timeSpent') || '{}');
    
    // Create stats display
    const statsDisplay = document.createElement('div');
    statsDisplay.innerHTML = `
        <div style="position: fixed; bottom: 20px; left: 20px; background: rgba(15,23,42,0.95); color: white; padding: 1rem; border-radius: 15px; backdrop-filter: blur(10px); z-index: 1000; max-width: 250px;">
            <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">📊 Progresi Juaj</h4>
            <p style="margin: 0; font-size: 0.9rem;">Kapituj të lexuar: ${readChapters.length}/60</p>
            <div style="background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px; margin: 0.5rem 0; overflow: hidden;">
                <div style="background: #fbbf24; height: 100%; width: ${(readChapters.length / 60) * 100}%; border-radius: 4px; transition: width 0.3s ease;"></div>
            </div>
            <p style="margin: 0; font-size: 0.8rem; opacity: 0.8;">${Math.round((readChapters.length / 60) * 100)}% kompletuar</p>
        </div>
    `;
    
    // Only show if user has read at least one chapter
    if (readChapters.length > 0) {
        document.body.appendChild(statsDisplay);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (statsDisplay.parentElement) {
                statsDisplay.remove();
            }
        }, 5000);
    }
}

// Mark chapter as read
function markChapterAsRead(chapterNum) {
    let readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');
    if (!readChapters.includes(chapterNum)) {
        readChapters.push(chapterNum);
        localStorage.setItem('readChapters', JSON.stringify(readChapters));
    }
}

// Enhanced search functionality
function addSearchFeature() {
    const searchContainer = document.createElement('div');
    searchContainer.innerHTML = `
        <div style="text-align: center; margin: 2rem 0;">
            <input type="text" id="chapterSearch" placeholder="🔍 Kërko kapituj..." style="padding: 12px 20px; font-size: 1rem; border: 2px solid #e5e7eb; border-radius: 50px; width: 100%; max-width: 400px; transition: all 0.3s ease;">
        </div>
    `;
    
    const chaptersSection = document.querySelector('.chapters .container');
    const heading = chaptersSection.querySelector('h2');
    heading.insertAdjacentElement('afterend', searchContainer);
    
    const searchInput = document.getElementById('chapterSearch');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.chapter-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.chapter-title').textContent.toLowerCase();
            const number = card.querySelector('.chapter-number').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || number.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease both';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update filter buttons state
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    });
    
    // Enhanced search input styling
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#fbbf24';
        this.style.boxShadow = '0 0 0 3px rgba(251,191,36,0.1)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#e5e7eb';
        this.style.boxShadow = 'none';
    });
}

// Initialize all enhancements when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll listeners
    window.addEventListener('scroll', updateReadingProgress);
    
    // Setup enhanced features
    setupScrollToTop();
    
    // Load user progress
    setTimeout(() => {
        loadReadingProgress();
        updateChapterStats();
    }, 1000);
    
    // Add search feature after chapters are loaded
    setTimeout(() => {
        addSearchFeature();
    }, 2000);
});

// Enhanced chapter loading with better UX
const originalShowChapter = window.showChapter;
window.showChapter = function(chapterNumber) {
    // Save progress
    saveReadingProgress(chapterNumber);
    markChapterAsRead(chapterNumber);
    
    // Call original function
    if (originalShowChapter) {
        originalShowChapter(chapterNumber);
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update stats after a short delay
    setTimeout(() => {
        updateChapterStats();
    }, 500);
};

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to go back to chapters
    if (e.key === 'Escape') {
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.click();
        }
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft') {
        const prevBtn = document.querySelector('.prev-btn');
        if (prevBtn) {
            prevBtn.click();
        }
    }
    
    if (e.key === 'ArrowRight') {
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.click();
        }
    }
});

// Performance monitoring
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        
        console.log(`📊 Koha e ngarkimit: ${loadTime}ms`);
        
        // Log to analytics if needed
        if (loadTime > 3000) {
            console.warn('⚠️ Ngarkimi i ngadaltë i faqes');
        }
    }
}

// Initialize performance monitoring
window.addEventListener('load', logPerformance);

console.log('🚀 Enhanced Game Theory Book - Loaded successfully!');
