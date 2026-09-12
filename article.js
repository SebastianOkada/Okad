// Save Article

const saveArticle = document.getElementById("save-article");

if (saveArticle) {

    const articleKey = window.location.pathname;

    if (localStorage.getItem(articleKey) === "saved") {
        saveArticle.classList.add("saved");
    }

    saveArticle.addEventListener("click", function() {

        if (localStorage.getItem(articleKey) === "saved") {

            localStorage.removeItem(articleKey);
            saveArticle.classList.remove("saved");

        } else {

            localStorage.setItem(articleKey, "saved");
            saveArticle.classList.add("saved");

        }

    });

}