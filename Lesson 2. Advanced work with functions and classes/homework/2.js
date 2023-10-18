"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. На странице должны отображаться все товары и отзывы 
под каждым товаром. Под каждым блоком отзывов, должна быть возможность добавить 
отзыв для конкретного продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const productsSelect = document.querySelector("#productField");
const reviewField = document.querySelector("#reviewField");
const reviewForm = document.querySelector("#reviewForm");
const reviewsList = document.querySelector("#reviews");
const errorField = document.querySelector("#errorField");

let currentReviewId = initialData.reduce((max, review) => {
  const maxReviewId = review.reviews.reduce((a, r) => a > r.id ? a : r.id, 0);
  return Math.max(max, maxReviewId);
}, 0);

initialData.forEach(item => {
  const field = `<option value="${item.product}">${item.product}</option>`;
  productsSelect.insertAdjacentHTML("beforeend", field);
});

const renderError = (msg) => {
  errorField.textContent = msg ? msg : "";
};

const renderReviews = () => {
  reviewsList.innerHTML = "";
  initialData.forEach(item => {
    const field = `<dt>${item.product}</dt>`;
    const subField = `<dd><ul>${item.reviews.reduce((str, review) => str + "<li>" + review.text + "</li>", "")}</ul></dd>`;
    const insertStr = field + subField;
    reviewsList.insertAdjacentHTML("beforeend", insertStr);
  });
};

renderReviews();

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderError();
  try {
    if (!initialData.some(item => item.product === productsSelect.value)) {
      renderError("Вы не выбрали товар");
      return;
    }
    const review = reviewField.value;
    if (review.length < 50 || review.length > 500) {
      throw new Error("Ваш отзыв должен быть длиной от 50 до 500 символов");
    }
    const prod = initialData.find(el => el.product === productsSelect.value);
    console.log(prod);
    prod.reviews.push({id: ++currentReviewId, text: review});
    console.log(initialData);
  } catch (e) {
    renderError(e.message);
  } finally {
    renderReviews();
  }

});
