// Testimonials slider functionality for home page
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlides = document.querySelector('.testimonial-slides');
    const testimonialDots = document.querySelector('.testimonial-dots');
    
    if (!testimonialSlides || !testimonialDots) return;

        // Initialize testimonial slider
    let currentTestimonialIndex = 0;

     // Function to create testimonial slides
    function initializeTestimonials() {
        testimonialSlides.innerHTML = '';
        testimonialDots.innerHTML = '';
        
        testimonials.forEach((testimonial, index) => {
            // Create testimonial slide
            const slide = document.createElement('div');
            slide.className = 'testimonial-slide';
            slide.innerHTML = `
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div class="testimonial-quote">
                    ${testimonial.quote}
                </div>
                <div class="testimonial-rating">
                    ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                </div>
                <div class="testimonial-author">
                    ${testimonial.name}
                </div>
            `;
            testimonialSlides.appendChild(slide);

              // Create testimonial dot
            const dot = document.createElement('div');
            dot.className = 'testimonial-dot';
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('data-index', index);
            testimonialDots.appendChild(dot);
        });
    }

    // Function to update testimonial slider
    function updateTestimonialSlider() {
        testimonialSlides.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
        
        // Update active dot
        document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonialIndex);
        });
    }
     
     // Initialize testimonials
    initializeTestimonials();

    // Add click event to dots
    testimonialDots.addEventListener('click', function(e) {
        if (e.target.classList.contains('testimonial-dot')) {
            currentTestimonialIndex = parseInt(e.target.getAttribute('data-index'));
            updateTestimonialSlider();
            resetAutoSlide();
        }
    });