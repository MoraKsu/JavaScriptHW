"use strict";


// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const fromInput = document.getElementById("from");
const spanElement = document.querySelector("span");
fromInput.addEventListener("input", () => {
    spanElement.textContent = fromInput.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtn = document.querySelector(".messageBtn");
const messageElement = document.querySelector(".message");
messageBtn.addEventListener("click", () => {
    messageElement.classList.add("animate_animated", "animate_fadeInLeftBig");
    messageElement.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formInputs = form.querySelectorAll("input, select");
    let formValid = true;

    formInputs.forEach((input) => {
        if (!input.value) {
            input.classList.add("error");
            input.style.border = "1px solid red";
            formValid = false;
        } else {
            input.classList.remove("error");
            input.style.border = "1px solid green";
        }
    });

    if (formValid) {
        form.submit();
    }
});
