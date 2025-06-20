// Book details page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('book-details')) return;
    
    const bookId = getUrlParameter('id');
    const bookDetailsContainer = document.getElementById('book-details');
    const relatedBooksContainer = document.getElementById('related-books');
    
    // If no book ID, redirect to categories page
    if (!bookId) {
        window.location.href = 'categories.html';
        return;
    }
    
    // Find the book by ID
    const book = books.find(book => book.id == bookId);
    
    // If book not found, show error
    if (!book) {
        bookDetailsContainer.innerHTML = `
            <div class="book-not-found">
                <h2>Book Not Found</h2>
                <p>Sorry, the book you're looking for doesn't exist.</p>
                <a href="categories.html" class="btn">Browse Books</a>
            </div>
        `;
        return;
    }
    // Calculate discount if there's an original price
    const discountPercent = book.originalPrice 
        ? Math.round((book.originalPrice - book.price) / book.originalPrice * 100) 
        : 0;
        
    // Update page title
    document.title = `${book.title} - Bookify`;

    // Render book details
    bookDetailsContainer.innerHTML = `
        <div class="book-details-image">
            <img src="${book.image}" alt="${book.title}">
        </div>
        <div class="book-details-info">
            <h2>${book.title}</h2>
            <p class="book-details-author">by ${book.author}</p>
            <span class="book-details-category">${book.category}</span>
            <div class="book-details-price">
                ${formatPrice(book.price)}
                ${book.originalPrice ? `<span class="book-details-original-price">${formatPrice(book.originalPrice)}</span>` : ''}
                ${discountPercent > 0 ? `<span class="discount-badge">-${discountPercent}%</span>` : ''}
            </div>
            <div class="book-details-description">
                <p>${book.description}</p>
            </div>
            <div class="book-details-actions">
                <button class="btn add-to-cart" data-id="${book.id}">Add to Cart</button>
                <button class="btn btn-secondary add-to-wishlist" data-id="${book.id}">Add to Wishlist</button>
            </div>
        </div>
    `;
    // Find related books (same category, excluding current book)
    const relatedBooks = books
        .filter(b => b.category === book.category && b.id !== book.id)
        .slice(0, 4);
    
    // If there are related books, render them
    if (relatedBooks.length > 0) {
        relatedBooks.forEach(relatedBook => {
            relatedBooksContainer.innerHTML += createBookCard(relatedBook);
        });
    } else {
        // If no related books, show some bestsellers instead
        const bestsellers = books
            .filter(b => b.bestseller && b.id !== book.id)
            .slice(0, 4);
        
        bestsellers.forEach(bestsellerBook => {
            relatedBooksContainer.innerHTML += createBookCard(bestsellerBook);
        });
    }

    // Initialize add to cart functionality
    addToCartHandler();
    
    // Add to wishlist button handler
    const wishlistBtn = document.querySelector('.add-to-wishlist');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const bookId = this.dataset.id;
            
            // Show success message (in real app, would add to wishlist)
            alert(`Book added to wishlist! (ID: ${bookId})`);
        });
    }