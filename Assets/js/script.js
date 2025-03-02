const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    if (query.length > 2) {
        searchResults.innerHTML = `<p class="text-muted">جستجو برای: ${query}</p>`;
    } else {
        searchResults.innerHTML = '';
    }
});