"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const elemId = document.getElementById("super_link");
console.log(elemId);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const newLink = document.querySelectorAll(".card-link");
newLink.forEach(element => {
    element.textContent = "ссылка";
});
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const elemBody = document.querySelectorAll(".card-body .card-link");
console.log(elemBody);
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const elemData = document.querySelector('[data-number="50"]');
console.log(elemData);
// 5. Выведите содержимое тега title в консоль.
const elemTitle = document.title;
console.log(elemTitle);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.querySelector(".card-title");
const perentElem = cardTitle.parentNode;
console.log(perentElem);
// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const elemP = document.createElement("p");
elemP.textContent = "Привет";
const cardElem = document.querySelector(".card");
cardElem.prepend(elemP);
// 8. Удалите тег h6 на странице.
const h = document.querySelector("h6");
h.remove();