const searchInput = document.querySelector(".search-input");
const userSearchInput = searchInput.value.toLowerCase();
const searchButton = document.querySelector(".search-button");
const resultsContainer = document.getElementById("results-section");


async function fetchResults(){
searchButton.addEventListener(click, () => {
    const userSearch = userSearchInput;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}`;
    fetch(apiUrl)
        .then((dataF) => console.log(dataF.json()))

        .catch((error) => {
            console.error("Book not found", error);
        });
    });
}
fetchResults()