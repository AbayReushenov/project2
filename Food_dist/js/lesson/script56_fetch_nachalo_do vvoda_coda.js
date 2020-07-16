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
        // const timer = document.querySelector('.timer'),  // <div class="timer">
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
// modalCloseBtn = document.querySelector('[data-close]');

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

// modalCloseBtn.addEventListener('click', closeModal); 
 
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

            // const statusnyimessage = document.createElement('div');
            // statusnyimessage.classList.add('status');
            // statusnyimessage.textContent = mess.loading;
            const statusnyimessage = document.createElement('img');
            statusnyimessage.src = mess.loading;
            statusnyimessage.style.cssText = `
                display: block;
                margin: 0 auto; 
            `;
//           forma.append(statusnyimessage);
            forma.insertAdjacentElement('afterend', statusnyimessage);
// targetElement.insertAdjacentElement(position, element);
// Параметры
// position
// DOMString - определяет позицию добавляемого элемента относительно элемента, вызвавшего метод. Должно соответствовать одному из следующих значений (чувствительно к регистру):
// 'beforebegin': до самого element (до открывающего тега).
// 'afterbegin': сразу после открывающего тега  element (перед первым потомком).
// 'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
// 'afterend': после element (после закрывающего тега).
// element
// Элемент, добавляемый в DOM-дерево.
// Возвращаемое значение
// Метод возвращает добавляемый элемент, либо null, если добавление элемента завершилось ошибкой.

           const r = new XMLHttpRequest(); 
           r.open('POST', 'server.php'); 

           r.setRequestHeader('Content-type', 'application/json');
           const formData = new FormData(forma);

           const object = {};
           formData.forEach( function(value, key) {
               object[key] = value;
            });
           const json = JSON.stringify(object);

           r.send(json);
      
           r.addEventListener('load', () => {
               if (r.status === 200) {
                   console.log(r.response);
                   // new function
                   showThanksModalSpecial(mess.success)
                  // statusnyimessage.textContent = mess.success;
                   forma.reset();
                //    setTimeout( ()   => {
                //        statusnyimessage.remove();
                //    }, 2000);
                statusnyimessage.remove();
                //for spinner /|\
                } else {
                    showThanksModalSpecial(mess.failure);
                    // new function  
                    // statusnyimessage.textContent = mess.failure;
                }
           });
        });
    }
    
    // Lesson 54 Отправка форм
    // Коррекция общения с клиентом после отправки формы
    // Добавление див, спинов etc

    function showThanksModalSpecial(mess) {
        // получаем div : modal__dialog, он ОДИН
/*         <div class="modal__dialog">
            <div class="modal__content">
            <form action="#">
                <div data-close="" class="modal__close">×</div>
                <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                <input required="" placeholder="Ваше имя" name="name" type="text" class="modal__input">
                <input required="" placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input">
                <button class="btn btn_dark btn_min">Перезвонить мне</button>
            </form>
        </div>
    </div> */
    const previousDivDialog = document.querySelector('.modal__dialog');
    //  add classv .hide for hiding and then showing the div.
    // css options have been added yet
    previousDivDialog.classList.add('hide');
    // теперь можно открыть данный информационный блок уже прописанными 
    // фунциями
    openModal();
/*     function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; 
        clearInterval(modalTimerId);
     } */
     //div modal is parent for div  modal__dialog, and so
     // we will see only empty box, as I understand
     // And by then we hve to and we can to create new content to add here
     const thanksModalDiv = document.createElement('div');
     // add to it some the same behavio
     thanksModalDiv.classList.add('modal__dialog');
     // and fill in by new content
     thanksModalDiv.innerHTML = `
     <div class="modal__content">
         <div  class="modal__close" data-close>×</div>
         <div class="modal__title">${mess}</div>
     </div>
     `;
     // to close [х] div is dynamic var,
     // and we have to change previous code to activate the button 'close'
     // we will use 'delegirovanie' events
    /* modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '')
        {
         closeModal();
        }
    }); */

     //upload the 'div' in our  parent 'div'  by append. method
     document.querySelector('.modal').append(thanksModalDiv);

     // after some time we have to return the first modal options
     // and here are
     setTimeout(() => {
         thanksModalDiv.remove(); // clearning
         previousDivDialog.classList.add('show'); // and fixing
         previousDivDialog.classList.remove('hide'); // turn off our visibilities
         closeModal(); // everything well done, close box "modal"
     }, 4000);





    }
});


