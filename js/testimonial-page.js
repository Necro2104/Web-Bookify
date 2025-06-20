// Full testimonials page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('testimonials-container')) return;
    
    const testimonialsContainer = document.getElementById('testimonials-container');

    // Render all testimonials
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card animate-on-scroll';
        testimonialCard.innerHTML = `
            <div class="testimonial-card-avatar">
                <img src="${testimonial.avatar}" alt="${testimonial.name}">
            </div>
            <div class="testimonial-card-rating">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
            <div class="testimonial-card-quote">
                ${testimonial.quote}
            </div>
            <div class="testimonial-card-author">
                ${testimonial.name}
            </div>
            <div class="testimonial-card-date">
                ${testimonial.date}
            </div>
        `;
        testimonialsContainer.appendChild(testimonialCard);
    });