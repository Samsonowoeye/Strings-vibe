const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("music-search");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        alert("Please enter a song or artist name.");
    } else {
        alert("You searched for: " + searchTerm);
    }
});
