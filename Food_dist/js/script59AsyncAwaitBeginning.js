// const { resolve } = require("path");

window.addEventListener("DOMContentLoaded", () => {
    //tabs
    const tabs = document.querySelectorAll(".tabheader__item"), // табы
        tabsContent = document.querySelectorAll(".tabcontent"), // контент к табам
        tabsParent = document.querySelector(".tabheader__items"); //родитель табов, для делегирования

        function hideTabContent() {
            tabsContent.forEach(item => {
                 item.classList.add("hide");
                item.classList.remove("show", 'fade');
            });
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
    // функция для показа табов
        function showTabContent(i = 0) {
            // tabsContent[i].style.display = 'block';
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
       
        hideTabContent();
        showTabContent(); // i = 0 по умолчанию, function showTabContent(i = 0) 

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
             });
         }
    });
    // Timer
    const deadline = '2020-08-05';
    const t = Date.parse(deadline);

    function getTimeRemining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()) - 3 * 60 * 60 * 1000, 
        // скорректируем для учета разницы с UTF на 3 часа
              days =  Math.floor( t / (1000 * 60 * 60 * 24)),  //целых дней
              hours = Math.floor( t / (1000 * 60 * 60 ) % 24 ),    // остаток часов от дней
              minutes = Math.floor( t / (1000 * 60 ) % ( 60) ), // остаток минут от часов
              seconds = Math.floor( t / (1000 ) % ( 60 ) ); // остаток секунд от минут

        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else { 
            return num;
        }
    }

    function setClock(selector, endtime)   {         
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();   // инициализация , для решения вопроса с миганием экрана
            
        function updateClock() {
            const t = getTimeRemining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal'),
          modal = document.querySelector('.modal');
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; 
        clearInterval(modalTimerId);
        }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        }
    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            // в Google искать event.code для конкретной клавиши
            closeModal();
        }
    });

// Lesson 44 - \/ Lesson 48 не забудь раскоментировать \/
    const modalTimerId = setTimeout(openModal, 50000 );

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >=  document.documentElement.scrollHeight) 
        {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); 
        }
    }

    window.addEventListener('scroll', showModalByScroll); 

// Lesson 48, Lesson 49
    class MenuCard {
        constructor(src, alt, title, descr, price, parensSelrctor, ...classes ) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parensSelrctor);
            this.transfer = 27;
            this.changeToUAH();
        }

// методы
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                   <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    `;
            this.parent.append(element); 
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
    ).render();  // одноразовае использование

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();  // одноразовае использование

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        21,
        '.menu .container',
        'menu__item',
       
    ).render();  // одноразовае использование

    // Forms Lesson 53
    const formy = document.querySelectorAll('form');

    const mess = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы с Вами скоро свяжемся.',
        failure: 'Что-то пошло не так ...',
    };

    formy.forEach(inem => {
        postData(inem);
    });

    function postData(forma) {
        forma.addEventListener("submit", (e) => {
            e.preventDefault(); // в AJAX обязательно

            const statusnyimessage = document.createElement('img');
            statusnyimessage.src = mess.loading;
            statusnyimessage.style.cssText = `
                display: block;
                margin: 0 auto; 
            `;
            forma.insertAdjacentElement('afterend', statusnyimessage);

            const formData = new FormData(forma);
// for JSON added code
            const object = {};
            formData.forEach( function(value, key) {
                object[key] = value;
            });
           // const json = JSON.stringify(object);

            // rewrite code with fetch API
            fetch('server.php', {
                method: 'POST',
                // 'for json the headers is needed'
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModalSpecial(mess.success);
                statusnyimessage.remove();
            })
            .catch(() => {
                showThanksModalSpecial(mess.failure);
            })
            .finally(() => forma.reset());
            });
    }
    
    // Lesson 54 Отправка форм

    function showThanksModalSpecial(mess) {
        const previousDivDialog = document.querySelector('.modal__dialog');
        previousDivDialog.classList.add('hide');
        openModal();
        const thanksModalDiv = document.createElement('div');
        thanksModalDiv.classList.add('modal__dialog');
        thanksModalDiv.innerHTML = `
                <div class="modal__content">
                    <div  class="modal__close" data-close>×</div>
                    <div class="modal__title">${mess}</div>
                </div>
                `;
     
     document.querySelector('.modal').append(thanksModalDiv);

     setTimeout(() => {
         thanksModalDiv.remove(); // clearning
         previousDivDialog.classList.add('show'); // and fixing
         previousDivDialog.classList.remove('hide'); 
         closeModal(); // everything well done, close box "modal"
     }, 4000);
    }

    // Проверка: Установлен ли NODE JS
    // iMac-Abay:Food_dist reushenov$ node -v
    // v12.18.0
    //
    //Update:
    //brew update
    //brew upgrade node
    //OR:
    //npm install -g n
    //sudo n latest
    //or:
    //nvm install node --reinstall-packages-from=node
    //
    //npm install -g npm
    // +: npm install json-server --save-dev ==>> Local
    // - : sudo npm install json-server -g ==>> Global
    //
    // для установки npm при скачивании проекта в другом месте набрать $ npm i

//     fetch('db.json')
//     .then(danniy => {
//         return danniy.json();
//     })
//     .then(nashOtvet => {
//         return console.log(nashOtvet);
//     });

//  //или
//  fetch('db.json')
//     .then(dataDB => dataDB.json())
//     .then(data => console.log(data));

    // поменяем вместо названия файла будет 
    // имя хоста
fetch(' http://localhost:3000/menu')
    .then(dataDB => dataDB.json())
    .then(data => console.log(data));  
 // получаем массив с данными в отлие от верхгенго примера       
});

// Start JSON Server

// json-server --watch db.json

// в терминале:
// npm install -g json-server
// json-server --watch db.json
//  or:
//  json-server db.json

// json-server [options] <source>

// Options:
//   --config, -c       Path to config file           [default: "json-server.json"]
//   --port, -p         Set port                                    [default: 3000]
//   --host, -H         Set host                             [default: "localhost"]
//   --watch, -w        Watch file(s)                                     [boolean]
//   --routes, -r       Path to routes file
//   --middlewares, -m  Paths to middleware files                           [array]
//   --static, -s       Set static files directory
//   --read-only, --ro  Allow only GET requests                           [boolean]
//   --no-cors, --nc    Disable Cross-Origin Resource Sharing             [boolean]
//   --no-gzip, --ng    Disable GZIP Content-Encoding                     [boolean]
//   --snapshots, -S    Set snapshots directory                      [default: "."]
//   --delay, -d        Add delay to responses (ms)
//   --id, -i           Set database id property (e.g. _id)         [default: "id"]
//   --foreignKeySuffix, --fks  Set foreign key suffix, (e.g. _id as in post_id)
//                                                                  [default: "Id"]
//   --quiet, -q        Suppress log messages from output                 [boolean]
//   --help, -h         Show help                                         [boolean]
//   --version, -v      Show version number                               [boolean]

// Examples:
//   json-server db.json
//   json-server file.js
//   json-server http://example.com/db.json

// https://github.com/typicode/json-server