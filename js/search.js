// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchBtn || !searchResults) return;

    // Function to perform search
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        // Filter books based on title or author
        const results = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );

        // Display results
        if (results.length > 0) {
            searchResults.innerHTML = '';
            
            results.slice(0, 5).forEach(book => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h4>${book.title}</h4>
                    <p>by ${book.author}</p>
                    <p>${formatPrice(book.price)}</p>
                `;
                
                resultItem.addEventListener('click', () => {
                    window.location.href = `book-details.html?id=${book.id}`;
                });
                
                searchResults.appendChild(resultItem);
            });
            
            if (results.length > 5) {
                const moreResults = document.createElement('div');
                moreResults.className = 'search-result-item more-results';
                moreResults.innerHTML = `
                    <p>See all ${results.length} results</p>
                `;
                
                moreResults.addEventListener('click', () => {
                    // In a real app, would redirect to search results page
                    window.location.href = `categories.html`;
                });
                
                searchResults.appendChild(moreResults);
            }
            
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = `
                <div class="search-result-item no-results">
                    <p>No results found for "${query}"</p>
                </div>
            `;
            searchResults.style.display = 'block';
        }
    }

       // Search button click
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });