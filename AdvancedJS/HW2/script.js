// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        { id: "1", text: "Отличный телефон! Батарея держится долго." },
        { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        { id: "3", text: "Интересный дизайн, но дорогой." },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        { id: "4", text: "Люблю играть на PS5, графика на высоте." },
      ],
    },
];

document.addEventListener('DOMContentLoaded', () => {
    loadInitialReviews();
});

function loadInitialReviews() {
    const container = document.getElementById('reviewsContainer');
    initialData.forEach(product => {
      const productTitle = document.createElement('div');
      productTitle.classList.add('product-title');
      productTitle.textContent = product.product;
      container.appendChild(productTitle);

      product.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.textContent = review.text;
        container.appendChild(reviewElement);
      });
    });
}

  function addReview() {
    const reviewInput = document.getElementById('reviewInput');
    const productSelect = document.getElementById('productSelect');
    const reviewsContainer = document.getElementById('reviewsContainer');
    const reviewText = reviewInput.value.trim();

    try {
      if (reviewText.length < 50 || reviewText.length > 500) {
        throw new Error('Отзыв должен быть от 50 до 500 символов.');
      }

      const selectedProduct = productSelect.value;
      const productData = initialData.find(product => product.product === selectedProduct);
      const newReview = {
        id: String(Date.now()),
        text: reviewText,
      };
      productData.reviews.push(newReview);

      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.textContent = reviewText;
      
      const productTitle = Array.from(reviewsContainer.children).find(child => 
        child.classList.contains('product-title') && child.textContent === selectedProduct
      );

      productTitle.insertAdjacentElement('afterend', reviewElement);
      reviewInput.value = '';
    } catch (error) {
      alert(error.message);
    }
}
