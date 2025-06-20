// Common JavaScript for all pages

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.hamburger')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });