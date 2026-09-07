document.addEventListener("DOMContentLoaded", function () {

    const categoryCards = document.querySelectorAll(".shop-category-card");
    const productsGrid = document.querySelector(".products-grid");

    const collectionPages = [
        "collections.html",
        "collections-2.html",
        "collections-3.html",
        "collections-4.html",
        "collections-5.html"
    ];

    categoryCards.forEach(function (category) {

        category.addEventListener("click", async function (event) {

            event.preventDefault();

            const categoryName = category.querySelector("h3").textContent
                .toLowerCase()
                .trim();

            /* ALL CATEGORY */

            if (categoryName === "all") {

                window.location.reload();

                return;
            }

            /* CLEAR CURRENT PRODUCTS */

            productsGrid.innerHTML = "";

            const allProducts = [];

            /* SEARCH ALL 5 COLLECTION PAGES */

            for (const page of collectionPages) {

                try {

                    const response = await fetch(page);
                    const html = await response.text();

                    const parser = new DOMParser();

                    const documentPage = parser.parseFromString(
                        html,
                        "text/html"
                    );

                    const products = documentPage.querySelectorAll(
                        ".product-card"
                    );

                    products.forEach(function (product) {

                        const productCategory =
                            (product.getAttribute("data-category") || "")
                                .toLowerCase()
                                .trim();

                        let matches = false;

                        if (categoryName === "home decor") {

                            matches = productCategory === "home decor";

                        } else if (categoryName === "jewelry") {

                            matches = productCategory === "jewelry";

                        } else if (categoryName === "fashion") {

                            matches = productCategory === "fashion";

                        } else if (categoryName === "hair & beauty") {

                            matches =
                                productCategory === "hair" ||
                                productCategory === "beauty";

                        } else if (categoryName === "bags & accessories") {

                            matches =
                                productCategory === "bags" ||
                                productCategory === "accessories";

                        } else if (categoryName === "footwear") {

                            matches = productCategory === "footwear";

                        } else if (categoryName === "gift ideas") {

                            matches = productCategory === "gift";

                        }

                        if (matches) {

                            const productHTML = product.outerHTML;

                            const alreadyAdded = allProducts.includes(
                                productHTML
                            );

                            if (!alreadyAdded) {

                                allProducts.push(productHTML);

                            }

                        }

                    });

                } catch (error) {

                    console.error(
                        "Could not load " + page,
                        error
                    );

                }

            }

            /* DISPLAY PRODUCTS */

            allProducts.forEach(function (productHTML) {

                productsGrid.insertAdjacentHTML(
                    "beforeend",
                    productHTML
                );

            });

        });

    });

});