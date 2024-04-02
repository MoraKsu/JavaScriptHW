const parseData = JSON.parse(data);

const divContentElem = document.querySelector(".content");

parseData.forEach(element => {
    divContentElem.insertAdjacentHTML("beforeend", `
        <div class="wrapper">
            <a href="${element.episode}" class="episode">
                <img src="${element.image}">
            </a>
            <div class="wrap">
                <h2>${element.name}</h2>
                <p class="species">${element.species}</p>
                <p class="location">${element.location.name}</p>
            </div>
        </div>
    `)
});