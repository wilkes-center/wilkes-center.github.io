/**
 * Handles tool card interactions and any dynamic content loading
 */
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // You could add additional functionality here like:
    // - Dynamic loading of tool data from JSON
    // - Filtering tools by category
    // - Search functionality
    // - Modal popups for tool details
}); 