//DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const googleBooksKey = "AIzaSyB80K-o0NisdXXsA9BUG5ZrwUFar3eYeuU";

    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".searchButton");
    const resultsContainer = document.getElementById("book-list");
    const filterButton = document.getElementById("filter-button");
    const filterDropdown = document.getElementById("filter-dropdown");
    const filterOptions = document.getElementById("Filter-options");
    const AZBtn = document.querySelector(".A-Z")
    const rateBtn = document.querySelector(".rate")


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
                rating.textContent = `Rating: ${bookInfo.averageRating || "Unknown"}`;
                thumbnail.src = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "";

                li.appendChild(thumbnail);
                li.appendChild(title);
                li.appendChild(author);
                li.appendChild(rating);
                resultsContainer.appendChild(li)
                title.classList.add("title")
                rating.classList.add("rating")

            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function filterAZ() {
        const titles = document.querySelectorAll(".title");
        const sortedTitles = Array.from(titles).sort((a, b) => {
            const title1 = a.textContent.toLowerCase();
            const title2 = b.textContent.toLowerCase();
            return title1.localeCompare(title2);
        });
        resultsContainer.innerHTML = "";
        sortedTitles.forEach((titleElement) => {
            resultsContainer.appendChild(titleElement.parentElement);
        });
    }

    // function filterRating(){
    //     const ratings = document.querySelectorAll(".rating");
    //     const ratingVal = ratings.textContent.parseFloat()
    //     const sortedRatings = Array.from(ratingVal).sort()
    //     const string = ""
    //     const sus = string.concat(sortedRatings)
    //     resultsContainer.innerHTML = "";
    //     sus.forEach((rateElement) => {
    //         resultsContainer.appendChild(rateElement.parentElement);
    //     });
    // }

    function filterRating() {
        const ratingMax = "5"
        const ratingMin = "0.4"
        const ratingElements = document.querySelectorAll(".rating");
        const numericElements = Array.from(ratingElements).filter((element) => {
            const textContent = element.textContent.trim();
            return parseFloat(textContent);
        });
        
        console.log(numericElements);
    }
    
    rateBtn.addEventListener("click", filterRating);

    AZBtn.addEventListener("click",filterAZ)

    rateBtn.addEventListener("click", filterRating)

   filterButton.addEventListener("mouseenter", function () {
    filterDropdown.classList.remove("hidden");
});

   filterDropdown.addEventListener("mouseenter", function (){
    filterDropdown.classList.remove("hidden");
   })

   filterButton.addEventListener("mouseleave", function () {
    filterDropdown.classList.add("hidden");
});

   filterDropdown.addEventListener("mouseleave", function () {
    filterDropdown.classList.add("hidden");
});

    searchButton.addEventListener("click", fetchResults);
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") { fetchResults()}});

});