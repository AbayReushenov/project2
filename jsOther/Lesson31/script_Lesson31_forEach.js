const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

const deleteSomithing = (e) => { 
    console.log(e.target);
    console.log(e.type);
    };

btns.forEach(btn => { 
    btn.addEventListener('click', deleteSomithing, {once: true} );
});
// для назначения обработчика событий сразу на все кнопки
// мы используем .forEach
// важно , чтобы был .querySelectorAll
//              т.к. .querySelector даст ошибку


/* https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener */

/* Метод EventTarget.addEventListener() регистрирует определенный обработчик события, вызванного на EventTarget.

EventTarget должен быть либо существующим элементом в документе, либо Document, либо Window, либо любым другим объектом, который поддерживает события (такой, как XMLHttpRequest).

Синтаксис
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture, 
wantsUntrusted  ]); // только Gecko/Mozilla 
Параметры
type
Строка, представляющая тип прослушиваемого события.
listener
Объект, который принимает уведомление, когда событие указанного типа произошло. Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
options Необязательный
Объект options, который определяет характеристики объекта, прослушивающего событие. Доступны следующие варианты:
capture:  Boolean указывает, что события этого типа будут отправлены зарегистрированному слушателю listener перед отправкой на EventTarget, расположенный ниже в дереве DOM.
once: Boolean указывает, что слушатель должен быть вызван не более одного раза после добавления. Если true, слушатель автоматически удаляется при вызове.
passive:  Boolean указывает, что слушатель никогда не вызовет preventDefault(). Если все же вызов будет произведен, браузер должен игнорировать его и генерировать консольное предупреждение. Пример Улучшение производительности прокрутки с помощью passive true
 mozSystemGroup: Boolean указывает, что слушатель должен быть добавлен в системную группу. Доступно только в коде, запущенном в XBL или в расширении Chrome.
useCapture Необязательный
*/