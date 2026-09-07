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


searchBtn.addEventListener("click", function(e){

    e.preventDefault();

    searchOverlay.classList.add("active");

});


closeSearch.addEventListener("click", function(){

    searchOverlay.classList.remove("active");

});


searchOverlay.addEventListener("click", function(e){

    if(e.target === searchOverlay){

        searchOverlay.classList.remove("active");

    }

});