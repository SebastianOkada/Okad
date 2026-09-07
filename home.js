/*

// Category Cards

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    const title = card.querySelector("h3").textContent.trim();

    if (title === "Home Decor") {
        card.onclick = () => window.location.href = "home-decor.html";
    }

    if (title === "Lifestyle") {
        card.onclick = () => window.location.href = "lifestyle.html";
    }

    if (title === "Fashion") {
        card.onclick = () => window.location.href = "fashion.html";
    }

    if (title === "Beauty") {
        card.onclick = () => window.location.href = "beauty.html";
    }

});

*/


// Journal Cards

const journalCards = document.querySelectorAll(".journal-card");

journalCards.forEach(card => {

    card.addEventListener("click", function(e) {

        if (!e.target.classList.contains("read-overlay")) {
            window.location.href = "journal.html";
        }

    });

});