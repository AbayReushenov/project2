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

const deadline = '2020-07-05',
    t = Date.parse(deadline),
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

// 1593907200000
// 2020-07-05T00:00:00.000Z
// 2020-07-05T00:00:00.000Z
// 1593872995000
// 2020-07-04T14:29:55.561Z
// 1593872995561
// 6