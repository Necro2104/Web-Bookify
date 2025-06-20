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

    // For any page that has book cards, add hover animation
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.book-card-hover')?.classList.add('show');
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.book-card-hover')?.classList.remove('show');
        });
    });

     // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initialize on page load
    animateOnScroll();

       // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



// Helper function to format price
function formatPrice(price) {
    return '$' + price.toFixed(2);
}

// Helper function to create book card
function createBookCard(book) {
    const discountPercent = book.originalPrice ? Math.round((book.originalPrice - book.price) / book.originalPrice * 100) : 0;

      return `
        <div class="book-card" data-id="${book.id}">
            <div class="book-card-img">
                <img src="${book.image}" alt="${book.title}">
                <div class="book-category">${book.category}</div>
                ${discountPercent > 0 ? `<div class="discount-badge">-${discountPercent}%</div>` : ''}
                <div class="book-card-hover">
                    <p class="book-description">${book.description}</p>
                    <a href="book-details.html?id=${book.id}" class="btn">View Details</a>
                </div>
            </div>
            <div class="book-card-content">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <div class="book-price">
                    <span>${formatPrice(book.price)}</span>
                    ${book.originalPrice ? `<span class="original-price">${formatPrice(book.originalPrice)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Add to cart functionality (simulation)
function addToCartHandler() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const bookId = this.dataset.id;
            
            // Show success message (in real app, would add to cart)
            alert(`Book added to cart! (ID: ${bookId})`);
        });
    });
}

// Function to get URL parameters
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}