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