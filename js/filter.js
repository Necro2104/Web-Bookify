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