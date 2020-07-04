//Глобальный обработчик событий DOM Content loaded
// Страница: DOMContentLoaded, load, beforeunload, unload
// У жизненного цикла HTML-страницы есть три важных события:

// DOMContentLoaded – браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, 
//такие как картинки <img> и стили, могут быть ещё не загружены.
// load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).
// beforeunload/unload – пользователь покидает страницу.
// Каждое из этих событий может быть полезно:

// Событие DOMContentLoaded – DOM готов, так что обработчик может искать DOM-узлы и инициализировать интерфейс.
// Событие load – внешние ресурсы были загружены, стили применены, размеры картинок известны и т.д.
// Событие beforeunload – пользователь покидает страницу. Мы можем проверить, сохранил ли он изменения 
//и спросить, на самом ли деле он хочет уйти.
// unload – пользователь почти ушёл, но мы всё ещё можем запустить некоторые операции, например, отправить статистику.
// Давайте рассмотрим эти события подробнее.

// DOMContentLoaded
// Событие DOMContentLoaded срабатывает на объекте document.

// Мы должны использовать addEventListener, чтобы поймать его:

// document.addEventListener("DOMContentLoaded", ready);
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

    const deadline = '2020-07-05';
    const t = Date.parse(deadline),
          t1 = new Date(deadline),
          t2 = new Date(t),
          s = Date.parse(new Date()),
          d = new Date(),
          d1 = d.getTime();
          console.log(t);  // t = Date.parse(deadline), => 1589155200000
          console.log(t1);  //t1 = new Date(deadline),  => 2020-05-11T00:00:00.000Z
          console.log(t2);  //t2 = new Date(t),         => 2020-05-11T00:00:00.000Z
          console.log(s);  // s = Date.parse(new Date()); => 1593844649000
          console.log(d);  //  d = new Date();   => 2020-07-04T06:37:29.400Z
          console.log(d1);  // d1 = d.getTime(); => 1593844649000
          const xt = Date.parse(deadline) - Date.parse(new Date()) - 3 * 60 * 60 * 1000;
          console.log( Math.floor(xt / (1000 * 60 * 60) % 24));


    function getTimeRemining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()) - 3 * 60 * 60 * 1000, 
        // скорректируем для учета разницы с UTF на 3 часа
              days =  Math.floor( t / (1000 * 60 * 60 * 24)),  //целых дней
              hours = Math.floor( t / (1000 * 60 * 60 ) % 24 ),    // остаток часов от дней
              minutes = Math.floor( t / (1000 * 60 ) % ( 60) ), // остаток минут от часов
              seconds = Math.floor( t / (1000 ) % ( 60 ) ); // остаток секунд от минут
        // console.log(t);
        // console.log(days);
        // console.log(hours);
        // console.log(minuts);
        // console.log(seconds);
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
});