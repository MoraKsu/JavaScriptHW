const url = "./data.json";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`ошибка - ${error}`);
  }
}

const data = await fetchData(url);
console.log(data);

const wrapper = document.querySelector(".list-items__wrapper");
data.forEach((element) => {  
  wrapper.insertAdjacentHTML("beforeend",
    `
    <div class="list-items__item">
    <div class="item__img" style="background-image: url(${element.img})">
        <div class="item__img_blackout">
            <button>${element.button}</button>
        </div>
    </div>
    <div class="item__description">
        <h3>${element.h3}</h3>
        <p>${element.p}</p>
        <span>$${element.span}</span>
    </div>
</div>
    `
  );
});