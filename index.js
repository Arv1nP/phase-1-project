document.addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const filterButton = document.getElementsByClassName(".filterButton");
    
    console.log("Search Input:", searchInput);
    console.log("Search Button:", searchButton);
    console.log("Filter Buttons:", filterButton);
});