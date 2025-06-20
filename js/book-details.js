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
        