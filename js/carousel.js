// Carousel functionality for featured books
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.carousel-track')) return;
    
    // Initialize carousel elements
    const track = document.querySelector('.carousel-track');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const carouselNav = document.querySelector('.carousel-nav');

    // Filter featured books
    const featuredBooks = books.filter(book => book.featured);

     // Populate carousel with featured books
    featuredBooks.forEach((book, index) => {
        const slide = document.createElement('li');
        slide.className = 'carousel-item';
        slide.innerHTML = createBookCard(book);
        track.appendChild(slide);
    });

    // Create navigation dots
    featuredBooks.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-index', index);
        carouselNav.appendChild(dot);
    });

    // Set initial state
    let currentIndex = 0;

    // Calculate how many slides to show based on screen width
    function getSlidesPerView() {
        if (window.innerWidth < 480) return 1;
        if (window.innerWidth < 768) return 2;
        if (window.innerWidth < 992) return 3;
        return 4;
    }

     // Update carousel positioning
    function updateCarousel() {
        const slidesPerView = getSlidesPerView();
        const slides = document.querySelectorAll('.carousel-item');
        const slideWidth = slides[0].offsetWidth;

         // Calculate max index based on slides per view
        const maxIndex = Math.max(0, slides.length - slidesPerView);

        // Ensure current index is not beyond max
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

          // Translate the track
        const offset = -currentIndex * slideWidth;
        track.style.transform = `translateX(${offset}px)`;

         // Update active dot
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

         // Update button states
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === maxIndex;

            // Visual feedback for disabled buttons
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
    }

    // Initialize
    updateCarousel();

      // Handle window resize
    window.addEventListener('resize', updateCarousel);

     // Navigation buttons
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        const slides = document.querySelectorAll('.carousel-item');
        const slidesPerView = getSlidesPerView();
        const maxIndex = Math.max(0, slides.length - slidesPerView);
        
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Navigation dots
    document.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
        });
    });

       // Auto-play functionality
    let autoplayInterval;

    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        
        autoplayInterval = setInterval(() => {
            const slides = document.querySelectorAll('.carousel-item');
            const slidesPerView = getSlidesPerView();
            const maxIndex = Math.max(0, slides.length - slidesPerView);
            
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            
            updateCarousel();
        }, 5000);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Start autoplay
    startAutoplay();

        // Stop autoplay on hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);