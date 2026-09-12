// Newsletter Popup

const profileBtn = document.getElementById("profile-btn");
const popup = document.getElementById("newsletter-popup");
const closeBtn = document.querySelector(".close-popup");

// Open Popup

profileBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("active");
});

// Close with X

closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
});

// Close by clicking outside

popup.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});




// Search Box

const searchBtn = document.getElementById("search-btn");
const searchOverlay = document.querySelector(".search-overlay");
const closeSearch = document.querySelector(".close-search");
const searchInput = document.getElementById("site-search");
const searchResults = document.getElementById("search-results");

const okadPages = [
    "index.html",
    "discover.html",
    "discover-2.html",
    "discover-3.html",
    "discover-4.html",
    "collections.html",
    "collections-2.html",
    "collections-3.html",
    "collections-4.html",
    "collections-5.html",
    "about.html",
    "contact.html",
    "journal.html",
    "article-page-01.html",
    "article-page-02.html"
];

searchBtn.addEventListener("click", function(e) {

    e.preventDefault();

    searchOverlay.classList.add("active");

    searchInput.focus();

});


closeSearch.addEventListener("click", function() {

    searchOverlay.classList.remove("active");

});


searchOverlay.addEventListener("click", function(e) {

    if (e.target === searchOverlay) {

        searchOverlay.classList.remove("active");

    }

});


searchInput.addEventListener("input", async function() {

    const keyword = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (!keyword) return;

    for (const page of okadPages) {

        try {

            const response = await fetch(page);
            const html = await response.text();

            const text = html
                .replace(/<script[\s\S]*?<\/script>/gi, "")
                .replace(/<style[\s\S]*?<\/style>/gi, "")
                .replace(/<[^>]+>/g, " ")
                .replace(/\s+/g, " ")
                .toLowerCase();

            if (text.includes(keyword)) {

                const result = document.createElement("a");

                result.href = page;
                result.textContent = page
                    .replace(".html", "")
                    .replace(/-/g, " ");

                searchResults.appendChild(result);

            }

        } catch (error) {

            console.log("Could not search:", page);

        }

    }

    if (!searchResults.children.length) {

        searchResults.textContent = "No results found.";

    }

});