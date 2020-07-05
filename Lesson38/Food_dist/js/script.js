window.addEventListener("DOMContentLoaded", () => {
    //tabs
    const tabs = document.querySelectorAll(".tabheader__item"), // табы
        tabsContent = document.querySelectorAll(".tabcontent"), // контент к табам
        tabsParent = document.querySelector(".tabheader__items"); //родитель табов, для делегирования

        //задача №1 
        // СКРЫТЬ ненужные табы
        function hideTabContent() {
            // обращаемся к контенту
            // и перебираем его запрещая вывод на экран
            tabsContent.forEach(item => {
                // item.style.display = 'none';
                item.classList.add("hide");
                item.classList.remove("show", 'fade');
            });

            // скрываем сами табы, которые не нужны
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
                // удален класс активности 'tabheader__item_active'
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
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => { 
            modal.classList.add('show');
            modal.classList.remove('hide');
            //    modal.classList.toggle('show');
          // как 2-й вариант
            document.body.style.overflow = 'hidden'; 
            //фиксируем экран от прокрутки
        });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        //    modal.classList.toggle('show');
         // как 2-й вариант 
        document.body.style.overflow = '';
        // разблокируем экран от прокрутки
    }

    modalCloseBtn.addEventListener('click', closeModal); 
    // closeModal не вызывается а передается!

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
            // здесь функция вызывается         
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            // в Google искать event.code для конкретной клавиши
            closeModal();
        }
    });
//----------
});