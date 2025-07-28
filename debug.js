// Debug script to check variables
console.log('=== DEBUG INFORMATION ===');
console.log('window.totalChapters:', window.totalChapters);
console.log('totalChapters:', typeof totalChapters !== 'undefined' ? totalChapters : 'undefined');
console.log('window.chapters:', typeof window.chapters !== 'undefined' ? 'defined' : 'undefined');
console.log('chapters:', typeof chapters !== 'undefined' ? 'defined' : 'undefined');

// Check all elements that might contain "Kapituj"
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== CHECKING PAGE CONTENT FOR KAPITUJ ===');
    const allElements = document.querySelectorAll('*');
    let foundElements = [];
    
    allElements.forEach(element => {
        if (element.textContent && element.textContent.includes('Kapituj')) {
            foundElements.push({
                element: element.tagName,
                text: element.textContent.trim(),
                id: element.id,
                class: element.className
            });
        }
    });
    
    console.log('Elements containing "Kapituj":', foundElements);
    
    // Check if title is being updated anywhere
    const originalTitle = document.title;
    console.log('Original page title:', originalTitle);
    
    // Watch for title changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.nodeType === Node.TEXT_NODE) {
                const text = mutation.target.textContent;
                if (text && text.includes('Kapituj')) {
                    console.log('Title/content changed:', text);
                }
            }
        });
    });
    
    observer.observe(document, { 
        childList: true, 
        subtree: true, 
        characterData: true 
    });
});
