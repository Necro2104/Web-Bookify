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

    // Testimonial form rating stars
    const stars = document.querySelectorAll('.stars .fa-star');
    const ratingInput = document.getElementById('rating');
    
    if (stars.length && ratingInput) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                ratingInput.value = rating;
                
                // Update star display
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
            
            // Hover effect
            star.addEventListener('mouseenter', function() {
                const rating = this.getAttribute('data-rating');
                
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= rating) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });
            
            star.addEventListener('mouseleave', function() {
                stars.forEach(s => {
                    s.classList.remove('hover');
                });
            });
        });
    }

     // Form submission
    const testimonialForm = document.getElementById('testimonial-form');
    
    if (testimonialForm) {
        testimonialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const rating = document.getElementById('rating').value;
            const testimonial = document.getElementById('testimonial').value;
            
            // Validate form
            if (!name || !email || !rating || !testimonial) {
                alert('Please fill out all fields.');
                return;
            }
            
            if (parseInt(rating) < 1) {
                alert('Please select a rating.');
                return;
            }
            
            // In a real app, would submit to server
            alert('Thank you for your testimonial! It will be reviewed and published soon.');
            
            // Reset forms
            this.reset();
            stars.forEach(s => s.classList.remove('active'));
            ratingInput.value = 0;
        });
    }
});