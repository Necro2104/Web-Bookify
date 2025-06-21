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

           // Update the active filters display
        updateFilterTags();
        
        // Render the filtered and sorted books
        renderBooks();
        
        // Add animation class
        setTimeout(() => {
            document.querySelectorAll('.book-card').forEach(card => {
                card.classList.add('animated');
            });
        }, 100);
    }

      // Function to update the filter tags display
    function updateFilterTags() {
        let filterText = '';
        
        // Category filter tag
        if (appliedFilters.category !== 'all') {
            const categoryName = appliedFilters.category.charAt(0).toUpperCase() + appliedFilters.category.slice(1);
            filterText += `Category: ${categoryName}, `;
        } else {
            filterText += 'All Categories, ';
        }
        
        // Price filter tag
        if (appliedFilters.price !== 'all') {
            if (appliedFilters.price === '0-10') {
                filterText += 'Price: $0-$10, ';
            } else if (appliedFilters.price === '10-20') {
                filterText += 'Price: $10-$20, ';
            } else if (appliedFilters.price === '20-30') {
                filterText += 'Price: $20-$30, ';
            } else if (appliedFilters.price === '30+') {
                filterText += 'Price: $30+, ';
            }
        }

          // Sort filter tag
        if (appliedFilters.sort === 'title-asc') {
            filterText += 'Sorted by: Title (A-Z)';
        } else if (appliedFilters.sort === 'title-desc') {
            filterText += 'Sorted by: Title (Z-A)';
        } else if (appliedFilters.sort === 'price-asc') {
            filterText += 'Sorted by: Price (Low to High)';
        } else if (appliedFilters.sort === 'price-desc') {
            filterText += 'Sorted by: Price (High to Low)';
        }
        
        filterTagsDisplay.textContent = filterText;
    }