const searchInput = document.getElementsByClassName("search-input");
const searchButton = document.getElementsByClassName("search-button");
const resultsContainer = document.getElementById("results-section");

searchButton.addEventListener("click", () => {
    const userSearch = searchInput.value;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(userSearch)}`;
    fetch(apiUrl)
        .then((dataF) => console.log(dataF.json()))
        .catch((error) => {
            console.error("Error could not load:", error);
        });
});
