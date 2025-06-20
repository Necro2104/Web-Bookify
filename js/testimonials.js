// Testimonials slider functionality for home page
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlides = document.querySelector('.testimonial-slides');
    const testimonialDots = document.querySelector('.testimonial-dots');
    
    if (!testimonialSlides || !testimonialDots) return;

        // Initialize testimonial slider
    let currentTestimonialIndex = 0;