
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

    // Forms Lesson 53
    // const formS = document.querySelectorAll('form');

    // const mess = {
    //     loading: 'Загрузка',
    //     success: 'Спасибо! Мы с Вами скоро свяжемся.',
    //     failure: 'Что-то пошло не так ...',
    // };

    // formS.forEach(id => {
    //     bindPostData(id);
    // });

    // // postData будет отвечать за posting данных
    // const postData = async (url, data) => {
    //     const result = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: data
    //     });

    //     return await result.json();
    // };

    // // данная функция будетотвечать за привязку данных
    // function bindPostData(forma) {
    //     forma.addEventListener("submit", (e) => {
    //         e.preventDefault(); // в AJAX обязательно

    //         const statusnyimessage = document.createElement('img');
    //         statusnyimessage.src = mess.loading;
    //         statusnyimessage.style.cssText = `
    //             display: block;
    //             margin: 0 auto; 
    //         `;
    //         forma.insertAdjacentElement('afterend', statusnyimessage);

    //         const formData = new FormData(forma);

    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));

    //         postData('http://localhost:3000/requests', json )
    //         .then(data => {
    //             console.log(data);
    //             showThanksModalSpecial(mess.success);
    //             statusnyimessage.remove();
    //         })
    //         .catch(() => {
    //             showThanksModalSpecial(mess.failure);
    //         })
    //         .finally(() => forma.reset());
    //         });
    // }
});