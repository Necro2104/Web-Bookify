// Carousel functionality for featured books
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.carousel-track')) return;
    
    // Initialize carousel elements
    const track = document.querySelector('.carousel-track');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const carouselNav = document.querySelector('.carousel-nav');