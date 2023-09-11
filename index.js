//DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const googleBooksKey = "AIzaSyB80K-o0NisdXXsA9BUG5ZrwUFar3eYeuU";

    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".searchButton");
    const resultsContainer = document.getElementById("book-list");
    const filterButton = document.getElementById("filter-button");
    const filterOptions = document.getElementById("filter-options")

    async function fetchResultsThumbnail() {
        const userSearchInput = searchInput.value.toLowerCase();
        const apiLink = `https://www.googleapis.com/books/v1/volumes?q=${userSearchInput}&maxResults=5&key=${googleBooksKey}`;

        try {
            const response = await fetch(apiLink);
            if (!response.ok) {
                throw new Error(`Network had an issue ${Error}`);}

            const data = await response.json();

            resultsContainer.innerHTML = "";

            data.items.forEach((item) => {
                const bookInfo = item.volumeInfo;

                const li = document.createElement("li");
                const title = document.createElement("h3");
                const author = document.createElement("p");
                const rating = document.createElement("p");
                const thumbnail = document.createElement("img");

                title.textContent = bookInfo.title;
                author.textContent = `Author: ${bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown"}`;
                rating.textContent = `Rating: ${bookInfo.averageRating || "N/A"}`;
                thumbnail.src = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "";

                li.appendChild(thumbnail);
                li.appendChild(title);
                li.appendChild(author);
                li.appendChild(rating);
                resultsContainer.appendChild(li)
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    searchButton.addEventListener("click", fetchResultsThumbnail);
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            fetchResultsThumbnail()}});

    async function filterbtn(){
        const userSearchInput = searchInput.value.toLowerCase()
        const apiLink = `https://www.googleapis.com/books/v1/volumes?q=${userSearchInput}&maxResults=4&key=${googleBooksKey}`;
        try{
            const response = await fetch(apiLink);
            if (!response.ok){
                throw new Error(`Network had an issue ${Error}`);}

                const data = await response.json();

                const li1 = document.createElement("li");
                const li2 = document.createElement("li");
                const li3 = document.createElement("li");

                const sortyByDate = 1
                const sortByRating = 2
                const sortByPages = 3
                const sortByAZ = 4

    filterButton.addEventListener("click", filterbtn)


        }catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
});