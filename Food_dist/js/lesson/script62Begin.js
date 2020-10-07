// всегда запускать в терминале
// $ json-server db.json

// проверить наличие в index.html
//    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// проверка по /Applications/MAMP/htdocs/Food_dist/js/script61Proverka.js

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
    // const t = Date.parse(deadline); //?

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

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
 
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; 
        clearInterval(modalTimerId);
    }
  
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
    const modalTimerId = setTimeout(openModal, 299999 );
    // Изменил значение, чтобы не отвлекало

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >=  document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); 
        }
    }

    window.addEventListener('scroll', showModalByScroll); 

// Lesson 48, Lesson 49
// Используем классы для создание карточек меню
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
                    </div>
            `;
            this.parent.append(element); 
        }
    }

    // Альтернативный спосрб получение данных с сервера через fetch()
    // Здесь применен: axios()
    // 1-я часть кода:  
    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(response => {
            response.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    // Forms Lesson 53

    const formy = document.querySelectorAll('form');
    const mess = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы с Вами скоро свяжемся.',
        failure: 'Что-то пошло не так ...',
    };

    formy.forEach(inem => {
        bindPostData(inem);
    });

    // postData будет отвечать за posting данных
    const postData = async (url, data) => {
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await result.json();
    };

    // Альтернативный спосрб получение данных с сервера через fetch()
    // 2-я часть кода:
    // async function getResource(url) {
    //     let res = await fetch(url);
    
    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }
    
    //     return await res.json();
    // }

    // данная функция будет отвечать за привязку данных
    function bindPostData(formaB) {
        formaB.addEventListener("submit", (e) => {
            e.preventDefault(); // в AJAX обязательно

            let statusMess = document.createElement('img');
            statusMess.src = mess.loading;
            statusMess.style.cssText = `
                display: block;
                margin: 0 auto; 
            `;
            formaB.insertAdjacentElement('afterend', statusMess);

            const dataFormaB = new FormData(formaB);

            const json = JSON.stringify(Object.fromEntries(dataFormaB.entries()));

            postData('http://localhost:3000/requests', json )
            .then(data => {
                console.log(data);
                showThanksModalSpecial(mess.success);
                statusMess.remove();
            })
            .catch(() => {
                showThanksModalSpecial(mess.failure);
            })
            .finally(() => formaB.reset());
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

    // slider
    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });
});