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

    // slider var 2 'Карусель'
  
    const slider = document.querySelector('.offer__slider'), // added in lesson 63
        slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        inner2 = document.querySelector('.offer______slider-inner2'),
        width = window.getComputedStyle(slidesWrapper).width; // ширина нашего окошка

    let slideIndex = 1;
    let offset = 0; // переменная будет отслеживать на сколько мы отступили от краев нашего большого слайда 'inner2'
    let step = i => +width.replace(/\D/g, '') * (i - 1); // step * N

    const nN = n =>  n > 9 ? "" + n: "0" + n;

    total.textContent = nN(slides.length);
    current.textContent =  nN(slideIndex);

    inner2.style.width = 100 * slides.length + '%'; // 400 %
    inner2.style.display = 'flex'; // переведет все слайды в 1 линию
    inner2.style.transition = '0.5s all'; // постепенный переход

    slidesWrapper.style.overflow = 'hidden'; // убираем видимость рмками wrspper
    
    slides.forEach(item => {
        item.style.width = width; // каждый слайд получил стнадартный размер
    });

    // lesson 62
    slider.style.position = 'relative';

    const clickDots = document.createElement('ol'),
          dots = [];  

    clickDots.classList.add('carousel-indicators');

    slider.append(clickDots); // куда.append.что;

    // создаем контент в данный элемент

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }
     
        clickDots.append(dot);
        dots.push(dot); //массив с точками
    }

    function functionDotOpacity(i) {
        inner2.style.transform = `translateX(-${offset}px)`; // "-"

        current.textContent =  nN(i);

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[i - 1].style.opacity = 1;
    }

    next.addEventListener('click', () => {  // next => вправо будет "-"
        if (offset == step(slides.length)) { 
            offset = 0;
        } else { 
            offset += step(2); // + ONE step
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        }   else {
            slideIndex++;
        }

        functionDotOpacity(slideIndex);
    });

    prev.addEventListener('click', () => { 
        if (offset == 0) {
            offset = step(slides.length);
        } else { 
            offset -= step(2);// - ONE step
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        }   else {
            slideIndex--;
        }
        functionDotOpacity(slideIndex);
    });

    // действие на нажатие точки
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideto = e.target.getAttribute('data-slide-to');
            slideIndex = slideto;
            offset = step(slideto);
            functionDotOpacity(slideto);
        });
    });

    // Calc lesson 66, 67

    const kilocalor = document.querySelector('.calculating__result span');
    // <div class="calculating__result">
    // <span>2700</span> ккал
    // </div>
     let sex, height, weight, age, ratio = 1.375;

     if (localStorage.getItem('sex')) {
         sex = localStorage.getItem('sex');
     } else {
            sex = 'female';
            localStorage.setItem('sex', 'female');
     }

     if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
           ratio = '1.375';
           localStorage.setItem('ratio', '1.375');
    }

    function initLocalSettings(selecot, activoClass) {
        const elements = document.querySelectorAll(selecot);

        elements.forEach(eLem => {
            eLem.classList.remove(activoClass);
            if (eLem.getAttribute('id') === localStorage.getItem('sex')) {
                eLem.classList.add(activoClass);
            }
            if (eLem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                    eLem.classList.add(activoClass);   
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            kilocalor.textContent = '____';
            return;
        }

        if (sex === 'female') {
            kilocalor.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio) ;
        } else {
            kilocalor.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio );
        }
    }

    calcTotal();

    function getStatInfo(selector, classFlagAktiven) {
        const elementsCalc = document.querySelectorAll(selector);
        //подучим все дивы


        // при присвоении родителю события возникает баг
        // активируется область вокруг наших необходимых событий
        // поэтому код перерабатываес и устанавливаем новоеый перебор событий  и присвоение
        // только конкретным выдеряемым div-ам
        elementsCalc.forEach(itemDiv => {
            itemDiv.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-ratio')) {
                    ratio = +event.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +event.target.getAttribute('data-ratio'));
                } else {
                    sex = event.target.getAttribute('id');
                    localStorage.setItem('sex', event.target.getAttribute('id'));
                }
    
                elementsCalc.forEach(intem => {
                    intem.classList.remove(classFlagAktiven);
                });
    
                event.target.classList.add(classFlagAktiven);
    
                calcTotal();
                //call recalculating function each time when we have event
                });
        });

        // данный код ниже дает ошибку при клике рядом с нашими необходимыми div-ми:
        // document.querySelector(selectorRoditel).addEventListener('click', (event) => {
        //     if (event.target.getAttribute('data-ratio')) {
        //         ratio = +event.target.getAttribute('data-ratio');
        //     } else {
        //         sex = event.target.getAttribute('id');
        //     }

        //     elementsCalc.forEach(intem => {
        //         intem.classList.remove(classFlagAktiven);
        //     });

        //     event.target.classList.add(classFlagAktiven);

        //     calcTotal();
        //     //call recalculating function each time when we have event
        //     });
    }

    getStatInfo('#gender div', 'calculating__choose-item_active');
    getStatInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    function getInputOrDinamicInfo(selectorID) {
        const nashInput = document.querySelector(selectorID);
// добавим проверку на ввод корректных данных, с обратной связью для "user"
        nashInput.addEventListener('input', () => { // событие 'input' состоялось
// добавим проверку на ввод корректных данных, с обратной связью для "user"

             if (nashInput.value.match(/\D/g)) { // вводится не число
                nashInput.style.border = '1px solid red';
                nashInput.classList.add('blink');

             } else {
                nashInput.style.border = 'none';
                nashInput.classList.remove('blink');
             }
            switch(nashInput.getAttribute('id')) { //  in this div there is 'id'
            // if there is === 'true'
                case 'height' :
                    height = +nashInput.value; // we will get new value for the element
                    break; // mission have been complited

                case 'weight' :
                    weight = +nashInput.value; // we will get new value for the element
                    break; 

                case 'age' :
                    age = +nashInput.value; // we will get new value for the element
                    break;                   

            }

            //call recalculating function each time when we have event
            calcTotal(); 
        });        
    }

    // call the functionc with 3 different selectors
    getInputOrDinamicInfo('#height');
    getInputOrDinamicInfo('#age');
    getInputOrDinamicInfo('#weight');

});