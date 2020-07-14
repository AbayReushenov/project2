window.addEventListener("DOMContentLoaded", () => {

    axios.get('http://localhost:3000/menu')
      .then(response => {
              response.data.forEach(({img, altimg, title, descr, price}) => {
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
    });
             
}); 