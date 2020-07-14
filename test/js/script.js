
    //  fetch(' http://localhost:3000/menu')
    // .then(dataDB => dataDB.json())
    // .then(data => console.log(data)); 

window.addEventListener("DOMContentLoaded", () => {
    // getResourse будет отвечать за получение данных для карточек
    const getResourse = async (url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${result.status}`);
        }
    
        return await result.json();
    };
  
    getResourse("http://localhost:3000/menu")
        .then(data => plusCard(data));

function plusCard(data) {
    data.forEach(({img, altimg, title, descr, price}) => {
        const bit = document.createElement('div');

        price *= 27;

        bit.classList.add('menu__item');

        bit.innerHTML = `
            <img src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>
        `;

        document.querySelector('.menu').append(bit);
        });
    }
});

