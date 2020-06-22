// События в JavaScript
// обработчик события - функция Js
// пиишем событие сюда
// присваеваем переменной baton наш элемент 'button'

const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay')
;

// описываем действие - функцию на данное событие,
// парисваеваем функцию
/* 
baton.onclick = function() { // bad code
    alert('Click');          // if I have second    
};                          // obraschenie to 'baton'
                            // only "Second Click will action"
baton.onclick = function() {
    alert('Second Click');
};
 */
// Here .addEventListener method that allow you the action on 'ckick' many times!!!
/* 
baton.addEventListener('click', () => { // good method!!!
       alert('Click me') ; //the first argument - 'click' action, 
       // the second argument is 'call back' function,
       //that will action after 'click'
}); 

baton.addEventListener('click', () => { // good method!!!
    alert('Click me another time') ; //the first argument - 'click' action, 
    // the second argument is 'call back' function,
    //that will action after 'click'
}); 

baton.addEventListener('click', () => { // good method!!!
    alert('Click me and another time, please') ; //the first argument - 'click' action, 
    // the second argument is 'call back' function,
    //that will action after 'click'
});  
*/
// Another event - mouseenter
/* baton.addEventListener('mouseenter', () => { // each time
    console.log('Hello, hello!') ;      // in console you see  
                                        // 'Hello, hello!
                                         //
}); 
 */

 // передадим в callback function argument - event
 //или "Событие"
/* 
baton.addEventListener('mouseenter', (eventNomer01) => { // each time
    console.log(eventNomer01) ;      // in console you see  
                                        // 'Hello, hello!
                                         //
});  */
/* 
в консоли будет:
type: "mouseenter"
target: button

Все данные:

MouseEvent {isTrusted: true, screenX: 1184, screenY: 550, clientX: 110, clientY: 57, …}
altKey: false
bubbles: false
button: 0
buttons: 0
cancelBubble: false
cancelable: false
clientX: 110
clientY: 57
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 0
eventPhase: 0
fromElement: body
isTrusted: true
layerX: 110
layerY: 57
metaKey: false
movementX: 0
movementY: 0
offsetX: 103
offsetY: 50
pageX: 110
pageY: 57
path: (5) [button, body, html, document, Window]
relatedTarget: body
returnValue: true
screenX: 1184
screenY: 550
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: button
target: button
timeStamp: 1364.1799999968498
toElement: button
type: "mouseenter"
view: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
which: 0
x: 110
y: 57
__proto__: MouseEvent */

// испоользуем target
/* baton.addEventListener('mouseenter', (eventNomer01) => { // each time
    console.log(eventNomer01.target) ;      // in console you see  
                                        // 'target 
                                        // =
                                        // <button id="btn">Нажми меня</button>
                                         // 
    eventNomer01.target.remove();        // удалим его 
            // it is hidden as we enter on it our mouse pointer
}); 
 */

 // 2-nd var with 'click'
 /* 
baton.addEventListener('click', (eventNomer01) => { // each time
    console.log(eventNomer01.target) ;      // in console you see  
                                        // 'target 
                                        // =
                                        // <button id="btn">Нажми меня</button>
                                         // 
    eventNomer01.target.remove();        // удалим его 
            // it is hidden as we 'click' by our mouse pointer
}); 
 */
// create function for deleting somethig


//
// вариант с удалением
/* 
const deleteSomithing = (eventNomer02) => { // 
    eventNomer02.target.remove(); //
};
// после того как выполнится клик
// удалить кнопку
baton.addEventListener('click', deleteSomithing);

 */
//
//вариант  с восстановлением

/* const deleteSomithing = (eventNomer02) => { // 
    eventNomer02.target.remove(); //
};
 
baton.addEventListener('click', deleteSomithing);
baton.removeEventListener('click', deleteSomithing); // отменяет событие удаления
 */
/* 
const deleteSomithing = (eventNomer02) => { // 
    console.log(eventNomer02.target); //
};
 
baton.addEventListener('click', deleteSomithing); // назначаем обработчик и затем
baton.removeEventListener('click', deleteSomithing); // удаляем его
// на странице ничего не происходит
 */

 // усложним задачку
/* 
const deleteSomithing = (eventNomer02) => { // 
    console.log(eventNomer02.target); //
    console.log(eventNomer02.type); //
};
 
baton.addEventListener('click', deleteSomithing); // on 1 click
overlay.addEventListener('click', deleteSomithing); // we have 2 events
// 2 вызова на 1-ю кнопку
*/
// РФБОТА С ВСДЛЖЕННЫМИ СТРУКТУРАМИ
//.overlay

// change code on .currentTarget

const deleteSomithing = (eventNomer02) => { // 
    console.log(eventNomer02.currentTarget); // при всплытии 
                                            // теперь вызывается 1 раз ,
                                            // срабатывает верхняя кнопка
    console.log(eventNomer02.type); // а затем внутренняя overlay
   
};
 
/* baton.addEventListener('click', deleteSomithing); // on 1 click
overlay.addEventListener('click', deleteSomithing);// we have 2 events
 */

//
const link1 = document.querySelector('a');
// для     	<a href="https://www.youtube.com/">https://www.youtube.com/</a>
// чтобы не вызывался

link1.addEventListener('click', function(eventNew) {
    eventNew.preventDefault(); // стой не надо переходить после ссылки,
    // вставляется в самом начале
    console.log(eventNew.target);
});

//элемент 'button' вызываемый поqueryySelectAll - псевдомассив
// и нельзя использовать его для обращения ко всем эементам !!!
// необходимо делать цикл обращений 
// можно через for
// или .forEach
// вместо
/* baton.addEventListener('click', deleteSomithing); // on 1 click
overlay.addEventListener('click', deleteSomithing);// we have 2 events
 */
// пишем:
btns.forEach(btn => {   // можно также for of
    btn.addEventListener('click', deleteSomithing, {once: true}  ); // теперь она работает только 1 раз
});