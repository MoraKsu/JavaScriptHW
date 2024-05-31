document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");
    const productNameInput = document.getElementById("productName");
    const reviewTextInput = document.getElementById("reviewText");
    const productsList = document.getElementById("productsList");

    // Загружаем отзывы из LocalStorage при загрузке страницы
    loadReviews();

    // Добавляем новый отзыв
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const productName = productNameInput.value.trim();
        const reviewText = reviewTextInput.value.trim();

        if (productName && reviewText) {
            getReviews().then(reviews => {
                if (!reviews[productName]) {
                    reviews[productName] = [];
                }
                reviews[productName].push(reviewText);
                saveReviews(reviews).then(() => {
                    loadReviews();
                    reviewForm.reset();
                });
            });
        }
    });

    // Загружаем отзывы из LocalStorage
    function loadReviews() {
        getReviews().then(reviews => {
            productsList.innerHTML = "";
            for (const product in reviews) {
                const productItem = document.createElement("li");
                productItem.textContent = product;
                productItem.classList.add("product-title");
                productItem.addEventListener("click", () => showReviews(product, reviews[product]));
                productsList.appendChild(productItem);
            }
        });
    }

    // Показать отзывы для конкретного продукта
    function showReviews(productName, reviews) {
        productsList.innerHTML = `<h3>Отзывы о ${productName}</h3>`;
        reviews.forEach((review, index) => {
            const reviewItem = document.createElement("li");
            reviewItem.classList.add("review-item");
            reviewItem.textContent = review;

            const deleteButton = document.createElement("span");
            deleteButton.textContent = "Удалить";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", () => deleteReview(productName, index));

            reviewItem.appendChild(deleteButton);
            productsList.appendChild(reviewItem);
        });

        const backButton = document.createElement("button");
        backButton.textContent = "Назад";
        backButton.addEventListener("click", loadReviews);
        productsList.appendChild(backButton);
    }

    // Удалить отзыв
    function deleteReview(productName, reviewIndex) {
        getReviews().then(reviews => {
            if (reviews[productName]) {
                reviews[productName].splice(reviewIndex, 1);
                if (reviews[productName].length === 0) {
                    delete reviews[productName];
                }
                saveReviews(reviews).then(loadReviews);
            }
        });
    }

    // Получить отзывы из LocalStorage
    function getReviews() {
        return new Promise((resolve) => {
            const reviews = JSON.parse(localStorage.getItem("productReviews")) || {};
            resolve(reviews);
        });
    }

    // Сохранить отзывы в LocalStorage
    function saveReviews(reviews) {
        return new Promise((resolve) => {
            localStorage.setItem("productReviews", JSON.stringify(reviews));
            resolve();
        });
    }
});