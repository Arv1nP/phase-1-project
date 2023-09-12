//DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const googleBooksKey = "AIzaSyB80K-o0NisdXXsA9BUG5ZrwUFar3eYeuU";

    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".searchButton");
    const resultsContainer = document.getElementById("book-list");
    const filterButton = document.getElementById("filter-button");
    const filterDropdown = document.getElementById("filter-dropdown");

    async function fetchResults() {
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
                title.classList.add("title")
               
                // function filterauthor(){
                //     const titleElement =document.querySelectorAll(".title");
                //     const titlesArray = []
                //     titleElement.forEach(title=>titlesArray.push(tit.textContent))

                // }
                // filterButton.addEventListener("click",filterauthor)
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

   filterButton.addEventListener("mouseenter", function () {
    filterDropdown.classList.remove("hidden");
});

filterButton.addEventListener("mouseleave", function () {
    filterDropdown.classList.add("hidden");
});
    searchButton.addEventListener("click", fetchResults);
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") { fetchResults()}});

});