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
   

});