// Filter and sorting functionality for categories page
document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('books-grid')) return;
    
    const booksGrid = document.getElementById('books-grid');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const filterTagsDisplay = document.getElementById('filter-tags');
    
    let filteredBooks = [...books];
    let appliedFilters = {
        category: 'all',
        price: 'all',
        sort: 'title-asc'
    };

    // Check URL parameters for filter
    const urlCategory = getUrlParameter('category');
    if (urlCategory) {
        appliedFilters.category = urlCategory;
        categoryFilter.value = urlCategory;
    }

     // Function to apply filters and sort
    function updateBooks() {
        // Filter by category
        if (appliedFilters.category !== 'all') {
            filteredBooks = books.filter(book => book.category === appliedFilters.category);
        } else {
            filteredBooks = [...books];
        }
        
        // Filter by price
        if (appliedFilters.price !== 'all') {
            const [min, max] = appliedFilters.price.split('-');
            
            if (max === '+') {
                filteredBooks = filteredBooks.filter(book => book.price >= parseFloat(min));
            } else {
                filteredBooks = filteredBooks.filter(book => 
                    book.price >= parseFloat(min) && book.price <= parseFloat(max)
                );
            }
        }

         // Sort books
        switch (appliedFilters.sort) {
            case 'title-asc':
                filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'price-asc':
                filteredBooks.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredBooks.sort((a, b) => b.price - a.price);
                break;
        }