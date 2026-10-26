const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("music-search");
const musicCards = document.querySelectorAll(".music-card");

// Create a message for search results
const searchMessage = document.createElement("p");
searchMessage.id = "search-message";
searchForm.insertAdjacentElement("afterend", searchMessage);

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim().toLowerCase();
    let found = false;

    if (searchTerm === "") {
        searchMessage.textContent = "Please enter a song, artist, or genre.";
        musicCards.forEach(function(card) {
            card.style.display = "";
        });
        return;
    }

    musicCards.forEach(function(card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchTerm)) {
            card.style.display = "";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (found) {
        searchMessage.textContent = "Here are your matching results!";
    } else {
        searchMessage.textContent = "Sorry, no matching music was found.";
    }
});

