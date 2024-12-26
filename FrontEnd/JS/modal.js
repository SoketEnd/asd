document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const btn = document.querySelector(".header_btn");
    const span = document.querySelector(".close");
    const reviewForm = document.getElementById("reviewForm");
    const reviewText = document.getElementById("reviewText");
    const reviewsContainer = document.getElementById("reviewsContainer");

    // Открытие модального окна
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    // Закрытие модального окна при клике на крестик
    span.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // Обработка формы для добавления нового отзыва
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const text = reviewText.value.trim();

        if (text) {
            const reviewElement = document.createElement("div");
            reviewElement.className = "review";
            reviewElement.textContent = text;
            reviewsContainer.appendChild(reviewElement);
            reviewText.value = ""; // Очистка поля ввода
        }
    });
});