// Test Navigation Functions
console.log('Testing navigation system...');
console.log('Current chapter:', currentChapter);
console.log('Total chapters:', totalChapters);

// Test if functions are available
console.log('previousChapter function:', typeof window.previousChapter);
console.log('nextChapter function:', typeof window.nextChapter);
console.log('showChapter function:', typeof window.showChapter);
console.log('updateNavigationButtons function:', typeof window.updateNavigationButtons);

// Test navigation buttons elements
console.log('Previous button element:', document.getElementById('prev-btn'));
console.log('Next button element:', document.getElementById('next-btn'));
console.log('Chapter display element:', document.getElementById('current-chapter-display'));

// Test navigation functions
function testNavigation() {
    console.log('Testing navigation from chapter 1...');
    
    // Try to go to chapter 2
    if (window.showChapter) {
        window.showChapter(2);
        console.log('Moved to chapter 2');
    }
    
    // Try next chapter function
    setTimeout(() => {
        if (window.nextChapter) {
            window.nextChapter();
            console.log('Used nextChapter function');
        }
    }, 1000);
    
    // Try previous chapter function
    setTimeout(() => {
        if (window.previousChapter) {
            window.previousChapter();
            console.log('Used previousChapter function');
        }
    }, 2000);
}

// Add test button
document.addEventListener('DOMContentLoaded', function() {
    const testBtn = document.createElement('button');
    testBtn.textContent = 'Test Navigation';
    testBtn.onclick = testNavigation;
    testBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: red;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    document.body.appendChild(testBtn);
});
